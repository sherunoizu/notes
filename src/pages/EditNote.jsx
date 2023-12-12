import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useCreateDate } from "../components/useCreateDate";

export const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id === id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate();
  const confirmMessage = `Are you sure u want to delete ${note.title} note?`;

  const handleForm = (e) => {
    e.preventDefault();

    if (title && details) {
      const newNote = { ...note, title, details, date };

      const newNotes = notes.map((note) => {
        if (note.id === id) {
          note = newNote;
        }

        return note;
      });

      setNotes(newNotes);
      navigate("/");
    }
  };

  const handleDelete = () => {
    if (window.confirm(confirmMessage)) {
      const newNotes = notes.filter((note) => note.id !== id);

      setNotes(newNotes);
      navigate("/");
    }
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleForm}>
          Save
        </button>
        <button className="btn lg danger" onClick={handleDelete}>
          <RiDeleteBin6Line />
        </button>
      </header>
      <form action="" className="create-note__form" onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <textarea
          rows="28"
          placeholder="Note details..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};
