import Vue from 'vue'

// initial state
// shape: [{ id, quantity }]
const state = {
  turn: 0,
  grids: Array(9).fill().map(() => Array(9).fill()),
  state: null
}

// getters
const getters = {
  grids: state => {
    return state.grids
  }
}

// actions
const actions = {
  play (context, {gridId, markId}) {
    console.log('Coucou !')
    let mark = state.grids[gridId][markId]
    if (mark !== 'o' && mark !== 'x') {
      context.commit('setMark', { gridId, markId })
      context.commit('nextTurn')
    }
  }
}

// mutations
const mutations = {
  reset (state) {
    state.turn = 0
    state.grid = new Array(9).fill(new Array(9).fill(null))
  },
  nextTurn (state) {
    state.turn++
  },
  setMark (state, {gridId, markId}) {
    console.log(['Set mark:', gridId, markId].join(' '))
    let newGrid = Array.from(state.grids[gridId])
    newGrid[markId] = state.turn % 2 ? 'x' : 'o'
    Vue.set(state.grids, gridId, newGrid)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
