import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Experience: React.FC = () => {
  return (
    <Wrapper data-testid="experience">
      <EduIntro>My work experience</EduIntro>
      {experience.map(({ title, company, period, location, highlights }) => (
        <EduList key={title + company}>
          <div className="title">{title} · {company}</div>
          <div className="desc">{period} | {location}</div>
          {highlights.map((h, i) => (
            <div className="desc" key={i}>· {h}</div>
          ))}
        </EduList>
      ))}
    </Wrapper>
  );
};

const experience = [
  {
    title: "Frontend Developer",
    company: "VZP (Czech Health Insurance Agency)",
    period: "Oct 2024 – Present",
    location: "Prague, Czechia",
    highlights: [
      "Building the core National Information System (NIS) serving 6M+ insured clients",
      "Custom production-grade component library from scratch, pixel-perfect to Figma",
      "Stack: Next.js · TypeScript · React Query · Storybook · Jest · CSS Modules",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "MSD (Pharmaceutical Company)",
    period: "Sep 2023 – Oct 2024",
    location: "Prague, Czechia",
    highlights: [
      "Built a BI portal consolidating multiple data sources for global pharma operations",
      "Owned frontend code quality via structured PR reviews and integration tests",
      "Stack: Next.js · TypeScript · Prisma · Zustand · PostgreSQL · Vitest · Sass",
    ],
  },
  {
    title: "Frontend Developer",
    company: "MGM Technology Partners",
    period: "May 2022 – Aug 2023",
    location: "Prague, Czechia",
    highlights: [
      "Enterprise apps with A12 (Model Driven Low Code) · React · Redux/Redux Saga",
      "Mentored 5+ developers, reducing onboarding time by 30%",
      "Achieved 85% test coverage (Jest/Cypress) for critical user workflows",
    ],
  },
  {
    title: "Junior Frontend Developer",
    company: "Advantech (IoT Solutions)",
    period: "Sep 2021 – Apr 2022",
    location: "Brno, Czechia",
    highlights: [
      "Redesigned WADMP using Vue.js, improving page load speed by 40%",
      "Dashboard features adopted by 200+ enterprise clients",
      "Modular SASS components, reducing styling bugs by 60%",
    ],
  },
];

export default Experience;
