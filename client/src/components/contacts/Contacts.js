import React, { Fragment, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Spinner from "../layout/Spinner";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    //eslin-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>No Contacts</h4>;
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};
export default Contacts;
