import About from "./commands/About";
import Achievements from "./commands/Achievements";
import Clear from "./commands/Clear";
import Contact from "./commands/Contact";
import Cv from "./commands/Cv";
import Education from "./commands/Education";
import Email from "./commands/Email";
import Experience from "./commands/Experience";
import Help from "./commands/Help";
import Welcome from "./commands/Welcome";
import History from "./commands/History";
import Languages from "./commands/Languages";
import Projects from "./commands/Projects";
import Skills from "./commands/Skills";
import Socials from "./commands/Socials";
import Themes from "./commands/Themes";
import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import { termContext } from "./Terminal";
import { useContext } from "react";

type Props = {
  index: number;
  cmd: string;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
  const { arg } = useContext(termContext);

  const specialCmds = ["projects", "socials", "themes", "contact"];

  // return 'Usage: <cmd>' if command arg is not valid
  // eg: about tt
  if (!specialCmds.includes(cmd) && arg.length > 0)
    return <UsageDiv data-testid="usage-output">Usage: {cmd}</UsageDiv>;

  return (
    <OutputContainer data-testid={index === 0 ? "latest-output" : null}>
      {
        {
          about: <About />,
          achievements: <Achievements />,
          clear: <Clear />,
          contact: <Contact />,
          cv: <Cv />,
          education: <Education />,
          email: <Email />,
          experience: <Experience />,
          help: <Help />,
          history: <History />,
          languages: <Languages />,
          projects: <Projects />,
          skills: <Skills />,
          socials: <Socials />,
          themes: <Themes />,
          welcome: <Welcome />,
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
