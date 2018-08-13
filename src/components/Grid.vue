<template>
  <svg class="grid" width="120" height="120">
    <template v-for="(mark, index) in marks">
      <circle :key="index" @click="onCellClick(index)" v-if="mark === 'o'" :cx="20 + 40 * xOffset(index)" :cy="20 + 40 * yOffset(index)" r="15" fill="pink" />
      <rect :key="index" @click="onCellClick(index)" v-else-if="mark === 'x'" :x="5 + 40 * xOffset(index)" :y="5 + 40 * yOffset(index)" width="30" height="30" style="fill:rgb(160,210,230);" />
      <rect :key="index" @click="onCellClick(index)" v-else :x="5 + 40 * xOffset(index)" :y="5 + 40 * yOffset(index)" width="30" height="30" style="fill:rgb(240,240,240);" />
    </template>
  </svg>
</template>

<script>
export default {
  name: 'Grid',
  props: {
    gridId: Number,
    marks: Array
  },
  methods: {
    xOffset: function (index) {
      return index % 3
    },
    yOffset: function (index) {
      return Math.floor(index / 3)
    },
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
