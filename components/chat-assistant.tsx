"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 h-16 w-16 rounded-full bg-primary border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center cursor-pointer hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
        aria-label="打开个人秘书"
      >
        <MessageCircle className="h-8 w-8 text-black" />
      </motion.button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-6xl w-[96vw] h-[90vh] p-0 border-4 border-black pixel-card rounded-none flex flex-col bg-white dark:bg-background">
          <DialogHeader className="px-6 py-4 border-b-4 border-black bg-primary">
            <DialogTitle className="text-xl font-bold">个人秘书</DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-hidden min-h-0 bg-white dark:bg-background">
            <iframe
              src="https://udify.app/chatbot/BMskfJDMXQfmiwJh"
              style={{ width: "100%", height: "100%", minHeight: "0" }}
              frameBorder="0"
              allow="microphone"
              className="w-full h-full border-0"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
