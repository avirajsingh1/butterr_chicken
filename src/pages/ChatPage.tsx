import { useRef, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Mic, MessageSquareText } from "lucide-react";
import ChatInput from "@/components/chat/ChatInput";
import ChatMessage from "@/components/chat/ChatMessage";
import { useChatMessages } from "@/components/chat/useChatMessages";

const ANAM_FRAME_URL = "https://lab.anam.ai/frame/1l71MZeP6pYr4qjSt8l_6";

export default function ChatPage() {
  const { messages, isStreaming, sendMessage } = useChatMessages();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  return (
    <Layout>
      <div className="container flex flex-col" style={{ height: "calc(100vh - 8rem)" }}>
        {/* Header */}
        <div className="flex items-center justify-between border-b py-4">
          <div>
            <h1 className="font-display text-2xl font-bold">Ask Anna</h1>
            <p className="text-sm text-muted-foreground">Your AI-powered city assistant — speak or type</p>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="voice" className="flex flex-1 flex-col overflow-hidden py-4">
          <TabsList className="mx-auto mb-4">
            <TabsTrigger value="voice" className="gap-2">
              <Mic className="h-4 w-4" /> Voice Agent
            </TabsTrigger>
            <TabsTrigger value="chat" className="gap-2">
              <MessageSquareText className="h-4 w-4" /> Text Chat
            </TabsTrigger>
          </TabsList>

          <TabsContent value="voice" className="flex-1 overflow-hidden mt-0">
            <iframe
              src={ANAM_FRAME_URL}
              className="h-full w-full rounded-xl border-0 shadow-lg"
              allow="microphone"
              title="Anna — Rheinstadt City Assistant"
            />
            <p className="mt-2 text-center text-xs text-muted-foreground">
              ⚠ Voice agent availability may be limited due to token usage
            </p>
          </TabsContent>

          <TabsContent value="chat" className="flex flex-1 flex-col overflow-hidden mt-0 rounded-xl border shadow-lg">
            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto p-4">
              {messages.length === 0 && (
                <div className="flex h-full items-center justify-center text-center text-muted-foreground">
                  <div>
                    <MessageSquareText className="mx-auto mb-3 h-10 w-10 opacity-40" />
                    <p className="font-medium">Start a conversation with Anna</p>
                    <p className="mt-1 text-sm">Ask about city services, events, transport, and more.</p>
                  </div>
                </div>
              )}
              {messages.map((msg) => (
                <ChatMessage key={msg.id} role={msg.role} content={msg.content} />
              ))}
            </div>
            <ChatInput onSend={sendMessage} disabled={isStreaming} />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
