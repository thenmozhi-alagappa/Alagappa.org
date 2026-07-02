import { Link } from "react-router-dom";
import {
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  YoutubeLogo,
  LinkedinLogo,
  MapPin,
  Phone,
  Envelope,
} from "phosphor-react";
import { schoolData } from "@/data/schoolData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "linear-gradient(180deg, #0d1b2e 0%, #0a1628 60%, #060f1c 100%)", color: "#e2e8f0" }}>

      {/* Thin top accent line */}
      <div style={{ height: "3px", background: "linear-gradient(90deg, #004B8E, #0066c2, #3d8de0, #004B8E)" }} />

      {/* Main content */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "52px 32px 40px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1.2fr 1.3fr",
          gap: "48px",
        }}
          className="footer-grid"
        >

          {/* Brand + description + social */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ background: "#fff", borderRadius: "10px", padding: "6px 10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <img
                  src="/logo.png"
                  alt="Logo"
                  style={{ height: "44px", objectFit: "contain" }}
                />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: "16px", color: "#fff", lineHeight: 1.3 }}>
                  {schoolData.name ?? "Alagappa Group"}
                </div>
                <div style={{ fontSize: "11px", color: "#cbd5e1", textTransform: "uppercase", letterSpacing: "0.07em", marginTop: "2px" }}>
                  of Educational Institutions
                </div>
              </div>
            </div>

            <p style={{ fontSize: "13.5px", color: "#fff", lineHeight: 1.75, marginBottom: "20px", maxWidth: "320px" }}>
              {schoolData.description ?? "Empowering generations through excellence in education, innovation, and character building across Chennai & Karaikudi."}
            </p>

<div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
  {[
    {
      Icon: FacebookLogo,
      href: "https://www.facebook.com/profile.php?id=61578774906657",
    },
    {
      Icon: TwitterLogo,
      href: "https://x.com/Alagappagr14894",
    },
    {
      Icon: InstagramLogo,
      href: "https://www.instagram.com/alagappagroups?igsh=MXR0NGJjbmI0YWI5Zw==",
    },
    {
      Icon: YoutubeLogo,
      href: "https://www.youtube.com/@thealagappagroup1288",
    },
    {
      Icon: LinkedinLogo,
      href: "https://www.linkedin.com/in/alagappa-group-of-educational-institutions-a783573a5/",
    },
  ].map(({ Icon, href }, i) => (
    <a
      key={i}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: "34px",
        height: "34px",
        borderRadius: "50%",
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textDecoration: "none",
        transition: "all 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#004B8E";
        e.currentTarget.style.color = "#fff";
        e.currentTarget.style.borderColor = "#004B8E";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.07)";
        e.currentTarget.style.color = "#94a3b8";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
      }}
    >
      <Icon size={15} weight="bold" />
    </a>
  ))}
</div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: "11px", fontWeight: 700, color: "#fff",
              textTransform: "uppercase", letterSpacing: "0.12em",
              marginBottom: "18px", paddingBottom: "10px",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { title: "About",        href: "/about" },
                { title: "Institutions", href: "/institutions" },
                { title: "Accomplishments", href: "/layouts" },
                { title: "Gallery",      href: "/gallery" },
                { title: "Admissions",   href: "/admissions" },
                { title: "Contact",      href: "/contact" },
                { title: "Donate",       href: "/donate" },
              ].map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    style={{ fontSize: "13.5px", color: "#fff", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px", transition: "color 0.15s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}
                  >
                    <span style={{ color: "#004B8E", fontSize: "16px", lineHeight: 1 }}>›</span>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontSize: "11px", fontWeight: 700, color: "#fff",
              textTransform: "uppercase", letterSpacing: "0.12em",
              marginBottom: "18px", paddingBottom: "10px",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}>
              Contact Us
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "rgba(0,75,142,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MapPin size={14} color="#60a5fa" />
                </div>
                <span style={{ fontSize: "13px", color: "#fff", lineHeight: 1.6, paddingTop: "4px" }}>
                  {schoolData.contact?.address ?? "Karaikudi, Tamil Nadu"}
                </span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "rgba(0,75,142,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Phone size={14} color="#60a5fa" />
                </div>
                <a href={`tel:${schoolData.contact?.phone}`} style={{ fontSize: "13px", color: "#fff", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}
                >
                  {schoolData.contact?.phone ?? "04565-225524"}
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "rgba(0,75,142,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Envelope size={14} color="#60a5fa" />
                </div>
                <a href={`mailto:${schoolData.contact?.email}`} style={{ fontSize: "13px", color: "#fff", textDecoration: "none", wordBreak: "break-all" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}
                >
                  {schoolData.contact?.email ?? "info@alagappa.org"}
                </a>
              </li>
            </ul>

            {/* Office Hours */}
            <div style={{ marginTop: "24px" }}>
              <h4 style={{
                fontSize: "11px", fontWeight: 700, color: "#fff",
                textTransform: "uppercase", letterSpacing: "0.12em",
                marginBottom: "12px", paddingBottom: "10px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}>
                Office Hours
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                {[
                  ["Mon – Fri",  "8:00 AM – 4:00 PM"],
                  ["Saturday",   "9:00 AM – 12:00 PM"],
                  ["Sunday",     "Closed"],
                ].map(([day, time]) => (
                  <div key={day} style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                    <span style={{ color: "#fff" }}>{day}</span>
                    <span style={{ color: time === "Closed" ? "#f87171" : "#e2e8f0", fontWeight: 500 }}>{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{
              fontSize: "11px", fontWeight: 700, color: "#fff",
              textTransform: "uppercase", letterSpacing: "0.12em",
              marginBottom: "18px", paddingBottom: "10px",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}>
              Newsletter
            </h4>
            <p style={{ fontSize: "13.5px", color: "#fff", lineHeight: 1.7, marginBottom: "16px" }}>
              Stay updated with the latest news, events, and announcements from Alagappa Group.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <input
                type="email"
                placeholder="Enter your email address"
                style={{
                  width: "100%", padding: "10px 14px", fontSize: "13px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "8px", color: "#fff", outline: "none",
                  boxSizing: "border-box",
                }}
              />
              <button
                style={{
                  width: "100%", padding: "10px 14px", fontSize: "13px", fontWeight: 700,
                  background: "#004B8E", color: "#fff", border: "none",
                  borderRadius: "8px", cursor: "pointer", letterSpacing: "0.04em",
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#0066c2")}
                onMouseLeave={e => (e.currentTarget.style.background = "#004B8E")}
              >
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{
          maxWidth: "1280px", margin: "0 auto",
          padding: "16px 32px",
          display: "flex", flexWrap: "wrap", alignItems: "center",
          justifyContent: "space-between", gap: "10px",
        }}>
          <p style={{ fontSize: "12.5px", color: "#cbd5e1", margin: 0 }}>
            © {currentYear} {schoolData.name ?? "Alagappa Group"}. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            {["Privacy Policy", "Terms of Service", "Accessibility"].map((label) => (
              <Link
                key={label}
                to="#"
                style={{ fontSize: "12.5px", color: "#cbd5e1", textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#94a3b8")}
                onMouseLeave={e => (e.currentTarget.style.color = "#4a6280")}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        .footer-grid {
          grid-template-columns: 2fr 1fr 1.2fr 1.3fr;
        }
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </footer>
  );
}