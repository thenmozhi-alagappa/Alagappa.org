import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Phone,
  Envelope,
  MapPin,
  FacebookLogo,
  TwitterLogo,
  GoogleLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
  CaretDown,
  List,
  X,
} from "phosphor-react";
import { schoolData } from "@/data/schoolData";

const navigationItems = [
  { title: "Home", href: "/" },
  {
    title: "About",
    href: "/about",
    children: [
      { title: "Management", href: "/about?tab=management" },
      // { title: "Trustees", href: "/about?tab=trustees" },
      { title: "Letter from Management", href: "/about?tab=letter" },
      { title: "Vision & Mission", href: "/about?tab=mission" },
      { title: "Press Releases", href: "/about?tab=press" },
    ],
  },
  {
    title: "Founder",
    href: "/founder",
    children: [
      { title: "Profile", href: "/founder?tab=profile" },
      { title: "Speeches", href: "/founder?tab=speeches" },
      { title: "Correspondence", href: "/founder?tab=correspondence" },
      { title: "Leaders & Dignitaries", href: "/founder?tab=leaders" },
      { title: "History", href: "/founder?tab=history" },
    ],
  },
  {
    title: "Institutions",
    href: "/institutions",
    children: [
      { title: "Primary", href: "/institutions?tab=primary" },
      { title: "Secondary", href: "/institutions?tab=secondary" },
      { title: "Professional Institutions", href: "/institutions?tab=professional" },
      { title: "Vocational Institutions", href: "/institutions?tab=vocational" },
    ],
  },
  {
    title: "Accomplishments",
    href: "/accomplishments",
    children: [
      { title: "Academics", href: "/accomplishments?tab=academics" },
      // { title: "Extracurricular", href: "/accomplishments?tab=extracurricular" },
      // { title: "Sports", href: "/accomplishments?tab=sports" },
      { title: "Admissions", href: "/accomplishments?tab=admissions" },
    ],
  },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact", href: "/contact" },
  { title: "Admissions", href: "https://forms.gle/h9xPSTVEQcnBfvoa8", button: true, external: true },
  { title: "Donate", href: "/donate", button: true },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  return (
    <>
      <header style={{ position: "sticky", top: 0, zIndex: 2000, width: "100%" }}>

        {/* ── Tier 1: Top bar — marquee + social icons ── */}
        <div style={{ background: "var(--navy)", overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ overflow: "hidden", flex: 1, minWidth: 0 }}>
              <div className="nav-marquee-track" style={{ padding: "8px 0", color: "#c8d8f0", fontSize: "12.5px" }}>
                <span style={{ marginRight: "60px" }}>
                  Join us and be a part of the success &bull; Admissions Open for 2026 &bull; Excellence in Education &bull; Innovation &bull; Character Building
                </span>
                <span style={{ marginRight: "60px" }}>
                  Join us and be a part of the success &bull; Admissions Open for 2026 &bull; Excellence in Education &bull; Innovation &bull; Character Building
                </span>
              </div>
            </div>
          <div
  className="top-bar-socials"
  style={{
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "0 16px",
    flexShrink: 0,
  }}
>
  {[
    {
      Icon: FacebookLogo,
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61578774906657",
    },
    {
      Icon: TwitterLogo,
      label: "Twitter",
      href: "https://x.com/Alagappagr14894",
    },
    // Remove this if you don't have a Google page
    {
      Icon: GoogleLogo,
      label: "Google",
      href: "#",
    },
    {
      Icon: InstagramLogo,
      label: "Instagram",
      href: "https://www.instagram.com/alagappagroups?igsh=MXR0NGJjbmI0YWI5Zw==",
    },
    {
      Icon: LinkedinLogo,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/alagappa-group-of-educational-institutions-a783573a5/",
    },
    {
      Icon: YoutubeLogo,
      label: "YouTube",
      href: "https://www.youtube.com/@thealagappagroup1288",
    },
  ].map(({ Icon, label, href }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="social-icon"
    >
      <Icon size={14} weight="bold" />
    </a>
  ))}
</div>
          </div>
        </div>

        {/* ── Tier 2: Logo + Contact blocks ── */}
        <div style={{ background: "#fff", borderBottom: "1px solid #e8edf5" }}>
          <div style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "12px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}>
            {/* Logo */}
            <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", minWidth: 0, flex: 1 }}>
              <img
                src="/logo.png"
                alt="Alagappa Group logo"
                style={{ height: "97px", width: "auto", objectFit: "contain", flexShrink: 0, paddingBottom: "14px" }}
              />
              <div style={{ lineHeight: 1.3, minWidth: 0 }}>
                <div style={{ fontSize: "15px", fontWeight: 800, color: "var(--navy)", letterSpacing: "-0.01em", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {schoolData?.name ?? "Alagappa Group"}
                </div>
                <div style={{ fontSize: "10px", color: "#7a8fa6", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  of Educational Institutions
                </div>
              </div>
            </Link>

            {/* Desktop contact blocks */}
            <div className="desktop-contacts" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div className="contact-block">
                <div className="contact-icon-wrap"><Phone size={18} weight="bold" /></div>
                <div>
                  <div className="contact-label">Call Us</div>
                  <div className="contact-value">{schoolData?.phone ?? "+91 4449971111"}</div>
                </div>
              </div>
              <div style={{ width: "1px", height: "40px", background: "#e0e8f0" }} />
              <div className="contact-block">
                <div className="contact-icon-wrap"><Envelope size={18} weight="bold" /></div>
                <div>
                  <div className="contact-label">Email Us</div>
                  <div className="contact-value">{schoolData?.email ?? "info@alagappa.org"}</div>
                </div>
              </div>
              <div style={{ width: "1px", height: "40px", background: "#e0e8f0" }} />
              <a
                href="https://www.google.com/maps/search/Alagappa+Educational+Trust+Karaikudi/@10.080273,78.790121,15z"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-block"
                style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div className="contact-icon-wrap"><MapPin size={18} weight="bold" /></div>
                <div>
                  <div className="contact-label">Locate Us</div>
                  <div className="contact-value">{schoolData?.address ?? "Karaikudi, Tamil Nadu"}</div>
                </div>
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="mobile-hamburger"
              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--navy)", padding: "6px", display: "none", flexShrink: 0 }}
            >
              <List size={28} weight="bold" />
            </button>
          </div>
        </div>

        {/* ── Mobile contact icon bar ── */}
        <div className="mobile-contact-bar">
          <a href={`tel:${schoolData?.phone ?? "+91 4449971111"}`} className="mobile-contact-item">
            <div className="mobile-contact-icon"><Phone size={16} weight="bold" /></div>
            <span className="mobile-contact-text">{schoolData?.phone ?? "+91 4449971111"}</span>
          </a>
          <a href={`mailto:${schoolData?.email ?? "info@alagappa.org"}`} className="mobile-contact-item">
            <div className="mobile-contact-icon"><Envelope size={16} weight="bold" /></div>
            <span className="mobile-contact-text">{schoolData?.email ?? "info@alagappa.org"}</span>
          </a>
          <a
            href="https://www.google.com/maps/search/Alagappa+Educational+Trust+Karaikudi/@10.080273,78.790121,15z"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-contact-item"
          >
            <div className="mobile-contact-icon"><MapPin size={16} weight="bold" /></div>
            <span className="mobile-contact-text">{schoolData?.address ?? "Karaikudi, TN"}</span>
          </a>
        </div>

        {/* ── Tier 3: Desktop navigation bar ── */}
        <nav className="desktop-nav" style={{ background: "var(--navy)" }}>
          <div style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            overflow: "visible",
          }}>
            {navigationItems.map((item) =>
              item.button ? (
                <div key={item.title} style={{ padding: "0 6px", display: "flex", alignItems: "center" }}>
                  <Link
                    to={item.href}
                    className="gradient-btn-wrap"
                    target={item.external ? "_blank" : "_self"}
                    rel={item.external ? "noopener noreferrer" : undefined}
                  >
                    <span className="gradient-btn-inner">{item.title}</span>
                  </Link>
                </div>
              ) : (
                <div
                  key={item.title}
                  className={`nav-item ${openDropdown === item.title ? "open" : ""}`}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.children ? (
                    <button
                      type="button"
                      className={`nav-link ${location.pathname === item.href ? "active" : ""}`}
                      aria-expanded={openDropdown === item.title}
                      onClick={() => setOpenDropdown(openDropdown === item.title ? null : item.title)}
                      onMouseEnter={() => setOpenDropdown(item.title)}
                      onFocus={() => setOpenDropdown(item.title)}
                    >
                      {item.title}
                      <CaretDown size={11} weight="bold" style={{ marginTop: "1px" }} />
                    </button>
                  ) : (
                    <Link to={item.href} className={`nav-link ${location.pathname === item.href ? "active" : ""}`}>
                      {item.title}
                    </Link>
                  )}
                  {item.children && (
                    <div
                      className="nav-dropdown"
                      onMouseEnter={() => setOpenDropdown(item.title)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          to={child.href}
                          onClick={() => setOpenDropdown(null)}
                          target={child.external ? "_blank" : "_self"}
                          rel={child.external ? "noopener noreferrer" : undefined}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </nav>
      </header>

      {/* ── Mobile sidebar drawer ── */}
      {mobileOpen && (
        <div className="mobile-menu">
          <div className="mobile-backdrop" onClick={() => setMobileOpen(false)} />
          <div className="mobile-panel">

            {/* Drawer header */}
            <div className="mobile-panel-header">
              <div className="mobile-panel-brand">
                <img src="/logo.png" alt="Logo" style={{ height: "44px", objectFit: "contain" }} />
                <div>
                  <div className="mobile-panel-brand-text">{schoolData?.name ?? "Alagappa Group"}</div>
                  <div className="mobile-panel-brand-sub">of Educational Institutions</div>
                </div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", padding: "4px" }}
              >
                <X size={22} weight="bold" />
              </button>
            </div>

            {/* Contact info inside drawer */}
            <div style={{ background: "#f0f5fb", borderBottom: "1px solid #dde6f0", padding: "12px 20px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <a href={`tel:${schoolData?.phone ?? "04565225524"}`} style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "var(--navy)" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "var(--navy)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Phone size={14} weight="bold" color="#fff" />
                </div>
                <span style={{ fontSize: "13px", fontWeight: 600 }}>{schoolData?.phone ?? "04565-225524"}</span>
              </a>
              <a href={`mailto:${schoolData?.email ?? "info@alagappa.org"}`} style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "var(--navy)" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "var(--navy)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Envelope size={14} weight="bold" color="#fff" />
                </div>
                <span style={{ fontSize: "13px", fontWeight: 600 }}>{schoolData?.email ?? "info@alagappa.org"}</span>
              </a>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(schoolData?.address ?? "Karaikudi, Tamil Nadu")}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "var(--navy)" }}
              >
                <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "var(--navy)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MapPin size={14} weight="bold" color="#fff" />
                </div>
                <span style={{ fontSize: "13px", fontWeight: 600 }}>{schoolData?.address ?? "Karaikudi, Tamil Nadu"}</span>
              </a>
            </div>

            {/* Nav items */}
            {navigationItems.map((item) =>
              item.button ? (
                <div key={item.title} style={{ padding: "12px 20px", borderBottom: "1px solid #f0f0f0" }}>
                  <Link
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="gradient-btn-wrap"
                    style={{ width: "100%" }}
                    target={item.external ? "_blank" : "_self"}
                    rel={item.external ? "noopener noreferrer" : undefined}
                  >
                    <span className="gradient-btn-inner" style={{ width: "100%", justifyContent: "center" }}>
                      {item.title}
                    </span>
                  </Link>
                </div>
              ) : (
                <div key={item.title} className="mobile-nav-item">
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        className="mobile-nav-link"
                        onClick={() => setOpenDropdown(openDropdown === item.title ? null : item.title)}
                      >
                        <span>{item.title}</span>
                        <CaretDown
                          size={13}
                          weight="bold"
                          style={{
                            transform: openDropdown === item.title ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.2s",
                            flexShrink: 0,
                          }}
                        />
                      </button>
                      {openDropdown === item.title && item.children.map((child) => (
                        <Link
                          key={child.title}
                          to={child.href}
                          onClick={() => { setMobileOpen(false); setOpenDropdown(null); }}
                          className="mobile-sub-link"
                          target={child.external ? "_blank" : "_self"}
                          rel={child.external ? "noopener noreferrer" : undefined}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="mobile-nav-link"
                      style={{ display: "flex" }}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              )
            )}

            {/* Social icons */}
            <div style={{ borderTop: "1px solid #f0f0f0" }}>
              <div style={{ padding: "12px 20px 4px", fontSize: "11px", fontWeight: 700, color: "#999", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Follow Us
              </div>
              <div className="mobile-social-row">
                {[
                  { Icon: FacebookLogo, label: "Facebook" },
                  { Icon: TwitterLogo, label: "Twitter" },
                  { Icon: GoogleLogo, label: "Google" },
                  { Icon: InstagramLogo, label: "Instagram" },
                  { Icon: LinkedinLogo, label: "LinkedIn" },
                  { Icon: YoutubeLogo, label: "YouTube" },
                ].map(({ Icon, label }) => (
                  <a key={label} href="#" aria-label={label} className="mobile-social-icon">
                    <Icon size={16} weight="bold" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}