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
} from "phosphor-react";

// ── Static data ──────────────────────────────────────────────────────────────

const founderMeta = {
  name: "Padma Bhushan Dr. RM. Alagappa Chettiar",
  credentials: "M.A., D.Litt., LL.D., Barrister-at-Law",
  tagline: "Philanthropist · Educationalist · Visionary",
  born: "6th April 1909",
  died: "1957",
  birthPlace: "Kottaiyur, Sivaganga District, Tamil Nadu",
  image: "/founder/alagappa-chettiar.jpg",
  highlights: [
    { label: "Institutions Founded", value: "20+" },
    { label: "Alumni Produced", value: "30L+" },
    { label: "Acres Donated", value: "1,000+" },
    { label: "Years of Legacy", value: "75+" },
  ],
};

const founderSections = [
  {
    key: "birth",
    label: "Birth",
    icon: User,
    type: "text",
    content:
      "Born on 6th April 1909 in Kottaiyur, Sivaganga District, Tamil Nadu, into the illustrious Nattukotai Chettiar community — renowned across South and Southeast Asia for commerce, banking, and civic spirit.",
  },
  {
    key: "education",
    label: "Education",
    icon: GraduationCap,
    type: "list",
    items: [
      "M.A. in Literature, Presidency College, Madras",
      "Barrister-at-Law, Temple, England",
    ],
  },
  {
    key: "business",
    label: "Business Acumen",
    icon: Briefcase,
    type: "list",
    items: [
      "Pioneered in textiles — founded Cochin Textiles (1937) and Alagappa Textiles near Thrissur, Kerala; the staff township was named Alagappa Nagar.",
      "Diversified across rubber plantations in Malaya, tin mines in Burma, textile mills in Kerala, insurance companies in Calcutta, hotels and real estate in Bombay, plantations in Coorg, cinema theatres in Madras, a flourishing stock exchange company, and a private airline — Jupiter Airways.",
      "Referred to as the unsung business maharaja of South India in the thirties and forties.",
      "Knighted by the British Government in the 1946 New Year Honours at age 37 — a distinction he renounced when India attained independence.",
      "Transformed a vast scrub jungle at Karaikudi into a galaxy of educational institutions — proof of his vision beyond commerce.",
    ],
  },
  {
    key: "awards",
    label: "Awards & Honours",
    icon: Medal,
    type: "awards",
    items: [
      { badge: "D.Litt. — 1943", detail: "Conferred by Annamalai University" },
      { badge: "LL.D. — 1944", detail: "Conferred by the University of Madras" },
      {
        badge: "Knighthood — 1945",
        detail: "Awarded by the British Government at age 37; renounced upon Indian independence",
      },
      {
        badge: "Padma Bhushan — 1957",
        detail:
          "Conferred by the President of India on 26 January 1957 — the highest civilian honour he received",
      },
    ],
  },
  {
    key: "education-contrib",
    label: "Contributions in Education",
    icon: Books,
    type: "list",
    preamble:
      "Harboring a firm conviction that education is an absolute must for a human being to become productive, wholesome, and humane, his generous donations led to the establishment of:",
    items: [
      "Alagappa College of Technology Campus — Anna University, Chennai",
      "Engineering college at Annamalai University, Chidambaram",
      "Alagappa Chettiar Government College of Engineering & Technology, Karaikudi",
      "Alagappa Arts College, Karaikudi",
      "Alagappa College of Polytechnic, Karaikudi",
      "Alagappa Physical Education College, Karaikudi",
      "Alagappa Model Higher Secondary School, Karaikudi",
      "Alagappa Matriculation School, Chennai",
      "Alagappa Primary School & Montessori School, Karaikudi",
      "Donation to Lady Doak College, Madurai",
    ],
  },
  {
    key: "social",
    label: "Social Service",
    icon: Handshake,
    type: "list",
    items: [
      "Donated ₹1 Lakh to Mahatma Gandhi at Thakkar Baba Vidyalaya",
      "Funded development of the Kottaiyur township infrastructure",
      "Donated to establish the South Indian Educational Society, New Delhi (1948)",
      "Donated to establish higher education in Malaysia",
      "Funded publication of Tamil Kalangiyam",
      "Donated to the Cochin Cyclone Relief Fund",
      "Funded a maternity hospital and childcare centre in Cochin",
      "Funded the morning food scheme for Cochin children",
      "Established the South Indian Chamber of Commerce in Cochin",
      "Founded the Ramanujan Institute of Mathematics in Chennai — a centre of mathematical research",
      "Funded students from Cochin to study abroad and supported indigenous medicine research",
    ],
  },
  {
    key: "visionary",
    label: "A Visionary",
    icon: Lightbulb,
    type: "text",
    content:
      'Dr. Alagappa Chettiar convinced Prime Minister Nehru to house a National Research Institute within the Alagappa campus. His magnificent gift of 300 acres of land and ₹15 Lakhs enabled the Government of India to establish the Central Electro Chemical Research Institute (CECRI) at Karaikudi, inaugurated on 14 January 1953. As Vice President Dr. S. Radhakrishnan remarked at the opening: "Being a businessman himself, Dr. Alagappa Chettiar is aware of the industrial possibilities of our country and the need for scientific, technical and technological education. In his lifetime he has built a monument for himself — you have only to look around."',
  },
  {
    key: "patriot",
    label: "A Patriot",
    icon: Flag,
    type: "text",
    content:
      "A patriot to the core, Dr. Alagappa Chettiar actively supported Mahatma Gandhi's Satyagraha movement. He lent his fleet of aircraft from Jupiter Airways to the Government of India for lifting troops during Hyderabad's integration — never flinching even when some of his planes crashed in their mission.",
  },
  {
    key: "philanthropy",
    label: "Philanthropy",
    icon: Gift,
    type: "text",
    content:
      'When he passed away prematurely at age 48, Dr. Alagappa Chettiar had redefined philanthropy and contributed more to the betterment of education in Tamil Nadu than any other person of eminence. His crowning act of giving was donating his own personal residence in Kottaiyur to found a Women\'s College. As Rajaji observed: "Dr. Alagappa Chettiar had given away freely. Students should develop that quality — cultivate courage and emulate the spirit of Dr. Alagappa Chettiar."',
  },
];

const audioSpeeches = [
  {
    id: 1,
    title: "Last Speech to Engineering Students",
    date: "February 15, 1957",
    description:
      "Dr. Alagappa Chettiar's final address to engineering students, delivered just two days before his passing. In this moving speech, he urged the young engineers to dedicate their skills to the service of the nation and its people.",
    audioSrc: "/audio/last-speech-engineering-students.mp3",
  },
  {
    id: 2,
    title: "College Day at Teacher's Training College",
    date: "February 18, 1955",
    description:
      "An inspiring address delivered during the annual College Day celebrations at the Alagappa Teacher's Training College, where he spoke about the sacred duty of educators in shaping the future of India.",
    audioSrc: "/audio/college-day-teachers-training.mp3",
  },
  {
    id: 3,
    title: "Foundation Stone for Hobby Centre",
    date: "October 9, 1955",
    description:
      "Speech delivered at the laying of the foundation stone for the Hobby Centre, reflecting Dr. Alagappa Chettiar's belief in holistic education that nurtures creativity and extracurricular pursuits alongside academics.",
    audioSrc: "/audio/foundation-stone-hobby-centre.mp3",
  },
  {
    id: 4,
    title: 'Ode to Founder — "Vallal Vazhthu"',
    date: "Tribute",
    description:
      "A tribute composition dedicated to Dr. Alagappa Chettiar, celebrating his vision, generosity, and the lasting impact of his contributions to education and society.",
    audioSrc: "/audio/vallal-vazhthu.mp3",
  },
];

const writtenSpeeches = [
  {
    id: 1,
    title: "CECRI Foundation Stone Ceremony",
    date: "July 25, 1948",
    description:
      "Address at the laying of the foundation stone for the Central Electrochemical Research Institute (CECRI) at Karaikudi, in the distinguished presence of Prime Minister Pandit Jawaharlal Nehru. Dr. Alagappa Chettiar spoke of his vision for advancing scientific research in India and the importance of self-reliance in technology.",
  },
  {
    id: 2,
    title: "CECRI Opening Ceremony",
    date: "January 14, 1953",
    description:
      "Speech delivered at the formal opening of CECRI, graced by the presence of Vice President Dr. S. Radhakrishnan. Dr. Alagappa Chettiar reflected on the journey from the laying of the foundation stone to the realization of a world-class research facility.",
  },
  {
    id: 3,
    title: "A.C. College of Technology Foundation Ceremony",
    date: "February 19, 1953",
    description:
      "Address at the foundation stone laying ceremony of A.C. College of Technology, in the presence of President Dr. Rajendra Prasad. This speech outlined Dr. Alagappa Chettiar's commitment to technical education as a cornerstone of national development.",
  },
  {
    id: 4,
    title: "Madras University Convocation Address",
    date: "August 18, 1954",
    description:
      "A distinguished convocation address at the University of Madras, where Dr. Alagappa Chettiar shared his thoughts on the role of universities in fostering innovation, character, and national progress.",
  },
  {
    id: 5,
    title: "Messages Regarding Dr. S.S. Bhatnagar's Demise",
    date: "June 6, 1955",
    description:
      "Heartfelt messages penned by Dr. Alagappa Chettiar on the passing of Dr. Shanti Swarup Bhatnagar, the eminent scientist and founding Director-General of CSIR, with whom he had shared a deep bond over the establishment of CECRI.",
  },
  {
    id: 6,
    title: "Final Speech to Engineering Students",
    date: "February 15, 1957",
    description:
      "The written transcript of Dr. Alagappa Chettiar's last public address, delivered to engineering students. His parting words encapsulated his lifelong belief in the transformative power of education and the responsibility of the educated to serve society.",
  },
];

const lettersBy = [
  { id: 1,  name: "Pandit Jawaharlal Nehru",  role: "Prime Minister of India",          year: "1946", image: "/leaders/nehru.jpg",           summary: "Dr. Alagappa Chettiar wrote to Prime Minister Nehru regarding his vision for establishing a national-level research institute and his commitment to furthering the cause of scientific research in India.", hasScan: true,  letterSrc: "/letters/nehru-1946.html" },
  { id: 2,  name: "Dr. S. Radhakrishnan",     role: "Vice President of India",          year: "1955", image: "/leaders/radhakrishnan.jpg",   summary: "Correspondence with the Vice President of India discussing the progress of CECRI and the expanding scope of educational institutions in Karaikudi.", hasScan: true,  letterSrc: "/letters/radhakrishnan-1955.html" },
  { id: 3,  name: "Dr. Rajendra Prasad",      role: "President of India",               year: "1955", image: "/leaders/rajendra-prasad.jpg", summary: "A letter to the President of India updating him on the developments at the Alagappa educational institutions and inviting his continued patronage and guidance.", hasScan: true,  letterSrc: "/letters/rajendra-prasad-1955.html" },
  { id: 4,  name: "Gopala Reddi",             role: "Chief Minister of Andhra Pradesh", year: "1956", image: "/leaders/gopala-reddi.jpg",    summary: "Correspondence with the Chief Minister of Andhra Pradesh discussing educational development and collaboration across the southern states.", hasScan: true,  letterSrc: "/letters/gopala-reddi-1956.html" },
  { id: 5,  name: "K. Hanumanthaiya",         role: "Chief Minister of Mysore",         year: "1953", image: "/leaders/hanumanthaiya.jpg",   summary: "Letter to the Chief Minister of Mysore on matters pertaining to educational expansion and the role of industry in supporting academic institutions.", hasScan: true,  letterSrc: "/letters/hanumanthaiya-1953.html" },
  { id: 6,  name: "K. Kamaraj",               role: "Chief Minister of Madras",         year: "1955", image: "/leaders/kamaraj.jpg",         summary: "Correspondence with the Chief Minister of Madras regarding educational policy, institutional development, and the shared goal of making quality education accessible to all.", hasScan: true,  letterSrc: "/letters/kamaraj-1955.html" },
  { id: 7,  name: "C. Rajagopalachari",       role: "Governor-General of India",        year: "1952", image: "/leaders/rajaji.jpg",          summary: "A letter to the former Chief Minister of Madras and Governor-General of India, exchanging views on education, governance, and the future of the nation.", hasScan: true,  letterSrc: "/letters/rajaji-1952.html" },
  { id: 8,  name: "Rajkumari Amrit Kaur",     role: "Minister for Health, India",       year: "1953", image: "/leaders/amrit-kaur.jpg",      summary: "Correspondence with India's first Minister for Health discussing the establishment of the maternity hospital and healthcare facilities in the Karaikudi region.", hasScan: true,  letterSrc: "/letters/amrit-kaur-1953.html" },
  { id: 9,  name: "Sir M. Visvesvaraya",      role: "Engineer & Bharat Ratna",          year: "1955", image: "/leaders/visvesvaraya.jpg",    summary: "A letter to the legendary engineer and Bharat Ratna recipient, seeking his counsel on engineering education and industrial development.", hasScan: false },
  { id: 10, name: "Malcolm MacDonald",        role: "UK High Commissioner",             year: "1955", image: "/leaders/malcolm-macdonald.jpg", summary: "Correspondence with the UK High Commissioner on matters related to business, governance, and the advancement of educational initiatives.", hasScan: true,  letterSrc: "/letters/malcolm-macdonald-1955.html" },
  { id: 11, name: "Sir C.V. Raman",           role: "Nobel Laureate & Scientist",       year: "1957", image: "/leaders/cv-raman.jpg",        summary: "One of the final correspondences by Dr. Alagappa Chettiar, written to Nobel Laureate Sir C.V. Raman, reflecting on science, research, and the future of CECRI.", hasScan: true,  letterSrc: "/letters/cv-raman-1957.html" },
];

const lettersTo = [
  { id: 1, name: "Mrs. Indira Gandhi",      role: "Congress Leader",                  year: "1956", image: "/leaders/indira-gandhi.jpg",   summary: "A letter from Mrs. Indira Gandhi, then a prominent Congress leader, appreciating Dr. Alagappa Chettiar's contributions to education and expressing support for his endeavours.", hasScan: false },
  { id: 2, name: "Pandit Jawaharlal Nehru", role: "Prime Minister of India",          year: "1945", image: "/leaders/nehru.jpg",           summary: "Prime Minister Nehru's letter acknowledging Dr. Alagappa Chettiar's generous contributions to national causes and his vision for establishing research institutions in India.", hasScan: false },
  { id: 3, name: "Dr. S. Radhakrishnan",   role: "Vice President of India",          year: "1956", image: "/leaders/radhakrishnan.jpg",   summary: "The Vice President's letter commending Dr. Alagappa Chettiar for his selfless dedication to the cause of education and scientific research in India.", hasScan: false },
  { id: 4, name: "Dr. Rajendra Prasad",    role: "President of India",               year: "1956", image: "/leaders/rajendra-prasad.jpg", summary: "A letter from the President of India praising Dr. Alagappa Chettiar's institution-building efforts and their positive impact on the nation's educational landscape.", hasScan: false },
  { id: 5, name: "G.D. Birla",             role: "Industrialist & Philanthropist",   year: "1955", image: "/leaders/gd-birla.jpg",        summary: "Correspondence from the renowned industrialist G.D. Birla, recognizing Dr. Alagappa Chettiar as a fellow visionary in using industrial wealth for the betterment of society through education.", hasScan: false },
  { id: 6, name: "K.M. Munshi",            role: "Lawyer, Politician & Educationist",year: "1955", image: "/leaders/km-munshi.jpg",       summary: "A letter from K.M. Munshi acknowledging the remarkable achievements of Dr. Alagappa Chettiar in the field of education and national service.", hasScan: true,  letterSrc: "/letters/km-munshi-1955.html" },
];

const distinguishedPersonalities = [
  { id: 1,  name: "Pandit Jawaharlal Nehru",  role: "Prime Minister of India",          year: "1946", description: "India's first Prime Minister laid the foundation stone for CECRI in 1948, acknowledging Dr. Alagappa Chettiar's extraordinary contribution to scientific research and education in India.", image: "/leaders/nehru.jpg" },
  { id: 2,  name: "Dr. S. Radhakrishnan",     role: "Vice President of India",          year: "1955", description: "The philosopher-statesman inaugurated CECRI in 1953 and maintained a deep admiration for Dr. Alagappa Chettiar's selfless dedication to the advancement of science and education.", image: "/leaders/radhakrishnan.jpg" },
  { id: 3,  name: "Dr. Rajendra Prasad",      role: "President of India",               year: "1955", description: "The President of India laid the foundation stone for A.C. College of Technology in 1953, recognizing Dr. Alagappa Chettiar's vision for technical education in the country.", image: "/leaders/rajendra-prasad.jpg" },
  { id: 4,  name: "Mrs. Indira Gandhi",       role: "Prime Minister of India",          year: "1956", description: "Then a prominent Congress leader, Mrs. Gandhi corresponded with Dr. Alagappa Chettiar, appreciating his educational endeavours and their impact on nation-building.", image: "/leaders/indira-gandhi.jpg" },
  { id: 5,  name: "K. Kamaraj",              role: "Chief Minister of Madras",         year: "1955", description: "The beloved leader of Tamil Nadu shared Dr. Alagappa Chettiar's passion for accessible education and collaborated on initiatives to expand educational opportunities across the state.", image: "/leaders/kamaraj.jpg" },
  { id: 6,  name: "C. Rajagopalachari",      role: "Chief Minister of Madras",         year: "1952", description: "Rajaji, the last Governor-General of India, held Dr. Alagappa Chettiar in high regard for his contributions to education and exchanged views on governance and institutional development.", image: "/leaders/rajaji.jpg" },
  { id: 7,  name: "K. Hanumanthaiya",        role: "Chief Minister of Mysore",         year: "1953", description: "The Chief Minister of Mysore engaged with Dr. Alagappa Chettiar on matters of educational expansion and the role of private philanthropy in supporting public institutions.", image: "/leaders/hanumanthaiya.jpg" },
  { id: 8,  name: "Gopala Reddi",            role: "Chief Minister of Andhra Pradesh", year: "1956", description: "Corresponded with Dr. Alagappa Chettiar on educational development and collaboration between the southern states in building academic institutions.", image: "/leaders/gopala-reddi.jpg" },
  { id: 9,  name: "Rajkumari Amrit Kaur",    role: "Minister for Health, India",       year: "1953", description: "India's first Health Minister appreciated Dr. Alagappa Chettiar's philanthropic work in healthcare, including the establishment of the maternity hospital for the community.", image: "/leaders/amrit-kaur.jpg" },
  { id: 10, name: "Sir C.V. Raman",          role: "Nobel Laureate & Scientist",       year: "1957", description: "The Nobel Prize-winning physicist shared a mutual respect with Dr. Alagappa Chettiar, united by their commitment to advancing scientific research and education in India.", image: "/leaders/cv-raman.jpg" },
  { id: 11, name: "Sir M. Visvesvaraya",     role: "Engineer & Bharat Ratna",         year: "1955", description: "The legendary engineer and statesman provided counsel to Dr. Alagappa Chettiar on engineering education and industrial development, recognizing a kindred spirit in institution-building.", image: "/leaders/visvesvaraya.jpg" },
  { id: 12, name: "G.D. Birla",             role: "Industrialist & Philanthropist",   year: "1955", description: "The renowned industrialist recognized Dr. Alagappa Chettiar as a fellow visionary who channeled industrial wealth into the betterment of society through education and research.", image: "/leaders/gd-birla.jpg" },
];

const historyTimeline = [
  { year: "1909",  title: "Birth of Dr. Alagappa Chettiar",            description: "Dr. Ramanathan Muthiah Alagappa Chettiar was born on April 6, 1909, in Kottaiyur, Sivaganga District, Tamil Nadu. From this modest village, he would rise to become one of India's greatest industrialists, educationists, and philanthropists." },
  { year: "1937",  title: "Founded Cochin Textiles",                    description: "Dr. Alagappa Chettiar established Cochin Textiles, marking the beginning of a vast business empire that would eventually span rubber plantations, tin mines, insurance, hotels, cinema theaters, and an airline." },
  { year: "1940s", title: "Established First Educational Institutions", description: "Driven by his belief that education was the foundation of national progress, Dr. Alagappa Chettiar began establishing educational institutions in Karaikudi and Chennai, laying the groundwork for what would become a comprehensive educational ecosystem." },
  { year: "1945",  title: "Knighted by British Government",             description: "In recognition of his exceptional achievements in industry and philanthropy, Dr. Alagappa Chettiar was knighted at the young age of 37. He would later renounce this title upon India's independence, choosing to stand with his newly free nation." },
  { year: "1948",  title: "CECRI Foundation Stone with Nehru",          description: "Prime Minister Pandit Jawaharlal Nehru laid the foundation stone for the Central Electrochemical Research Institute (CECRI) on July 25, 1948. Dr. Alagappa Chettiar donated 300 acres of land and Rs. 15 lakhs for this national research institute." },
  { year: "1953",  title: "CECRI Opened; AC Tech Foundation Stone",     description: "A landmark year: CECRI was formally opened by Vice President Dr. S. Radhakrishnan on January 14. On February 19, President Dr. Rajendra Prasad laid the foundation stone for A.C. College of Technology, one of India's premier engineering institutions." },
  { year: "1957",  title: "Padma Bhushan; Passing of the Founder",      description: "Dr. Alagappa Chettiar received the Padma Bhushan on January 26, 1957, in recognition of his extraordinary contributions. Tragically, he passed away on February 17, 1957, at the age of 48, leaving behind a legacy that continues to inspire generations." },
  { year: "1968",  title: "Mrs. Umayal Ramanathan's Generous Donation", description: "Carrying forward the family's tradition of philanthropy, Mrs. Umayal Ramanathan donated 450 acres of land to the government, ensuring the continued growth and expansion of educational and research institutions in the region." },
  { year: "1985",  title: "Alagappa University Established",            description: "Alagappa University was established in Karaikudi, fulfilling the founder's dream of a comprehensive university that would serve as a centre of academic excellence. The university has since grown into a renowned institution with diverse academic programmes." },
  { year: "1999",  title: "Alagappa Institute of Technology Established",description: "The Alagappa Institute of Technology was established, expanding the group's commitment to technical education and producing skilled engineers and technologists for the nation." },
  { year: "2005",  title: "Performing Arts Academy Founded",             description: "The Alagappa Performing Arts Academy was founded, reflecting the group's belief in the importance of arts and culture alongside academic and technical education, nurturing creativity and cultural heritage." },
  { year: "2018",  title: "Dr. Vairavan Receives Honorary Doctorate",   description: "Dr. Vairavan was honoured with an honorary doctorate, recognizing his dedicated service to the Alagappa institutions and his role in carrying forward the founder's vision of educational excellence into the modern era." },
];

const TAB_META = {
  profile:        { heading: "Founder's Profile",      sub: "The life and legacy of Dr. RM. Alagappa Chettiar" },
  speeches:       { heading: "Speeches",               sub: "The words that shaped a movement" },
  correspondence: { heading: "Correspondence",          sub: "Letters and official communications of the Founder" },
  leaders:        { heading: "Leaders & Dignitaries",  sub: "Tributes from statesmen who witnessed his work" },
  history:        { heading: "History",                sub: "A timeline of an extraordinary life" },
};

const subNavItems = [
  { label: "Profile",              tab: "profile" },
  { label: "Speeches",             tab: "speeches" },
  { label: "Correspondence",       tab: "correspondence" },
  { label: "Leaders & Dignitaries",tab: "leaders" },
  { label: "History",              tab: "history" },
];

// ── Sub-component: LetterCard ────────────────────────────────────────────────

function LetterCard({ letter, onOpen }) {
  const [imgError, setImgError] = useState(false);
  const clickable = letter.hasScan;

  return (
    <div
      onClick={() => clickable && onOpen(letter)}
      style={{
        background: "#fff",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(26,58,107,0.10)",
        display: "flex",
        flexDirection: "column",
        cursor: clickable ? "pointer" : "default",
        opacity: clickable ? 1 : 0.68,
        transition: "transform 0.18s ease, box-shadow 0.18s ease",
        minHeight: "320px",
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
      <div style={{ background: "linear-gradient(160deg, #cce8ff 0%, #ddf0ff 100%)", flex: "0 0 52%", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: "130px", height: "130px", borderRadius: "50%", background: "rgba(74,158,255,0.15)" }} />
        {!imgError ? (
          <img src={letter.image ?? `/leaders/${letter.name.toLowerCase().replace(/[\s.]+/g, "-").replace(/[^a-z0-9-]/g, "")}.jpg`} alt={letter.name} onError={() => setImgError(true)} style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", border: "3px solid rgba(74,158,255,0.45)", position: "relative", zIndex: 1, boxShadow: "0 4px 16px rgba(26,58,107,0.18)" }} />
        ) : (
          <div style={{ width: "100px", height: "100px", borderRadius: "50%", background: "linear-gradient(135deg, #4a9eff33 0%, #1a3a6b22 100%)", border: "3px solid rgba(74,158,255,0.45)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1 }}>
            <span style={{ fontSize: "36px", fontWeight: 800, color: "#1a3a6b", opacity: 0.6 }}>{letter.name.charAt(0)}</span>
          </div>
        )}
        <div style={{ position: "absolute", top: "12px", right: "12px", fontSize: "10px", fontWeight: 700, color: "#1a3a6b", background: "rgba(74,158,255,0.22)", border: "1px solid rgba(74,158,255,0.35)", borderRadius: "20px", padding: "2px 9px", letterSpacing: "0.04em" }}>
          {letter.year}
        </div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "16px 18px 18px", gap: "14px" }}>
        <div>
          <div style={{ fontSize: "14px", fontWeight: 700, color: "#0a1628", lineHeight: 1.35, marginBottom: "5px" }}>{letter.name}</div>
          <div style={{ fontSize: "12px", color: "#4a9eff", fontWeight: 600, lineHeight: 1.4, marginBottom: "6px" }}>{letter.role}</div>
          <div style={{ fontSize: "12px", color: "#8a9ab5", lineHeight: 1.65, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{letter.summary}</div>
        </div>
        {clickable ? (
          <button onClick={(e) => { e.stopPropagation(); onOpen(letter); }} style={{ width: "100%", padding: "10px 0", borderRadius: "8px", border: "none", background: "linear-gradient(90deg, #0a1628 0%, #1a3a6b 100%)", color: "#fff", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", transition: "opacity 0.15s ease" }} onMouseEnter={(e) => e.currentTarget.style.opacity = "0.88"} onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}>View Letter</button>
        ) : (
          <div style={{ width: "100%", padding: "10px 0", borderRadius: "8px", background: "rgba(26,58,107,0.07)", color: "#b0bcc8", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "center" }}>Not Available</div>
        )}
      </div>
    </div>
  );
}

// ── Sub-component: LeaderCard ────────────────────────────────────────────────

function LeaderCard({ person }) {
  const [imgError, setImgError] = useState(false);
  const imageSrc = person.image || (person.name ? `/leaders/${person.name.toLowerCase().replace(/[\s.]+/g, "-").replace(/[^a-z0-9-]/g, "")}.jpg` : null);

  return (
    <div style={{ background: "#fff", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(26,58,107,0.10)", display: "flex", flexDirection: "column", minHeight: "320px", transition: "transform 0.18s ease, box-shadow 0.18s ease" }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 14px 32px rgba(26,58,107,0.16)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(26,58,107,0.10)"; }}>
      <div style={{ background: "linear-gradient(160deg, #cce8ff 0%, #ddf0ff 100%)", flex: "0 0 52%", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: "130px", height: "130px", borderRadius: "50%", background: "rgba(74,158,255,0.15)" }} />
        {!imgError && imageSrc ? (
          <img src={imageSrc} alt={person.name} onError={() => setImgError(true)} style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", border: "3px solid rgba(74,158,255,0.45)", position: "relative", zIndex: 1, boxShadow: "0 4px 16px rgba(26,58,107,0.18)" }} />
        ) : (
          <div style={{ width: "100px", height: "100px", borderRadius: "50%", background: "linear-gradient(135deg, #4a9eff33 0%, #1a3a6b22 100%)", border: "3px solid rgba(74,158,255,0.45)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1 }}>
            <span style={{ fontSize: "36px", fontWeight: 800, color: "#1a3a6b", opacity: 0.6 }}>{person.name ? person.name.charAt(0) : "?"}</span>
          </div>
        )}
        {person.year && <div style={{ position: "absolute", top: "12px", right: "12px", fontSize: "10px", fontWeight: 700, color: "#1a3a6b", background: "rgba(74,158,255,0.22)", border: "1px solid rgba(74,158,255,0.35)", borderRadius: "20px", padding: "2px 9px", letterSpacing: "0.04em" }}>{person.year}</div>}
      </div>
      <div style={{ flex: 1, padding: "16px 18px 20px", display: "flex", flexDirection: "column", gap: "6px" }}>
        <div style={{ fontSize: "14px", fontWeight: 700, color: "#0a1628", lineHeight: 1.35 }}>{person.name}</div>
        <div style={{ fontSize: "12px", color: "#4a9eff", fontWeight: 600, lineHeight: 1.4 }}>{person.role}</div>
        <p style={{ fontSize: "12px", color: "#8a9ab5", lineHeight: 1.7, margin: "4px 0 0", display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{person.description}</p>
      </div>
    </div>
  );
}

// ── Sub-component: ProfileSection ────────────────────────────────────────────

function ProfileSection({ section, isLast }) {
  const IconComponent = section.icon;
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
  const [activeLetter, setActiveLetter] = useState(null);

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
                    <div style={{ background: "linear-gradient(90deg, #0a1628 0%, #1a3a6b 100%)", padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div><div style={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>{speech.title}</div><div style={{ fontSize: "11px", color: "#4a9eff", marginTop: "3px" }}>{speech.date}</div></div>
                      <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(74,158,255,0.18)", border: "1px solid rgba(74,158,255,0.35)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#4a9eff" viewBox="0 0 256 256"><path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" /></svg>
                      </div>
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
                      <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#4a5568", margin: 0 }}>{speech.description}</p>
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
        <>
          {activeLetter && (
            <div onClick={() => setActiveLetter(null)} style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(10,22,40,0.72)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
              <div onClick={(e) => e.stopPropagation()} style={{ background: "#fff", borderRadius: "16px", overflow: "hidden", width: "100%", maxWidth: "820px", maxHeight: "90vh", display: "flex", flexDirection: "column", boxShadow: "0 24px 64px rgba(10,22,40,0.35)" }}>
                <div style={{ background: "linear-gradient(90deg, #0a1628 0%, #1a3a6b 100%)", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div><div style={{ fontSize: "15px", fontWeight: 700, color: "#fff" }}>{activeLetter.name}</div><div style={{ fontSize: "12px", color: "#4a9eff" }}>{activeLetter.role} • {activeLetter.year}</div></div>
                  <button onClick={() => setActiveLetter(null)} style={{ width: "34px", height: "34px", borderRadius: "50%", border: "1px solid rgba(74,158,255,0.35)", background: "rgba(74,158,255,0.12)", color: "#4a9eff", fontSize: "18px", cursor: "pointer" }}>×</button>
                </div>
                <iframe src={activeLetter.letterSrc} title={`Letter — ${activeLetter.name}`} style={{ flex: 1, border: "none", minHeight: "520px", background: "#fafafa" }} />
              </div>
            </div>
          )}
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
                <div className="correspondence-grid">{lettersBy.map((letter) => <LetterCard key={letter.id} letter={letter} onOpen={setActiveLetter} />)}</div>
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "8px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "linear-gradient(135deg, #0a1628, #1a3a6b)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4a9eff" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,96.36L46.37,64H209.63ZM98.32,128,40,181.05V74.9Zm11.87,10.79,13.17,11.95a8,8,0,0,0,10.68,0l13.17-11.95L209,192H47ZM157.68,128,216,74.9v106.15Z" /></svg>
                  </div>
                  <div><h2 style={{ fontSize: "20px", fontWeight: 800, color: "#0a1628", margin: 0 }}>Letters to Dr. Alagappa Chettiar</h2><p style={{ fontSize: "13px", color: "#7a8fa6", margin: "3px 0 0" }}>Letters received from national leaders.</p></div>
                </div>
                <div style={{ width: "100%", height: "1px", background: "rgba(26,58,107,0.1)", margin: "20px 0 24px" }} />
                <div className="correspondence-grid">{lettersTo.map((letter) => <LetterCard key={letter.id} letter={letter} onOpen={setActiveLetter} />)}</div>
              </div>
            </div>
            <style>{`
              .correspondence-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; }
              @media (max-width: 560px) { .correspondence-grid { grid-template-columns: 1fr; } }
            `}</style>
          </section>
        </>
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