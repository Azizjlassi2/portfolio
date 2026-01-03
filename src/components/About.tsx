import React from 'react';
import { motion } from 'framer-motion';
export function About() {
  return <section className="py-24 px-6 bg-zinc-950 border-t border-zinc-900">
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="space-y-8">
        <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-wider">
          About Me
        </h2>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-zinc-200">
            Software Engineer focused on backend systems and applied AI.
            I combine strong backend engineering expertise (Django, Spring Boot, Express.js) with machine learning and deep learning to design scalable, high-performance, production-ready applications.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mt-12 text-zinc-400 text-base">
            <p>
              Currently a software engineering student, I build web and mobile applications that integrate robust RESTful APIs and AI models. Through hands-on projects, I have developed strong autonomy, engineering rigor, and the ability to work efficiently in demanding, collaborative environments.
            </p>
            <p>
              I cover the full development lifecycle — from designing scalable architectures and clean system abstractions to deployment using Docker and CI/CD pipelines, with a strong focus on code quality, documentation, and long-term maintainability.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>;
}