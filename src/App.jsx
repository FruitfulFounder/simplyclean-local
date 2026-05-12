import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  CalendarCheck,
  ShieldCheck,
  Home,
  Bath,
  Building2,
  Star,
  CheckCircle2,
  Menu,
  X,
  Leaf,
  Clock,
  HeartHandshake,
} from "lucide-react";

const services = [
  {
    icon: <Home />,
    title: "Home Cleaning",
    text: "Reliable standard cleaning for kitchens, bathrooms, bedrooms, living areas, dusting, floors, and surfaces.",
  },
  {
    icon: <Sparkles />,
    title: "Deep Cleaning",
    text: "A detailed reset for homes that need extra care, buildup removal, baseboards, fixtures, and harder-to-reach areas.",
  },
  {
    icon: <CalendarCheck />,
    title: "Recurring Services",
    text: "Weekly, biweekly, or monthly cleaning plans so your home stays fresh without constant scheduling stress.",
  },
  {
    icon: <Building2 />,
    title: "Move-In / Move-Out",
    text: "Empty-home cleaning for apartments, rentals, and houses before or after a move.",
  },
];

const checklist = [
  "Kitchen counters, sink, stovetop, and appliance exteriors",
  "Bathroom toilets, tubs, showers, mirrors, and fixtures",
  "Bedroom and living area dusting, surfaces, and floors",
  "Trash removal and final walkthrough touch-ups",
];

const reviews = [
  {
    name: "Jessica T.",
    text: "GeMas Cleaning made my home feel brand new. The bathrooms and kitchen looked amazing.",
  },
  {
    name: "Monica S.",
    text: "Professional, friendly, and very detailed. I would absolutely book again.",
  },
  {
    name: "David L.",
    text: "Easy communication and great work. The house felt fresh and clean when they finished.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f7f4ec] text-[#0f2f22]">
      <header className="sticky top-0 z-50 border-b border-[#d8d1bd] bg-[#fbfaf5]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#06452f] text-white shadow-sm">
              <Sparkles className="h-6 w-6" />
            </div>
            <div className="text-left">
              <p className="text-xl font-black tracking-tight">GeMas Cleaning</p>
              <p className="text-xs tracking-[0.18em] text-[#5e744f]">TRUSTED. LOCAL. RELIABLE.</p>
            </div>
          </button>

          <nav className="hidden items-center gap-7 text-sm font-bold text-[#254535] md:flex">
            <button onClick={() => scrollTo("services")} className="hover:text-[#0b6b47]">Services</button>
            <button onClick={() => scrollTo("about")} className="hover:text-[#0b6b47]">About</button>
            <button onClick={() => scrollTo("reviews")} className="hover:text-[#0b6b47]">Reviews</button>
            <button onClick={() => scrollTo("quote")} className="hover:text-[#0b6b47]">Request Quote</button>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="tel:+15035550198" className="rounded-full bg-[#06452f] px-6 py-3 text-sm font-black text-white shadow-lg shadow-[#06452f]/10 hover:bg-[#083823]">
              Call Now
            </a>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#d8d1bd] bg-[#fbfaf5] px-5 py-4 md:hidden">
            <div className="grid gap-3 text-sm font-bold">
              <button onClick={() => scrollTo("services")} className="text-left">Services</button>
              <button onClick={() => scrollTo("about")} className="text-left">About</button>
              <button onClick={() => scrollTo("reviews")} className="text-left">Reviews</button>
              <button onClick={() => scrollTo("quote")} className="rounded-full bg-[#06452f] px-5 py-3 text-white">Request Quote</button>
            </div>
          </div>
        )}
      </header>

      <main id="home">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(87,117,61,0.20),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(6,69,47,0.18),_transparent_40%)]" />
          <div className="absolute -bottom-32 left-0 right-0 -z-10 h-72 rounded-[100%_100%_0_0] bg-[#06452f]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c8d6b8] bg-white/80 px-4 py-2 text-sm font-bold text-[#06452f] shadow-sm">
                <ShieldCheck className="h-4 w-4" /> Portland-area cleaning with care and detail
              </div>
              <h1 className="max-w-3xl text-5xl font-black tracking-tight text-[#08291c] sm:text-6xl lg:text-7xl">
                A cleaner home, a better life.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#405347]">
                GeMas Cleaning provides trusted local home cleaning, deep cleaning, move-in/move-out cleaning, and recurring services with a professional, personal touch.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button onClick={() => scrollTo("quote")} className="rounded-full bg-[#06452f] px-8 py-4 text-base font-black text-white shadow-xl shadow-[#06452f]/15 hover:bg-[#083823]">
                  Request a Free Quote
                </button>
                <a href="tel:+15035550198" className="rounded-full border border-[#9dac82] bg-white/80 px-8 py-4 text-center text-base font-black text-[#06452f] hover:bg-white">
                  Call (503) 555-0198
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
                <Stat value="4.9" label="Customer rating" />
                <Stat value="24hr" label="Quote response" />
                <Stat value="PDX" label="Local service" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
              <div className="rounded-[2rem] border border-[#d8d1bd] bg-[#fbfaf5] p-6 shadow-2xl shadow-[#08291c]/10">
                <div className="rounded-[1.7rem] bg-[#06452f] p-8 text-white">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#b6ca94]">Owner & Operator</p>
                      <h2 className="mt-3 text-4xl font-black">Heidy Lopez</h2>
                    </div>
                    <Leaf className="h-10 w-10 text-[#b6ca94]" />
                  </div>
                  <p className="mt-6 text-lg leading-8 text-[#edf5e6]">
                    Careful, dependable cleaning for homes that deserve a fresh, peaceful reset.
                  </p>
                </div>
                <div className="grid gap-3 p-5">
                  <ContactLine icon={<Phone />} label="Phone" value="(503) 555-0198" />
                  <ContactLine icon={<Mail />} label="Email" value="heidylopez@gemascleaning.com" />
                  <ContactLine icon={<MapPin />} label="Location" value="Portland, Oregon" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="bg-[#06452f] px-5 py-20 text-white">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Our Services" title="Cleaning services for every season of home" description="Choose the cleaning service that fits your home, your schedule, and the level of detail you need." dark />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <div key={service.title} className="rounded-[2rem] border border-white/10 bg-white/8 p-7 shadow-xl shadow-black/10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#b6ca94] text-[#06452f]">
                    {React.cloneElement(service.icon, { className: "h-7 w-7" })}
                  </div>
                  <h3 className="mt-6 text-2xl font-black">{service.title}</h3>
                  <p className="mt-4 leading-7 text-[#e7efe0]">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="px-5 py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#d8d1bd] bg-white p-8 shadow-xl shadow-[#08291c]/5">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#5e744f]">Why GeMas Cleaning</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-[#08291c]">Trusted. Local. Reliable.</h2>
              <p className="mt-5 text-lg leading-8 text-[#405347]">
                GeMas Cleaning is built around simple communication, dependable service, and detailed cleaning. Whether you need a one-time deep clean or recurring help, the goal is to make your home feel lighter, fresher, and easier to enjoy.
              </p>
              <div className="mt-8 grid gap-4">
                <Feature icon={<ShieldCheck />} title="Trusted service" text="Clear communication, respectful home care, and dependable follow-through." />
                <Feature icon={<Clock />} title="Flexible scheduling" text="Request the time and service you need, then confirm the best available appointment." />
                <Feature icon={<HeartHandshake />} title="Personal touch" text="A local business feel with care, detail, and pride in every cleaning." />
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#ede7d8] p-8">
              <div className="rounded-[1.7rem] bg-[#fbfaf5] p-7 shadow-lg shadow-[#08291c]/5">
                <div className="flex items-center gap-3">
                  <Bath className="h-8 w-8 text-[#06452f]" />
                  <h3 className="text-2xl font-black">What a cleaning can include</h3>
                </div>
                <div className="mt-7 grid gap-4">
                  {checklist.map((item) => (
                    <p key={item} className="flex gap-3 leading-7 text-[#405347]">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#0b6b47]" />
                      {item}
                    </p>
                  ))}
                </div>
                <p className="mt-7 rounded-2xl bg-[#f7f4ec] p-5 text-sm leading-6 text-[#405347]">
                  Final service details and pricing can be confirmed after reviewing the home size, condition, location, and cleaning needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-[#fbfaf5] px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Customer Reviews" title="Homes cleaned with care" description="A professional look and reputation-focused website helps new customers feel comfortable reaching out." />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {reviews.map((review) => (
                <div key={review.name} className="rounded-[2rem] border border-[#d8d1bd] bg-white p-7 shadow-sm">
                  <div className="flex gap-1 text-[#5e744f]">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                  </div>
                  <p className="mt-5 leading-7 text-[#405347]">“{review.text}”</p>
                  <p className="mt-6 font-black text-[#08291c]">{review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="quote" className="px-5 py-20">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] bg-[#06452f] p-8 text-white lg:p-10">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#b6ca94]">Request a quote</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight">Ready for a cleaner home?</h2>
              <p className="mt-5 text-lg leading-8 text-[#edf5e6]">
                Send your cleaning request and GeMas Cleaning will follow up to confirm the details, schedule, and quote.
              </p>
              <div className="mt-8 grid gap-4">
                <QuotePoint text="Serving Portland, Oregon and nearby areas" />
                <QuotePoint text="Home, deep, recurring, and move cleaning" />
                <QuotePoint text="Friendly quote process before booking" />
              </div>
            </div>

            <form className="rounded-[2rem] border border-[#d8d1bd] bg-white p-6 shadow-xl shadow-[#08291c]/5 lg:p-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Full Name" placeholder="Your name" />
                <Field label="Phone Number" placeholder="(503) 555-0198" />
                <Field label="Email" placeholder="you@example.com" type="email" />
                <Field label="ZIP Code" placeholder="97201" />
                <label>
                  <span className="text-sm font-black text-[#254535]">Cleaning Type</span>
                  <select className="mt-2 w-full rounded-2xl border border-[#d8d1bd] bg-white px-4 py-3 outline-none focus:border-[#06452f]">
                    <option>Home Cleaning</option>
                    <option>Deep Cleaning</option>
                    <option>Recurring Services</option>
                    <option>Move-In / Move-Out</option>
                  </select>
                </label>
                <Field label="Preferred Date" type="date" />
                <label className="md:col-span-2">
                  <span className="text-sm font-black text-[#254535]">Cleaning Details</span>
                  <textarea className="mt-2 min-h-36 w-full rounded-2xl border border-[#d8d1bd] px-4 py-3 outline-none focus:border-[#06452f]" placeholder="Example: 3 bedrooms, 2 bathrooms, kitchen, living room. Please focus on bathrooms, floors, and kitchen." />
                </label>
              </div>
              <button className="mt-6 w-full rounded-full bg-[#06452f] px-7 py-4 text-base font-black text-white hover:bg-[#083823]">
                Submit Quote Request
              </button>
              <p className="mt-4 text-center text-xs text-[#5f6f63]">
                Demo form: connect this to Formspree or a backend when ready.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#08291c] px-5 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#b6ca94] text-[#06452f]"><Sparkles className="h-6 w-6" /></div>
              <div>
                <p className="text-xl font-black">GeMas Cleaning</p>
                <p className="text-xs tracking-[0.18em] text-[#b6ca94]">TRUSTED. LOCAL. RELIABLE.</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#dce7d2]">
              Professional local cleaning for homes, deep cleans, move cleanings, and recurring service.
            </p>
          </div>
          <div>
            <p className="font-black">Contact</p>
            <div className="mt-4 grid gap-3 text-sm text-[#dce7d2]">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> (503) 555-0198</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> heidylopez@gemascleaning.com</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Portland, Oregon</p>
            </div>
          </div>
          <div>
            <p className="font-black">Services</p>
            <div className="mt-4 grid gap-2 text-sm text-[#dce7d2]">
              <p>Home Cleaning</p>
              <p>Deep Cleaning</p>
              <p>Recurring Services</p>
              <p>Move-In / Move-Out</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description, dark = false }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className={`text-sm font-black uppercase tracking-[0.28em] ${dark ? "text-[#b6ca94]" : "text-[#5e744f]"}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-4xl font-black tracking-tight ${dark ? "text-white" : "text-[#08291c]"}`}>{title}</h2>
      <p className={`mt-4 text-lg leading-8 ${dark ? "text-[#e7efe0]" : "text-[#405347]"}`}>{description}</p>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-3xl border border-[#d8d1bd] bg-white/80 p-5 text-center shadow-sm">
      <p className="text-3xl font-black text-[#06452f]">{value}</p>
      <p className="mt-1 text-sm font-semibold text-[#405347]">{label}</p>
    </div>
  );
}

function ContactLine({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-[#f7f4ec] p-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#06452f] text-white">{React.cloneElement(icon, { className: "h-5 w-5" })}</div>
      <div>
        <p className="text-xs font-black uppercase tracking-wider text-[#5e744f]">{label}</p>
        <p className="font-bold text-[#08291c]">{value}</p>
      </div>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="flex gap-4 rounded-3xl bg-[#f7f4ec] p-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#06452f] text-white">{React.cloneElement(icon, { className: "h-6 w-6" })}</div>
      <div>
        <h3 className="font-black text-[#08291c]">{title}</h3>
        <p className="mt-1 leading-6 text-[#405347]">{text}</p>
      </div>
    </div>
  );
}

function Field({ label, placeholder = "", type = "text" }) {
  return (
    <label>
      <span className="text-sm font-black text-[#254535]">{label}</span>
      <input type={type} placeholder={placeholder} className="mt-2 w-full rounded-2xl border border-[#d8d1bd] px-4 py-3 outline-none focus:border-[#06452f]" />
    </label>
  );
}

function QuotePoint({ text }) {
  return (
    <p className="flex items-center gap-3 text-[#edf5e6]"><CheckCircle2 className="h-5 w-5 text-[#b6ca94]" /> {text}</p>
  );
}

export default App;
