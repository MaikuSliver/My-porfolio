export interface GalleryImage {
  url: string;
  title: string;
  caption: string;
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
          title: 'Server Rack & Switch Enclosure Commissioning',
          caption: 'Mike inside the central network rack during patch panel cabling, switch mounting, and network testing for the mall launch.',
        },
        {
          url: '/assets/aistudio/20251003_105554_586eecd3.jpg',
          title: 'Structured Ethernet Cabling & Switch Patching',
          caption: 'Terminating and dressing high-speed CAT6 patch cables directly into the 48-port core Gigabit switches.',
        },
        {
          url: '/assets/aistudio/20251020_154025_7218ea23.jpg',
          title: 'Core Switch & Structured Patch Panel Dressing',
          caption: 'Clean, color-coded rack cable routing and management ensuring 100% store network uptime and rapid fault tracing.',
        },
        {
          url: '/assets/aistudio/20260628_145840_4fd86e2d.jpg',
          title: 'Fiber Optic Backbone Distribution',
          caption: 'Fiber optic distribution terminal termination linking store wings and perimeter zones directly to the main IT hub.',
        },
        {
          url: '/assets/aistudio/20251129_124336_a4a8edb1.jpg',
          title: 'EDP Operations Center & POS Staging Bench',
          caption: 'Configuring POS receipt printers, barcode scanners, cash drawers, and cashier terminal software in the EDP department.',
        },
        {
          url: '/assets/aistudio/20251111_173456_b2b59e8e.jpg',
          title: 'Fleet Deployment of POS & Office PCs',
          caption: 'Batch staging of Dell OptiPlex desktop workstations imaged with store OS, security policies, and retail software.',
        },
        {
          url: '/assets/aistudio/20251017_151747_890894f5.jpg',
          title: 'Component Diagnostics & Hardware Maintenance',
          caption: 'Hands-on motherboard diagnostics, RAM upgrades, and power supply servicing on mall desktop computers.',
        },
        {
          url: '/assets/aistudio/20251003_105517_728e2783.jpg',
          title: 'Retail Peripherals & Printer Roll Mechanism Service',
          caption: 'Detailed mechanical assembly and testing of specialized cashier roll feeds and thermal/dot-matrix receipt printers.',
        },
        {
          url: '/assets/aistudio/20260126_112458_a150a509.jpg',
          title: 'Preventive Maintenance & Thermal Servicing',
          caption: 'Scheduled hardware cleaning, thermal management, and dust removal routines to maximize hardware lifespan in retail environments.',
        },
        {
          url: '/assets/aistudio/20260524_123919_8f22e815.jpg',
          title: 'Mall Security & CCTV Display Array Inspection',
          caption: 'Routine inspection and display calibration across mall security monitoring consoles and DVR/NVR surveillance streams.',
        },
        {
          url: '/assets/aistudio/20250930_090602_a1c9661b.jpg',
          title: 'Data Center & Active Network Inspection',
          caption: 'Monitoring active network equipment, uninterruptible power supplies (UPS), and router status during operational checks.',
        },
        {
          url: '/assets/aistudio/received_920150120982611_d4b8d785.jpeg',
          title: 'EDP Technical Dispatch & Support Desk',
          caption: 'Monitoring live terminal transactions, handling internal helpdesk requests, and resolving cashier issues promptly.',
        },
        {
          url: '/assets/aistudio/received_1801558334471914_4ed017cf.jpeg',
          title: 'Gaisano Grand Grand Opening Celebration',
          caption: 'Mike and retail store colleagues at the CREDIT department during the landmark grand opening of Gaisano Grand Mall of Carmen.',
        },
        {
          url: '/assets/aistudio/Messenger_creation_5173A1DA-CB30-4350-A9AB-8788314243C0_232e48e0.jpeg',
          title: 'EDP Engineering Crew in the Server Room',
          caption: 'The complete technical and operations team gathered inside the communications and server room during pre-launch sign-off.',
        },
        {
          url: '/assets/aistudio/Messenger_creation_16A9C39F-72C3-43BD-93D3-7B505E3570AA_1a92927b.jpeg',
          title: 'Store IT Support Specialists',
          caption: 'EDP team members ready on-site to handle cashier checkout lane escalations and maintain customer checkout flow.',
        },
        {
          url: '/assets/aistudio/20260405_132728_d610fa03.jpg',
          title: 'Mall Audio-Visual & Multimedia Systems Support',
          caption: 'Setting up high-lumen projection systems, PA audio feeds, and presentation hardware for mall events and marketing activations.',
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
      image: '/images/okrai_plant_disease_ai.jpg',
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
          title: 'Official Certification of Eligibility (CSE-PROF)',
          caption: 'Original Certificate of Eligibility (Cert No. R11-20250904-010) awarded to Mike Angel A. Manipon with an 83.41% rating by the Civil Service Commission Regional Office XI.',
        },
        {
          url: '/assets/aistudio/20250904_112703_8a68128e.jpg',
          title: 'Official In-Person Certificate Claiming',
          caption: 'Mike presenting his official Certificate of Eligibility at the Civil Service Commission Davao Region Regional Office XI.',
        },
        {
          url: '/assets/aistudio/20250904_105407_027c32a9.jpg',
          title: 'CSC Examination Services Division',
          caption: 'Official verification and issuance processing counters (Photocapture & Releasing) at the Civil Service Commission Davao City office.',
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
      title: '486-Hour Government IT Internship',
      tagline: 'Delivered technical assistance, network troubleshooting, and computer maintenance for municipal offices',
      category: 'Infrastructure & Support' as const,
      tags: ['Municipal IT', 'Hands-on Support', 'Network Care', 'Public Service'],
      image: '/images/lgu_municipal_it.jpg',
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

