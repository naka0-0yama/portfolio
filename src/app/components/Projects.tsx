'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { RepoIcon } from '@primer/octicons-react'
export type Project = {
  title: string;
  description: string;
  skills: string[];
  repoPath?: string;     // GitHubの "owner/repo"（例: "naka0-0yama/os"）
  repoUrl?: string;      // リンク先URL
  status?: string;       // 非公開WIP用のステータス
  isPrivate: boolean;
  stars?: number;        // 自動取得用
};
export const Projects: Project[] = [
  {
    title: 'Operating System',
    description: 'rust',
    skills: ['C', 'Assembly', 'OS Kernel'],
    repoPath: 'naka0-0yama/os',
    repoUrl: 'https://github.com/naka0-0yama/os',
    isPrivate: false,
  },
  {
    title: 'test',
    description: 'test(private)',
    skills: ['C', 'OS Kernel', 'Networking'],
    status: 'Implementing',
    isPrivate: true, // 非公開フラグ
  },
];

export default function ProjectsPage() {
  return (
    <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        id="projects" 
        className="py-16 max-w-5xl mx-auto px-4"
    >
      <h2 className="text-2xl font-bold tracking-tight mb-8 text-zinc-100 border-b border-zinc-800 pb-4">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Projects.map((category, index) => (
          <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} 
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                id="projects"
            >
            {category.isPrivate ? (
              <div className="group mt-4 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                <div className="flex items-center justify-between gap-3 border-b border-zinc-800 pb-3">
                  <div className="flex min-w-0 items-center gap-3 text-zinc-100">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-500/15 text-amber-300">
                      <RepoIcon size={14} />
                    </span>
                    <span className="truncate text-sm font-medium">Private Repository</span>
                  </div>

                  <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-amber-300">
                    Private
                  </span>
                </div>

                <div className="pt-4">
                  <h4 className="text-xl font-semibold text-zinc-50">{category.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{category.description}</p>
                </div>

                <div className="mt-4 border-t border-zinc-800 pt-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, sIndex) => (
                        <span
                          key={sIndex}
                          className="rounded-full border border-zinc-700 bg-zinc-900 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <span className="text-sm font-medium text-zinc-400">In Progress</span>
                  </div>
                </div>
              </div>
            ) : null}
            {category.repoUrl && category.repoPath && !category.isPrivate ? (
              <Link
                href={category.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 block rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-colors hover:border-blue-500/60 hover:bg-zinc-900"
              >
                <div className="flex items-center justify-between gap-3 border-b border-zinc-800 pb-3">
                  <div className="flex min-w-0 items-center gap-3 text-zinc-100">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                      <RepoIcon size={14} />
                    </span>
                    <span className="truncate text-sm font-medium">{category.repoPath}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-1 font-semibold uppercase tracking-[0.12em] text-emerald-300">
                      Public
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="text-xl font-semibold text-zinc-50">{category.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{category.description}</p>
                </div>

                <div className="mt-4 border-t border-zinc-800 pt-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, sIndex) => (
                        <span
                          key={sIndex}
                          className="rounded-full border border-zinc-700 bg-zinc-900 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <span className="text-sm font-medium text-zinc-300 group-hover:text-blue-400">
                      View ↗
                    </span>
                  </div>
                </div>
              </Link>
            ) : null}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
