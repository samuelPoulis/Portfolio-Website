// components/GPTBuddy.tsx
"use client";

import React, { useState } from "react";
import { Audiowide } from "next/font/google";
const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const GPTBuddy: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [messages, setMessages] = useState<
    Array<{ role: "user" | "assistant"; content: string }>
  >([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setError("");
    setResponse("");

    try {
      const res = await fetch("/api/chatgpt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to fetch the response.");
      }

      const data = await res.json();
      const message = data.choices[0].message.content.trim();
      setResponse(message);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An error occurred while fetching the response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="A.I. Buddy"
      style={{
        flex: "center",
        padding: "2em",
      }}
    >
      <h2
        style={{
          flex: "center",
          textAlign: "center",
          padding: "1em",
          fontSize: "1.5em",
          color: "white",
          textDecoration: "underline",
        }}
        className={audiowide.className}
      >
        Sam's A.I. Buddy
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask anything about me or my projects!"
          rows={5}
          cols={50}
          disabled={loading}
          className="resize-none rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2  p-1"
          style={{
            padding: "0.5em",
            fontSize: "1em",
            width: "80%",
            maxHeight: "10em",
            minHeight: "3em",
            outlineColor: "#f87171",
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            color: "white",
            padding: "0.5em 1em",
            backgroundColor: "#f87171",
            border: "gray",
          }}
          className="rounded-md bg-red-400 hover:bg-red-500 active:bg-red-600 focus:outline-none text-white py-2 px-4 rounded transition-transform duration-200 ease-in-out transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
        >
          {loading ? "Thinking..." : "Send"}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {response && (
        <div className="response">
          <h3>Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default GPTBuddy;
