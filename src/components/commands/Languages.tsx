import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Languages: React.FC = () => {
  return (
    <Wrapper data-testid="languages">
      <EduIntro>Spoken languages</EduIntro>
      {languages.map(({ lang, level }) => (
        <EduList key={lang}>
          <div className="title">{lang}</div>
          <div className="desc">{level}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const languages = [
  { lang: "Arabic", level: "Native" },
  { lang: "English", level: "Professional" },
  { lang: "Czech", level: "Intermediate" },
];

export default Languages;
