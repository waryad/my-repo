import React from "react";
import { motion } from "framer-motion";

const Content = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      {/* Your page content goes here */}
    </motion.div>
  );
};

export default Content;
