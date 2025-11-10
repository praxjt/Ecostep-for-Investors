"use client";

import * as React from "react";
import { useState, useEffect, createContext, useContext, useMemo } from "react";
import { motion } from "framer-motion";

// Utility: random value generator
const random = (min, max) => Math.random() * (max - min) + min;

// Sparkle hook
const useSparkles = ({
  colors = { first: "#9E7AFF", second: "#FE8BBB" },
  sparkleCount = 20,
  sparkleSize = 12,
} = {}) => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const generateSparkle = () => {
      const color = Math.random() > 0.5 ? colors.first : colors.second;
      return {
        id: crypto.randomUUID(),
        color,
        size: random(sparkleSize * 0.7, sparkleSize * 1.3),
        style: {
          top: `${random(0, 100)}%`,
          left: `${random(0, 100)}%`,
          animationDelay: `${random(0, 2.5)}s`,
        },
      };
    };

    const newSparkles = Array.from({ length: sparkleCount }, generateSparkle);
    setSparkles(newSparkles);
  }, [sparkleCount, colors.first, colors.second, sparkleSize]);

  return sparkles;
};

// Context for sparkles
const SparklesContext = createContext(null);

// Single sparkle element
const SparkleInstance = React.memo(({ size, color, style }) => {
  const path = "M120 80L100 0 80 80 0 100l80 20 20 80 20-80 80-20-80-20z";
  return (
    <motion.span
      className="absolute pointer-events-none z-10"
      style={style}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: [0, 1, 0],
        scale: 1,
        rotate: [0, 90, 180],
      }}
      transition={{
        duration: random(1.5, 2.5),
        ease: "easeInOut",
        repeat: Infinity,
        delay: parseFloat(style.animationDelay),
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={path} fill={color} />
      </svg>
    </motion.span>
  );
});
SparkleInstance.displayName = "SparkleInstance";

// Wrapper for all sparkles
const SparklesWrapper = React.memo(() => {
  const context = useContext(SparklesContext);
  if (!context) return null;
  const { sparkles } = context;

  return (
    <>
      {sparkles.map((sparkle) => (
        <SparkleInstance
          key={sparkle.id}
          size={sparkle.size}
          color={sparkle.color}
          style={sparkle.style}
        />
      ))}
    </>
  );
});
SparklesWrapper.displayName = "SparklesWrapper";

// ✅ Final component
export const SparklesText = ({
  as: Component = "h1",
  children,
  className = "",
  ...sparkleOptions
}) => {
  const sparkles = useSparkles(sparkleOptions);
  const contextValue = useMemo(() => ({ sparkles }), [sparkles]);

  return (
    <SparklesContext.Provider value={contextValue}>
      <Component className={`relative inline-block ${className}`}>
        <SparklesWrapper />
        <span className="relative z-20">{children}</span>
      </Component>
    </SparklesContext.Provider>
  );
};

export default SparklesText;
