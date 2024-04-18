import React, { Component } from 'react';
import '../CharacterCards.css';

export class CharacterCards extends Component {
  render() {
    const {characters} = this.props;
    return (
      <section id="character-cards">
        {characters.map((character) => (
          <div key={character.name} className="card">
            <div className="card-titles">
              <h3>{character.name}</h3>
              <h4>{character.nickName}</h4>
            </div>
            <img src={character.imageUrl} alt="" />
            <p>{character.background}</p>
          </div>
        ))}
      </section>
    );
  }
}
