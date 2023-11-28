import { useTranslation } from "react-i18next";
import * as Styled from "./styles";

const ButtonGroup = () => {
  const { t } = useTranslation();
  return (
    <Styled.ContainerButtons>
      <Styled.Button to="/serie">{t("series")}</Styled.Button>
      <Styled.Button to="/movie">{t("movies")}</Styled.Button>
    </Styled.ContainerButtons>
  );
};

export default ButtonGroup;
