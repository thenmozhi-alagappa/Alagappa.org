import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  User,
  GraduationCap,
  Briefcase,
  Medal,
  Books,
  Handshake,
  Lightbulb,
  Flag,
  Gift,
  DownloadSimple,
} from "phosphor-react";
import {
  founderMeta,
  founderSections,
  audioSpeeches,
  writtenSpeeches,
  lettersBy,
  lettersTo,
  distinguishedPersonalities,
  historyTimeline,
  TAB_META,
  subNavItems,
  groupByCategory,
} from "@/data/FounderData";


// Maps the string icon keys stored in founderData.js to the actual
// phosphor-react icon components used at render time.
const ICONS = {
  User,
  GraduationCap,
  Briefcase,
  Medal,
  Books,
  Handshake,
  Lightbulb,
  Flag,
  Gift,
};

// ── Sub-component: DownloadButton ────────────────────────────────────────────

function DownloadButton({ href, label = "Download", filename }) {
  return (
    <a
      href={href}
      download={filename ?? true}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "8px 14px",
        borderRadius: "8px",
        background: "rgba(74,158,255,0.14)",
        border: "1px solid rgba(74,158,255,0.35)",
        color: "#4a9eff",
        fontSize: "12px",
        fontWeight: 700,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        textDecoration: "none",
        cursor: "pointer",
        transition: "background 0.15s ease, transform 0.15s ease",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(74,158,255,0.24)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(74,158,255,0.14)"; }}
      onClick={(e) => e.stopPropagation()}
    >
      <DownloadSimple size={14} weight="bold" />
      {label}
    </a>
  );
}

// ── Sub-component: LetterCard ────────────────────────────────────────────────
// Clickable letters open the original scan directly in a new browser tab.

function LetterCard({ letter }) {
  const [imgError, setImgError] = useState(false);
  const clickable = letter.hasScan;

  const Wrapper = clickable ? "a" : "div";
  const wrapperProps = clickable
    ? { href: letter.letterSrc, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      style={{
        background: "#fff",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(26,58,107,0.10)",
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        cursor: clickable ? "pointer" : "default",
        opacity: clickable ? 1 : 0.68,
        transition: "transform 0.18s ease, box-shadow 0.18s ease",
        height: "480px",
      }}
      onMouseEnter={(e) => {
        if (clickable) {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 14px 32px rgba(26,58,107,0.16)";
        }
      }}
      onMouseLeave={(e) => {
        if (clickable) {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(26,58,107,0.10)";
        }
      }}
    >
     <div style={{ height: "290px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
  {!imgError ? (
    <img
      src={letter.image ?? `/leaders/${letter.name.toLowerCase().replace(/[\s.]+/g, "-").replace(/[^a-z0-9-]/g, "")}.jpg`}
       alt={letter.name}
  onError={() => setImgError(true)}
  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
/>
  ) : (
    <div style={{ width: "100%", height: "100%", background: "#f0f4f9", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ fontSize: "36px", fontWeight: 800, color: "#1a3a6b", opacity: 0.6 }}>{letter.name.charAt(0)}</span>
    </div>
  )}
  <div style={{ position: "absolute", top: "12px", right: "12px", fontSize: "10px", fontWeight: 700, color: "#1a3a6b", background: "rgba(255,255,255,0.85)", border: "1px solid rgba(74,158,255,0.35)", borderRadius: "20px", padding: "2px 9px", letterSpacing: "0.04em" }}>
    {letter.year}
  </div>
</div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "14px 16px 16px", gap: "12px", minHeight: 0 }}>
        <div style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column", minHeight: 0 }}>
          <div style={{ fontSize: "14px", fontWeight: 700, color: "#0a1628", lineHeight: 1.35, marginBottom: "4px" }}>{letter.name}</div>
          <div style={{ fontSize: "12px", color: "#4a9eff", fontWeight: 600, lineHeight: 1.4, marginBottom: "6px" }}>{letter.role}</div>
          <div style={{ fontSize: "12px", color: "#8a9ab5", lineHeight: 1.65, flex: 1, overflowY: "auto", paddingRight: "4px", scrollbarWidth: "thin", scrollbarColor: "rgba(26,58,107,0.2) transparent" }}>
            {letter.summary}
          </div>
        </div>
        {clickable ? (
          <button style={{ width: "100%", padding: "12px 0", borderRadius: "8px", background: "linear-gradient(135deg, #0a1628 0%, #1a3a6b 100%)", border: "none", color: "#fff", fontSize: "13px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center", cursor: "pointer", boxShadow: "0 4px 12px rgba(10,22,40,0.25)", transition: "all 0.2s ease", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", flexShrink: 0 }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 16px rgba(10,22,40,0.35)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(10,22,40,0.25)"; }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1,0-16h56A8,8,0,0,1,192,128Zm-40,24a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h24A8,8,0,0,1,152,152Z"/></svg>
            View Details
          </button>
        ) : (
          <div style={{ width: "100%", padding: "12px 0", borderRadius: "8px", background: "rgba(26,58,107,0.07)", border: "1px dashed rgba(26,58,107,0.2)", color: "#b0bcc8", fontSize: "13px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center", flexShrink: 0 }}>Not Available</div>
        )}
      </div>
    </Wrapper>
  );
}

// ── Sub-component: LeaderCard ────────────────────────────────────────────────

function LeaderCard({ person }) {
  const [imgError, setImgError] = useState(false);
  const imageSrc = person.image || (person.name ? `/leaders/${person.name.toLowerCase().replace(/[\s.]+/g, "-").replace(/[^a-z0-9-]/g, "")}.jpg` : null);
  const showImage = !!imageSrc && !imgError;

  return (
    <div style={{ background: "#fff", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(26,58,107,0.10)", display: "flex", flexDirection: "column", transition: "transform 0.18s ease, box-shadow 0.18s ease" }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 14px 32px rgba(26,58,107,0.16)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(26,58,107,0.10)"; }}>
      {showImage && (
        <div style={{ height: "200px", position: "relative", overflow: "hidden", flexShrink: 0 }}>
          <img
            src={imageSrc}
            alt={person.name}
            onError={() => setImgError(true)}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
          />
          {person.year && (
            <div style={{ position: "absolute", top: "12px", right: "12px", fontSize: "10px", fontWeight: 700, color: "#1a3a6b", background: "rgba(255,255,255,0.85)", border: "1px solid rgba(74,158,255,0.35)", borderRadius: "20px", padding: "2px 9px", letterSpacing: "0.04em" }}>
              {person.year}
            </div>
          )}
        </div>
      )}
      <div style={{ flex: 1, padding: "16px 18px 20px", display: "flex", flexDirection: "column", gap: "6px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {!showImage && (
            <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#eef3fa", border: "1px solid rgba(26,58,107,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: "13px", fontWeight: 800, color: "#1a3a6b" }}>{person.name ? person.name.charAt(0) : "?"}</span>
            </div>
          )}
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: "14px", fontWeight: 700, color: "#0a1628", lineHeight: 1.35 }}>{person.name}</div>
            {!showImage && person.year && (
              <div style={{ fontSize: "10px", fontWeight: 600, color: "#7a8fa6" }}>{person.year}</div>
            )}
          </div>
        </div>
        <div style={{ fontSize: "12px", color: "#4a9eff", fontWeight: 600, lineHeight: 1.4 }}>{person.role}</div>
        <p style={{ fontSize: "12px", color: "#8a9ab5", lineHeight: 1.7, margin: "4px 0 0", maxHeight: "82px", overflowY: "auto", paddingRight: "4px" }}>{person.description}</p>
      </div>
    </div>
  );
}

// ── Sub-component: CategoryGroup ─────────────────────────────────────────────
// Renders a category sub-heading (e.g. "Prime Ministers") followed by a grid
// of cards. `renderCard` decides how each item in the group is rendered so
// this can be reused for both letter cards and leader cards.

function CategoryGroup({ category, items, gridClassName, renderCard }) {
  return (
    <div style={{ marginBottom: "32px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
        <div style={{ fontSize: "13px", fontWeight: 700, color: "#1a3a6b", textTransform: "uppercase", letterSpacing: "0.06em" }}>{category}</div>
        <div style={{ flex: 1, height: "1px", background: "rgba(26,58,107,0.12)" }} />
        <div style={{ fontSize: "11px", fontWeight: 600, color: "#7a8fa6", background: "rgba(26,58,107,0.06)", borderRadius: "20px", padding: "2px 10px" }}>{items.length}</div>
      </div>
      <div className={gridClassName}>{items.map(renderCard)}</div>
    </div>
  );
}

// ── Sub-component: ProfileSection ────────────────────────────────────────────

function ProfileSection({ section, isLast }) {
  const IconComponent = ICONS[section.icon];
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
        <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "linear-gradient(135deg, #0a1628 0%, #1a3a6b 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <IconComponent size={16} color="#4a9eff" weight="duotone" />
        </div>
        <h3 style={{ fontSize: "13px", fontWeight: 700, color: "#1a3a6b", textTransform: "uppercase", letterSpacing: "0.08em", margin: 0 }}>{section.label}</h3>
      </div>
      <div style={{ paddingLeft: "42px" }}>
        {section.preamble && <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#4a5568", marginBottom: "10px" }}>{section.preamble}</p>}
        {section.type === "text" && <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#4a5568", margin: 0 }}>{section.content}</p>}
        {section.type === "list" && (
          <ul style={{ margin: 0, paddingLeft: "1.1rem", display: "flex", flexDirection: "column", gap: "6px" }}>
            {section.items.map((item, i) => <li key={i} style={{ fontSize: "15px", lineHeight: 1.8, color: "#4a5568" }}>{item}</li>)}
          </ul>
        )}
        {section.type === "awards" && (
          <ul style={{ margin: 0, paddingLeft: "1.1rem", display: "flex", flexDirection: "column", gap: "8px" }}>
            {section.items.map((award, i) => (
              <li key={i} style={{ fontSize: "15px", lineHeight: 1.8, color: "#4a5568" }}>
                <span style={{ display: "inline-block", fontSize: "11px", fontWeight: 700, background: "rgba(234,176,8,0.12)", color: "#854f0b", borderRadius: "20px", padding: "2px 10px", marginRight: "8px", verticalAlign: "middle", letterSpacing: "0.03em" }}>{award.badge}</span>
                {award.detail}
              </li>
            ))}
          </ul>
        )}
      </div>
      {!isLast && <hr style={{ border: "none", borderTop: "1px solid rgba(26,58,107,0.08)", margin: "22px 0" }} />}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function Founder() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab") ?? "profile";

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [tab]);

  const meta = TAB_META[tab] ?? TAB_META.profile;

  return (
    <div className="flex flex-col">
      {/* Hero + Tab Bar */}
      <section style={{ background: "linear-gradient(160deg, #0a1628 0%, #0d2444 45%, #1a3a6b 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-60px", left: "50%", transform: "translateX(-50%)", width: "700px", height: "300px", background: "radial-gradient(ellipse, rgba(74,158,255,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "52px 24px 36px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-block", fontSize: "11px", fontWeight: 700, color: "#4a9eff", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "12px", background: "rgba(74,158,255,0.12)", padding: "4px 14px", borderRadius: "20px", border: "1px solid rgba(74,158,255,0.25)" }}>Our Founder</div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, color: "#ffffff", marginBottom: "12px", lineHeight: 1.15 }}>{meta.heading}</h1>
          <p style={{ fontSize: "15px", color: "rgba(200,216,240,0.75)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>{meta.sub}</p>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", overflowX: "auto", scrollbarWidth: "none", gap: "2px" }}>
            {subNavItems.map((item) => {
              const isActive = tab === item.tab;
              return (
                <Link key={item.tab} to={`/founder?tab=${item.tab}`} style={{ display: "inline-flex", alignItems: "center", padding: "14px 20px", fontSize: "13px", fontWeight: isActive ? 700 : 500, color: isActive ? "#fff" : "rgba(200,216,240,0.65)", textDecoration: "none", whiteSpace: "nowrap", borderBottom: isActive ? "3px solid #4a9eff" : "3px solid transparent", background: isActive ? "rgba(74,158,255,0.12)" : "transparent", transition: "all 0.2s ease", letterSpacing: "0.01em", flexShrink: 0 }}
                  onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; } }}
                  onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.color = "rgba(200,216,240,0.65)"; e.currentTarget.style.background = "transparent"; } }}>
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROFILE */}
      {tab === "profile" && (
        <section className="py-16 lg:py-20">
          <div className="container px-4" style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div className="founder-top-row">
              <div className="founder-portrait-col">
                <div style={{ position: "relative" }}>
                  <div style={{ position: "absolute", inset: "-10px", background: "linear-gradient(135deg, rgba(26,58,107,0.08) 0%, rgba(74,158,255,0.05) 100%)", borderRadius: "18px", zIndex: 0 }} />
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <img src={founderMeta.image} alt={founderMeta.name} style={{ width: "100%", aspectRatio: "4 / 5", objectFit: "cover", borderRadius: "14px", boxShadow: "0 10px 30px rgba(0,0,0,0.14)", display: "block" }} />
                    <div style={{ position: "absolute", bottom: "14px", right: "14px", background: "linear-gradient(90deg, #0a1628 0%, #1a3a6b 100%)", color: "#fff", padding: "10px 14px", borderRadius: "8px", boxShadow: "0 6px 20px rgba(10,22,40,0.35)", maxWidth: "85%" }}>
                      <div style={{ fontSize: "13px", fontWeight: 700, lineHeight: 1.3 }}>Dr. RM. Alagappa Chettiar</div>
                      <div style={{ fontSize: "11px", color: "#4a9eff", marginTop: "2px" }}>1909 – 1957</div>
                    </div>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "20px" }}>
                  {founderMeta.highlights.map((h) => (
                    <div key={h.label} style={{ background: "linear-gradient(135deg, #f0f5fb 0%, #e8f0fa 100%)", border: "1px solid rgba(26,58,107,0.12)", borderRadius: "10px", padding: "12px 10px", textAlign: "center" }}>
                      <div style={{ fontSize: "20px", fontWeight: 800, color: "#1a3a6b", lineHeight: 1.1 }}>{h.value}</div>
                      <div style={{ fontSize: "10px", fontWeight: 600, color: "#7a8fa6", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: "3px" }}>{h.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="founder-bio-col">
                <div style={{ marginBottom: "28px" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                    <div style={{ width: "32px", height: "3px", background: "linear-gradient(90deg, #1a3a6b 0%, #4a9eff 100%)", borderRadius: "2px" }} />
                    <span style={{ fontSize: "11px", fontWeight: 700, color: "#4a9eff", textTransform: "uppercase", letterSpacing: "0.08em" }}>Founder</span>
                  </div>
                  <h2 style={{ fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 800, color: "#0a1628", marginBottom: "6px", lineHeight: 1.2 }}>{founderMeta.name}</h2>
                  <p style={{ fontSize: "13px", color: "#4a9eff", fontWeight: 600, marginBottom: "4px", letterSpacing: "0.04em" }}>{founderMeta.credentials}</p>
                  <p style={{ fontSize: "12px", color: "#7a8fa6", marginBottom: "16px" }}>{founderMeta.tagline} • {founderMeta.birthPlace} • {founderMeta.born} – {founderMeta.died}</p>
                  <div style={{ width: "50px", height: "3px", background: "linear-gradient(90deg, #1a3a6b 0%, #4a9eff 100%)", borderRadius: "2px" }} />
                </div>
                <div>{founderSections.map((section, index) => <ProfileSection key={section.key} section={section} isLast={index === founderSections.length - 1} />)}</div>
              </div>
            </div>
          </div>
          <style>{`
            .founder-top-row { display: flex; flex-direction: row; align-items: flex-start; gap: 48px; }
            .founder-portrait-col { flex: 0 0 280px; width: 280px; position: sticky; top: 24px; }
            .founder-bio-col { flex: 1 1 0; min-width: 0; }
            @media (max-width: 768px) {
              .founder-top-row { flex-direction: column; }
              .founder-portrait-col { flex: none; width: 100%; max-width: 300px; margin: 0 auto; position: static; }
            }
          `}</style>
        </section>
      )}

      {/* SPEECHES */}
      {tab === "speeches" && (
        <section className="py-16 lg:py-20">
          <div className="container px-4" style={{ maxWidth: "960px", margin: "0 auto" }}>
            <div style={{ marginBottom: "52px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "8px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "linear-gradient(135deg, #0a1628, #1a3a6b)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4a9eff" viewBox="0 0 256 256"><path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" /></svg>
                </div>
                <div>
                  <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#0a1628", margin: 0 }}>Audio Speeches</h2>
                  <p style={{ fontSize: "13px", color: "#7a8fa6", margin: "3px 0 0" }}>Rare audio recordings of Dr. Alagappa Chettiar's addresses.</p>
                </div>
              </div>
              <div style={{ width: "100%", height: "1px", background: "rgba(26,58,107,0.1)", margin: "20px 0 24px" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {audioSpeeches.map((speech) => (
                  <div key={speech.id} style={{ background: "#fff", border: "1px solid rgba(26,58,107,0.1)", borderRadius: "14px", overflow: "hidden", boxShadow: "0 4px 16px rgba(26,58,107,0.07)" }}>
                    <div style={{ background: "linear-gradient(90deg, #0a1628 0%, #1a3a6b 100%)", padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>{speech.title}</div>
                        <div style={{ fontSize: "11px", color: "#4a9eff", marginTop: "3px" }}>{speech.date}</div>
                      </div>
                      <DownloadButton
                        href={speech.audioSrc}
                        label="Download"
                        filename={`${speech.title}.mp3`}
                      />
                    </div>
                    <div style={{ padding: "16px 20px 14px" }}>
                      <p style={{ fontSize: "14px", lineHeight: 1.75, color: "#4a5568", margin: "0 0 14px" }}>{speech.description}</p>
                      <audio controls style={{ width: "100%", height: "36px", accentColor: "#1a3a6b" }}><source src={speech.audioSrc} type="audio/mpeg" />Your browser does not support audio.</audio>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "8px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "linear-gradient(135deg, #0a1628, #1a3a6b)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4a9eff" viewBox="0 0 256 256"><path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z" /></svg>
                </div>
                <div><h2 style={{ fontSize: "20px", fontWeight: 800, color: "#0a1628", margin: 0 }}>Written Speeches</h2><p style={{ fontSize: "13px", color: "#7a8fa6", margin: "3px 0 0" }}>Transcripts of significant addresses.</p></div>
              </div>
              <div style={{ width: "100%", height: "1px", background: "rgba(26,58,107,0.1)", margin: "20px 0 24px" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {writtenSpeeches.map((speech, index) => (
                  <div key={speech.id} style={{ background: "#fff", border: "1px solid rgba(26,58,107,0.1)", borderRadius: "14px", padding: "20px 24px", boxShadow: "0 4px 16px rgba(26,58,107,0.07)", display: "flex", gap: "18px", alignItems: "flex-start" }}>
                    <div style={{ flexShrink: 0, width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg, #0a1628, #1a3a6b)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: "13px", fontWeight: 800, color: "#4a9eff" }}>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", marginBottom: "8px" }}>
                        <div style={{ fontSize: "15px", fontWeight: 700, color: "#0a1628" }}>{speech.title}</div>
                        <div style={{ fontSize: "11px", fontWeight: 600, color: "#4a9eff", background: "rgba(74,158,255,0.1)", borderRadius: "20px", padding: "3px 12px" }}>{speech.date}</div>
                      </div>
                      <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#4a5568", margin: "0 0 14px" }}>{speech.description}</p>
                      <DownloadButton
                        href={speech.docSrc}
                        label="Download Transcript"
                        filename={`${speech.title}.pdf`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CORRESPONDENCE */}
      {tab === "correspondence" && (
        <section className="py-16 lg:py-20">
          <div className="container px-4" style={{ maxWidth: "980px", margin: "0 auto" }}>
            <div style={{ marginBottom: "52px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "8px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "linear-gradient(135deg, #0a1628, #1a3a6b)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4a9eff" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,16L128,129.64,40,64ZM216,192H40V82.77l82.79,75.17a8,8,0,0,0,10.42,0L216,82.77V192Z" /></svg>
                </div>
                <div><h2 style={{ fontSize: "20px", fontWeight: 800, color: "#0a1628", margin: 0 }}>Letters by Dr. Alagappa Chettiar</h2><p style={{ fontSize: "13px", color: "#7a8fa6", margin: "3px 0 0" }}>Letters written to prominent figures in Indian history.</p></div>
              </div>
              <div style={{ width: "100%", height: "1px", background: "rgba(26,58,107,0.1)", margin: "20px 0 24px" }} />
              {groupByCategory(lettersBy).map((group) => (
                <CategoryGroup
                  key={group.category}
                  category={group.category}
                  items={group.items}
                  gridClassName="correspondence-grid"
                  renderCard={(letter) => <LetterCard key={letter.id} letter={letter} />}
                />
              ))}
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "8px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "linear-gradient(135deg, #0a1628, #1a3a6b)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4a9eff" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,96.36L46.37,64H209.63ZM98.32,128,40,181.05V74.9Zm11.87,10.79,13.17,11.95a8,8,0,0,0,10.68,0l13.17-11.95L209,192H47ZM157.68,128,216,74.9v106.15Z" /></svg>
                </div>
                <div><h2 style={{ fontSize: "20px", fontWeight: 800, color: "#0a1628", margin: 0 }}>Letters to Dr. Alagappa Chettiar</h2><p style={{ fontSize: "13px", color: "#7a8fa6", margin: "3px 0 0" }}>Letters received from national leaders.</p></div>
              </div>
              <div style={{ width: "100%", height: "1px", background: "rgba(26,58,107,0.1)", margin: "20px 0 24px" }} />
              {groupByCategory(lettersTo).map((group) => (
                <CategoryGroup
                  key={group.category}
                  category={group.category}
                  items={group.items}
                  gridClassName="correspondence-grid"
                  renderCard={(letter) => <LetterCard key={letter.id} letter={letter} />}
                />
              ))}
            </div>
          </div>
          <style>{`
            .correspondence-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; }
            @media (max-width: 560px) { .correspondence-grid { grid-template-columns: 1fr; } }
          `}</style>
        </section>
      )}

      {/* LEADERS & DIGNITARIES */}
      {tab === "leaders" && (
        <section className="py-16 lg:py-20">
          <div className="container px-4" style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <p style={{ fontSize: "15px", color: "#6b7a90", lineHeight: 1.8, maxWidth: "720px", marginBottom: "36px" }}>Dr. Alagappa Chettiar's vision and contributions to education brought him into close association with distinguished leaders in Indian history.</p>
            <div className="leaders-grid">{distinguishedPersonalities.map((person) => <LeaderCard key={person.id} person={person} />)}</div>
          </div>
          <style>{`
            .leaders-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
            @media (max-width: 1280px) { .leaders-grid { grid-template-columns: repeat(3, 1fr); } }
            @media (max-width: 900px) { .leaders-grid { grid-template-columns: repeat(2, 1fr); } }
            @media (max-width: 560px) { .leaders-grid { grid-template-columns: 1fr; } }
          `}</style>
        </section>
      )}

      {/* HISTORY TIMELINE */}
      {tab === "history" && (
        <section className="py-16 lg:py-20">
          <div className="container px-4" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "15px", color: "#6b7a90", lineHeight: 1.8, marginBottom: "40px" }}>The Alagappa legacy spans over eight decades of service to education and nation-building.</p>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", left: "56px", top: 0, bottom: 0, width: "2px", background: "linear-gradient(180deg, #1a3a6b 0%, #4a9eff 50%, #1a3a6b 100%)", borderRadius: "2px" }} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                {historyTimeline.map((event, index) => (
                  <div key={index} style={{ display: "flex", alignItems: "flex-start", paddingBottom: index < historyTimeline.length - 1 ? "32px" : 0 }}>
                    <div style={{ flexShrink: 0, width: "112px", paddingTop: "2px" }}>
                      <div style={{ background: "linear-gradient(135deg, #0a1628, #1a3a6b)", color: "#4a9eff", fontSize: "11px", fontWeight: 800, padding: "5px 8px", borderRadius: "6px", textAlign: "center", letterSpacing: "0.04em", display: "inline-block", boxShadow: "0 3px 10px rgba(10,22,40,0.18)", position: "relative", zIndex: 1 }}>{event.year}</div>
                    </div>
                    <div style={{ flex: 1, background: "#fff", border: "1px solid rgba(26,58,107,0.1)", borderRadius: "12px", padding: "16px 20px", boxShadow: "0 4px 16px rgba(26,58,107,0.07)" }}>
                      <div style={{ fontSize: "14px", fontWeight: 700, color: "#0a1628", marginBottom: "6px" }}>{event.title}</div>
                      <p style={{ fontSize: "13px", lineHeight: 1.75, color: "#4a5568", margin: 0 }}>{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}