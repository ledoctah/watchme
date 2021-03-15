import React from 'react';
import { Button } from './Button';

import '../styles/sidebar.scss';

import IGenreResponseProps from '../dtos/IGenrePropsDTO';

interface ISideBarProps {
  genres: IGenreResponseProps[];
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
}

export function SideBar({ selectedGenreId, genres, handleClickButton }: ISideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}