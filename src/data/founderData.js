// Founder Page Data
// All static content for the Founder page (profile, speeches, correspondence,
// leaders & dignitaries, and history timeline) lives here so the component
// file only contains layout/markup logic.

export const founderMeta = {
  name: "Padma Bhushan Dr. RM. Alagappa Chettiar",
  credentials: "M.A., D.Litt., LL.D., Barrister-at-Law",
  tagline: "Philanthropist · Educationalist · Visionary",
  born: "6th April 1909",
  died: "1957",
  birthPlace: "Kottaiyur, Sivaganga District, Tamil Nadu",
  image: "/Management/AlagappaChettiarSketch.png",
  // image: "/Management/AlagappaChettiar.jpeg",
  highlights: [
    { label: "Institutions Founded", value: "18+" },
    { label: "Alumni Produced", value: "30L+" },
    { label: "Acres Donated", value: "1,000+" },
    { label: "Years of Legacy", value: "75+" },
  ],
};

// NOTE: `icon` values below are plain string keys (e.g. "User", "GraduationCap")
// rather than component references, since data files shouldn't import UI
// libraries. Map these to the actual phosphor-react icons in the component
// file, e.g.:
//   import { User, GraduationCap, Briefcase, Medal, Books, Handshake, Lightbulb, Flag, Gift } from "phosphor-react";
//   const ICONS = { User, GraduationCap, Briefcase, Medal, Books, Handshake, Lightbulb, Flag, Gift };
//   const IconComponent = ICONS[section.icon];
export const founderSections = [
  {
    key: "birth",
    label: "Birth",
    icon: "User",
    type: "text",
    content:
      "Born on 6th April 1909 in Kottaiyur, Sivaganga District, Tamil Nadu, into the illustrious Nattukotai Chettiar community — renowned across South and Southeast Asia for commerce, banking, and civic spirit.",
  },
  {
    key: "education",
    label: "Education",
    icon: "GraduationCap",
    type: "list",
    items: [
      "M.A. in Literature, Presidency College, Madras",
      "Barrister-at-Law, Temple, England",
    ],
  },
  {
    key: "business",
    label: "Business Acumen",
    icon: "Briefcase",
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
    icon: "Medal",
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
    icon: "Books",
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
    icon: "Handshake",
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
    icon: "Lightbulb",
    type: "text",
    content:
      'Dr. Alagappa Chettiar convinced Prime Minister Nehru to house a National Research Institute within the Alagappa campus. His magnificent gift of 300 acres of land and ₹15 Lakhs enabled the Government of India to establish the Central Electro Chemical Research Institute (CECRI) at Karaikudi, inaugurated on 14 January 1953. As Vice President Dr. S. Radhakrishnan remarked at the opening: "Being a businessman himself, Dr. Alagappa Chettiar is aware of the industrial possibilities of our country and the need for scientific, technical and technological education. In his lifetime he has built a monument for himself — you have only to look around."',
  },
  {
    key: "patriot",
    label: "A Patriot",
    icon: "Flag",
    type: "text",
    content:
      "A patriot to the core, Dr. Alagappa Chettiar actively supported Mahatma Gandhi's Satyagraha movement. He lent his fleet of aircraft from Jupiter Airways to the Government of India for lifting troops during Hyderabad's integration — never flinching even when some of his planes crashed in their mission.",
  },
  {
    key: "philanthropy",
    label: "Philanthropy",
    icon: "Gift",
    type: "text",
    content:
      'When he passed away prematurely at age 48, Dr. Alagappa Chettiar had redefined philanthropy and contributed more to the betterment of education in Tamil Nadu than any other person of eminence. His crowning act of giving was donating his own personal residence in Kottaiyur to found a Women\'s College. As Rajaji observed: "Dr. Alagappa Chettiar had given away freely. Students should develop that quality — cultivate courage and emulate the spirit of Dr. Alagappa Chettiar."',
  },
];

export const audioSpeeches = [
  {
    id: 1,
    title: "Last Speech to Engineering Students",
    date: "February 15, 1957",
    description:
      "Dr. Alagappa Chettiar's final address to engineering students, delivered just two days before his passing. In this moving speech, he urged the young engineers to dedicate their skills to the service of the nation and its people.",
    audioSrc: "/audio/lastspeech.mp3",
  },
  {
    id: 2,
    title: "College Day at Teacher's Training College",
    date: "February 18, 1955",
    description:
      "An inspiring address delivered during the annual College Day celebrations at the Alagappa Teacher's Training College, where he spoke about the sacred duty of educators in shaping the future of India.",
    audioSrc: "/audio/collegeday.mp3",
  },
  {
    id: 3,
    title: "Foundation Stone for Hobby Centre",
    date: "October 9, 1955",
    description:
      "Speech delivered at the laying of the foundation stone for the Hobby Centre, reflecting Dr. Alagappa Chettiar's belief in holistic education that nurtures creativity and extracurricular pursuits alongside academics.",
    audioSrc: "/audio/hobbycenter.mp3",
  },
  {
    id: 4,
    title: 'Ode to Founder — "Vallal Vazhthu"',
    date: "Tribute",
    description:
      "A tribute composition dedicated to Dr. Alagappa Chettiar, celebrating his vision, generosity, and the lasting impact of his contributions to education and society.",
    audioSrc: "/audio/VallalVazhthu.mp3",
  },
];

// NOTE: `docSrc` is the path to a downloadable file (PDF/DOCX/TXT) for each
// written speech. Update these paths to match wherever the actual documents
// are hosted — they currently follow the same folder convention as /audio.
export const writtenSpeeches = [
  {
    id: 1,
    title: "CECRI Foundation Stone Ceremony",
    date: "July 25, 1948",
    description:
      "Address at the laying of the foundation stone for the Central Electrochemical Research Institute (CECRI) at Karaikudi, in the distinguished presence of Prime Minister Pandit Jawaharlal Nehru. Dr. Alagappa Chettiar spoke of his vision for advancing scientific research in India and the importance of self-reliance in technology.",
    docSrc: "/transcripts/cecri-foundation-stone-ceremony.html",
  },
  {
    id: 2,
    title: "CECRI Opening Ceremony",
    date: "January 14, 1953",
    description:
      "Speech delivered at the formal opening of CECRI, graced by the presence of Vice President Dr. S. Radhakrishnan. Dr. Alagappa Chettiar reflected on the journey from the laying of the foundation stone to the realization of a world-class research facility.",
    docSrc: "/transcripts/cecri-opening-ceremony.html",
  },
  {
    id: 3,
    title: "A.C. College of Technology Foundation Ceremony",
    date: "February 19, 1953",
    description:
      "Address at the foundation stone laying ceremony of A.C. College of Technology, in the presence of President Dr. Rajendra Prasad. This speech outlined Dr. Alagappa Chettiar's commitment to technical education as a cornerstone of national development.",
    docSrc: "/transcripts/ac-college-of-technology-foundation-ceremony.html",
  },
  {
    id: 4,
    title: "Madras University Convocation Address",
    date: "August 18, 1954",
    description:
      "A distinguished convocation address at the University of Madras, where Dr. Alagappa Chettiar shared his thoughts on the role of universities in fostering innovation, character, and national progress.",
    docSrc: "/transcripts/madras-university-convocation-address.html",
  },
  {
    id: 5,
    title: "Messages Regarding Dr. S.S. Bhatnagar's Demise",
    date: "June 6, 1955",
    description:
      "Heartfelt messages penned by Dr. Alagappa Chettiar on the passing of Dr. Shanti Swarup Bhatnagar, the eminent scientist and founding Director-General of CSIR, with whom he had shared a deep bond over the establishment of CECRI.",
    docSrc: "/transcripts/messages-bhatnagar-demise.html",
  },
  {
    id: 6,
    title: "Final Speech to Engineering Students",
    date: "February 15, 1957",
    description:
      "The written transcript of Dr. Alagappa Chettiar's last public address, delivered to engineering students. His parting words encapsulated his lifelong belief in the transformative power of education and the responsibility of the educated to serve society.",
    docSrc: "/transcripts/final-speech-engineering-students.html",
  },
];

// ── Updated correspondence data for FounderData.js ──────────────────────────
// Replace the existing `lettersBy`, `lettersTo`, and `CATEGORY_ORDER` exports
// in FounderData.js with the versions below. Categories now match the real
// site grouping (Prime Ministers & Presidents / Chief Ministers /
// MPs & Ministers / Others) consistently across both arrays.

export const lettersBy = [
  // ── Prime Ministers & Presidents ──
  { id: 1,  name: "Pandit Jawaharlal Nehru",   role: "Former Prime Minister of India",              year: "1946", category: "Prime Ministers & Presidents", image: "/Correspondance/jawaharlalnehru.jpg",              summary: "Dr. Alagappa Chettiar wrote to Prime Minister Nehru regarding his vision for establishing a national-level research institute and his commitment to furthering the cause of scientific research in India.", hasScan: true, letterSrc: "/letters/By/jawaharlalNehru.html" },
  { id: 2,  name: "Dr. S. Radhakrishnan",      role: "Former Vice President of the Republic of India", year: "1955", category: "Prime Ministers & Presidents", image: "/Correspondance/radhakrishnana.jpg",    summary: "Correspondence with the Vice President of India discussing the progress of CECRI and the expanding scope of educational institutions in Karaikudi.", hasScan: true, letterSrc: "/letters/By/Radhakrishnan.html" },
  { id: 3,  name: "Dr. Rajendra Prasad",       role: "Former President of India",                    year: "1955", category: "Prime Ministers & Presidents", image: "/Correspondance/rajendraprasad.jpg",  summary: "A letter to the President of India updating him on the developments at the Alagappa educational institutions and inviting his continued patronage and guidance.", hasScan: true, letterSrc: "/letters/By/RajendraPrasad.html" },

  // ── Chief Ministers ──
  { id: 4,  name: "Mr. Gopala Reddi",          role: "Former Chief Minister, Andhra State Kurnool",  year: "1956", category: "Chief Ministers", image: "/Correspondance/gopala-reddi.jpg",     summary: "Correspondence with the Chief Minister of Andhra State discussing educational development and collaboration across the southern states.", hasScan: true, letterSrc: "/letters/By/GopalaReddi.html" },
  { id: 5,  name: "Mr. K. Hanumanthaiya",      role: "Former Chief Minister of Mysore",              year: "1953", category: "Chief Ministers", image: "/Correspondance/hanumanthaiya.jpg",    summary: "Letter to the Chief Minister of Mysore on matters pertaining to educational expansion and the role of industry in supporting academic institutions.", hasScan: true, letterSrc: "/letters/By/Hanumanthaiya.html" },
  { id: 6,  name: "Mr. K. Kamaraj",            role: "Former Chief Minister",                        year: "1955", category: "Chief Ministers", image: "/Correspondance/kamarajar.jpg",          summary: "Correspondence with the Chief Minister of Madras regarding educational policy, institutional development, and making quality education accessible to all.", hasScan: true, letterSrc: "/letters/By/Kamaraj.html" },
  { id: 7,  name: "Mr. C. Rajagopalachari",    role: "Former Chief Minister of Madras",              year: "1952", category: "Chief Ministers", image: "/Correspondance/rajagopalachari.jpg",           summary: "A letter to the former Chief Minister of Madras exchanging views on education, governance, and the future of the nation.", hasScan: true, letterSrc: "/letters/By/Rajagopalachari.html" },
  { id: 8,  name: "Mr. Balasaheb Gangadhar Kher", role: "Former First Chief Minister of India",      year: "1955", category: "Chief Ministers", image: "/Correspondance/BalasahebGangadharKher.jpg",          summary: "Correspondence with India's first Chief Minister on the growth of educational institutions under the Alagappa trust.", hasScan: false },

  // ── MPs & Ministers ──
  { id: 9,  name: "Rajkumari Amrit Kaur",      role: "Former Minister for Health",                   year: "1953", category: "MPs & Ministers", image: "/Correspondance/RajkumariAmrit.jpg",       summary: "Correspondence with India's first Minister for Health discussing the establishment of the maternity hospital and healthcare facilities in the Karaikudi region.", hasScan: true, letterSrc: "/letters/By/RajkumariAmrit.html" },
  { id: 10, name: "Mr. T. S. Avinasilingam Chettiar", role: "Former MP",                            year: "1954", category: "MPs & Ministers", image: "/Correspondance/Avinasilingam.jpg", summary: "A letter to the Member of Parliament discussing educational initiatives and their impact on the Karaikudi region.", hasScan: true, letterSrc: "/letters/By/AvinasilingamChettiar.html" },
  { id: 11, name: "Dr. S. S. Batnagar",        role: "Former Secretary, Ministry of Natural Resources & Scientific Research", year: "1954", category: "MPs & Ministers", image: "/leaders/ss-batnagar.jpg", summary: "Correspondence regarding scientific research collaboration and the establishment of CECRI.", hasScan: true, letterSrc: "/letters/By/Bhatnagar.html" },
  { id: 12, name: "Mr. Deshmukh",              role: "Former Minister for Finance",                  year: "1953", category: "MPs & Ministers", image: "/leaders/deshmukh.jpg",         summary: "A letter to the Finance Minister discussing funding and financial support for educational institutions.", hasScan: true, letterSrc: "/letters/By/Deshmukh.html" },
  { id: 13, name: "Mr. M. Bhaktavatchalam",    role: "Former Ministry for Agriculture",              year: "1956", category: "MPs & Ministers", image: "/leaders/m-bhaktavatchalam.jpg", summary: "Correspondence touching on agricultural development alongside educational expansion in the region.", hasScan: true, letterSrc: "/letters/By/Bhatavasalam.html" },
  { id: 14, name: "Mr. Humayun Kabir",         role: "Former Ministry of Education",                 year: "1956", category: "MPs & Ministers", image: "/leaders/humayun-kabir.jpg",    summary: "A letter to the Ministry of Education discussing policy and institutional growth of the Alagappa institutions.", hasScan: true, letterSrc: "/letters/By/HumayunKabir.html" },
  { id: 15, name: "Mr. Nityananda Kanungo",    role: "Former Minister for Consumer Industries",      year: "1956", category: "MPs & Ministers", image: "/leaders/nityananda-kanungo.jpg", summary: "Correspondence on industrial development and its relationship to technical education.", hasScan: true, letterSrc: "/letters/By/NityanandaKanungo.html" },
  { id: 16, name: "Mr. Rafi Ahemed Kidwai",    role: "Former Minister for Food and Agriculture",     year: "1953", category: "MPs & Ministers", image: "/leaders/rafi-ahemed-kidwai.jpg", summary: "A letter discussing national development priorities and the role of education therein.", hasScan: true, letterSrc: "/letters/By/ShriSardaSwaranSingh.html" },
  { id: 17, name: "Mr. K. C. Reddi",           role: "Former Minister for Production",               year: "1956", category: "MPs & Ministers", image: "/Correspondance/Reddi.jpg",         summary: "Correspondence regarding industrial production and its links to technical education initiatives.", hasScan: true, letterSrc: "https://alagappa.org/letters/index/letter41" },
  { id: 18, name: "Mr. K. C. Saiyidain",       role: "Former Secretary, Ministry of Education",      year: "1956", category: "MPs & Ministers", image: "/Correspondance/Saiyidain.jpg",     summary: "A letter to the Education Secretary on the expansion of the Alagappa educational institutions.", hasScan: true, letterSrc: "https://alagappa.org/letters/index/letter42" },
  { id: 19, name: "Mr. H. Sitarama Reddiar",   role: "Former Minister for Industries",               year: "1948", category: "MPs & Ministers", image: "/Correspondance/h-sitarama-reddiar.jpg", summary: "Correspondence on industrial policy in the early years of the Alagappa institutions.", hasScan: true, letterSrc: "/letters/By/SitaramReddiar.html" },
  { id: 20, name: "Mr. Swaran Singh",          role: "Former Minister for Works, Housing & Supply",  year: "1955", category: "MPs & Ministers", image: "/Correspondance/SardarSwaranSingh.jpg",     summary: "A letter discussing infrastructure and campus development for the growing institutions.", hasScan: true, letterSrc: "/letters/By/ShriSardaSwaranSingh.html" },

  // ── Others ──
  { id: 21, name: "Mr. R. P. Bahadur",         role: "Former Secretary, Council of Scientific & Industrial Research", year: "1955", category: "Others", image: "/Correspondance/rp-bahadur.jpg", summary: "Correspondence regarding scientific research collaboration under CSIR.", hasScan: true, letterSrc: "/letters/By/Bahadur.html" },
  { id: 22, name: "Sir M. A. Chidambaram Chettiar", role: "Former Mayor of Madras",                 year: "1954", category: "Others", image: "/Correspondance/ChidambaramChettiar.jpg", summary: "A letter to the Mayor of Madras discussing civic and educational matters.", hasScan: true, letterSrc: "/letters/By/ChidambaramChettiar.html" },
  { id: 23, name: "Mr. K. G. Devarajulu",      role: "",                                              year: "1955", category: "Others", image: "/Correspondance/Devarajulu.jpg",   summary: "Correspondence on institutional matters relating to the Alagappa trust.", hasScan: true, letterSrc: "/letters/By/Devarajulu.html" },
  { id: 24, name: "Mr. Sa. Ganeshan",          role: "",                                              year: "1948", category: "Others", image: "/Correspondance/Ganesan.jpg",     summary: "An early letter discussing the founding vision of the Alagappa institutions.", hasScan: true, letterSrc: "/letters/By/Ganesan.html" },
  { id: 25, name: "Mr. T. N. Jagadisan",       role: "",                                              year: "",     category: "Others", image: "/Correspondance/Jagadesan.jpg",    summary: "Correspondence touching on educational and institutional development.", hasScan: true, letterSrc: "/letters/By/Jagadesan.html" },
  { id: 26, name: "Mr. V. T. Krishnamachari",  role: "Former Deputy Chairman, Planning Commission",  year: "1956", category: "Others", image: "/Correspondance/vt-krishnamachari.jpg", summary: "A letter to the Deputy Chairman of the Planning Commission discussing national development planning and education.", hasScan: true, letterSrc: "/letters/By/Krishnamachariar.html" },
  { id: 27, name: "Dr. U. Krishna Rau",        role: "",                                              year: "1955", category: "Others", image: "/Correspondance/u-krishna-rau.jpg",   summary: "Correspondence relating to the growth of the Alagappa educational institutions.", hasScan: true, letterSrc: "/letters/By/KrishnaRau.html" },
  { id: 28, name: "Lady Venkatasubba Rao",     role: "",                                              year: "1956", category: "Others", image: "/Correspondance/venkatasubba-rao.jpg", summary: "A letter discussing social and educational initiatives in the region.", hasScan: true, letterSrc: "/letters/By/VenkatasubbaRai.html" },
  { id: 29, name: "Mr. K. P. Madhavan Nair",   role: "Former Secretary, Indian National Congress",   year: "1956", category: "Others", image: "/Correspondance/kp-madhavan-nair.jpg", summary: "Correspondence with the Congress Secretary on matters of national and educational significance.", hasScan: true, letterSrc: "/letters/By/MadhavanNair.html" },
  { id: 30, name: "Mr. Malcolm MacDonald",     role: "Former High Commissioner for the United Kingdom", year: "1956", category: "Others", image: "/Correspondance/malcolm-macdonald.jpg", summary: "Correspondence with the UK High Commissioner on matters related to business, governance, and educational initiatives.", hasScan: true, letterSrc: "/letters/By/MalcolmMacDonald.html" },
  { id: 31, name: "Dr. S. G. Manavala Ramanujam", role: "Vice Chancellor, Annamalai University",     year: "1951", category: "Others", image: "/Correspondance/sg-manavala-ramanujam.jpg", summary: "A letter to the Vice Chancellor discussing academic collaboration between institutions.", hasScan: true, letterSrc: "/letters/By/Manavalaramanujam.html" },
  { id: 32, name: "Mr. T. V. S. Manian",       role: "",                                              year: "1951", category: "Others", image: "/Correspondance/tvs-manian.jpg",      summary: "Correspondence on institutional and academic matters.", hasScan: true, letterSrc: "/letters/By/Manian.html" },
  { id: 33, name: "Mr. K. P. S. Menon, I.C.S", role: "Former IAS",                                   year: "1957", category: "Others", image: "/Correspondance/kps-menon.jpg",       summary: "A letter to the senior civil servant discussing administrative support for the institutions.", hasScan: true, letterSrc: "/letters/By/KPSMenon.html" },
  { id: 34, name: "Mr. Munshi",                role: "Former Governor of Uttar Pradesh",             year: "1953", category: "Others", image: "/Correspondance/munshi-governor.jpg", summary: "Correspondence with the Governor of Uttar Pradesh on educational and cultural matters.", hasScan: true, letterSrc: "/letters/By/Munshi.html" },
  { id: 35, name: "Mr. K. M. Panikar",         role: "",                                              year: "1955", category: "Others", image: "/Correspondance/km-panikar.jpg",      summary: "A letter discussing educational and diplomatic matters of shared interest.", hasScan: true, letterSrc: "/letters/By/Panikar.html" },
  { id: 36, name: "Mr. G. B. Pant",            role: "",                                              year: "1957", category: "Others", image: "/Correspondance/gb-pant.jpg",         summary: "Correspondence touching on national policy and institutional development.", hasScan: true, letterSrc: "/letters/By/Pant.html" },
  { id: 37, name: "Mr. O. P. Ramasamy Reddiar", role: "Former Premier of Madras",                    year: "1948", category: "Others", image: "/Correspondance/op-ramasamy-reddiar.jpg", summary: "An early letter to the Premier of Madras on the founding of the Alagappa institutions.", hasScan: true, letterSrc: "/letters/By/RamaswamyReddiar.html" },
  { id: 38, name: "Sir C. V. Raman",           role: "Nobel Laureate & Scientist",                   year: "1957", category: "Others", image: "/Correspondance/cv-raman.jpg",        summary: "One of the final correspondences by Dr. Alagappa Chettiar, written to Nobel Laureate Sir C.V. Raman, reflecting on science, research, and the future of CECRI.", hasScan: true, letterSrc: "/letters/By/Raman.html" },
  { id: 39, name: "Dr. C. P. Ramaswami Iyer",  role: "",                                              year: "1953", category: "Others", image: "/Correspondance/cp-ramaswami-iyer.jpg", summary: "Correspondence on scientific and educational cooperation.", hasScan: true, letterSrc: "/letters/By/RamaswamiIyer.html" },
  { id: 40, name: "Mr. Samuel Mathai",         role: "Former Chairman, University Grants Commission", year: "1955", category: "Others", image: "/Correspondance/samuel-mathai.jpg",   summary: "A letter to the UGC Chairman discussing higher education standards and support.", hasScan: true, letterSrc: "/letters/By/SamuelMathai.html" },
  { id: 41, name: "Mr. Sri Prakasa",           role: "Former Governor of Madras",                    year: "1954", category: "Others", image: "/Correspondance/sri-prakasa.jpg",     summary: "Correspondence with the Governor of Madras on institutional development.", hasScan: true, letterSrc: "/letters/By/SriPrakasa.html" },
  { id: 42, name: "Mrs. Talyarkhan",           role: "",                                              year: "1957", category: "Others", image: "/Correspondance/talyarkhan.jpg",      summary: "A letter touching on social and philanthropic initiatives.", hasScan: true, letterSrc: "/letters/By/Talyarkhan.html" },
  { id: 43, name: "Prof. Thacker",             role: "Former Director, Council of Scientific & Industrial Research", year: "1956", category: "Others", image: "/Correspondance/thacker.jpg", summary: "Correspondence on scientific research collaboration under CSIR.", hasScan: true, letterSrc: "/letters/By/Thacker.html" },
  { id: 44, name: "Mr. C. V. T. V. Venkatachalam Chettiar", role: "",                                year: "1948", category: "Others", image: "/Correspondance/cv-venkatachalam-chettiar.jpg", summary: "An early letter discussing family and institutional matters.", hasScan: true, letterSrc: "/letters/By/Venkatachalam.html" },
  { id: 45, name: "Sir M. Visvesvaraya",       role: "Engineer & Bharat Ratna",                      year: "1955", category: "Others", image: "/Correspondance/visvesvaraya.jpg",     summary: "A letter to the legendary engineer and Bharat Ratna recipient, seeking his counsel on engineering education and industrial development.", hasScan: true, letterSrc: "/letters/By/Vivesvaraya.html" },
  { id: 46, name: "Sir William Robert Cockburn", role: "Former Director, Chartered Bank of India, Australia & China", year: "1955", category: "Others", image: "/Correspondance/wr-cockburn.jpg", summary: "Correspondence on banking and financial matters supporting institutional growth.", hasScan: true, letterSrc: "/letters/By/SirWilliamRobertCockburn.html" },
  { id: 47, name: "Sri Padmanabha Dasa Bala Rama Varma", role: "",                                    year: "1956", category: "Others", image: "/Correspondance/padmanabha-dasa-bala-rama-varma.jpg", summary: "Correspondence touching on regional and educational matters.", hasScan: false },
];

export const lettersTo = [
  // ── Prime Ministers & Presidents ──
  { id: 1, name: "Mrs. Indira Gandhi",       role: "Former Prime Minister of India",             year: "1956", category: "Prime Ministers & Presidents", image: "/Correspondance/indira-gandhi.jpg",    summary: "A letter from Mrs. Indira Gandhi, then a prominent Congress leader, appreciating Dr. Alagappa Chettiar's contributions to education and expressing support for his endeavours.", hasScan: true, letterSrc: "/letters/To/Indiragandhi.html" },
  { id: 2, name: "Pandit Jawaharlal Nehru",  role: "Former Prime Minister of India",             year: "1945", category: "Prime Ministers & Presidents", image: "/Correspondance/nehru.jpg",            summary: "Prime Minister Nehru's letter acknowledging Dr. Alagappa Chettiar's generous contributions to national causes and his vision for establishing research institutions in India.", hasScan: true, letterSrc: "/letters/To/jawaharlalNehru.html" },
  { id: 3, name: "Dr. S. Radhakrishnan",     role: "Former Vice President of the Republic of India", year: "1956", category: "Prime Ministers & Presidents", image: "/Correspondance/radhakrishnan.jpg", summary: "The Vice President's letter commending Dr. Alagappa Chettiar for his selfless dedication to the cause of education and scientific research in India.", hasScan: true, letterSrc: "/letters/To/Radhakrishnan.html" },
  { id: 4, name: "Dr. Rajendra Prasad",      role: "Former President of India",                  year: "1956", category: "Prime Ministers & Presidents", image: "/Correspondance/rajendra-prasad.jpg", summary: "A letter from the President of India praising Dr. Alagappa Chettiar's institution-building efforts and their positive impact on the nation's educational landscape.", hasScan: true, letterSrc: "/letters/To/RajendraPrasad.html" },

  // ── Chief Ministers ──
  { id: 5, name: "Mr. K. Hanumanthaiya",     role: "Former Chief Minister of Mysore",            year: "1953", category: "Chief Ministers", image: "/Correspondance/hanumanthaiya.jpg",   summary: "A letter from the Chief Minister of Mysore acknowledging Dr. Alagappa Chettiar's contributions to educational expansion.", hasScan: true, letterSrc: "/letters/To/Hanumanthaiya.html" },

  // ── Others ──
  { id: 6,  name: "Mr. G. D. Birla",          role: "Industrialist & Philanthropist",             year: "1955", category: "Others", image: "/Correspondance/gd-birla.jpg",        summary: "Correspondence from the renowned industrialist G.D. Birla, recognizing Dr. Alagappa Chettiar as a fellow visionary in using industrial wealth for the betterment of society through education.", hasScan: true, letterSrc: "/letters/To/Birla.html" },
  { id: 7,  name: "Collen Nye",               role: "",                                            year: "1948", category: "Others", image: "/Correspondance/collen-nye.jpg",      summary: "An early letter acknowledging Dr. Alagappa Chettiar's philanthropic and educational initiatives.", hasScan: true, letterSrc: "/letters/To/CollenNye.html" },
  { id: 8,  name: "Mr. Deshmukh",             role: "",                                            year: "1955", category: "Others", image: "/Correspondance/deshmukh.jpg",        summary: "A letter appreciating the institutional and financial groundwork laid by Dr. Alagappa Chettiar.", hasScan: true, letterSrc: "/letters/To/Deshmukh.html" },
  { id: 9,  name: "Edwin Mountbatten",        role: "Former President, Tuberculosis Association of India", year: "1948", category: "Others", image: "/Correspondance/edwin-mountbatten.jpg", summary: "Correspondence acknowledging Dr. Alagappa Chettiar's support for public health and philanthropic causes.", hasScan: true, letterSrc: "/letters/To/EdwinaMountbattan.html" },
  { id: 10, name: "H. M. R. Keyes",           role: "Former Governor of Orissa",                  year: "1956", category: "Others", image: "/Correspondance/hmr-keyes.jpg",       summary: "A letter from the Governor of Orissa commending Dr. Alagappa Chettiar's educational endeavours.", hasScan: true, letterSrc: "/letters/To/HMRKeyes.html" },
  { id: 11, name: "Dr. A. Lakshmanaswami Mudaliar", role: "",                                     year: "1952", category: "Others", image: "/Correspondance/a-lakshmanaswami-mudaliar.jpg", summary: "Correspondence recognizing Dr. Alagappa Chettiar's contributions to higher education.", hasScan: true, letterSrc: "/letters/To/Lakshmanaswami.html" },
  { id: 12, name: "K. R. K. Menon",           role: "",                                            year: "1953", category: "Others", image: "/Correspondance/krk-menon.jpg",       summary: "A letter acknowledging the growth of the Alagappa educational institutions.", hasScan: true, letterSrc: "/letters/To/KRKMenon.html" },
  { id: 13, name: "K. M. Munshi",             role: "Lawyer, Politician & Educationist",          year: "1954", category: "Others", image: "/Correspondance/km-munshi.jpg",       summary: "A letter from K.M. Munshi acknowledging the remarkable achievements of Dr. Alagappa Chettiar in the field of education and national service.", hasScan: true, letterSrc: "/letters/To/KMMunshi.html" },
  { id: 14, name: "K. M. Panikar",            role: "",                                            year: "1955", category: "Others", image: "/Correspondance/km-panikar.jpg",      summary: "Correspondence recognizing Dr. Alagappa Chettiar's diplomatic and educational contributions.", hasScan: true, letterSrc: "/letters/To/KMPanikar.html" },
  { id: 15, name: "Rajakumar of Mysore",      role: "",                                            year: "1956", category: "Others", image: "/Correspondance/rajakumar-of-mysore.jpg", summary: "A letter acknowledging Dr. Alagappa Chettiar's philanthropic work and institutional contributions.", hasScan: true, letterSrc: "/letters/To/Rajkumar.html" },
  { id: 16, name: "Sri C. Rajagopalachari",   role: "",                                            year: "1953", category: "Others", image: "/Correspondance/rajaji.jpg",          summary: "A letter from Rajaji recognizing Dr. Alagappa Chettiar's contributions to education and governance.", hasScan: true, letterSrc: "/letters/To/Rajagopalachari.html" },
  { id: 17, name: "Dr. C. P. Ramaswami Aiyer", role: "",                                           year: "1957", category: "Others", image: "/Correspondance/cp-ramaswami-aiyer.jpg", summary: "Correspondence commending Dr. Alagappa Chettiar's lifelong dedication to education and science.", hasScan: true, letterSrc: "/letters/To/RamaswamiAiyer.html" },
  { id: 18, name: "Mr. Samuel Mathai",        role: "",                                            year: "1955", category: "Others", image: "/Correspondance/samuel-mathai.jpg",   summary: "A letter acknowledging Dr. Alagappa Chettiar's contributions to higher education standards.", hasScan: true, letterSrc: "/letters/To/SamuelMathai.html" },
];

// Fixed display order for the four categories used across correspondence and
// leaders sections. Any entry without a matching category falls back to "Others".
export const CATEGORY_ORDER = ["Prime Ministers & Presidents", "Chief Ministers", "MPs & Ministers", "Others"];

export const distinguishedPersonalities = [
  { id: 1,  name: "Pandit Jawaharlal Nehru",  role: "Prime Minister of India",          year: "1946", category: "Prime Ministers", description: "India's first Prime Minister laid the foundation stone for CECRI in 1948, acknowledging Dr. Alagappa Chettiar's extraordinary contribution to scientific research and education in India.", image: "/leaders/nehru.jpg" },
  { id: 2,  name: "Dr. S. Radhakrishnan",     role: "Vice President of India",          year: "1955", category: "Others",          description: "The philosopher-statesman inaugurated CECRI in 1953 and maintained a deep admiration for Dr. Alagappa Chettiar's selfless dedication to the advancement of science and education.", image: "/leaders/radhakrishnan.jpg" },
  { id: 3,  name: "Dr. Rajendra Prasad",      role: "President of India",               year: "1955", category: "Others",          description: "The President of India laid the foundation stone for A.C. College of Technology in 1953, recognizing Dr. Alagappa Chettiar's vision for technical education in the country.", image: "/leaders/rajendra-prasad.jpg" },
  { id: 4,  name: "Mrs. Indira Gandhi",       role: "Prime Minister of India",          year: "1956", category: "Prime Ministers", description: "Then a prominent Congress leader, Mrs. Gandhi corresponded with Dr. Alagappa Chettiar, appreciating his educational endeavours and their impact on nation-building.", image: "/leaders/indira-gandhi.jpg" },
  { id: 5,  name: "K. Kamaraj",              role: "Chief Minister of Madras",         year: "1955", category: "Chief Ministers", description: "The beloved leader of Tamil Nadu shared Dr. Alagappa Chettiar's passion for accessible education and collaborated on initiatives to expand educational opportunities across the state.", image: "/leaders/kamaraj.jpg" },
  { id: 6,  name: "C. Rajagopalachari",      role: "Chief Minister of Madras",         year: "1952", category: "Chief Ministers", description: "Rajaji, the last Governor-General of India, held Dr. Alagappa Chettiar in high regard for his contributions to education and exchanged views on governance and institutional development.", image: "/leaders/rajaji.jpg" },
  { id: 7,  name: "K. Hanumanthaiya",        role: "Chief Minister of Mysore",         year: "1953", category: "Chief Ministers", description: "The Chief Minister of Mysore engaged with Dr. Alagappa Chettiar on matters of educational expansion and the role of private philanthropy in supporting public institutions.", image: "/leaders/hanumanthaiya.jpg" },
  { id: 8,  name: "Gopala Reddi",            role: "Chief Minister of Andhra Pradesh", year: "1956", category: "Chief Ministers", description: "Corresponded with Dr. Alagappa Chettiar on educational development and collaboration between the southern states in building academic institutions.", image: "/leaders/gopala-reddi.jpg" },
  { id: 9,  name: "Rajkumari Amrit Kaur",    role: "Minister for Health, India",       year: "1953", category: "MPs & Ministers", description: "India's first Health Minister appreciated Dr. Alagappa Chettiar's philanthropic work in healthcare, including the establishment of the maternity hospital for the community.", image: "/leaders/amrit-kaur.jpg" },
  { id: 10, name: "Sir C.V. Raman",          role: "Nobel Laureate & Scientist",       year: "1957", category: "Others",          description: "The Nobel Prize-winning physicist shared a mutual respect with Dr. Alagappa Chettiar, united by their commitment to advancing scientific research and education in India.", image: "/leaders/cv-raman.jpg" },
  { id: 11, name: "Sir M. Visvesvaraya",     role: "Engineer & Bharat Ratna",         year: "1955", category: "Others",          description: "The legendary engineer and statesman provided counsel to Dr. Alagappa Chettiar on engineering education and industrial development, recognizing a kindred spirit in institution-building.", image: "/leaders/visvesvaraya.jpg" },
  { id: 12, name: "G.D. Birla",             role: "Industrialist & Philanthropist",   year: "1955", category: "Others",          description: "The renowned industrialist recognized Dr. Alagappa Chettiar as a fellow visionary who channeled industrial wealth into the betterment of society through education and research.", image: "/leaders/gd-birla.jpg" },
];

// Empty categories are omitted.
export function groupByCategory(entries) {
  return CATEGORY_ORDER.map((category) => ({
    category,
    items: entries.filter((entry) => (entry.category ?? "Others") === category),
  })).filter((group) => group.items.length > 0);
}

export const historyTimeline = [
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

export const TAB_META = {
  profile:        { heading: "Founder's Profile",      sub: "The life and legacy of Dr. RM. Alagappa Chettiar" },
  speeches:       { heading: "Speeches",               sub: "The words that shaped a movement" },
  correspondence: { heading: "Correspondence",          sub: "Letters and official communications of the Founder" },
  leaders:        { heading: "Leaders & Dignitaries",  sub: "Tributes from statesmen who witnessed his work" },
  history:        { heading: "History",                sub: "A timeline of an extraordinary life" },
};

export const subNavItems = [
  { label: "Profile",              tab: "profile" },
  { label: "Speeches",             tab: "speeches" },
  { label: "Correspondence",       tab: "correspondence" },
  { label: "Leaders & Dignitaries",tab: "leaders" },
  { label: "History",              tab: "history" },
];