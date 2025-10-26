import { ArrowRight, GraduationCap, X, Play, Sparkles, Heart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CaseStudies = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef(null);
  const [showEducationModal, setShowEducationModal] = useState(false);
  const [showEventsModal, setShowEventsModal] = useState(false);
  const [showBeautyModal, setShowBeautyModal] = useState(false);

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

  const eventVideos = [
    {
      id: 1,
      videoId: 'wBRB6tLmZuQ',
      url: 'https://youtu.be/wBRB6tLmZuQ?si=P0ELtLbp2dneAfRh',
      thumbnail: 'https://img.youtube.com/vi/wBRB6tLmZuQ/maxresdefault.jpg',
      title: 'The Success',
    },
    {
      id: 2,
      videoId: 'vkPfZFaT-RY',
      url: 'https://youtu.be/vkPfZFaT-RY?si=pDkIZcKw5sF4kTrY',
      thumbnail: 'https://img.youtube.com/vi/vkPfZFaT-RY/maxresdefault.jpg',
      title: 'The Journey',
    },
    {
      id: 3,
      videoId: 'p-xLo7A6y1k',
      url: 'https://youtu.be/p-xLo7A6y1k?si=pox6Trk8DMnFfj_J',
      thumbnail: 'https://img.youtube.com/vi/p-xLo7A6y1k/maxresdefault.jpg',
      title: 'The Growth',
    },
  ];

  const educationSchools = [
    {
      name: 'Udgam Group of Schools',
      logo: '/udgam.jpg',
      description:
        'Built comprehensive operational frameworks and leadership development programs for sustainable growth.',
    },
    {
      name: 'Mahatma Valley Group of Schools',
      logo: '/mahatma valley.jpeg',
      description:
        'Designed strategic roadmaps and training initiatives to enhance teaching quality and administrative efficiency.',
    },
    {
      name: 'Swarrnim International School',
      logo: '/swarnim.jpeg',
      description:
        'Implemented robust processes and team development strategies to drive academic excellence and organizational growth.',
    },
  ];

  const caseStudies = [
    {
      id: 1,
      name: 'Events',
      icon: Sparkles,
      logo: null,
      category: 'Events',
      description:
        'Creating impactful personal development experiences through engaging workshops, seminars, and transformational events that inspire growth.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      isExpandable: true,
      modalType: 'events',
    },

    {
      id: 2,
      name: 'Education',
      icon: GraduationCap,
      logo: null,
      category: 'Education',
      description:
        'Empowering educational institutions with strategic frameworks, operational excellence, and leadership development across multiple schools.',
      color: 'from-teal-500 to-emerald-500',
      bgColor: 'bg-teal-50',
      isExpandable: true,
      modalType: 'education',
    },
    {
      id: 3,
      name: 'Beauty & Wellness',
      logo: null,
      icon: Heart,
      category: 'Beauty & Wellness',
      description:
        'Elevating salon experiences with premium services, expert staff training, and luxury wellness solutions that delight clients.',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      isExpandable: true,
      modalType: 'beauty',
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
                onClick={() => {
                  if (study.isExpandable) {
                    if (study.modalType === 'education') {
                      setShowEducationModal(true);
                    } else if (study.modalType === 'events') {
                      setShowEventsModal(true);
                    } else if (study.modalType === 'beauty') {
                      setShowBeautyModal(true);
                    }
                  }
                }}
                className="group bg-white border-2 border-slate-100 rounded-xl md:rounded-2xl p-6 md:p-8 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden"
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

                  {study.isExpandable && (
                    <div className="mt-auto">
                      <button className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-white transition-colors duration-500">
                        {study.modalType === 'education' ? 'View all schools' : study.modalType === 'beauty' ? 'View details' : 'Watch testimonials'}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Events Videos */}
        {showEventsModal && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setShowEventsModal(false)}
          >
            <div
              className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl transform transition-all animate-scaleIn"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-6 md:p-8 relative">
                <button
                  onClick={() => setShowEventsModal(false)}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                <h2 className="text-2xl md:text-3xl font-bold text-white text-center pr-12">
                  Discovering me
                </h2>
                <p className="text-white/90 text-center mt-2">
                  Hear from our events about the transformation journey
                </p>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-180px)]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {eventVideos.map((video) => (
                    <a
                      key={video.id}
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative bg-slate-200 rounded-xl overflow-hidden aspect-video cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/60 to-cyan-600/60 group-hover:from-blue-600/80 group-hover:to-cyan-600/80 transition-all duration-300 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                            <Play className="w-8 h-8 ml-1" />
                          </div>
                          <h4 className="font-bold text-base px-4">{video.title}</h4>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal for Beauty & Wellness */}
        {showBeautyModal && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setShowBeautyModal(false)}
          >
            <div
              className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl transform transition-all animate-scaleIn"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-br from-pink-500 to-rose-500 p-6 md:p-8 relative">
                <button
                  onClick={() => setShowBeautyModal(false)}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                <h2 className="text-2xl md:text-3xl font-bold text-white text-center pr-12">
                  Le Atmos Salons
                </h2>
                <p className="text-white/90 text-center mt-2">
                  Transforming beauty and wellness experiences
                </p>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-180px)]">
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-100 rounded-xl p-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center shadow-md p-4">
                      <img
                        src="/atmos.png"
                        alt="Le Atmos Salons"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">
                    Excellence in Beauty & Wellness
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed text-center mb-6">
                    Le Atmos Salons represents the pinnacle of beauty and wellness transformation. We revolutionized their salon operations by implementing cutting-edge appointment scheduling systems, optimizing service delivery workflows, and establishing comprehensive staff training programs. Our strategic approach enhanced customer satisfaction through personalized service protocols, premium product management, and creating a luxurious ambiance that reflects their brand excellence.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <h4 className="font-bold text-pink-600 mb-2">Premium Service Delivery</h4>
                      <p className="text-sm text-slate-600">Implemented world-class beauty treatments, spa therapies, and wellness services with state-of-the-art equipment and premium products</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <h4 className="font-bold text-pink-600 mb-2">Expert Team Development</h4>
                      <p className="text-sm text-slate-600">Certified beauticians and wellness experts trained in international standards, latest trends, and holistic customer care approaches</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <h4 className="font-bold text-pink-600 mb-2">Luxury Experience Design</h4>
                      <p className="text-sm text-slate-600">Created an upscale ambiance with personalized consultations, membership benefits, and exclusive wellness packages for discerning clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal for Education Schools */}
        {showEducationModal && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setShowEducationModal(false)}
          >
            <div
              className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl transform transition-all animate-scaleIn"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-br from-teal-500 to-emerald-500 p-6 md:p-8 relative">
                <button
                  onClick={() => setShowEducationModal(false)}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                <h2 className="text-2xl md:text-3xl font-bold text-white text-center pr-12">
                  Our Education Partners
                </h2>
                <p className="text-white/90 text-center mt-2">
                  Transforming educational institutions across India
                </p>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-180px)]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {educationSchools.map((school, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-teal-50 to-emerald-50 border-2 border-teal-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="flex justify-center mb-4">
                        <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-md p-2">
                          <img
                            src={school.logo}
                            alt={school.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 mb-3 text-center">
                        {school.name}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed text-center">
                        {school.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

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
