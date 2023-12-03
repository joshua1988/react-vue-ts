// eslint-disable-next-line no-redeclare
import { ChangeEvent, MouseEvent, useState } from 'react';

function ButtonHandler() {
  function showAlert(event: string) {
    console.log(event);
    event.target;
  }

  return <button onClick={showAlert}>show</button>;
}

function InputHandler() {
  const [todo, setTodo] = useState('');

  function updateTodo(event: ChangeEvent<HTMLInputElement>) {
    setTodo(event.target.value);
  }

  return <input type="text" value={todo} onChange={updateTodo} />;
}

export { ButtonHandler, InputHandler };
