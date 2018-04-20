export const FETCH_CONTACTS_START = 'FETCH_CONTACTS_START';
export const FETCH_CONTACTS_RECEIVE = 'FETCH_CONTACTS_RECEIVE';
export const FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR';

export const fetchContacts = userId => ({
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
