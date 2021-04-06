import React, { useCallback, useEffect, useState } from 'react';
import 'rodal/lib/rodal.css';

import {
  BOARD,
  KEY_A,
  KEY_ARROW_DOWN,
  KEY_ARROW_LEFT,
  KEY_ARROW_RIGHT,
  KEY_ARROW_UP,
  KEY_D,
  KEY_S,
  KEY_W,
  WINNER_POSITION,
} from './constants';
import { Modal } from './components';
import batman from './images/batman.png';
import './App.scss';
import { onGamePost } from './api';

const App = () => {
  const [moves, setMoves] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [gameWon, setGameWon] = useState(false);
  const [avatarPosition, setAvatarPosition] = useState({});
  const onReset = () => {
    setIsModalOpen(false);
    setGameWon(false);
    setMoves([]);
    setAvatarPosition({x: 1, y: 0});
  };
  const onGameWon = useCallback(
    async gameMoves => {
      try {
        await onGamePost(gameMoves);
      } catch (error) {
        throw new Error(error);
      }
    },
    []
  );

  const onKeyUp = useCallback(
    ({keyCode}) => {
      let position;

      if (KEY_ARROW_DOWN === keyCode || KEY_S === keyCode) {
        position = Object.assign({}, {...avatarPosition}, {
          y: avatarPosition.y + 1,
        });
      } else if (KEY_ARROW_UP === keyCode || KEY_W === keyCode) {
        position = Object.assign({}, {...avatarPosition}, {
          y: avatarPosition.y - 1,
        });
      } else if (KEY_ARROW_RIGHT === keyCode || KEY_D === keyCode) {
        position = Object.assign({}, {...avatarPosition}, {
          x: avatarPosition.x + 1,
        });
      } else if (KEY_ARROW_LEFT === keyCode || KEY_A === keyCode) {
        position = Object.assign({}, {...avatarPosition}, {
          x: avatarPosition.x - 1,
        });
      }
      if (position?.x === WINNER_POSITION.x && position?.y === WINNER_POSITION.y) {
        const gameMoves = [...moves, position];
        setMoves(gameMoves);
        setAvatarPosition(position);
        setGameWon(true);
        setIsModalOpen(true);
        onGameWon(gameMoves);
      }
      else if (Math.sign(position?.x) !== -1 && Math.sign(position?.y) !== -1 && !!BOARD[position.y][position.x]) {
        setMoves([...moves, position]);
        setAvatarPosition(position);
      }
    },
    [avatarPosition, moves, onGameWon]
  );

  useEffect(() => {
    window.addEventListener('keyup', onKeyUp);

    return () => {
      window.removeEventListener('keyup', onKeyUp);
    };
  }, [onKeyUp]);

  return (
    <div className={'container-board flex h-screen flex-col justify-center'}>
      <div className={'flex justify-evenly mb-2'}>
        <span className="text-lg font-bold text-white">CookUnity</span>
        <span className="text-lg font-bold text-white">moves: {moves.length}</span>
      </div>
      <div className={'flex flex-col items-center'}>
        {BOARD.map((row, rowIndex) =>
          <div className={'flex'} key={rowIndex}>
            {
              row.map((column, columnIndex) =>
                <div className={`column ${column ? 'bg-white': 'bg-black'}`} key={columnIndex}>
                  {
                    avatarPosition.x === columnIndex && avatarPosition.y === rowIndex &&
                    <img alt="i'm batman" className={'object-scale-down h-full w-full'} src={batman} />
                  }
                </div>
              ) 
            }
          </div>
        )}
      </div>
      <Modal gameWon={gameWon} onClose={onReset} visible={isModalOpen} />
    </div>
  );
}

export default App;
