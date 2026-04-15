import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Achievements: React.FC = () => {
  return (
    <Wrapper data-testid="achievements">
      <EduIntro>Key career highlights</EduIntro>
      {achievements.map(({ stat, context }) => (
        <EduList key={stat}>
          <div className="title">{stat}</div>
          <div className="desc">{context}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const achievements = [
  {
    stat: "6M+ insured clients served",
    context: "National Information System (NIS) built at VZP — Czech Health Insurance Agency",
  },
  {
    stat: "30% faster developer onboarding",
    context: "Mentored 5+ engineers on the A12 platform at MGM Technology Partners",
  },
  {
    stat: "85% test coverage",
    context: "Jest/Cypress coverage on critical user workflows at MGM Technology Partners",
  },
  {
    stat: "40% faster page load",
    context: "Redesigned WebAccess Device Management Platform (WADMP) with Vue.js at Advantech",
  },
  {
    stat: "60% fewer styling bugs",
    context: "Migrated legacy CSS to modular SASS components at Advantech",
  },
  {
    stat: "200+ enterprise clients",
    context: "Dashboard features shipped and adopted at Advantech",
  },
];

export default Achievements;
