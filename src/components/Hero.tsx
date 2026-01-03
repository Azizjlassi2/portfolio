import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon, TerminalIcon, DatabaseIcon, CpuIcon, LayersIcon, CloudIcon, ServerIcon, BrainCircuitIcon } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-zinc-950">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

      <div className="relative max-w-5xl mx-auto w-full">
        <div className="flex flex-col items-start gap-8">
          {/* Status Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono text-zinc-400">
              Available for opportunities
            </span>
          </motion.div>

          {/* Main Title */}
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white"
            >
              Mohamed Aziz Jlassi
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl lg:text-4xl text-zinc-400 font-light"
            >
              Software Engineer -{' '}
              <span className="text-indigo-400">Backend & AI Systems</span>
            </motion.h2>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl text-lg text-zinc-500 leading-relaxed"
          >
            I design scalable architectures and high-performance REST APIs,
            and integrate deep learning models into production-ready applications.
            My approach emphasizes reliability, maintainability, and real-world impact.
          </motion.p>

          {/* Tech Stack Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-zinc-300 text-sm font-mono">
              <LayersIcon className="w-4 h-4 text-indigo-400" />
              <span>API Design & REST Architecture</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-zinc-300 text-sm font-mono">
              <CloudIcon className="w-4 h-4 text-indigo-400" />
              <span>AWS Cloud</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-zinc-300 text-sm font-mono">
              <ServerIcon className="w-4 h-4 text-indigo-400" />
              <span>Docker & CI/CD</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-zinc-300 text-sm font-mono">
              <BrainCircuitIcon className="w-4 h-4 text-indigo-400" />
              <span>Deep Learning</span>
            </div>
          </motion.div>

          {/* CTA Buttons – Added Resume Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-8"
          >


            <a
              href="src\public\Jlassi Mohamed Aziz CV FR.pdf"
              download="Mohamed_Aziz_Jlassi_Resume.pdf"
              className="flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <ArrowDownIcon className="w-5 h-5" />
              Download Resume
            </a>

            <a
              href="#projects"
              className="px-8 py-3 bg-zinc-900 text-white font-semibold rounded-lg border border-zinc-800 hover:bg-zinc-800 transition-colors"
            >
              View Projects
            </a>
          </motion.div>
        </div>
      </div>

      {/* Optional subtle scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 flex flex-col items-center gap-2"
      >
        <span className="text-sm">Scroll to explore</span>
        <ArrowDownIcon className="w-5 h-5 animate-bounce" />
      </motion.div>
    </section>
  );
}