export const state = {
  list: [],
}

export const getters = {
  shoppingList() {
    return state.list
  }
}

export const mutations = {
  ADD_TO_LIST(state, newItem) {
    state.list.push(newItem)
  },
  REMOVE_FROM_LIST(state) {
    state.list.pop()
  }
}

export const actions = {
  addItem({
    commit
  }, newItem) {
    commit('ADD_TO_LIST', newItem)
  },
  removeItem({
    commit
  }) {
    commit('REMOVE_FROM_LIST')
  },
}
