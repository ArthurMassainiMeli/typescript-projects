import axios from 'axios';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';

const logTodo = (id: number, title: string, completed: boolean) => {
  const literals = `
    Data with ID: ${id}
    Data with title: ${title}
    Data with finished: ${completed}`;

  console.log(literals);
};

const main = async () => {
  const resp = await axios.get(url);

  const data = resp.data as Todo;
  const { id, title, completed } = data;

  logTodo(id, title, completed);
};

main();
