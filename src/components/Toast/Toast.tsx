"use client";
import React from "react";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Toast.module.css";

export interface ToastProps {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  duration?: number;
  onClose?: () => void;
  show?: boolean;
}

export const Toast = ({
  message,
  type = "info",
  duration = 3000,
  onClose,
  show = true,
}: ToastProps) => {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => onClose?.(), duration);
    return () => clearTimeout(timer);
  }, [duration, onClose, show]);

  return (
    <div className={styles.container} aria-live="polite" aria-atomic="true">
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className={`${styles.toast} ${styles[type]}`}
            role="status"
          >
            <span>{message}</span>
            {onClose && (
              <button
                onClick={onClose}
                className={styles.close}
                aria-label="Close"
              >
                ✖
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
