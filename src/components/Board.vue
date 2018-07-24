<template>
  <div>
    <h4>Turn: {{ turn }}</h4>
    <div class="board">
      <grid v-for="(grid, index) in grids" :key="index" :gridId="index" :marks="grid"></grid>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Grid from '@/components/Grid'

export default {
  name: 'Board',
  components: {
    Grid
  },
  computed: {
    ...mapState({
      turn: state => state.board.turn
    }),
    ...mapGetters({
      grids: 'board/grids'
    })
  }
}
</script>

<style>
.board {
  margin: auto;
  max-width: 600px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  grid-auto-rows: minmax(30px, auto);
}
</style>
