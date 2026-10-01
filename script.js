// =====================================================
// PAN IIT AMARAVATI SUMMIT 2026 — Volunteer Reference
// script.js
// =====================================================

// ─── DATA ─────────────────────────────────────────────────────────────────────

const dignitaries = [
  {
    name: "Sri Nara Chandrababu Naidu",
    role: "Hon'ble Chief Minister of Andhra Pradesh",
    tags: ["Chief Minister", "Hosts Gala Dinner", "CM Track", "Delivers Keynote", "Valedictory"]
  },
  {
    name: "Sri Nara Lokesh",
    role: "Hon'ble Minister for ITE&C, HRD & RTGS, GoAP",
    tags: ["Guest of Honour", "Inaugural", "Valedictory"]
  },
  {
    name: "Sri Kinjarapu Ram Mohan Naidu",
    role: "Hon'ble Union Minister of Civil Aviation, Government of India",
    tags: ["Guest of Honour", "Central Minister", "Inaugural"]
  },
  {
    name: "Sri Prabhat Kumar, IRS",
    role: "Chairman, PanIIT Alumni India",
    tags: ["PanIIT Leadership", "Inaugural Address", "Declaration Presentation"]
  },
  {
    name: "Dr. Amitabh Ranjan",
    role: "Vice Chairman, PanIIT Alumni India",
    tags: ["Welcome / Context Setting", "Closing", "PanIIT Leadership", "Declaration Presentation", "Vote of Thanks & Closing (Valedictory)"]
  },
  {
    name: "Sri Swadeep Pillarisetti",
    role: "Chair, PanIIT Andhra Pradesh Summit 2026",
    tags: ["Summit Chair", "Welcome Address (Inaugural)"]
  },
  {
    name: "Sri Rajesh Dasari",
    role: "Co-Chair, PanIIT Andhra Pradesh Summit 2026",
    tags: ["Summit Co-Chair", "Vote of Thanks (Inaugural)"]
  },
  {
    name: "Sri Bhaskar Katamneni, IAS",
    role: "Secretary, Department of ITE&C, GoAP",
    tags: ["Inaugural Address", "Chair — Panel 2", "Chair — Panel 3 (stage leadership)", "AI in Governance", "CM Track", "Talk 2 Participant"]
  },
  {
    name: "Prof. K. N. Satyanarayana",
    role: "Director, IIT Tirupati",
    tags: ["Inaugural Speaker", "Valedictory Dais", "IIT Directors' Conclave"]
  },
  {
    name: "Prof. V. Kamakoti",
    role: "Director, IIT Madras",
    tags: ["Inaugural Speaker", "Valedictory Dais", "IIT Directors' Conclave"]
  },
  {
    name: "Sri Anand Kumar",
    role: "MD, STMicroelectronics India",
    tags: ["Industry Leaders Address (Inaugural)", "Inaugural"]
  },
  {
    name: "Sri Arvind Bansal",
    role: "Co-Founder & CEO, Continuum Energy",
    tags: ["Unicorn Founders Address (Inaugural)", "Inaugural"]
  },
  {
    name: "Smt. Vani Kola",
    role: "Managing Director, Kalaari Capital",
    tags: ["VC Address (Inaugural)", "Inaugural"]
  },
  {
    name: "Sri G. Surya Sai Praveenchand, IAS",
    role: "Joint-Managing Director, AP-TRANSCO",
    tags: ["Chair — Panel 1", "Energy in the Age of AI"]
  },
  {
    name: "Sri G. Veerapandian, IAS",
    role: "Secretary, Health & Family Welfare Department, GoAP",
    tags: ["Chair — Panel 4", "BioValley", "Health"]
  },
  {
    name: "Sri Buditihi Rajsekhar, IAS",
    role: "Special Chief Secretary, Agriculture & Cooperation Department, GoAP",
    tags: ["Chair — Panel 5", "Agri Tech", "Farmers & Water Security"]
  },
  {
    name: "Dr. N. Yuvaraj, IAS",
    role: "Secretary, Department of Industries & Commerce, GoAP",
    tags: ["Chair — Panel 3", "Space, Aerospace & Defence Manufacturing"]
  }
];

const guests = [
  // Panel 1
  { name: "Sri Ankit Todi",              org: "",                                         panel: "Panel 1", role: "Moderator",    topic: "Energy in the Age of AI" },
  { name: "Sri Lalit Aggarwal",          org: "SLB",                                      panel: "Panel 1", role: "Participant",   topic: "Energy in the Age of AI" },
  { name: "Ms. Yolynd Lobo",             org: "Google Cloud India",                       panel: "Panel 1", role: "Participant",   topic: "Energy in the Age of AI" },
  { name: "Sri Neeraj Agarwal",          org: "JSW Energy",                               panel: "Panel 1", role: "Participant",   topic: "Energy in the Age of AI" },
  { name: "Dr. Vibha Dhawan",            org: "TERI",                                     panel: "Panel 1", role: "Participant",   topic: "Energy in the Age of AI" },
  { name: "Sri Sachin Bhalla",           org: "Schneider Electric India",                 panel: "Panel 1", role: "Participant",   topic: "Energy in the Age of AI" },
  // Panel 2
  { name: "Prof. Ganesh Ramakrishnan",   org: "",                                         panel: "Panel 2", role: "Moderator",    topic: "Deep Tech in All Walks of Life; Product Perfection" },
  { name: "Sri A Babu, IAS",             org: "GoAP",                                     panel: "Panel 2", role: "Co-Chair",     topic: "Deep Tech in All Walks of Life; Product Perfection" },
  { name: "Dr. Amith Singhee",           org: "IBM",                                      panel: "Panel 2", role: "Participant",   topic: "Deep Tech in All Walks of Life; Product Perfection" },
  { name: "Prof. Balaraman Ravindran",   org: "IIT Madras",                               panel: "Panel 2", role: "Participant",   topic: "Deep Tech in All Walks of Life; Product Perfection" },
  { name: "Sri Hitesh Garg",             org: "NXP Semiconductors",                       panel: "Panel 2", role: "Participant",   topic: "Deep Tech in All Walks of Life; Product Perfection" },
  { name: "Dr. Kamaljeet Singh",         org: "Semiconductor Laboratory (SCL)",           panel: "Panel 2", role: "Participant",   topic: "Deep Tech in All Walks of Life; Product Perfection" },
  { name: "Sri Vatsal Shah",             org: "AWS",                                      panel: "Panel 2", role: "Participant",   topic: "Deep Tech in All Walks of Life; Product Perfection" },
  // Panel 3
  { name: "Sri Suyash Singh",                org: "",                                     panel: "Panel 3", role: "Moderator",    topic: "Space, Aerospace & Defence Manufacturing" },
  { name: "Sri Arun Ramchandani",            org: "L&T Precision Engineering & Systems", panel: "Panel 3", role: "Participant",   topic: "Space, Aerospace & Defence Manufacturing" },
  { name: "Sri Yaram Vijay Kumar",           org: "Honeywell Aerospace",                  panel: "Panel 3", role: "Participant",   topic: "Space, Aerospace & Defence Manufacturing" },
  { name: "Dr. R. Balamurali Krishnan",      org: "Naval Science & Technological Laboratory (NSTL)", panel: "Panel 3", role: "Participant", topic: "Space, Aerospace & Defence Manufacturing" },
  { name: "Sri Naga Bharath Daka",           org: "Skyroot Aerospace",                    panel: "Panel 3", role: "Participant",   topic: "Space, Aerospace & Defence Manufacturing" },
  // Panel 4
  { name: "Dr. Ramesh Hariharan",            org: "",                                     panel: "Panel 4", role: "Moderator",    topic: "BioValley — Health Access & Screening at Scale" },
  { name: "Dr. Sunil Kumar Barnwal, IAS",    org: "NHA",                                  panel: "Panel 4", role: "Participant",   topic: "BioValley — Health Access & Screening at Scale" },
  { name: "Dr. Taslimarif Saiyed",           org: "C-CAMP",                               panel: "Panel 4", role: "Participant",   topic: "BioValley — Health Access & Screening at Scale" },
  { name: "Aditya Kandoi",                   org: "Redcliffe Labs",                       panel: "Panel 4", role: "Participant",   topic: "BioValley — Health Access & Screening at Scale" },
  { name: "Dr. Mukesh Kumar Gupta",          org: "ICMR-NIPCR",                           panel: "Panel 4", role: "Participant",   topic: "BioValley — Health Access & Screening at Scale" },
  // Panel 5
  { name: "Prof. Arun Tangirala",            org: "",                                     panel: "Panel 5", role: "Moderator",    topic: "Agri Tech (Farmers & Water Security)" },
  { name: "Dr. Giridhar Parvatam",           org: "CFTRI",                                panel: "Panel 5", role: "Participant",   topic: "Agri Tech (Farmers & Water Security)" },
  { name: "Kaustubh Dhonde",                 org: "AutoNxt",                              panel: "Panel 5", role: "Participant",   topic: "Agri Tech (Farmers & Water Security)" },
  { name: "Anil Kumar S.G.",                 org: "Samunnati",                            panel: "Panel 5", role: "Participant",   topic: "Agri Tech (Farmers & Water Security)" },
  { name: "Dr. Raman Babu",                  org: "ICRISAT",                              panel: "Panel 5", role: "Participant",   topic: "Agri Tech (Farmers & Water Security)" },
  // Talk 1
  { name: "Shradha Sharma",                  org: "",                                     panel: "Talk 1", role: "Moderator",     topic: "Skilling & Entrepreneurship" },
  { name: "Dr. Narayana Bharath Gupta, IAS", org: "",                                     panel: "Talk 1", role: "Participant",   topic: "Skilling & Entrepreneurship" },
  { name: "Prof. Balamurali Shankar",         org: "",                                    panel: "Talk 1", role: "Participant",   topic: "Skilling & Entrepreneurship" },
  // Talk 2
  { name: "Sri Naman Paithankar",            org: "",                                     panel: "Talk 2", role: "Moderator",     topic: "AI in Governance" },
  { name: "Sri Shailesh Kumar",              org: "Jio",                                  panel: "Talk 2", role: "Participant",   topic: "AI in Governance" },
  // Talk 3
  { name: "Sri Vijay Ramaraju, IAS",         org: "Commissioner, CRDA, GoAP",             panel: "Talk 3", role: "Speaker",       topic: "Amaravati Capital City" }
];

const timeline = [
  // Day 1
  { day: "Day 1 — Friday, 2 October 2026", time: "19:00 onwards", title: "Gala Dinner", note: "Hosted by Hon'ble CM | Taj Vivanta Ballroom | ~70–80 key guests", highlight: true },

  // Day 2
  { day: "Day 2 — Saturday, 3 October 2026", time: "08:00–09:00", title: "Registration & Networking", note: "Panel 1 speakers report to Green Room by 08:45" },
  { day: null, time: "09:00–09:05", title: "Welcome & Context Setting", note: "Dr. Amitabh Ranjan" },
  { day: null, time: "09:05–09:55", title: "Panel 1 — Energy in the Age of AI", note: "Chair: Sri G. Surya Sai Praveenchand, IAS", highlight: true },
  { day: null, time: "09:55–10:00", title: "Stage Changeover", note: "" },
  { day: null, time: "10:00–11:10", title: "Inaugural Session", note: "Lamp lighting, addresses, Guest of Honour", highlight: true },
  { day: null, time: "11:10–11:15", title: "Stage Changeover", note: "" },
  { day: null, time: "11:15–12:05", title: "Panel 2 — Deep Tech in All Walks of Life; Product Perfection", note: "Chair: Sri Bhaskar Katamneni, IAS", highlight: true },
  { day: null, time: "12:05–12:10", title: "Stage Changeover", note: "" },
  { day: null, time: "12:10–13:00", title: "Panel 3 — Space, Aerospace & Defence Manufacturing", note: "Chair: Dr. N. Yuvaraj, IAS", highlight: true },
  { day: null, time: "13:00–13:50", title: "Networking Lunch & Pavilion Visit", note: "" },
  { day: null, time: "13:50–14:40", title: "Panel 4 — BioValley — Health Access & Screening at Scale", note: "Chair: Sri G. Veerapandian, IAS", highlight: true },
  { day: null, time: "14:40–14:45", title: "Stage Changeover", note: "" },
  { day: null, time: "14:45–15:35", title: "Panel 5 — Agri Tech — Farmers & Water Security", note: "Chair: Sri Buditihi Rajsekhar, IAS", highlight: true },
  { day: null, time: "15:35–15:40", title: "Stage Changeover", note: "" },
  { day: null, time: "15:40–16:10", title: "Talk 1 — Skilling & Entrepreneurship", note: "Moderator: Shradha Sharma" },
  { day: null, time: "16:10–16:40", title: "Talk 2 — AI in Governance", note: "Includes RTGS presentation | Moderator: Sri Naman Paithankar" },
  { day: null, time: "16:40–17:00", title: "Talk 3 — Amaravati Capital City", note: "Sri Vijay Ramaraju, IAS" },
  { day: null, time: "17:00–17:10", title: "Delegates seated / Doors close", note: "Valedictory stage reset" },
  { day: null, time: "17:10–17:15", title: "CM arrives at Main Hall", note: "All tracks merge", highlight: true },
  { day: null, time: "17:15–17:25", title: "Announcements", note: "" },
  { day: null, time: "17:25–17:35", title: "Amaravati PanIIT Declaration + Photo-Op", note: "" },
  { day: null, time: "17:35–17:45", title: "Q Shiva Launch + Quantum Children Book Launch", note: "Unveiled by Hon'ble CM" },
  { day: null, time: "17:45–18:25", title: "CM Keynote — Sri Nara Chandrababu Naidu", note: "", highlight: true },
  { day: null, time: "18:25–18:30", title: "Felicitation", note: "" },
  { day: null, time: "18:30–18:32", title: "Vote of Thanks & Closing", note: "" },
  { day: null, time: "18:32",        title: "Group Photo", note: "Main Entrance" },
  { day: null, time: "19:00 onwards", title: "Networking Dinner", note: "" }
];

const arenas = [
  {
    name: "Main Hall",
    floor: "Ground Floor",
    purpose: "Welcome & Context Setting · All Panels (1–5) · Inaugural Session · Afternoon Talks · Valedictory · CM Keynote · Group Photo",
    note: ""
  },
  {
    name: "Pavilion / Technology Exhibition",
    floor: "Ground Floor",
    purpose: "Technology stalls · Demonstrations · Networking Lunch access",
    note: "CM visits 13:00–14:00"
  },
  {
    name: "First Floor — Room 1",
    floor: "First Floor",
    purpose: "IIT Directors' Conclave (Round Table #1)",
    note: "Overall: 14:00–15:30 | CM joins: 14:45–15:10"
  },
  {
    name: "First Floor — Room 2",
    floor: "First Floor",
    purpose: "VCs & Family Offices Round Table (#2)",
    note: "Overall: 14:15–15:45 | CM joins: 15:10–15:35"
  },
  {
    name: "First Floor — Room 3",
    floor: "First Floor",
    purpose: "Industry Leaders & Unicorn CXOs Round Table (#3)",
    note: "Overall: 14:30–16:00 | CM joins: 15:35–16:00"
  },
  {
    name: "First Floor — Combined Hall",
    floor: "First Floor",
    purpose: "Seven Policy Paper Presentations (partition removed after RT Room 3)",
    note: "16:05–17:10 | CM on stage"
  },
  {
    name: "CM Office / Holding Room",
    floor: "Ground Floor / Backstage",
    purpose: "CM briefing · Industry & Investor 1:1 meetings",
    note: "14:00–14:10 buffer | 14:10–14:40 meetings (4 speakers, ~7 min each — names TBC)"
  },
  {
    name: "Green Room",
    floor: "Backstage",
    purpose: "Speaker reporting & standby before stage appearances",
    note: "Panel 1 speakers report by 08:45"
  },
  {
    name: "Main Entrance",
    floor: "Ground Floor",
    purpose: "CM arrival · Final group photo at 18:32",
    note: ""
  },
  {
    name: "Taj Vivanta Ballroom",
    floor: "Off-site",
    purpose: "Day 1 Gala Dinner (Friday, 2 Oct) — 19:00 onwards",
    note: "Hosted by Hon'ble CM"
  }
];

const cmRoute = [
  {
    time: "13:00",
    location: "Main Entrance",
    desc: "Arrival at venue",
    note: "Received by PanIIT & GoAP representatives — names TBC"
  },
  {
    time: "13:00–14:00",
    location: "Pavilion Area",
    desc: "Pavilions & Technology Exhibition",
    note: "NMICPS hubs / technology innovation hubs and DeepTech & DST-awarded startup demonstrations. Stall order TBC."
  },
  {
    time: "14:00–14:10",
    location: "CM Office / Holding Room",
    desc: "Proceed to office — 10-minute buffer / event brief",
    note: ""
  },
  {
    time: "14:10–14:40",
    location: "CM Office / Holding Room",
    desc: "Industry & Investors 1:1 meetings",
    note: "4 speakers, ~7 min each — names TBC"
  },
  {
    time: "14:45–15:10",
    location: "First Floor — RT Room 1",
    desc: "Round Table #1: IIT Directors' Conclave",
    note: ""
  },
  {
    time: "15:10–15:35",
    location: "First Floor — RT Room 2",
    desc: "Round Table #2: Venture Capitalists & Family Offices",
    note: ""
  },
  {
    time: "15:35–16:00",
    location: "First Floor — RT Room 3",
    desc: "Round Table #3: Industry Leaders & Unicorn CXOs",
    note: ""
  },
  {
    time: "16:00–16:05",
    location: "First Floor",
    desc: "Bio-break & room setup",
    note: "Partition removed; round-table hall becomes one combined hall"
  },
  {
    time: "16:05–17:10",
    location: "First Floor — Combined Hall",
    desc: "Seven Policy Paper Presentations — CM on stage",
    note: ""
  },
  {
    time: "17:10–17:15",
    location: "First Floor → Main Hall",
    desc: "CM movement to Main Hall — CM enters last",
    note: ""
  },
  {
    time: "17:15–18:32",
    location: "Main Hall",
    desc: "Valedictory & Road Ahead · Announcements · Declaration · Q Shiva launch · CM Keynote · Felicitation · Closing",
    note: ""
  },
  {
    time: "18:32",
    location: "Main Entrance",
    desc: "Group Photo",
    note: ""
  }
];

const policyPapers = [
  { time: "16:05–16:15", title: "PP1 — Energy & Fuel Cost Optimisation; Swachh Andhra" },
  { time: "16:15–16:25", title: "PP2 — Deep Tech in All Walks of Life; Product Perfection" },
  { time: "16:25–16:35", title: "PP3 — Space, Aerospace & Defence Manufacturing (Product Perfection)" },
  { time: "16:35–16:45", title: "PP4 — BioValley – Health Access & Screening at Scale (Zero Poverty)" },
  { time: "16:45–16:55", title: "PP5 — Agri Tech – Farmers & Water Security" },
  { time: "16:55–17:05", title: "PP6 — AI in Governance" },
  { time: "17:05–17:10", title: "PP7 — Skilling & Entrepreneurship" }
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function norm(str) {
  return (str || "").toLowerCase();
}

function matches(query, ...fields) {
  const q = norm(query);
  return fields.some(f => norm(f).includes(q));
}

function esc(str) {
  return (str || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ─── RENDER DIGNITARIES ───────────────────────────────────────────────────────

function renderDignitaries(list) {
  const el = document.getElementById("dig-results");
  if (!list.length) {
    el.innerHTML = '<p class="no-result">No matching people found.</p>';
    return;
  }
  el.innerHTML = list.map(d => `
    <div class="dig-item">
      <div class="dig-name">${esc(d.name)}</div>
      <div class="dig-role">${esc(d.role)}</div>
      <div class="dig-tags">${d.tags.map(t => `<span class="badge">${esc(t)}</span>`).join("")}</div>
    </div>
  `).join("");
}

function searchDignitaries(query) {
  if (!query.trim()) { renderDignitaries(dignitaries); return; }
  const results = dignitaries.filter(d =>
    matches(query, d.name, d.role, ...d.tags)
  );
  renderDignitaries(results);
}

// ─── RENDER GUESTS ────────────────────────────────────────────────────────────

function renderGuests(list) {
  const el = document.getElementById("guest-results");
  if (!list.length) {
    el.innerHTML = '<p class="no-result">No matching people found.</p>';
    return;
  }
  el.innerHTML = list.map(g => `
    <tr>
      <td>${esc(g.name)}</td>
      <td>${esc(g.org) || '<span class="tbc">—</span>'}</td>
      <td>${esc(g.panel)}</td>
      <td>${esc(g.role)}</td>
      <td>${esc(g.topic)}</td>
    </tr>
  `).join("");
}

function searchGuests(query) {
  if (!query.trim()) { renderGuests(guests); return; }
  const results = guests.filter(g =>
    matches(query, g.name, g.org, g.panel, g.role, g.topic)
  );
  renderGuests(results);
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
    const hlClass = item.highlight ? " tl-highlight" : "";
    html += `
      <div class="tl-row${hlClass}">
        <div class="tl-time">${esc(item.time)}</div>
        <div>
          <div class="tl-title">${esc(item.title)}</div>
          ${item.note ? `<div class="tl-note">${esc(item.note)}</div>` : ""}
        </div>
      </div>
    `;
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
      </div>
    `;
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

// ─── RENDER PANELS (Guests section) ──────────────────────────────────────────

const panelDefs = [
  { id: "Panel 1", title: "Panel 1 — Energy in the Age of AI",                         time: "09:05–09:55", chair: "Sri G. Surya Sai Praveenchand, IAS" },
  { id: "Panel 2", title: "Panel 2 — Deep Tech in All Walks of Life; Product Perfection", time: "11:15–12:05", chair: "Sri Bhaskar Katamneni, IAS" },
  { id: "Panel 3", title: "Panel 3 — Space, Aerospace & Defence Manufacturing",         time: "12:10–13:00", chair: "Dr. N. Yuvaraj, IAS" },
  { id: "Panel 4", title: "Panel 4 — BioValley — Health Access & Screening at Scale",  time: "13:50–14:40", chair: "Sri G. Veerapandian, IAS" },
  { id: "Panel 5", title: "Panel 5 — Agri Tech (Farmers & Water Security)",            time: "14:45–15:35", chair: "Sri Buditihi Rajsekhar, IAS" },
  { id: "Talk 1",  title: "Talk 1 — Skilling & Entrepreneurship",                      time: "15:40–16:10", chair: "" },
  { id: "Talk 2",  title: "Talk 2 — AI in Governance",                                 time: "16:10–16:40", chair: "Sri Bhaskar Katamneni, IAS" },
  { id: "Talk 3",  title: "Talk 3 — Amaravati Capital City",                           time: "16:40–17:00", chair: "" }
];

function renderPanels() {
  const el = document.getElementById("panels-body");
  el.innerHTML = panelDefs.map(pd => {
    const people = guests.filter(g => g.panel === pd.id);
    const rows = people.map(g => `
      <div class="panel-row">
        <div class="panel-role">${esc(g.role)}</div>
        <div class="panel-person">
          <div>${esc(g.name)}</div>
          ${g.org ? `<div class="panel-org">${esc(g.org)}</div>` : ""}
        </div>
      </div>
    `).join("");
    const chairRow = pd.chair ? `
      <div class="panel-row">
        <div class="panel-role">Chair</div>
        <div class="panel-person"><div>${esc(pd.chair)}</div></div>
      </div>
    ` : "";
    return `
      <div class="panel-block">
        <div class="panel-header">
          <div>${esc(pd.title)}</div>
          <div class="panel-time">${esc(pd.time)}</div>
        </div>
        <div class="panel-body">
          ${chairRow}
          ${rows}
        </div>
      </div>
    `;
  }).join("");
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
  // Render all dynamic sections
  renderDignitaries(dignitaries);
  renderGuests(guests);
  renderTimeline();
  renderArenas();
  renderCmRoute();
  renderPolicyPapers();
  renderPanels();

  // Nav
  document.getElementById("hamburger").addEventListener("click", openNav);
  document.getElementById("overlay").addEventListener("click", closeNav);

  document.querySelectorAll("#sidenav nav a").forEach(a => {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      showSection(this.dataset.section);
    });
  });

  // Quick links on home page
  document.querySelectorAll("[data-goto]").forEach(el => {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      showSection(this.dataset.goto);
    });
  });

  // Search inputs
  document.getElementById("dig-search").addEventListener("input", function () {
    searchDignitaries(this.value);
  });
  document.getElementById("guest-search").addEventListener("input", function () {
    searchGuests(this.value);
  });

  // Default section
  showSection("home");
});
