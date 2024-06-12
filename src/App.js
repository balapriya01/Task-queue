import TitleBar from "./components/TitleBar";
import "./App.css";
import Content from "./components/Content";
import Addnote from "./components/Addnote";
import { useEffect, useState } from "react";

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [edit, setEdit] = useState({});

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <TitleBar />
      <Addnote
        notes={notes}
        setNotes={setNotes}
        edit={edit}
        setEdit={setEdit}
      />
      <Content
        notes={notes}
        setNotes={setNotes}
        edit={edit}
        setEdit={setEdit}
      />
    </>
  );
};

export default App;
