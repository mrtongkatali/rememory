import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { shuffle } from 'lodash/collection';
import { nanoid } from 'nanoid';

import '@/scss/components/memory-game/index.scss';

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [isAlreadyCompleted, setIsAlreadyCompleted] = useState(false);
  const [numberOfAttempts, setNumberOfAttempts] = useState(0);

  /*
    Todo:
    - Add Button for restarting the game
    - Record the number of attempts
    - Implement component for timer
    - Implement logic for loading different categories and difficulty
  */

  const resetGame = () => {
    setIsAlreadyCompleted(false);
    setFlippedCards([]);
    setNumberOfAttempts(0);
  };

  const generateGrid = useCallback(() => {
    resetGame();

    const pool = [
      'Crimson',
      'Azure',
      // 'Coral',
      // 'Lavender',
      // 'Turquoise',
      // 'Emerald',
      // 'Fuchsia',
      // 'Amber',
    ];

    const cardsArray = [];

    pool.map((value) => {
      const defaultSettings = {
        value,
        flipped: false,
        matched: false,
      };

      cardsArray.push({
        id: nanoid(),
        ...defaultSettings,
      });

      cardsArray.push({
        id: nanoid(),
        ...defaultSettings,
      });
    });

    setCards(shuffle(cardsArray));
  }, []);

  const checkMatch = useCallback(() => {
    const isMatched = flippedCards[0] === flippedCards[1];

    const updatedCards = cards.map((card) =>
      flippedCards.includes(card.value)
        ? { ...card, flipped: isMatched, matched: isMatched }
        : card
    );

    const isAlreadyCompleted = updatedCards.every(
      (card) => card.matched === true
    );

    !isMatched ? setNumberOfAttempts(numberOfAttempts + 1) : null;

    setFlippedCards([]);

    setTimeout(() => {
      setCards(updatedCards);
      setIsAlreadyCompleted(isAlreadyCompleted);
    }, 500);
  }, [flippedCards, cards]);

  const flippedCard = (grid) => {
    if (grid.matched) {
      console.log('[INFO] Already matched');
      return;
    }

    if (grid.flipped) return;

    const newMemoryGrid = cards.map((card) =>
      card.id === grid.id ? { ...card, flipped: !card.flipped } : card
    );

    setCards(newMemoryGrid);
    setFlippedCards([...flippedCards, ...[grid.value]]);
  };

  useEffect(() => {
    if (flippedCards.length > 1) {
      checkMatch();
    }
  }, [flippedCards, checkMatch]);

  useEffect(() => {
    if (isAlreadyCompleted) {
      alert("Congratulations! You've completed the game!");
      generateGrid();
    }
  }, [isAlreadyCompleted]);

  useEffect(() => {
    generateGrid();
  }, [generateGrid]);

  return (
    <>
      <h3>Number of Attemps - {numberOfAttempts}</h3>
      <div className="grid-container">
        {cards.map((card) => (
          <MemoizedCards
            key={card.id}
            card={card}
            onClick={() => flippedCard(card)}
          />
        ))}
      </div>
    </>
  );
};

const Cards = ({ card, onClick }) => (
  <div>
    {!card.flipped && (
      <div className="grid-item" onClick={onClick}>
        ???
      </div>
    )}
    {card.flipped && <div className="grid-item">{card.value}</div>}
  </div>
);

Cards.propTypes = {
  card: PropTypes.shape({
    flipped: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func,
};

const MemoizedCards = React.memo(Cards);

export default MemoryGame;
