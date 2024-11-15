import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
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
    return (
      <div className="prose dark:prose-invert">
        <Card>
          {/* <CardHeader>
            <CardTitle>Your Plan</CardTitle>
          </CardHeader> */}
          <CardContent>
            <ReactMarkdown>Generating...</ReactMarkdown>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!content) {
    return <p>Need to generate a plan first!</p>;
  }

  return (
    <div className="prose dark:prose-invert min-w-full justify-center">
      <Card className="">
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
