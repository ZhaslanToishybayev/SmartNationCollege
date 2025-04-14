"use client";

import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {useState} from "react";
import {collegeQueryChatbot} from "@/ai/flows/college-query-chatbot";
import {Card, CardContent} from "@/components/ui/card";
import {ScrollArea} from "@/components/ui/scroll-area";

export const CollegeChatbot = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleQuerySubmit = async () => {
    setIsLoading(true);
    try {
      const result = await collegeQueryChatbot({query: query});
      setResponse(result?.response || "No response received.");
    } catch (error) {
      console.error("Chatbot error:", error);
      setResponse("Error processing your query. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Textarea
        placeholder="Ask me anything about the college..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="resize-none"
      />
      <Button onClick={handleQuerySubmit} disabled={isLoading}>
        {isLoading ? "Loading..." : "Submit Query"}
      </Button>
      {response && (
        <Card>
          <CardContent>
            <ScrollArea className="h-40">
              {response}
            </ScrollArea>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
