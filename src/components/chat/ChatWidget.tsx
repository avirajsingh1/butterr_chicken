import { useState } from "react";
import { useLocation } from "react-router-dom";
import { X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const ANAM_FRAME_URL = "https://lab.anam.ai/frame/1l71MZeP6pYr4qjSt8l_6";

const AVATAR_URL = "https://lab.anam.ai/persona_thumbnails/astrid_desk.png";

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
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-white shadow-lg cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <Sparkles className="h-4 w-4 animate-pulse" />
              <span className="text-sm font-bold tracking-wide">Talk to Anna — AI Assistant</span>
            </motion.div>

            {/* Avatar FAB */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={() => setOpen(true)}
              className="group relative flex h-20 w-20 items-center justify-center rounded-full shadow-2xl hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] transition-all duration-300"
            >
              {/* Animated rings */}
              <span className="absolute inset-[-6px] rounded-full border-[3px] border-blue-400 animate-ping opacity-20" />
              <span className="absolute inset-[-4px] rounded-full border-2 border-indigo-400 animate-pulse opacity-40" />
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 opacity-100" />

              {/* Avatar image */}
              <img
                src={AVATAR_URL}
                alt="Anna AI Assistant"
                className="relative h-[72px] w-[72px] rounded-full border-[3px] border-white object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Online indicator */}
              <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-green-400 animate-pulse" />
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
