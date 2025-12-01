import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, ExternalLinkIcon, FolderIcon } from 'lucide-react';
const projects = [{
  title: 'DermaSkin',
  subtitle: 'AI-Powered Medical Diagnosis',
  description: "Application web et mobile pour la détection du cancer de la peau utilisant des modèles CNN avancés pour l'analyse d'images dermatologiques.",
  tags: ['Django', 'Django REST Framework', 'Python', 'HTML', 'CSS', 'JavaScript', 'TensorFlow', 'CNN'],
  links: {
    github: 'https://github.com/Azizjlassi2/Derma-Skin',
    demo: '#'
  }
}, {
  title: 'Ai+',
  subtitle: 'AI-as-a-Service Marketplace',
  description: "Plateforme complète permettant la publication, le déploiement et la monétisation de modèles d'intelligence artificielle avec facturation automatisée.",
  tags: ['SpringBoot', 'SpringSecurity', 'JWT', 'JPA', 'React.js', 'Supabase(PostgreSQL)', 'AWS Fargate', 'AWS S3', 'Docker', 'CI/CD'],
  links: {
    github: 'https://github.com/Azizjlassi2/AI-Frontend',
    demo: '#'
  }
}, {
  title: 'Marketplace with ERP Integration',
  subtitle: 'Enterprise Resource Planning',
  description: 'Backend robuste intégrant un serveur Odoo pour la gestion complète : catalogue, commandes, stocks et flux de paiement sécurisés.',
  tags: ['Django', 'Django REST Framework', 'Python', 'Odoo', 'PostgreSQL', 'API REST'],
  links: {
    github: 'https://github.com/Azizjlassi2/Odoo-Marketplace',
    demo: '#'
  }
}, {
  title: 'Little Lemon Restaurant',
  subtitle: 'Restaurant Management API',
  description: 'Backend complet exposant un ensemble d’APIs métier pour gérer le cycle opérationnel du restaurant : menu, commandes, workflow de livraison et pilotage des équipes, destiné aux applications web et mobiles.',
  tags: ['Django', 'Django REST Framework', 'Python', 'Djoser', 'MySQL', 'API REST'],
  links: {
    github: 'https://github.com/Azizjlassi2/LittleLemon',
    demo: '#'
  }
}, {
  title: 'Task Manager Desktop App',
  subtitle: 'Gestion simple des tâches sur bureau',
  description: 'Application Java de bureau permettant de gérer des tâches : création, modification, suppression et affichage, avec interface graphique Swing et architecture MVC pour une maintenance facilitée.',
  tags: ['Java', 'Swing', 'MVC', 'Desktop App', 'Java SE', 'GUI'],
  links: {
    github: 'https://github.com/Azizjlassi2/Task-Management-App',
    demo: '#'
  }
}, {
  title: 'Agile Project Management API',
  subtitle: 'API RESTful pour la gestion agile de projets',
  description: "API backend complète permettant de gérer projets, sprints, tâches, utilisateurs et commentaires, facilitant la collaboration et le suivi de l'avancement au sein des équipes, développée avec Django et Django REST Framework.",
  tags: ['Django', 'Django REST Framework', 'Python', 'MySQL', 'API REST', 'Agile'],
  links: {
    github: 'https://github.com/Azizjlassi2/SMT',
    demo: '#'
  }
}];
export function Projects() {
  return <section id="projects" className="py-24 px-6 bg-zinc-950">
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
          Portfolio
        </h2>
        <h3 className="text-3xl font-bold text-white">Projets Réalisés</h3>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => <motion.div key={project.title} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="group flex flex-col h-full bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden hover:border-indigo-500/30 transition-all duration-300">
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800 group-hover:border-indigo-500/30 transition-colors">
                <FolderIcon className="w-5 h-5 text-indigo-400" />
              </div>
              <div className="flex gap-3">
                <a href={project.links.github} className="text-zinc-500 hover:text-white transition-colors">
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a href={project.links.demo} className="text-zinc-500 hover:text-white transition-colors">
                  <ExternalLinkIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            <h4 className="text-xl font-bold text-white mb-1">
              {project.title}
            </h4>
            <p className="text-xs font-mono text-indigo-400 mb-4">
              {project.subtitle}
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map(tag => <span key={tag} className="text-xs text-zinc-500 font-mono">
                #{tag}
              </span>)}
            </div>
          </div>
        </motion.div>)}
      </div>
    </div>
  </section>;
}