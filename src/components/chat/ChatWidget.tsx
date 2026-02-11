import { useState } from "react";
import { useLocation } from "react-router-dom";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const ANAM_SHARE_TOKEN = "83d9f32d-b89d-4591-be65-347c6a9af684";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isHidden = location.pathname === "/chat";

  if (isHidden) return null;

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow"
          >
            <MessageCircle className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 flex h-[520px] w-[400px] flex-col overflow-hidden rounded-2xl border bg-background shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-primary px-4 py-3 text-primary-foreground">
              <div>
                <p className="font-semibold text-sm">Anna — City Assistant</p>
                <p className="text-xs opacity-70">Speak or type to get help</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => setOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Anam iframe */}
            <iframe
              src={`https://lab.anam.ai/frame/${ANAM_SHARE_TOKEN}`}
              className="flex-1 border-0"
              allow="microphone; camera"
              title="Anna — Rheinstadt City Assistant"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
