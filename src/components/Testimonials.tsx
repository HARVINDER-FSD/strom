import { Play, Quote } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  const testimonials: Array<{
    quote: string;
    author: string;
    role: string;
    company: string;
  }> = [];

  return (
    <section ref={sectionRef} id="testimonials" className="py-16 md:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-3 md:mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto px-4">
            Hear from businesses we've helped transform
          </p>
        </div>

        <div className="mb-12 md:mb-16 text-center">
          <p className="text-base md:text-lg text-slate-600 mb-6 max-w-2xl mx-auto px-4">
            Watch our client testimonials and success stories on our YouTube channel
          </p>
          <a
            href="https://www.youtube.com/@stormorganisers7949"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
          >
            <Play className="w-4 h-4 md:w-5 md:h-5" />
            Visit Our YouTube Channel
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <div className="absolute top-6 right-6 text-blue-200">
                <Quote className="w-12 h-12" />
              </div>
              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-bold text-slate-800">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                  <p className="text-xs text-slate-400 mt-1">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
