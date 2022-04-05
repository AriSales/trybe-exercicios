const list = ['Banana', 'Maçã', 'Alho', 'Cebola', 'Tomate' ]

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div>
      <ul>{list.map(item => Task(item))}</ul>
    </div>
  );
}

export default App;
