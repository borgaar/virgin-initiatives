import {
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";

export const moods = [
  {
    name: "Excited",
    value: "excited",
    icon: FireIcon,
    iconColor: "text-white",
    bgColor: "bg-red-500",
    text: "text-red-500",
  },
  {
    name: "Loved",
    value: "loved",
    icon: HeartIcon,
    iconColor: "text-white",
    bgColor: "bg-pink-400",
    text: "text-pink-400",
  },
  {
    name: "Happy",
    value: "happy",
    icon: FaceSmileIcon,
    iconColor: "text-white",
    bgColor: "bg-green-400",
    text: "text-green-400",
  },
  {
    name: "Virgin",
    value: "virgin",
    icon: FaceFrownIcon,
    iconColor: "text-white",
    bgColor: "bg-yellow-400",
    text: "text-yellow-400",
  },
  {
    name: "Thumbsy",
    value: "thumbsy",
    icon: HandThumbUpIcon,
    iconColor: "text-white",
    bgColor: "bg-blue-500",
    text: "text-blue-500",
  },
  {
    name: "I feel nothing",
    value: null,
    icon: XMarkIcon,
    iconColor: "text-gray-400",
    bgColor: "bg-transparent",
    text: "text-gray-400",
  },
] as const;

export interface Project {
  title: string; // short project title
  description: string; // longer description
  stats: {
    label: string; // ex. companies (number of companies participaing), participants, progress, target year
    value: string; // 7, 1.2k, 25% etc
  }[];
  callToActions: string[]; // ex. "Join the initiative", "Donate now" etc.
  tag: "Environment" | "Energy" | "Education" | "Technology" | "Healthcare"; // ex. Environment, Health, Education, Poverty etc.
  roadmap: {
    id: number; // increment from 1
    time: string; // ex. Q1 2022, Q3 2022, 2025-2026 etc.
    title: string;
    description: string;
    status: "completed" | "in-progress" | "todo";
  }[];
  participants: {
    name: string; // company name
    logo: string; // path to logo
    description: string; // short description
  }[]; // all participants should be daughter companies of Virigin Group
  initiatives: {
    id: number; // auto-increment from 1
    image: string; // image URL
    title: string;
    description: string;
    author: string; // Firstname Lastname
  }[];
  comments: {
    author: string; // Firstname Lastname
    avatar: string; // url
    content: string;
    mood: (typeof moods)[number]["value"]; // "excited" | "loved" | "happy" | "virgin" | "thumbsy" | null
  }[];
}

export const projects: Project[] = [
  {
    title: "Ocean Conservation Initiative",
    description:
      "A collaborative effort to reduce ocean plastic pollution by 75% across major coastlines by implementing innovative waste management solutions and promoting sustainable consumer behaviors.",
    stats: [
      { label: "companies", value: "12" },
      { label: "participants", value: "3.4k" },
      { label: "progress", value: "42%" },
      { label: "target year", value: "2028" },
    ],
    tag: "Environment",
    roadmap: [
      {
        id: 1,
        time: "Q2 2023",
        title: "Initial Assessment",
        description:
          "Complete baseline pollution measurements across 50 target coastlines and establish data collection methodologies.",
        status: "completed",
      },
      {
        id: 2,
        time: "Q4 2023",
        title: "Technology Deployment",
        description:
          "Implement first-wave cleanup technologies including autonomous collection vessels and filtration systems.",
        status: "completed",
      },
      {
        id: 3,
        time: "Q2 2024",
        title: "Community Programs Launch",
        description:
          "Initiate educational programs and local partnerships in coastal communities to support waste reduction.",
        status: "in-progress",
      },
      {
        id: 4,
        time: "2025-2026",
        title: "Policy Development Phase",
        description:
          "Work with local governments to implement sustainable waste management policies and infrastructure improvements.",
        status: "todo",
      },
    ],
    participants: [
      {
        name: "Virgin Voyages",
        logo: "/logos/virgin-voyages.png",
        description:
          "Leading the marine vessel sustainability transformations and providing transport support for research teams.",
      },
      {
        name: "Virgin Active",
        logo: "/logos/virgin-active.png",
        description:
          "Organizing community cleanup events and volunteer recruitment throughout coastal regions.",
      },
      {
        name: "Virgin Hotels",
        logo: "/logos/virgin-hotels.png",
        description:
          "Implementing plastic-free operations across all properties and serving as education hubs in coastal locations.",
      },
    ],
    initiatives: [
      {
        id: 1,
        image: "/images/beach-cleanup.jpg",
        title: "International Coastal Cleanup Day",
        description:
          "Join thousands of volunteers across 35 countries for our largest coordinated cleanup effort of the year.",
        author: "Emma Thompson",
      },
      {
        id: 2,
        image: "/images/circular-economy.jpg",
        title: "Plastic Circular Economy Hub",
        description:
          "Our new innovation center focused on developing technologies to repurpose recovered ocean plastics into valuable products.",
        author: "Marcus Chen",
      },
    ],
    comments: [
      {
        author: "Sarah Johnson",
        avatar: "/avatars/sarah-j.jpg",
        content:
          "The coastal cleanup in San Diego was incredible! We collected over 500kg of waste in just one weekend.",
        mood: "excited",
      },
      {
        author: "James Peterson",
        avatar: "/avatars/james-p.jpg",
        content:
          "The new filtration technology is showing promising results. Initial tests show 95% capture rate for microplastics.",
        mood: "happy",
      },
    ],
    callToActions: [
      "Join a cleanup event",
      "Adopt a coastline",
      "Support policy change",
    ],
  },
  {
    title: "Global Healthcare Access",
    description:
      "Expanding access to essential healthcare services in underserved regions through mobile clinics, telehealth infrastructure, and healthcare professional training programs.",
    stats: [
      { label: "countries", value: "9" },
      { label: "beneficiaries", value: "1.7M" },
      { label: "clinics", value: "214" },
      { label: "completion", value: "35%" },
    ],
    tag: "Healthcare",
    roadmap: [
      {
        id: 1,
        time: "Q1 2023",
        title: "Needs Assessment",
        description:
          "Complete healthcare availability mapping in target regions and identify priority intervention areas.",
        status: "completed",
      },
      {
        id: 2,
        time: "Q3 2023",
        title: "Mobile Clinic Deployment",
        description:
          "Launch first fleet of 50 mobile healthcare units equipped with basic diagnostic and treatment capabilities.",
        status: "completed",
      },
      {
        id: 3,
        time: "Q1 2024",
        title: "Telehealth Network Expansion",
        description:
          "Establish reliable connectivity and equipment in 100 remote locations to enable virtual consultations.",
        status: "in-progress",
      },
      {
        id: 4,
        time: "2025",
        title: "Healthcare Professional Training",
        description:
          "Train 1,000 local healthcare workers in primary care, maternal health, and preventive medicine.",
        status: "todo",
      },
    ],
    participants: [
      {
        name: "Virgin Unite",
        logo: "/logos/virgin-unite.png",
        description:
          "Providing core funding and strategic oversight for the global healthcare initiative.",
      },
      {
        name: "Virgin Pulse",
        logo: "/logos/virgin-pulse.png",
        description:
          "Developing digital health tracking tools and preventative care protocols for deployment in underserved areas.",
      },
      {
        name: "Virgin Media",
        logo: "/logos/virgin-media.png",
        description:
          "Building telecommunications infrastructure to enable telemedicine in remote regions.",
      },
    ],
    initiatives: [
      {
        id: 1,
        image: "/images/mobile-clinic.jpg",
        title: "Rural Healthcare Caravan",
        description:
          "Monthly mobile clinic visits to 75 villages providing essential health screenings, vaccinations, and basic treatments.",
        author: "Dr. Priya Patel",
      },
      {
        id: 2,
        image: "/images/telehealth-training.jpg",
        title: "Community Health Worker Program",
        description:
          "Training local residents to become frontline healthcare advocates equipped with telehealth tools to connect their communities to medical professionals.",
        author: "Thomas Nelson",
      },
    ],
    comments: [
      {
        author: "Dr. Michelle Wong",
        avatar: "/avatars/michelle-w.jpg",
        content:
          "The mobile clinic program has already detected over 150 cases of diabetes that would have gone undiagnosed. This is truly life-changing work.",
        mood: "loved",
      },
      {
        author: "Robert Kincaid",
        avatar: "/avatars/robert-k.jpg",
        content:
          "Our community health workers are becoming trusted resources in their villages. Local ownership is key to sustainability.",
        mood: "virgin",
      },
    ],
    callToActions: [
      "Volunteer as a healthcare professional",
      "Donate medical supplies",
      "Sponsor a mobile clinic",
    ],
  },
  {
    title: "Future Skills Academy",
    description:
      "Equipping underprivileged youth with technology skills, entrepreneurship training, and meaningful mentorship to create pathways to economic opportunity in the digital economy.",
    stats: [
      { label: "students", value: "5.2k" },
      { label: "mentors", value: "378" },
      { label: "courses", value: "43" },
      { label: "job placement", value: "78%" },
    ],
    tag: "Education",
    roadmap: [
      {
        id: 1,
        time: "Q4 2022",
        title: "Curriculum Development",
        description:
          "Design adaptable learning programs focused on coding, digital marketing, and entrepreneurial thinking.",
        status: "completed",
      },
      {
        id: 2,
        time: "Q2 2023",
        title: "Pilot Programs",
        description:
          "Launch initial training cohorts in 5 major cities with 250 student participants.",
        status: "completed",
      },
      {
        id: 3,
        time: "Q4 2023",
        title: "Digital Platform Launch",
        description:
          "Release online learning environment to extend reach beyond physical locations.",
        status: "completed",
      },
      {
        id: 4,
        time: "2024-2025",
        title: "Global Expansion",
        description:
          "Scale program to 25 countries with localized curriculum adaptations and regional industry partnerships.",
        status: "in-progress",
      },
    ],
    participants: [
      {
        name: "Virgin Orbit",
        logo: "/logos/virgin-orbit.png",
        description:
          "Providing aerospace engineering mentors and developing STEM curriculum modules.",
      },
      {
        name: "Virgin Galactic",
        logo: "/logos/virgin-galactic.png",
        description:
          "Offering space technology demonstration workshops and innovation challenges for students.",
      },
      {
        name: "Virgin StartUp",
        logo: "/logos/virgin-startup.png",
        description:
          "Leading entrepreneurship training and providing seed funding for student ventures.",
      },
      {
        name: "Virgin Hyperloop",
        logo: "/logos/virgin-hyperloop.png",
        description:
          "Hosting transportation technology internships and supporting engineering projects.",
      },
    ],
    initiatives: [
      {
        id: 1,
        image: "/images/coding-bootcamp.jpg",
        title: "Code Your Future Bootcamp",
        description:
          "Intensive 12-week training program teaching full-stack development skills with guaranteed interview opportunities.",
        author: "Alex Rivera",
      },
      {
        id: 2,
        image: "/images/entrepreneurship.jpg",
        title: "Young Founders Incubator",
        description:
          "Six-month program supporting student-led startups with mentorship, workspace, and initial funding.",
        author: "Olivia Washington",
      },
      {
        id: 3,
        image: "/images/girls-tech.jpg",
        title: "Girls in Tech Initiative",
        description:
          "Specialized program addressing gender gaps in technology education with female industry mentors and targeted recruitment.",
        author: "Sophia Lee",
      },
    ],
    comments: [
      {
        author: "Jamal Wilson",
        avatar: "/avatars/jamal-w.jpg",
        content:
          "The bootcamp completely changed my trajectory. I went from working minimum wage to a junior developer role in 6 months.",
        mood: "excited",
      },
      {
        author: "Lisa Chen",
        avatar: "/avatars/lisa-c.jpg",
        content:
          "My startup received its first round of funding thanks to the connections made through the Young Founders program!",
        mood: "thumbsy",
      },
      {
        author: "David Okafor",
        avatar: "/avatars/david-o.jpg",
        content:
          "The mentorship component makes all the difference. Having someone believe in your potential is truly motivating.",
        mood: "happy",
      },
    ],
    callToActions: [
      "Become a mentor",
      "Sponsor a student",
      "Host an internship",
      "Donate equipment",
    ],
  },
  {
    title: "Renewable Energy Transition",
    description:
      "Accelerating the adoption of renewable energy technologies across residential and commercial sectors through innovative financing models, installation training, and policy advocacy.",
    stats: [
      { label: "installations", value: "12.7k" },
      { label: "carbon offset", value: "89k tons" },
      { label: "jobs created", value: "3.4k" },
      { label: "target capacity", value: "250MW" },
    ],
    tag: "Environment",
    roadmap: [
      {
        id: 1,
        time: "Q3 2022",
        title: "Financing Model Development",
        description:
          "Create accessible payment plans and community investment structures to reduce upfront costs.",
        status: "completed",
      },
      {
        id: 2,
        time: "Q1 2023",
        title: "Installer Training Program",
        description:
          "Develop and implement certification program for solar and wind installation technicians.",
        status: "completed",
      },
      {
        id: 3,
        time: "Q4 2023",
        title: "Community Solar Pilots",
        description:
          "Launch shared renewable energy projects in 15 communities with limited access to individual installations.",
        status: "completed",
      },
      {
        id: 4,
        time: "2024",
        title: "Policy Reform Initiative",
        description:
          "Work with policymakers to implement favorable renewable energy regulations and incentives.",
        status: "in-progress",
      },
      {
        id: 5,
        time: "2025-2027",
        title: "Grid Integration Solutions",
        description:
          "Develop storage technologies and grid management tools to optimize renewable energy utilization.",
        status: "todo",
      },
    ],
    participants: [
      {
        name: "Virgin Green Fund",
        logo: "/logos/virgin-green-fund.png",
        description:
          "Providing capital investment for utility-scale renewable energy projects and startup technologies.",
      },
      {
        name: "Virgin Earth",
        logo: "/logos/virgin-earth.png",
        description:
          "Leading carbon accounting and environmental impact assessment for all renewable projects.",
      },
      {
        name: "Virgin Limited Edition",
        logo: "/logos/virgin-limited-edition.png",
        description:
          "Converting all properties to 100% renewable energy as showcase implementations.",
      },
    ],
    initiatives: [
      {
        id: 1,
        image: "/images/solar-community.jpg",
        title: "Community Power Cooperatives",
        description:
          "Creating locally-owned renewable energy systems that share costs and benefits among neighborhood residents.",
        author: "Michael Greenberg",
      },
      {
        id: 2,
        image: "/images/training-center.jpg",
        title: "Green Jobs Training Center",
        description:
          "Regional facilities providing hands-on training for renewable energy installation, maintenance, and system design.",
        author: "Alisha Patel",
      },
      {
        id: 3,
        image: "/images/policy-summit.jpg",
        title: "Energy Transition Policy Summit",
        description:
          "Annual gathering of industry leaders, policymakers, and community advocates to accelerate regulatory support for renewables.",
        author: "Daniel Martinez",
      },
    ],
    comments: [
      {
        author: "Karen Winters",
        avatar: "/avatars/karen-w.jpg",
        content:
          "Our community solar project has reduced energy bills by an average of 32% for participating households. The economic impact is immediate.",
        mood: "loved",
      },
      {
        author: "Trevor Jackson",
        avatar: "/avatars/trevor-j.jpg",
        content:
          "I completed the installation training program last month and already have more job offers than I can handle. This is the future.",
        mood: "thumbsy",
      },
      {
        author: "Maria Gonzalez",
        avatar: "/avatars/maria-g.jpg",
        content:
          "The financing model made it possible for our small business to go 100% renewable without affecting our bottom line. Brilliant approach.",
        mood: "happy",
      },
    ],
    callToActions: [
      "Calculate your savings",
      "Join a community project",
      "Support policy change",
      "Train for green jobs",
    ],
  },
  {
    title: "Food Security Alliance",
    description:
      "Combating hunger and food insecurity through sustainable agriculture practices, supply chain innovations, and equitable food distribution systems in vulnerable communities.",
    stats: [
      { label: "regions", value: "18" },
      { label: "farms", value: "4.3k" },
      { label: "meals", value: "12M" },
      { label: "waste reduction", value: "62%" },
    ],
    tag: "Healthcare",
    roadmap: [
      {
        id: 1,
        time: "Q2 2023",
        title: "Food System Assessment",
        description:
          "Complete comprehensive analysis of agricultural production, distribution inefficiencies, and access barriers.",
        status: "completed",
      },
      {
        id: 2,
        time: "Q4 2023",
        title: "Sustainable Farming Program",
        description:
          "Implement regenerative agriculture training and resource distribution to 1,000 small-scale farmers.",
        status: "completed",
      },
      {
        id: 3,
        time: "Q2 2024",
        title: "Distribution Network Optimization",
        description:
          "Develop cold chain infrastructure and logistics solutions to reduce food waste in transport.",
        status: "in-progress",
      },
      {
        id: 4,
        time: "Q4 2024",
        title: "Community Food Hubs",
        description:
          "Establish 50 local centers for food processing, distribution, and nutrition education.",
        status: "in-progress",
      },
      {
        id: 5,
        time: "2025-2026",
        title: "Policy and Market Development",
        description:
          "Create favorable regulatory frameworks and market connections for small-scale producers.",
        status: "todo",
      },
    ],
    participants: [
      {
        name: "Virgin Wines",
        logo: "/logos/virgin-wines.png",
        description:
          "Supporting agricultural diversification and providing supply chain expertise for food distribution.",
      },
      {
        name: "Virgin Atlantic Cargo",
        logo: "/logos/virgin-atlantic-cargo.png",
        description:
          "Offering logistics support and transportation solutions for food delivery to remote areas.",
      },
      {
        name: "Virgin Produced",
        logo: "/logos/virgin-produced.png",
        description:
          "Creating educational content and documentaries to raise awareness about food security challenges.",
      },
    ],
    initiatives: [
      {
        id: 1,
        image: "/images/vertical-farming.jpg",
        title: "Urban Farming Revolution",
        description:
          "Implementing vertical farming technologies in urban environments to grow food in limited spaces with minimal resources.",
        author: "Nina Peron",
      },
      {
        id: 2,
        image: "/images/food-rescue.jpg",
        title: "Food Rescue Network",
        description:
          "Coordinated system to collect and redistribute surplus food from restaurants, grocers, and farms to food-insecure communities.",
        author: "Carlos Mendez",
      },
      {
        id: 3,
        image: "/images/seed-bank.jpg",
        title: "Indigenous Seed Preservation",
        description:
          "Protecting agricultural biodiversity by documenting and preserving traditional crop varieties adapted to local conditions.",
        author: "Amara Johnson",
      },
    ],
    comments: [
      {
        author: "Fatima Hassan",
        avatar: "/avatars/fatima-h.jpg",
        content:
          "The drought-resistant crop varieties have transformed our community's resilience. We harvested successfully despite the challenging conditions.",
        mood: "excited",
      },
      {
        author: "George Mbeki",
        avatar: "/avatars/george-m.jpg",
        content:
          "Our food hub has become more than just a distribution center—it's a community gathering space where knowledge is shared and relationships are built.",
        mood: "virgin",
      },
      {
        author: "Lucia Fernandez",
        avatar: "/avatars/lucia-f.jpg",
        content:
          "The mobile marketplace has reached 15 previously underserved villages, bringing fresh produce to over 8,000 people who previously had no access.",
        mood: "happy",
      },
    ],
    callToActions: [
      "Volunteer at a food hub",
      "Support a farmer",
      "Reduce your food waste",
      "Advocate for policy change",
    ],
  },
];
