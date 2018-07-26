<template lang="pug">
  #app
    router-view
</template>

<script>

import {EventBus} from '@/services/EventBus'
import http from '@/services/httpQuery.js'

export default {
  name: 'App',
}
</script>
