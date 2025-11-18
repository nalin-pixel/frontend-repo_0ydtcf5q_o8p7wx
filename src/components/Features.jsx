import { Sparkles, ShieldCheck, Baby, Clock, Smile, Brain } from 'lucide-react';

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group p-6 rounded-2xl bg-white/80 border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all">
      <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{desc}</p>
    </div>
  );
}

function Features() {
  const items = [
    { icon: Brain, title: 'Age-smart AI', desc: 'Conversations tuned for kids and teens with gentle tone and guidance.' },
    { icon: ShieldCheck, title: 'Private by design', desc: 'End-to-end encryption and strict data controls keep check-ins safe.' },
    { icon: Smile, title: 'Daily mood check-ins', desc: 'Simple, friendly prompts help build awareness and healthy habits.' },
    { icon: Clock, title: '24/7 support', desc: 'Helpful tips, breathing exercises, and grounding techniques anytime.' },
    { icon: Sparkles, title: 'For schools & families', desc: 'Reports with insights for counselors, teachers, and guardians.' },
    { icon: Baby, title: 'Made for young minds', desc: 'Cute, distraction-free UI kids enjoy using and trust.' },
  ];

  return (
    <section id="how" className="relative py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_0%,rgba(59,130,246,0.08),transparent),radial-gradient(600px_200px_at_80%_100%,rgba(99,102,241,0.08),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">What’s inside</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900">Built for student wellbeing</h2>
          <p className="mt-3 text-slate-600">Everything you need to support mental health in and out of the classroom.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <Feature key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
