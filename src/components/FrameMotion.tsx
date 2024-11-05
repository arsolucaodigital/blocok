// components/FadeInSection.tsx
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInSectionProps {
  children: ReactNode;
  linkId?: string;
  duration: number;
  position: number;
}

export default function FadeInSection({
  children,
  linkId,
  duration,
  position,
}: FadeInSectionProps) {
  return (
    <AnimatePresence mode="wait" >
      <motion.div
        initial={{ opacity: 0, y: position }} // Começa invisível e deslocado para baixo
        whileInView={{ opacity: 1, y: 0 }} // Anima para visível e posição normal
        transition={{ duration: duration }} // Duração da animação
        viewport={{ once: true }} // Anima apenas uma vez ao aparecer
        className="w-full"
        id={linkId}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function FadeInSectionX({
  children,
  linkId,
  duration,
  position,
}: FadeInSectionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, x: position }} // Começa invisível e deslocado para o lado
        whileInView={{ opacity: 1, x: 0 }} // Anima para visível e posição normal
        transition={{ duration: duration }} // Duração da animação
        viewport={{ once: true }} // Anima apenas uma vez ao aparecer
        className="w-full"
        id={linkId}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
