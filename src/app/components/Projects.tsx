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
        className="py-16 max-w-3xl mx-auto px-4"
    >
      <h2 className="text-2xl font-bold tracking-tight mb-8 text-zinc-100 border-b border-zinc-800 pb-4">
        Projects
      </h2>
      <div className="space-y-12">
        {Projects.map((category, index) => (
          <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} 
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                id="projects" 
                className="py-16 max-w-3xl mx-auto px-4"
            >
            <h3 className="text-lg font-semibold text-zinc-200">
              {category.title}
            </h3>
            {category.isPrivate ? (
              <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-zinc-200">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-zinc-300">
                      <RepoIcon size={16} />
                    </span>
                    <span className="font-medium">{category.title}</span>
                  </div>

                  <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-amber-300">
                    Private
                  </span>
                </div>

                <p className="mt-3 text-sm text-zinc-400">{category.description}</p>

                <div className="mt-3 flex items-center justify-between text-xs text-zinc-500">
                  <span>Private Project</span>
                  <span className="text-zinc-400">In Progress</span>
                </div>
              </div>
            ) : null}
            {category.repoUrl && category.repoPath && !category.isPrivate ? (
              <Link
                href={category.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 block rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 transition-colors hover:border-blue-500/60 hover:bg-zinc-900"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={`https://github.com/${category.repoPath.split('/')[0]}.png`}
                    alt="GitHub Avatar"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full border border-zinc-700 object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2 text-zinc-100">
                      <div className="flex min-w-0 items-center gap-2">
                        <RepoIcon size={16} />
                        <span className="truncate font-medium">{category.repoPath}</span>
                      </div>

                      <span className="shrink-0 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-300">
                        Public
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-3 text-sm text-zinc-400">{category.description}</p>

                <div className="mt-3 flex items-center justify-between text-xs text-zinc-500">
                  <span>GitHub Repository</span>
                  <span className="group-hover:text-blue-400">View →</span>
                </div>
              </Link>
            ) : null}
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
