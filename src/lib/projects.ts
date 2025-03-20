import { companies } from "./companies";
import { Mood, moods } from "./moods";
import { people, Person } from "./people";

export interface Project {
  thumbnail: string;
  banner: string;
  title: string;
  description: string;
  stats: {
    label: string;
    value: string;
  }[];
  callToActions: string[];
  tag: "Environment" | "Energy" | "Education" | "Technology" | "Healthcare";
  roadmap: {
    id: number;
    time: string;
    title: string;
    description: string;
    status: "completed" | "in-progress" | "todo";
  }[];
  participants: {
    name: string;
    logo: string;
    description: string;
  }[];
  initiatives: {
    id: number;
    title: string;
    description: string;
    author: Person;
  }[];
  comments: {
    author: Person;
    content: string;
    mood: Mood;
  }[];
}

export const projects: Project[] = [
  {
    thumbnail: "/projects/t1.jpg",
    banner: "/projects/t1-1.jpg",
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
    participants: companies.filter((_, idx) => idx < 3),
    initiatives: [
      {
        id: 1,
        title: "International Coastal Cleanup Day",
        description:
          "Join thousands of volunteers across 35 countries for our largest coordinated cleanup effort of the year.",
        author: people[0]!,
      },
      {
        id: 2,
        title: "Plastic Circular Economy Hub",
        description:
          "Our new innovation center focused on developing technologies to repurpose recovered ocean plastics into valuable products.",
        author: people[1]!,
      },
    ],
    comments: [
      {
        author: people[2]!,
        content:
          "The coastal cleanup in San Diego was incredible! We collected over 500kg of waste in just one weekend.",
        mood: "excited",
      },
      {
        author: people[2]!,
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
    thumbnail: "/projects/t2.jpg",
    banner: "/projects/t2-1.jpg",
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
    participants: companies.filter((_, idx) => idx % 2 === 0),
    initiatives: [
      {
        id: 1,
        title: "Rural Healthcare Caravan",
        description:
          "Monthly mobile clinic visits to 75 villages providing essential health screenings, vaccinations, and basic treatments.",
        author: people[2]!,
      },
      {
        id: 2,
        title: "Community Health Worker Program",
        description:
          "Training local residents to become frontline healthcare advocates equipped with telehealth tools to connect their communities to medical professionals.",
        author: people[3]!,
      },
    ],
    comments: [
      {
        author: people[4]!,
        content:
          "The mobile clinic program has already detected over 150 cases of diabetes that would have gone undiagnosed. This is truly life-changing work.",
        mood: "loved",
      },
      {
        author: people[5]!,
        content:
          "Our community health workers are becoming trusted resources in their villages. Local ownership is key to sustainability.",
        mood: "excited",
      },
    ],
    callToActions: [
      "Volunteer as a healthcare professional",
      "Donate medical supplies",
      "Sponsor a mobile clinic",
    ],
  },
  {
    thumbnail: "/projects/t3.jpg",
    banner: "/projects/t3-1.jpg",
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
    participants: companies.filter((_, idx) => idx > 2),
    initiatives: [
      {
        id: 1,
        title: "Code Your Future Bootcamp",
        description:
          "Intensive 12-week training program teaching full-stack development skills with guaranteed interview opportunities.",
        author: people[6]!,
      },
      {
        id: 2,
        title: "Young Founders Incubator",
        description:
          "Six-month program supporting student-led startups with mentorship, workspace, and initial funding.",
        author: people[7]!,
      },
      {
        id: 3,
        title: "Girls in Tech Initiative",
        description:
          "Specialized program addressing gender gaps in technology education with female industry mentors and targeted recruitment.",
        author: people[8]!,
      },
    ],
    comments: [
      {
        author: people[9]!,
        content:
          "The bootcamp completely changed my trajectory. I went from working minimum wage to a junior developer role in 6 months.",
        mood: "excited",
      },
      {
        author: people[10]!,
        content:
          "My startup received its first round of funding thanks to the connections made through the Young Founders program!",
        mood: "thumbsy",
      },
      {
        author: people[11]!,
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
    thumbnail: "/projects/t4.jpg",
    banner: "/projects/t4-1.jpg",
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
    participants: companies.filter((_, idx) => idx % 2 === 1),
    initiatives: [
      {
        id: 1,
        title: "Community Power Cooperatives",
        description:
          "Creating locally-owned renewable energy systems that share costs and benefits among neighborhood residents.",
        author: people[2]!,
      },
      {
        id: 2,
        title: "Green Jobs Training Center",
        description:
          "Regional facilities providing hands-on training for renewable energy installation, maintenance, and system design.",
        author: people[12]!,
      },
      {
        id: 3,
        title: "Energy Transition Policy Summit",
        description:
          "Annual gathering of industry leaders, policymakers, and community advocates to accelerate regulatory support for renewables.",
        author: people[13]!,
      },
    ],
    comments: [
      {
        author: people[14]!,
        content:
          "Our community solar project has reduced energy bills by an average of 32% for participating households. The economic impact is immediate.",
        mood: "loved",
      },
      {
        author: people[2]!,
        content:
          "I completed the installation training program last month and already have more job offers than I can handle. This is the future.",
        mood: "thumbsy",
      },
      {
        author: people[2]!,
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
    thumbnail: "/projects/t5.jpg",
    banner: "/projects/t5-1.jpg",
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
    participants: companies.filter((_, idx) => idx < 3),
    initiatives: [
      {
        id: 1,
        title: "Urban Farming Revolution",
        description:
          "Implementing vertical farming technologies in urban environments to grow food in limited spaces with minimal resources.",
        author: people[2]!,
      },
      {
        id: 2,
        title: "Food Rescue Network",
        description:
          "Coordinated system to collect and redistribute surplus food from restaurants, grocers, and farms to food-insecure communities.",
        author: people[15]!,
      },
      {
        id: 3,
        title: "Indigenous Seed Preservation",
        description:
          "Protecting agricultural biodiversity by documenting and preserving traditional crop varieties adapted to local conditions.",
        author: people[16]!,
      },
    ],
    comments: [
      {
        author: people[17]!,
        content:
          "The drought-resistant crop varieties have transformed our community's resilience. We harvested successfully despite the challenging conditions.",
        mood: "excited",
      },
      {
        author: people[18]!,
        content:
          "Our food hub has become more than just a distribution center—it's a community gathering space where knowledge is shared and relationships are built.",
        mood: "loved",
      },
      {
        author: people[19]!,
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
  {
    thumbnail: "/projects/t6.jpg",
    banner: "/projects/t6-1.jpg",
    title: "Working Against Poverty",
    description:
      "Tackling systemic poverty through microfinance initiatives, skills development programs, and community-based economic empowerment strategies focusing on sustainable livelihood creation.",
    stats: [
      { label: "families supported", value: "34.6k" },
      { label: "microloans granted", value: "22.8k" },
      { label: "training graduates", value: "15.3k" },
      { label: "communities reached", value: "412" },
    ],
    tag: "Education",
    roadmap: [
      {
        id: 1,
        time: "Q2 2022",
        title: "Microfinance Infrastructure",
        description:
          "Establish digital platforms and community networks for accessible small business loans and financial literacy education.",
        status: "completed",
      },
      {
        id: 2,
        time: "Q4 2022",
        title: "Skills Training Centers",
        description:
          "Launch regional hubs for vocational training in high-demand sectors including technology, healthcare, and sustainable agriculture.",
        status: "completed",
      },
      {
        id: 3,
        time: "Q2 2023",
        title: "Market Access Program",
        description:
          "Create direct connections between small producers and larger markets through digital marketplaces and supply chain integration.",
        status: "completed",
      },
      {
        id: 4,
        time: "2023-2024",
        title: "Community Economic Centers",
        description:
          "Develop shared economic spaces in underserved areas that provide infrastructure, mentorship, and collective resources.",
        status: "in-progress",
      },
      {
        id: 5,
        time: "2024-2026",
        title: "Social Enterprise Scaling",
        description:
          "Expand successful community businesses through investment networks and operational support to create regional employment engines.",
        status: "todo",
      },
    ],
    participants: companies.filter((_, idx) => idx % 3 === 0),
    initiatives: [
      {
        id: 1,
        title: "Women's Entrepreneurship Collective",
        description:
          "Dedicated support system for women entrepreneurs including tailored financing, mentorship, and childcare solutions during business development.",
        author: people[3]!,
      },
      {
        id: 2,
        title: "Youth Tech Empowerment",
        description:
          "Technology training and startup incubator for youth from economically disadvantaged backgrounds, focusing on practical digital economy skills.",
        author: people[5]!,
      },
      {
        id: 3,
        title: "Rural Economic Development Alliance",
        description:
          "Collaborative network connecting rural communities with resources, markets, and technology to build sustainable local economies.",
        author: people[7]!,
      },
    ],
    comments: [
      {
        author: people[8]!,
        content:
          "The microfinance program helped me start my tailoring business. Two years later, I'm employing five people from my village. This changes everything.",
        mood: "loved",
      },
      {
        author: people[11]!,
        content:
          "The digital skills training opened doors I never knew existed. I now work remotely for clients around the world while staying in my community.",
        mood: "happy",
      },
      {
        author: people[6]!,
        content:
          "Our farming cooperative accessed larger markets through the program. Our income has stabilized and we're investing in more sustainable practices.",
        mood: "thumbsy",
      },
    ],
    callToActions: [
      "Volunteer as a mentor",
      "Support a microloan",
      "Contribute skills",
      "Join a local initiative",
    ],
  },
  {
    thumbnail: "/projects/t7.jpg",
    banner: "/projects/t7-1.jpg",
    title: "Making Science Fiction a Reality",
    description:
      "Accelerating human space exploration through collaborative research, cutting-edge technology development, and educational initiatives aimed at democratizing access to space and establishing sustainable off-world habitation.",
    stats: [
      { label: "research projects", value: "247" },
      { label: "prototype technologies", value: "42" },
      { label: "student engagements", value: "183k" },
      { label: "planned missions", value: "8" },
    ],
    tag: "Technology",
    roadmap: [
      {
        id: 1,
        time: "Q1 2023",
        title: "Advanced Propulsion Research",
        description:
          "Develop and test next-generation propulsion systems to reduce travel time between Earth and Mars by up to 60%.",
        status: "completed",
      },
      {
        id: 2,
        time: "Q3 2023",
        title: "Habitation Materials Innovation",
        description:
          "Create radiation-resistant, self-repairing materials for long-term space habitation using in-situ resources.",
        status: "completed",
      },
      {
        id: 3,
        time: "2024",
        title: "Lunar Gateway Prototype",
        description:
          "Establish testing facility for space agriculture, manufacturing, and habitation systems on lunar-like conditions.",
        status: "in-progress",
      },
      {
        id: 4,
        time: "2025",
        title: "Mars Habitation Simulation",
        description:
          "Launch year-long closed-system simulation with volunteer crew to test psychological and physical support systems.",
        status: "todo",
      },
      {
        id: 5,
        time: "2026-2030",
        title: "First Commercial Moon Base",
        description:
          "Establish initial permanent human presence with research, tourism, and resource utilization capabilities.",
        status: "todo",
      },
    ],
    participants: companies.filter((_, idx) => idx % 4 === 2),
    initiatives: [
      {
        id: 1,
        title: "Global Space Education Network",
        description:
          "Connecting students worldwide with space professionals through virtual classrooms, mentorship programs, and hands-on engineering challenges.",
        author: people[1]!,
      },
      {
        id: 2,
        title: "Open-Source Space Technologies",
        description:
          "Collaborative platform for developing and sharing critical technologies for space exploration without proprietary restrictions.",
        author: people[9]!,
      },
      {
        id: 3,
        title: "Citizen Astronaut Program",
        description:
          "Training protocol and selection process to prepare non-professional astronauts for future space habitation and research missions.",
        author: people[4]!,
      },
    ],
    comments: [
      {
        author: people[10]!,
        content:
          "My daughter participated in the habitat design challenge and now she's studying aerospace engineering. These programs are inspiring the next generation.",
        mood: "loved",
      },
      {
        author: people[0]!,
        content:
          "The open-source approach to life support systems has accelerated progress beyond what any single company could achieve. This is how we'll get to Mars.",
        mood: "thumbsy",
      },
      {
        author: people[15]!,
        content:
          "I never thought I'd have a chance to contribute to space exploration as a farmer, but the agriculture research program values my expertise. We're all part of this journey.",
        mood: "happy",
      },
    ],
    callToActions: [
      "Join a research team",
      "Support space education",
      "Test prototype technologies",
      "Apply for simulation missions",
    ],
  },
];