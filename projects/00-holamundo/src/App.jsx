import Person from './Person';

function App() {
  return (
    <section className="follow-people-card">
      <h2>A quién seguir</h2>
      <Person fullName="Miguel Ángel Durán" userName="midudev" photo="midu" />
      <Person fullName="Sara Montagud" userName="afor_digital" photo="aforrr" />
      <Person
        fullName="Andrea Bellver García"
        userName="ponisworld"
        photo="poni"
      />
    </section>
  );
}

export default App;
