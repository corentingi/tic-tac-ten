<template>
  <div class="grid">
    <div class="cell" v-for="(mark, index) in marks" :key="index" @click="onCellClick(index)">
      <span v-if="mark === 'x'">X</span>
      <span v-else-if="mark === 'o'">O</span>
      <span v-else>-</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Grid',
  props: {
    gridId: Number,
    marks: Array
  },
  methods: {
    onCellClick: function (index) {
      this.$store.dispatch('board/play', {gridId: this.gridId, markId: index})
    }
  }
}
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(50px, auto);
}

.cell {
  font-size: 2rem;
  background-color: aliceblue;
}
</style>
