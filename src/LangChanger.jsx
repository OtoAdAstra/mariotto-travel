import { useState } from "react";

export default function LangChanger() {
  const [lang, setLang] = useState("ge");
  const langToEng = () => {
    setLang("en");
  };

  const langToGe = () => {
    setLang("ge");
  };

  return { lang, langToEng, langToGe };
}
