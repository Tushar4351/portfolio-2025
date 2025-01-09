"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [stage, setStage] = useState<
    "loading" | "split" | "forming" | "zoom" | "complete"
  >("loading");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      const startTime = Date.now();
      const duration = 2000;

      const updateProgress = () => {
        const elapsed = Date.now() - startTime;
        const newProgress = Math.min((elapsed / duration) * 100, 100);
        setProgress(newProgress);

        if (newProgress < 100) {
          requestAnimationFrame(updateProgress);
        } else {
          setTimeout(() => setStage("split"), 800);
        }
      };

      requestAnimationFrame(updateProgress);

      await new Promise((resolve) => setTimeout(resolve, 2800));
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStage("forming");
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStage("zoom");
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStage("complete");
      setLoading(false);
    };
    sequence();
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 h-screen flex items-center justify-center bg-black"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-[90vw] max-w-[320px]">
              {stage === "loading" && <LoadingBar progress={progress} />}
              {(stage === "split" ||
                stage === "forming" ||
                stage === "zoom") && <SplitAnimation stage={stage} />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: stage === "complete" ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
}

function LoadingBar({ progress }: { progress: number }) {
  return (
    <div className="relative h-[3vh] min-h-[32px] max-h-[64px] w-full overflow-hidden rounded-lg bg-white/10">
      <motion.div
        className="absolute inset-0 origin-left bg-white"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: progress / 100 }}
        transition={{ duration: 0.1, ease: "linear" }}
      />
    </div>
  );
}

function SplitAnimation({ stage }: { stage: "split" | "forming" | "zoom" }) {
  return (
    <div className="relative h-[3vh] min-h-[32px] max-h-[64px] w-full">
      {/* Left piece */}
      <motion.div
        className="absolute bg-white rounded-l-lg"
        initial={{
          width: "50%",
          height: "100%",
          left: 0,
          x: 0,
          rotate: 0,
        }}
        animate={
          stage === "split"
            ? {
                x: "-10%",
              }
            : stage === "forming"
            ? {
                x: "50%",
              }
            : {
                scale: 20,
                opacity: 0,
              }
        }
        transition={{
          duration: 0.8,
          ease: [0.6, 0.01, -0.05, 0.9],
          opacity: { duration: 0.8 },
        }}
      />

      {/* Right piece */}
      <motion.div
        className="absolute bg-white rounded-r-lg"
        initial={{
          width: "50%",
          height: "100%",
          right: 0,
          x: 0,
        }}
        animate={
          stage === "split"
            ? {
                x: "10%",
              }
            : stage === "forming"
            ? {
                x: "-50%",
                y: "299%",
                rotate: 90,
              }
            : {
                scale: 20,
                opacity: 0,
              }
        }
        transition={{
          duration: 0.8,
          ease: [0.6, 0.01, -0.05, 0.9],
          opacity: { duration: 0.8 },
        }}
      />
    </div>
  );
}
