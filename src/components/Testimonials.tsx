import { Play, Quote } from 'lucide-react';

const Testimonials = () => {
  const videoTestimonials = [
    {
      id: 1,
      videoId: 'wBRB6tLmZuQ',
      url: 'https://youtu.be/wBRB6tLmZuQ?si=P0ELtLbp2dneAfRh',
      thumbnail: 'https://img.youtube.com/vi/wBRB6tLmZuQ/maxresdefault.jpg',
      title: 'Client Success Story'
    },
    {
      id: 2,
      videoId: 'vkPfZFaT-RY',
      url: 'https://youtu.be/vkPfZFaT-RY?si=pDkIZcKw5sF4kTrY',
      thumbnail: 'https://img.youtube.com/vi/vkPfZFaT-RY/maxresdefault.jpg',
      title: 'Transformation Journey',
    
    },
    {
      id: 3,
      videoId: 'p-xLo7A6y1k',
      url: 'https://youtu.be/p-xLo7A6y1k?si=pox6Trk8DMnFfj_J',
      thumbnail: 'https://img.youtube.com/vi/p-xLo7A6y1k/maxresdefault.jpg',
      title: 'Business Growth',
      
    },
  ];

  const testimonials = [
    // {
    //   quote:
    //     'STORM helped us transform our operations completely. Their strategic approach and hands-on support made all the difference.',
    //   author: 'Education Leader',
    //   role: 'School Administrator',
    //   company: 'Leading Educational Institution',
    // },
    // {
    //   quote:
    //     'The training programs designed by STORM elevated our team\'s performance significantly. We saw immediate improvements in productivity.',
    //   author: 'Business Owner',
    //   role: 'Founder & CEO',
    //   company: 'Growing Enterprise',
    // },
    // {
    //   quote:
    //     'Their recruitment and onboarding process helped us find the perfect team members. STORM truly understands talent acquisition.',
    //   author: 'Operations Manager',
    //   role: 'VP Operations',
    //   company: 'Service Industry',
    // },
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Hear from businesses we've helped transform
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Video Testimonials
          </h3>
          <div className="flex justify-center mb-6">
            <a
              href="https://www.youtube.com/@stormorganisers7949"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
            >
              <Play className="w-5 h-5" />
              Watch All Testimonials on YouTube
            </a>
          </div>
          <p className="text-center text-slate-600 text-sm">
            Visit our YouTube channel to see real client experiences and success stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {videoTestimonials.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-slate-200 rounded-2xl overflow-hidden aspect-video cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://img.youtube.com/vi/' + video.videoId + '/hqdefault.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/60 to-cyan-600/60 group-hover:from-blue-600/80 group-hover:to-cyan-600/80 transition-all duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                    <Play className="w-8 h-8 ml-1" />
                  </div>
                  <h4 className="font-bold text-lg mb-1">{video.title}</h4>
                  <p className="text-sm text-white/80">{video.company}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
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
