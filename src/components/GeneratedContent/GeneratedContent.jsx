import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./GeneratedContent.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

  return (
    <div className="prose dark:prose-invert">
      <Card>
        <CardHeader>
          <CardTitle>Your Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <ReactMarkdown>{content}</ReactMarkdown>

        </CardContent>
        
      </Card>
    </div>
  );
}
