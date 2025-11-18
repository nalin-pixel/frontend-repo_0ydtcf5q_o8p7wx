function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600" />
          <span className="font-extrabold text-slate-900 tracking-tight">BrightMind</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#how" className="hover:text-slate-900">Features</a>
          <a href="#get-started" className="hover:text-slate-900">Get started</a>
          <a href="#" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-4 py-2 font-semibold hover:bg-slate-800 transition-colors">Sign in</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
