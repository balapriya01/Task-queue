import { useEffect, useState } from "react";
import "./TitleBar.css";
import { MdEditNote } from "react-icons/md";

const TitleBar = () => {

  const[theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "c1");



  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme)
  },[theme])
 

  return (
    <>
    <header>
      <div className="logo">
        <div className="note-logo"><MdEditNote  /></div>
        <span>NOTES</span>
      </div>
      <div className="title-theme">
              <span className={theme==="c1" ? "c1 active-btn" : "c1"} onClick={() => setTheme("c1")}></span>
              <span className={theme==="c2" ? "c2 active-btn" : "c2"} onClick={() => setTheme("c2")}></span>
              <span className={theme==="c3" ? "c3 active-btn" : "c3"} onClick={() => setTheme("c3")}></span>
              <span className={theme==="c4" ? "c4 active-btn" : "c4"} onClick={() => setTheme("c4")}></span>
              <span className={theme==="c5" ? "c5 active-btn" : "c5"} onClick={() => setTheme("c5")}></span>
            </div>
    </header>
    </>
  );
};

export default TitleBar;
