import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  GraduationCap,
  Trophy,
  MusicNotes,
  TennisBall,
  DownloadSimple,
  Star,
  Medal,
  Crown
} from "phosphor-react";
import { schoolData } from "@/data/schoolData";

// ── Static data for each section ─────────────────────────────────────────────────

// Academics - School-wise toppers data
const academicHighAchievers = {
  year: "2025-2026",
  description: "Celebrating our outstanding students who have excelled in their Higher Secondary examinations across all our institutions.",
  schools: [
    {
      id: 1,
      name: "Alagappa Matriculation Higher Secondary School",
      location: "Karaikudi, Tamil Nadu",
      toppers: [
        { id: 1, name: "Mohan Kumar", score: "598/600", percentage: "99.67%", stream: "Science - PCM", rank: "School Topper" },
        { id: 2, name: "Lakshmi Priya", score: "595/600", percentage: "99.17%", stream: "Science - PCB", rank: "2nd" },
        { id: 3, name: "Rajendran", score: "592/600", percentage: "98.67%", stream: "Commerce", rank: "3rd" },
      ]
    },
    {
      id: 2,
      name: "Alagappa CBSE School",
      location: "Karaikudi, Tamil Nadu",
      toppers: [
        { id: 1, name: "Karthik Raja", score: "596/600", percentage: "99.33%", stream: "Science - PCM", rank: "School Topper" },
        { id: 2, name: "Divya Lakshmi", score: "594/600", percentage: "99.00%", stream: "Science - PCB", rank: "2nd" },
        { id: 3, name: "Arun Kumar", score: "590/600", percentage: "98.33%", stream: "Commerce", rank: "3rd" },
      ]
    },
    {
      id: 3,
      name: "Alagappa Girls Higher Secondary School",
      location: "Karaikudi, Tamil Nadu",
      toppers: [
        { id: 1, name: "Meena Devi", score: "594/600", percentage: "99.00%", stream: "Science - PCB", rank: "School Topper" },
        { id: 2, name: "Saranya Devi", score: "591/600", percentage: "98.50%", stream: "Science - PCM", rank: "2nd" },
        { id: 3, name: "Nila Devi", score: "588/600", percentage: "98.00%", stream: "Commerce", rank: "3rd" },
      ]
    },
    {
      id: 4,
      name: "Alagappa Matriculation School",
      location: "Chennai, Tamil Nadu",
      toppers: [
        { id: 1, name: "Vijay Kumar", score: "597/600", percentage: "99.50%", stream: "Science - PCM", rank: "School Topper" },
        { id: 2, name: "Anitha Devi", score: "593/600", percentage: "98.83%", stream: "Science - PCB", rank: "2nd" },
        { id: 3, name: "Suresh Babu", score: "589/600", percentage: "98.17%", stream: "Commerce", rank: "3rd" },
      ]
    },
  ]
};

// Extracurricular Activities - Events with images
const extracurricularEvents = [
  {
    id: 1,
    title: "Annual Cultural Fest - Kalasangam 2026",
    date: "January 15-17, 2026",
    description: "A three-day cultural extravaganza showcasing dance, music, drama, and art performances by talented students.",
    image: "/accomplishments/cultural-1.jpg",
    category: "Cultural",
    participants: "500+"
  },
  {
    id: 2,
    title: "Youth Science Exhibition",
    date: "February 10, 2026",
    description: "Students presented innovative science projects on environmental sustainability and technology.",
    image: "/accomplishments/science-expo.jpg",
    category: "Academic",
    participants: "200+"
  },
  {
    id: 3,
    title: "National Level Quiz Competition",
    date: "March 5, 2026",
    description: "Our team secured first place in the inter-school quiz competition held at Chennai.",
    image: "/accomplishments/quiz-competiton.jpg",
    category: "Academic",
    participants: "150+"
  },
  {
    id: 4,
    title: "Traditional Day Celebration",
    date: "April 20, 2026",
    description: "Students showcased diverse cultural traditions of India through folk dances and presentations.",
    image: "/accomplishments/traditional-day.jpg",
    category: "Cultural",
    participants: "800+"
  },
  {
    id: 5,
    title: "Inter-School Dance Competition",
    date: "May 8, 2026",
    description: "Our dance troupe won the championship in the regional dance competition.",
    image: "/accomplishments/dance-competition.jpg",
    category: "Arts",
    participants: "300+"
  },
  {
    id: 6,
    title: "Music & Band Festival",
    date: "June 12, 2026",
    description: "Annual music festival featuring orchestral performances and solo renditions.",
    image: "/accomplishments/music-festival.jpg",
    category: "Music",
    participants: "250+"
  }
];

// Sports - Winners with images
const sportsWinners = {
  description: "Our students have achieved remarkable success in various sports at district, state, and national levels.",
  achievements: [
    {
      id: 1,
      sport: "Athletics",
      event: "State Level Athletics Meet 2026",
      winners: [
        { name: "Mohana Krishnan", position: "Gold Medal", event: "100m Sprint", image: "/accomplishments/athlete-1.jpg" },
        { name: "Prakash Raj", position: "Silver Medal", event: "Long Jump", image: "/accomplishments/athlete-2.jpg" },
        { name: "Kavitha Devi", position: "Bronze Medal", event: "200m Sprint", image: "/accomplishments/athlete-3.jpg" }
      ],
      image: "/accomplishments/athletics.jpg"
    },
    {
      id: 2,
      sport: "Basketball",
      event: "District Basketball Championship",
      winners: [
        { name: "Team Captain: Ashok Kumar", position: "Champion", event: "U-19 Boys", image: "/accomplishments/basketball-team.jpg" },
        { name: "Team Captain: Mahalakshmi", position: "Runner-up", event: "U-19 Girls", image: "/accomplishments/basketball-girls.jpg" }
      ],
      image: "/accomplishments/basketball.jpg"
    },
    {
      id: 3,
      sport: "Chess",
      event: "State Chess Tournament",
      winners: [
        { name: "Vishnu Prathap", position: "Gold Medal", event: "Individual", image: "/accomplishments/chess-player.jpg" }
      ],
      image: "/accomplishments/chess.jpg"
    },
    {
      id: 4,
      sport: "Kabaddi",
      event: "District Kabaddi League",
      winners: [
        { name: "Captain: Murugan", position: "Champion", event: "Senior Boys", image: "/accomplishments/kabaddi-team.jpg" }
      ],
      image: "/accomplishments/kabaddi.jpg"
    },
    {
      id: 5,
      sport: "Volleyball",
      event: "State Volleyball Championship",
      winners: [
        { name: "Captain: Karthik", position: "Bronze Medal", event: "U-17 Boys", image: "/accomplishments/volleyball-team.jpg" }
      ],
      image: "/accomplishments/volleyball.jpg"
    },
    {
      id: 6,
      sport: "Swimming",
      event: "District Aquatic Meet",
      winners: [
        { name: "Nila Devi", position: "Gold Medal", event: "50m Freestyle", image: "/accomplishments/swimmer-1.jpg" },
        { name: "Suriya Kumar", position: "Silver Medal", event: "100m Backstroke", image: "/accomplishments/swimmer-2.jpg" }
      ],
      image: "/accomplishments/swimming.jpg"
    }
  ]
};

// Admission Forms - Institutions with download links
const institutions = [
  {
    id: 1,
    name: "Alagappa College of Technology",
    location: "Chennai, Tamil Nadu",
    type: "Engineering",
    formUrl: "/forms/act-application-form.pdf",
    eligibility: "10+2 with PCM",
    seats: 300
  },
  {
    id: 2,
    name: "Alagappa Chettiar College of Engineering & Technology",
    location: "Karaikudi, Tamil Nadu",
    type: "Engineering",
    formUrl: "/forms/acce-application-form.pdf",
    eligibility: "10+2 with PCM",
    seats: 420
  },
  {
    id: 3,
    name: "Alagappa College of Arts & Science",
    location: "Karaikudi, Tamil Nadu",
    type: "Arts & Science",
    formUrl: "/forms/acas-application-form.pdf",
    eligibility: "10+2 in any stream",
    seats: 500
  },
  {
    id: 4,
    name: "Alagappa College of Polytechnic",
    location: "Karaikudi, Tamil Nadu",
    type: "Polytechnic",
    formUrl: "/forms/poly-application-form.pdf",
    eligibility: "10th Pass",
    seats: 360
  },
  {
    id: 5,
    name: "Alagappa Physical Education College",
    location: "Karaikudi, Tamil Nadu",
    type: "Physical Education",
    formUrl: "/forms/physical-ed-application.pdf",
    eligibility: "10+2",
    seats: 100
  },
  {
    id: 6,
    name: "Alagappa Model Higher Secondary School",
    location: "Karaikudi, Tamil Nadu",
    type: "School",
    formUrl: "/forms/model-hss-application.pdf",
    eligibility: "For Classes 6-12",
    seats: 2000
  },
  {
    id: 7,
    name: "Alagappa Matriculation School",
    location: "Chennai, Tamil Nadu",
    type: "School",
    formUrl: "/forms/matric-school-application.pdf",
    eligibility: "For Classes 1-12",
    seats: 1500
  },
  {
    id: 8,
    name: "Alagappa Institute of Information Technology",
    location: "Chennai, Tamil Nadu",
    type: "IT Institute",
    formUrl: "/forms/aiit-application-form.pdf",
    eligibility: "10+2 with Mathematics",
    seats: 180
  }
];

// Tab configuration
const TAB_META = {
  academics: { heading: "Academic Excellence", sub: "Celebrating our top-performing students in Higher Secondary examinations" },
  extracurricular: { heading: "Extracurricular Activities", sub: "Showcasing talent in arts, culture, and creative pursuits" },
  sports: { heading: "Sports Achievements", sub: "Honoring our champions in athletic competitions" },
  admissions: { heading: "Admission Forms", sub: "Download application forms for our institutions" }
};

const subNavItems = [
  { label: "Academics", tab: "academics" },
  { label: "Extracurricular", tab: "extracurricular" },
  { label: "Sports", tab: "sports" },
  { label: "Admissions", tab: "admissions" }
];

// ── Sub-components ────────────────────────────────────────────────────────────

function StudentCard({ student }) {
  const [imgError, setImgError] = useState(false);
  const rankColors = {
    "1st": { bg: "#fef3c7", text: "#92400e", border: "#fbbf24" },
    "2nd": { bg: "#f1f5f9", text: "#475569", border: "#94a3b8" },
    "3rd": { bg: "#fef3c7", text: "#78350f", border: "#d97706" }
  };
  const colors = rankColors[student.rank] || rankColors["1st"];

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(26,58,107,0.10)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 14px 32px rgba(26,58,107,0.16)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(26,58,107,0.10)";
      }}
    >
      <div style={{ background: "linear-gradient(160deg, #cce8ff 0%, #ddf0ff 100%)", padding: "20px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        {!imgError ? (
          <img
            src={student.image}
            alt={student.name}
            onError={() => setImgError(true)}
            style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover", border: "3px solid rgba(74,158,255,0.45)", boxShadow: "0 4px 12px rgba(26,58,107,0.15)" }}
          />
        ) : (
          <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "linear-gradient(135deg, #4a9eff33 0%, #1a3a6b22 100%)", border: "3px solid rgba(74,158,255,0.45)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: "28px", fontWeight: 800, color: "#1a3a6b", opacity: 0.6 }}>{student.name.charAt(0)}</span>
          </div>
        )}
        <div style={{ position: "absolute", top: "10px", right: "10px", background: colors.bg, color: colors.text, fontSize: "10px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px", border: `1px solid ${colors.border}` }}>
          <Crown size={12} style={{ marginRight: "4px", verticalAlign: "middle" }} />
          {student.rank}
        </div>
      </div>
      <div style={{ padding: "16px", textAlign: "center" }}>
        <div style={{ fontSize: "14px", fontWeight: 700, color: "#0a1628", marginBottom: "4px" }}>{student.name}</div>
        <div style={{ fontSize: "11px", color: "#4a9eff", fontWeight: 600, marginBottom: "8px" }}>{student.stream}</div>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          <div style={{ fontSize: "13px", fontWeight: 700, color: "#1a3a6b" }}>{student.score}</div>
          <div style={{ fontSize: "11px", color: "#7a8fa6" }}>• {student.subject}</div>
        </div>
      </div>
    </div>
  );
}

function TopperCard({ student, index }) {
  const [imgError, setImgError] = useState(false);
  const medals = ["🥇", "🥈", "🥉"];

  return (
    <div style={{ background: "#fff", borderRadius: "16px", padding: "20px", boxShadow: "0 4px 20px rgba(26,58,107,0.10)", display: "flex", alignItems: "center", gap: "16px" }}>
      <div style={{ position: "relative", flexShrink: 0 }}>
        {!imgError ? (
          <img
            src={student.image}
            alt={student.name}
            onError={() => setImgError(true)}
            style={{ width: "70px", height: "70px", borderRadius: "50%", objectFit: "cover", border: "3px solid #4a9eff" }}
          />
        ) : (
          <div style={{ width: "70px", height: "70px", borderRadius: "50%", background: "linear-gradient(135deg, #4a9eff33 0%, #1a3a6b22 100%)", border: "3px solid #4a9eff", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: "24px", fontWeight: 800, color: "#1a3a6b" }}>{student.name.charAt(0)}</span>
          </div>
        )}
        <div style={{ position: "absolute", bottom: "-5px", left: "50%", transform: "translateX(-50%)", fontSize: "24px" }}>{medals[index] || ""}</div>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: "15px", fontWeight: 700, color: "#0a1628" }}>{student.name}</div>
        <div style={{ fontSize: "12px", color: "#4a9eff", fontWeight: 600, marginBottom: "4px" }}>{student.stream}</div>
        <div style={{ display: "flex", gap: "12px" }}>
          <div style={{ fontSize: "13px", fontWeight: 700, color: "#1a3a6b" }}>{student.score}</div>
          <div style={{ fontSize: "13px", fontWeight: 600, color: "#22c55e" }}>{student.percentage}</div>
        </div>
      </div>
    </div>
  );
}

function EventCard({ event }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div style={{ background: "#fff", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(26,58,107,0.10)", transition: "transform 0.2s ease, box-shadow 0.2s ease" }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 14px 32px rgba(26,58,107,0.16)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(26,58,107,0.10)"; }}>
      <div style={{ height: "160px", position: "relative", overflow: "hidden" }}>
        {!imgError ? (
          <img src={event.image} alt={event.title} onError={() => setImgError(true)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <div style={{ width: "100%", height: "100%", background: "linear-gradient(160deg, #cce8ff 0%, #ddf0ff 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <MusicNotes size={40} color="#4a9eff" />
          </div>
        )}
        <div style={{ position: "absolute", top: "12px", left: "12px", background: "rgba(10,22,40,0.85)", color: "#fff", fontSize: "10px", fontWeight: 600, padding: "4px 10px", borderRadius: "20px" }}>
          {event.category}
        </div>
      </div>
      <div style={{ padding: "16px" }}>
        <div style={{ fontSize: "14px", fontWeight: 700, color: "#0a1628", marginBottom: "6px", lineHeight: 1.3 }}>{event.title}</div>
        <div style={{ fontSize: "11px", color: "#4a9eff", fontWeight: 600, marginBottom: "8px" }}>{event.date}</div>
        <p style={{ fontSize: "12px", color: "#6b7a90", lineHeight: 1.6, marginBottom: "10px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{event.description}</p>
        <div style={{ fontSize: "11px", color: "#7a8fa6" }}>
          <Star size={12} style={{ marginRight: "4px", verticalAlign: "middle" }} />
          {event.participants} Participants
        </div>
      </div>
    </div>
  );
}

function SportAchievementCard({ achievement }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div style={{ background: "#fff", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(26,58,107,0.10)", transition: "transform 0.2s ease, box-shadow 0.2s ease" }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 14px 32px rgba(26,58,107,0.16)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(26,58,107,0.10)"; }}>
      <div style={{ height: "140px", position: "relative", overflow: "hidden" }}>
        {!imgError ? (
          <img src={achievement.image} alt={achievement.sport} onError={() => setImgError(true)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <div style={{ width: "100%", height: "100%", background: "linear-gradient(160deg, #cce8ff 0%, #ddf0ff 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Trophy size={40} color="#4a9eff" />
          </div>
        )}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(10,22,40,0.9))", padding: "40px 16px 16px" }}>
          <div style={{ fontSize: "16px", fontWeight: 800, color: "#fff" }}>{achievement.sport}</div>
          <div style={{ fontSize: "11px", color: "#4a9eff" }}>{achievement.event}</div>
        </div>
      </div>
      <div style={{ padding: "16px" }}>
        {achievement.winners.map((winner, idx) => (
          <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", borderBottom: idx < achievement.winners.length - 1 ? "1px solid rgba(26,58,107,0.08)" : "none" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg, #0a1628, #1a3a6b)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Medal size={16} color="#fbbf24" weight="fill" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#0a1628" }}>{winner.name}</div>
              <div style={{ fontSize: "11px", color: "#6b7a90" }}>{winner.position} • {winner.event}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InstitutionCard({ institution }) {
  return (
    <div style={{ background: "#fff", borderRadius: "16px", padding: "20px", boxShadow: "0 4px 20px rgba(26,58,107,0.10)", transition: "transform 0.2s ease, box-shadow 0.2s ease" }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 14px 32px rgba(26,58,107,0.16)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(26,58,107,0.10)"; }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
        <div>
          <div style={{ fontSize: "14px", fontWeight: 700, color: "#0a1628", marginBottom: "4px" }}>{institution.name}</div>
          <div style={{ fontSize: "11px", color: "#4a9eff", fontWeight: 600 }}>{institution.type}</div>
        </div>
        <div style={{ background: "rgba(74,158,255,0.1)", padding: "6px 10px", borderRadius: "20px" }}>
          <Trophy size={14} color="#4a9eff" />
        </div>
      </div>
      <div style={{ fontSize: "12px", color: "#6b7a90", marginBottom: "8px" }}>📍 {institution.location}</div>
      <div style={{ fontSize: "11px", color: "#6b7a90", marginBottom: "12px" }}>
        <span style={{ marginRight: "12px" }}>✓ {institution.eligibility}</span>
        <span>🎯 {institution.seats} seats</span>
      </div>
      <a
        href={institution.formUrl}
        download
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          background: "linear-gradient(90deg, #0a1628 0%, #1a3a6b 100%)",
          color: "#fff",
          padding: "10px 16px",
          borderRadius: "8px",
          fontSize: "12px",
          fontWeight: 700,
          textDecoration: "none",
          letterSpacing: "0.02em",
          transition: "opacity 0.15s ease"
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = "0.9"}
        onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
      >
        <DownloadSimple size={16} />
        Download Form
      </a>
    </div>
  );
}

// ── Main Component ──────────────────────────────────────────────────────────────

export default function Accomplishments() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab") ?? "academics";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [tab]);

  const meta = TAB_META[tab] ?? TAB_META.academics;

  return (
    <div className="flex flex-col">
      {/* ── Hero + Tab Bar ──────────────────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(160deg, #0a1628 0%, #0d2444 45%, #1a3a6b 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-60px", left: "50%", transform: "translateX(-50%)", width: "700px", height: "300px", background: "radial-gradient(ellipse, rgba(74,158,255,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "52px 24px 36px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-block", fontSize: "11px", fontWeight: 700, color: "#4a9eff", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "12px", background: "rgba(74,158,255,0.12)", padding: "4px 14px", borderRadius: "20px", border: "1px solid rgba(74,158,255,0.25)" }}>
            Accomplishments
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, color: "#ffffff", marginBottom: "12px", lineHeight: 1.15 }}>
            {meta.heading}
          </h1>
          <p style={{ fontSize: "15px", color: "rgba(200,216,240,0.75)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            {meta.sub}
          </p>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", overflowX: "auto", scrollbarWidth: "none", gap: "2px" }}>
            {subNavItems.map((item) => {
              const isActive = tab === item.tab;
              return (
                <Link key={item.tab} to={`/accomplishments?tab=${item.tab}`} style={{ display: "inline-flex", alignItems: "center", padding: "14px 20px", fontSize: "13px", fontWeight: isActive ? 700 : 500, color: isActive ? "#fff" : "rgba(200,216,240,0.65)", textDecoration: "none", whiteSpace: "nowrap", borderBottom: isActive ? "3px solid #4a9eff" : "3px solid transparent", background: isActive ? "rgba(74,158,255,0.12)" : "transparent", transition: "all 0.2s ease", letterSpacing: "0.01em", flexShrink: 0 }}
                  onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; } }}
                  onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.color = "rgba(200,216,240,0.65)"; e.currentTarget.style.background = "transparent"; } }}>
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ACADEMICS ─────────────────────────────────────────────────────────── */}
      {tab === "academics" && (
        <section className="py-16 lg:py-20">
          <div className="container px-4" style={{ maxWidth: "1280px", margin: "0 auto" }}>
            {/* Section Header */}
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "linear-gradient(135deg, #0a1628, #1a3a6b)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <GraduationCap size={20} color="#4a9eff" weight="duotone" />
                </div>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "#4a9eff", textTransform: "uppercase", letterSpacing: "0.08em" }}>Higher Secondary</div>
              </div>
              <h2 style={{ fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 800, color: "#0a1628", marginBottom: "12px" }}>School Wise Toppers {academicHighAchievers.year}</h2>
              <p style={{ fontSize: "15px", color: "#6b7a90", maxWidth: "640px", margin: "0 auto", lineHeight: 1.7 }}>{academicHighAchievers.description}</p>
            </div>

            {/* School-wise Toppers */}
            {academicHighAchievers.schools.map((school) => (
              <div key={school.id} style={{ marginBottom: "48px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1a3a6b", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.05em", display: "flex", alignItems: "center", gap: "10px" }}>
                  <Trophy size={20} color="#fbbf24" weight="fill" />
                  {school.name}
                </h3>
                <p style={{ fontSize: "12px", color: "#7a8fa6", marginBottom: "20px" }}>📍 {school.location}</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px" }}>
                  {school.toppers.map((student, index) => (
                    <div key={student.id} style={{ background: "#fff", borderRadius: "16px", padding: "20px", boxShadow: "0 4px 20px rgba(26,58,107,0.10)", display: "flex", alignItems: "center", gap: "16px", transition: "transform 0.2s ease", }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-4px)"}
                      onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
                      <div style={{ position: "relative", flexShrink: 0 }}>
                        <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "linear-gradient(135deg, #0a1628, #1a3a6b)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <span style={{ fontSize: "22px", fontWeight: 800, color: "#fff" }}>{index + 1}</span>
                        </div>
                        {index === 0 && <div style={{ position: "absolute", bottom: "-4px", left: "50%", transform: "translateX(-50%)", fontSize: "20px" }}>🥇</div>}
                        {index === 1 && <div style={{ position: "absolute", bottom: "-4px", left: "50%", transform: "translateX(-50%)", fontSize: "20px" }}>🥈</div>}
                        {index === 2 && <div style={{ position: "absolute", bottom: "-4px", left: "50%", transform: "translateX(-50%)", fontSize: "20px" }}>🥉</div>}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: "15px", fontWeight: 700, color: "#0a1628", marginBottom: "4px" }}>{student.name}</div>
                        <div style={{ fontSize: "12px", color: "#4a9eff", fontWeight: 600, marginBottom: "4px" }}>{student.stream}</div>
                        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                          <div style={{ fontSize: "16px", fontWeight: 800, color: "#1a3a6b" }}>{student.percentage}</div>
                          <div style={{ fontSize: "11px", color: "#7a8fa6" }}>{student.score}</div>
                        </div>
                      </div>
                      <div style={{ background: index === 0 ? "rgba(251,191,36,0.15)" : "rgba(26,58,107,0.08)", padding: "6px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: 700, color: index === 0 ? "#92400e" : "#6b7a90" }}>
                        {student.rank}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── EXTRACURRICULAR ──────────────────────────────────────────────────── */}
      {tab === "extracurricular" && (
        <section className="py-16 lg:py-20">
          <div className="container px-4" style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "linear-gradient(135deg, #0a1628, #1a3a6b)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <MusicNotes size={20} color="#4a9eff" weight="duotone" />
                </div>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "#4a9eff", textTransform: "uppercase", letterSpacing: "0.08em" }}>Events & Activities</div>
              </div>
              <h2 style={{ fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 800, color: "#0a1628", marginBottom: "12px" }}>Extracurricular Activities</h2>
              <p style={{ fontSize: "15px", color: "#6b7a90", maxWidth: "640px", margin: "0 auto", lineHeight: 1.7 }}>Our students actively participate in various cultural, artistic, and intellectual events throughout the year, showcasing their talents and creativity.</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
              {extracurricularEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SPORTS ───────────────────────────────────────────────────────────── */}
      {tab === "sports" && (
        <section className="py-16 lg:py-20">
          <div className="container px-4" style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "linear-gradient(135deg, #0a1628, #1a3a6b)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Trophy size={20} color="#4a9eff" weight="duotone" />
                </div>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "#4a9eff", textTransform: "uppercase", letterSpacing: "0.08em" }}>Athletic Excellence</div>
              </div>
              <h2 style={{ fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 800, color: "#0a1628", marginBottom: "12px" }}>Sports Achievements</h2>
              <p style={{ fontSize: "15px", color: "#6b7a90", maxWidth: "640px", margin: "0 auto", lineHeight: 1.7 }}>{sportsWinners.description}</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "20px" }}>
              {sportsWinners.achievements.map((achievement) => (
                <SportAchievementCard key={achievement.id} achievement={achievement} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── ADMISSIONS ───────────────────────────────────────────────────────── */}
      {tab === "admissions" && (
        <section className="py-16 lg:py-20">
          <div className="container px-4" style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "linear-gradient(135deg, #0a1628, #1a3a6b)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <DownloadSimple size={20} color="#4a9eff" weight="duotone" />
                </div>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "#4a9eff", textTransform: "uppercase", letterSpacing: "0.08em" }}>Apply Now</div>
              </div>
              <h2 style={{ fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 800, color: "#0a1628", marginBottom: "12px" }}>Admission Forms</h2>
              <p style={{ fontSize: "15px", color: "#6b7a90", maxWidth: "640px", margin: "0 auto", lineHeight: 1.7 }}>Download application forms for any of our institutions. Fill out the form and submit it at the respective institution's office.</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
              {institutions.map((institution) => (
                <InstitutionCard key={institution.id} institution={institution} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}