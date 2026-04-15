import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Skills: React.FC = () => {
  return (
    <Wrapper data-testid="skills">
      <EduIntro>My technical skills</EduIntro>
      {skills.map(({ category, items }) => (
        <EduList key={category}>
          <div className="title">{category}</div>
          <div className="desc">{items}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const skills = [
  {
    category: "Languages",
    items: "JavaScript · TypeScript · Python · HTML/CSS",
  },
  {
    category: "Frontend",
    items: "React · Next.js · Redux · Tailwind · Jest · Cypress · Web Vitals · WCAG",
  },
  {
    category: "Backend",
    items: "Node.js · Express · PostgreSQL · Prisma",
  },
  {
    category: "DevOps",
    items: "CI/CD · Git · Docker",
  },
  {
    category: "Soft Skills",
    items: "Cross-team Collaboration · Mentorship · Agile",
  },
];

export default Skills;
