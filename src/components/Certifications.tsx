import React from 'react';
import { motion } from 'framer-motion';
import { AwardIcon, ExternalLinkIcon } from 'lucide-react';
const certifications = [{
  provider: 'Meta',
  certs: [{
    name: 'Django Web Framework',
    url: 'https://coursera.org/share/982a75adbeea0eab8bdccbc58b147fbd'
  }, {
    name: 'Introduction to Back-End Development',
    url: 'https://coursera.org/share/98e2bc3ab6a523d1b9f399df033d574f'
  }, {
    name: 'Introduction to Databases for Back-End Development',
    url: 'https://coursera.org/share/e1e54033a7ba309940671a83181065a5'
  }, {
    name: 'APIs',
    url: 'https://coursera.org/share/283860924c5744e8f14a805468204f23'
  }, {
    name: 'Version Control',
    url: 'https://coursera.org/share/fc890129cc5b60d12afe79091ef35df8'
  }, {
    name: 'The Full Stack',
    url: 'https://coursera.org/share/6b8260a6b02248cc2014a0f8031cce43'
  }]
}, {
  provider: 'AWS',
  certs: [{
    name: 'AWS Academy Cloud Foundations',
    url: 'https://www.credly.com/badges/6c6451eb-0ea5-43d1-bd80-fc6338c86843/linked_in?t=sol7yk'
  }, {
    name: 'Developing Applications in Python on AWS',
    url: 'https://coursera.org/share/be034bc1c7c20b5b4693b9f111baf507'
  }]
}, {
  provider: 'DeepLearning.AI',
  certs: [{
    name: 'Introduction to TensorFlow for AI, ML, and Deep Learning',
    url: 'https://coursera.org/share/1e2cf0ec54bf368921f00cdfd2397203'
  }]
}, {
  provider: 'IEEE',
  certs: [{
    name: 'Introduction to Deep Learning',
    url: null
  }, {
    name: 'Introduction to Machine Learning',
    url: null
  }, {
    name: '30 Days of Machine Learning / Deep Learning',
    url: null
  }]
}];
export function Certifications() {
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
            Certifications
          </h2>
          <h3 className="text-3xl font-bold text-white">
            Certifications & Formations
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((group, index) => <motion.div key={group.provider} initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="p-6 bg-zinc-950 border border-zinc-800 rounded-xl">
              <div className="flex items-center gap-3 mb-6">
                <AwardIcon className="w-5 h-5 text-indigo-400" />
                <h4 className="text-lg font-semibold text-white">
                  {group.provider}
                </h4>
              </div>
              <ul className="space-y-3">
                {group.certs.map((cert, i) => <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-700 flex-shrink-0" />
                    {cert.url ? <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-indigo-400 transition-colors flex items-center gap-1.5 group">
                        <span>{cert.name}</span>
                        <ExternalLinkIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a> : <span className="text-zinc-400">{cert.name}</span>}
                  </li>)}
              </ul>
            </motion.div>)}
        </div>
      </div>
    </section>;
}