import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ projects: 0, clients: 0, experience: 0, satisfaction: 0 });
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    // GSAP animations
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
      
      gsap.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });
      
      gsap.from(buttonsRef.current, {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out',
      });
    }, heroRef);
    
    return () => ctx.revert();

    // Animate counters
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const targets = { projects: 100, clients: 50, experience: 18, satisfaction: 100 };
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
        experience: Math.floor(targets.experience * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
      });

      if (currentStep >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div
          className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-blue-300" />
            <span className="text-blue-100 text-sm font-medium">
              Organising the Un-Organised
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Empowering Businesses
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              with Clarity, Strategy & Growth
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We help you build strong foundations, optimize operations, develop
            talent, and drive sustainable success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="group bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/50 flex items-center gap-2 font-semibold"
            >
              Schedule a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => {
                const element = document.querySelector('#services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              Explore Services
            </button>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: counts.projects, suffix: '+', label: 'Projects Delivered' },
              { value: counts.clients, suffix: '+', label: 'Happy Clients' },
              { value: counts.experience, suffix: '+', label: 'Years Experience' },
              { value: counts.satisfaction, suffix: '%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 delay-${index * 100
                  } ${isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                  }`}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-slate-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
