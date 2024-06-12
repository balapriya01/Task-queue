import "./Content.css";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const Content = ({ notes, setNotes, edit, setEdit }) => {
  const handleEdit = (id) => {
    const selectedNote = notes.find((note) => note.id === id);
    setEdit(selectedNote);
    console.log(selectedNote);
  };

  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Notes</span>
          <span className="count">{notes.length}</span>
        </div>
        <button className="clearAll" onClick={() => setNotes([])}>
          Clear All
        </button>
      </div>
      <ul>
        {notes.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i className="edit" onClick={() => handleEdit(task.id)}>
              <CiEdit />
            </i>
            <i className="delete" onClick={() => handleDelete(task.id)}>
              <MdDelete />
            </i>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Content;
