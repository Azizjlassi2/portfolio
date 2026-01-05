import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, MapPinIcon } from 'lucide-react';
const experiences = [{
  id: 1,
  role: 'Full-Stack Engineer ',
  company: 'Skillware Company',
  period: 'June 2025 – November 2025',
  location: 'Remote ',
  description: "Driving the design, development, and delivery of AI+, a sovereign AI-as-a-Service platform that enables the deployment, sharing, and monetization of AI models and datasets. AI+ provides secure APIs for consumption, subscription management for developers, consumption tracking and billing for clients, and comprehensive administration for moderation and user oversight.",
  achievements: ["Architected and implemented the end-to-end AI+ platform with a focus on scalability, security, and modular services, covering 100+ product backlog user stories.",
    "Developed a structured AI marketplace with advanced metadata management, model evaluation, commenting, and search capabilities.",
    "Designed and integrated flexible subscription and billing systems with automated revenue tracking and local payment gateway (Konnect.network) integration.",
    "Built multi-role dashboards (Developer, Client, Administrator) for real-time insights into API usage, model performance, subscriptions, and business KPIs.",
    "Engineered secure and scalable APIs for model deployment (Docker & AWS), including authentication (JWT), authorization (RBAC), monitoring, and automated CI/CD pipelines.",
    "Established an administration suite for content moderation, user management, audit logging, and compliance with data governance standards."],
  stack: ['Spring Boot', 'Spring Security', 'JWT', 'JPA', 'React.js', 'Supabase', 'AWS Fargate', 'AWS S3', 'Docker', 'CI/CD']
}, {
  id: 2,
  role: 'Full-Stack & AI Developer',
  company: 'ISIMM',
  period: 'February 2023 – June 2023',
  location: 'Monastir, Tunisia',
  description: 'Designed and developed DermaSkin, a web and mobile application for early skin cancer detection leveraging deep learning. Built a user-centric capture and diagnosis interface with secure patient data management, integrated optimized CNN models for dermatological image classification',
  achievements: ["Developed an intuitive web and mobile interface using Django and JavaScript for seamless image capture, diagnosis workflow, and secure patient data management(with encryption and access controls).",
    "Integrated custom Convolutional Neural Networks(CNNs) built with TensorFlow for dermatological image analysis, optimizing the classification pipeline through data augmentation and transfer learning.",
    "Deployed ML models as RESTful APIs via Django REST Framework, implementing API key authentication, rate limiting, and real- time monitoring for reliable inference.",
    "Achieved high classification performance on skin lesion datasets, supporting early detection of malignant cases with benchmark - level accuracy."],
  stack: ['Django', 'Django REST Framework', 'HTML', 'CSS', 'JavaScript', 'TensorFlow', 'CNN']
}, {
  id: 3,
  role: 'Backend Developer',
  company: 'Optimal Solution',
  period: 'June 2022 – August 2022',
  location: 'Sousse , Tunisia',
  description: 'Developed robust backend systems and integrated ERP solutions for efficient business operations, focusing on catalog management, order processing, and inventory control',
  achievements: ["Built backend  using Django and integrated Odoo server for comprehensive ERP management, handling catalogs, orders, and stock efficiently.",],
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
          Professional Experience
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