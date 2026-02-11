import { useState } from "react";
import { useLocation } from "react-router-dom";
import { MessageCircle, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const ANAM_FRAME_URL = "https://lab.anam.ai/frame/1l71MZeP6pYr4qjSt8l_6";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isHidden = location.pathname === "/chat";

  if (isHidden) return null;

  return (
    <>
      <AnimatePresence>
        {!open && (
          <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            {/* Tooltip label */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ delay: 1, duration: 0.4 }}
              className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-primary-foreground shadow-lg"
            >
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-semibold">Talk to Anna — AI Assistant</span>
            </motion.div>

            {/* FAB with pulse ring */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={() => setOpen(true)}
              className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-xl hover:shadow-2xl transition-shadow"
            >
              {/* Pulse ring */}
              <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-30" />
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 animate-pulse opacity-20" />
              <MessageCircle className="relative h-7 w-7" />
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 flex h-[520px] w-[400px] flex-col overflow-hidden rounded-2xl border-2 border-blue-500/30 bg-background shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-white">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Anna — AI City Assistant</p>
                  <p className="text-xs opacity-80">Powered by AI • Speak or type</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Anam iframe */}
            <iframe
              src={ANAM_FRAME_URL}
              className="flex-1 border-0"
              allow="microphone"
              title="Anna — Rheinstadt City Assistant"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
