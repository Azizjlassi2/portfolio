import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, MapPinIcon } from 'lucide-react';
const experiences = [{
  id: 1,
  role: 'Développeur Full-Stack',
  company: 'Skill-Ware Company',
  period: 'Juin 2025 – Présent',
  location: 'Remote / Hybrid',
  description: "Conception et développement d'une plateforme AI-as-a-Service (AiaaS) et d'une marketplace e-commerce.",
  achievements: ["Création d'un catalogue structuré avec système d'évaluation, commentaires et tests rapides.", "Mise en place de plans d'abonnement flexibles, suivi des revenus et facturation automatisée.", 'Développement de dashboards analytiques dédiés aux développeurs, clients et administrateurs.', 'Gestion complète des modèles IA et datasets incluant dépôt, mise à jour et métadonnées enrichies.', 'Administration et modération : validation de contenus, gestion des comptes, génération de rapports.'],
  stack: ['Spring Boot', 'Spring Security', 'JWT', 'JPA', 'React.js', 'Supabase', 'AWS Fargate', 'AWS S3', 'Docker', 'CI/CD']
}, {
  id: 2,
  role: 'Développeur Full-Stack & IA',
  company: 'ISIMM',
  period: 'Février 2023 – Juin 2023',
  location: 'Monastir, Tunisia',
  description: 'Conception et développement de DermaSkin, application web et mobile pour la détection du cancer de la peau.',
  achievements: ["Développement d'une interface intuitive pour capture et diagnostic, gestion sécurisée des données patients.", "Intégration de modèles CNN pour l'analyse d'images dermatologiques avec pipeline de classification optimisé.", 'Déploiement et supervision des modèles via API REST, gestion des clés API et monitoring.'],
  stack: ['Django', 'Django REST Framework', 'HTML', 'CSS', 'JavaScript', 'TensorFlow', 'CNN']
}, {
  id: 3,
  role: 'Développeur Backend',
  company: 'Optimal Solution',
  period: 'Juin 2022 – Août 2022',
  location: 'Tunisia',
  description: 'Développement backend robuste et intégration ERP.',
  achievements: ["Backend avec Django et intégration d'un serveur Odoo pour gestion ERP (catalogue, commandes, stocks).", 'Implémentation des flux de paiement sécurisés et règles de sécurité.', 'Optimisation des processus de facturation.'],
  stack: ['Django', 'Odoo', 'PostgreSQL', 'Python']
}];
export function Experience() {
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
            Experience
          </h2>
          <h3 className="text-3xl font-bold text-white">
            Parcours Professionnel
          </h3>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => <motion.div key={exp.id} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="relative pl-8 md:pl-0">
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-[150px] top-0 bottom-0 w-px bg-zinc-800" />
              <div className="hidden md:block absolute left-[146px] top-2 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-zinc-950" />

              <div className="md:grid md:grid-cols-[150px_1fr] gap-12">
                {/* Date Column */}
                <div className="mb-2 md:mb-0 md:text-right">
                  <span className="text-sm font-mono text-zinc-500">
                    {exp.period}
                  </span>
                </div>

                {/* Content Column */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      {exp.role}
                    </h4>
                    <div className="flex items-center gap-2 text-zinc-400 mt-1">
                      <span className="font-medium">{exp.company}</span>
                      <span>•</span>
                      <span className="text-sm flex items-center gap-1">
                        <MapPinIcon className="w-3 h-3" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-zinc-400 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-700 flex-shrink-0" />
                        {achievement}
                      </li>)}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.stack.map(tech => <span key={tech} className="px-2.5 py-1 text-xs font-medium text-indigo-300 bg-indigo-500/10 rounded border border-indigo-500/20">
                        {tech}
                      </span>)}
                  </div>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}