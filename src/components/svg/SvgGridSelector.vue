<template>
  <g class="svg-grid-selector" :transform="transform">
    <svg-grid v-for="(grid, index) in grids" :key="index" :gridId="index" :marks="grid" :selectorContext="true" :active="index === activeGrid"></svg-grid>
  </g>
</template>

<script>
import SvgGrid from '@/components/svg/SvgGrid'

export default {
  name: 'SvgGridSelector',
  components: { SvgGrid },
  props: {
    grids: Array,
    activeGrid: Number
  },
  computed: {
    transform: function () {
      let actions = []
      return actions.join(' ')
    }
  }
}
</script>
