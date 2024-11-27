
function Home({ todos, setTodo }) {

  const deletBUtton = (id) => {
    setTodo((prev) => {
      return prev.filter((todo) => todo.id != id)
    })
  }
  
  return (
    <>
      <ul className="flex gap-10  max-w-5xl mx-auto">
        {todos.map((todo) => {
          return (
            <div key={todo.id} className="card bg-neutral mt-10 w-96">
              <div className="card-body items-center">
                <h2 className="card-title">{todo.title}</h2>
                <p>{todo.desc.slice(0, 60)}...</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Reade more</button>
                  <button onClick={() => deletBUtton(todo.id)} className="btn btn-ghost">Delet</button>
                </div>
              </div>
            </div>)
        })}
      </ul>
    </>
  )
}

export default Home