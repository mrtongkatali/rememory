import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { shuffle } from 'lodash/collection';
import { nanoid } from 'nanoid';

import '@/scss/app.scss';

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);

  const generateGrid = useCallback(() => {
    const pool = [
      'Crimson',
      'Azure',
      'Coral',
      'Lavender',
      'Turquoise',
      'Emerald',
      'Fuchsia',
      'Amber',
    ];

    const cardsArray = [];

    pool.map((color) => {
      const defaultSettings = {
        color,
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

    const updatedGrid = cards.map((card) =>
      flippedCards.includes(card.color)
        ? { ...card, flipped: isMatched, matched: isMatched }
        : card
    );

    setFlippedCards([]);

    setTimeout(() => {
      setCards(updatedGrid);
    }, 500);
  }, [flippedCards, cards]);

  const flippedCard = (grid) => {
    if (grid.matched) {
      console.log('[INFO] Already matched');
      return;
    }

    if (flippedCards.includes(grid.color)) return;

    const newMemoryGrid = cards.map((card) =>
      card.id === grid.id ? { ...card, flipped: !card.flipped } : card
    );

    setCards(newMemoryGrid);
    setFlippedCards([...flippedCards, ...[grid.color]]);
  };

  useEffect(() => {
    if (flippedCards.length > 1) {
      checkMatch();
    }
  }, [flippedCards, checkMatch]);

  useEffect(() => {
    generateGrid();
  }, [generateGrid]);

  return (
    <>
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
    {!card.flipped && <div className="grid-item" onClick={onClick}>???</div>}
    {card.flipped && <div className="grid-item">{card.color}</div>}
  </div>
);

Cards.propTypes = {
  card: PropTypes.shape({
    flipped: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func,
}

const MemoizedCards = React.memo(Cards);

export default MemoryGame;
