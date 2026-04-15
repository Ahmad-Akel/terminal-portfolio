import { useContext, useEffect } from "react";
import _ from "lodash";
import { ProjectsIntro } from "../styles/Projects.styled";
import { Cmd, CmdDesc, CmdList, HelpWrapper } from "../styles/Help.styled";
import { generateTabs } from "../../utils/funcs";
import { termContext } from "../Terminal";

const Contact: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  const currentCommand = _.split(history[0], " ");

  useEffect(() => {
    if (rerender && currentCommand[0] === "contact") {
      if (currentCommand[1] === "1") {
        window.open("mailto:ahmad.akel.dev@gmail.com", "_self");
      } else if (currentCommand[1] === "2") {
        window.open("https://github.com/ahmadakel", "_blank");
      } else if (currentCommand[1] === "3") {
        window.open("https://linkedin.com/in/ahmad-akel", "_blank");
      }
    }
  }, [rerender]);

  return (
    <HelpWrapper data-testid="contact">
      <ProjectsIntro>Get in touch</ProjectsIntro>
      {contacts.map(({ id, title, value, tab }) => (
        <CmdList key={id}>
          <Cmd>{`${id}. ${title}`}</Cmd>
          {generateTabs(tab)}
          <CmdDesc>- {value}</CmdDesc>
        </CmdList>
      ))}
    </HelpWrapper>
  );
};

const contacts = [
  { id: 1, title: "Email", value: "ahmad.akel.dev@gmail.com", tab: 4 },
  { id: 2, title: "GitHub", value: "github.com/ahmadakel", tab: 3 },
  { id: 3, title: "LinkedIn", value: "linkedin.com/in/ahmad-akel", tab: 1 },
];

export default Contact;
