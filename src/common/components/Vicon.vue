<template>
  <i class="v-icon iconfont" v-html="unicode"></i>
</template>
<script>
export default {
  name: 'VIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    unicode() {
      return /^&#x[a-z0-9]{4};$/.test(this.name) ? this.name : undefined
    },
  },
}
</script>