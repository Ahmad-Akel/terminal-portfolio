import { useContext, useEffect } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Cv: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  const currentCommand = _.split(history[0], " ");

  useEffect(() => {
    if (rerender && currentCommand[0] === "cv" && currentCommand.length <= 1) {
      const link = document.createElement("a");
      link.href = "/Ahmad_Akel_CV.pdf";
      link.download = "Ahmad_Akel_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [rerender]);

  return (
    <Wrapper>
      <span>Downloading Ahmad_Akel_CV.pdf...</span>
    </Wrapper>
  );
};

export default Cv;
