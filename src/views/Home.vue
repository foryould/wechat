<template>
  <div class="home">
    <aside-chat></aside-chat>
    <chat-list></chat-list>
  </div>
</template>

<script>
import AsideChat from '@/common/components/AsideChat.vue'
import ChatList from '@/common/components/ChatList.vue'
export default {
  components: {
    AsideChat,
    ChatList,
  },
}
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  width: 50vw;
  height: 70vh;
  box-shadow: 0px 0px 16px #E0DFDF;
  margin: auto;
}

.chat-aside {
  padding: 10px;
  background: #2e2e2e;
  border-radius: 4px;
  color: #fff;
}

.chat-list {
}
</style>
