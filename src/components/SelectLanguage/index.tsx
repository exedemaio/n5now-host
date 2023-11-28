import * as Styled from "./styles";
interface Props {
  options: Array<Option>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface Option {
  code: string;
  label: string;
}

const SelectLanguage = ({ options, onChange }: Props) => {
  return (
    <Styled.ContainerLanguage>
      <Styled.LanguageLabel>
        Seleccionar idioma:{" "}
        <Styled.LanguageSelector defaultValue={"es"} onChange={onChange}>
          {options.map(({ code, label }) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </Styled.LanguageSelector>
      </Styled.LanguageLabel>
    </Styled.ContainerLanguage>
  );
};

export default SelectLanguage;
