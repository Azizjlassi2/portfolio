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
              Ingénieur passionné, je combine une expertise en{' '}
              <span className="text-white font-medium">backend</span> (Django,
              SpringBoot, ExpressJS) et en{' '}
              <span className="text-white font-medium">
                intelligence artificielle
              </span>{' '}
              (ML, Deep Learning) pour concevoir des solutions innovantes et
              performantes.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mt-12 text-zinc-400 text-base">
              <p>
                Actuellement étudiant en ingénierie logicielle, je développe des
                applications web et mobiles intégrant des API REST et des
                modèles d'IA. Ces projets m'ont permis d'acquérir rigueur,
                autonomie et expérience dans des environnements collaboratifs
                exigeants.
              </p>
              <p>
                Je maîtrise l'ensemble du cycle de développement, de la
                conception d'architectures scalables au déploiement avec Docker
                et CI/CD, en passant par la documentation et  le suivi qualité.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
}