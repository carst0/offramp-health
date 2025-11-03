import { Card } from "@/components/ui/card";
import { ChevronDown, Star } from "lucide-react";
import { useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("monthly");

  // Function to track button clicks
  const trackButtonClick = (buttonLocation: string) => {
    if (window.gtag) {
      window.gtag("event", "find_your_coach_click", {
        button_location: buttonLocation,
        timestamp: new Date().toISOString(),
      });
    }
  };

  const testimonials = [
    {
      title: "Finally sustainable after my weight loss",
      quote:
        "I lost the weight, but I didn't know how to maintain it. This program helped me transition to a healthier lifestyle without the pressure.",
      author: "Sarah M.",
      source: "Google Play Store",
    },
    {
      title: "More accountability than an app",
      quote:
        "Having a real coach who understands my journey made all the difference. The daily check-ins kept me on track when I wanted to give up.",
      author: "James T.",
      source: "Apple App Store",
    },
    {
      title: "The human touch is everything",
      quote:
        "I've tried every app out there. Working with an actual coach who cares about my success is a game changer.",
      author: "Michael R.",
      source: "Product Hunt",
    },
    {
      title: "Confidence in my new lifestyle",
      quote:
        "I feel more confident every day knowing I have someone supporting my journey to a healthier, sustainable life.",
      author: "Lisa K.",
      source: "Apple App Store",
    },
    {
      title: "Offramp made it simple",
      quote:
        "Transitioning off GLP-1s was scary, but having a coach guide me through nutrition and fitness made it manageable and sustainable.",
      author: "David P.",
      source: "Google Play Store",
    },
    {
      title: "Real results, real support",
      quote:
        "My trainer is there whenever I need guidance. The accountability and personalized approach have transformed my health.",
      author: "Emma W.",
      source: "Apple App Store",
    },
  ];



  const faqs = [
    {
      question: "Why do I need a coach after losing weight?",
      answer:
        "Weight loss is just the first step. Maintaining your results and building sustainable habits requires personalized guidance and accountability.",
    },
    {
      question: "How does online coaching work?",
      answer:
        "You'll work with your coach via text, video calls, and our app. They'll create a custom nutrition and fitness plan tailored to your goals.",
    },
    {
      question: "How is online coaching different from going to a gym?",
      answer:
        "Online coaching gives you personalized attention, daily accountability, and nutrition guidance—all at a fraction of the cost of in-person training.",
    },
    {
      question: "What if my coach isn't a good fit?",
      answer:
        "We make it easy to switch coaches. Your success is our priority, so we'll find someone who's the right fit for you.",
    },
    {
      question: "How will my coach help with nutrition?",
      answer:
        "Your coach will create a personalized nutrition plan, help you track macros, provide meal ideas, and give daily guidance to keep you on track.",
    },
    {
      question: "What kind of workouts can I do?",
      answer:
        "Your coach designs workouts based on your fitness level, equipment, injuries, and goals. Whether you prefer home workouts or the gym, we've got you covered.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center flex-shrink-0">
              <img
                src="/logo.png"
                alt="Offramp Health"
                className="h-10 sm:h-12 md:h-14 w-auto max-w-[200px] sm:max-w-none"
              />
            </a>

            {/* Navigation */}
            <nav className="hidden md:flex gap-8">
              <a
                href="#how-it-works"
                className="text-gray-900 font-semibold hover:text-purple-600 transition"
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="text-gray-900 font-semibold hover:text-purple-600 transition"
              >
                Pricing
              </a>
              <a href="#" className="text-gray-900 font-semibold hover:text-purple-600 transition">
                Gifts
              </a>
              <a href="#" className="text-gray-900 font-semibold hover:text-purple-600 transition">
                Blog
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="flex gap-2 md:gap-4 flex-shrink-0">
              <a
                href="https://www.trainwithkickoff.com/client-sign-up?questionId=504"
                onClick={() => trackButtonClick("login")}
                className="px-3 md:px-6 py-1.5 md:py-2 text-xs md:text-sm text-gray-900 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition whitespace-nowrap"
              >
                Login
              </a>
              <a
                href="https://www.trainwithkickoff.com/client-sign-up?questionId=504"
                onClick={() => trackButtonClick("header")}
                className="px-3 md:px-6 py-1.5 md:py-2 text-xs md:text-sm bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition flex items-center gap-1 md:gap-2 whitespace-nowrap"
              >
                Find Coach <span className="hidden md:inline">→</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              You've Lost the Weight.
              <br />
              Now Find Your Offramp.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transition to a healthier, sustainable lifestyle with 1-on-1 personal training and nutrition guidance designed for your journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://www.trainwithkickoff.com/client-sign-up?questionId=504"
                onClick={() => trackButtonClick("hero")}
                className="px-8 py-4 bg-purple-600 text-white rounded-lg font-bold text-lg hover:bg-purple-700 transition inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Find Your Coach <span>→</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>4.9/5 • 2k+ Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Media Logos */}
      <section className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 text-sm font-semibold mb-8">
            Featured in leading publications
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="text-gray-400 font-bold text-lg">The New York Times</div>
            <div className="text-gray-400 font-bold text-lg">Parade</div>
            <div className="text-gray-400 font-bold text-lg">Bustle</div>
            <div className="text-gray-400 font-bold text-lg">AskMen</div>
            <div className="text-gray-400 font-bold text-lg">Goop</div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              The most affordable & convenient way to build sustainable health
            </h2>
            <p className="text-xl text-gray-600">
              Real results require real human support
            </p>
          </div>

          {/* Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">In-Person Trainer</h3>
              <div className="space-y-4">
                {[
                  { label: "Strong support & accountability", hasFeature: true },
                  { label: "Integration exercise & nutrition", hasFeature: false },
                  { label: "On demand, anytime, anywhere", hasFeature: false },
                  { label: "No contracts or cancel fees", hasFeature: false },
                  { label: "FSA/HSA eligible", hasFeature: false },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-xl" style={{color: item.hasFeature ? '#28c949' : '#ef4444'}}>
                      {item.hasFeature ? '✓' : '✕'}
                    </span>
                    <span className="text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t">
                <div className="text-red-500 text-4xl font-black">$100+</div>
                <div className="text-gray-600">per session</div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-purple-600 bg-purple-50">
              <h3 className="text-2xl font-bold mb-6">Offramp Health</h3>
              <div className="space-y-4">
                {[
                  "Strong support & accountability",
                  "Integration exercise & nutrition",
                  "On demand, anytime, anywhere",
                  "No contracts or cancel fees",
                  "FSA/HSA eligible",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t">
                <div className="text-purple-600 text-4xl font-black">$3</div>
                <div className="text-gray-600">per day</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-center">
            We believe real health results require a real human relationship
          </h2>

          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-12 text-center">
              How you'll work with your coach
            </h3>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  num: 1,
                  title: "Complete our 15-point quiz",
                  desc: "Get matched with the perfect coach for your specific goals and lifestyle",
                },
                {
                  num: 2,
                  title: "Video call to align",
                  desc: "Create a custom exercise & nutrition plan tailored to your needs",
                },
                {
                  num: 3,
                  title: "Do personalized workouts",
                  desc: "Workouts designed just for you while optimizing your nutrition",
                },
                {
                  num: 4,
                  title: "Stay accountable",
                  desc: "Daily check-ins and optional calls to keep you on track",
                },
              ].map((step) => (
                <div key={step.num} className="text-center">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4">
                    {step.num}
                  </div>
                  <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              8,000+ Certified Coaches
            </h2>
            <p className="text-xl text-gray-600">
              With every possible expertise to match perfectly with you. From weight loss to postpartum to medical issues.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-black mb-4">Your One-Stop Shop</h3>
              <p className="text-gray-600 text-lg">
                We integrate with all your favorite wellness apps to keep everything in one place.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-black mb-4">Custom Workouts</h3>
              <p className="text-gray-600 text-lg">
                Do workouts designed specifically for you. Optimized for your experience level, injuries, interests, goals, equipment, and more.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-black mb-4">Accountability</h3>
              <p className="text-gray-600 text-lg">
                Stay motivated with daily check-ins and optional live video sessions. Get unlimited on-demand support to reach your potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Personal training for $3 a day
            </h2>
            <p className="text-xl text-gray-600">
              No cancellation fees. No contracts. Cancel anytime.
            </p>
          </div>

          {/* Pricing Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {[
              { id: "monthly", label: "Monthly" },
              { id: "sixmonths", label: "6 Months", badge: "Save 10%" },
              { id: "yearly", label: "Yearly", badge: "Save 20%" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-bold transition relative ${
                  activeTab === tab.id
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-900 border border-gray-300"
                }`}
              >
                {tab.label}
                {tab.badge && (
                  <span className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Pricing Card */}
            <Card className="max-w-2xl mx-auto p-8 border-2 border-purple-600">
            <div className="text-center mb-8">
              <div className="text-5xl font-black text-purple-600 mb-2">
                $95
              </div>
              <div className="text-gray-600 text-lg">billed monthly</div>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "A 1-on-1 call with your coach",
                "Custom exercise & nutrition program",
                "Daily accountability & guidance",
                "Unlimited custom workouts",
                "Live video workouts with your coach",
                "Personalized nutrition coaching",
                "FSA/HSA Eligible",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="https://www.trainwithkickoff.com/client-sign-up?questionId=504"
              onClick={() => trackButtonClick("pricing")}
              className="w-full block text-center px-8 py-4 bg-purple-600 text-white rounded-lg font-bold text-lg hover:bg-purple-700 transition"
            >
              Get Matched
            </a>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
            What our clients have to say
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <h3 className="font-bold mb-2">{testimonial.title}</h3>
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <div className="text-sm">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.source}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-lg border border-gray-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 group-open:rotate-180 transition" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 border-t border-gray-200">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to find your offramp?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Start your journey to sustainable health with a certified coach today.
          </p>
          <a
            href="https://www.trainwithkickoff.com/client-sign-up?questionId=504"
            onClick={() => trackButtonClick("final_cta")}
            className="inline-block px-8 py-4 bg-white text-purple-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
          >
            Find Your Coach
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#how-it-works" className="hover:text-white transition">How it works</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <p>hello@offramphealth.com</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p>© 2025 Offramp Health. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
