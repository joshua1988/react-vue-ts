import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState([]);

  return <div>{counter}</div>;
}

export default App;
