import ContactShow from './ContactShow';

const ContactList = ({ contacts, updateContact, deleteContact, created_at }) => (
  <>
    { contacts.map(c =>
      <ContactShow
        key={c.id}
        {...c}
        updateContact={updateContact}
        deleteContact={deleteContact}
      />
    )}
  </>
)

export default ContactList;