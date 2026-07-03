import { useEffect, useState } from "react";
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
  vocational: {
    heading: "Vocational Institutions",
    sub: "A network of partner institutions extending the Alagappa legacy of excellence.",
  },
};

const subNavItems = [
  { label: "Primary", tab: "primary", icon: BookOpen },
  { label: "Secondary", tab: "secondary", icon: GraduationCap },
  { label: "Professional & Vocational", tab: "professional", icon: Wrench },
  { label: "Vocational Institutions", tab: "vocational", icon: Buildings },
];

// Institution data with logos
const primaryInstitutions = [
  {
    id: 1,
    name: "Alagappa Basic School",
    location: "Karaikudi, Tamil Nadu",
    affiliation: "Tamil Nadu Matriculation Board",
    logo: "/logos/basicschl.png",
    tag: "Basic School",
    description:
      "Alagappa Preparatory School was founded by Dr. Alagappa Chettiar in 1955. The school offers from Standard 1 to 5. With qualified faculty, students are taught interpersonal skillsets and provided standardized education.",
    highlights: ["Science & Maths excellence", "Fully equipped labs", "Sports & cultural programs", "Smart classrooms"],
  },
  {
    id: 2,
    name: "Alagappa Smart Start Play School and Daycare Center",
    location: "Karaikudi, Tamil Nadu",
    affiliation: "Tamil Nadu State Board",
    logo: "/logos/smartstart.png",
    tag: "State Board",
    description:
      "Founded as one of Dr. Alagappa Chettiar's earliest educational endeavours, Alagappa Vidhyalaya stands as a testament to his vision of accessible, quality primary education. The school follows the Tamil Nadu State Board curriculum and is renowned for its dedicated teaching faculty and nurturing environment that fosters curiosity and discipline in equal measure.",
    highlights: ["Tamil Nadu State Board", "Mother-tongue instruction", "Value-based education", "Community outreach"],
  },
  {
    id: 3,
    name: "Alagappa Montessori",
    location: "Karaikudi, Tamil Nadu",
    affiliation: "Tamil Nadu State Board",
    logo: "/logos/montessori.png",
    tag: "Model School",
    description:
      "Alagappa Montessori School was founded in 1953 by Dr. Alagappa Chettiar. Being among the first Montessori Schools in the region, education is imparted to children in the Play Way method paving way for a child to learn. The Montessori education method calls for free activity within a 'prepared environment', meaning an educational environment tailored to meet basic human characteristics, to the specific characteristics of children at different ages, and to the individual personalities of each child. This allows the child to develop independence in all areas according to his or her inner psychological directives. The school has a vast area for playing. There are six classrooms with sufficient ventilation and adequate furniture. The classes function from Lower Kindergarten to II Standard. A large number of play things are provided to educate and entertain the kids. Transport facility is available to the children.",
    highlights: ["STEM focus", "Outstanding board results", "Merit scholarship program", "Digital library"],
  },
  {
    id: 3,
    name: "Umayal Play School",
    location: "Chennai, Tamil Nadu",
    affiliation: "Tamil Nadu State Board",
    logo: "/logos/umayalPlayschl.png",
    tag: "Model School",
    description:
      "Founded by Dr. Umayal Ramanathan in 2002 the school provides a caring environment for toddlers, as a home away from home.The goal is to nurture good habits and develop skill sets through play techniques. By imparting skill sets through interactive learning, students are encouraged to form good healthy habits and develop social skills. Spacious ventilated rooms are provided with a caring ambience to welcome toddlers in a hygienic environment. The faculty consists of specially qualified trained staff well–versed in play techniques to handle toddlers with utmost care and dedication.",
    highlights: ["STEM focus", "Outstanding board results", "Merit scholarship program", "Digital library"],
  },
];

const secondaryInstitutions = [
  {
    id: 1,
    name: "Alagappa Matric Hr. Sec School",
    location: "Chennai, Tamil Nadu",
    affiliation: "Tamil Nadu State Board",
    logo: "/logos/cbsechn.png",
    tag: "Higher Secondary",
    description:
      "The Alagappa Matriculation and Higher Secondary Wings were founded by Dr. Umayal Ramanathan in 1982 & 1989 respectively. School strength exceeds 1000 students with a team of highly qualified and efficient teaching staff. The school is recognized by the Ministry of Education, Government of Tamil Nadu and offers courses as per their curriculum. Set in the midst of a sprawling campus, the school is an oasis of serenity located in the heart of the city in Puraswalkam. In order to make learning interesting and interactive, knowledge is disseminated by bringing in a transformation in teaching methodologies, namely Educomp, the Smart class program and the digital boards have been installed to encourage students' participation and enhance learning trends.",
    highlights: ["Three academic streams", "100% board pass rate", "NCC & NSS units", "Alumni mentorship"],
  },
  {
    id: 2,
    name: "Alagappa Girls Higher Secondary School",
    location: "Karaikudi, Tamil Nadu",
    established: "1960",
    affiliation: "Tamil Nadu State Board",
    logo: "/logos/girls.png",
    tag: "Girls' School",
    description:
      "Founded with the express purpose of empowering young women through education, this all-girls institution has been a beacon of female empowerment in Chettinad for over sixty years. The school provides a safe, stimulating environment where girls are encouraged to aspire and achieve, with particular emphasis on leadership, self-confidence, and academic rigour.",
    highlights: ["Women's empowerment focus", "Leadership development", "Career counselling", "Cultural excellence"],
  },
  {
    id: 2,
    name: "Alagappa CBSE Academy",
    location: "Karaikudi, Tamil Nadu",
    affiliation: "Central Board",
    logo: "/logos/cbse.png",
    tag: "CBSE School",
    description:
      "The Alagappa Academy was founded by Dr. R. Vairavan in 2014 to establish a CBSE based academic program from LKG to 6th Standard in the Alagappa group of institutions and expand the student offerings to a multi-model schooling system. With engaging extra-curricular activities and a dedicated faculty each student is considered uniquely nurtured with individual attention to help channelize energies and bring out their best. Housed in a serene environment, qualified teaching and non-teaching staff cater to the needs of every child. Our standardized CBSE based curriculum focuses on skills like critical thinking and problem solving through interactive events, activities and role playing games in the classrooms. Robotics has now been added to the curriculum.",
    highlights: ["Women's empowerment focus", "Leadership development", "Career counselling", "Cultural excellence"],
  },
  {
    id: 2,
    name: "Alagappa CBSE Academy",
    location: "Chennai, Tamil Nadu",
    affiliation: "Central Board",
    logo: "/logos/cbsechn.png",
    tag: "CBSE School",
    description:
      "The Alagappa Matriculation and Higher Secondary Wings were founded by Dr. Umayal Ramanathan in 1982 & 1989 respectively. School strength exceeds 1000 students with a team of highly qualified and efficient teaching staff. The school is recognized by the Ministry of Education, Government of Tamil Nadu and offers courses as per their curriculum. Set in the midst of a sprawling campus, the school is an oasis of serenity located in the heart of the city in Puraswalkam. In order to make learning interesting and interactive, knowledge is disseminated by bringing in a transformation in teaching methodologies, namely Educomp, the Smart class program and the digital boards have been installed to encourage students' participation and enhance learning trends.",
    highlights: ["Women's empowerment focus", "Leadership development", "Career counselling", "Cultural excellence"],
  },
  {
    id: 2,
    name: "Alagappa Matric Hr. Sec School",
    location: "Karaikudi, Tamil Nadu",
    affiliation: "Tamil Nadu State Board",
    logo: "/logos/matric.png",
    tag: "Matriculation School",
    description:
      "To meet the needs of the emerging society, where education needs to be focused on girls, to surface their skill sets and get empowered, the Alagappa Girls Hr.Sec School was founded in 2014 by Dr. R. Vairavan. The school is focused to cultivate leadership skills in every young woman and promote the importance of service to others, both within and beyond the community. Beyond the classroom, girls learn that they can become athletes, journalists, computer technicians, musicians, debaters, activists, community service leaders, and artistes. Research confirms that graduates of girls' schools develop life-long friends and achieve greater success both in the Academics and professional worlds. Through a planned curriculum the girls are taught to be problem-solvers, learn to manage their time, and learn to speak up about issues of concern, locally and globally. They participate fully in a diverse and cohesive community. The girls come to discover their passions and their strengths. They come to know themselves the best preparation possible for the lives they will lead in the years ahead. Robotics is also added to the curriculum.",
    highlights: ["Women's empowerment focus", "Leadership development", "Career counselling", "Cultural excellence"],
  },
];

const professionalInstitutions = [
  {
    id: 1,
    name: "Dr. Umayal Ramanathan College for Women",
    location: "Karaikudi, Tamil Nadu",
    affiliation: "Alagappa University",
    logo: "/logos/urcw.png",
    tag: "Arts & Science",
    description:
      "URCW is one of the oldest and most distinguished engineering colleges in Tamil Nadu, now an autonomous institution vocational to Anna University. Spanning 14 undergraduate and several postgraduate programs in engineering and technology, ACCET's graduates occupy leadership positions across global technology and manufacturing firms. Its NAAC-accredited campus features advanced research labs, industry-linked curricula, and a vibrant placement cell.",
    highlights: ["NAAC Accredited", "14+ UG Programs", "Active industry tie-ups", "Robust placement record"],
  },
  {
    id: 2,
    name: "Alagappa College of Nursing",
    location: "Karaikudi, Tamil Nadu",
    affiliation: "Alagappa University",
    logo: "/logos/nursing.png",
    tag: "Nursing",
    description:
      "The College of Nursing was established to meet the growing demand for skilled nursing professionals in the region. It offers undergraduate and postgraduate programs in nursing and is vocational to Alagappa University. The college is known for its comprehensive curriculum, modern infrastructure, and strong emphasis on clinical training.",
    highlights: ["Vocational to Alagappa University", "Comprehensive nursing programs", "Modern infrastructure", "Strong clinical training"],
  },
  
];

const vocationalInstitutions = [
  {
    id: 1,
    name: "Alagappa Performing Arts Academy",
    location: "Karaikudi, Tamil Nadu",
    affiliation: "Alagappa University",
    logo: "/logos/apaa.png",
    tag: "Performing Arts",
    description:
      "ACAS is one of the premier arts and science colleges in the Chettinad belt, offering undergraduate and postgraduate programs across Commerce, Computer Science, Mathematics, Chemistry, Tamil, and English. Known for its research culture and competitive examination coaching, the college maintains a strong academic record and provides holistic development opportunities through an active Students' Union and cultural fest.",
    highlights: ["15+ UG/PG programs", "Research culture", "Competitive exam coaching", "Cultural activities"],
  },
  {
    id: 2,
    name: "Alagappa Institute of Technology",
    location: "Karaikudi, Tamil Nadu",
    affiliation: "Alagappa University",
    logo: "/logos/algtechinst.png",
    tag: "University",
    description:
      "Established by the Government of Tamil Nadu in 1985 on 450 acres of land donated by the Alagappa family, Alagappa University is recognised by the University Grants Commission. It houses 14 full-fledged departments offering postgraduate, M.Phil., and Ph.D. programmes spanning Education, Management, Sciences, Technology, Tamil, and Women's Studies. The Directorate of Distance Education, launched in 1992, serves thousands of off-campus learners across India.",
    highlights: ["UGC Recognised", "450-acre campus", "Ph.D. programmes", "Distance education since 1992"],
  },
 
];

// Logo component
function InstitutionLogo({ logo, initials }) {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleError = () => {
    if (!imgLoaded) setImgError(true);
  };

  const handleLoad = () => {
    setImgLoaded(true);
    setImgError(false);
  };

  if (!imgError && logo) {
    return (
      <img
        src={logo}
        alt={initials}
        onError={handleError}
        onLoad={handleLoad}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          padding: "8px",
        }}
      />
    );
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0d2444 0%, #1a3a6b 100%)",
        color: "#4a9eff",
        fontWeight: 800,
        fontSize: "28px",
      }}
    >
      {initials}
    </div>
  );
}

// ─── SUBCOMPONENTS ───────────────────────────────────────────────────────────

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
      {/* ── Logo column ── */}
      <div
        style={{ position: "relative", flex: "0 0 280px", width: "280px" }}
        className="institution-img-col"
      >
        {/* subtle glow behind logo */}
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
          <div
            style={{
              width: "100%",
              aspectRatio: "1 / 1",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 12px 36px rgba(10,22,40,0.14)",
              background: "#fff",
            }}
          >
            <InstitutionLogo logo={institution.logo} initials={institution.shortName} />
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
            max-width: 280px;
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
    tab: "vocational",
    icon: Buildings,
    label: "Vocational Institutions",
    count: vocationalInstitutions.length,
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
      {tab === "vocational" && <InstitutionSection institutions={vocationalInstitutions} />}
    </div>
  );
}