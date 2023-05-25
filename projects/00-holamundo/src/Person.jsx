function Person({fullName, userName, photo}) {
    return (
        <article>
            <header>
                <img src={`./src/assets/${photo}.jpg`} alt={`El avatar de ${userName}`} />
                <div className="person-info">
                    <strong>{fullName}</strong>
                    <span>@{userName}</span>
                </div>
            </header>

            <aside>
                <button>Seguir</button>
            </aside>
        </article>
    )
}

export default Person;