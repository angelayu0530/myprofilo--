import React from "react";
import { motion } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";

function About() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(to bottom, #916c48 0%, #5c3b1e 100%)",
          border: "4px solid #3c2f1c",
          boxShadow:
            "inset -4px -4px 0 #3c2f1c, inset 4px 4px 0 #af8058, 0 4px #2a1f14, 0 8px #1a130b",
          borderRadius: "0px",
          color: "#fff",
          padding: "2rem",
          fontFamily: "MinecraftRegular, sans-serif",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          boxSizing: "border-box",
          paddingTop: "6rem",
        }}
      >
        <div className="card-header" style={{ textAlign: "center", maxWidth: "800px" }}>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Welcome to Angela's World
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            I am a passionate software developer with a love for coding and
            technology. I enjoy creating web applications and exploring new
            technologies.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            In my free time, I like to play video games such as Marvel Rivals
            and Minecraft. I am currently Grandmaster 2 in Marvel Rivals.
          </motion.p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          fontSize: "2rem",
          color: "#fff",
        }}
      >
        <div style={{ marginTop: "1rem" }}>
          <a
            href="https://github.com/angelayu0530"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            <FaGithubSquare size={64} />
          </a>
        </div>
      </motion.div>
    </>
  );
}

export default About;