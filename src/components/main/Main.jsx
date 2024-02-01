import { React, useState } from "react";
import Search from "./search/Search";
import Word from "./wordData/WordData";

const Main = ({ theme }) => {
  const [value, setValue] = useState('');
  const [words, setWords] = useState([]);

  const handleWords = async (evt) => {
    evt.preventDefault();
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`
    );
    if (response.status === 404) {
      setWords([404]);
    } else {
      const data = await response.json();
      setWords(data);
    }
  };

  return (
    <div>
      <Search theme={theme} handleWords={handleWords} value={value} setValue={setValue} />
      <Word words={words} />
    </div>
  );
};

export default Main;
