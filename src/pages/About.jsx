import { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Users, Star } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // still used in mission/overview tabs
import { schoolData } from "@/data/schoolData";

const values = [
  {
    icon: Star,
    title: "Excellence",
    description:
      "We strive for the highest standards in everything we do, from academics to athletics.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We build character through honest, ethical behavior and moral leadership.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We foster a supportive environment where every individual feels valued and belongs.",
  },
  {
    icon: Target,
    title: "Innovation",
    description:
      "We embrace creativity and forward-thinking to prepare students for the future.",
  },
];

const TAB_META = {
  management: {
    heading: "Management",
    sub: "Leadership guiding the Alagappa Group of Educational Institutions",
  },
  letter: {
    heading: "Letter from Management",
    sub: "A message from Dr. Umayal Ramanathan",
  },
  mission: {
    heading: "Vision & Mission",
    sub: "Our guiding principles for educational excellence",
  },
  press: {
    heading: "Press Releases",
    sub: "News and announcements from the Alagappa Group",
  },
};

const subNavItems = [
  { label: "Management", tab: "management" },
  { label: "Letter from Management", tab: "letter" },
  { label: "Vision & Mission", tab: "mission" },
  { label: "Press Releases", tab: "press" },
];

export default function About() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab") ?? "";
  const pressReleases = [
  {
    date: "September 23, 2023",
    location: "San Francisco, California, USA",
    title: "Dr. Ramanathan Vairavan Honored with Lifetime Achievement Award by ATEA, USA",
    body: [
      {
        type: "text",
        text: "Dr. Ramanathan Vairavan, an esteemed entrepreneur and educationalist, was recently bestowed with the prestigious Lifetime Achievement Award by the American Tamil Entrepreneurs Association (ATEA) for his remarkable contributions to education, arts, and philanthropy, in tandem with his lifelong dedication to transforming lives. The award ceremony took place during CATEALYZE — ATEA's Annual Leadership and Technology Conference — with attendance by about 350 entrepreneurs, investors, and venture capitalists.",
      },
      {
        type: "text",
        text: "Dr. Vairavan, the grandson of the revered philanthropist Dr. RM. Alagappa Chettiar, holds a distinguished career spanning over four decades in the healthcare industry and education sectors. His extensive experience, including executive roles in multinational companies, ultimately led him to establish a pioneering biotechnology company that revolutionized disease signatures through genomic and proteomic profiling. Presently, Dr. Vairavan directs his expertise and passion at DiaCarta, a molecular diagnostics company that has developed innovative technologies enhancing patient care through precision diagnostics in cancer treatment.",
      },
      {
        type: "text",
        text: "At the heart of Dr. Vairavan's achievements lies his profound commitment to education and philanthropy. As Chairman of the Dr. Alagappa Chettiar Educational Trust in Karaikudi and the Asoka Charitable Trust in Chennai, he oversees the education of over 8,000 students across various educational levels.",
      },
      {
        type: "quote",
        text: '"In a mere 47 years, my grandfather, Dr. Alagappa Chettiar, left an indelible mark on the transformation of Karaikudi. He converted a 1,000-acre jungle into a galaxy of educational institutions that has produced over 3 million alumni. Entrepreneurs need to develop the heart to give back to society."',
      },
      {
        type: "text",
        text: "Dr. Vairavan also announced that he was on a mission to build a College of Medical Sciences including a College of Ayurvedic Medicine at Karaikudi to further enhance the spectrum of education and benefit the community.",
      },
      {
        type: "text",
        text: "His academic credentials include a BS in Chemical Engineering from AC Tech, Madras, an MS in Biomedical Engineering from Washington University, St. Louis, and an MBA from Fairleigh Dickinson University. He was conferred with an honorary doctorate by Alagappa University, Tamil Nadu, in 2018 and is a Distinguished Alumni Awardee of AC Tech, Anna University.",
      },
      {
        type: "text",
        text: "His contributions extend beyond business and academia, encompassing roles as a Syndicate Member of Alagappa University and President of the Tamil Issai Sangam in Karaikudi. The Lifetime Achievement Award from ATEA stands as a testament to Dr. Vairavan's impactful journey and unwavering dedication to education, arts, and philanthropy.",
      },
    ],
  },
];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [tab]);

  const meta = TAB_META[tab];

  return (
    <div className="flex flex-col">
      {/* ── Hero + Tab Bar combined ── */}
      <section
        style={{
          background: "linear-gradient(160deg, #0a1628 0%, #0d2444 45%, #1a3a6b 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle radial glow */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "300px",
            background: "radial-gradient(ellipse, rgba(74,158,255,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Heading + subtitle */}
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
            About Us
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
            {meta ? meta.heading : "About Us"}
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
              : `For over 25 years, ${schoolData.name} has been committed to providing exceptional education that nurtures the mind, body, and spirit.`}
          </p>
        </div>

        {/* Tab strip at bottom of hero */}
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
              return (
                <Link
                  key={item.tab}
                  to={item.tab ? `/about?tab=${item.tab}` : "/about"}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
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
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>


      {/* ── MANAGEMENT — alternating layout ── */}
     {tab === "management" && (
  <section className="py-16 lg:py-20 management-section">
    <div className="container px-4">
      <div className="management-list">
        {schoolData.leadership.map((member, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={member.id}
              className={`management-row ${isEven ? "row-even" : "row-odd"}`}
            >
              {/* Image Side */}
              <div className="management-image-col">
                <div
                  style={{
                    position: "absolute",
                    inset: "-10px",
                    background: isEven
                      ? "linear-gradient(135deg, rgba(26,58,107,0.08) 0%, rgba(74,158,255,0.05) 100%)"
                      : "linear-gradient(225deg, rgba(26,58,107,0.08) 0%, rgba(74,158,255,0.05) 100%)",
                    borderRadius: "18px",
                    zIndex: 0,
                  }}
                />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: "100%",
                      aspectRatio: "4 / 5",
                      objectFit: "cover",
                      borderRadius: "14px",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                      display: "block",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "14px",
                      left: isEven ? "auto" : "14px",
                      right: isEven ? "14px" : "auto",
                      background: "linear-gradient(90deg, #0a1628 0%, #1a3a6b 100%)",
                      color: "#fff",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      boxShadow: "0 6px 20px rgba(10,22,40,0.35)",
                      maxWidth: "85%",
                    }}
                  >
                    <div style={{ fontSize: "13px", fontWeight: 700, lineHeight: 1.3 }}>
                      {member.name}
                    </div>
                    <div style={{ fontSize: "11px", color: "#4a9eff", marginTop: "2px" }}>
                      {member.role}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="management-content-col">
                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                  <div
                    style={{
                      width: "32px",
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
                      letterSpacing: "0.08em",
                    }}
                  >
                    Leadership
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: "clamp(24px, 2.5vw, 32px)",
                    fontWeight: 800,
                    color: "#0a1628",
                    marginBottom: "6px",
                    lineHeight: 1.2,
                  }}
                >
                  {member.name}
                </h2>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#1a3a6b",
                    marginBottom: "16px",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {member.role}
                </p>
                <div
                  style={{
                    width: "50px",
                    height: "3px",
                    background: "linear-gradient(90deg, #1a3a6b 0%, #4a9eff 100%)",
                    borderRadius: "2px",
                    marginBottom: "18px",
                  }}
                />
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: 1.9,
                    color: "#4a5568",
                    textAlign: "justify",
                    margin: 0,
                  }}
                >
                  {member.bio}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>

    <style>{`
      .management-section {
        /* no inline margin — let container/padding handle it */
      }

      .management-list {
        display: flex;
        flex-direction: column;
        gap: 60px;
      }

      .management-row {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 40px;
        width: 100%;
      }

      /* Odd rows: reverse so image goes right, text goes left */
      .management-row.row-odd {
        flex-direction: row-reverse;
      }

      .management-image-col {
        position: relative;
        flex: 0 0 260px;
        width: 260px;
      }

      .management-content-col {
        flex: 1 1 0;
        min-width: 0; /* prevents text overflow beyond flex container */
      }

      @media (max-width: 992px) {
        .management-image-col {
          flex: 0 0 200px;
          width: 200px;
        }
        .management-list {
          gap: 48px;
        }
      }

      @media (max-width: 640px) {
        .management-row,
        .management-row.row-odd {
          flex-direction: column !important;
        }
        .management-image-col {
          flex: none;
          width: 100%;
          max-width: 280px;
          margin: 0 auto;
        }
        .management-content-col {
          width: 100%;
        }
        .management-list {
          gap: 40px;
        }
      }
    `}</style>
  </section>
)}
      {/* LETTER FROM MANAGEMENT */}
      {tab === "letter" && (
        <section className="py-16 lg:py-12">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <Card style={{ boxShadow: "0 10px 30px rgb(55, 63, 133)", border: "1px solid rgba(0,0,0,0.1)" }}>
                <CardContent className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-8">
                   <div className="w-20 h-25 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
  <img
    src={schoolData.leadership[1]?.image ?? "/Management/umayalAachi1.jpg"}
    alt={schoolData.leadership[1]?.name ?? "Dr. Umayal Ramanathan"}
    className="w-20 h-25 object-cover"
  />
</div>
                    <div>
                      <div className="font-bold text-lg">
                        From the Desk of Dr. Umayal Ramanathan
                      </div>
                      <div className="text-lg text-muted-foreground">
                        {schoolData.leadership[1]?.role ?? "Former Secretary, Alagappa Educational Trust"}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-5 text-lg leading-relaxed">
                 
                    <p>
                     It is indeed with great pleasure that we present to you an encapsulation of the accomplishments of our revered founder, the legend of Chettinad, Dr. RM. Alagappa Chettiar.
                    </p>
                    <p>
                      Today with more than 30,00,000 students graduating from the various Alagappa institutions since its inception, the life story of Alagappa Chettiar is an inspiration to millions in India, as he brought smiles to the faces of students and their families by bringing primary, secondary, tertiary and professional education to the doorstep of the community in Tamil Nadu. His generous donations led to the establishment of a galaxy of educational institutions, which formed the basis for the establishment of the Alagappa University in 1985 by the Government of Tamil Nadu. When he died prematurely at the age of 48, Dr. Alagappa Chettiar had redefined philanthropy and contributed more to the betterment of education in Tamil Nadu than any other person had done until then.
                    </p>
                    <p>
                     Following his premature death, his daughter Mrs. Umayal Ramanathan assumed the responsibility to manage all the institutions that he founded. In 1968 to fulfil her father's dream of making these institutions a University she donated 450 acres of land in Karaikudi with functioning professional institutions to the Tamil Nadu Government. Key institutions that were handed over were the Alagappa College of Arts & Science, Alagappa Chettiar College of Engineering & Technology, Alagappa Polytechnic and the Alagappa College of Physical Education. The Alagappa University was formed in 1985 by the State Government of Tamil Nadu and is recognized by the Government of India through the University Grants Commission. It has 14 full-fledged departments offering regular postgraduate, M.Phil., Ph.D. programs in Education; Physical Education; Institute of Management; Bank management; Corporate Secretaryship; International Business and Commerce; Tamil; Women's Studies; Biotechnology; Computer Science and Engineering; Industrial Chemistry; Mathematics; Oceanography and Coastal Area Studies. The Directorate of Distance Education established in 1992 offers under graduate, post graduate & M. Phil Programs in the disciplines of Management, Computer Applications, Science, Education, Languages and Performing Arts.
                    </p>
                    <p>
                    The remaining institutions are managed by Dr. Alagappa Chettiar Educational Trust & Asoka Charitable Trust that he established and is now being continued to be managed by his family. Links stated below are provided to the institutions that were donated by the family to the Government of Tamil Nadu.
                    </p>
                    <p className="pt-4 font-medium text-foreground">
                  
                     <div className="pt-4 flex justify-between items-start">
  {/* Left Signature */}
  <div>
    <span className="text-primary font-bold">
      <i >Dr. Umayal Ramanathan</i>
    </span>
    <br />
    <span className="text-lg font-normal text-muted-foreground">
      <i>Secretary & Correspondent</i>
    </span>
  </div>

  {/* Right Signature */}
  <div className="text-right">
    <span className="text-primary font-bold">
      <i>Ramanathan Vairavan</i>
    </span>
    <br />
    <span className="text-lg font-normal text-muted-foreground">
      <i>Chairman</i>
    </span>
  </div>
</div>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* VISION & MISSION */}
      {tab === "mission" && (
        <section className="py-16 lg:py-24">
          <div className="container px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
              <Card style={{ boxShadow: "0 10px 30px rgb(55, 63, 133)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "12px" }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Target size={24} weight="duotone" className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                   "To nurture students in the pursuit of knowledge and create institutions of excellence that produce proactive and responsible citizens."
                  </p>
                </CardContent>
              </Card>
              <Card style={{ boxShadow: "0 10px 30px rgb(55, 63, 133)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "0.5rem" }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Eye size={24} weight="duotone" className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
       "To promote a value based education enriched with qualities of love, humility, knowledge and wisdom effectively to inspire student achievements. To provide a caring and inspiring Academics ambience where each student is enabled to surface his innate talents and realize his full potential."
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mb-8">
              <Badge className="mb-4">Core Values</Badge>
              <h2 className="text-2xl lg:text-3xl font-bold">What We Stand For</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <Card key={value.title} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon size={32} weight="duotone" className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PRESS RELEASES */}
    {tab === "press" && (
  <section className="py-16 lg:py-24">
    <div className="container px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        {pressReleases.map((release) => (
          <Card key={release.title} style={{ boxShadow: "0 10px 30px rgb(55, 63, 133)", border: "1px solid rgba(0,0,0,0.1)" }}>
            <CardContent className="p-8 lg:p-12">
              <div className="flex items-start gap-4 mb-6 pb-6" style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                <div className="flex-shrink-0 bg-primary/10 rounded-lg p-3 text-center min-w-[60px]">
                  <div className="text-xs font-semibold text-primary uppercase">{release.date.split(" ")[0]}</div>
                  <div className="text-2xl font-bold text-primary leading-none">{release.date.split(" ")[1].replace(",", "")}</div>
                  <div className="text-xs text-muted-foreground">{release.date.split(" ")[2]}</div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Press Release</div>
                  <h3 className="font-bold text-lg leading-snug mb-1">{release.title}</h3>
                  <p className="text-xs text-muted-foreground">{release.location}</p>
                </div>
              </div>

              <div className="space-y-4  leading-relaxed text-lg">
                {release.body.map((para, i) =>
                  para.type === "quote" ? (
                    <p key={i} style={{ borderLeft: "3px solid hsl(var(--primary))", paddingLeft: "1rem", margin: "1rem 0", fontStyle: "italic", color: "hsl(var(--foreground))" }}>
                      {para.text}
                    </p>
                  ) : (
                    <p key={i}>{para.text}</p>
                  )
                )}
              </div>

              <div className="pt-6 flex justify-between items-start" style={{ borderTop: "1px solid rgba(0,0,0,0.08)", marginTop: "1rem" }}>
                <div>
                  <span className="text-primary font-bold"><i>Dr. Umayal Ramanathan</i></span>
                  <br />
                  <span className="text-lg text-muted-foreground"><i>Secretary & Correspondent</i></span>
                </div>
                <div className="text-right">
                  <span className="text-primary font-bold"><i>Ramanathan Vairavan</i></span>
                  <br />
                  <span className="text-lg text-muted-foreground"><i>Chairman</i></span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
)}
    </div>
  );
}