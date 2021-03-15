import React from "react";
import IMoviePropsDTO from "../dtos/IMoviePropsDTO";
import { MovieCard } from "./MovieCard";

export interface IContentProps {
  movies: IMoviePropsDTO[];
  selectedGenre: { title: string }
}

export function Content({ movies, selectedGenre }: IContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}