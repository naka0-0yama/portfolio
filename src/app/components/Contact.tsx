'use client';
import { motion } from "framer-motion";
import { RepoIcon } from '@primer/octicons-react';

export default function Contact() {
  return (
    <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        id="contact" 
        className="py-16 max-w-5xl mx-auto px-4"
    >
      <h2 className="text-2xl font-bold tracking-tight mb-8 text-zinc-100 border-b border-zinc-800 pb-4">
        Contact
      </h2>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 md:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
        <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
          開発しているコードやリポジトリの詳細は、以下のGitHubプロフィールからご確認いただけます。
        </p>

        <a
          href="https://github.com/naka0-0yama"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/80 text-zinc-200 hover:border-zinc-700 hover:bg-zinc-900 transition-colors group"
        >
          <span className="text-zinc-400 group-hover:text-zinc-100 transition-colors">
            <RepoIcon size={16} />
          </span>
          <div className="flex flex-col">
            <span className="text-xs text-zinc-500 font-mono">GitHub Profile</span>
            <span className="text-sm font-medium text-zinc-200 group-hover:text-blue-400 transition-colors">
              @naka0-0yama ↗
            </span>
          </div>
        </a>
      </div>
    </motion.section>
  );
}