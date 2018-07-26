<template lang="pug">
.error
  .title Ошибка
  .text Что-то пошло не так. Нажмите кнопку.
  button(@click="closeError()") ОК
</template>

<script>
import {EventBus} from '@/services/EventBus'

export default {
  name: 'error',
  methods: {
    closeError() {
      EventBus.$emit('CloseError')
      EventBus.$emit('WaitingMode', false)
    }
  }
}
</script>

<style lang="stylus">
.error
  position fixed
  top 20px
  right 20px
  background #fff
  border-radius 10px
  padding 10px 20px
  font-weight bold
  .title
    color #ff4545
    font-size 25px
  .text
    margin-top 9px
    color #000
    font-size 15px
  button
    margin-top 17px
    background #ffe524
    border 1px solid #ffe524
    outline none
    box-sizing border-box
    transition .1s linear
    color #000
    font-family Intro-Regular
    font-size 15px
    border-radius 20px
    width 135px
    height 40px
    transition .2s linear
    cursor pointer
    &:hover
      background rgba(0, 0, 0, 0)
    &:active
      color #ffe524
      opacity 0.5
</style>
