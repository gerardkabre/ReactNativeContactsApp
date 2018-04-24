import { FETCH_CONTACTS_START } from '../actions/contacts';
import { FETCH_CONTACTS_RECEIVE } from '../actions/contacts';
import { FETCH_CONTACTS_ERROR } from '../actions/contacts';
import { CONTACT_CREATE } from '../actions/contacts';

const initialState = {
  isFetching: false,
  fetched: false,
  error: null,
  contacts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACTS_START:
      return { ...state, isFetching: true };
    case FETCH_CONTACTS_RECEIVE:
      return { ...state, isFetching: false, fetched: true, contacts: action.contacts };
    case FETCH_CONTACTS_ERROR:
      return { ...state, isFetching: false, error: action.error };
    case CONTACT_CREATE:
      return { ...state, contacts: [...state.contacts, action.contact] };
    default:
      return state;
  }
};
