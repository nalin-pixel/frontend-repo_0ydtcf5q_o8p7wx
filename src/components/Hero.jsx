import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-blue-50" />

      {/* Decorative gradient blobs */}
      <div className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-blue-200/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full bg-violet-200/40 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-24 md:pt-28">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Copy */}
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-medium mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              AI-powered wellbeing for students & kids
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Support every young mind with gentle, smart guidance
            </h1>
            <p className="mt-4 md:mt-6 text-slate-600 text-lg md:text-xl leading-relaxed">
              BrightMind blends child-friendly design with private, AI-assisted check-ins to help learners build healthy habits, manage stress, and ask for help—anytime.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold shadow-sm shadow-blue-600/20 transition-colors">
                Try it free
              </a>
              <a href="#how" className="inline-flex items-center justify-center rounded-xl bg-white hover:bg-slate-50 text-slate-900 px-6 py-3 font-semibold border border-slate-200 transition-colors">
                See how it works
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/40?img=1" alt="" className="w-8 h-8 rounded-full border border-white" />
                <img src="https://i.pravatar.cc/40?img=2" alt="" className="w-8 h-8 rounded-full border border-white" />
                <img src="https://i.pravatar.cc/40?img=3" alt="" className="w-8 h-8 rounded-full border border-white" />
              </div>
              <span>Trusted by schools and families</span>
            </div>
          </div>

          {/* 3D Hero */}
          <div className="order-1 md:order-2 relative h-[340px] md:h-[520px] rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-[0_10px_50px_-15px_rgba(2,6,23,0.2)]">
            <Spline scene="https://prod.spline.design/kow0cKDK6Tap7xO9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            {/* Soft radial overlay to blend edges, allow interaction with 3D */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0)_40%,rgba(255,255,255,0.6)_85%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
