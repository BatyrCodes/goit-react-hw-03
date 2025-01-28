import Contact from "../Contact/Contact ";
import s from "./ContactList.module.css";
import { FaUser, FaPhone } from "react-icons/fa";

const ContactList = ({ contacts, delContact }) => {
  return (
    <div>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={s.listItem}>
            <div className={s.wrapper}>
              <p className={s.info}>
                <FaUser />
                {name}
              </p>
              <p className={s.info}>
                <FaPhone />
                {number}
              </p>
            </div>
            <button className={s.deleteButton} onClick={() => delContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
