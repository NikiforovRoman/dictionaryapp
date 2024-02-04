import {React, useRef} from "react";
import s from "./wordData.module.scss";
import { FaExternalLinkAlt } from "react-icons/fa";
import { AiFillAudio } from "react-icons/ai";

const Word = ({ words }) => {

  const ref = useRef();
  const playAudio = () => {
    ref.current.play();
  }

  let phoneticData = "";
  words[0]?.phonetics?.forEach((phonetic) => {
    if (phonetic.text) phoneticData = phonetic.text;
  });
  const audio = words[0]?.phonetics.find((phone) => phone.audio !== "")?.audio;

  return (
    <section className={s.word}>
      {words[0] === 404 ? (
        <div className={s.word__error}>Sorry, no words were found</div>
      ) : (
        words.length > 0 && (
          <div className={s.word__wrapper}>
            <div className={s.word__definition}>
              <div>
                <h2 className={s.word__term}>{words[0].word}</h2>
                <p className={s.word__phonetics}>
                  {words[0].phonetic ? words[0].phonetic : phoneticData}
                </p>
              </div>
              <button className={s.word__button} onClick={playAudio}>
                <AiFillAudio size={25}/>
              </button>
              <audio className={s.word__hidden} ref={ref} src={audio} />
            </div>

            <div className={s.word__meanings}>
              {words[0].meanings.map((item, index) => (
                <div className={s.word__meaning} key={index}>
                  <div className={s.word__partOfSpeech}>
                    <h3 className={s.word__title}>{item.partOfSpeech}</h3>
                    <span className={s.word__line}></span>
                  </div>
                  <div className={s.word__group}>
                    <h4 className={s.word__subtitle}>Meaning</h4>
                    <ul className={s.word__list}>
                      {item.definitions.map((defenitionData, index) => (
                        <li className={s.word__item} key={index}><span className={s.word__itemContent}>{defenitionData.definition}</span></li>
                      ))}
                    </ul>
                  </div>
                  <div className={s.word__synonyms}>
                    <h4 className={s.word__subtitle}>Synonyms: </h4>
                      {item.synonyms.length === 0 ? (
                        <span className={s.word__synonym}>There are no synonyms</span>
                      ) : (
                        <span className={s.word__synonym}>{item.synonyms.join(", ")}</span>
                      )}
                  </div>
                  <div className={s.word__antonyms}>
                    <h4 className={s.word__subtitle}>Antonyms: </h4>
                    {item.antonyms.length === 0 ? (
                      <span className={s.word__antonym}>There are no antonyms</span>
                    ) : (
                      <span className={s.word__antonym}>{item.antonyms.join(", ")}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className={s.word__source}>
              <h3 className={`${s.word__title} ${s.word__titleSource}`}>Source</h3>
              <a
                href={words[0].sourceUrls[0]}
                className={s.word__link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {words[0].sourceUrls[0]}
                <FaExternalLinkAlt className={s.word__linkIcon} size={14}/>
              </a>
              
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default Word;
