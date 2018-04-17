export const CREATE_CONTACT = 'CREATE_CONTACT';

export const createContact = contact => ({
  type: CREATE_CONTACT,
  payload: contact
});
