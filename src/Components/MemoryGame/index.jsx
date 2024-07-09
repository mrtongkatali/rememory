import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Helpers
import { shuffle } from 'lodash/collection';
import { nanoid } from 'nanoid';
import { generatePool } from '@/Helpers/Generator';
import { SIZE_SETTINGS, DIFFICULTY_SETTINGS } from '@/Data/settings';

// Ant
import { Form, Select, Button } from 'antd';

// Style
import '@/scss/components/memory-game/index.scss';
import { DIFFICULTY_ENUM } from '../../Data/settings';

const MemoryGame = () => {
  const [allowFlip, setAllowFlip] = useState(true);
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [isAlreadyCompleted, setIsAlreadyCompleted] = useState(false);
  const [numberOfAttempts, setNumberOfAttempts] = useState(0);
  const [sizeSettings, setSizeSettings] = useState(SIZE_SETTINGS[0]);
  const [difficultySettings, setDifficultySettings] = useState(
    DIFFICULTY_SETTINGS[0]
  );
  const [gridTemplateColumns, setGridTemplateColumns] = useState({
    gridTemplateColumns: `repeat(6, 1fr)`,
    gap: '20px',
  });

  /*
    Todo:
    - use different keys for images?
    - check bug when cards are doesnt match even matched 
    - Implement component for timer
    - Implement logic for loading different categories and difficulty
  */

  const resetGame = () => {
    setIsAlreadyCompleted(false);
    setFlippedCards([]);
    setNumberOfAttempts(0);
  };

  const generateCards = () => {
    resetGame();

    setGridTemplateColumns({
      gridTemplateColumns: `repeat(${sizeSettings.gridSettings.repeat}, 1fr)`,
      gap: sizeSettings.gridSettings.gap,
    });

    const size = sizeSettings.value ** 2 / 2;
    const pool = generatePool(size, difficultySettings.value);

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
  };

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
      setAllowFlip(true);
    }, 1000);
  }, [flippedCards, cards, numberOfAttempts]);

  const flippedCard = (grid) => {
    if (grid.matched) {
      console.log('[INFO] Already matched');
      return;
    }

    if (grid.flipped || !allowFlip) return;

    const newMemoryGrid = cards.map((card) =>
      card.id === grid.id ? { ...card, flipped: !card.flipped } : card
    );

    setCards(newMemoryGrid);
    setFlippedCards([...flippedCards, ...[grid.value]]);
  };

  useEffect(() => {
    if (flippedCards.length > 1) {
      setAllowFlip(false);
      checkMatch();
    }
  }, [flippedCards, checkMatch]);

  useEffect(() => {
    if (isAlreadyCompleted) {
      alert("Congratulations! You've completed the game!");
      generateCards();
    }
  }, [isAlreadyCompleted]);

  return (
    <>
      <div>
        <Form layout="inline">
          <Form.Item label="Size">
            <Select
              defaultValue={SIZE_SETTINGS[0]}
              style={{ width: 120 }}
              options={SIZE_SETTINGS}
              onChange={(value) => {
                const size = SIZE_SETTINGS.find((size) => size.value === value);
                setSizeSettings(size);
              }}
            />
          </Form.Item>

          <Form.Item label="Difficulty">
            <Select
              defaultValue={DIFFICULTY_SETTINGS[0]}
              style={{ width: 120 }}
              options={DIFFICULTY_SETTINGS}
              onChange={(value) => {
                const difficulty = DIFFICULTY_SETTINGS.find(
                  (difficulty) => difficulty.value === value
                );
                setDifficultySettings(difficulty);
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={() => generateCards()}>
              Generate
            </Button>
          </Form.Item>
        </Form>
      </div>

      <h3>Number of Attempts - {numberOfAttempts}</h3>
      <div className="card-container" style={gridTemplateColumns}>
        {cards.map((card) =>
          difficultySettings.value !== DIFFICULTY_ENUM.EASY ? (
            <MemoizedCards
              key={card.id}
              card={card}
              onClick={() => flippedCard(card)}
            />
          ) : (
            <MemoizedImageCards
              key={card.id}
              card={card}
              onClick={() => flippedCard(card)}
            />
          )
        )}
      </div>
    </>
  );
};

const ImageCards = ({ card, onClick }) => (
  <div>
    {!card.flipped && (
      <div className="card-item card-image" onClick={onClick}>
        ???
      </div>
    )}
    {card.flipped && (
      <div
        className="card-image"
        style={{ backgroundImage: `url(/images/${card.value}.jpg)` }}
      />
    )}
  </div>
);

const Cards = ({ card, onClick }) => (
  <div>
    {!card.flipped && (
      <div className="card-item" onClick={onClick}>
        ???
      </div>
    )}
    {card.flipped && <div className="card-item">{card.value}</div>}
  </div>
);

Cards.propTypes = {
  card: PropTypes.shape({
    flipped: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func,
};

ImageCards.propTypes = {
  card: PropTypes.shape({
    flipped: PropTypes.bool.isRequired,
    value: PropTypes.any,
  }),
  onClick: PropTypes.func,
};

const MemoizedCards = React.memo(Cards);
const MemoizedImageCards = React.memo(ImageCards);

export default MemoryGame;
