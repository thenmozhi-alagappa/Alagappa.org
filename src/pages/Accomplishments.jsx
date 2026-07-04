import { useEffect, useRef, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  GraduationCap,
  Trophy,
  MusicNotes,
  TennisBall,
  DownloadSimple,
  Star,
  Medal,
  Crown,
  Calendar,
  CaretDown
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
        { id: 1, name: "AL. Meiyammai", score: "593/600", rank: "1st", image: "/Toppers/MatricKKd/12th/ALMeiyammai.png" },
        { id: 2, name: "C. Sathyapriya", score: "573/600",  rank: "2nd", image: "/Toppers/MatricKKd/12th/sathyapriya.png" },
        { id: 3, name: "E. Jessica", score: "566/600",  rank: "3rd", image: "/Toppers/MatricKKd/12th/jessica.png" },
      ]
    },
    // {
    //   id: 2,
    //   name: "Alagappa CBSE School",
    //   location: "Karaikudi, Tamil Nadu",
    //   toppers: [
    //     { id: 1, name: "Karthik Raja", score: "596/600", percentage: "99.33%", stream: "Science - PCM", rank: "1st", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face" },
    //     { id: 2, name: "Divya Lakshmi", score: "594/600", percentage: "99.00%", stream: "Science - PCB", rank: "2nd", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face" },
    //     { id: 3, name: "Arun Kumar", score: "590/600", percentage: "98.33%", stream: "Commerce", rank: "3rd", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" },
    //   ]
    // },
    {
      id: 3,
      name: "Alagappa Girls Higher Secondary School",
      location: "Karaikudi, Tamil Nadu",
      toppers: [
        { id: 1, name: "N. Vadivu", score: "568/600", rank: "1st", image: "/Toppers/GirlsKKd/12th/vadivu.jpeg" },
        { id: 2, name: "SI. Kaarunyaa", score: "555/600", rank: "2nd", image: "/Toppers/GirlsKKd/12th/karunya.jpeg" },
        { id: 3, name: "S. Amudhini", score: "550/600", rank: "3rd", image: "/Toppers/GirlsKKd/12th/amudhini.jpeg" },
      ]
    },
    // {
    //   id: 4,
    //   name: "Alagappa Matriculation School",
    //   location: "Chennai, Tamil Nadu",
    //   toppers: [
    //     { id: 1, name: "Vijay Kumar", score: "597/600", percentage: "99.50%", stream: "Science - PCM", rank: "1st", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face" },
    //     { id: 2, name: "Anitha Devi", score: "593/600", percentage: "98.83%", stream: "Science - PCB", rank: "2nd", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face" },
    //     { id: 3, name: "Suresh Babu", score: "589/600", percentage: "98.17%", stream: "Commerce", rank: "3rd", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face" },
    //   ]
    // },
  ]
};



// Academics - 10th Grade toppers data
const academic10thToppers = {
  year: "2025-2026",
  description: "Celebrating our outstanding students who have excelled in their Secondary School Certificate (Class 10) examinations across all our institutions.",
  schools: [
    {
      id: 1,
      name: "Alagappa Matriculation Higher Secondary School",
      location: "Karaikudi, Tamil Nadu",
      toppers: [
        { id: 1, name: "S.S. Nandakishore", score: "487/500", rank: "1st", image: "/Toppers/MatricKKd/10th/nandakishore.jpg" },
        { id: 2, name: "L. John Sebastin Paul", score: "479/500", rank: "2nd", image: "/Toppers/MatricKKd/10th/johnSebastinPaul.jpg" },
        { id: 3, name: "S. Abhishek", score: "478/500", rank: "3rd", image: "/Toppers/MatricKKd/10th/abishek.jpg" },
      ]
    },
    {
      id: 3,
      name: "Alagappa Girls Higher Secondary School",
      location: "Karaikudi, Tamil Nadu",
      toppers: [
        { id: 1, name: "R. Harini Shri", score: "486/500",  rank: "1st", image: "/Toppers/GirlsKKd/10th/harinisri.jpeg" },
        { id: 2, name: "K. Nithya Sri", score: "480/500", rank: "2nd", image: "/Toppers/GirlsKKd/10th/nithyasree.jpeg" },
        { id: 3, name: "S. Surjetha", score: "468/500", rank: "3rd", image: "/Toppers/GirlsKKd/10th/surjeetha.jpeg" },
      ]
    }
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
    name: "Alagappa Matriculation Higher Secondary School for LKG to X",
    location: "Karaikudi, Tamil Nadu",
    type: "Higher Secondary School",
    formUrl: "/forms/AMHSS-LKG-to-X.pdf",
  },
  {
    id: 2,
    name: "Alagappa Matriculation Higher Secondary School for XI & XII ",
    location: "Karaikudi, Tamil Nadu",
    type: "Higher Secondary School",
    formUrl: "/forms/AMHSS-XI-to-XII.pdf",
  },
  {
    id: 3,
    name: "Alagappa Girls Matriculation Higher Secondary School",
    location: "Karaikudi, Tamil Nadu",
    type: "Higher Secondary School",
    formUrl: "/forms/Girls-School.pdf",
  },
  {
    id: 4,
    name: "Alagappa Montessori School, Karaikudi ",
    location: "Karaikudi, Tamil Nadu",
    type: "Primary and Nursery Education",
    formUrl: "/forms/Montessori.pdf",
  },
  {
    id: 5,
    name: "Smart Start Playschool & Daycare center, Karaikudi",
    location: "Karaikudi, Tamil Nadu",
    type: "Kindergarden & Daycare",
    formUrl: "/forms/Smart-Start.pdf",
  },
 
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

// Custom dropdown — replaces native <select> so the selected value is always
// rendered with our own styling (native selects were showing up blank/white).
function CustomDropdown({ value, options, onChange, minWidth = "110px" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={ref} style={{ position: "relative", minWidth }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "8px",
          padding: "7px 10px",
          fontSize: "12px",
          fontWeight: 600,
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          background: "linear-gradient(90deg, #0a1628 0%, #1a3a6b 100%)",
          color: "#fff"
        }}
      >
        {selected?.label}
        <CaretDown size={12} weight="bold" style={{ flexShrink: 0 }} />
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            left: 0,
            right: 0,
            background: "#0a1628",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 8px 24px rgba(10,22,40,0.35)",
            zIndex: 20
          }}
        >
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              style={{
                padding: "8px 10px",
                fontSize: "12px",
                fontWeight: opt.value === value ? 700 : 500,
                color: "#fff",
                cursor: "pointer",
                background: opt.value === value ? "rgba(74,158,255,0.25)" : "transparent"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(74,158,255,0.18)")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = opt.value === value ? "rgba(74,158,255,0.25)" : "transparent")
              }
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

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

// Component for displaying institutions in Academics tab
function InstitutionListItem({ institution }) {
  return (
    <div style={{
      background: "#fff",
      borderRadius: "12px",
      padding: "16px 20px",
      boxShadow: "0 2px 12px rgba(26,58,107,0.08)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "12px",
      transition: "transform 0.2s ease, box-shadow 0.2s ease"
    }}
    onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(26,58,107,0.12)"; }}
    onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(26,58,107,0.08)"; }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: 1, minWidth: "200px" }}>
        <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "linear-gradient(135deg, #0a1628, #1a3a6b)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <GraduationCap size={18} color="#4a9eff" weight="duotone" />
        </div>
        <div>
          <div style={{ fontSize: "14px", fontWeight: 700, color: "#0a1628" }}>{institution.name}</div>
          <div style={{ fontSize: "11px", color: "#6b7a90" }}>{institution.location} • {institution.type}</div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
        <div style={{ fontSize: "11px", color: "#6b7a90", marginRight: "8px" }}>
          <span style={{ marginRight: "10px" }}>✓ {institution.eligibility}</span>
          <span>🎯 {institution.seats} seats</span>
        </div>
        <a
          href={institution.formUrl}
          download
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            background: "linear-gradient(90deg, #0a1628 0%, #1a3a6b 100%)",
            color: "#fff",
            padding: "8px 14px",
            borderRadius: "6px",
            fontSize: "11px",
            fontWeight: 600,
            textDecoration: "none",
            transition: "opacity 0.15s ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = "0.9"}
          onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
        >
          <DownloadSimple size={14} />
          Download
        </a>
      </div>
    </div>
  );
}

// ── Main Component ──────────────────────────────────────────────────────────────

export default function Accomplishments() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab") ?? "academics";
  const [academicClass, setAcademicClass] = useState("12th");
  const [academicYear, setAcademicYear] = useState("2025-2026");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [tab]);

  const meta = TAB_META[tab] ?? TAB_META.academics;

  // Get available years for the selected class
  const availableYears = academicClass === "12th"
    ? ["2025-2026"]
    : ["2025-2026"];

  // Get academic data based on class and year
  const getAcademicData = () => {
    if (academicClass === "12th") {
      if (academicYear === "2025-2026") return academicHighAchievers;
      return academicHighAchievers;
    } else {
      return academic10thToppers;
    }
  };

  const academicData = getAcademicData();

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
            {/* Filters Row - Custom Dropdowns */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px", marginBottom: "32px", flexWrap: "wrap" }}>
              {/* Class Dropdown */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ fontSize: "12px", color: "#6b7a90", fontWeight: 500 }}>Class:</span>
                <CustomDropdown
                  value={academicClass}
                  minWidth="120px"
                  options={[
                    { value: "12th", label: "12th Standard" },
                    { value: "10th", label: "10th Standard" }
                  ]}
                  onChange={(val) => {
                    setAcademicClass(val);
                    if (val === "10th") setAcademicYear("2025-2026");
                  }}
                />
              </div>

              {/* Year Dropdown - Only show for 12th class */}
              {academicClass === "12th" && (
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ fontSize: "12px", color: "#6b7a90", fontWeight: 500 }}>Year:</span>
                  <CustomDropdown
                    value={academicYear}
                    minWidth="105px"
                    options={[
                      { value: "2025-2026", label: "2025-2026" },
                    ]}
                    onChange={setAcademicYear}
                  />
                </div>
              )}
            </div>

            {/* Section Header */}
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "linear-gradient(135deg, #0a1628, #1a3a6b)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <GraduationCap size={20} color="#4a9eff" weight="duotone" />
                </div>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "#4a9eff", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {academicClass === "12th" ? "Higher Secondary" : "Secondary"}
                </div>
              </div>
              <h2 style={{ fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 800, color: "#0a1628", marginBottom: "12px" }}>School Wise Toppers {academicData.year}</h2>
              <p style={{ fontSize: "15px", color: "#6b7a90", maxWidth: "640px", margin: "0 auto", lineHeight: 1.7 }}>{academicData.description}</p>
            </div>

            {/* School-wise Toppers */}
            {academicData.schools.map((school) => (
              <div key={school.id} style={{ marginBottom: "56px", textAlign: "center" }}>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1a3a6b", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.05em", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                  <Trophy size={20} color="#fbbf24" weight="fill" />
                  {school.name}
                </h3>
                <p style={{ fontSize: "12px", color: "#7a8fa6", marginBottom: "28px" }}>📍 {school.location}</p>
                <div style={{ display: "flex", justifyContent: "center", gap: "32px", flexWrap: "wrap", maxWidth: "1200px", margin: "0 auto" }}>
                  {school.toppers.map((student) => {
                    const rankStyles = {
                      "1st": { ribbon: "linear-gradient(90deg, #4a9eff, #1a3a6b)", ribbonText: "#fff", label: "School First" },
                      "2nd": { ribbon: "linear-gradient(90deg, #85b7eb, #378add)", ribbonText: "#042c53", label: "School Second" },
                      "3rd": { ribbon: "linear-gradient(90deg, #185fa5, #042c53)", ribbonText: "#fff", label: "School Third" }
                    };
                    const rs = rankStyles[student.rank] || rankStyles["1st"];
                    const [scoreNum, scoreDen] = student.score.split("/");

                    return (
                      <div
                        key={student.id}
                        style={{
                          background: "#fff",
                          borderRadius: "16px",
                          overflow: "hidden",
                          boxShadow: "0 4px 20px rgba(26,58,107,0.12)",
                          border: "1px solid rgba(26,58,107,0.1)",
                          textAlign: "center",
                          position: "relative",
                          width: "240px",
                          transition: "transform 0.2s ease, box-shadow 0.2s ease"
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(26,58,107,0.18)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(26,58,107,0.12)"; }}
                      >
                        {/* Diagonal rank ribbon - top right corner, blue gradient */}
                        <div style={{
                          position: "absolute",
                          top: "14px",
                          right: "-38px",
                          width: "150px",
                          transform: "rotate(45deg)",
                          background: rs.ribbon,
                          color: rs.ribbonText,
                          fontSize: "12px",
                          fontWeight: 700,
                          textAlign: "center",
                          padding: "5px 0",
                          zIndex: 3,
                          boxShadow: "0 2px 6px rgba(0,0,0,0.15)"
                        }}>
                          {student.rank}
                        </div>

                        {/* Student photo */}
                        <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
                          <img
                            src={student.image}
                            alt={student.name}
                            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                          />
                        </div>

                        {/* Name banner overlaid at the bottom edge of the photo */}
                        <div style={{
                          background: "linear-gradient(90deg, #0a1628 0%, #1a3a6b 100%)",
                          color: "#fff",
                          fontSize: "14px",
                          fontWeight: 700,
                          padding: "10px 8px",
                          letterSpacing: "0.01em",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis"
                        }}>
                          {student.name}
                        </div>

                        {/* Score and school position */}
                        <div style={{ padding: "14px 12px 18px", background: "linear-gradient(180deg, #f8fbff 0%, #fff 60%)" }}>
                          <div style={{ fontSize: "28px", fontWeight: 800, color: "#1a3a6b", lineHeight: 1.1 }}>{scoreNum}</div>
                          <div style={{ fontSize: "13px", color: "#94a3b8", fontWeight: 600, borderBottom: "1px solid rgba(26,58,107,0.08)", paddingBottom: "8px", marginBottom: "8px" }}>{scoreDen}</div>
                          <div style={{ fontSize: "12px", fontWeight: 800, color: "#1a3a6b", textTransform: "uppercase", letterSpacing: "0.03em" }}>{rs.label}</div>
                        </div>
                      </div>
                    );
                  })}
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

            {/* Table Format */}
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(26,58,107,0.10)" }}>
                <thead>
                  <tr style={{ background: "linear-gradient(90deg, #0a1628 0%, #1a3a6b 100%)" }}>
                    <th style={{ padding: "16px", textAlign: "left", color: "#fff", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>Institution</th>
                    <th style={{ padding: "16px", textAlign: "left", color: "#fff", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>Location</th>
                    <th style={{ padding: "16px", textAlign: "left", color: "#fff", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>Type</th>
                    <th style={{ padding: "16px", textAlign: "center", color: "#fff", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {institutions.map((institution, index) => (
                    <tr key={institution.id} style={{ background: index % 2 === 0 ? "#fff" : "#f8fafc", transition: "background 0.2s ease" }}
                      onMouseEnter={(e) => e.currentTarget.style.background = "#f1f5f9"}
                      onMouseLeave={(e) => e.currentTarget.style.background = index % 2 === 0 ? "#fff" : "#f8fafc"}>
                      <td style={{ padding: "16px", fontSize: "14px", fontWeight: 600, color: "#0a1628" }}>{institution.name}</td>
                      <td style={{ padding: "16px", fontSize: "13px", color: "#6b7a90" }}>{institution.location}</td>
                      <td style={{ padding: "16px" }}>
                        <span style={{ display: "inline-block", padding: "4px 10px", background: "rgba(74,158,255,0.1)", color: "#4a9eff", fontSize: "11px", fontWeight: 600, borderRadius: "20px" }}>
                          {institution.type}
                        </span>
                      </td>
                      <td style={{ padding: "16px", textAlign: "center" }}>
                        <a
                          href={institution.formUrl}
                          download
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "6px",
                            background: "linear-gradient(90deg, #0a1628 0%, #1a3a6b 100%)",
                            color: "#fff",
                            padding: "8px 16px",
                            borderRadius: "6px",
                            fontSize: "12px",
                            fontWeight: 600,
                            textDecoration: "none",
                            transition: "opacity 0.15s ease"
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.opacity = "0.9"}
                          onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                        >
                          <DownloadSimple size={14} />
                          Download
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}