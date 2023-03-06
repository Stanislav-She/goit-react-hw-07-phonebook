export const getFiltered = store => store.filtered;

export const getContacts = store => {
  return store.contacts.filter(({ name }) =>
    name.toLowerCase().includes(store.filtered.toLowerCase())
  );
};
