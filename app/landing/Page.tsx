"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HeroSection() {
  const [openNavbar, setOpenNavbar] = useState(false);
  const toggleNavbar = () => {
    setOpenNavbar((openNavbar) => !openNavbar);
  };
  const closeNavbar = () => {
    setOpenNavbar(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 flex items-center h-20 z-40 bg-white shadow-sm">
        <nav className="relative mx-auto max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
          <div className="flex items-center min-w-max">
            <Image
              src="/image.png" // Replace with actual logo
              alt="PaceEdge Technologies Logo"
              width={100}
              height={50}
              className="w-auto"
            />
          </div>
          <div
            className={`
              absolute top-full left-0  border-b border-blue-100 py-8 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative lg:w-max lg:flex duration-300 ease-linear gap-x-6
              ${
                openNavbar
                  ? "opacity-100 translate-y-0 visible"
                  : "translate-y-10 opacity-0 invisible lg:visible lg:translate-y-0 lg:opacity-100"
              }
            `}
          >
            <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-blue-950 lg:w-full lg:justify-center">
              <li>
                <Link
                  href="#"
                  className="duration-300 ease-linear hover:text-blue-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="duration-300 ease-linear hover:text-blue-600"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#why-us"
                  className="duration-300 ease-linear hover:text-blue-600"
                >
                  Why Us
                </Link>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:min-w-max mt-10 lg:mt-0">
              <Link
                href="#contact"
                className="relative px-6 py-3 flex justify-center items-center bg-blue-600 text-white rounded-3xl transition ease-linear hover:bg-blue-500 focus:bg-blue-700"
              >
                <span className="relative">Get Started</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleNavbar}
              aria-label="Toggle navbar"
              className="outline-none border-l border-blue-100 pl-3 relative py-3"
            >
              <span
                aria-hidden="true"
                className={`h-0.5 w-6 rounded bg-blue-950 transition duration-300 ${
                  openNavbar ? "rotate-45 translate-y-[0.33rem]" : ""
                }`}
              />
              <span
                aria-hidden="true"
                className={`mt-2 h-0.5 w-6 rounded bg-blue-950 transition duration-300 ${
                  openNavbar ? "-rotate-45 -translate-y-[0.33rem]" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      <section className="relative pt-24 pb-20 bg-blue-50">
        <div className="absolute top-0 inset-x-0 h-64 flex items-start">
          <div className="h-24 w-2/3 bg-linear-to-br from-blue-400 to-blue-200 opacity-20 blur-2xl"></div>
          <div className="h-20 w-3/5 bg-linear-to-r from-blue-300 to-blue-100 opacity-40 blur-2xl"></div>
        </div>
        <div className="relative mx-auto max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center">
          <div className="mx-auto space-y-8 text-center lg:text-left flex flex-col max-w-3xl justify-center lg:py-8 flex-1 lg:w-1/2">
            <h1 className="text-blue-950 text-3xl/snug sm:text-4xl/tight lg:text-5xl/tight font-bold">
              Innovating IT Solutions for a Smarter Future
            </h1>
            <p className="text-blue-800 lg:text-lg max-w-2xl mx-auto">
              PaceEdge stands at the forefront of digital transformation,
              delivering cutting-edge IT solutions that empower organizations to
              thrive in an increasingly connected world.
            </p>
          </div>
          <div className="flex flex-1 lg:w-1/2 relative max-w-3xl mx-auto lg:max-w-none">
            <div className="w-full h-[400px] bg-blue-100 rounded-b-3xl overflow-hidden">
              <Image
                src="/Picture12.png" // Corrected to match presentation images
                alt="PaceEdge Technology Solutions"
                width={1850}
                height={1150}
                className="w-full h-full object-cover"
                priority // Optional: prioritize loading for hero image
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 space-y-8 text-blue-800">
            <h1 className="text-blue-950 font-semibold text-2xl sm:text-3xl md:text-4xl">
              Transforming Business Through Technology
            </h1>
            <p>
              Our mission is to bridge the gap between today's challenges and
              tomorrow's possibilities through innovative technology
              partnerships and expert implementation. We position ourselves as
              your trusted technology advisor, transforming complex IT
              challenges into strategic advantages.
            </p>
            <ul className="space-y-4">
              {[
                "Certified professionals with deep expertise",
                "Early adoption of AI and edge computing",
                "Partnerships with Cisco, Fortinet, Microsoft",
                "Cost-effective solutions maximizing ROI",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-x-4">
                  <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-blue-600 text-white">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex md:flex-1">
            <Image
              src="/Picture1.png"
              alt="PaceEdge Team"
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-3xl"
            />
          </div>
        </div>
      </section>

      <section className="py-10 bg-blue-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "25+", label: "Enterprise Clients" },
            { value: "99.9%", label: "Uptime Guarantee" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-lg shadow-blue-100/50 border border-blue-200 p-6 rounded-lg flex flex-col justify-center gap-0.5 text-center text-blue-800"
            >
              <span className="font-semibold text-xl sm:text-3xl md:text-4xl text-blue-950">
                {stat.value}
              </span>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
          <div className="max-w-2xl space-y-3 text-center">
            <h1 className="text-3xl/tight sm:text-4xl/tight font-bold text-blue-950">
              Comprehensive IT Solutions Portfolio
            </h1>
            <p className="text-blue-800">
              Discover our range of cutting-edge IT solutions designed to
              empower your organization.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {[
              {
                title: "Campus WiFi",
                description:
                  "Comprehensive campus-wide wireless network solutions, high-speed internet coverage, and seamless connectivity for educational institutions and corporate campuses.",
                image: "/wifi.webp",
              },
              {
                title: "Advanced Networking",
                description:
                  "Robust network architecture design and implementation for seamless connectivity across all environments.",
                image: "/network.jpg",
              },
              {
                title: "IT Infrastructure",
                description:
                  "Enterprise-grade hardware solutions and data center optimization for maximum reliability and efficiency.",
                image: "/it.webp",
              },
              {
                title: "Security Solutions",
                description:
                  "Comprehensive cybersecurity frameworks protecting against evolving threats and ensuring compliance.",
                image: "/security.jpeg",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative aspect-[5/3.8] rounded-lg overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1850}
                  height={1150}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-blue-950/80 flex flex-col justify-end p-5 space-y-5 text-blue-100">
                  <h1 className="font-semibold text-white text-2xl">
                    {item.title}
                  </h1>
                  <p className="text-blue-100 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 space-y-8 text-blue-800">
            <h1 className="text-blue-950 font-semibold text-2xl sm:text-3xl md:text-4xl">
              AMC & Facility Management Services
            </h1>
            <p>
              PaceEdge provides integrated solutions encompassing both Annual
              Maintenance Contracts (AMC) and comprehensive Facility Management
              services, ensuring the continuous and optimal performance of your
              entire operational environment. We are dedicated to maximizing
              efficiency, minimizing disruptions, and providing a reliable
              foundation for your business.
            </p>
            <p>
              Our Annual Maintenance Contracts guarantee the health of your IT
              infrastructure with routine equipment servicing, proactive
              preventive maintenance to minimize downtime, and rapid emergency
              support for critical issues. These contracts are backed by clear
              Service Level Agreements (SLAs), ensuring peace of mind.
            </p>
            <ul className="space-y-4">
              {[
                "Maintenance: Regular upkeep and repair of physical assets, systems, and equipment.",
                "Operations: Efficient day-to-day management of building services, utilities, and safety protocols.",
                "Optimization: Strategic planning and implementation to enhance space utilization, reduce operational costs, and improve overall workplace functionality.",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-x-4">
                  <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full  text-blue">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p>
              PaceEdge is proud to partner with industry leaders such as POSCO
              Steel and esteemed educational institutions like COEP Pune. These
              trusted clients have consistently benefited from our integrated
              AMC and comprehensive Facility Management services, a testament to
              our commitment to operational excellence and reliable support.
            </p>
            <p>
              With PaceEdge, you gain a trusted partner committed to the
              seamless operation and strategic growth of both your technological
              and physical assets.
            </p>
          </div>
          <div className="flex md:flex-1">
            <Image
              src="/Picture9.png"
              alt="AMC Services"
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-3xl"
            />
          </div>
        </div>
      </section>

      <section id="industry-expertise" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
        <div className="max-w-2xl mx-auto space-y-3 text-center">
          <h1 className="text-3xl/tight sm:text-4xl/tight font-bold text-blue-950">
            Industry Expertise Across Key Sectors
          </h1>
          <p className="text-blue-800">
            PaceEdge delivers tailored technology solutions across diverse
            industries, empowering organizations with innovation and efficiency.
          </p>
        </div>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {[
              {
                title: "Real Estate",
                description:
                  "Smart building technologies, IoT integration, and property management systems that enhance operational efficiency and tenant experience.",
                image: "/real.jpg",
              },
              {
                title: "Enterprises",
                description:
                  "Scalable IT infrastructure solutions supporting digital transformation initiatives and business continuity.",
                image: "/enterprice.jpg",
              },
              {
                title: "Government Agencies",
                description:
                  "Secure, compliant technology solutions meeting regulatory requirements while improving citizen services.",
                image: "/gov.jpg",
              },
              {
                title: "Smart Cities",
                description:
                  "Connected infrastructure solutions enabling intelligent urban planning and sustainable community development.",
                image: "/smart.jpeg",
              },
            ].map((sector, index) => (
              <div
                key={index}
                className="relative aspect-[5/3.8] rounded-lg overflow-hidden"
              >
                <Image
                  src={sector.image}
                  alt={sector.title}
                  width={1850}
                  height={1150}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 flex flex-col justify-end p-5 space-y-5 text-blue-100">
                  <h1 className="font-semibold text-white text-2xl">
                    {sector.title}
                  </h1>
                  <p className="text-blue-100 line-clamp-2">
                    {sector.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="real-estate-leadership" className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 space-y-8 text-blue-800">
            <h1 className="text-blue-950 font-semibold text-2xl sm:text-3xl md:text-4xl">
              Real Estate Technology Leadership
            </h1>
            <p>
              Our specialized real estate solutions, including high-speed fiber
              connectivity, advanced security camera systems, and efficient boom
              barriers, enhance property value, optimize operational security,
              and ensure seamless tenant and vehicle access.
            </p>
            <ul className="space-y-4">
              {[
                "Fiber to Home: High-speed internet connectivity and fiber optic installation",
                "Security Camera Systems: CCTV surveillance and IP monitoring solutions",
                "Boom Barriers: Automated gate systems and vehicle access control",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-x-4">
                  <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full  text-blue">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-black text-xl font-bold mt-10">
              PaceEdge's Premier Partnership: Lodha Group
            </p>
            <p>
              We are proud to highlight our collaboration with the renowned
              Lodha Group, a leader in premier township development. PaceEdge
              has been instrumental in delivering advanced township
              infrastructure solutions for their prestigious projects, ensuring
              state-of-the-art connectivity and security for modern living
              spaces.
            </p>
          </div>
          <div className="flex md:flex-1 flex-col">
            <Image
              src="/picture10.png"
              alt="Real Estate Solutions"
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-3xl"
            />
            <div className="flex items-center justify-center">
              <Image
                src="/picture11.png"
                alt="Real Estate Solutions"
                width={400}
                height={400}
                className=" rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
          <div className="space-y-4 max-w-2xl">
            <span className="text-blue-600 font-semibold pl-6 relative before:absolute before:top-1/2 before:left-0 before:w-5 before:h-px before:bg-blue-600 before:rounded-full">
              Why Us
            </span>
            <h1 className="font-bold text-blue-950 text-3xl">
              Innovation Through Strategic Partnerships
            </h1>
          </div>
          <div className="mx-auto flex flex-col md:flex-row gap-10 xl:gap-14 items-center">
            <div className="md:w-1/2 md:flex-1 flex flex-col space-y-5 md:gap-y-6 md:py-4 xl:py-6">
              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                  title: "Deep Technical Expertise",
                  description:
                    "Certified professionals with extensive experience in complex enterprise deployments and emerging technologies.",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                      />
                    </svg>
                  ),
                  title: "Cutting-Edge Innovation",
                  description:
                    "Early adoption of breakthrough technologies including AI, edge computing, and next-generation networking solutions.",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                  ),
                  title: "Premier Technology Partners",
                  description:
                    "Optimized solutions that maximize ROI through strategic technology selection and efficient implementation methodologies.",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                  ),
                  title: "Cost-Effective Excellence",
                  description:
                    "Authorized partnerships with industry leaders like Cisco, Fortinet, and Microsoft ensure access to best-in-class solutions.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex gap-5 sm:gap-6 items-start">
                  <div className="min-w-max flex">
                    <span className="p-4 rounded-md bg-blue-100 text-blue-950">
                      {feature.icon}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-xl font-semibold text-blue-950">
                      {feature.title}
                    </h2>
                    <p className="text-blue-800">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-blue-950 capitalize">
              Trusted by Industry Leaders
            </h1>
            <p className="text-blue-800">
              We are proud to partner with leading organizations like POSCO
              Steel, COEP Pune, and Lodha Group.
            </p>
          </div>
          <div className="flex justify-center flex-wrap gap-4">
            {[
              { src: "/1.png", alt: "Cisco" },
              { src: "/2.png", alt: "Fortinet" },
              { src: "/3.png", alt: "dlink" },
              { src: "/4.png", alt: "hikvision" },
              { src: "/5.jpg", alt: "stlneox" },
              { src: "/6.png", alt: "synway" },
            ].map((partner, index) => (
              <div
                key={index}
                className="p-4 sm:p-5 rounded-lg border border-blue-200 group"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={150}
                  height={100}
                  className="w-32 h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="py-16 bg-blue-950 text-blue-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p>
              Schedule your complimentary technology assessment and discover how
              PaceEdge can accelerate your digital transformation journey.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-center sm:text-left">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <p>
                Email: <a href="mailto:admin@paceedge.in">admin@paceedge.in</a>
              </p>
              <p>
                Mobile: <a href="tel:+919766303918">+91 9766303918</a>,{" "}
                <a href="tel:+919766303930">+91 9766303930</a>
              </p>
              <p>
                Tel: <a href="tel:+912025898828">020 25898828</a>
              </p>
              <p>
                Address: Off no 3, Bhakti Plaza, B Wing, Near Bremen Chowk,
                Aundh, Pune 411007
              </p>
            </div>
            <div>
              <Link
                href="https://www.paceedge.in"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-3xl hover:bg-blue-500"
              >
                Visit Our Website
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
