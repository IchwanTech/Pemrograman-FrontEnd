const Todolist = ({ name }) => {
  const todo = ["Mempelajari react", "Mempelajari NextJs", "Menjadi fullstack"];
  return (
    <div>
      <h1>To-do List {name}:</h1>
      <ol>
        <li>{todo[0]}</li>
        <li>{todo[1]}</li>
        <li>{todo[2]}</li>
      </ol>
    </div>
  );
};

export default Todolist;
