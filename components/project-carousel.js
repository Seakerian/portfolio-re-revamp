"use client";

import { projects } from "@/public/data/project-data";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ProjectTile from "./project-tile";

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  const nextProject = () => {
    setHasInteracted(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setHasInteracted(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <button onClick={prevProject}>
        <ChevronLeft fontSize="large" />
      </button>
      <div className="w-auto h-[300px] ">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={
              hasInteracted ? { opacity: 0, x: 50 } : { opacity: 1, x: 0 }
            }
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ProjectTile {...projects[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <button onClick={nextProject}>
        <ChevronRight fontSize="large" />
      </button>
    </div>
  );
}
