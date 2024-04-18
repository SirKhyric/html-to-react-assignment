import '../CharacterRatings.css';
import data from '../fma-data';

export function CharacterRatings() {
  const sortedCharacters = [...data].sort((a, b) => b.votes - a.votes);
  const topCharacters = sortedCharacters.slice(0, 5);

  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {topCharacters.map((character, index) => (
            <tr key={index} className={index % 2 === 0 ? 'dark' : 'light'}>
              <td>{character.nickName || character.name}</td>
              <td>{character.skillset.join(', ')}</td>
              <td>{character.votes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}