import useSwitchAppSerieLanguage from "n5nowSerie/hooks/useSwitchAppSerieLanguage";
import useSwitchAppMovieLanguage from "n5nowMovie/hooks/useSwitchAppMovieLanguage";
import appInstance from "../i18n";

const useSwitchLanguage = () => {
  const switchAppSerieLanguageHook = useSwitchAppSerieLanguage();
  const switchAppMovieLanguageHook = useSwitchAppMovieLanguage();

  // App Host
  const switchAppLanguage = (languageCode: any) =>
    appInstance.changeLanguage(languageCode);
  // App Serie
  const switchAppSerieLanguage = (languageCode: any) =>
    switchAppSerieLanguageHook(languageCode);
  // App Movie
  const switchAppMovieLanguage = (languageCode: any) =>
    switchAppMovieLanguageHook(languageCode);
  // All apps
  const switchAllLanguages = (languageCode: any) => {
    switchAppLanguage(languageCode);
    switchAppSerieLanguage(languageCode);
    switchAppMovieLanguage(languageCode);
  };

  return {
    switchAppLanguage,
    switchAppSerieLanguage,
    switchAppMovieLanguage,
    switchAllLanguages,
  };
};

export default useSwitchLanguage;
