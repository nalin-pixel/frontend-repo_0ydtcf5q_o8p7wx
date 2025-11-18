function CTA() {
  return (
    <section id="get-started" className="relative py-16">
      <div className="absolute inset-0 bg-[radial-gradient(400px_150px_at_50%_0%,rgba(59,130,246,0.15),transparent)]" />
      <div className="relative max-w-5xl mx-auto px-6 md:px-8">
        <div className="rounded-3xl bg-slate-900 text-white overflow-hidden border border-slate-800">
          <div className="p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">Start free. Keep students supported.</h3>
              <p className="mt-3 text-slate-300">Try BrightMind with no credit card. Invite a class or your family and explore age-appropriate check-ins, coping tools, and helpful guidance.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold hover:bg-slate-100 transition-colors">Create account</a>
                <a href="#" className="inline-flex items-center justify-center rounded-xl bg-slate-800 text-white px-5 py-3 font-semibold border border-slate-700 hover:bg-slate-700 transition-colors">Book a demo</a>
              </div>
              <p className="mt-3 text-xs text-slate-400">FERPA & COPPA conscious • Works on any device • 10-minute setup</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl p-6 border border-white/10">
              <ul className="space-y-3 text-sm text-slate-200">
                <li className="flex items-center gap-2"><span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400" /> Mood tracking & journals</li>
                <li className="flex items-center gap-2"><span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400" /> Breathing & grounding exercises</li>
                <li className="flex items-center gap-2"><span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400" /> Caregiver & counselor insights</li>
                <li className="flex items-center gap-2"><span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400" /> Age-tuned AI conversations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
