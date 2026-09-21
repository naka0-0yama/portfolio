"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import ScrollButton from './ScrollButton';

// --- Framer Motion用の設定 ---
// 親要素がフェードインするときに、中の子要素を時間差で出現させる設定
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // 0.2秒ごとに子要素をずらして表示
    },
  },
};

// 個々の子要素が下からふんわり出る設定
const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }, // 滑らかなイージング
  },
};

export default function Hero() {
  // タイピングアニメーションは、シンプルにCSSアニメーションか、
  // ライブラリ（react-type-animationなど）を使うのが手軽ですが、
  // 今回はTailwindの標準アニメーション（animate-pulseなど）で
  // パタパタ感を出す例にします。
  
  return (
    <section id="hero"className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 text-white py-20">
              {/* --- 1. 背景の美しいグラデーションとブラー --- */}
      {/* 控えめなグリッド背景（オプションでテック感を出す場合） */}
      <div className="absolute inset-0 bg-grid-white bg-[size:40px_40px] pointer-events-none" />




      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* <div className="absolute top-1/4 -left-1/3 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-1/4 -right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" /> */}

      {/* 大きな青い光（左上） */}
      <div className="absolute top-1/4 -left-1/3 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px] pointer-events-none" />
      {/* 大きな紫の光（右下） */}
      <div className="absolute -bottom-1/4 -right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />

        {/* Logo */}
        <motion.div variants={itemVariants} className="mb-10">
          <div className="animate-spin-slow hover:pause cursor-pointer">
            <Image
              src="/icon.svg"
              alt="Portfolio Logo"
              width={120}
              height={120}
              className="drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            />
          </div>
        </motion.div>
        {/* catch copy */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight"
        >
          Hi, I'm <span className="text-blue-400">{siteConfig.name}</span><br />
          Building <span className="relative inline-block">
            Operating Systems
            {/* underline */}
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 animate-pulse"></span>
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-xl text-gray-300 max-w-2xl mx-auto mb-12"
        >
          低レイヤーエンジニアとして、ハードウェアの挙動からカーネルの動作まで、コンピュータの根底を貫く仕組みの構築に挑んでいます。
        </motion.p>

        {/* action buttons */}
        <motion.div variants={itemVariants} className="flex gap-4">
          <ScrollButton targetId="projects" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20">
            View My Works
          </ScrollButton>
          <ScrollButton targetId="contact" className="px-8 py-3 bg-gray-800 border border-gray-700 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors">
            Contact Me
          </ScrollButton>
        </motion.div>

      </motion.div>
    </section>
  );
}