'use client';
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        id="about" 
        className="py-16 max-w-5xl mx-auto px-4"
    >
      <h2 className="text-2xl font-bold tracking-tight mb-8 text-zinc-100 border-b border-zinc-800 pb-4">
        About
      </h2>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 md:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
        <div className="space-y-6 text-zinc-300 text-sm md:text-base leading-relaxed">
          <p>
            趣味でコンピュータの仕組みや低レイヤー領域を探索している開発者です。
            普段は、表面的な便利さよりも「ハードウェアやOSが中で実際にどう動いているのか」という根本的な仕組みを理解することに興味を持ってコードを書いています。
          </p>
          
          <p>
            実用的なアプリケーションを作るというよりは、好奇心の赴くままに自作OSのカーネルをいじったり、低水準な挙動を追ったりするプロセスそのものを楽しんでいます。
          </p>

          {/* ここは言語名ではなく「スタンス」にする */}
          <div className="pt-4 border-t border-zinc-800 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono text-zinc-400">
            <div>
              <span className="block text-zinc-500 mb-1">Interest</span>
              <span>Low-Level / OS Internals</span>
            </div>
            <div>
              <span className="block text-zinc-500 mb-1">Approach</span>
              <span>Building from Scratch</span>
            </div>
            <div>
              <span className="block text-zinc-500 mb-1">Style</span>
              <span>Pure Hobbyist</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}