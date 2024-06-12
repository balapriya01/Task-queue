import "./Addnote.css";
const Addnote = ({ notes, setNotes, edit, setEdit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();


    if(edit.id){
      const date = new Date();
      const updatedNote = notes.map((note) => (
        note.id === edit.id ? {id: edit.id, name: edit.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : note
      ));
      setNotes(updatedNote);
      setEdit({});

    }
    else{
      const date = new Date();
    // console.log(date);
    // console.log(event.target.note.value);
    // console.log(date.toLocaleDateString());
    // console.log(date.toLocaleTimeString());

    const newNote = {
      id: date.getTime(),
      name: event.target.note.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
    };

    setNotes([...notes, newNote]);
    setEdit({});
    }
    
  };

  return (
    <>
      <form className="add-note" onSubmit={handleSubmit}>
        <input
          type="text"
          name="note"
          value={edit.name || ""}
          placeholder="Reading Book"
          autoComplete="off"
          onChange={e => setEdit({...edit, name:e.target.value})}
          required
        />
        <button>{edit.id ? "Update" : "Add"}</button>
      </form>
    </>
  );
};

export default Addnote;
