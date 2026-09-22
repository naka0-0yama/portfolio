export default function Footer() {
  return (
    <footer className="max-w-5xl mx-auto px-4 py-12 border-t border-zinc-900 text-center text-xs text-zinc-600 font-mono">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} naka0-0yama</p>
        <p className="text-zinc-700">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}