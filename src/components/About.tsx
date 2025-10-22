import { Target, Rocket, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            About STORM
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We partner with organizations to transform vision into action
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-800">
              Transforming Ideas Into Impactful Action
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              At STORM, we partner with organizations to transform vision into
              action. With expertise in strategy design, process creation,
              training, recruitment, operations, and marketing guidance, we help
              businesses run smarter, grow faster, and stay ahead of competition.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you're a startup looking for structure or an established
              company seeking efficiency and scale, we craft customized solutions
              that deliver real, measurable results.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                Strategy Design
              </div>
              <div className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold">
                Process Creation
              </div>
              <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
                Training & Development
              </div>
              <div className="bg-violet-100 text-violet-800 px-4 py-2 rounded-full text-sm font-semibold">
                Operations
              </div>
              <div className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold">
                Marketing Guidance
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">
                      Our Vision
                    </h4>
                    <p className="text-slate-600">
                      To be the trusted partner that transforms ideas into
                      impactful action — enabling businesses to thrive with
                      clarity, efficiency, and sustainable growth.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">
                      Our Mission
                    </h4>
                    <p className="text-slate-600">
                      We empower organizations to scale smarter by designing agile
                      strategies, building strong operational frameworks, nurturing
                      talent, and guiding marketing impact.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">
                      Our Approach
                    </h4>
                    <p className="text-slate-600">
                      Clarity + Action = Growth. We understand your business
                      deeply, design tailor-made solutions, and implement
                      strategies that work in the real world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Our Story
          </h3>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Every great business starts with a vision, but growth often brings
              complexity. Many organizations struggle with fragmented processes,
              untrained teams, and unclear strategies that limit their potential.
            </p>
            <p>
              That's where <span className="font-bold text-slate-800">STORM</span>{' '}
              was born — from the belief that{' '}
              <span className="font-bold text-blue-600">
                clarity + action = Growth
              </span>
              . Founded by IIM Ahmedabad Alumni and Professionals with deep
              expertise across business operations, talent development, and
              marketing, we set out to help companies move beyond day-to-day
              firefighting and build long-term success.
            </p>
            <p>
              Over the years, we've worked with dynamic startups, expanding SMEs,
              and established enterprises, helping them define their direction,
              streamline operations, recruit and train the right people, and
              position themselves strongly in the market.
            </p>
            <p className="text-xl font-semibold text-slate-800 pt-4">
              We're not just consultants — we're growth partners committed to
              seeing your business flourish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
