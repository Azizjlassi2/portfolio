import React from 'react';
import { motion } from 'framer-motion';
const skillGroups = [{
  title: 'Langages & Frameworks',
  skills: ['Python', 'Java', 'JavaScript', 'Django', 'Spring Boot', 'ExpressJS', 'React.js']
}, {
  title: 'Artificielle Intelligence ',
  skills: ['Machine Learning', 'Deep Learning', 'Natural Language Processing ', 'Scikit-learn', 'TensorFlow', 'NLTK', 'SPACY', "Pandas", "Numpy", 'Matplotlib']
}, {
  title: 'Cloud & DevOps',
  skills: ['AWS', 'Docker', 'CI/CD', 'Jenkins', 'Git', 'Github Actions']
}, {
  title: 'Database Management System',
  skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Oracle']
}, {
  title: 'Tests & Modelisation',
  skills: ['JUnit', 'Cucumber', 'UML', 'BPMN']
}];
export function Skills() {
  return <section className="py-24 px-6 bg-zinc-900/30 border-y border-zinc-900">
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
          Expertise
        </h2>
        <h3 className="text-3xl font-bold text-white">
          Skills
        </h3>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillGroups.map((group, index) => <motion.div key={group.title} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors">
          <h4 className="text-lg font-semibold text-white mb-4">
            {group.title}
          </h4>
          <div className="flex flex-wrap gap-2">
            {group.skills.map(skill => <span key={skill} className="px-3 py-1 text-sm text-zinc-400 bg-zinc-950 rounded border border-zinc-800">
              {skill}
            </span>)}
          </div>
        </motion.div>)}
      </div>
    </div>
  </section>;
}