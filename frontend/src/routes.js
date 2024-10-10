import React, { lazy, Suspense, useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion"; // Ensure framer-motion is imported

import Posts from "./views/Posts/index.js";

const Router = () => {
  const SuspenseLoading = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
      let timeout = setTimeout(() => setShow(true), 300);
      return () => {
        clearTimeout(timeout);
      };
    }, []);

    return (
      <>
        <AnimatePresence>
          {show && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div></div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  };

  return (
    <Suspense fallback={<SuspenseLoading />}>
      <Routes>
        {/* Add more routes here */}
        <Route path="/" element={<Posts />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
