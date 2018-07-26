<template lang="pug">
.cell.scene(@click="clickCell()", :class="{'loading': loading}")
  .chip.circle
    .chip__face.chip__face--front
      loader(v-if="loading")
      span(v-else) ?
    .chip__face.chip__face--back.cells(:class="classCells")
</template>

<script>

import loader from '@/components/loader'
import {EventBus} from '@/services/EventBus'
import http from '@/services/httpQuery'

export default {
  name: 'cell',
  props: ['id'],
  components: {
    loader
  },
  data () {
    return {
      loading: false,
      classCells: 'cells-'
    }
  },
  created() {
    EventBus.$on('CellResponse', res => {
      this.classCells = 'cells-' + res[`cell${this.id}`]
      document.querySelectorAll('.chip').forEach(
        chip => chip.classList.add('is-flipped')
      )
      setTimeout(() => {
        document.querySelectorAll('.chip').forEach(
          chip => chip.classList.remove('is-flipped')
        )
        EventBus.$emit('WaitingMode', false)
      }, 2000)
    })
  },
  methods: {
    clickCell() {
      this.loading = true
      EventBus.$emit('WaitingMode', true)
      setTimeout(() => { this.fetchData() }, 1000)
    },
    fetchData() {
      EventBus.$emit('BoardRequest', this.randomNum())
      this.loading = false
    },
    randomNum() {
      return Math.floor(Math.random() * 4) + 1
    }
  }
}
</script>

<style lang="stylus">
$PRIM_COLOR = #323232
$PRIM_FONT_COLOR = #676767

$HOV_COLOR = #24C8A3

.cell
  float left
  width 210px
  height 210px
  border 1px solid $PRIM_COLOR
  box-sizing border-box
  padding 40px
  cursor pointer
  transition .1s linear
  .circle
    width 130px
    height 130px
    background $PRIM_COLOR
    box-sizing border-box
    border-radius 50%
    padding 43px 50px
    color $PRIM_FONT_COLOR
    font-weight bold
    span
      font-size 45px
  &:hover
    background $HOV_COLOR
    .circle
      background #fff
      color #000
  &.loading:hover
    background #000


</style>
