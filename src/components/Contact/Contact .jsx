import s from "./Contact .module.css";
import ContactList from "../ContactList/ContactList";
import { FaUser, FaPhone } from "react-icons/fa";

const Contact = ({ id, name, number, delContact }) => {
  return (
    <section className={s.contactSection}>
      <li className={s.contactItem} key={id}>
        <span>
          <p>
            <FaUser className={s.icon} /> {name}
          </p>
          <p>
            <FaPhone className={s.icon} /> {number}
          </p>
        </span>

        <button onClick={() => delContact(id)} className={s.btn}>
          Delete
        </button>
      </li>
    </section>
  );
};

export default Contact;
