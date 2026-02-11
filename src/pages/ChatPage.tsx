import { useRef, useEffect } from "react";
import { RotateCcw, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ChatMessage from "@/components/chat/ChatMessage";
import ChatInput from "@/components/chat/ChatInput";
import { useChatMessages } from "@/components/chat/useChatMessages";

const starterQuestions = [
  "How do I register my residence?",
  "What events are happening this week?",
  "I'm a new international student — where do I start?",
  "How do I apply for a residence permit?",
  "Tell me about public transport",
  "How does waste recycling work?",
];

export default function ChatPage() {
  const { messages, isStreaming, sendMessage, reset } = useChatMessages();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Layout>
      <div className="container flex flex-col" style={{ height: "calc(100vh - 8rem)" }}>
        {/* Header */}
        <div className="flex items-center justify-between border-b py-4">
          <div>
            <h1 className="font-display text-2xl font-bold">Ask Anna</h1>
            <p className="text-sm text-muted-foreground">Ask anything about life in Rheinstadt</p>
          </div>
          <Button variant="outline" size="sm" onClick={reset}>
            <RotateCcw className="mr-2 h-4 w-4" /> New Chat
          </Button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto py-6 space-y-4">
          {messages.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <MessageCircle className="h-8 w-8" />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold">Hello! 👋</h2>
                <p className="mt-2 text-muted-foreground max-w-md">
                  I'm Anna, your Rheinstadt city assistant. I can help with city services, immigration, student life, events, transport, and more.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2 max-w-lg">
                {starterQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="rounded-full border px-4 py-2 text-sm hover:bg-secondary transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            messages.map((m) => <ChatMessage key={m.id} role={m.role} content={m.content} />)
          )}
        </div>

        <ChatInput onSend={sendMessage} disabled={isStreaming} placeholder="Ask about Rheinstadt..." />
      </div>
    </Layout>
  );
}
