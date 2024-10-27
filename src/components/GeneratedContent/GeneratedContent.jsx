import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./GeneratedContent.css";

export default function Results({ content, loading, error }) {
  if (loading) {
    return <p>Generating...</p>;
  } 

  if (error) {
    return <p>{error}</p>;
  }

  if (!content) {
    return <p>No results found!</p>;
  }

  return <ReactMarkdown>{content}</ReactMarkdown>;
};
