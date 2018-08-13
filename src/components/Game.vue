<template>
  <div class="game">
    <div>
      <svg class="board" viewBox="0 0 120 160">
        <svg-board :board="board" :activeGrid="activeGrid"></svg-board>
      </svg>
    </div>
    <div>
      <ul>
        <li>Turn: {{ turn }}</li>
        <li>Active grid: {{ activeGrid || 'null' }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import SvgBoard from '@/components/svg/SvgBoard'

export default {
  name: 'Game',
  components: {
    SvgBoard
  },
  computed: {
    ...mapState({
      activeGrid: state => state.board.activeGrid,
      turn: state => state.board.turn
    }),
    ...mapGetters({
      board: 'board/grids'
    })
  }
}
</script>

<style>
.board {
  height: 600px;
}
</style>
