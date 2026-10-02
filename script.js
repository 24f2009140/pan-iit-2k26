// =====================================================
// PAN IIT AMARAVATI SUMMIT 2026 — Volunteer Reference
// script.js
// =====================================================
// Source legend:
//   "spreadsheet" — Guest/panel/RT spreadsheet  (HIGHEST authority)
//   "v12"         — V12 Programme Agenda
//   "screenshot"  — Event-app screenshot only
//   "brochure"    — Brochure                    (LOWEST authority)
// =====================================================

// ─── DIGNITARIES ──────────────────────────────────────────────────────────────

const dignitaries = [
  {
    name: "Sri Nara Chandrababu Naidu",
    designation: "Hon'ble Chief Minister",
    org: "Government of Andhra Pradesh",
    tags: ["Chief Minister", "CM Track", "CM Keynote 17:45–18:25", "Valedictory", "Gala Dinner Host — Day 1"],
    source: "v12"
  },
  {
    name: "Sri Nara Lokesh",
    designation: "Hon'ble Minister for ITE&C, HRD & RTGS",
    org: "Government of Andhra Pradesh",
    tags: ["Guest of Honour", "Inaugural Address 10:45–11:00"],
    source: "v12"
  },
  {
    name: "Sri Kinjarapu Ram Mohan Naidu",
    designation: "Union Minister of Civil Aviation",
    org: "Government of India",
    tags: ["Guest of Honour", "Central Minister", "Inaugural Address 11:00–11:05"],
    source: "v12"
  },
  {
    name: "Sri Prabhat Kumar, IRS",
    designation: "Chairman",
    org: "PanIIT Alumni India",
    tags: ["PanIIT Leadership", "Inaugural Address 10:10–10:15"],
    source: "v12"
  },
  {
    name: "Dr. Amitabh Ranjan",
    designation: "Vice Chairman",
    org: "PanIIT Alumni India",
    tags: [
      "PanIIT Leadership",
      "Welcome & Context Setting 09:00–09:05",
      "Inaugural Closing Remarks 11:05–11:08",
      "Vote of Thanks & Closing (Valedictory) 18:30–18:32",
      "IIT Directors' Conclave"
    ],
    source: "spreadsheet"
  },
  {
    name: "Sri Swadeep Pillarisetti",
    designation: "Chair, PanIIT Andhra Pradesh Summit 2026",
    org: "PanIIT",
    tags: ["Summit Chair", "Inaugural Address 10:05–10:10"],
    source: "v12"
  },
  {
    name: "Sri Rajesh Dasari",
    designation: "Co-Chair, PanIIT Andhra Pradesh Summit 2026",
    org: "PanIIT",
    tags: ["Summit Co-Chair", "Inaugural Closing 11:08–11:10"],
    source: "v12"
  },
  {
    name: "Sri Bhaskar Katamneni, IAS",
    designation: "Secretary, Department of ITE&C",
    org: "Government of Andhra Pradesh",
    tags: [
      "Inaugural Address 10:15–10:20",
      "Chair — Panel 2",
      "AI in Governance Talk 2 — Participant",
      "CXO Round Table"
    ],
    source: "spreadsheet"
  },
  {
    name: "Prof. K. N. Satyanarayana",
    designation: "Director",
    org: "IIT Tirupati",
    tags: ["Inaugural Address 10:20–10:25", "IIT Directors' Conclave"],
    source: "spreadsheet"
  },
  {
    name: "Prof. V. Kamakoti",
    designation: "Director",
    org: "IIT Madras",
    tags: ["Inaugural Address 10:25–10:30", "IIT Directors' Conclave"],
    source: "spreadsheet"
  },
  {
    name: "Sri Anand Kumar",
    designation: "MD",
    org: "STMicroelectronics India",
    tags: ["Industry Leaders Address (Inaugural) 10:30–10:35", "CXO Round Table"],
    source: "spreadsheet"
  },
  {
    name: "Sri Arvind Bansal",
    designation: "Co-Founder & CEO",
    org: "Continuum Energy",
    tags: ["Unicorn Founders Address (Inaugural) 10:35–10:40", "CXO Round Table"],
    source: "spreadsheet"
  },
  {
    name: "Smt. Vani Kola",
    designation: "MD",
    org: "Kalaari Capital",
    tags: ["VC Address (Inaugural) 10:40–10:45"],
    source: "v12"
  },
  {
    name: "Sri G. Surya Sai Praveenchand, IAS",
    designation: "TBC — designation not specified in supplied source",
    org: "TBC",
    tags: ["Chair — Panel 1", "Energy in the Age of AI"],
    source: "v12"
  },
  {
    name: "Sri G. Veerapandian, IAS",
    designation: "TBC — designation not specified in supplied source",
    org: "Government of Andhra Pradesh",
    tags: ["Chair — Panel 4", "BioValley / Health"],
    source: "v12"
  },
  {
    name: "Sri Budithi Rajsekhar, IAS",
    designation: "TBC — designation not specified in supplied source",
    org: "Government of Andhra Pradesh",
    tags: ["Chair — Panel 5", "Agri Tech / Farmers & Water Security"],
    source: "v12"
  },
  {
    name: "Dr. N. Yuvaraj, IAS",
    designation: "Secretary, Department of Industries & Commerce",
    org: "Government of Andhra Pradesh",
    tags: ["Chair — Panel 3", "Space, Aerospace & Defence Manufacturing", "CXO Round Table"],
    source: "spreadsheet"
  }
];

// ─── PANEL / TALK GUESTS ──────────────────────────────────────────────────────
// NOTES ON UNCONFIRMED ENTRIES:
// - Panel 2: Dr. Mallik Tatipamula — screenshot source only; not confirmed in spreadsheet.
// - Panel 3: Pankaj Akula — screenshot source only; not confirmed in spreadsheet for panel assignment.
// - Panel 5: Sri Venkateswar Rao — screenshot source only; not confirmed in spreadsheet.
// - Talk 1: Sri Adith Charlie, Sri Ganesh Kumar IAS, Sri Madhusudhanan Baskaran — screenshot only.
// These are marked unconfirmed: true and displayed with a warning badge.

const guests = [
  // ── Panel 1 — Energy in the Age of AI (09:05–09:55) ──────────────────────
  { name: "Sri Ankit Todi",            designation: "TBC",                                          org: "TBC",                         panel: "Panel 1", role: "Moderator",   topic: "Energy in the Age of AI",                              source: "v12" },
  { name: "Lalit Aggarwal",            designation: "Managing Director, India Region",               org: "Schlumberger India",           panel: "Panel 1", role: "Participant", topic: "Energy in the Age of AI",                              source: "spreadsheet" },
  { name: "Yolynd Lobo",              designation: "Director and Head of Government Affairs",        org: "Google Cloud India",           panel: "Panel 1", role: "Participant", topic: "Energy in the Age of AI",                              source: "spreadsheet" },
  { name: "Neeraj Agarwal",           designation: "President, Nuclear Power",                      org: "JSW Energy",                   panel: "Panel 1", role: "Participant", topic: "Energy in the Age of AI",                              source: "spreadsheet" },
  { name: "Dr. Vibha Dhawan",         designation: "Director General",                              org: "TERI",                         panel: "Panel 1", role: "Participant", topic: "Energy in the Age of AI",                              source: "spreadsheet" },
  { name: "Sachin Bhalla",            designation: "TBC",                                          org: "Schneider Electric India",      panel: "Panel 1", role: "Participant", topic: "Energy in the Age of AI",                              source: "v12" },

  // ── Panel 2 — Deep Tech in All Walks of Life; Product Perfection (11:15–12:05) ──
  { name: "Prof. Ganesh Ramakrishnan", designation: "TBC",                                          org: "TBC",                         panel: "Panel 2", role: "Moderator",   topic: "Deep Tech in All Walks of Life; Product Perfection",   source: "v12" },
  { name: "Sri A. Babu, IAS",          designation: "TBC",                                          org: "GoAP",                        panel: "Panel 2", role: "Co-Chair",    topic: "Deep Tech in All Walks of Life; Product Perfection",   source: "v12" },
  { name: "Dr. Amith Singhee",         designation: "Asia Pac CTO",                                 org: "IBM India and South Asia",    panel: "Panel 2", role: "Participant", topic: "Deep Tech in All Walks of Life; Product Perfection",   source: "spreadsheet" },
  { name: "Hitesh Garg",               designation: "India MD",                                     org: "NXP Semiconductors",          panel: "Panel 2", role: "Participant", topic: "Deep Tech in All Walks of Life; Product Perfection",   source: "spreadsheet" },
  { name: "Dr. Kamaljeet Singh",        designation: "Director General",                            org: "Semiconductor Laboratory (SCL)", panel: "Panel 2", role: "Participant", topic: "Deep Tech in All Walks of Life; Product Perfection", source: "spreadsheet" },
  { name: "Vatsal Shah",                designation: "Head of Amazon Web Services",                 org: "AWS",                         panel: "Panel 2", role: "Participant", topic: "Deep Tech in All Walks of Life; Product Perfection",   source: "spreadsheet" },
  { name: "Dr. Mallik Tatipamula",      designation: "CTO",                                         org: "Ericsson Silicon Valley",     panel: "Panel 2", role: "Participant", topic: "Deep Tech in All Walks of Life; Product Perfection",   source: "screenshot", unconfirmed: true },

  // ── Panel 3 — Space, Aerospace & Defence Manufacturing (12:10–13:00) ──────
  { name: "Sri Suyash Singh",           designation: "TBC",                                         org: "TBC",                         panel: "Panel 3", role: "Moderator",   topic: "Space, Aerospace & Defence Manufacturing",            source: "v12" },
  { name: "Arun Ramchandani",           designation: "Head",                                        org: "L&T Precision Engineering & Systems", panel: "Panel 3", role: "Participant", topic: "Space, Aerospace & Defence Manufacturing", source: "spreadsheet" },
  { name: "Yaram Vijay Kumar",          designation: "India MD",                                    org: "Honeywell Aerospace",         panel: "Panel 3", role: "Participant", topic: "Space, Aerospace & Defence Manufacturing",            source: "spreadsheet" },
  { name: "Dr. R. Balamurali Krishnan", designation: "TBC",                                         org: "NSTL / Naval Science & Technological Laboratory, DRDO", panel: "Panel 3", role: "Participant", topic: "Space, Aerospace & Defence Manufacturing", source: "v12" },
  { name: "Naga Bharath Daka",          designation: "Co-Founder & CTO",                            org: "Skyroot Aerospace",           panel: "Panel 3", role: "Participant", topic: "Space, Aerospace & Defence Manufacturing",            source: "spreadsheet" },
  { name: "Pankaj Akula",               designation: "Founder, MD & Chief Technologist",            org: "Aksi Aerospace Group",        panel: "Panel 3", role: "Participant", topic: "Space, Aerospace & Defence Manufacturing",            source: "screenshot", unconfirmed: true },

  // ── Panel 4 — BioValley: Health Access & Screening at Scale (13:50–14:40) ─
  { name: "Dr. Ramesh Hariharan",       designation: "CEO & Co-Founder",                            org: "Strand Life Sciences",        panel: "Panel 4", role: "Moderator",   topic: "BioValley — Health Access & Screening at Scale",      source: "spreadsheet" },
  { name: "Dr. Sujoy Kar",              designation: "Chief Medical Information Officer",            org: "Apollo Hospitals",            panel: "Panel 4", role: "Participant", topic: "BioValley — Health Access & Screening at Scale",      source: "spreadsheet" },
  { name: "Dr. Taslimarif Saiyed",      designation: "Director & CEO",                              org: "C-CAMP",                      panel: "Panel 4", role: "Participant", topic: "BioValley — Health Access & Screening at Scale",      source: "spreadsheet" },
  { name: "Aditya Kandoi",              designation: "Founder & CEO",                               org: "Redcliffe Labs",               panel: "Panel 4", role: "Participant", topic: "BioValley — Health Access & Screening at Scale",      source: "spreadsheet" },
  { name: "Dr. Mukesh Kumar Gupta",     designation: "Director",                                    org: "ICMR-National Institute for Pre-Clinical Research", panel: "Panel 4", role: "Participant", topic: "BioValley — Health Access & Screening at Scale", source: "v12" },

  // ── Panel 5 — Agri Tech — Farmers & Water Security (14:45–15:35) ──────────
  { name: "Prof. Arun Tangirala",       designation: "TBC",                                         org: "TBC",                         panel: "Panel 5", role: "Moderator",   topic: "Agri Tech — Farmers & Water Security",                source: "v12" },
  { name: "Dr. Giridhar Parvatam",      designation: "Director",                                    org: "CFTRI",                       panel: "Panel 5", role: "Participant", topic: "Agri Tech — Farmers & Water Security",                source: "v12" },
  { name: "Kaustubh Dhonde",            designation: "Co-Founder & CEO",                            org: "AutoNxt",                     panel: "Panel 5", role: "Participant", topic: "Agri Tech — Farmers & Water Security",                source: "spreadsheet" },
  { name: "Anil Kumar S.G.",            designation: "Founder & Chairman",                          org: "Samunnati",                   panel: "Panel 5", role: "Participant", topic: "Agri Tech — Farmers & Water Security",                source: "v12" },
  { name: "Dr. Raman Babu",             designation: "Global Research Director, Accelerated Crop Improvement", org: "ICRISAT",         panel: "Panel 5", role: "Participant", topic: "Agri Tech — Farmers & Water Security",                source: "v12" },
  { name: "Sri Venkateswar Rao",         designation: "Irrigation Advisor",                         org: "Government of Andhra Pradesh", panel: "Panel 5", role: "Participant", topic: "Agri Tech — Farmers & Water Security",               source: "screenshot", unconfirmed: true },

  // ── Talk 1 — Fireside Chat: Skilling & Entrepreneurship (15:40–16:10) ─────
  { name: "Shradha Sharma",                  designation: "TBC",                                    org: "TBC",                         panel: "Talk 1", role: "Moderator",   topic: "Skilling & Entrepreneurship", source: "v12" },
  { name: "Dr. Narayana Bharath Gupta, IAS", designation: "Commissioner, Higher Education Department", org: "Government of Andhra Pradesh", panel: "Talk 1", role: "Participant", topic: "Skilling & Entrepreneurship", source: "v12" },
  { name: "Prof. Balamurali Shankar",         designation: "TBC",                                   org: "TBC",                         panel: "Talk 1", role: "Participant", topic: "Skilling & Entrepreneurship", source: "v12" },
  { name: "Sri Adith Charlie",               designation: "Managing Editor",                        org: "YourStory Media",             panel: "Talk 1", role: "Participant", topic: "Skilling & Entrepreneurship", source: "screenshot", unconfirmed: true },
  { name: "Sri Ganesh Kumar, IAS",            designation: "Managing Director",                     org: "APSSDC, GoAP",                panel: "Talk 1", role: "Participant", topic: "Skilling & Entrepreneurship", source: "screenshot", unconfirmed: true },
  { name: "Sri Madhusudhanan Baskaran",       designation: "Chief Data & AI Strategist",            org: "Centre for Human Centric AI, IITM Pravartak", panel: "Talk 1", role: "Participant", topic: "Skilling & Entrepreneurship", source: "screenshot", unconfirmed: true },

  // ── Talk 2 — AI in Governance (16:10–16:40) ──────────────────────────────
  { name: "Sri Naman Paithankar",      designation: "TBC",                                          org: "TBC",                         panel: "Talk 2", role: "Moderator",   topic: "AI in Governance", source: "v12" },
  { name: "Sri Bhaskar Katamneni, IAS", designation: "Secretary, Department of ITE&C",             org: "Government of Andhra Pradesh", panel: "Talk 2", role: "Participant", topic: "AI in Governance", source: "v12" },
  { name: "Shailesh Kumar",            designation: "Chief Data Scientist, CEO AI/ML",              org: "Jio",                         panel: "Talk 2", role: "Participant", topic: "AI in Governance", source: "spreadsheet" },

  // ── Talk 3 — Amaravati Capital City (16:40–17:00) ────────────────────────
  { name: "Sri Vijay Ramaraju, IAS",   designation: "Commissioner, CRDA",                          org: "Government of Andhra Pradesh", panel: "Talk 3", role: "Speaker",   topic: "Amaravati Capital City", source: "v12" }
];

// ─── ROUND TABLE 1 — IIT Directors' Conclave ─────────────────────────────────
// Source: spreadsheet. Times: 14:00–15:30. CM joins: 14:45–15:10.
// Location: Board Room 1 / First Floor.

const rt1 = {
  id: "rt1",
  title: "IIT Directors' Conclave",
  start: "14:00", end: "15:30",
  location: "Board Room 1 — First Floor",
  cmJoinStart: "14:45", cmJoinEnd: "15:10",
  source: "v12",
  participants: [
    { name: "J. Syamala Rao, IAS",           designation: "Principal Secretary, Higher Education",          org: "Government of Andhra Pradesh",        source: "spreadsheet" },
    { name: "Dr. Narayana Bharath Gupta, IAS", designation: "Commissioner, Higher Education Department",    org: "Government of Andhra Pradesh",        source: "spreadsheet" },
    { name: "Dr. Hanumanthu Purushotham",     designation: "Secretary, Science, Technology & Innovation",   org: "Government of Andhra Pradesh",        source: "spreadsheet" },
    { name: "Dr. Amitabh Ranjan",             designation: "Vice Chairman",                                 org: "PanIIT Alumni India",                 source: "spreadsheet" },
    { name: "Neeraj Kumar",                    designation: "Core Team",                                    org: "PanIIT Alumni India",                 source: "spreadsheet" },
    { name: "Prof. Shireesh Kedare",           designation: "Director",                                     org: "IIT Bombay",                          source: "spreadsheet" },
    { name: "Dr. V Kamakoti",                 designation: "Director",                                      org: "IIT Madras",                          source: "spreadsheet" },
    { name: "Prof. K. N. Satyanarayana",      designation: "Director",                                      org: "IIT Tirupati",                        source: "spreadsheet" },
    { name: "Prof. Sukumar Mishra",           designation: "Director",                                      org: "IIT (ISM) Dhanbad",                   source: "spreadsheet" },
    { name: "Prof. BS Murty",                 designation: "Director",                                      org: "IIT Hyderabad",                       source: "spreadsheet" },
    { name: "Prof. Manoj Singh Gaur",         designation: "Director",                                      org: "IIT Jammu",                           source: "spreadsheet" },
    { name: "Prof. Laxmidhar Behera",         designation: "Director",                                      org: "IIT Mandi",                           source: "spreadsheet" },
    { name: "Prof. Seshadri Sekhar",          designation: "Director",                                      org: "IIT Palakkad",                        source: "spreadsheet" },
    { name: "Prof. Surjya K. Pal",            designation: "Dean (R&D) and Professor",                      org: "IIT Kharagpur",                       source: "spreadsheet" },
    { name: "Prof. Vijay Shankar Pasurepud",  designation: "Dean (Sponsored Research and Industry)",        org: "IIT Bhubaneswar",                     source: "spreadsheet" },
    { name: "Prof. Hiralal Pramanik",         designation: "Dean (Resource & Alumni)",                      org: "IIT (BHU) Varanasi",                  source: "spreadsheet" },
    { name: "Prof. Shalivahan Srivastava",    designation: "Director",                                      org: "IIPE",                                source: "spreadsheet" },
    { name: "Prof. CSRK Prasad",              designation: "Vice Chancellor",                               org: "JNTUK Kakinada",                      source: "spreadsheet" },
    { name: "Prof. GP Rajasekhar",            designation: "Vice Chancellor",                               org: "Andhra University",                   source: "spreadsheet" },
    { name: "Prof. K. V. Krishna Rao",        designation: "Director",                                      org: "NIT AP",                              source: "spreadsheet" },
    { name: "Prof. V Uma",                    designation: "Vice Chancellor",                               org: "Sri Padmavati Mahila Visvavidyalayam", source: "spreadsheet" },
    { name: "Prof. Tata Narasinga Rao",       designation: "Vice Chancellor",                               org: "Sri Venkateswara University",         source: "spreadsheet" },
    { name: "Prof. Satish",                   designation: "Vice Chancellor",                               org: "SRM",                                 source: "spreadsheet" },
    { name: "Dr. Vasireddi Vidyasagar",       designation: "Founder & Chairman",                            org: "VIT",                                 source: "spreadsheet" },
    { name: "Dr. P. Arulmozhivarman",         designation: "Vice Chancellor",                               org: "VIT-AP",                              source: "spreadsheet" },
    { name: "Dr. J.B.V. Reddy",               designation: "Mission Director",                              org: "DST",                                 source: "spreadsheet" },
    { name: "Prof. Chaitanyamoy Ganguly",     designation: "Nuclear Scientist & Padmashree Awardee — Former IAEA", org: "TBC",                          source: "spreadsheet" },
    { name: "Dr. Sharad Kumar Saraf",         designation: "Board Member",                                  org: "IIT Bombay / IIT Jammu / IIT Dharwad", source: "spreadsheet" },
    { name: "Prof. Amit Prashant",            designation: "Dean External Relations",                       org: "IIT Gandhinagar",                     source: "spreadsheet" }
  ]
};

// ─── ROUND TABLE 2 — Venture Capitalists & Family Offices ────────────────────
// Source: spreadsheet (labelled RT: VC). Times: 14:15–15:45. CM joins: 15:10–15:35.
// Location: Board Room 2 / First Floor.
// NOTE: The spreadsheet participant list is stored in rt2.participants below.

const rt2 = {
  id: "rt2",
  title: "Venture Capitalists & Family Offices",
  start: "14:15", end: "15:45",
  location: "Board Room 2 — First Floor",
  cmJoinStart: "15:10", cmJoinEnd: "15:35",
  source: "spreadsheet",
  participants: [
    { name: "Suryateja Mallavarapu, IAS", designation: "CEO, AP Innovation Society & MD, AP Technology Services", org: "Government of AP",    source: "spreadsheet" },
    { name: "Vishnu Mohan",               designation: "CEO",                                                    org: "MSME Development Corporation",  source: "spreadsheet" },
    { name: "CV Sridhar",                 designation: "Mission Director",                                       org: "AP State Quantum Mission (SQM)", source: "spreadsheet" },
    { name: "Pradeep Gupta",              designation: "Co-Founder",                                             org: "IAN Group & C-Cube",             source: "spreadsheet" },
    { name: "Srikanth Tanikella",         designation: "Founding Partner",                                       org: "Pavestone VC",                   source: "spreadsheet" },
    { name: "Dr. Taslimarif Saiyed, PhD", designation: "Director and CEO",                                       org: "C-CAMP",                         source: "spreadsheet" },
    { name: "Sudhir Rao",                 designation: "Managing Partner",                                       org: "Celesta",                        source: "spreadsheet" },
    { name: "Ashish Taneja",              designation: "Managing Partner",                                       org: "GrowX",                          source: "spreadsheet" },
    { name: "Sharad Bansal",              designation: "Founding Partner",                                       org: "Warmup Ventures",                source: "spreadsheet" },
    { name: "Mayurish Raut",              designation: "Managing Partner",                                       org: "Seafund",                        source: "spreadsheet" },
    { name: "Arjun Rao",                  designation: "Founding Partner",                                       org: "Speciale Invest",                source: "spreadsheet" },
    { name: "Pankaj Raina",               designation: "CEO",                                                    org: "Zephyr Peacock",                 source: "spreadsheet" },
    { name: "TC Meenakshisundaram (TCM)", designation: "Founder & Vice Chairman",                                org: "Chiratae",                       source: "spreadsheet" },
    { name: "Manu Iyer",                  designation: "Founding Partner & MD",                                  org: "Bluehill Ventures",              source: "spreadsheet" },
    { name: "Dinesh Pai",                 designation: "VC",                                                     org: "Rainmatter VC",                  source: "spreadsheet" },
    { name: "Prof. Mahesh Panchagnula",   designation: "Board Member (Prof at IITM)",                            org: "Ratan Tata Innovation Hub, A Govt. of Andhra Pradesh", source: "spreadsheet" },
    { name: "Shailesh Ghorpade",          designation: "Founding Managing Partner & CIO",                        org: "Exfinity Ventures",              source: "spreadsheet" },
    { name: "Dhiraj Kumar Sinha",         designation: "Co-Founder & Managing Partner",                          org: "SilverX",                        source: "spreadsheet" },
    { name: "Parag Dhol",                 designation: "General Partner",                                        org: "Athera Ventures",                source: "spreadsheet" },
    { name: "Priyank Garg",               designation: "Member & Ex-Managing Partner",                           org: "IAN Group",                      source: "spreadsheet" },
    { name: "Nitesh Aggarwal",            designation: "Vice President - Innovations & Investments",             org: "Baldota Family Office",          source: "spreadsheet" },
    { name: "Ganesh Sathyamurthy",        designation: "Founding Partner",                                       org: "a99 VC",                         source: "spreadsheet" },
    { name: "Vikas Katragadda",           designation: "Co-founder & Operating Partner",                         org: "Naandi Ventures",                source: "spreadsheet" }
  ]
};

// ─── ROUND TABLE 3 — Industry Leaders & Unicorn CXOs ─────────────────────────
// Source: spreadsheet (labelled RT: CXO). Times: 14:30–16:00. CM joins: 15:35–16:00.
// Location: Activity Zone North / First Floor.

const rt3 = {
  id: "rt3",
  title: "Industry Leaders & Unicorn CXOs",
  start: "14:30", end: "16:00",
  location: "Activity Zone North — First Floor",
  cmJoinStart: "15:35", cmJoinEnd: "16:00",
  source: "spreadsheet",
  participants: [
    { name: "Sri Bhaskar Katamneni, IAS",    designation: "Secretary, Department of ITE&C",             org: "Government of Andhra Pradesh", source: "spreadsheet" },
    { name: "Dr. N. Yuvaraj, IAS",           designation: "Secretary, Department of Industries & Commerce", org: "Government of Andhra Pradesh", source: "spreadsheet" },
    { name: "Lalit Aggarwal",                designation: "Managing Director, India Region",             org: "Schlumberger India",           source: "spreadsheet" },
    { name: "Ankit Todi",                    designation: "Chief Sustainability Officer",                org: "Mahindra Group",               source: "spreadsheet" },
    { name: "Amith Singhee",                 designation: "Asia Pac CTO",                               org: "IBM India and South Asia",     source: "spreadsheet" },
    { name: "Hitesh Garg",                   designation: "India MD",                                   org: "NXP Semiconductors",           source: "spreadsheet" },
    { name: "Arun Ramchandani",              designation: "Head",                                       org: "L&T Precision Engg & Systems", source: "spreadsheet" },
    { name: "Bharath Daka",                  designation: "Co-Founder & CTO",                           org: "Skyroot",                      source: "spreadsheet" },
    { name: "Aditya Kandoi",                 designation: "Founder & CEO",                              org: "Redcliffe Labs",                source: "spreadsheet" },
    { name: "Dr. Ramesh Hariharan",          designation: "CEO & Co-Founder",                           org: "Strand Life Sciences",         source: "spreadsheet" },
    { name: "Kaustubh Dhonde",               designation: "Co-Founder & CEO",                           org: "AutoNxt",                      source: "spreadsheet" },
    { name: "Dr. Mallik Tatipamula",         designation: "CTO",                                        org: "Ericsson Silicon Valley",      source: "spreadsheet" },
    { name: "Dr. Seetha Ram Krishna Nookala", designation: "Vice President",                            org: "Quantum India",                source: "spreadsheet" },
    { name: "Anand Kumar",                   designation: "MD",                                         org: "STMicroelectronics India",     source: "spreadsheet" },
    { name: "Arvind Bansal",                 designation: "CEO",                                        org: "Continuum Energy",             source: "spreadsheet" },
    { name: "Anudeep Muttavarapu",           designation: "India Head & Managing Director",             org: "Motorola Solutions",           source: "spreadsheet" },
    { name: "Neeraj Agrawal",                designation: "President, Nuclear Power",                   org: "JSW Energy",                   source: "spreadsheet" },
    { name: "Shailesh Kumar",                designation: "Chief Data Scientist, CEO AI/ML",            org: "Jio",                          source: "spreadsheet" },
    { name: "Dr. Muralidhara Thyagarajan",   designation: "Founding Chairman",                          org: "TMI Group",                    source: "spreadsheet" },
    { name: "Tarun Bhargava",                designation: "Core Committee",                             org: "PanIIT Alumni India",          source: "spreadsheet" },
    { name: "Ms. Yolynd Lobo",               designation: "Director and Head of Government Affairs",    org: "Google Cloud India",           source: "spreadsheet" },
    { name: "Yaram Vijay Kumar",              designation: "India MD",                                  org: "Honeywell Aerospace",          source: "spreadsheet" },
    { name: "Vatsal Shah",                   designation: "Head of Amazon Web Services",                org: "AWS",                          source: "spreadsheet" },
    { name: "Dr. Sujoy Kar",                 designation: "Chief Medical Information Officer",          org: "Apollo Hospital",              source: "spreadsheet" },
    { name: "Manoj Nambiar",                 designation: "Chief Scientist",                            org: "TCS Research",                 source: "spreadsheet" },
    { name: "Dr. Vibha Dhawan",              designation: "Director General",                           org: "TERI",                         source: "spreadsheet" },
    { name: "Dr. Kamaljeet Singh",            designation: "Director General",                          org: "SCL",                          source: "spreadsheet" },
    { name: "Pankaj Akula",                  designation: "Founder MD and Chief Technologist",          org: "Aksi Aerospace Group",         source: "spreadsheet" }
  ]
};

// ─── TIMELINE ─────────────────────────────────────────────────────────────────
// type:"parallel" items contain an events[] array of simultaneous sessions.
// These must NOT be flattened into a sequential list.

const timeline = [
  // ── Day 1 ──────────────────────────────────────────────────────────────────
  {
    day: "Day 1 — Friday, 2 October 2026",
    time: "19:00 onwards",
    title: "Gala Dinner",
    note: "Taj Vivanta Ballroom · ~70–80 key guests including IIT Directors, Industry CEOs, Startup Founders, Policy Makers, Investors",
    highlight: true,
    source: "v12"
  },

  // ── Day 2 ──────────────────────────────────────────────────────────────────
  { day: "Day 2 — Saturday, 3 October 2026", time: "08:00–09:00", title: "Registration & Networking",                      note: "Main venue / registration area",                                                                                         source: "v12" },
  { day: null, time: "09:00–09:05", title: "Welcome & Context Setting",                                                     note: "Dr. Amitabh Ranjan · Main Hall — Ground Floor",                                                                          source: "v12" },
  { day: null, time: "09:05–09:55", title: "Panel 1 — Energy in the Age of AI",                                             note: "Chair: Sri G. Surya Sai Praveenchand, IAS · Main Hall — Ground Floor",                           highlight: true,       source: "v12" },
  { day: null, time: "09:55–10:00", title: "Transition / Stage Reset",                                                      note: "",                                                                                                                       source: "v12" },
  { day: null, time: "10:00–11:10", title: "Inaugural Session",                                                             note: "Lamp lighting · Addresses · Guest of Honour speeches · Main Hall — Ground Floor",              highlight: true,       source: "v12" },
  { day: null, time: "11:10–11:15", title: "Transition",                                                                    note: "",                                                                                                                       source: "v12" },
  { day: null, time: "11:15–12:05", title: "Panel 2 — Deep Tech in All Walks of Life; Product Perfection",                 note: "Chair: Sri Bhaskar Katamneni, IAS · Main Hall — Ground Floor",                                 highlight: true,       source: "v12" },
  { day: null, time: "12:05–12:10", title: "Transition",                                                                    note: "",                                                                                                                       source: "v12" },
  { day: null, time: "12:10–13:00", title: "Panel 3 — Space, Aerospace & Defence Manufacturing",                           note: "Chair: Dr. N. Yuvaraj, IAS · Main Hall — Ground Floor",                                        highlight: true,       source: "v12" },

  // ── 13:00–14:00 Parallel block ────────────────────────────────────────────
  {
    day: null,
    type: "parallel",
    label: "13:00–14:00 — Parallel events",
    events: [
      { time: "13:00–13:50", title: "Networking Lunch",                              note: "Dining Hall",                                                                                       highlight: false, source: "v12" },
      { time: "13:00–14:00", title: "Pavilions & Technology Exhibition",             note: "Activity Zone South — First Floor · NIMCPS hubs · DeepTech startups · DST-awarded startups · live demos", highlight: false, source: "v12" },
      { time: "~13:00–14:00", title: "CM Pavilion Visit",                            note: "Hon'ble Chief Minister arrives ~13:00 · tours stalls · moves to CM Office/Holding Room by 14:00", highlight: true,  source: "v12" }
    ]
  },

  { day: null, time: "13:50–14:40", title: "Panel 4 — BioValley: Health Access & Screening at Scale",                     note: "Chair: Sri G. Veerapandian, IAS · Main Hall — Ground Floor",                                  highlight: true,       source: "v12" },
  { day: null, time: "14:40–14:45", title: "Transition",                                                                    note: "",                                                                                                                       source: "v12" },

  // ── 14:00–16:00 Parallel block (Round Tables + Panel 5) ──────────────────
  {
    day: null,
    type: "parallel",
    label: "14:00–16:00 — Parallel events (First Floor Round Tables + Main Hall Panel 5)",
    events: [
      { time: "14:00–15:30", title: "RT 1 — IIT Directors' Conclave",                note: "Board Room 1 — First Floor · CM joins 14:45–15:10",                                                highlight: true,  source: "v12" },
      { time: "14:15–15:45", title: "RT 2 — Venture Capitalists & Family Offices",  note: "Board Room 2 — First Floor · CM joins 15:10–15:35",                                                highlight: true,  source: "v12" },
      { time: "14:30–16:00", title: "RT 3 — Industry Leaders & Unicorn CXOs",       note: "Activity Zone North — First Floor · CM joins 15:35–16:00",                                        highlight: true,  source: "v12" },
      { time: "14:45–15:35", title: "Panel 5 — Agri Tech — Farmers & Water Security", note: "Chair: Sri Budithi Rajsekhar, IAS · Main Hall — Ground Floor",                                  highlight: true,  source: "v12" }
    ]
  },

  // ── 15:40–17:10 Parallel block (Main Hall Talks + Policy Papers) ──────────
  {
    day: null,
    type: "parallel",
    label: "15:40–17:10 — Parallel events (Main Hall Talks & First Floor Policy Papers)",
    events: [
      { time: "15:40–16:10", title: "Talk 1 — Fireside Chat: Skilling & Entrepreneurship", note: "Moderator: Shradha Sharma · Main Hall — Ground Floor",       highlight: false, source: "v12" },
      { time: "16:10–16:40", title: "Talk 2 — AI in Governance",                    note: "Moderator: Sri Naman Paithankar · Main Hall — Ground Floor",                                        highlight: false, source: "v12" },
      { time: "16:40–17:00", title: "Talk 3 — Amaravati Capital City",              note: "Sri Vijay Ramaraju, IAS · Main Hall — Ground Floor",                                                highlight: false, source: "v12" },
      { time: "16:05–16:15", title: "PP1 — Energy & Fuel Cost Optimisation; Swachh Andhra", note: "First Floor — Combined Hall",                                                               highlight: false, source: "v12" },
      { time: "16:15–16:25", title: "PP2 — Deep Tech; Product Perfection",          note: "First Floor — Combined Hall",                                                                       highlight: false, source: "v12" },
      { time: "16:25–16:35", title: "PP3 — Space / Aerospace / Defence Manufacturing", note: "First Floor — Combined Hall",                                                                    highlight: false, source: "v12" },
      { time: "16:35–16:45", title: "PP4 — BioValley; Health Access & Screening",   note: "First Floor — Combined Hall",                                                                       highlight: false, source: "v12" },
      { time: "16:45–16:55", title: "PP5 — Agri Tech; Farmers & Water Security",    note: "First Floor — Combined Hall",                                                                       highlight: false, source: "v12" },
      { time: "16:55–17:05", title: "PP6 — AI in Governance",                       note: "First Floor — Combined Hall",                                                                       highlight: false, source: "v12" },
      { time: "17:05–17:10", title: "PP7 — Skilling & Entrepreneurship",            note: "First Floor — Combined Hall",                                                                       highlight: false, source: "v12" }
    ]
  },

  // ── Valedictory ───────────────────────────────────────────────────────────
  { day: null, time: "17:10–17:15", title: "CM moves from First Floor to Main Hall",                                        note: "All tracks merge · Main Hall — Ground Floor",                                                   highlight: true,       source: "v12" },
  { day: null, time: "17:15–17:25", title: "Announcements",                                                                 note: "PanIIT Amaravati Council · PanIIT Venture Fund · 10 Industry Chairs · 100-Mentor Startup Network · Technology Transfer from IITs · DeepTech Policy Package", source: "v12" },
  { day: null, time: "17:25–17:35", title: "Amaravati PanIIT Declaration + Photo-Op",                                       note: "",                                                                                                                       source: "v12" },
  { day: null, time: "17:35–17:45", title: "Q Shiva + Quantum Children Book Launch",                                        note: "Unveiled by Hon'ble CM",                                                                                                source: "v12" },
  { day: null, time: "17:45–18:25", title: "CM Keynote — Sri Nara Chandrababu Naidu",                                       note: "Main Hall — Ground Floor",                                                                      highlight: true,       source: "v12" },
  { day: null, time: "18:25–18:30", title: "Felicitation",                                                                  note: "",                                                                                                                       source: "v12" },
  { day: null, time: "18:30–18:32", title: "Vote of Thanks & Closing",                                                      note: "Dr. Amitabh Ranjan",                                                                                                    source: "v12" },
  { day: null, time: "18:32",       title: "Group Photo",                                                                   note: "Main Entrance",                                                                                                         source: "v12" }
];

// ─── ARENAS ───────────────────────────────────────────────────────────────────

const arenas = [
  { name: "Main Hall",                     floor: "Ground Floor",               purpose: "Welcome & Context Setting · All Panels (1–5) · Inaugural Session · Afternoon Talks (1–3) · Valedictory · CM Keynote · Group Photo",                      note: "" },
  { name: "Pavilion / Technology Exhibition", floor: "Activity Zone South — First Floor (per event app)", purpose: "Technology stalls · NIMCPS Innovation Hubs · DeepTech startups · DST-awarded startups · live demonstrations", note: "CM visits ~13:00–14:00" },
  { name: "First Floor — Board Room 1",    floor: "First Floor",                purpose: "IIT Directors' Conclave (Round Table 1)",                                                                                                                   note: "Overall: 14:00–15:30 · CM joins: 14:45–15:10" },
  { name: "First Floor — Board Room 2",    floor: "First Floor",                purpose: "Venture Capitalists & Family Offices Round Table (Round Table 2)",                                                                                         note: "Overall: 14:15–15:45 · CM joins: 15:10–15:35" },
  { name: "First Floor — Activity Zone North", floor: "First Floor",            purpose: "Industry Leaders & Unicorn CXOs Round Table (Round Table 3)",                                                                                              note: "Overall: 14:30–16:00 · CM joins: 15:35–16:00" },
  { name: "First Floor — Combined Hall",   floor: "First Floor",                purpose: "Seven Policy Paper Presentations (partition removed after Round Tables end)",                                                                               note: "16:05–17:10 · CM on stage" },
  { name: "CM Office / Holding Room",      floor: "First Floor (backstage)",    purpose: "CM briefing · Industry & Investor 1:1 meetings",                                                                                                           note: "14:00–14:10 buffer · 14:10–14:40 meetings (~4 slots, ~7 min each — names TBC)" },
  { name: "Dining Hall",                   floor: "TBC",                        purpose: "Networking Lunch 13:00–13:50",                                                                                                                             note: "" },
  { name: "Main Entrance",                 floor: "Ground Floor",               purpose: "CM arrival ~13:00 · Final Group Photo 18:32",                                                                                                              note: "" },
  { name: "Taj Vivanta Ballroom",          floor: "Off-site",                   purpose: "Day 1 Gala Dinner — Friday, 2 October 2026, 19:00 onwards",                                                                                               note: "~70–80 key guests" }
];

// ─── CM ROUTE ─────────────────────────────────────────────────────────────────

const cmRoute = [
  { time: "~13:00",       location: "Main Entrance",                    desc: "Arrival at venue",                                                   note: "Received by PanIIT & GoAP representatives — names TBC" },
  { time: "13:00–14:00",  location: "Pavilion Area",                    desc: "Pavilions & Technology Exhibition",                                  note: "NMICPS / technology innovation hubs and DeepTech & DST-awarded startup demonstrations. Stall order TBC." },
  { time: "14:00–14:10",  location: "CM Office / Holding Room",         desc: "10-minute buffer / event brief",                                     note: "" },
  { time: "14:10–14:40",  location: "CM Office / Holding Room",         desc: "Industry & Investor 1:1 meetings",                                   note: "~4 meetings, ~7 min each — names TBC" },
  { time: "14:45–15:10",  location: "First Floor — Board Room 1",       desc: "Round Table 1: IIT Directors' Conclave",                             note: "" },
  { time: "15:10–15:35",  location: "First Floor — Board Room 2",       desc: "Round Table 2: Venture Capitalists & Family Offices",                note: "" },
  { time: "15:35–16:00",  location: "First Floor — Activity Zone North", desc: "Round Table 3: Industry Leaders & Unicorn CXOs",                   note: "" },
  { time: "16:00–16:05",  location: "First Floor",                      desc: "Bio-break & room setup",                                             note: "Partition removed — round-table rooms become one combined hall" },
  { time: "16:05–17:10",  location: "First Floor — Combined Hall",      desc: "Seven Policy Paper Presentations — CM on stage",                    note: "" },
  { time: "17:10–17:15",  location: "First Floor → Main Hall",          desc: "CM moves to Main Hall — all tracks merge",                           note: "" },
  { time: "17:15–18:32",  location: "Main Hall",                        desc: "Valedictory · Announcements · Declaration · Q Shiva launch · CM Keynote · Felicitation · Closing", note: "" },
  { time: "18:32",        location: "Main Entrance",                    desc: "Group Photo",                                                        note: "" }
];

// ─── POLICY PAPERS ────────────────────────────────────────────────────────────

const policyPapers = [
  { time: "16:05–16:15", title: "PP1 — Energy & Fuel Cost Optimisation; Swachh Andhra",              source: "v12" },
  { time: "16:15–16:25", title: "PP2 — Deep Tech in All Walks of Life; Product Perfection",          source: "v12" },
  { time: "16:25–16:35", title: "PP3 — Space / Aerospace / Defence Manufacturing",                   source: "v12" },
  { time: "16:35–16:45", title: "PP4 — BioValley; Health Access & Screening at Scale",               source: "v12" },
  { time: "16:45–16:55", title: "PP5 — Agri Tech; Farmers & Water Security",                        source: "v12" },
  { time: "16:55–17:05", title: "PP6 — AI in Governance",                                           source: "v12" },
  { time: "17:05–17:10", title: "PP7 — Skilling & Entrepreneurship",                                source: "v12" }
];

// ─── PANEL DEFS ───────────────────────────────────────────────────────────────

const panelDefs = [
  { id: "Panel 1", title: "Panel 1 — Energy in the Age of AI",                               time: "09:05–09:55", chair: "Sri G. Surya Sai Praveenchand, IAS", loc: "Main Hall — Ground Floor" },
  { id: "Panel 2", title: "Panel 2 — Deep Tech in All Walks of Life; Product Perfection",    time: "11:15–12:05", chair: "Sri Bhaskar Katamneni, IAS",           loc: "Main Hall — Ground Floor" },
  { id: "Panel 3", title: "Panel 3 — Space, Aerospace & Defence Manufacturing",               time: "12:10–13:00", chair: "Dr. N. Yuvaraj, IAS",                  loc: "Main Hall — Ground Floor" },
  { id: "Panel 4", title: "Panel 4 — BioValley: Health Access & Screening at Scale",         time: "13:50–14:40", chair: "Sri G. Veerapandian, IAS",              loc: "Main Hall — Ground Floor" },
  { id: "Panel 5", title: "Panel 5 — Agri Tech — Farmers & Water Security",                 time: "14:45–15:35", chair: "Sri Budithi Rajsekhar, IAS",            loc: "Main Hall — Ground Floor" },
  { id: "Talk 1",  title: "Talk 1 — Fireside Chat: Skilling & Entrepreneurship",             time: "15:40–16:10", chair: "",                                      loc: "Main Hall — Ground Floor" },
  { id: "Talk 2",  title: "Talk 2 — AI in Governance",                                       time: "16:10–16:40", chair: "",                                      loc: "Main Hall — Ground Floor" },
  { id: "Talk 3",  title: "Talk 3 — Amaravati Capital City",                                 time: "16:40–17:00", chair: "",                                      loc: "Main Hall — Ground Floor" }
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function norm(s) { return (s || "").toLowerCase(); }

function matches(q, ...fields) {
  const n = norm(q);
  return fields.some(f => norm(f).includes(n));
}

function esc(s) {
  return (s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function unconfirmedBadge() {
  return ' <span class="badge badge-warn" title="Source: event-app screenshot only — not confirmed in spreadsheet">Unconfirmed</span>';
}

// ─── BUILD GLOBAL SEARCH INDEX ────────────────────────────────────────────────

function buildIndex() {
  const idx = [];

  dignitaries.forEach(d => {
    idx.push({
      type: "Dignitary",
      name: d.name,
      detail: d.designation + (d.org && d.org !== "TBC" ? " · " + d.org : ""),
      tags: d.tags,
      searchable: [d.name, d.designation, d.org, ...d.tags].join(" "),
      unconfirmed: false
    });
  });

  guests.forEach(g => {
    idx.push({
      type: g.panel,
      name: g.name,
      detail: [g.role, g.designation, g.org].filter(x => x && x !== "TBC").join(" · "),
      tags: [g.topic],
      searchable: [g.name, g.designation, g.org, g.panel, g.role, g.topic].join(" "),
      unconfirmed: !!g.unconfirmed
    });
  });

  const rtLabel = { rt1: "RT 1 — IIT Directors' Conclave", rt2: "RT 2 — VC & Family Offices", rt3: "RT 3 — Industry Leaders & CXOs" };
  const rtSearch = {
    rt1: "IIT Directors Conclave RT1 round table",
    rt2: "Venture Capital VC family office RT2 RT VC investor round table",
    rt3: "CXO Industry Leaders unicorn RT3 RT CXO round table"
  };

  [rt1, rt2, rt3].forEach(rt => {
    rt.participants.forEach(p => {
      idx.push({
        type: rtLabel[rt.id],
        name: p.name,
        detail: [p.designation, p.org].filter(Boolean).join(" · "),
        tags: [rt.title, "Round Table"],
        searchable: [p.name, p.designation, p.org, rt.title, rtSearch[rt.id]].join(" "),
        unconfirmed: false
      });
    });
  });

  return idx;
}

const searchIndex = buildIndex();

// ─── RENDER DIGNITARIES ───────────────────────────────────────────────────────

function renderDignitaries(list) {
  const el = document.getElementById("dig-results");
  if (!list.length) { el.innerHTML = '<p class="no-result">No matching people found.</p>'; return; }
  el.innerHTML = list.map(d => `
    <div class="dig-item">
      <div class="dig-name">${esc(d.name)}</div>
      <div class="dig-role">${esc(d.designation)}${d.org && d.org !== "TBC" ? " · " + esc(d.org) : ""}</div>
      <div class="dig-tags">${d.tags.map(t => `<span class="badge">${esc(t)}</span>`).join("")}</div>
    </div>
  `).join("");
}

function searchDignitaries(q) {
  if (!q.trim()) { renderDignitaries(dignitaries); return; }
  renderDignitaries(dignitaries.filter(d => matches(q, d.name, d.designation, d.org, ...d.tags)));
}

// ─── RENDER GUESTS TABLE ──────────────────────────────────────────────────────

function renderGuests(list) {
  const el = document.getElementById("guest-results");
  if (!list.length) { el.innerHTML = '<tr><td colspan="6" class="no-result">No matching people found.</td></tr>'; return; }
  el.innerHTML = list.map(g => `
    <tr>
      <td>${esc(g.name)}${g.unconfirmed ? unconfirmedBadge() : ""}</td>
      <td>${g.designation && g.designation !== "TBC" ? esc(g.designation) : '<span class="tbc">TBC</span>'}</td>
      <td>${g.org && g.org !== "TBC" ? esc(g.org) : '<span class="tbc">TBC</span>'}</td>
      <td>${esc(g.panel)}</td>
      <td>${esc(g.role)}</td>
      <td>${esc(g.topic)}</td>
    </tr>
  `).join("");
}

function searchGuests(q) {
  if (!q.trim()) { renderGuests(guests); return; }
  renderGuests(guests.filter(g => matches(q, g.name, g.designation, g.org, g.panel, g.role, g.topic)));
}

// ─── RENDER PANELS ────────────────────────────────────────────────────────────

function renderPanels() {
  const el = document.getElementById("panels-body");
  el.innerHTML = panelDefs.map(pd => {
    const people = guests.filter(g => g.panel === pd.id);
    const chairRow = pd.chair ? `
      <div class="panel-row">
        <div class="panel-role">Chair</div>
        <div class="panel-person"><div>${esc(pd.chair)}</div></div>
      </div>` : "";
    const rows = people.map(g => `
      <div class="panel-row">
        <div class="panel-role">${esc(g.role)}</div>
        <div class="panel-person">
          <div>${esc(g.name)}${g.unconfirmed ? unconfirmedBadge() : ""}</div>
          ${g.designation && g.designation !== "TBC" ? `<div class="panel-org">${esc(g.designation)}</div>` : ""}
          ${g.org && g.org !== "TBC" ? `<div class="panel-org">${esc(g.org)}</div>` : ""}
        </div>
      </div>`).join("");
    return `
      <div class="panel-block">
        <div class="panel-header">
          <div>${esc(pd.title)}</div>
          <div class="panel-time">${esc(pd.time)} · ${esc(pd.loc)}</div>
        </div>
        <div class="panel-body">${chairRow}${rows}</div>
      </div>`;
  }).join("");
}

// ─── RENDER ROUND TABLES ──────────────────────────────────────────────────────

function renderRtParticipants(rt, tbodyId) {
  const el = document.getElementById(tbodyId);
  if (!el) return;
  el.innerHTML = rt.participants.map(p => `
    <tr>
      <td>${esc(p.name)}</td>
      <td>${esc(p.designation)}</td>
      <td>${esc(p.org)}</td>
    </tr>
  `).join("");
}

// ─── RENDER TIMELINE ──────────────────────────────────────────────────────────

function renderTimeline() {
  const el = document.getElementById("timeline-body");
  let html = "";
  let currentDay = null;

  timeline.forEach(item => {
    if (item.day && item.day !== currentDay) {
      currentDay = item.day;
      html += `<div class="timeline-day-header">${esc(item.day)}</div>`;
    }

    if (item.type === "parallel") {
      // Sort events by start time string for display clarity
      const evs = item.events.slice().sort((a, b) => a.time.localeCompare(b.time));
      html += `
        <div class="tl-parallel-group">
          <div class="tl-parallel-label">⟺ ${esc(item.label)}</div>
          <div class="tl-parallel-events">
            ${evs.map(ev => `
              <div class="tl-parallel-event${ev.highlight ? " tl-highlight" : ""}">
                <div class="tl-time">${esc(ev.time)}</div>
                <div>
                  <div class="tl-title">${esc(ev.title)}</div>
                  ${ev.note ? `<div class="tl-note">${esc(ev.note)}</div>` : ""}
                </div>
              </div>
            `).join("")}
          </div>
        </div>`;
    } else {
      const hlClass = item.highlight ? " tl-highlight" : "";
      html += `
        <div class="tl-row${hlClass}">
          <div class="tl-time">${esc(item.time)}</div>
          <div>
            <div class="tl-title">${esc(item.title)}</div>
            ${item.note ? `<div class="tl-note">${esc(item.note)}</div>` : ""}
          </div>
        </div>`;
    }
  });
  el.innerHTML = html;
}

// ─── RENDER ARENAS ────────────────────────────────────────────────────────────

function renderArenas() {
  const el = document.getElementById("arenas-body");
  el.innerHTML = arenas.map(a => `
    <div class="location-item">
      <div class="location-name">${esc(a.name)}</div>
      <div class="location-detail">
        <div class="location-floor">${esc(a.floor)}</div>
        <p>${esc(a.purpose)}</p>
        ${a.note ? `<p class="muted">${esc(a.note)}</p>` : ""}
      </div>
    </div>
  `).join("");
}

// ─── RENDER CM ROUTE ──────────────────────────────────────────────────────────

function renderCmRoute() {
  const el = document.getElementById("cm-route-body");
  el.innerHTML = cmRoute.map((step, i) => {
    const isLast = i === cmRoute.length - 1;
    return `
      <div class="route-step">
        <div class="route-line">
          <div class="route-dot"></div>
          ${!isLast ? '<div class="route-connector"></div>' : ""}
        </div>
        <div class="route-body">
          <div class="route-time">${esc(step.time)}</div>
          <div class="route-location">${esc(step.location)}</div>
          <div class="route-desc">${esc(step.desc)}</div>
          ${step.note ? `<div class="route-note">${esc(step.note)}</div>` : ""}
        </div>
      </div>`;
  }).join("");
}

// ─── RENDER POLICY PAPERS ─────────────────────────────────────────────────────

function renderPolicyPapers() {
  const el = document.getElementById("pp-body");
  el.innerHTML = policyPapers.map(p => `
    <div class="pp-item">
      <div class="pp-time">${esc(p.time)}</div>
      <div class="pp-title">${esc(p.title)}</div>
    </div>
  `).join("");
}

// ─── GLOBAL SEARCH ────────────────────────────────────────────────────────────

function renderGlobalSearch(list) {
  const el = document.getElementById("global-search-results");
  if (!el) return;
  if (!list.length) { el.innerHTML = '<p class="no-result">No results found.</p>'; return; }

  // De-duplicate by name+type
  const seen = new Set();
  const unique = list.filter(item => {
    const k = item.name + "|" + item.type;
    if (seen.has(k)) return false;
    seen.add(k); return true;
  });

  el.innerHTML = unique.map(item => `
    <div class="dig-item">
      <div class="dig-name">${esc(item.name)}${item.unconfirmed ? unconfirmedBadge() : ""}</div>
      <div class="dig-role">${esc(item.detail)}</div>
      <div class="dig-tags">
        <span class="badge">${esc(item.type)}</span>
        ${item.tags.map(t => `<span class="badge">${esc(t)}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

function performGlobalSearch(q) {
  const el = document.getElementById("global-search-results");
  if (!el) return;
  if (!q.trim()) {
    el.innerHTML = '<p class="no-result">Enter a name, organisation, panel, round table, or topic to search all data.</p>';
    return;
  }
  const results = searchIndex.filter(item => norm(item.searchable).includes(norm(q)));
  renderGlobalSearch(results);
}

// ─── NAVIGATION ───────────────────────────────────────────────────────────────

function showSection(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.querySelectorAll("#sidenav nav a").forEach(a => a.classList.remove("active"));
  const sec = document.getElementById(id);
  if (sec) sec.classList.add("active");
  const link = document.querySelector(`#sidenav nav a[data-section="${id}"]`);
  if (link) link.classList.add("active");
  closeNav();
  window.scrollTo(0, 0);
}

function openNav() {
  document.getElementById("sidenav").classList.add("open");
  document.getElementById("overlay").classList.add("open");
}

function closeNav() {
  document.getElementById("sidenav").classList.remove("open");
  document.getElementById("overlay").classList.remove("open");
}

// ─── INIT ─────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", function () {
  renderDignitaries(dignitaries);
  renderGuests(guests);
  renderTimeline();
  renderArenas();
  renderCmRoute();
  renderPolicyPapers();
  renderPanels();
  renderRtParticipants(rt1, "rt1-tbody");
  renderRtParticipants(rt2, "rt2-tbody");
  renderRtParticipants(rt3, "rt3-tbody");

  // Nav
  document.getElementById("hamburger").addEventListener("click", openNav);
  document.getElementById("overlay").addEventListener("click", closeNav);

  document.querySelectorAll("#sidenav nav a").forEach(a => {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      showSection(this.dataset.section);
    });
  });

  document.querySelectorAll("[data-goto]").forEach(el => {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      showSection(this.dataset.goto);
    });
  });

  // Section-level search inputs
  const digSearch = document.getElementById("dig-search");
  if (digSearch) digSearch.addEventListener("input", function () { searchDignitaries(this.value); });

  const guestSearch = document.getElementById("guest-search");
  if (guestSearch) guestSearch.addEventListener("input", function () { searchGuests(this.value); });

  // Global search
  const globalSearch = document.getElementById("global-search-input");
  if (globalSearch) {
    globalSearch.addEventListener("input", function () { performGlobalSearch(this.value); });
  }

  showSection("home");
});
