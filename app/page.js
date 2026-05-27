"use client";

export default function CleanConnectPage() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #071a3d, #0b4ea2, #2563eb)",
        color: "white",
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
          color: "#111",
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

          <div>
            <h2 style={{ color: "#0b4ea2", margin: 0 }}>
              Sudbury Clean Connect
            </h2>

            <small style={{ color: "#555" }}>
              by Direholah Consulting
            </small>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "25px",
            fontWeight: "bold",
            flexWrap: "wrap",
          }}
        >
          <a href="#home">Home</a>
          <a href="#cleaners">Our Cleaners</a>
          <a href="#booking">Book a Cleaner</a>
          <a href="#join">Become a Cleaner</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        style={{
          padding: "120px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "10px 20px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.15)",
              marginBottom: "25px",
              fontWeight: "bold",
            }}
          >
            Trusted cleaning professionals in Sudbury
          </div>

          <h1
            style={{
              fontSize: "72px",
              lineHeight: "1.1",
              marginBottom: "25px",
            }}
          >
            A Cleaner Home,
            <br />
            A Happier You
          </h1>

          <p
            style={{
              fontSize: "24px",
              maxWidth: "850px",
              margin: "0 auto",
              lineHeight: "1.7",
              opacity: 0.95,
            }}
          >
            Book vetted, professional cleaners in Sudbury in just a few clicks.
            From regular tidying to deep cleans, we connect you with the best.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "45px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#booking"
              style={{
                background: "white",
                color: "#0b4ea2",
                padding: "18px 35px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Book a Cleaner
            </a>

            <a
              href="#join"
              style={{
                border: "2px solid white",
                color: "white",
                padding: "18px 35px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Become a Cleaner
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        style={{
          background: "white",
          color: "#111",
          padding: "100px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "52px",
            color: "#0b4ea2",
            marginBottom: "60px",
          }}
        >
          Cleaning Services
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {[
            {
              title: "Standard Home Cleaning",
              text: "Routine cleaning for apartments, condos, and homes.",
            },
            {
              title: "Deep Cleaning",
              text: "Detailed cleaning for kitchens, bathrooms, and entire homes.",
            },
            {
              title: "Move-In / Move-Out Cleaning",
              text: "Professional cleaning before or after moving.",
            },
            {
              title: "Office Cleaning",
              text: "Reliable cleaning solutions for offices and commercial spaces.",
            },
          ].map((service, index) => (
            <div
              key={index}
              style={{
                background: "#f4f7fb",
                width: "320px",
                padding: "30px",
                borderRadius: "18px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              }}
            >
              <h3 style={{ color: "#0b4ea2" }}>
                {service.title}
              </h3>

              <p style={{ lineHeight: "1.7" }}>
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CLEANERS */}
      <section
        id="cleaners"
        style={{
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            marginBottom: "60px",
          }}
        >
          Featured Cleaners
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {[
            "Residential Cleaning Specialist",
            "Deep Cleaning Professional",
            "Office Cleaning Expert",
          ].map((cleaner, index) => (
            <div
              key={index}
              style={{
                background: "white",
                color: "#111",
                width: "320px",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              }}
            >
              <img
                src="/logo.png"
                alt="Cleaner"
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  background: "#dbeafe",
                }}
              />

              <div style={{ padding: "25px" }}>
                <h3 style={{ color: "#0b4ea2" }}>
                  {cleaner}
                </h3>

                <p>
                  Trusted cleaner available in Sudbury and surrounding areas.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING */}
      <section
        id="booking"
        style={{
          background: "white",
          color: "#111",
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            color: "#0b4ea2",
          }}
        >
          Book a Cleaner
        </h2>

        <p
          style={{
            fontSize: "22px",
            maxWidth: "750px",
            margin: "25px auto",
            lineHeight: "1.7",
          }}
        >
          Need home or office cleaning? Contact us today and we will connect
          you with a trusted cleaner near you.
        </p>

        <a
          href="mailto:admin@direholahconsulting.com"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "18px 40px",
            background: "#0b4ea2",
            color: "white",
            borderRadius: "12px",
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Request Cleaning Service
        </a>
      </section>

      {/* BECOME A CLEANER */}
      <section
        id="join"
        style={{
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            marginBottom: "25px",
          }}
        >
          Become a Cleaner
        </h2>

        <p
          style={{
            fontSize: "22px",
            maxWidth: "850px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          Join our network of trusted cleaning professionals and grow your
          business with Sudbury Clean Connect.
        </p>

        <a
          href="mailto:admin@direholahconsulting.com"
          style={{
            display: "inline-block",
            marginTop: "35px",
            padding: "18px 40px",
            background: "white",
            color: "#0b4ea2",
            borderRadius: "12px",
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Apply as a Cleaner
        </a>
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
        <h3>Sudbury Clean Connect</h3>

        <p>
          Powered by Direholah Consulting
        </p>

        <p
          style={{
            marginTop: "25px",
            opacity: 0.7,
            fontSize: "14px",
          }}
        >
          © 2026 Direholah Consulting. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
