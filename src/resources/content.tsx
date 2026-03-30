import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Emunot Sharma",
  lastName: "Emmanuel",
  name: `Emunot Sharma Emmanuel`,
  role: "Creative Designer & IT Specialist",
  avatar: "/images/avatar.jpg",
  email: "ermunotsharma@gmail.com",
  location: "Africa/Kampala", // Uganda
  languages: ["English", "Luganda"], // Luganda is common in Uganda
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and technology</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/sharma5pac",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/256754428128",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Move people, not just screens.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">TechCrunch Limited</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/techcrunch-limited-website",
  },
  subline: (
    <>
      I'm Emunot, a <Text as="span" size="xl" weight="strong">Creative Designer & IT Specialist</Text> based in Kampala, Uganda. 
      I create things that look simple, but feel alive.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Emunot Sharma Emmanuel is a Kampala-based Creative Designer & IT Specialist with 3 years of hands-on experience in Uganda's competitive 
        graphics and technology sectors. He demonstrates strong leadership and problem-solving abilities with a commitment to delivering high-quality results.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Tech Crunch Limited, Kampala",
        timeframe: "Present",
        role: "Computer Programmer & Creative Designer",
        achievements: [
          <>
            Designed and executed creative motion graphics and visual assets using Adobe Creative Suite and CapCut.
          </>,
          <>
            Managed social media content scheduling and analyzed engagement data using Meta Business Suite.
          </>,
          <>
            Utilized AI analysis tools to improve design efficiency and data handling.
          </>
        ],
        images: [],
      },
      {
        company: "Nasser Road, Kampala",
        timeframe: "Previous",
        role: "Graphics Designer & Printing",
        achievements: [
          <>
            Worked in a fast-paced environment handling high-volume graphics design and printing orders.
          </>,
          <>
            Provided expert Microsoft Word and typesetting services for professional documents and academic papers.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Kyadondo Secondary School",
        description: <>UACE - A Level.</>,
      },
      {
        name: "Kawempe Muslim Secondary School",
        description: <>UCE - O Level (Uganda Certificate of Education).</>,
      },
      {
        name: "Tech Crunch Limited",
        description: <>Certificate in Designing, WordPress & Programming.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Design & Media",
        description: (
          <>Expertise in Graphics Design, Motion Graphics, Video Editing, and Adobe Creative Suite.</>
        ),
        tags: [
          { name: "Graphics Design", icon: "figma" },
          { name: "Video Editing", icon: "play" },
        ],
        images: [],
      },
      {
        title: "Tech & AI",
        description: (
          <>Proficient in AI Analysis, lightweight Computer Programming, and Web Design.</>
        ),
        tags: [
          { name: "AI Analysis", icon: "plus" },
          { name: "Programming", icon: "code" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/about-profile.png",
      alt: "Emunot Sharma Emmanuel",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
