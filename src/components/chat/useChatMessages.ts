import { useState, useRef, useCallback } from "react";
import { getMockResponse, simulateStream } from "./mockChat";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export function useChatMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const cancelRef = useRef<(() => void) | null>(null);

  const sendMessage = useCallback((text: string) => {
    const userMsg: Message = { id: crypto.randomUUID(), role: "user", content: text };
    const assistantId = crypto.randomUUID();
    const response = getMockResponse(text);

    setMessages((prev) => [...prev, userMsg, { id: assistantId, role: "assistant", content: "" }]);
    setIsStreaming(true);

    cancelRef.current = simulateStream(
      response,
      (chunk) => {
        setMessages((prev) =>
          prev.map((m) => (m.id === assistantId ? { ...m, content: m.content + chunk } : m))
        );
      },
      () => setIsStreaming(false)
    );
  }, []);

  const reset = useCallback(() => {
    cancelRef.current?.();
    setMessages([]);
    setIsStreaming(false);
  }, []);

  return { messages, isStreaming, sendMessage, reset };
}
