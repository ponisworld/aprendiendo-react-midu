import { useState } from 'react';

function Person({ fullName, userName }) {
  const [isFollowing, setFollowing] = useState(false);

  return (
    <article>
      <header>
        <img
          src={`https://unavatar.io/${userName}`}
          alt={`El avatar de ${userName}`}
        />
        <div className="person-info">
          <strong>{fullName}</strong>
          <span>@{userName}</span>
        </div>
      </header>

      <aside>
        <button
          onClick={() => setFollowing(!isFollowing)}
          className={isFollowing ? 'followed' : ''}
        >
          {isFollowing ? 'Dejar de seguir' : 'Seguir'}
        </button>
      </aside>
    </article>
  );
}

export default Person;