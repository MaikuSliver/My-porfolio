export interface GalleryImage {
  url: string;
  title: string;
  subhead?: string;
  caption: string;
  isVideo?: boolean;
}

export interface Accomplishment {
  id: string;
  title: string;
  tagline: string;
  category: 'Retail & Store IT' | 'Software & AI' | 'Government & Licensing' | 'Infrastructure & Support';
  tags: string[];
  image: string;
  gallery?: GalleryImage[];
  metrics: { label: string; value: string }[];
  overview: string;
  highlights: string[];
  techStack: string[];
  institution?: string;
  date?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  score?: string;
  description: string;
  badgeType: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  supervisor?: string;
  summary: string;
  highlights: string[];
  skillsApplied: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Mike Angel Manipon',
    fullName: 'Mike Angel Avenion Manipon',
    displayName: 'Mike Angel',
    title: 'IT Specialist & Systems Engineer',
    role: 'IT Specialist',
    bio: 'Dedicated Information Technology specialist with proven experience setting up store systems, computer networks, and practical software solutions. Pioneered the IT and Point-of-Sale (POS) rollout for Gaisano Grand Mall of Carmen, holds a Civil Service Professional License (83.41%), and has built award-winning AI research for agriculture.',
    simplePitch: 'I keep everyday business technology running smoothly — from setting up checkout cashier terminals and office networks to troubleshooting hardware and building helpful software.',
    location: 'Carmen, Davao del Norte, Philippines',
    phone: '09610222593',
    phoneFormatted: '0961 022 2593',
    phoneIntl: '+63 961 022 2593',
    email: 'mikemanipon47@gmail.com',
    yearsExperience: 'Industry Experienced',
    education: 'BS in Information Technology (BSIT) · Davao del Norte State College',
    eligibility: 'Civil Service Professional Eligible · 83.41% Rating',
    currentRole: 'IT Specialist at Gaisano Grand Mall of Carmen',
    avatar: '/assets/aistudio/mike_enhanced_profile.png',
    facebook: 'https://www.facebook.com/ElyBoombilya',
    github: 'https://github.com/MaikuSliver',
  },

  heroStats: [
    { label: 'Civil Service Rating', value: '83.41%', unit: 'Professional Level' },
    { label: 'Store Systems Setup', value: '100%', unit: 'POS & Counter Coverage' },
    { label: 'Hands-on IT Training', value: '486 Hrs', unit: 'Public Sector & Campus' },
    { label: 'ICT Practical Standard', value: 'Level 2', unit: 'TOPCIT International' },
  ],

  accomplishments: [
    {
      id: 'gaisano-it-launch',
      title: 'Mall IT Infrastructure & POS Launch',
      tagline: 'Set up 100% of cashier terminals, computers, and store networks for Gaisano Grand Mall of Carmen',
      category: 'Retail & Store IT' as const,
      tags: ['POS Systems', 'Network Setup', 'Preventive Maintenance', 'Asset Management', 'Store Support'],
      image: '/assets/aistudio/20251003_105626_9008ce2a.jpg',
      gallery: [
        {
          url: '/assets/aistudio/20251003_105626_9008ce2a.jpg',
          title: 'Network Data Cabinet & Switch Setup',
          subhead: 'Central Server Rack & Ethernet Cabling',
          caption: 'Mike on-site inside the central IT server room, completing patch panel connections and structured CAT6 LAN routing for storewide communications.',
        },
        {
          url: '/assets/aistudio/20251003_105554_586eecd3.jpg',
          title: 'Patch Panel Cable Dressing & Termination',
          subhead: 'Structured LAN Cable Dressing & Port Termination',
          caption: 'Routing, bundling, and punch-down terminating red CAT6 network drops into the high-density rack switch panels for cashier and office connectivity.',
        },
        {
          url: '/assets/aistudio/20251003_105517_728e2783.jpg',
          title: 'Switch Port Mapping & Documentation',
          subhead: 'Network Port Mapping & Patch Verification',
          caption: 'Top-down view of rack-mounted switches with neatly patched red cables and handwritten port allocation reference notes for fast troubleshooting.',
        },
        {
          url: '/assets/aistudio/20251017_151747_890894f5.jpg',
          title: 'Fiber Optic Routing & Distribution Box',
          subhead: 'Backbone Single-Mode Fiber Optic Cable Management',
          caption: 'Carefully spooling and dressing high-speed yellow single-mode fiber optic patch jumpers inside the distribution tray to connect core mall network nodes.',
        },
        {
          url: '/assets/aistudio/20251020_154025_7218ea23.jpg',
          title: 'Dell OptiPlex Desktop Fleet Staging',
          subhead: 'Cashier POS & Office Terminal Fleet Preparation',
          caption: 'Staging and configuring a fleet of Dell OptiPlex small-form-factor desktop PCs preloaded with retail point-of-sale software and office applications.',
        },
        {
          url: '/assets/aistudio/20251111_173456_b2b59e8e.jpg',
          title: 'EDP Department Computer Workstations',
          subhead: 'Store EDP Central Office & Continuous Printer Hub',
          caption: 'Configured EDP office workstations actively running Gaisano Grand Malls retail management systems paired with Epson dot-matrix transaction printers.',
        },
        {
          url: '/assets/aistudio/20260628_145840_4fd86e2d.jpg',
          title: 'PC Hardware Teardown & Maintenance',
          subhead: 'Component-Level PC Servicing & Chassis Assembly',
          caption: 'Mike and a technical colleague servicing internal PC components, power supplies, and chassis cabling on the technical workshop floor.',
        },
        {
          url: '/assets/aistudio/20260524_123919_8f22e815.jpg',
          title: 'Motherboard Dust Removal with Power Vac',
          subhead: 'Preventive Hardware Cleaning & Heatsink Maintenance',
          caption: 'Using a high-velocity red Power Vac electric blower to clear out dust accumulation from CPU cooling fans, heatsinks, RAM slots, and circuitry.',
        },
        {
          url: '/assets/aistudio/20260126_112458_a150a509.jpg',
          title: 'Multifunction Printer Scanner Repair',
          subhead: 'Optical Scanner Carriage & Ribbon Cable Servicing',
          caption: 'Inspecting and calibrating the printer mechanical gear assembly, optical scanner carriage, and flexible ribbon data cable during hardware diagnostics.',
        },
        {
          url: '/assets/aistudio/20251129_124336_a4a8edb1.jpg',
          title: 'Mall CCTV Surveillance & DVR Control Room',
          subhead: 'Security Monitoring Control Room & Video Recording Hub',
          caption: 'Surveillance monitoring hub featuring a 6-display CCTV video wall and stacked Hikvision Turbo HD digital video recorders providing 24/7 store coverage.',
        },
        {
          url: '/assets/aistudio/20250930_090602_a1c9661b.jpg',
          title: 'Server Room Inspection & Pre-Launch Staging',
          subhead: 'Full-Height Server Rack Enclosure & Power Verification',
          caption: 'Mike conducting pre-opening IT equipment checks, verifying server rack enclosure clearances, and inspecting power distribution units before mall launch.',
        },
        {
          url: '/assets/aistudio/received_920150120982611_d4b8d785.jpeg',
          title: 'EDP Store Operations & Dispatch Counter',
          subhead: 'Daily Retail Systems Monitoring & Cashier Support Desk',
          caption: 'Mike on duty at the glass-partitioned EDP dispatch window, actively monitoring checkout counter transactions and dispatching rapid on-site IT support.',
        },
        {
          url: '/assets/aistudio/received_1801558334471914_4ed017cf.jpeg',
          title: 'Mall Staff Group Photo — CREDIT Department',
          subhead: 'Official Store Team & Technical Staff Commemoration',
          caption: 'Store management, EDP technical specialists, and mall personnel in company uniforms gathered under the Credit department header on launch day.',
        },
        {
          url: '/assets/aistudio/Messenger_creation_5173A1DA-CB30-4350-A9AB-8788314243C0_232e48e0.jpeg',
          title: 'Store Team in the Server & Electrical Room',
          subhead: 'Pre-Opening Store Team Assembly in Technical Utility Room',
          caption: 'Mall personnel and technical colleagues assembled inside the electrical and server utility room during pre-opening infrastructure walkthroughs.',
        },
        {
          url: '/assets/aistudio/Messenger_creation_16A9C39F-72C3-43BD-93D3-7B505E3570AA_1a92927b.jpeg',
          title: 'EDP Technical Support Specialists Team',
          subhead: 'Core EDP Systems & Technical Support Crew',
          caption: 'Mike and fellow EDP specialists in corporate uniform with official Gaisano Grand credentials, ready to provide full-shift store technology support.',
        },
        {
          url: '/assets/aistudio/20260405_132728_d610fa03.jpg',
          title: 'Mall Event AV Setup — Easter Egg Hunt 2026',
          subhead: 'Audio-Visual Projection & Event Technical Support',
          caption: 'Operating the Acer presentation laptop and Epson multimedia projector at the Food Republic atrium for the mall Easter Egg Hunt 2026 celebration.',
        },
      ],
      metrics: [
        { label: 'Coverage', value: '100% Cashiers & Offices' },
        { label: 'Role', value: 'Pioneering IT Setup' },
        { label: 'Store Downtime', value: 'Minimized via Proactive Care' },
      ],
      overview: 'Led the initial technology rollout for the newly opened Gaisano Grand Mall of Carmen under Southland Commercial Complex, Inc. Configured and deployed all cashier computers, receipt printers, barcode scanners, and local office networks to ensure smooth daily sales.',
      highlights: [
        'Installed and configured all cashier Point-of-Sale (POS) computers and peripherals before grand opening.',
        'Built a secure and reliable local office network connecting sales counters and administrative staff.',
        'Scheduled regular system checkups and automated backups so sales records are always protected.',
        'Provided quick, patient on-site support to cashiers and store managers whenever technical issues arose.',
      ],
      techStack: ['POS Terminals', 'Office LAN', 'Hardware Diagnostics', 'Data Backups', 'Asset Management'],
      institution: 'Gaisano Grand Group of Companies',
      date: 'August 2025 — Present',
    },
    {
      id: 'okrai-cnn-research',
      title: 'OKRAI: Smart Plant Disease Detector',
      tagline: 'An easy-to-use image recognition tool that helps farmers identify crop diseases with AI',
      category: 'Software & AI' as const,
      tags: ['AI & Machine Learning', 'Computer Vision', 'Python', 'Mobile App', 'Agriculture'],
      image: '/assets/aistudio/received_1330459281724781_4840e27e.jpeg',
      gallery: [
        {
          url: '/assets/aistudio/SVID_20250426_202726_1_90b4cead.mp4',
          title: 'OKRA-AI Harvest Analytics & Statistical Charts',
          subhead: 'Mobile Dashboard, Yield Charts & Harvest Logs',
          caption: 'Screen recording demonstration showcasing the OKRA-AI mobile application: interactive harvest statistical charts, daily disease detection filters, pesticide usage tracking, and paginated area harvest records.',
          isVideo: true,
        },
        {
          url: '/assets/aistudio/received_1330459281724781_4840e27e.jpeg',
          title: 'Pre-Deployment Defense at DNSC',
          subhead: 'Academic Capstone Presentation & Defense',
          caption: 'Research team and faculty panel during the pre-deployment defense of "OKRAI: Okra Plant Disease Detector Application Using Convolutional Neural Network" at Davao del Norte State College.',
        },
        {
          url: '/assets/aistudio/received_1041844091223647_b3042bf1.jpeg',
          title: 'Field Testing & Certificate of Completion',
          subhead: 'Agricultural Community Outreach & Testing',
          caption: 'Mike and the research team presenting the Certificate of Completion to local farmer collaborator holding his smartphone with the active OKRAI mobile application.',
        },
        {
          url: '/assets/aistudio/received_1810540853058453_4c2a8832.jpeg',
          title: 'Okra Plantation Field Data Gathering',
          subhead: 'Dataset Collection & On-Site Agronomic Sampling',
          caption: 'Mike conducting on-site field surveys and gathering real-world leaf samples in local okra farming plots across Davao del Norte to train the CNN computer vision model.',
        },
        {
          url: '/assets/aistudio/Screenshot_20241211_134128_com.example.okrai_7e014c22.jpg',
          title: 'AI Leaf Disease Diagnosis — Yellow Vein Mosaic',
          subhead: 'Real-Time Mobile CNN Inference Result',
          caption: 'OKRAI mobile scan result identifying Critical Yellow Vein Mosaic Disease on an infected okra leaf with immediate visual alert and saving options.',
        },
        {
          url: '/assets/aistudio/Screenshot_20241211_135729_com.example.okrai_7c1b3cf3.jpg',
          title: 'Okra Harvest Yield Prediction Calculator',
          subhead: 'Predictive Analytics & Treatment Formulation',
          caption: 'Yield forecasting interface calculating predicted harvest weight (e.g. 431.73 kg) based on disease incidence and applied pesticides like Carbaryl.',
        },
        {
          url: '/assets/aistudio/Screenshot_20241211_135945_com.example.okrai_eacdb013.jpg',
          title: 'Crop Health Analytics & Disease Ratio Dashboard',
          subhead: 'Visual Farm Statistics & Scan Counter',
          caption: 'Farm analytics interface showing healthy vs. diseased plant ratios (66.7% vs. 33.3%), scan summaries, and rapid action buttons for farmers.',
        },
        {
          url: '/assets/aistudio/Screenshot_20241211_143536_com.example.okrai_22a6196e.jpg',
          title: 'My Okra List — Field Specimen Inventory',
          subhead: 'Digital Farm Recordkeeping & Plant Profiles',
          caption: 'Plant profile registry cataloging photographed crop specimens, tracking condition statuses (Healthy, Mild Early Blight), and historical treatments.',
        },
      ],
      metrics: [
        { label: 'Presented At', value: 'BINHI Research Colloquium' },
        { label: 'Partners', value: 'DNSC & DOrSU' },
        { label: 'Focus', value: 'Practical Smart Farming' },
      ],
      overview: 'Developed an innovative capstone project that uses camera photos to instantly diagnose common plant diseases in okra crops. Presented and recognized at the BINHI Research Colloquium for practical technology that benefits local farmers.',
      highlights: [
        'Trained a smart visual model to distinguish between healthy leaves and diseased crops.',
        'Designed a friendly mobile interface so anyone can take a photo and get immediate recommendations.',
        'Received official recognition from computing deans and department chairpersons.',
      ],
      techStack: ['Image Recognition', 'Python', 'Machine Learning', 'User-Friendly UI'],
      institution: 'Davao del Norte State College',
      date: 'June 2025',
    },
    {
      id: 'csc-professional-eligibility',
      title: 'Civil Service Professional License',
      tagline: 'Earned official career service eligibility with an exceptional 83.41% passing score',
      category: 'Government & Licensing' as const,
      tags: ['CSC Professional', 'National License', 'Civil Service', 'Government Qualified'],
      image: '/assets/aistudio/Copy_of_CSEPROF_9c0bdc9f.jpg',
      gallery: [
        {
          url: '/assets/aistudio/Copy_of_CSEPROF_9c0bdc9f.jpg',
          title: 'Certificate of Eligibility (CSE-PROF)',
          subhead: 'Official Civil Service Commission Professional Eligibility Certificate',
          caption: 'Original Certificate of Eligibility (Cert No. R11-20250904-010) awarded to Mike Angel A. Manipon with an 83.41% passing rating by the Civil Service Commission Regional Office XI.',
        },
        {
          url: '/assets/aistudio/20250904_112703_8a68128e.jpg',
          title: 'In-Person License Claiming at CSC RO XI',
          subhead: 'Receiving Official Certificate at Regional Office XI in Davao City',
          caption: 'Mike personally receiving his verified Certificate of Eligibility at the Civil Service Commission Davao Region Regional Office XI.',
        },
        {
          url: '/assets/aistudio/20250904_105407_027c32a9.jpg',
          title: 'CSC Examination Services Processing Counters',
          subhead: 'Biometric Photocapture & Certificate Releasing Counters',
          caption: 'Official client servicing counters (Photocapture & Releasing) inside the Civil Service Commission Examination Services Division in Davao City.',
        },
      ],
      metrics: [
        { label: 'Passing Score', value: '83.41%' },
        { label: 'Certifying Body', value: 'Civil Service Commission' },
        { label: 'License Level', value: 'Professional Eligibility' },
      ],
      overview: 'Conferred with full Career Service Professional Eligibility by the Republic of the Philippines Civil Service Commission. Scoring 83.41% certifies high proficiency in analytical reasoning, problem solving, ethics, and technical readiness.',
      highlights: [
        'Passed the nationwide Career Service Professional examination on first take with 83.41%.',
        'Demonstrates verified aptitude in logical analysis, numerical reasoning, and professional communication.',
        'Qualified for permanent technical, IT, and supervisory positions in government and public institutions.',
      ],
      techStack: ['Problem Solving', 'Data Interpretation', 'Analytical Thinking', 'Professional Standards'],
      institution: 'Civil Service Commission Regional Office XI',
      date: 'March 2025',
    },
    {
      id: 'lgu-carmen-ojt',
      title: '486-Hour LGU Municipal of Carmen Internship',
      tagline: 'Delivered technical assistance, network troubleshooting, and computer maintenance for municipal offices',
      category: 'Infrastructure & Support' as const,
      tags: ['Municipal IT', 'Hands-on Support', 'Network Care', 'Public Service'],
      image: '/assets/aistudio/ojt_certificate_e9596cd9.png',
      gallery: [
        {
          url: '/assets/aistudio/ojt_certificate_e9596cd9.png',
          title: 'Official OJT Certificate of Completion',
          subhead: '486 Hours On-the-Job Training Credential',
          caption: 'Conferred by the Local Government Unit of Carmen HRMO (Candyd V. De Ramos, MGDH I) to Mike Angel A. Manipon from Davao del Norte State College for completing 486 hours (Feb 24 – May 28, 2025).',
        },
        {
          url: '/assets/aistudio/IMG_20250530_212559_a9d1f3de.jpg',
          title: 'Internship Culmination & Certificate Presentation',
          subhead: 'Official OJT Completion Award Ceremony',
          caption: 'Mike in uniform holding his official 486-Hour Certificate of Completion awarded by the Municipality of Carmen.',
        },
        {
          url: '/assets/aistudio/IMG_20250523_072747_d45633e8.jpg',
          title: 'Municipal IT Office Workstation',
          subhead: 'On-Site Technical Operations & Staff Work Desk',
          caption: 'Mike at his designated workstation inside the municipal office glass partition, conducting routine IT diagnostic checks and daily documentation.',
        },
        {
          url: '/assets/aistudio/IMG_20250520_072955_f7645cf4.jpg',
          title: 'General Services Office (GSO) Corridor',
          subhead: 'Municipal Hall Internal Administrative Wing',
          caption: 'Interior view of the Carmen Municipal Hall executive corridor leading to the General Services Office (GSO) and administrative support division.',
        },
        {
          url: '/assets/aistudio/IMG_20250326_154613_b25c3123.jpg',
          title: 'Sangguniang Bayan Session Hall Entrance',
          subhead: 'Municipal Legislative Building & SB Lounge',
          caption: 'Entrance to the Carmen Sangguniang Bayan Session Hall and legislative reception foyer where IT and audio-visual setups are maintained.',
        },
        {
          url: '/assets/aistudio/IMG_20250227_101151_ef6841c3.jpg',
          title: 'Municipal Public Event Technical Support',
          subhead: 'Field Operations & Event Technical Assistance',
          caption: 'Mike providing on-ground technical assistance and setup during an outdoor municipal event under the official LGU event canopy.',
        },
        {
          url: '/assets/aistudio/IMG_20250321_144428_d73fa7b3.jpg',
          title: 'Municipal Gymnasium & Assembly Stage',
          subhead: 'Carmen Covered Court & Multi-Purpose Stage',
          caption: 'The municipal covered gymnasium and stage structure, used for civic assemblies, government programs, and large-scale public ceremonies.',
        },
        {
          url: '/assets/aistudio/IMG_20250528_170727_4bafd544.jpg',
          title: 'Carmen Municipal Grounds & Flagpole Plaza',
          subhead: 'Elevated View of the Civic Center',
          caption: 'Aerial courtyard perspective of the Carmen municipal grounds, civic flagpole, and landscaped perimeter from the upper floor of the Municipal Hall.',
        },
        {
          url: '/assets/aistudio/IMG_20250520_072924_86d1bf80.jpg',
          title: 'Municipal Police Clearance & Civic Compound',
          subhead: 'Public Assistance Building & Official Motorpool Area',
          caption: 'Ground courtyard view of the Municipal Police Clearance facility, parking grounds, and perimeter service vehicles at the Carmen municipal complex.',
        },
      ],
      metrics: [
        { label: 'Completed Hours', value: '486 Hours' },
        { label: 'Host Agency', value: 'LGU Carmen' },
        { label: 'Result', value: 'Officially Certified' },
      ],
      overview: 'Completed 486 hours of hands-on on-the-job training across municipal departments, diagnosing computer faults, setting up printers and network cables, and helping municipal staff maintain daily operations.',
      highlights: [
        'Completed full 486 required hours with commendation from the Municipal Human Resource Office.',
        'Repaired and maintained desktop computers, printers, and network connections in municipal offices.',
        'Assisted staff with data verification, digital record keeping, and software issues.',
      ],
      techStack: ['PC Maintenance', 'Office LAN', 'Printer Sharing', 'Public Service IT'],
      institution: 'Municipality of Carmen, Davao del Norte',
      date: 'February — May 2025',
    },
  ] as Accomplishment[],

  certifications: [
    {
      id: 'cert-csc',
      title: 'Career Service Professional Eligibility (CSE-PROF)',
      issuer: 'Civil Service Commission (CSC Regional Office XI)',
      date: 'March 2025',
      score: '83.41% Rating',
      credentialId: 'Cert No. R11-20250904-010',
      description: 'National government professional license qualifying for technical, IT, and supervisory careers.',
      badgeType: 'National License',
    },
    {
      id: 'cert-topcit',
      title: 'TOPCIT: Practical Competency in ICT (Level 2)',
      issuer: 'IITP (Institute for Information & Communications Technology Promotion)',
      date: 'November 2024',
      score: 'Level 2 / 295 Pts',
      credentialId: 'TL2403000405',
      description: 'Standardized assessment evaluating software development, system design, data, and technical problem-solving.',
      badgeType: 'International Standard',
    },
    {
      id: 'cert-cisco-essentials',
      title: 'Cybersecurity Essentials',
      issuer: 'Cisco Networking Academy',
      date: 'November 2024',
      description: 'Practical training on computer network protection, data confidentiality, and defending against cyber threats.',
      badgeType: 'Industry Certification',
    },
    {
      id: 'cert-cisco-intro',
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      date: 'May 2024',
      description: 'Fundamental understanding of internet safety, vulnerability scanning, and secure computing practices.',
      badgeType: 'Industry Certification',
    },
    {
      id: 'cert-binhi',
      title: 'Certificate of Presentation: Capstone Research',
      issuer: 'BINHI: 4th Research Colloquium (DNSC & DOrSU)',
      date: 'June 2025',
      description: 'Awarded for presenting the OKRAI machine learning plant disease diagnostic application.',
      badgeType: 'Academic Honor',
    },
    {
      id: 'cert-pakiglambigit',
      title: 'PakiglambigIT 2025: IT Education Conference',
      issuer: 'CHED Region XI · CDITE XI · PSITE Davao',
      date: 'July 2025',
      description: 'Attended regional computing conference exploring future technology trends and practical IT innovation.',
      badgeType: 'Professional Conference',
    },
  ] as Certification[],

  // Simplified skills presented in plain English for anyone to appreciate
  skills: [
    {
      group: 'Retail & Store Systems (POS)',
      description: 'Keeping cashiers, barcode scanners, and sales systems running without downtime.',
      items: [
        { name: 'POS Cashier Terminals', level: 'Primary', note: 'Hardware installation, cashier software setup, and peripheral configuration' },
        { name: 'Printers & Barcode Scanners', level: 'Primary', note: 'Receipt printers, handheld barcode readers, and automated cash drawers' },
        { name: 'Preventive Maintenance', level: 'Daily Practice', note: 'Regular hardware cleaning, component diagnostics, and preventive checks' },
        { name: 'Data & Sales Backups', level: 'Daily Practice', note: 'Automated database backups to protect critical store records' },
      ],
    },
    {
      group: 'Office Networks & Hardware',
      description: 'Setting up and fixing office computers, routers, Wi-Fi, and cabling.',
      items: [
        { name: 'Local Area Networks (LAN)', level: 'Skilled', note: 'Ethernet cabling, switches, routers, and department network sharing' },
        { name: 'Hardware Repair & Diagnostics', level: 'Skilled', note: 'Desktop troubleshooting, part replacements, power supply fixes, and OS imaging' },
        { name: 'Network Troubleshooting', level: 'Fast Response', note: 'Fixing offline workstations, connectivity drops, and printer sharing issues' },
        { name: 'Asset Documentation', level: 'Organized', note: 'Tracking company IT hardware inventories, maintenance records, and warranty logs' },
      ],
    },
    {
      group: 'Software & Smart Tools',
      description: 'Building practical apps, managing data, and using modern technology.',
      items: [
        { name: 'Web & App Development', level: 'Hands-on', note: 'Building clean, responsive web pages and interactive tools with React and modern web tech' },
        { name: 'AI Image Recognition', level: 'Applied Research', note: 'Trained visual neural network models (OKRAI plant disease detector)' },
        { name: 'Database & SQL', level: 'Hands-on', note: 'Managing database tables, querying data, and ensuring reliable data storage' },
        { name: 'Python & Scripting', level: 'Practical', note: 'Automation scripts, data processing, and machine learning pipelines' },
      ],
    },
    {
      group: 'Professional Reliability & Support',
      description: 'Clear communication, patient user training, and certified work standards.',
      items: [
        { name: 'Friendly Staff Support', level: 'Customer-first', note: 'Patiently helping store staff and office employees resolve tech challenges' },
        { name: 'Civil Service Professional', level: 'Licensed', note: 'Certified 83.41% CSC eligibility representing analytical integrity and work ethics' },
        { name: 'Cisco Cybersecurity Awareness', level: 'Certified', note: 'Practicing safe passwords, threat prevention, and data privacy habits' },
        { name: 'Quick Turnaround', level: 'Dedicated', note: 'Rapid on-site action to avoid operational disruptions during business hours' },
      ],
    },
  ],

  experience: [
    {
      period: 'August 2025 — Present',
      role: 'IT Specialist',
      company: 'Gaisano Grand Group of Companies (Southland Commercial Complex, Inc.)',
      location: 'Carmen, Davao del Norte',
      supervisor: 'Leonilo R. Cruspero',
      summary: 'Pioneered and currently manage all electronic data processing and IT operations for the new Gaisano Grand Mall of Carmen, from initial store setup to daily retail operations.',
      highlights: [
        'Pioneered the entire store IT setup ahead of the mall’s grand opening.',
        'Installed and configured 100% of Point-of-Sale (POS) cashier counters, barcode scanners, and receipt printers.',
        'Established stable departmental network connections (LAN) across retail counters and administrative offices.',
        'Maintained smooth retail operations through daily preventive maintenance and immediate issue resolution.',
        'Trained and assisted cashiers and store supervisors on proper system operation.',
      ],
      skillsApplied: ['POS Cashier Systems', 'Office LAN', 'Hardware Diagnostics', 'Preventive Maintenance', 'Asset Management'],
    },
    {
      period: 'February — May 2025',
      role: 'IT Technical Support Intern (486 Hours)',
      company: 'Local Government Unit of Carmen',
      location: 'Carmen, Davao del Norte',
      summary: 'Completed 486 hours of on-the-job training assisting municipal offices with computer repairs, printer sharing, network maintenance, and data processing.',
      highlights: [
        'Rendered 486 hours of active IT service with formal commendation from the Municipal HR Office.',
        'Fixed hardware, printer, and connection problems across municipal departments to keep offices productive.',
        'Assisted staff with data verification, document digitization, and database records.',
      ],
      skillsApplied: ['PC Diagnostics', 'Network Maintenance', 'Printer Sharing', 'Public Service Tech Support'],
    },
  ],

  education: [
    {
      degree: 'Bachelor of Science in Information Technology (BSIT)',
      institution: 'Davao del Norte State College (DNSC)',
      location: 'Panabo City, Davao del Norte',
      period: 'Graduated 2025',
      highlights: [
        'Lead researcher for OKRAI: Okra Plant Disease Detector using AI.',
        'Presented capstone research at the BINHI 4th Research Colloquium.',
        'Earned Cisco Networking Academy Cybersecurity Certifications.',
        'Achieved Level 2 in TOPCIT (International Practical Competency in ICT).',
      ],
    },
  ],
};

