import { Building2, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CaseStudies = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          end: 'top 65%',
          scrub: 0.3,
        },
      });

      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.from(card, {
            y: 50,
            opacity: 0,
            duration: 0.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              end: 'top 70%',
              scrub: 0.3,
            },
          });
        }
      });

      gsap.from(ctaRef.current, {
        scale: 0.96,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 85%',
          end: 'top 70%',
          scrub: 0.3,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  const caseStudies = [
    {
      id: 1,
      name: 'Discovering Me',
      icon: Building2,
      logo: "/Untitled-1.png",
      category: 'Events',
      description:
        'Transforming personal growth initiatives with structured training programs and strategic guidance.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
    },
    {
      id: 2,
      name: 'Le Atmos Salons',
      logo: '/atmos.png',
      category: 'Beauty & Wellness',
      description:
        'Streamlined operations and enhanced customer experience through process optimization and staff training.',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
    },
    {
      id: 3,
      name: 'Udgam Group of Schools',
      logo: '/udgam.jpg',
      category: 'Education',
      description:
        'Built comprehensive operational frameworks and leadership development programs for sustainable growth.',
      color: 'from-teal-500 to-emerald-500',
      bgColor: 'bg-teal-50',
    },
    {
      id: 4,
      name: 'Mahatma Valley Group of Schools',
      logo: '/mahatma valley.jpeg',
      category: 'Education',
      description:
        'Designed strategic roadmaps and training initiatives to enhance teaching quality and administrative efficiency.',
      color: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-50',
    },
    {
      id: 5,
      name: 'Swarrnim International School',
      logo: '/swarnim.jpeg',
      category: 'Education',
      description:
        'Implemented robust processes and team development strategies to drive academic excellence and organizational growth.',
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-50',
    },
  ];

  return (
    <section ref={sectionRef} id="case-studies" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-3 md:mb-4">
            Success Stories
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto px-4">
            Real results from real businesses we've helped transform
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study, index) => {
            return (
              <div
                key={study.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group bg-white border-2 border-slate-100 rounded-xl md:rounded-2xl p-6 md:p-8 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10 flex flex-col items-center">
                  <div
                    className={`w-16 h-16 ${study.logo ? 'bg-white' : `bg-gradient-to-br ${study.color}`} rounded-xl mb-6 transform group-hover:scale-110 transition-all duration-500 shadow-lg relative`}
                  >
                    {study.logo ? (
                      <img
                        src={study.logo}
                        alt={study.name}
                        className="absolute inset-0 m-auto max-w-[75%] max-h-[75%] object-contain"
                      />
                    ) : study.icon ? (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <study.icon className="w-8 h-8 text-white" />
                      </div>
                    ) : null}
                  </div>

                  <div className="mb-3 text-center">
                    <span
                      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${study.bgColor} bg-gradient-to-r ${study.color} bg-clip-text text-transparent group-hover:text-white transition-colors duration-500`}
                    >
                      {study.category}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 md:mb-4 group-hover:text-white transition-colors duration-500 text-center">
                    {study.name}
                  </h3>

                  <p className="text-sm md:text-base text-slate-600 mb-4 md:mb-6 leading-relaxed group-hover:text-white/90 transition-colors duration-500 text-center">
                    {study.description}
                  </p>

                  <button className="inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent group-hover:text-white transition-colors duration-500">

                    {/* <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" /> */}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div ref={ctaRef} className="mt-12 md:mt-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl md:rounded-3xl p-6 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikiLz48L2c+PC9zdmc+')] opacity-20"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-white/90 max-w-2xl mx-auto px-4">
              Join the growing list of businesses that have transformed with STORM
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-full font-semibold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center gap-2"
            >
              Let's Build Your Next Level Together
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
