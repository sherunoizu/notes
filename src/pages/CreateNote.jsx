import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

export const CreateNote = () => {
  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary">Save</button>
      </header>
      <form action="" className="create-note__form">
        <input type="text" placeholder="Title" autoFocus />
        <textarea rows="28" placeholder="Note details..."></textarea>
      </form>
    </section>
  );
};
