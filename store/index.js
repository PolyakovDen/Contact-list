export const state = () => ({
  contactList: []
})

export const getters = {
  getContactList: state => state.contactList
}

export const mutations = {

  addContactToList (state, payload) {
    state.contactList.push({ ...payload })
  },

  removeContactFromList (state, payload) {
    state.contactList.splice(payload, 1)
  },

  updateContact (state, payload) {
    state.contactList = state.contactList.map(el => el.id === payload.id ? payload : el)
  }
}
