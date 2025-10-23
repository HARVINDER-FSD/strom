import { Mail, Phone, Send, MapPin, Linkedin, Clock, MessageCircle } from 'lucide-react';
import { useState } from 'react';



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    organizationName: '',
    position: '',
    connectingFor: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send email using Resend API
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        mobile: '',
        email: '',
        organizationName: '',
        position: '',
        connectingFor: '',
        message: '',
      });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/shaishav-kayastha-952ba818?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      label: 'LinkedIn',
      color: 'hover:text-blue-600',
      svg: null
    },
    {
      icon: null,
      url: 'https://www.instagram.com/shaishav.kayastha?igsh=NXE2aHN4ZngybDRh',
      label: 'Instagram',
      color: 'hover:text-pink-600',
      svg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      icon: null,
      url: 'https://www.youtube.com/@stormorganisers7949/videos',
      label: 'YouTube',
      color: 'hover:text-red-600',
      svg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
        </svg>
      )
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Let's Build Your Growth Story Together
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Schedule a free consultation and take the first step toward smarter
            business decisions
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-sm text-slate-600">Projects Delivered</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-sm text-slate-600">Happy Clients</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border-2 border-emerald-100">
              <div className="text-3xl font-bold text-emerald-600 mb-2">15+</div>
              <div className="text-sm text-slate-600">Industries Served</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border-2 border-orange-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm text-slate-600">Support Available</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-5 text-white">
              <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">Email Us</p>
                    <a
                      href="mailto:storm.organisers@gmail.com"
                      className="text-lg font-semibold hover:text-blue-400 transition-colors duration-300"
                    >
                      storm.organisers@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">Call or WhatsApp</p>
                    <a
                      href="tel:+919099921767"
                      className="text-lg font-semibold hover:text-teal-400 transition-colors duration-300"
                    >
                      +91 9099921767
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">Location</p>
                    <p className="text-base font-semibold">India</p>
                    <p className="text-xs text-slate-300 mt-0.5">Serving clients nationwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">WhatsApp Business</p>
                    <a
                      href="https://wa.me/919099921767"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold hover:text-purple-400 transition-colors duration-300"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">Business Hours</p>
                    <p className="text-base font-semibold">Mon - Sat: 9 AM - 7 PM</p>
                    <p className="text-xs text-slate-300 mt-0.5">Sunday: By appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Contact Options</h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/919099921767?text=Hi%20STORM%2C%20I%27d%20like%20to%20discuss%20business%20consulting%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group"
                >
                  <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold">WhatsApp Us</p>
                    <p className="text-sm text-white/80">Get instant response</p>
                  </div>
                </a>

                <a
                  href="tel:+919099921767"
                  className="flex items-center gap-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group"
                >
                  <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold">Call Now</p>
                    <p className="text-sm text-white/80">Speak with our team</p>
                  </div>
                </a>

                <a
                  href="mailto:storm.organisers@gmail.com?subject=Business Inquiry&body=Hi STORM Team,%0D%0A%0D%0AI would like to discuss..."
                  className="flex items-center gap-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group"
                >
                  <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-sm text-white/80">Detailed inquiries</p>
                  </div>
                </a>
              </div>
            </div> */}

            <div className="bg-slate-50 rounded-2xl p-5">
              <h3 className="text-lg font-bold text-slate-800 mb-3">
                Connect With Us
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`w-12 h-12 bg-white border-2 border-slate-200 rounded-xl flex items-center justify-center text-slate-600 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                    >
                      {Icon ? <Icon className="w-5 h-5" /> : social.svg}
                    </a>
                  );
                })}
              </div>
              <p className="text-sm text-slate-600 mt-4">
                Follow us for insights, tips, and updates on business growth and
                organizational excellence
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-5 text-white">
              <h3 className="text-lg font-bold mb-2.5">Why Work With STORM?</h3>
              <ul className="space-y-2">
                {[
                  'Free initial consultation',
                  'Customized solutions for your business',
                  'Experienced IIM Ahmedabad alumni team',
                  'Proven track record across industries',
                  'End-to-end implementation support',
                  'Data-driven decision making',
                  'Flexible engagement models',
                  'Post-implementation support',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                      <img
                        src="/Untitled-1.png"
                        alt="check"
                        className="w-5 h-5 object-contain"
                      />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>


          </div>

          <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 shadow-xl">
            <div className="mb-5">
              <h3 className="text-2xl font-bold text-slate-800">
                Send Us a Message
              </h3>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-4 p-3 bg-green-50 border-2 border-green-200 rounded-lg text-green-800 text-sm">
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-4 p-3 bg-red-50 border-2 border-red-200 rounded-lg text-red-800 text-sm">
                ✗ Failed to send message. Please try again or email us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 text-sm border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                  Mobile *
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 text-sm border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300"
                  placeholder="+91 9099921767"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 text-sm border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="organizationName"
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                  Organization Name *
                </label>
                <input
                  type="text"
                  id="organizationName"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 text-sm border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300"
                  placeholder="Your company/organization"
                />
              </div>

              <div>
                <label
                  htmlFor="position"
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                  Position *
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 text-sm border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300"
                  placeholder="Your job title/position"
                />
              </div>

              <div>
                <label
                  htmlFor="connectingFor"
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                  Connecting For *
                </label>
                <select
                  id="connectingFor"
                  name="connectingFor"
                  value={formData.connectingFor}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 text-sm border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300 bg-white"
                >
                  <option value="">Select service</option>
                  <option value="Strategy and SOP">Strategy and SOP</option>
                  <option value="Training and Development">Training and Development</option>
                  <option value="Operation and Process Guidance">Operation and Process Guidance</option>
                  <option value="Recruitment Support">Recruitment Support</option>
                  <option value="Media and Social Media Management">Media and Social Media Management</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2.5 text-sm border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us more about your requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none mt-5"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
