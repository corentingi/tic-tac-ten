<template>
  <g class="svg-board">
    <text v-if="message !== null" text-anchor="middle" x="60" y="10" style="font: 12px Verdana, Helvetica, Arial, sans-serif;">{{ message }}</text>
    <g :transform="selectorTransform">
      <svg-grid-selector :grids="board" :activeGrid="activeGrid"></svg-grid-selector>
    </g>
    <g :transform="playGridTransform">
      <svg-grid v-if="activeGrid !== null" :marks="board[activeGrid]" :gridId="activeGrid" :playContext="true"></svg-grid>
    </g>
  </g>
</template>

<script>
import SvgGrid from '@/components/svg/SvgGrid'
import SvgGridSelector from '@/components/svg/SvgGridSelector'

export default {
  name: 'SvgGridBoard',
  components: { SvgGrid, SvgGridSelector },
  props: {
    board: Array,
    activeGrid: Number
  },
  computed: {
    message: function () {
      if (this.activeGrid === null) {
        return 'Pick a grid'
      }
    },
    playGridTransform: function () {
      let offset = this.activeGrid !== null ? 82 : 180
      let actions = ['scale(0.8)', 'translate(13 ' + offset + ')']
      return actions.join(' ')
    },
    selectorTransform: function () {
      let actions = []
      if (this.activeGrid !== null) {
        actions.push('translate(35 8)')
        actions.push('scale(0.4)')
      } else {
        actions.push('translate(0 20)')
      }
      return actions.join(' ')
    }
  }
}
</script>
