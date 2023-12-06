import { AiOutlineSearch } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { dummyNotes } from "../dummy_notes";
import { Link } from "react-router-dom";
import { NoteItem } from "../components/NoteItem";

export const Notes = () => {
  return (
    <section>
      <header className="notes__header">
        <h2>My Notes</h2>
        {/* <input type="text" autoFocus placeholder="Keyword..." /> */}
        <button className="btn">
          <AiOutlineSearch />
        </button>
      </header>
      <div className="notes__container">
        {dummyNotes.map((note) => (
          <NoteItem key={note.id} />
        ))}
      </div>
      <Link className="btn add__btn">
        <BsPlusLg />
      </Link>
    </section>
  );
};
