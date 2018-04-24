export const FETCH_CONTACTS_START = 'FETCH_CONTACTS_START';
export const FETCH_CONTACTS_RECEIVE = 'FETCH_CONTACTS_RECEIVE';
export const FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR';
export const CONTACT_CREATE = 'CONTACTS_CREATE';

export const fetchContacts = user => ({
  type: FETCH_CONTACTS_START,
  userId
});

export const fetchContactsReceive = contacts => ({
  type: FETCH_CONTACTS_RECEIVE,
  contacts
});

export const fetchContactsError = error => ({
  type: FETCH_CONTACTS_ERROR,
  error
});

export const contactCreate = contact => ({
  type: CONTACT_CREATE,
  contact
});

export function getContacts(user) {
  return dispatch => {
    dispatch(fetchContacts(user.id));

    return fetch(`http://localhost:3001/contacts/${user.id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `username=${user.username}&password=${user.password}`
    })
      .then(response => response.json())
      .then(response => {
        dispatch(fetchContactsReceive(response));
      })
      .catch(err => dispatch(fetchContactsError(err)));
  };
}
