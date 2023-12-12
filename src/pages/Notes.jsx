import { AiOutlineSearch } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";

import { Link } from "react-router-dom";
import { NoteItem } from "../components/NoteItem";
import { useEffect, useState } from "react";

export const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleSearch = () => {
    setFilteredNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLowerCase())) {
          return note;
        }
      })
    );
  };

  useEffect(handleSearch, [text]);

  return (
    <section>
      <header className="notes__header">
        {!showSearch && <h2>My Notes</h2>}
        {showSearch && (
          <input
            type="text"
            autoFocus
            placeholder="Keyword..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        )}
        <button
          className="btn"
          onClick={() => setShowSearch((prevState) => !prevState)}
        >
          {showSearch ? <MdClose /> : <AiOutlineSearch />}
        </button>
      </header>
      <div className="notes__container">
        {filteredNotes.length === 0 && text !== '' && (
          <p className="empty__notes">Notes included {text} not found</p>
        )}
        {notes.length === 0 && text === '' && (
          <p className="empty__notes">Create your notes</p>
        )}
        {filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <Link className="btn add__btn" to="/create-note">
        <BsPlusLg />
      </Link>
    </section>
  );
};
