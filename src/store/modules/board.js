import Vue from 'vue'

// initial state
// shape: [{ id, quantity }]
const state = {
  turn: 0,
  activeGrid: null,
  grids: Array(9).fill().map(() => Array(9).fill()),
  state: null
}

// getters
const getters = {
  evenTurn: state => {
    return state.turn % 2 === 0
  },
  grids: state => {
    return state.grids
  }
}

// actions
const actions = {
  play (context, {gridId, markId}) {
    let mark = state.grids[gridId][markId]
    if (mark !== 'o' && mark !== 'x') {
      context.commit('setMark', { gridId, markId })
      context.commit('setActiveGrid', { gridId: markId })
      context.commit('nextTurn')
    }
  },
  selectGrid (context, {gridId}) {
    context.commit('setActiveGrid', { gridId })
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
  },
  setActiveGrid (state, {gridId}) {
    console.log('Set active grid to: ' + gridId)
    state.activeGrid = gridId
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
