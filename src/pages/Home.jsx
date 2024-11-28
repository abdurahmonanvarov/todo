
function Home({ todos, setTodo }) {
  const deleteButton = (id) => {
    setTodo((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <ul className="flex flex-wrap gap-10 max-w-5xl mx-auto">
        {todos.map((todo) => (
          <li key={todo.id} className="card bg-neutral mt-10 w-96">
            <div className="card-body items-center">
              <h2 className="card-title">{todo.title}</h2>
              <p>{todo.desc ? todo.desc.slice(0, 60) + "..." : "No description available"}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read more</button>
                <button onClick={() => deleteButton(todo.id)} className="btn btn-ghost">Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
