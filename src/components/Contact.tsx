import React from 'react';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, MapPinIcon, GithubIcon, LinkedinIcon } from 'lucide-react';
export function Contact() {
  return <section id="contact" className="py-24 px-6 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="space-y-6">
          <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-wider">
            Contact
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            Let's work together
          </h3>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            Ouvert aux opportunités de collaboration sur des projets innovants
            en backend et intelligence artificielle.
          </p>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.2
      }} className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50">
            <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
              <MailIcon className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <p className="text-sm text-zinc-500 mb-1">Email</p>
              <a href="mailto:azizjlassi498@gmail.com" className="text-white hover:text-indigo-400 transition-colors">
                azizjlassi498@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50">
            <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
              <PhoneIcon className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <p className="text-sm text-zinc-500 mb-1">Phone</p>
              <a href="tel:+21626866915" className="text-white hover:text-indigo-400 transition-colors">
                +216 26 866 915
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50">
            <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
              <MapPinIcon className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <p className="text-sm text-zinc-500 mb-1">Location</p>
              <p className="text-white">El Djem, Tunisia</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.4
      }} className="flex justify-center gap-6 mt-16">
          <a href="https://github.com/Azizjlassi2" className="text-zinc-500 hover:text-white transition-colors">
            <GithubIcon className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/mohamedazizjlassi" className="text-zinc-500 hover:text-white transition-colors">
            <LinkedinIcon className="w-6 h-6" />
          </a>
        </motion.div>

        <div className="mt-20 pt-8 border-t border-zinc-900 text-zinc-600 text-sm">
          © {new Date().getFullYear()} Mohamed Aziz Jlassi. All rights
          reserved.
        </div>
      </div>
    </section>;
}