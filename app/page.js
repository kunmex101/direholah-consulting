"use client";

import { useState } from "react";
import Script from "next/script";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const pageBg = darkMode ? "#071a3d" : "#f4f7fb";
  const pageText = darkMode ? "white" : "#111";

  return (
    <>
      {/* GOOGLE ANALYTICS */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-N492QPXB06"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-N492QPXB06');
        `}
      </Script>

      <main
        style={{
          fontFamily: "Arial, sans-serif",
          background: pageBg,
          color: pageText,
        }}
      >
        {/* NAVBAR */}
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "18px 50px",
            background: "white",
            position: "sticky",
            top: 0,
            zIndex: 1000,
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <img
              src="/logo.png"
              alt="Direholah Consulting Logo"
              style={{
                width: "55px",
                height: "55px",
                borderRadius: "12px",
              }}
            />

            <h2 style={{ color: "#0b4ea2" }}>
              Direholah Consulting
            </h2>
          </div>

          <div
            style={{
              display: "flex",
              gap: "22px",
              fontWeight: "bold",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#booking">Booking</a>
            <a href="#contact">Contact</a>

            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                cursor: "pointer",
                padding: "8px 12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                background: "white",
              }}
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </div>
        </nav>

        {/* HERO */}
        <section
          style={{
            textAlign: "center",
            padding: "110px 20px",
            background:
              "linear-gradient(135deg, #071a3d, #0b4ea2, #2563eb)",
            color: "white",
          }}
        >
          <img
            src="/logo.png"
            alt="Direholah Consulting Logo"
            style={{
              width: "170px",
              borderRadius: "20px",
              marginBottom: "25px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            }}
          />

          <h1
            style={{
              fontSize: "64px",
              marginBottom: "20px",
            }}
          >
            Direholah Consulting
          </h1>

          <h2>Strategy. Solutions. Success.</h2>

          <p
            style={{
              fontSize: "20px",
              maxWidth: "900px",
              margin: "25px auto",
              lineHeight: "1.7",
            }}
          >
            Empowering businesses through technology,
            consulting, innovation, automation, and
            digital transformation.
          </p>

          <a
            href="https://calendly.com/josephkunmi9"
            target="_blank"
            style={{
              display: "inline-block",
              marginTop: "25px",
              padding: "18px 40px",
              background: "white",
              color: "#0b4ea2",
              borderRadius: "12px",
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: "bold",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            }}
          >
            Schedule a Free Consultation
          </a>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            padding: "80px 40px",
          }}
        >
          {[
            [
              "💻 IT Consulting",
              "Technology solutions for businesses, churches, startups, and organizations.",
            ],
            [
              "⚙️ Power Platform",
              "Power Apps, Power Automate, SharePoint, Microsoft 365, and workflow automation.",
            ],
            [
              "📊 Project Management",
              "Planning, reporting, execution, automation, and digital delivery support.",
            ],
            [
              "🚀 Business Strategy",
              "Helping organizations improve operations, growth, and service delivery.",
            ],
            [
              "🌐 Digital Transformation",
              "Modern digital tools, dashboards, cloud solutions, and process modernization.",
            ],
            [
              "🤝 Community Innovation",
              "Support for social impact platforms, church projects, startups, and communities.",
            ],
          ].map(([title, description], index) => (
            <div
              key={index}
              style={{
                background: "white",
                color: "#111",
                width: "320px",
                padding: "30px",
                borderRadius: "18px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
              }}
            >
              <h2 style={{ color: "#0b4ea2" }}>
                {title}
              </h2>

              <p
                style={{
                  lineHeight: "1.6",
                  marginTop: "12px",
                }}
              >
                {description}
              </p>
            </div>
          ))}
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          style={{
            padding: "90px 20px",
            textAlign: "center",
            background: "#eef4ff",
          }}
        >
          <h2
            style={{
              fontSize: "48px",
              color: "#0b4ea2",
              marginBottom: "20px",
            }}
          >
            Featured Projects
          </h2>

          <p
            style={{
              maxWidth: "850px",
              margin: "0 auto 50px",
              fontSize: "20px",
              lineHeight: "1.7",
              color: "#333",
            }}
          >
            Real-world business and digital transformation
            solutions delivered for organizations and
            businesses.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "35px",
            }}
          >
            {/* F&F PROJECT */}
            <div
              style={{
                background: "white",
                width: "420px",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                textAlign: "left",
              }}
            >
              <img
                src="/ffglobalmarket.png"
                alt="F and F Global Market Ecommerce Platform"
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "25px" }}>
                <h3
                  style={{
                    color: "#0b4ea2",
                    fontSize: "28px",
                    marginBottom: "15px",
                  }}
                >
                  F & F Global Market
                </h3>

                <p
                  style={{
                    color: "#444",
                    lineHeight: "1.7",
                    marginBottom: "20px",
                  }}
                >
                  Ecommerce platform developed for an
                  African and Caribbean food store in
                  Sudbury, Ontario.
                </p>

                <a
                  href="https://ffglobalmarket.vercel.app"
                  target="_blank"
                  style={{
                    display: "inline-block",
                    padding: "12px 24px",
                    background: "#0b4ea2",
                    color: "white",
                    borderRadius: "10px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  View Live Project
                </a>
              </div>
            </div>

            {/* NAOMI FOODS PROJECT */}
            <div
              style={{
                background: "white",
                width: "420px",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                textAlign: "left",
              }}
            >
              <img
                src="/naomifoods.png"
                alt="Naomi Foods Ecommerce Website"
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "25px" }}>
                <h3
                  style={{
                    color: "#0b4ea2",
                    fontSize: "28px",
                    marginBottom: "15px",
                  }}
                >
                  Naomi Foods
                </h3>

                <p
                  style={{
                    color: "#444",
                    lineHeight: "1.7",
                    marginBottom: "20px",
                  }}
                >
                  Ecommerce grocery platform for an African
                  grocery store in Brantford, Ontario.
                </p>

                <p
                  style={{
                    color: "#666",
                    marginBottom: "20px",
                    fontSize: "15px",
                  }}
                >
                  📍 196 Dalhousie St, Brantford ON N3S 3T7
                </p>

                <a
                  href="https://naomifoods.com/index"
                  target="_blank"
                  style={{
                    display: "inline-block",
                    padding: "12px 24px",
                    background: "#0b4ea2",
                    color: "white",
                    borderRadius: "10px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  View Live Project
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section
          id="testimonials"
          style={{
            padding: "90px 20px",
            background: "#ffffff",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "48px",
              color: "#0b4ea2",
              marginBottom: "50px",
            }}
          >
            Client Testimonials
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "30px",
            }}
          >
            <div
              style={{
                background: "#f8f9fc",
                width: "380px",
                padding: "35px",
                borderRadius: "18px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                textAlign: "left",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.8",
                  color: "#333",
                }}
              >
                "Direholah Consulting helped us establish
                our online ecommerce presence for African
                and Caribbean food sales in Sudbury,
                Ontario."
              </p>

              <h3
                style={{
                  marginTop: "25px",
                  color: "#0b4ea2",
                }}
              >
                F & F Global Market
              </h3>

              <p style={{ color: "#666" }}>
                African/Caribbean Food Store
              </p>
            </div>

            <div
              style={{
                background: "#f8f9fc",
                width: "380px",
                padding: "35px",
                borderRadius: "18px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                textAlign: "left",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.8",
                  color: "#333",
                }}
              >
                "Professional ecommerce solution with
                responsive design, product management,
                and smooth shopping experience for our
                customers."
              </p>

              <h3
                style={{
                  marginTop: "25px",
                  color: "#0b4ea2",
                }}
              >
                Naomi Foods
              </h3>

              <p style={{ color: "#666" }}>
                Grocery Store — Brantford, Ontario
              </p>
            </div>
          </div>
        </section>

        {/* BOOKING */}
        <section
          id="booking"
          style={{
            textAlign: "center",
            padding: "100px 20px",
          }}
        >
          <h2
            style={{
              fontSize: "50px",
              color: "#0b4ea2",
              marginBottom: "25px",
            }}
          >
            Book a Consultation
          </h2>

          <p
            style={{
              fontSize: "20px",
              maxWidth: "850px",
              margin: "0 auto 35px",
              lineHeight: "1.7",
            }}
          >
            Schedule a professional consultation session
            with Direholah Consulting.
          </p>

          <a
            href="https://calendly.com/josephkunmi9"
            target="_blank"
            style={{
              display: "inline-block",
              padding: "18px 40px",
              background: "#0b4ea2",
              color: "white",
              borderRadius: "12px",
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Open Calendly Booking
          </a>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          style={{
            background: "#0b4ea2",
            color: "white",
            textAlign: "center",
            padding: "90px 20px",
          }}
        >
          <h2 style={{ fontSize: "46px" }}>
            Request a Consultation
          </h2>

          <p style={{ fontSize: "22px" }}>
            admin@direholahconsulting.com
          </p>

          <p style={{ fontSize: "20px" }}>
            Ontario, Canada
          </p>

          <form
            action="https://formspree.io/f/xykvnykn"
            method="POST"
            style={{
              maxWidth: "650px",
              margin: "35px auto 0",
              display: "grid",
              gap: "15px",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              style={{
                padding: "16px",
                borderRadius: "10px",
                border: "none",
                fontSize: "16px",
              }}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              style={{
                padding: "16px",
                borderRadius: "10px",
                border: "none",
                fontSize: "16px",
              }}
            />

            <textarea
              name="message"
              placeholder="Tell us about your project..."
              required
              rows="6"
              style={{
                padding: "16px",
                borderRadius: "10px",
                border: "none",
                fontSize: "16px",
              }}
            />

            <button
              type="submit"
              style={{
                padding: "16px",
                background: "white",
                color: "#0b4ea2",
                border: "none",
                borderRadius: "10px",
                fontWeight: "bold",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Send Message
            </button>
          </form>
        </section>

        {/* FOOTER */}
        <footer
          style={{
            background: "#071a3d",
            color: "white",
            textAlign: "center",
            padding: "45px 20px",
          }}
        >
          <img
            src="/logo.png"
            alt="Direholah Consulting Logo"
            style={{
              width: "90px",
              borderRadius: "12px",
              marginBottom: "15px",
            }}
          />

          <h3>Direholah Consulting</h3>

          <p>
            Empowering businesses through technology and
            innovation.
          </p>

          <div
            style={{
              marginTop: "22px",
              display: "flex",
              justifyContent: "center",
              gap: "22px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://www.linkedin.com/company/direholah-consulting/"
              target="_blank"
              style={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/direholahconsulting/"
              target="_blank"
              style={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              Instagram
            </a>

            <a
              href="https://www.tiktok.com/@direholahconsulting"
              target="_blank"
              style={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              TikTok
            </a>

            <a
              href="https://www.youtube.com/@DireholahConsulting"
              target="_blank"
              style={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              YouTube
            </a>
          </div>

          <p
            style={{
              marginTop: "30px",
              fontSize: "14px",
              opacity: 0.7,
            }}
          >
            © 2026 Direholah Consulting. All rights reserved.
          </p>
        </footer>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/14379980391"
          target="_blank"
          style={{
            position: "fixed",
            bottom: "25px",
            right: "25px",
            background: "#25D366",
            color: "white",
            padding: "16px 22px",
            borderRadius: "50px",
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
            zIndex: 999,
          }}
        >
          WhatsApp
        </a>
      </main>
    </>
  );
}
