import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Ahmad Akel</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a Frontend/Fullstack Engineer</HighlightAlt> based in
        Prague, Czechia.
      </p>
      <p>
        5+ years building enterprise-scale React & Next.js applications. <br />
        Experienced in component architecture, design systems, and cross-functional Agile teams.
      </p>
      <p>
        Currently seeking a Senior Frontend or Fullstack role.
      </p>
    </AboutWrapper>
  );
};

export default About;
