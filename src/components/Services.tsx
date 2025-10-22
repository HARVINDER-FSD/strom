import { Lightbulb, Users, Settings, UserPlus, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Lightbulb,
      title: 'Strategy & Process Building',
      subtitle: 'Clarity that drives growth',
      description:
        'Design clear business strategies and build efficient processes. From defining workflows to creating SOPs, we ensure your business runs smoothly and scales with confidence.',
      features: [
        'Business strategy roadmap',
        'Process design & documentation',
        'Efficiency audits & optimization',
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      icon: Users,
      title: 'Training & Team Development',
      subtitle: 'Empower people, unlock potential',
      description:
        'Create customized training programs that enhance leadership, productivity, and communication. Focus on practical, action-oriented learning for immediate impact.',
      features: [
        'Leadership & management development',
        'Skill enhancement & upskilling',
        'Culture building & team alignment',
      ],
      color: 'from-teal-500 to-emerald-500',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
    },
    {
      icon: Settings,
      title: 'Operations Management',
      subtitle: 'Structure that enables execution',
      description:
        'Establish robust operational systems that keep your business organized and efficient. Design workflows and set up performance tracking for seamless operations.',
      features: [
        'Operations framework setup',
        'SOP creation & process mapping',
        'Performance monitoring & reporting',
      ],
      color: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
    },
    {
      icon: UserPlus,
      title: 'Recruitment Solutions',
      subtitle: 'Right people. Right fit. Right impact.',
      description:
        'Support sourcing, evaluating, and onboarding the right candidates who fit your business culture and growth needs for long-term success.',
      features: [
        'Role analysis & job profiling',
        'Talent sourcing & screening',
        'Structured onboarding & retention',
      ],
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-50',
      borderColor: 'border-violet-200',
    },
    {
      icon: TrendingUp,
      title: 'Marketing Management',
      subtitle: 'Strategic marketing for real results',
      description:
        'Guide building and managing marketing plans that position your brand effectively, connect with your audience, and create measurable growth.',
      features: [
        'Marketing strategy & campaign planning',
        'Brand positioning & communication',
        'Digital marketing guidance & analytics',
      ],
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our Core Expertise
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to drive your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative bg-white border-2 ${service.borderColor} rounded-2xl p-8 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${hoveredIndex === index ? 'scale-105' : ''
                  }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                ></div>

                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-500 shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm font-medium text-slate-500 mb-4">
                  {service.subtitle}
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mt-1.5 flex-shrink-0`}
                      ></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <button
                    className={`text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-2`}
                  >

                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz48L2c+PC9zdmc+')] opacity-20"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose STORM?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {[
                { title: 'Tailored Solutions', desc: 'No "one-size-fits-all"' },
                {
                  title: 'End-to-End Support',
                  desc: 'Planning to execution',
                },
                {
                  title: 'Proven Expertise',
                  desc: 'Industry-experienced consultants',
                },
                {
                  title: 'Measurable Results',
                  desc: 'Practical strategies that work',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="mb-3 flex justify-center">
                    <img
                      src="/Untitled-1.png"
                      alt="check"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
