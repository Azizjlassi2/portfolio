import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCapIcon } from 'lucide-react';
const education = [{
  degree: 'Engineering Degree in Computer Science (Software Engineering)',
  school: 'École Pluridisciplinaire Internationale',
  period: '2024 – 2026 (Expected)',
  description: "Advanced engineering program focused on software architecture, distributed systems, and complex system design."
}, {
  degree: 'Professional Master’s in Computer Science (Software Engineering)',
  school: 'Institut Supérieur d’Informatique et de Mathématiques de Monastir (ISIMM)',
  period: '2023 – 2025',
  description: 'Specialized training in software engineering principles, including full lifecycle development of an AI-as-a-Service platform (AI+) with deployment, monetization, and secure API management.'
}, {
  degree: 'Bachelor’s Degree in Computer Science (Software Engineering)',
  school: 'Institut Supérieur d’Informatique et de Mathématiques de Monastir (ISIMM)',
  period: '2020 – 2023',
  description: 'Solid foundation in algorithms, data structures, web development, and software design patterns.'
}, {
  degree: 'Technical Baccalaureate in Science',
  school: 'Lycée Secondaire El Djem',
  period: '2020',
  description: 'Graduated with Honors (Mention Bien).'
}];
export function Education() {
  return <section className="py-24 px-6 bg-zinc-950">
    <div className="max-w-5xl mx-auto">
      <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="mb-16">
        <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-wider mb-4">
          Education
        </h2>
        <h3 className="text-3xl font-bold text-white">
          Academic Background
        </h3>
      </motion.div>

      <div className="grid gap-8">
        {education.map((edu, index) => <motion.div key={index} initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="flex gap-6 group">
          <div className="flex-shrink-0 mt-1">
            <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
              <GraduationCapIcon className="w-5 h-5 text-zinc-400 group-hover:text-indigo-400 transition-colors" />
            </div>
          </div>
          <div className="space-y-1 pb-8 border-b border-zinc-900 w-full last:border-0">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h4 className="text-lg font-semibold text-white">
                {edu.degree}
              </h4>
              <span className="text-sm font-mono text-zinc-500 whitespace-nowrap">
                {edu.period}
              </span>
            </div>
            <p className="text-indigo-400 font-medium">{edu.school}</p>
            <p className="text-zinc-400 text-sm pt-2">{edu.description}</p>
          </div>
        </motion.div>)}
      </div>
    </div>
  </section>;
}