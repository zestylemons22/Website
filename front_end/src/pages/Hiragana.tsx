import React, { useState, useEffect, useRef } from "react";
import TrainingButton from "../components/TrainingButton";
import { shuffle } from "lodash";
import Button from "../components/Button";

const Hiragana = () => {
  const [characters, setCharacters] = useState<any[]>([]);
  const [dakuten, setDakuten] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (dakuten === 0) {
      fetch("/hiragana.json")
        .then((response) => response.json())
        .then((data) => setCharacters(data));
    } else {
      fetch("/dakuten.json")
        .then((response) => response.json())
        .then((data) => setCharacters(data));
    }
  }, [dakuten]);

  const shuffledCharacters = shuffle(characters);

  const handleCorrectAnswer = (index: number) => {
    if (index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleDakuten = () => {
    console.log("dakuten: ", dakuten);
    if (dakuten === 0) {
      setDakuten(1);
    } else {
      setDakuten(0);
    }
  };

  return (
    <>
      <Button
        onClick={() => {
          handleDakuten();
        }}
      >
        Dakuten
      </Button>

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
