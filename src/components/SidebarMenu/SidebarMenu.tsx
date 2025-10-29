"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./SidebarMenu.module.css";

export interface MenuItem {
  label: string;
  children?: MenuItem[];
}

export interface SidebarMenuProps {
  items: MenuItem[];
  open: boolean;
  onClose: () => void;
}

export const SidebarMenu = ({ items, open, onClose }: SidebarMenuProps) => {
  return (
    <AnimatePresence>
      {open && (
        <div className={styles.overlay} onClick={onClose}>
          <motion.aside
            className={styles.sidebar}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {items.map((item, i) => (
              <details key={i} className={styles.item}>
                <summary>{item.label}</summary>
                {item.children && (
                  <div className={styles.submenu}>
                    {item.children.map((sub, j) => (
                      <div className={styles.subitem} key={j}>
                        {sub.label}
                      </div>
                    ))}
                  </div>
                )}
              </details>
            ))}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
};
