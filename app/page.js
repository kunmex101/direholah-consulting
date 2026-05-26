"use client";

import { useState } from "react";
import Script from "next/script";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const pageBg = darkMode ? "#071a3d" : "#f4f7fb";
  const pageText = darkMode ? "white" : "#111";

  return (
    <>
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
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img
              src="/logo.png"
              alt="Direholah Consulting Logo"
              style={{
                width: "55px",
                height: "55px",
                borderRadius: "12px",
              }}
            />
            <h2 style={{ color: "#0b4ea2" }}>Direholah Consulting</h2>
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
            <a href="#marketplace">African Market</a>
            <a href="#projects">Projects</a>
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
            }}
          />

          <h1 style={{ fontSize: "64px", marginBottom: "20px" }}>
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
            Empowering businesses through technology, consulting, innovation,
            automation, and digital transformation.
          </p>

          <a
            href="https://calendly.com/josephkunmi9"
            target="_blank"
            rel="noopener noreferrer"
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
              "Technology solutions for businesses and organizations.",
            ],
            [
              "⚙️ Power Platform",
              "Power Apps, automation, SharePoint, and Microsoft 365.",
            ],
            [
              "🚀 Business Strategy",
              "Helping businesses improve operations and growth.",
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
              <h2 style={{ color: "#0b4ea2" }}>{title}</h2>
              <p style={{ lineHeight: "1.6", marginTop: "12px" }}>
                {description}
              </p>
            </div>
          ))}
        </section>

        {/* AFRICAN MARKET */}
        <section
          id="marketplace"
          style={{
            padding: "100px 20px",
            background: "#eef4ff",
            color: "#111",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "56px",
                color: "#0b4ea2",
                marginBottom: "20px",
              }}
            >
              Northern Ontario African Market
            </h2>

            <p
              style={{
                maxWidth: "900px",
                margin: "0 auto",
                fontSize: "22px",
                lineHeight: "1.8",
                color: "#444",
              }}
            >
              African groceries, Nigerian food, Caribbean products, and
              delivery services across Northern Ontario.
            </p>

            <a
              href="https://wa.me/14379980391"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "30px",
                background: "#25D366",
                color: "white",
                padding: "16px 28px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Order on WhatsApp
            </a>
          </div>

          {/* STORES */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "30px",
            }}
          >
            {[
              "Sudbury African Market",
              "Miteo’s Afro-Caribbean Food Store",
              "Sudbury Tropical Market",
              "Naija Taste Canada",
              "Oyay Wholesale African Store",
            ].map((store, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  width: "320px",
                  padding: "30px",
                  borderRadius: "18px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                }}
              >
                <h3 style={{ color: "#0b4ea2" }}>{store}</h3>

                <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
                  African grocery and food products available for local delivery
                  and pickup.
                </p>

                <a
                  href="https://wa.me/14379980391"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "20px",
                    background: "#0b4ea2",
                    color: "white",
                    padding: "12px 20px",
                    borderRadius: "10px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Order Products
                </a>
              </div>
            ))}
          </div>

          {/* PRODUCTS */}
          <div style={{ marginTop: "80px", textAlign: "center" }}>
            <h2
              style={{
                fontSize: "42px",
                color: "#0b4ea2",
                marginBottom: "40px",
              }}
            >
              Popular Products
            </h2>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              {[
                "Garri",
                "Egusi",
                "Palm Oil",
                "Yam Flour",
                "Plantain Chips",
                "Indomie",
                "Beans",
                "Crayfish",
              ].map((product, index) => (
                <div
                  key={index}
                  style={{
                    background: "white",
                    width: "220px",
                    padding: "25px",
                    borderRadius: "16px",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
                  }}
                >
                  <h3 style={{ color: "#0b4ea2" }}>{product}</h3>

                  <a
                    href="https://wa.me/14379980391"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      marginTop: "20px",
                      background: "#25D366",
                      color: "white",
                      padding: "10px 18px",
                      borderRadius: "10px",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Order
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          style={{
            padding: "90px 20px",
            textAlign: "center",
            background: "#ffffff",
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

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "35px",
            }}
          >
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
                alt="F and F Global Market"
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "25px" }}>
                <h3 style={{ color: "#0b4ea2" }}>
                  F & F Global Market
                </h3>

                <p style={{ color: "#444", lineHeight: "1.7" }}>
                  Ecommerce platform for African and Caribbean food sales.
                </p>
              </div>
            </div>
          </div>
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
            Empowering businesses through technology and innovation.
          </p>

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
      </main>
    </>
  );
}
