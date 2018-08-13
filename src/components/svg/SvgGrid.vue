<template>
  <g class="svg-grid" :class="{'selectable': playContext}" :transform="transform" :style="gridStyle" @click="onGridClick()">
    <rect style="fill:rgba(0,0,0,0)" width="120" height="120" />
    <template v-for="(mark, index) in marks">
      <circle :key="index" class="player-circle" @click="onBoxClick(index)" v-if="mark === 'o'" :cx="20 + 40 * xOffset(index)" :cy="20 + 40 * yOffset(index)" r="15" />
      <rect :key="index" class="player-rect" @click="onBoxClick(index)" v-else-if="mark === 'x'" :x="5 + 40 * xOffset(index)" :y="5 + 40 * yOffset(index)" width="30" height="30" />
      <rect v-else :key="index" class="box-empty" :class="{'active': playContext || active}" @click="onBoxClick(index)"
            :x="5 + 40 * xOffset(index)" :y="5 + 40 * yOffset(index)"
            :rx="evenTurn ? '50%' : null" :ry="evenTurn ? '50%' : null"
            width="30" height="30" />
    </template>
  </g>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SvgGrid',
  props: {
    active: {type: Boolean, default: false},
    gridId: Number,
    marks: Array,
    selectorContext: {type: Boolean, default: false},
    playContext: {type: Boolean, default: false}
  },
  computed: {
    ...mapGetters({
      evenTurn: 'board/evenTurn'
    }),
    transform: function () {
      let actions = []
      if (this.selectorContext) {
        actions.push('scale(' + 0.3 + ')')
        actions.push('translate(' + 140 * this.xOffset(this.gridId) + ' ' + 140 * this.yOffset(this.gridId) + ')')
      }
      return actions.join(' ')
    },
    gridStyle: function () {
      let style = {}
      if (this.selectorContext) {
        style['cursor'] = 'pointer'
      }
      return style
    }
  },
  methods: {
    xOffset: function (index) {
      return index % 3
    },
    yOffset: function (index) {
      return Math.floor(index / 3)
    },
    onBoxClick: function (index) {
      if (!this.selectorContext) {
        this.$store.dispatch('board/play', {gridId: this.gridId, markId: index})
      }
    },
    onGridClick: function () {
      if (this.selectorContext) {
        this.$store.dispatch('board/selectGrid', {gridId: this.gridId})
      }
    }
  }
}
</script>

<style>
.player-circle {
  fill: rgb(200, 100, 100);
}

.player-rect {
  fill: rgb(100,150,230);
}

.box-empty {
  fill: rgb(200,200,200);
}

.selectable .box-empty {
  cursor: pointer;
}

.box-empty.active {
  fill: rgb(255,255,255);
}
</style>
