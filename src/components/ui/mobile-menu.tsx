"use client";

import type { ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { DURATION, EASE, STAGGER } from "@/constants/motion";

type MobileMenuLink = { id: string; href: string; label: string };

type MobileMenuProps = {
  id: string;
  isOpen: boolean;
  links: MobileMenuLink[];
  onNavigate: () => void;
  ariaLabel: string;
  footer?: ReactNode;
};

export const MobileMenu = ({ id, isOpen, links, onNavigate, ariaLabel, footer }: MobileMenuProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        id={id}
        data-lenis-prevent
        className="fixed inset-0 z-40 flex flex-col justify-between bg-background px-5 pt-28 pb-10 lg:hidden"
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={{ clipPath: "inset(0 0 0% 0)" }}
        exit={{ clipPath: "inset(0 0 100% 0)" }}
        transition={{ duration: DURATION.base, ease: EASE.inOutQuart }}
      >
        <nav aria-label={ariaLabel}>
          <ul className="flex flex-col gap-2">
            {links.map((link, index) => (
              <li key={link.id} className="overflow-hidden">
                <motion.a
                  href={link.href}
                  onClick={onNavigate}
                  className="block text-5xl font-medium tracking-[-0.04em]"
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: DURATION.base,
                    ease: EASE.outExpo,
                    delay: DURATION.fast + index * STAGGER.items,
                  }}
                >
                  {link.label}
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>
        {footer}
      </motion.div>
    )}
  </AnimatePresence>
);
