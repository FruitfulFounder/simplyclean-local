import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  ShieldCheck,
  Sparkles,
  CalendarCheck,
  MapPin,
  Languages,
  CheckCircle2,
  Phone,
  Mail,
  Users,
  ClipboardList,
  HeartHandshake,
  Menu,
  X,
  Search,
  BadgeCheck,
  Home,
} from "lucide-react";

const cleaners = [
  {
    name: "Maria R.",
    initials: "MR",
    rating: 4.9,
    reviews: 28,
    badge: "Most Requested",
    languages: "Spanish / Basic English",
    areas: "Portland, Beaverton, Hillsboro",
    services: ["Standard Cleaning", "Deep Cleaning", "Move-Out"],
    bio: "Careful, dependable cleaner known for kitchens, bathrooms, and detailed finishing touches.",
  },
  {
    name: "Ana G.",
    initials: "AG",
    rating: 4.8,
    reviews: 17,
    badge: "Top Rated",
    languages: "Spanish / English",
    areas: "Gresham, Portland, Troutdale",
    services: ["Standard Cleaning", "Recurring Cleaning", "Apartments"],
    bio: "Friendly and consistent cleaner who does great recurring home and apartment cleanings.",
  },
  {
    name: "Lucia M.",
    initials: "LM",
    rating: 4.7,
    reviews: 11,
    badge: "Available This Week",
    languages: "Spanish",
    areas: "Portland, Tigard, Lake Oswego",
    services: ["Deep Cleaning", "Move-In", "Move-Out"],
    bio: "Great for bigger cleanups, move-in jobs, and homes that need extra attention.",
  },
];

const services = [
  {
    title: "Standard Cleaning",
    description: "Routine home cleaning for kitchens, bathrooms, bedrooms, living areas, dusting, floors, and surfaces.",
    price: "Starting at $120",
  },
  {
    title: "Deep Cleaning",
    description: "A more detailed reset for homes that need extra time, buildup removal, baseboards, and detailed rooms.",
    price: "Starting at $220",
  },
  {
    title: "Move-In / Move-Out",
    description: "Empty-home cleaning for apartments, houses, rentals, and move transitions.",
    price: "Quote Required",
  },
  {
    title: "Recurring Cleaning",
    description: "Weekly, biweekly, or monthly cleaning with a preferred cleaner when available.",
    price: "Custom Plan",
  },
];

const reviews = [
  {
    name: "Jessica T.",
    text: "Maria did an amazing job. The kitchen and bathrooms looked brand new. I requested her again for next month.",
  },
  {
    name: "David L.",
    text: "The process was easy. I sent what I needed, got matched with a cleaner, and everything was handled quickly.",
  },
  {
    name: "Monica S.",
    text: "I liked being able to request a specific cleaner. Ana was kind, on time, and very thorough.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCleaner, setSelectedCleaner] = useState("Match me with the best cleaner");
  const [filter, setFilter] = useState("All");

  const filteredCleaners = useMemo(() => {
    if (filter === "All") return cleaners;
    return cleaners.filter((cleaner) => cleaner.services.includes(filter));
  }, [filter]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-700 text-white shadow-sm">
              <Sparkles className="h-6 w-6" />
            </div>
            <div className="text-left">
              <p className="text-lg font-bold tracking-tight">GeMas Cleaning</p>
              <p className="text-xs text-slate-500">Trusted local cleaner network</p>
            </div>
          </button>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 md:flex">
            <button onClick={() => scrollTo("cleaners")} className="hover:text-emerald-700">Cleaners</button>
            <button onClick={() => scrollTo("services")} className="hover:text-emerald-700">Services</button>
            <button onClick={() => scrollTo("how-it-works")} className="hover:text-emerald-700">How It Works</button>
            <button onClick={() => scrollTo("signup")} className="hover:text-emerald-700">Cleaner Sign Up</button>
          </nav>

          <div className="hidden gap-3 md:flex">
            <button onClick={() => scrollTo("request")} className="rounded-full border border-emerald-700 px-5 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-50">
              Request Cleaning
            </button>
            <a href="tel:+15035550125" className="rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800">
              Call Now
            </a>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-stone-200 bg-white px-5 py-4 md:hidden">
            <div className="grid gap-3 text-sm font-medium">
              <button onClick={() => scrollTo("cleaners")} className="text-left">Cleaners</button>
              <button onClick={() => scrollTo("services")} className="text-left">Services</button>
              <button onClick={() => scrollTo("how-it-works")} className="text-left">How It Works</button>
              <button onClick={() => scrollTo("signup")} className="text-left">Cleaner Sign Up</button>
              <button onClick={() => scrollTo("request")} className="rounded-full bg-emerald-700 px-5 py-3 font-semibold text-white">Request Cleaning</button>
            </div>
          </div>
        )}
      </header>

      <main id="home">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(20,184,166,0.14),_transparent_35%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-800 shadow-sm">
                <ShieldCheck className="h-4 w-4" /> Local cleaners. Simple matching. Less headache.
              </div>
              <h1 className="max-w-2xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl">
                Find a trusted local cleaner without the back-and-forth.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                GeMas Cleaning helps customers request home cleaning and connect with reliable local cleaners. Choose a specific cleaner or let us match you with the best available person for the job.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button onClick={() => scrollTo("request")} className="rounded-full bg-emerald-700 px-7 py-4 text-base font-bold text-white shadow-lg shadow-emerald-900/10 hover:bg-emerald-800">
                  Request Cleaning
                </button>
                <button onClick={() => scrollTo("cleaners")} className="rounded-full border border-slate-300 bg-white px-7 py-4 text-base font-bold text-slate-800 hover:bg-stone-100">
                  View Cleaners
                </button>
              </div>
              <div className="mt-8 grid max-w-xl grid-cols-3 gap-4 text-center">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-2xl font-black text-emerald-700">4.8+</p>
                  <p className="text-xs text-slate-500">Avg rating</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-2xl font-black text-emerald-700">3</p>
                  <p className="text-xs text-slate-500">Local cleaners</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-2xl font-black text-emerald-700">24hr</p>
                  <p className="text-xs text-slate-500">Request reply</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
              <div className="rounded-[2rem] bg-white p-5 shadow-2xl shadow-slate-900/10">
                <div className="rounded-[1.5rem] bg-emerald-700 p-6 text-white">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-emerald-100">Featured Cleaner</p>
                      <h2 className="mt-2 text-3xl font-black">Maria R.</h2>
                    </div>
                    <div className="rounded-full bg-white/15 px-3 py-1 text-sm font-bold">Most Requested</div>
                  </div>
                  <div className="mt-6 flex items-center gap-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                    <span className="ml-2 font-bold">4.9</span>
                    <span className="text-emerald-100">28 reviews</span>
                  </div>
                  <p className="mt-5 leading-7 text-emerald-50">
                    Known for detailed kitchens, bathrooms, and dependable recurring cleanings.
                  </p>
                </div>
                <div className="grid gap-3 p-5">
                  <InfoRow icon={<Languages />} label="Languages" value="Spanish / Basic English" />
                  <InfoRow icon={<MapPin />} label="Areas" value="Portland, Beaverton, Hillsboro" />
                  <InfoRow icon={<CalendarCheck />} label="Availability" value="Open this week" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="how-it-works" className="border-y border-stone-200 bg-white py-16">
          <div className="mx-auto max-w-7xl px-5">
            <SectionHeading eyebrow="Simple process" title="How GeMas Cleaning works" description="Start manual and controlled. Customers request, cleaners confirm, and you manage the match until the business is ready for automation." />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <StepCard icon={<ClipboardList />} title="1. Customer sends request" text="The customer shares the home size, cleaning type, preferred date, location, and any special notes." />
              <StepCard icon={<Users />} title="2. We match or confirm" text="They can request a specific cleaner or ask to be matched with the best available cleaner." />
              <StepCard icon={<CheckCircle2 />} title="3. Cleaner completes job" text="The cleaner confirms the job, completes the cleaning, and the customer can leave a review." />
            </div>
          </div>
        </section>

        <section id="cleaners" className="py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading eyebrow="Cleaner directory" title="Request a trusted cleaner" description="Cleaner profiles help reputation grow naturally while you stay in control of booking and dispatch." compact />
              <div className="flex items-center gap-2 overflow-x-auto rounded-full bg-white p-2 shadow-sm">
                {["All", "Standard Cleaning", "Deep Cleaning", "Move-Out", "Recurring Cleaning"].map((item) => (
                  <button key={item} onClick={() => setFilter(item)} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold ${filter === item ? "bg-emerald-700 text-white" : "text-slate-600 hover:bg-stone-100"}`}>
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {filteredCleaners.map((cleaner) => (
                <CleanerCard key={cleaner.name} cleaner={cleaner} onRequest={() => { setSelectedCleaner(cleaner.name); scrollTo("request"); }} />
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-5">
            <SectionHeading eyebrow="Cleaning services" title="Services customers can request" description="Keep the services clear and simple. Exact pricing can be confirmed after reviewing the request." dark />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <div key={service.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <Home className="h-7 w-7 text-emerald-300" />
                  <h3 className="mt-5 text-xl font-black">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
                  <p className="mt-5 font-bold text-emerald-300">{service.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-5">
            <SectionHeading eyebrow="Reviews" title="Cleaner reputation that grows over time" description="Top cleaners can become more requested through great work, repeat customers, and strong reviews." />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {reviews.map((review) => (
                <div key={review.name} className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="mt-5 leading-7 text-slate-700">“{review.text}”</p>
                  <p className="mt-5 font-bold">{review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="request" className="py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] bg-emerald-700 p-8 text-white lg:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-100">Request cleaning</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight">Tell us what you need cleaned.</h2>
              <p className="mt-5 leading-8 text-emerald-50">
                This form is designed for the low-headache version. The customer sends details, then you confirm the cleaner, time, and final price manually.
              </p>
              <div className="mt-8 grid gap-4">
                <TrustLine text="Choose a cleaner or request the best match" />
                <TrustLine text="Simple details are easier for cleaners to understand" />
                <TrustLine text="Manual confirmation helps avoid scheduling problems" />
              </div>
            </div>

            <form className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-xl shadow-slate-900/5 lg:p-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Full Name" placeholder="Your name" />
                <Field label="Phone Number" placeholder="(503) 555-0125" />
                <Field label="Email" placeholder="you@example.com" type="email" />
                <Field label="ZIP Code" placeholder="97201" />
                <label className="md:col-span-2">
                  <span className="text-sm font-bold text-slate-700">Cleaner Preference</span>
                  <select value={selectedCleaner} onChange={(e) => setSelectedCleaner(e.target.value)} className="mt-2 w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 outline-none focus:border-emerald-600">
                    <option>Match me with the best cleaner</option>
                    {cleaners.map((cleaner) => <option key={cleaner.name}>{cleaner.name}</option>)}
                  </select>
                </label>
                <label>
                  <span className="text-sm font-bold text-slate-700">Cleaning Type</span>
                  <select className="mt-2 w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 outline-none focus:border-emerald-600">
                    <option>Standard Cleaning</option>
                    <option>Deep Cleaning</option>
                    <option>Move-In / Move-Out</option>
                    <option>Recurring Cleaning</option>
                  </select>
                </label>
                <Field label="Preferred Date" type="date" />
                <label className="md:col-span-2">
                  <span className="text-sm font-bold text-slate-700">Job Details</span>
                  <textarea className="mt-2 min-h-32 w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-emerald-600" placeholder="Example: 2 bedrooms, 2 bathrooms, kitchen, living room. Please focus on bathrooms and floors. We have one dog." />
                </label>
              </div>
              <button className="mt-6 w-full rounded-full bg-emerald-700 px-7 py-4 text-base font-black text-white hover:bg-emerald-800">
                Submit Cleaning Request
              </button>
              <p className="mt-4 text-center text-xs text-slate-500">
                Demo form: connect this to Formspree, Netlify Forms, Supabase, or your backend when ready.
              </p>
            </form>
          </div>
        </section>

        <section id="signup" className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Cleaner sign up" title="Let local cleaners apply to join" description="Start with basic applications. You can approve cleaners manually before they appear on the website." compact />
              <div className="mt-8 grid gap-4">
                <FeatureLine icon={<BadgeCheck />} title="Approved profiles only" text="You decide who appears in the public cleaner directory." />
                <FeatureLine icon={<Languages />} title="Language-friendly details" text="Add languages spoken so customers and cleaners can communicate better." />
                <FeatureLine icon={<HeartHandshake />} title="Reputation over time" text="Reviews and badges help the best cleaners earn more requests." />
              </div>
            </div>

            <form className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6 lg:p-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Cleaner Name" placeholder="Full name" />
                <Field label="Phone Number" placeholder="(503) 555-0125" />
                <Field label="Languages Spoken" placeholder="Spanish, English, etc." />
                <Field label="Service Areas" placeholder="Portland, Beaverton..." />
                <label>
                  <span className="text-sm font-bold text-slate-700">Experience</span>
                  <select className="mt-2 w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 outline-none focus:border-emerald-600">
                    <option>Less than 1 year</option>
                    <option>1–2 years</option>
                    <option>3–5 years</option>
                    <option>5+ years</option>
                  </select>
                </label>
                <label>
                  <span className="text-sm font-bold text-slate-700">Transportation</span>
                  <select className="mt-2 w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 outline-none focus:border-emerald-600">
                    <option>Yes, I have transportation</option>
                    <option>No, I need nearby jobs</option>
                  </select>
                </label>
                <label className="md:col-span-2">
                  <span className="text-sm font-bold text-slate-700">Services You Can Do</span>
                  <textarea className="mt-2 min-h-28 w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 outline-none focus:border-emerald-600" placeholder="Example: standard cleaning, deep cleaning, move-out cleaning, apartments, houses..." />
                </label>
              </div>
              <button className="mt-6 w-full rounded-full bg-slate-950 px-7 py-4 text-base font-black text-white hover:bg-slate-800">
                Apply to Join GeMas Cleaning
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-slate-950 px-5 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600"><Sparkles className="h-5 w-5" /></div>
              <div>
                <p className="font-black">GeMas Cleaning</p>
                <p className="text-sm text-slate-400">Trusted local cleaner network</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              A simple way for customers to request local cleaning help and for reliable cleaners to build reputation through great service.
            </p>
          </div>
          <div>
            <p className="font-bold">Contact</p>
            <div className="mt-4 grid gap-3 text-sm text-slate-400">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> (503) 555-0125</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@gemascleaning.com</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Portland Metro Area</p>
            </div>
          </div>
          <div>
            <p className="font-bold">Next Build Steps</p>
            <div className="mt-4 grid gap-2 text-sm text-slate-400">
              <p>Connect forms</p>
              <p>Add real cleaner photos</p>
              <p>Add service areas</p>
              <p>Add admin dashboard later</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description, dark = false, compact = false }) {
  return (
    <div className={compact ? "max-w-2xl" : "mx-auto max-w-3xl text-center"}>
      <p className={`text-sm font-black uppercase tracking-[0.25em] ${dark ? "text-emerald-300" : "text-emerald-700"}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-4xl font-black tracking-tight ${dark ? "text-white" : "text-slate-950"}`}>{title}</h2>
      <p className={`mt-4 text-lg leading-8 ${dark ? "text-slate-300" : "text-slate-600"}`}>{description}</p>
    </div>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-stone-50 p-4">
      <div className="text-emerald-700">{React.cloneElement(icon, { className: "h-5 w-5" })}</div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{label}</p>
        <p className="text-sm font-semibold text-slate-800">{value}</p>
      </div>
    </div>
  );
}

function StepCard({ icon, title, text }) {
  return (
    <div className="rounded-3xl border border-stone-200 bg-stone-50 p-7">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">{React.cloneElement(icon, { className: "h-6 w-6" })}</div>
      <h3 className="mt-5 text-xl font-black">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function CleanerCard({ cleaner, onRequest }) {
  return (
    <motion.div layout className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-100 text-xl font-black text-emerald-800">{cleaner.initials}</div>
          <div>
            <h3 className="text-2xl font-black">{cleaner.name}</h3>
            <div className="mt-1 flex items-center gap-1 text-sm text-slate-600">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="font-bold">{cleaner.rating}</span>
              <span>({cleaner.reviews} reviews)</span>
            </div>
          </div>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-800">{cleaner.badge}</span>
      </div>
      <p className="mt-5 leading-7 text-slate-600">{cleaner.bio}</p>
      <div className="mt-5 grid gap-3 text-sm">
        <p className="flex gap-2"><Languages className="h-5 w-5 text-emerald-700" /> {cleaner.languages}</p>
        <p className="flex gap-2"><MapPin className="h-5 w-5 text-emerald-700" /> {cleaner.areas}</p>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {cleaner.services.map((service) => <span key={service} className="rounded-full bg-stone-100 px-3 py-1 text-xs font-bold text-slate-600">{service}</span>)}
      </div>
      <button onClick={onRequest} className="mt-6 w-full rounded-full bg-emerald-700 px-5 py-3 font-black text-white hover:bg-emerald-800">
        Request {cleaner.name.split(" ")[0]}
      </button>
    </motion.div>
  );
}

function Field({ label, placeholder = "", type = "text" }) {
  return (
    <label>
      <span className="text-sm font-bold text-slate-700">{label}</span>
      <input type={type} placeholder={placeholder} className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-emerald-600" />
    </label>
  );
}

function TrustLine({ text }) {
  return (
    <p className="flex items-center gap-3 text-emerald-50"><CheckCircle2 className="h-5 w-5 text-emerald-200" /> {text}</p>
  );
}

function FeatureLine({ icon, title, text }) {
  return (
    <div className="flex gap-4 rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">{React.cloneElement(icon, { className: "h-6 w-6" })}</div>
      <div>
        <h3 className="font-black">{title}</h3>
        <p className="mt-1 leading-6 text-slate-600">{text}</p>
      </div>
    </div>
  );
}

export default App;
