import React from "react";
import { useTranslation } from "react-i18next";
import useSwitchLanguage from "./hooks/useSwitchLanguage";
import { BrowserRouter } from "react-router-dom";
import * as Styled from "./styles";
import SelectLanguage from "./components/SelectLanguage";
import ButtonGroup from "./components/ButtonGroup";
import Router from "./components/Router";

const LANGUAGES = [
  { label: "Español", code: "es" },
  { label: "English", code: "en" },
];

const App = () => {
  const { t } = useTranslation();
  const { switchAllLanguages } = useSwitchLanguage();

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    switchAllLanguages(lang_code);
  };

  return (
    <BrowserRouter>
      <Styled.HostContainer>
        <SelectLanguage options={LANGUAGES} onChange={onChangeLang} />

        <Styled.HostTitle>{t("title")}</Styled.HostTitle>
        <Styled.HostSubTitle>{t("subtitle")}</Styled.HostSubTitle>

        <ButtonGroup />

        <Router />
      </Styled.HostContainer>
    </BrowserRouter>
  );
};

export default App;
