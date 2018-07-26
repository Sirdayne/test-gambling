<template lang="pug">
.board-container
  .no-clicks(v-if="isWaiting")
  error(v-if="showError")
  cell(v-for="cell in cells", :key="cell.id", :id="cell.id")
</template>

<script>

import error from '@/components/error'
import {EventBus} from '@/services/EventBus'
import cell from '@/components/cell'

import data1 from '@/api/data-1.json'
import data2 from '@/api/data-2.json'
import data3 from '@/api/data-3.json'
import data4 from '@/api/data-4.json'

export default {
  name: 'board',
  components: {
    cell,
    error
  },
  data () {
    return {
      isWaiting: false,
      response: [],
      responses: [],
      cells: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        },
        {
          id: 5
        },
        {
          id: 6
        },
        {
          id: 7
        },
        {
          id: 8
        },
        {
          id: 9
        }
      ],
      showError: false
    }
  },
  created() {
    this.responses = []
    this.responses.push(data1)
    this.responses.push(data2)
    this.responses.push(data3)
    this.responses.push(data4)

    EventBus.$on('WaitingMode', cond => {
      this.toggleWaiting(cond)
    })
    EventBus.$on('BoardRequest', num => {
      this.handleResponse(num)
    })
    EventBus.$on('CloseError', num => {
      this.closeError()
    })
  },
  mounted() {
  },
  methods: {
    handleResponse(num) {
      this.response = this.responses[num - 1][0]
      console.log(this.response)
      if (this.response.status === 200) {
        EventBus.$emit('CellResponse', this.response.data)
      } else if (this.response.status === 500) {
        this.openError()
      }
    },
    openError() {
      this.showError = true
    },
    closeError() {
      this.showError = false
    },
    toggleWaiting(cond) {
      this.isWaiting = cond
    }
  }
}
</script>

<style lang="stylus">
.board-container
  margin 0 auto
  width 630px
  height auto
  position relative
.no-clicks
  position absolute
  top 0px
  left 0px
  height 100vh
  width 100%
  z-index 9999
  opacity 0
</style>
