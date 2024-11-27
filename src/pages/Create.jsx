import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Create({ setTodo }) {
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const hendelSubmit = (e) => {
    e.preventDefault();
    setTodo((prev) => {
      return [...prev, {
        id: Math.random(),
        title,
        desc,
      }]
    });

    navigate("/")
  }
  return (
    <div className="mx-auto my-10 w-96">
      <form onSubmit={hendelSubmit} className="form max-w-xs">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">What is your name?</span>
            <span className="label-text-alt">Top Right label</span>
          </div>
          <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Your bio</span>

          </div>
          <textarea onChange={(e) => setDesc(e.target.value)} value={desc} className="textarea textarea-bordered h-24 max-w-xs" placeholder="Bio"></textarea>
        </label>
        <button className="btn btn-primary mt-5 w-full">Submit</button>
      </form>
    </div>
  )
}

export default Create