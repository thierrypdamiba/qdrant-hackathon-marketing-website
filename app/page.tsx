'use client'

import { useState } from 'react'
import { ChevronDown, Calendar, Users, Award, Twitter, Linkedin, Globe } from 'lucide-react'

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#090e1a] border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
              
                  <span className="text-white font-bold text-[clamp(0.75rem,2vw,0.875rem)]">Image Generation & Vector Search Hackathon</span>
                <span className="text-[clamp(1rem,2.5vw,1.125rem)] font-semibold text-gray-300">Sketch & Search</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#faq" className="text-[clamp(0.75rem,2vw,0.875rem)] text-[#f0f3fa] hover:text-red-900">FAQ</a>
              <a href="#workshops" className="text-[clamp(0.75rem,2vw,0.875rem)] text-[#f0f3fa] hover:text-red-900">Workshops</a>
              <a href="#partners" className="text-[clamp(0.75rem,2vw,0.875rem)] text-[#f0f3fa] hover:text-red-900">Partners</a>
              <a href="#schedule" className="text-[clamp(0.75rem,2vw,0.875rem)] text-[#f0f3fa] hover:text-red-900">Schedule</a>
              <a href="#judges" className="text-[clamp(0.75rem,2vw,0.875rem)] text-[#f0f3fa] hover:text-red-900">Judges</a>
              <button className="bg-[#DC244C] text-white px-5 py-2 rounded-full text-[clamp(0.75rem,2vw,0.875rem)] font-medium hover:bg-red-700 transition-colors">
                Register
              </button>
            </div>
            <button
              aria-label="Toggle navigation"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {mobileNavOpen && (
          <div className="md:hidden bg-[#090e1a] border-t border-gray-800">
            <div className="px-4 py-3 space-y-2">
              <a href="#faq" onClick={() => setMobileNavOpen(false)} className="block text-[#f0f3fa]">FAQ</a>
              <a href="#workshops" onClick={() => setMobileNavOpen(false)} className="block text-[#f0f3fa]">Workshops</a>
              <a href="#partners" onClick={() => setMobileNavOpen(false)} className="block text-[#f0f3fa]">Partners</a>
              <a href="#schedule" onClick={() => setMobileNavOpen(false)} className="block text-[#f0f3fa]">Schedule</a>
              <a href="#judges" onClick={() => setMobileNavOpen(false)} className="block text-[#f0f3fa]">Judges</a>
              <button className="w-full bg-[#DC244C] text-white px-5 py-2 rounded-full font-medium">Register</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="text-sm text-[#DC244C] font-medium bg-red-50 px-4 py-2 rounded-full">
              IN-PERSON & VIRTUAL
            </span>
          </div>
          <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] font-bold text-gray-900 mb-6 leading-tight">
            Sketch & Search Hackathon
          </h1>
          <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Combine image/video generation and vector search to build a creative pipeline that ships beautiful and trustable content.
          </p>

          {/* Horizontal Qdrant logos row */}
          <div className="mt-6 flex items-center justify-center gap-6 flex-wrap mb-8">
            <img className="h-10 sm:h-12" src="/images/qdrant.svg" alt="Qdrant logo" />
            <img className="h-10 sm:h-12" src="/images/qdrant.svg" alt="Qdrant logo" />
            <img className="h-10 sm:h-12" src="/images/qdrant.svg" alt="Qdrant logo" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <h3 className="text-[clamp(1.25rem,3.5vw,2rem)] text-gray-800 leading-relaxed">
              Join us on November 22nd in SF for our hackathon kickoff!
            </h3>
            <img className="w-full max-w-md mx-auto rounded-lg shadow-sm" src="/images/sample.jpeg" alt="Kickoff" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <img className="w-full max-w-md mx-auto rounded-lg shadow-sm" src="/images/sample.jpeg" alt="Partner tools" />
            <h3 className="text-[clamp(1.25rem,3.5vw,2rem)] text-gray-800 leading-relaxed">
              Google DeepMind&apos;s Banana Nano & Gemini, Freepik&apos;s image/video studio, and Qdrant&apos;s vector search engine.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
            <h3 className="text-[clamp(1.25rem,3.5vw,2rem)] text-gray-800 leading-relaxed">
              We&apos;ll show you how to craft creative pipelines with consistent characters, ensure brand-safe assets, master style memory, and accelerate your content creation.
            </h3>
            <img className="w-full max-w-md mx-auto rounded-lg shadow-sm" src="/images/sample.jpeg" alt="Creative pipelines" />
          </div>

          <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            And this is just the beginning! The fun continues for two weeks with a virtual hackathon where you&apos;ll build and present your application. The best submissions will be invited to present on a demo day where we announce the winners. Whether you&apos;re a designer, developer, or just someone who loves pushing creative boundaries, this is the perfect opportunity to unleash your imagination.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span className="font-medium text-[clamp(0.875rem,2vw,1rem)]">November 22 - December 7, 2025</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Users className="w-5 h-5" />
              <span className="font-medium text-[clamp(0.875rem,2vw,1rem)]">SF Kickoff + Virtual</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#DC244C] text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition-colors text-[clamp(1rem,2.5vw,1.125rem)]">
              Register Now
            </button>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors text-[clamp(1rem,2.5vw,1.125rem)] flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              <span className="text-[clamp(0.875rem,2vw,1rem)]">Join Discord</span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-[clamp(1.5rem,4vw,3rem)] font-bold text-[#DC244C] mb-2">November 22, 2025</div>
              <div className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 font-medium">Kickoff Day (SF In-Person)</div>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-[clamp(1.5rem,4vw,3rem)] font-bold text-[#DC244C] mb-2">2 Weeks</div>
              <div className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 font-medium">Virtual Build Window</div>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-[clamp(1.5rem,4vw,3rem)] font-bold text-[#DC244C] mb-2">December 11, 2025</div>
              <div className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 font-medium">Demos & Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Building the Future Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,6vw,3rem)] font-bold text-gray-900 mb-4">
              Learn to Build Creative Pipelines
            </h2>
            <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-gray-600 max-w-3xl mx-auto">
              Master the tools to create stunning, brand-safe content at scale
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-[#DC244C]" />
              </div>
              <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-bold text-gray-900 mb-3">Google DeepMind Tools</h3>
              <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed">
                Leverage Google DeepMind tools (Nano Banana and Gemini) to supercharge generation & orchestration
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-[#DC244C]" />
              </div>
              <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-bold text-gray-900 mb-3">Freepik Studio</h3>
              <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed">
                Use Freepik&apos;s image/video studio including image-as-prompt and img→video
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-[#DC244C]" />
              </div>
              <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-bold text-gray-900 mb-3">Qdrant Vector Search</h3>
              <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed">
                Find the content you need and keep characters/styles consistent with Qdrant&apos;s vector search
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#DC244C]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,6vw,3rem)] font-bold text-white mb-4">
              Prizes & Recognition
            </h2>
            <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-red-100 max-w-3xl mx-auto">
              Win prizes and get recognized for your creative innovation
            </p>
          </div>
          
          <div className="bg-red-700 rounded-3xl p-8 sm:p-12 mb-8">
            <div className="text-center mb-8">
              <h3 className="text-[clamp(1.5rem,3vw,1.875rem)] font-bold text-white mb-4">Judging Rubric</h3>
              <p className="text-red-100 text-[clamp(1rem,2.5vw,1.125rem)] mb-6">
                Projects will be evaluated across five key criteria
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-[#DC244C] rounded-xl p-6">
                <div className="text-[clamp(1rem,2.5vw,1.25rem)] font-bold text-white mb-2">Creative Quality</div>
                <div className="text-red-100 text-[clamp(0.75rem,1.5vw,0.875rem)]">Creative use of DeepMind/Freepik/Qdrant, visual polish, coherent multi-asset story</div>
              </div>
              <div className="bg-[#DC244C] rounded-xl p-6">
                <div className="text-[clamp(1rem,2.5vw,1.25rem)] font-bold text-white mb-2">Search & Similarity</div>
                <div className="text-red-100 text-[clamp(0.75rem,1.5vw,0.875rem)]">Effective Qdrant use, search, recommendation, transparent scoring</div>
              </div>
              <div className="bg-[#DC244C] rounded-xl p-6">
                <div className="text-[clamp(1rem,2.5vw,1.25rem)] font-bold text-white mb-2">Guardrails</div>
                <div className="text-red-100 text-[clamp(0.75rem,1.5vw,0.875rem)]">Copyright and brand-safe by design</div>
              </div>
              <div className="bg-[#DC244C] rounded-xl p-6">
                <div className="text-[clamp(1rem,2.5vw,1.25rem)] font-bold text-white mb-2">UX & Tradeoffs</div>
                <div className="text-red-100 text-[clamp(0.75rem,1.5vw,0.875rem)]">Clear speed/quality/cost controls, parameter clarity</div>
              </div>
              <div className="bg-[#DC244C] rounded-xl p-6 md:col-span-2 lg:col-span-1">
                <div className="text-[clamp(1rem,2.5vw,1.25rem)] font-bold text-white mb-2">Real-World Fit</div>
                <div className="text-red-100 text-[clamp(0.75rem,1.5vw,0.875rem)]">Practical use cases and measurable impact</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="w-12 h-12 bg-[#DC244C] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">🥇</span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">Grand Prize</div>
                <div className="text-2xl font-bold text-[#DC244C] mb-2">$1000</div>
                <div className="text-gray-600">Gift Card + Freepik Credits</div>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="w-12 h-12 bg-[#DC244C] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">🥈</span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">Runner-Up</div>
                <div className="text-2xl font-bold text-[#DC244C] mb-2">$500</div>
                <div className="text-gray-600">Gift Card + Freepik Credits</div>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="w-12 h-12 bg-[#DC244C] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">🥉</span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">Honorable Mention</div>
                <div className="text-2xl font-bold text-[#DC244C] mb-2">$100</div>
                <div className="text-gray-600">Gift Card + Freepik Credits</div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Partner Track — Google DeepMind</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 text-center border border-red-200">
                  <div className="text-4xl mb-3">🍌</div>
                  <div className="text-xl font-bold text-gray-900 mb-2">Best use of Nano Banana</div>
                  <div className="text-lg font-semibold text-[#DC244C]">Gemini API Credits</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center border border-purple-200">
                  <div className="text-4xl mb-3">✨</div>
                  <div className="text-xl font-bold text-gray-900 mb-2">Best use of Gemini</div>
                  <div className="text-lg font-semibold text-purple-600">Gemini API Credits</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Schedule */}
      <section id="schedule" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,6vw,3rem)] font-bold text-gray-900 mb-4">
              Event Schedule
            </h2>
          </div>
          <div className="space-y-8">
            {/* Kickoff Day Events */}
            <div className="space-y-6">
              <h3 className="text-[clamp(1.5rem,3vw,1.875rem)] font-bold text-gray-900 mb-4 text-center">Kickoff Day - November 22, 2025</h3>
              {[
                {
                  date: 'November 22, 2025',
                  title: 'Doors Open + Breakfast',
                  time: '10:00–10:30 AM PT',
                  description: 'Check-in and networking with breakfast'
                },
                {
                  date: 'November 22, 2025',
                  title: 'Google DeepMind Presentation',
                  time: '10:30–10:50 AM PT',
                  description: 'Paige Bailey: Nano Banana, and Gemini'
                },
                {
                  date: 'November 22, 2025',
                  title: 'Freepik Presentation',
                  time: '10:50–11:10 AM PT',
                  description: 'Enrique Lopez: image-as-prompt, img→video, pipelines, and Freepik MCP'
                },
                {
                  date: 'November 22, 2025',
                  title: 'Qdrant Presentation',
                  time: '11:10–11:30 AM PT',
                  description: 'Thierry Damiba: visual embeddings, vector search, recommendation, and character/style memory'
                },
                {
                  date: 'November 22, 2025',
                  title: 'Hackathon Kickoff',
                  time: '11:30–11:50 AM PT',
                  description: 'Rules, prizes, credits and template app demo'
                },
                {
                  date: 'November 22, 2025',
                  title: 'Team Formation',
                  time: '11:50 AM–12:10 PM PT',
                  description: 'Join Discord and pitch ideas'
                },
                {
                  date: 'November 22, 2025',
                  title: 'Onsite Hacking',
                  time: '12:10–2:00 PM PT',
                  description: 'Start building + mentor office hours (then virtual until December 7th at midnight)'
                }
              ].map((event, index) => (
              <div key={index} className="flex items-start space-x-4 pb-6 border-b border-gray-200 last:border-b-0">
                <div className="flex-shrink-0 w-32">
                  <div className="text-sm font-semibold text-[#DC244C]">{event.date}</div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <div className="w-2 h-2 bg-[#DC244C] rounded-full"></div>
                    <h3 className="text-lg font-bold text-gray-900">{event.title}</h3>
                  </div>
                  <div className="ml-5">
                    <div className="text-sm text-[#DC244C] mb-1">{event.time}</div>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
            </div>

            {/* Virtual Build Window */}
            <div className="space-y-6">
              <h3 className="text-[clamp(1.5rem,3vw,1.875rem)] font-bold text-gray-900 mb-4 text-center">Virtual Build Window - November 22 - December 7</h3>
              <div className="flex items-start space-x-4 pb-6">
                <div className="flex-shrink-0 w-32">
                  <div className="text-sm font-semibold text-[#DC244C]">November 22-December 7</div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <div className="w-2 h-2 bg-[#DC244C] rounded-full"></div>
                    <h3 className="text-lg font-bold text-gray-900">Virtual Build Window</h3>
                  </div>
                  <div className="ml-5">
                    <div className="text-sm text-[#DC244C] mb-1">Two Weeks</div>
                    <p className="text-gray-600">Continue building your project with mentor support on Discord</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submission Deadline */}
            <div className="space-y-6">
              <h3 className="text-[clamp(1.5rem,3vw,1.875rem)] font-bold text-gray-900 mb-4 text-center">Submission Deadline - December 7th</h3>
              <div className="flex items-start space-x-4 pb-6">
                <div className="flex-shrink-0 w-32">
                  <div className="text-sm font-semibold text-[#DC244C]">December 7, 2025</div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <div className="w-2 h-2 bg-[#DC244C] rounded-full"></div>
                    <h3 className="text-lg font-bold text-gray-900">Project Submissions Due</h3>
                  </div>
                  <div className="ml-5">
                    <div className="text-sm text-[#DC244C] mb-1">11:59 PM PT</div>
                    <p className="text-gray-600">Public GitHub repo + 2-minute demo video</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Demos & Awards */}
            <div className="space-y-6">
              <h3 className="text-[clamp(1.5rem,3vw,1.875rem)] font-bold text-gray-900 mb-4 text-center">Demos & Awards - December 11, 2025</h3>
              <div className="flex items-start space-x-4 pb-6">
                <div className="flex-shrink-0 w-32">
                  <div className="text-sm font-semibold text-[#DC244C]">December 11, 2025</div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <div className="w-2 h-2 bg-[#DC244C] rounded-full"></div>
                    <h3 className="text-lg font-bold text-gray-900">Demos & Awards</h3>
                  </div>
                  <div className="ml-5">
                    <div className="text-sm text-[#DC244C] mb-1">TBD</div>
                    <p className="text-gray-600">Live demos and winner announcements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,6vw,3rem)] font-bold text-gray-900 mb-4">
              Workshop Speakers
            </h2>
            <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-gray-600">
              Learn from industry experts and build amazing projects!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Paige Bailey',
                role: 'AI Developer Relations Lead',
                company: 'Google DeepMind',
                presentation: 'Nano Banana & Gemini: Building AI-Powered Creative Pipelines',
                description: 'Discover how to leverage Google DeepMind\'s latest tools to supercharge your creative workflows and build intelligent content generation systems.',
                headshot: '/images/deepmind.png',
                socials: {
                  twitter: 'https://twitter.com/paigebailey',
                  linkedin: 'https://linkedin.com/in/paigebailey',
                  github: 'https://github.com/paigebailey'
                }
              },
              {
                name: 'Enrique Lopez',
                role: 'Creative Community Specialist',
                company: 'Freepik',
                presentation: 'Image-as-Prompt & Video Generation: From Concept to Creation',
                description: 'Master Freepik\'s image and video generation capabilities, including advanced techniques for consistent character creation and style memory.',
                headshot: '/images/freepik.png',
                socials: {
                  twitter: 'https://twitter.com/enriquelopez',
                  linkedin: 'https://linkedin.com/in/enriquelopez',
                  github: 'https://github.com/enriquelopez'
                }
              },
              {
                name: 'Thierry Damiba',
                role: 'Developer Advocate',
                company: 'Qdrant',
                presentation: 'Vector Search & Visual Embeddings: Finding Your Perfect Match',
                description: 'Learn how to implement powerful vector search capabilities for visual content, ensuring character consistency and style memory across your projects.',
                headshot: '/images/qdrant.svg',
                socials: {
                  twitter: 'https://twitter.com/thierrydamiba',
                  linkedin: 'https://linkedin.com/in/thierrydamiba',
                  github: 'https://github.com/thierrydamiba'
                }
              }
            ].map((speaker, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200">
                    <img 
                      src={speaker.headshot} 
                      alt={`${speaker.name} headshot`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-bold text-gray-900 mb-1">{speaker.name}</h3>
                  <div className="text-[#DC244C] font-medium mb-1">{speaker.role}</div>
                  <div className="text-gray-600 text-[clamp(0.875rem,2vw,1rem)]">{speaker.company}</div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-[clamp(1rem,2.5vw,1.125rem)] font-semibold text-gray-900 mb-3">
                    {speaker.presentation}
                  </h4>
                  <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed">
                    {speaker.description}
                  </p>
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <a 
                    href={speaker.socials.twitter} 
                    className="text-gray-400 hover:text-[#DC244C] transition-colors"
                    aria-label={`${speaker.name} Twitter`}
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a 
                    href={speaker.socials.linkedin} 
                    className="text-gray-400 hover:text-[#DC244C] transition-colors"
                    aria-label={`${speaker.name} LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={speaker.socials.github} 
                    className="text-gray-400 hover:text-[#DC244C] transition-colors"
                    aria-label={`${speaker.name} GitHub`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,6vw,3rem)] font-bold text-gray-900 mb-4">
              Partners
            </h2>
            <p className="text-xl text-gray-600">
              Brought to you by Google DeepMind, Freepik, and Qdrant
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200 flex items-center justify-center bg-white">
                <img src="/images/deepmind.png" alt="Google DeepMind logo" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Google DeepMind</h3>
              <p className="text-gray-600 mb-4">
                Pioneering AI research with Gemini and Nano Banana
              </p>
              <div className="flex items-center justify-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200 flex items-center justify-center bg-white">
                <img src="/images/freepik.png" alt="Freepik logo" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Freepik</h3>
              <p className="text-gray-600 mb-4">
                Leading AI-powered image and video generation platform
              </p>
              <div className="flex items-center justify-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200 flex items-center justify-center bg-white">
                <img src="/images/qdrant.svg" alt="Qdrant logo" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Qdrant</h3>
              <p className="text-gray-600 mb-4">
                High-performance vector database for AI applications
              </p>
              <div className="flex items-center justify-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Judges Section */}
      <section id="judges" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,6vw,3rem)] font-bold text-gray-900 mb-4">
              Meet the Judges
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Paige Bailey',
                role: 'Product Manager',
                company: 'Google DeepMind',
                bio: 'Leading Google DeepMind developer tools, championing Gemini and Nano Banana'
              },
              {
                name: 'Enrique Lopez',
                role: 'Lead Engineer',
                company: 'Freepik',
                bio: 'Building the future of image and video generation with Freepik MCP'
              },
              {
                name: 'Thierry Damiba',
                role: 'Developer Advocate',
                company: 'Qdrant',
                bio: 'Expert in vector search, visual embeddings, and character consistency'
              },
              {
                name: 'Joaquin Cuenca Abela',
                role: 'CEO & Co-Founder',
                company: 'Freepik',
                bio: 'Leading the revolution in AI-powered creative content generation'
              },
              {
                name: 'Andre Zayarni',
                role: 'CEO & Co-Founder',
                company: 'Qdrant',
                bio: 'Building high-performance vector search for the AI era'
              },
              {
                name: 'Kacper Łukawski',
                role: 'Developer Advocate',
                company: 'Qdrant',
                bio: 'Expert in vector databases and recommendation systems'
              }
            ].map((judge, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">{judge.name}</h3>
                <div className="text-[#DC244C] font-medium text-center mb-1">{judge.role}</div>
                <div className="text-gray-600 text-sm text-center mb-4">{judge.company}</div>
                <p className="text-gray-600 text-sm text-center leading-relaxed">{judge.bio}</p>
                <div className="flex items-center justify-center space-x-3 mt-4">
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,6vw,3rem)] font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-[#DC244C]">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                question: 'Is this event in-person?',
                answer: 'The kickoff on November 22nd is in-person in SF (with virtual option). The build window (November 22-December 7) and demos (December 11) are fully virtual, so you can participate from anywhere!'
              },
              {
                question: 'Do I need a team?',
                answer: 'You can participate solo or with a team. We\'ll have team formation during the kickoff event to help you find teammates and pitch ideas on Discord.'
              },
              {
                question: 'What should I build?',
                answer: 'Build creative pipelines that leverage Google DeepMind\'s Nano Banana & Gemini models, Freepik\'s image/video generation, and Qdrant\'s vector search. Focus on consistent characters, brand safety, style memory, or any innovative content creation workflow.'
              },
              {
                question: 'How do I submit my project?',
                answer: 'Submit by December 7th, 11:59 PM PT with a public GitHub repo and a 2-minute demo video showing your project in action. Submission link will be shared during the kickoff.'
              },
              {
                question: 'What are the judging criteria?',
                answer: 'Projects are judged on: Creative Quality (use of DeepMind/Freepik/Qdrant), Search & Similarity features, Guardrails implementation, UX & Tradeoffs, and Real-World Fit. See the Judging Rubric section for details.'
              },
              {
                question: 'Will I get API credits?',
                answer: 'Yes! Participants will receive API credits from Google DeepMind, Freepik, and Qdrant to build their projects. Details will be shared at the kickoff event.'
              },
              {
                question: 'Where can I get help?',
                answer: 'Join our Discord for mentor office hours throughout the two-week build window. Ask questions, share ideas, and get technical support from the Google DeepMind, Freepik, and Qdrant teams.'
              },
              {
                question: 'What are the prizes?',
                answer: 'Win up to $500 in gift cards + Freepik credits for top submissions. Plus special Google DeepMind partner prizes: Gemini API Credits for Best use of Nano Banana and Best use of Gemini!'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <button className="bg-[#DC244C] text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition-colors">
              Contact us on Discord
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#DC244C] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S&S</span>
                </div>
                <span className="text-lg font-semibold">Sketch & Search</span>
              </div>
              <p className="text-gray-400 text-sm">
                Google DeepMind × Freepik × Qdrant Hackathon
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Event</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#schedule" className="hover:text-white">Schedule</a></li>
                <li><a href="#judges" className="hover:text-white">Judges</a></li>
                <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">MCP Guide</a></li>
                <li><a href="#" className="hover:text-white">Agent Guide</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Discord</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-sm text-gray-400">
                © 2024 Sketch & Search Hackathon. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a>
                <a href="#" className="text-sm text-gray-400 hover:text-white">Terms of Service</a>
                <a href="#" className="text-sm text-gray-400 hover:text-white">Code of Conduct</a>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              This site is for informational purposes only. Impressum/Legal Notice available upon request.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

