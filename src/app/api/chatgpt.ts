// pages/api/chatgpt.js

// pages/api/chatgpt.ts

import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  choices?: Array<{ message: { content: string } }>;
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { prompt } = req.body;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'Error communicating with OpenAI API');
    }

    res.status(200).json(data);
  } catch (error: any) {
    console.error('Error communicating with OpenAI API:', error);
    res.status(500).json({ error: error.message });
  }
}

  