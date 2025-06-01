import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionCircle = motion.circle;

export default function ParticleField() {
  const particles = Array.from({ length: 30 }).map((_, i) => {
    const cx = 10 + Math.random() * 80;
    const cy = 10 + Math.random() * 80;
    const r = 1 + Math.random() * 2;
    const fill = `rgba(${100 + Math.random() * 155}, ${100 + Math.random() * 155}, 255, ${0.3 + Math.random() * 0.7})`;

    return (
      <MotionCircle
        key={i}
        cx={cx}
        cy={cy}
        r={r}
        fill={fill}
        animate={{
          y: ["0%", "-4%", "0%"],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2 + Math.random() * 3,
          repeat: Infinity,
          repeatType: "loop",
          delay: Math.random() * 2,
          ease: "easeInOut",
        }}
      />
    );
  });

  return (
    <Box position="absolute" right="10%" top="20%" opacity={0.9}>
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        <g>{particles}</g>
      </svg>
    </Box>
  );
}