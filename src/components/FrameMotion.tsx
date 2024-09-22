// components/FadeInSection.tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInSectionProps {
  children: ReactNode;
  linkId?: string;
}

export default function FadeInSection({
  children,
  linkId,
}: FadeInSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 90 }} // Começa invisível e deslocado para baixo
      whileInView={{ opacity: 1, y: 0 }} // Anima para visível e posição normal
      transition={{ duration: 0.6 }} // Duração da animação
      viewport={{ once: true }} // Anima apenas uma vez ao aparecer
      className="w-full"
      id={linkId}
    >
      {children}
    </motion.div>
  );
}
