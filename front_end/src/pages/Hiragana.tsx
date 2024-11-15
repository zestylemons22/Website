import React, { useRef } from "react";
import TrainingButton from "../components/TrainingButton";
import { shuffle } from "lodash";

const Characters = [
  ["あ", "a"],
  ["い", "i"],
  ["う", "u"],
  ["え", "e"],
  ["お", "o"],
  ["か", "ka"],
  ["き", "ki"],
  ["く", "ku"],
  ["け", "ke"],
  ["こ", "ko"],
  ["さ", "sa"],
  ["し", "shi"],
  ["す", "su"],
  ["せ", "se"],
  ["そ", "so"],
  ["た", "ta"],
  ["ち", "chi"],
  ["つ", "tsu"],
  ["て", "te"],
  ["と", "to"],
  ["な", "na"],
  ["に", "ni"],
  ["ぬ", "nu"],
  ["ね", "ne"],
  ["の", "no"],
  ["は", "ha"],
  ["ひ", "hi"],
  ["ふ", "fu"],
  ["へ", "he"],
  ["ほ", "ho"],
  ["ま", "ma"],
  ["み", "mi"],
  ["む", "mu"],
  ["め", "me"],
  ["も", "mo"],
  ["や", "ya"],
  ["ゆ", "yu"],
  ["よ", "yo"],
  ["ら", "ra"],
  ["り", "ri"],
  ["る", "ru"],
  ["れ", "re"],
  ["ろ", "ro"],
  ["わ", "wa"],
  ["を", "wo"],
  ["ん", "n"],
];

const Hiragana = () => {
  const shuffledCharacters = shuffle(Characters);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleCorrectAnswer = (index: number) => {
    if (index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <>
      <br />
      <div className="d-flex flex-wrap">
        {shuffledCharacters.map((char, index) => (
          <div className="p-2" key={index}>
            <TrainingButton
              correctAnswer={char[1]}
              onCorrectAnswer={() => handleCorrectAnswer(index)}
              ref={(el) => (inputRefs.current[index] = el)}
            >
              {char[0]}
            </TrainingButton>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hiragana;
