"use client";

import React, { useState } from "react";
import Link from "next/link";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [generated, setGenerated] = useState("");
  const [error, setError] = useState("");

  const generate = async () => {
    if (!url || !shorturl) {
      setError("Both fields are required!");
      return;
    }

    setError(""); 
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shorturl }),
      });

      const result = await response.json();

      if (result.success) {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        setUrl("");
        setShorturl("");
      } else {
        setError(result.message || "An error occurred while generating the short URL.");
      }
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-2">
      <h1 className="font-bold text-2xl">Generate Your Short URL</h1>
      <div className="flex flex-col gap-5">
        <input
          type="text"
          value={url}
          className="p-2 focus:outline-purple-600 rounded-md"
          placeholder="Enter your long URL"
          onChange={(e) => setUrl(e.target.value)}
        />

        <input
          type="text"
          value={shorturl}
          className="p-4 py-2 focus:outline-purple-600 rounded-md"
          placeholder="Enter your preferred short URL"
          onChange={(e) => setShorturl(e.target.value)}
        />

        <button
          className="bg-purple-700 rounded-lg shadow-lg py-1 px-2 my-3 text-white"
          onClick={generate}
        >
          Generate
        </button>
      </div>

      {error && <span className="text-red-600 font-bold">{error}</span>}

      {generated && (
        <div className="mt-4">
          <span className="font-bold text-lg">Your Link:</span>
          <Link href={generated} target="_blank">
            <a className="text-blue-600 underline">{generated}</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Shorten;
