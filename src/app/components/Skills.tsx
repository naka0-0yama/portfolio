'use client';
import { motion } from "framer-motion";
const skillCategories = [
  {
    title: 'Low-Level / Systems',
    description: 'コンピュータの根底を貫くハードウェアに近い領域。',
    skills: [
      'OS Kernel Development',
      'Memory Management',
      'Interrupt Handling',
    ],
  },
  {
    title: 'Web Frontend',
    description: 'モダンで快適なユーザー体験を構築する技術。',
    skills: [
      'React',
      'Next.js',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Programing Languages',
    description: '日々の開発で使用するプログラミング言語。',
    skills: [
        'Rust',
        'C/C++',
        'Zig',
        'Assembly (x86_64)',
        'TypeScript',
        'Python',
    ],
  },
  {
    title: 'Tools & Environment',
    description: '日々の開発やシステム構築を支える道具たち。',
    skills: [
      'Linux (Ubuntu / Alpine)',
      'Git / GitHub',
      'Neovim / VS Code',
      'Make / CMake',
      'GCC / Clang',
    ],
  },
];

export default function SkillsPage() {
  return (
    <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        id="skills" 
        className="py-16 max-w-5xl mx-auto px-4"
    >
      <h2 className="text-2xl font-bold tracking-tight mb-8 text-zinc-100 border-b border-zinc-800 pb-4">
        Skills
      </h2>
      <div className="space-y-12">
        {skillCategories.map((category, index) => (
          <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} 
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                id="skills" 
                className="py-16 max-w-3xl mx-auto px-4"
            >
            <h3 className="text-lg font-semibold text-zinc-200">
              {category.title}
            </h3>
            <p className="text-sm text-zinc-400 mt-1 mb-4">
              {category.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIndex) => (
                <motion.span
                  key={sIndex}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-1 text-xs font-mono font-medium bg-zinc-900 text-zinc-300 rounded border border-zinc-800 hover:border-zinc-500 hover:text-zinc-100 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
