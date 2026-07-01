import { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { MapPin, Globe, GraduationCap, BookOpen, Buildings, Wrench } from "phosphor-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// ─── DATA ────────────────────────────────────────────────────────────────────

const TAB_META = {
  primary: {
    heading: "Primary Institutions",
    sub: "Nurturing young minds with a strong academic foundation from the very beginning.",
  },
  secondary: {
    heading: "Secondary Institutions",
    sub: "Shaping confident, curious learners through rigorous secondary education.",
  },
  professional: {
    heading: "Professional & Vocational",
    sub: "Empowering students with career-ready skills and technical expertise.",
  },
  affiliated: {
    heading: "Affiliated Institutions",
    sub: "A network of partner institutions extending the Alagappa legacy of excellence.",
  },
};

const subNavItems = [
  { label: "Primary", tab: "primary", icon: BookOpen },
  { label: "Secondary", tab: "secondary", icon: GraduationCap },
  { label: "Professional & Vocational", tab: "professional", icon: Wrench },
  { label: "Affiliated Institutions", tab: "affiliated", icon: Buildings },
];

const primaryInstitutions = [
  {
    id: 1,
    name: "Alagappa Matriculation Higher Secondary School",
    location: "Karaikudi, Tamil Nadu",
    established: "1957",
    affiliation: "Tamil Nadu Matriculation Board",
    image: "/Institutions/primary/alagappa-matric.jpg",
    tag: "Matriculation",
    description:
      "One of the flagship institutions of the Alagappa Group, this school has shaped generations of learners in Karaikudi. With a sprawling campus, well-equipped laboratories, and a tradition of academic excellence, it prepares students from primary level through higher secondary with a strong emphasis on both curricular and co-curricular achievements.",
    highlights: ["Science & Maths excellence", "Fully equipped labs", "Sports & cultural programs", "Smart classrooms"],
  },
  {
    id: 2,
    name: "Alagappa Vidhyalaya",
    location: "Karaikudi, Tamil Nadu",
    established: "1948",
    affiliation: "Tamil Nadu State Board",
    image: "/Institutions/primary/alagappa-vidhyalaya.jpg",
    tag: "State Board",
    description:
      "Founded as one of Dr. Alagappa Chettiar's earliest educational endeavours, Alagappa Vidhyalaya stands as a testament to his vision of accessible, quality primary education. The school follows the Tamil Nadu State Board curriculum and is renowned for its dedicated teaching faculty and nurturing environment that fosters curiosity and discipline in equal measure.",
    highlights: ["Tamil Nadu State Board", "Mother-tongue instruction", "Value-based education", "Community outreach"],
  },
  {
    id: 3,
    name: "Alagappa Model Higher Secondary School",
    location: "Karaikudi, Tamil Nadu",
    established: "1962",
    affiliation: "Tamil Nadu State Board",
    image: "/Institutions/primary/alagappa-model.jpg",
    tag: "Model School",
    description:
      "Established to serve as an exemplar of the Group's educational philosophy, this school integrates modern pedagogy with time-tested values. It offers classes from primary through higher secondary and is particularly noted for its science stream results and a competitive environment that consistently sends students to top engineering and medical colleges.",
    highlights: ["STEM focus", "Outstanding board results", "Merit scholarship program", "Digital library"],
  },
];

const secondaryInstitutions = [
  {
    id: 1,
    name: "Alagappa Higher Secondary School",
    location: "Alagappapuram, Karaikudi",
    established: "1952",
    affiliation: "Tamil Nadu State Board",
    image: "/Institutions/secondary/alagappa-hss.jpg",
    tag: "Higher Secondary",
    description:
      "A cornerstone of secondary education in the Chettinad region, Alagappa Higher Secondary School offers an expansive range of academic streams including Science, Commerce, and Arts. The school's alumni network spans government, academia, and industry, a living testament to the quality of its foundational education over more than seven decades.",
    highlights: ["Three academic streams", "100% board pass rate", "NCC & NSS units", "Alumni mentorship"],
  },
  {
    id: 2,
    name: "Alagappa Girls Higher Secondary School",
    location: "Karaikudi, Tamil Nadu",
    established: "1960",
    affiliation: "Tamil Nadu State Board",
    image: "/Institutions/secondary/alagappa-girls.jpg",
    tag: "Girls' School",
    description:
      "Founded with the express purpose of empowering young women through education, this all-girls institution has been a beacon of female empowerment in Chettinad for over sixty years. The school provides a safe, stimulating environment where girls are encouraged to aspire and achieve, with particular emphasis on leadership, self-confidence, and academic rigour.",
    highlights: ["Women's empowerment focus", "Leadership development", "Career counselling", "Cultural excellence"],
  },
];

const professionalInstitutions = [
  {
    id: 1,
    name: "Alagappa Chettiar College of Engineering & Technology",
    shortName: "ACCET",
    location: "Karaikudi, Tamil Nadu",
    established: "1954",
    affiliation: "Anna University",
    image: "/Institutions/professional/accet.jpg",
    tag: "Engineering",
    description:
      "ACCET is one of the oldest and most distinguished engineering colleges in Tamil Nadu, now an autonomous institution affiliated to Anna University. Spanning 14 undergraduate and several postgraduate programs in engineering and technology, ACCET's graduates occupy leadership positions across global technology and manufacturing firms. Its NAAC-accredited campus features advanced research labs, industry-linked curricula, and a vibrant placement cell.",
    highlights: ["NAAC Accredited", "14+ UG Programs", "Active industry tie-ups", "Robust placement record"],
  },
  {
    id: 2,
    name: "Alagappa Polytechnic College",
    location: "Karaikudi, Tamil Nadu",
    established: "1955",
    affiliation: "DOTE, Tamil Nadu",
    image: "/Institutions/professional/polytechnic.jpg",
    tag: "Polytechnic",
    description:
      "Established a year after ACCET, the Polytechnic College was Dr. Alagappa Chettiar's answer to the urgent demand for trained technicians in post-independence India. It offers diploma programs in Mechanical, Civil, Electronics, and Computer Engineering and is affiliated to the Directorate of Technical Education (DOTE), Tamil Nadu. The college is celebrated for its hands-on workshops, strong industry linkages, and high employment rates among graduates.",
    highlights: ["DOTE affiliated", "Hands-on workshops", "Diploma engineering", "High employability"],
  },
  {
    id: 3,
    name: "Alagappa College of Physical Education",
    location: "Karaikudi, Tamil Nadu",
    established: "1958",
    affiliation: "Alagappa University",
    image: "/Institutions/professional/physical-education.jpg",
    tag: "Physical Education",
    description:
      "One of only a handful of dedicated physical education colleges in South India, this institution trains future coaches, PE teachers, and sports administrators. Offering B.P.Ed, M.P.Ed, and M.Phil programs, the college boasts international-standard sports facilities including an athletics track, swimming pool, and multipurpose indoor courts. It has produced state and national-level athletes and coaches over its six-decade history.",
    highlights: ["B.P.Ed & M.P.Ed programs", "National-level athletes", "Olympic-standard facilities", "Sports research"],
  },
];

const affiliatedInstitutions = [
  {
    id: 1,
    name: "Alagappa College of Arts & Science",
    shortName: "ACAS",
    location: "Karaikudi, Tamil Nadu",
    established: "1960",
    affiliation: "Alagappa University",
    image: "/Institutions/affiliated/acas.jpg",
    tag: "Arts & Science",
    description:
      "ACAS is one of the premier arts and science colleges in the Chettinad belt, offering undergraduate and postgraduate programs across Commerce, Computer Science, Mathematics, Chemistry, Tamil, and English. Known for its research culture and competitive examination coaching, the college maintains a strong academic record and provides holistic development opportunities through an active Students' Union and cultural fest.",
    highlights: ["15+ UG/PG programs", "Research culture", "Competitive exam coaching", "Cultural activities"],
  },
  {
    id: 2,
    name: "Alagappa University",
    location: "Karaikudi, Tamil Nadu",
    established: "1985",
    affiliation: "UGC – State University",
    image: "/Institutions/affiliated/alagappa-university.jpg",
    tag: "University",
    description:
      "Established by the Government of Tamil Nadu in 1985 on 450 acres of land donated by the Alagappa family, Alagappa University is recognised by the University Grants Commission. It houses 14 full-fledged departments offering postgraduate, M.Phil., and Ph.D. programmes spanning Education, Management, Sciences, Technology, Tamil, and Women's Studies. The Directorate of Distance Education, launched in 1992, serves thousands of off-campus learners across India.",
    highlights: ["UGC Recognised", "450-acre campus", "Ph.D. programmes", "Distance education since 1992"],
  },
  {
    id: 3,
    name: "Alagappa Institute of Management",
    shortName: "AIM",
    location: "Karaikudi, Tamil Nadu",
    established: "1991",
    affiliation: "Alagappa University",
    image: "/Institutions/affiliated/aim.jpg",
    tag: "Management",
    description:
      "AIM offers MBA and MCA programmes with a curriculum designed in consultation with industry partners. Its case-study driven pedagogy, live project mandates, and annual management summit bring students into direct contact with business practitioners. Graduates from AIM occupy mid and senior management roles in banking, consulting, IT, and manufacturing, with placements at leading national and multinational organisations.",
    highlights: ["Industry-linked MBA", "MCA programme", "Annual management summit", "Strong placements"],
  },
];

// ─── SUBCOMPONENTS ────────────────────────────────────────────────────────────

function InstitutionCard({ institution, index }) {
  const isEven = index % 2 === 0;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isEven ? "row" : "row-reverse",
        alignItems: "flex-start",
        gap: "48px",
        width: "100%",
      }}
      className="institution-row"
    >
      {/* ── Image column ── */}
      <div
        style={{ position: "relative", flex: "0 0 300px", width: "300px" }}
        className="institution-img-col"
      >
        {/* subtle glow behind image */}
        <div
          style={{
            position: "absolute",
            inset: "-12px",
            background: isEven
              ? "linear-gradient(135deg, rgba(26,58,107,0.07) 0%, rgba(74,158,255,0.04) 100%)"
              : "linear-gradient(225deg, rgba(26,58,107,0.07) 0%, rgba(74,158,255,0.04) 100%)",
            borderRadius: "20px",
            zIndex: 0,
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Fallback gradient placeholder if image missing */}
          <div
            style={{
              width: "100%",
              aspectRatio: "4 / 3",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 12px 36px rgba(10,22,40,0.14)",
              background: "linear-gradient(135deg, #0d2444 0%, #1a3a6b 100%)",
            }}
          >
            <img
              src={institution.image}
              alt={institution.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          {/* Floating badge */}
          <div
            style={{
              position: "absolute",
              bottom: "12px",
              [isEven ? "right" : "left"]: "12px",
              background: "linear-gradient(90deg, #0a1628 0%, #1a3a6b 100%)",
              color: "#fff",
              padding: "8px 14px",
              borderRadius: "8px",
              boxShadow: "0 6px 20px rgba(10,22,40,0.4)",
              maxWidth: "80%",
            }}
          >
            <div style={{ fontSize: "12px", fontWeight: 700, lineHeight: 1.3 }}>
              Est. {institution.established}
            </div>
            <div style={{ fontSize: "11px", color: "#4a9eff", marginTop: "2px" }}>
              {institution.tag}
            </div>
          </div>
        </div>
      </div>

      {/* ── Content column ── */}
      <div style={{ flex: "1 1 0", minWidth: 0 }}>
        {/* eyebrow */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "12px",
          }}
        >
          <div
            style={{
              width: "28px",
              height: "3px",
              background: "linear-gradient(90deg, #1a3a6b 0%, #4a9eff 100%)",
              borderRadius: "2px",
            }}
          />
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "#4a9eff",
              textTransform: "uppercase",
              letterSpacing: "0.09em",
            }}
          >
            {institution.tag}
          </span>
        </div>

        <h2
          style={{
            fontSize: "clamp(20px, 2.2vw, 28px)",
            fontWeight: 800,
            color: "#0a1628",
            marginBottom: "4px",
            lineHeight: 1.25,
          }}
        >
          {institution.shortName ? (
            <>
              {institution.shortName}{" "}
              <span style={{ fontWeight: 500, color: "#4a5568", fontSize: "0.75em" }}>
                — {institution.name}
              </span>
            </>
          ) : (
            institution.name
          )}
        </h2>

        {/* meta row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "16px",
            marginTop: "6px",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#718096",
            }}
          >
            <MapPin size={13} weight="fill" style={{ color: "#4a9eff" }} />
            {institution.location}
          </span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#718096",
            }}
          >
            <Globe size={13} weight="fill" style={{ color: "#4a9eff" }} />
            {institution.affiliation}
          </span>
        </div>

        <div
          style={{
            width: "44px",
            height: "3px",
            background: "linear-gradient(90deg, #1a3a6b 0%, #4a9eff 100%)",
            borderRadius: "2px",
            marginBottom: "16px",
          }}
        />

        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.9,
            color: "#4a5568",
            textAlign: "justify",
            marginBottom: "20px",
          }}
        >
          {institution.description}
        </p>

        {/* Highlights chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {institution.highlights.map((h) => (
            <span
              key={h}
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "#1a3a6b",
                background: "rgba(74,158,255,0.1)",
                border: "1px solid rgba(74,158,255,0.22)",
                borderRadius: "20px",
                padding: "4px 12px",
              }}
            >
              {h}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function InstitutionSection({ institutions }) {
  return (
    <section style={{ padding: "64px 0 80px" }}>
      <div className="container" style={{ padding: "0 24px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "64px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {institutions.map((inst, i) => (
            <InstitutionCard key={inst.id} institution={inst} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .institution-row {
            flex-direction: column !important;
          }
          .institution-img-col {
            flex: none !important;
            width: 100% !important;
            max-width: 320px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}

// ─── OVERVIEW GRID (default / no tab) ────────────────────────────────────────

const overviewCategories = [
  {
    tab: "primary",
    icon: BookOpen,
    label: "Primary Institutions",
    count: primaryInstitutions.length,
    color: "#1a6b3a",
    accent: "rgba(26,107,58,0.1)",
    border: "rgba(26,107,58,0.2)",
    description: "Foundational schools nurturing young learners from KG through Class VIII.",
  },
  {
    tab: "secondary",
    icon: GraduationCap,
    label: "Secondary Institutions",
    count: secondaryInstitutions.length,
    color: "#6b3a1a",
    accent: "rgba(107,58,26,0.1)",
    border: "rgba(107,58,26,0.2)",
    description: "Higher secondary schools offering Science, Commerce, and Arts streams.",
  },
  {
    tab: "professional",
    icon: Wrench,
    label: "Professional & Vocational",
    count: professionalInstitutions.length,
    color: "#1a3a6b",
    accent: "rgba(26,58,107,0.1)",
    border: "rgba(74,158,255,0.25)",
    description: "Colleges of Engineering, Technology, and Physical Education.",
  },
  {
    tab: "affiliated",
    icon: Buildings,
    label: "Affiliated Institutions",
    count: affiliatedInstitutions.length,
    color: "#6b1a5a",
    accent: "rgba(107,26,90,0.08)",
    border: "rgba(107,26,90,0.2)",
    description: "University and partner colleges extending the Alagappa legacy.",
  },
];

function OverviewGrid() {
  return (
    <section style={{ padding: "72px 0 96px" }}>
      <div className="container" style={{ padding: "0 24px" }}>
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 52px" }}>
          <Badge style={{ marginBottom: "12px" }}>Our Institutions</Badge>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 800,
              color: "#0a1628",
              lineHeight: 1.2,
              marginBottom: "14px",
            }}
          >
            A Galaxy of Educational Institutions
          </h2>
          <p style={{ fontSize: "15px", color: "#718096", lineHeight: 1.8 }}>
            Dr. RM. Alagappa Chettiar's vision — converting 1,000 acres into a centre of
            learning — continues to grow, now serving over 8,000 students across every
            level of education.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
            maxWidth: "960px",
            margin: "0 auto",
          }}
        >
          {overviewCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.tab}
                to={`/institutions?tab=${cat.tab}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  style={{
                    border: `1px solid ${cat.border}`,
                    boxShadow: "0 4px 20px rgba(10,22,40,0.07)",
                    borderRadius: "14px",
                    transition: "transform 0.18s ease, box-shadow 0.18s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(10,22,40,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(10,22,40,0.07)";
                  }}
                >
                  <CardContent style={{ padding: "24px" }}>
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "10px",
                        background: cat.accent,
                        border: `1px solid ${cat.border}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "14px",
                      }}
                    >
                      <Icon size={22} weight="duotone" style={{ color: cat.color }} />
                    </div>
                    <div
                      style={{
                        fontSize: "28px",
                        fontWeight: 800,
                        color: "#0a1628",
                        lineHeight: 1,
                        marginBottom: "4px",
                      }}
                    >
                      {cat.count}
                      <span style={{ fontSize: "14px", fontWeight: 500, color: "#a0aec0", marginLeft: "4px" }}>
                        institutions
                      </span>
                    </div>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "#0a1628", marginBottom: "6px" }}>
                      {cat.label}
                    </div>
                    <p style={{ fontSize: "12px", color: "#718096", lineHeight: 1.65, margin: 0 }}>
                      {cat.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Institutions() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab") ?? "";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [tab]);

  const meta = TAB_META[tab];

  return (
    <div className="flex flex-col">

      {/* ── Hero + Tab Bar ── */}
      <section
        style={{
          background: "linear-gradient(160deg, #0a1628 0%, #0d2444 45%, #1a3a6b 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* radial glow */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "300px",
            background:
              "radial-gradient(ellipse, rgba(74,158,255,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Heading */}
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "52px 24px 36px",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "inline-block",
              fontSize: "11px",
              fontWeight: 700,
              color: "#4a9eff",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "12px",
              background: "rgba(74,158,255,0.12)",
              padding: "4px 14px",
              borderRadius: "20px",
              border: "1px solid rgba(74,158,255,0.25)",
            }}
          >
            Institutions
          </div>
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "12px",
              lineHeight: 1.15,
            }}
          >
            {meta ? meta.heading : "Our Institutions"}
          </h1>
          <p
            style={{
              fontSize: "15px",
              color: "rgba(200,216,240,0.75)",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            {meta
              ? meta.sub
              : "From primary schools to a full-fledged university — the Alagappa Group's educational ecosystem spans every stage of learning."}
          </p>
        </div>

        {/* Tab strip */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 24px",
              display: "flex",
              alignItems: "center",
              overflowX: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              gap: "2px",
            }}
          >
            {subNavItems.map((item) => {
              const isActive = tab === item.tab;
              const Icon = item.icon;
              return (
                <Link
                  key={item.tab}
                  to={`/institutions?tab=${item.tab}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "7px",
                    padding: "14px 20px",
                    fontSize: "13px",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "#fff" : "rgba(200,216,240,0.65)",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    borderBottom: isActive ? "3px solid #4a9eff" : "3px solid transparent",
                    background: isActive ? "rgba(74,158,255,0.12)" : "transparent",
                    transition: "all 0.2s ease",
                    letterSpacing: "0.01em",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "rgba(200,216,240,0.65)";
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  <Icon size={15} weight={isActive ? "fill" : "regular"} />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Tab content ── */}
      {!tab && <OverviewGrid />}
      {tab === "primary" && <InstitutionSection institutions={primaryInstitutions} />}
      {tab === "secondary" && <InstitutionSection institutions={secondaryInstitutions} />}
      {tab === "professional" && <InstitutionSection institutions={professionalInstitutions} />}
      {tab === "affiliated" && <InstitutionSection institutions={affiliatedInstitutions} />}
    </div>
  );
}