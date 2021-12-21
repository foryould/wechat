<template>
  <div class="chat-aside">
    <ul class="leftTopNav">
      <li class="navicon" v-for="c in leftTopNav" :key="c.value">
        <vicon :name="c.icon"></vicon>
      </li>
    </ul>
    <ul class="leftBottomNav">
      <li class="navicon" v-for="c in leftBottomNav" :key="c.value">
        <vicon :name="c.icon"></vicon>
      </li>
    </ul>
  </div>
</template>
<script>
import Vicon from './Vicon.vue'

export default {
  components: { Vicon },
  name: 'Aside',
  computed: {},
  data() {
    return {
      leftTopNav: [
        {
          name: '聊天',
          value: 'Chat',
          icon: '&#xe763;',
          path: '/chat'
        },
        {
          name: '通讯录',
          value: 'Profile',
          icon: '&#xe6c2;',
          path: '/profile'
        },
        {
          name: '收藏',
          value: 'collection',
          icon: '&#xe646;',
          path: '/collection'
        },
        {
          name: '文件夹',
          value: 'folder',
          icon: '&#xec17;',
          path: '/folder'
        },
        {
          name: '朋友圈',
          value: 'friends',
          icon: '&#xe8b4;',
          path: '/friends'
        },
        {
          name: '看一看',
          value: 'look',
          icon: '&#xe60b;',
          path: '/look'
        }
      ],
      leftBottomNav: [
        {
          name: '小程序',
          value: 'miniProgram',
          icon: '&#xe619;',
          path: '/miniProgram'
        },
        {
          name: '手机',
          value: 'phone',
          icon: '&#xeac3;',
          path: '/phone'
        },
        {
          name: '更多',
          value: 'more',
          icon: '&#xe600;',
          path: '/more'
        }
      ]
    }
  },
}
</script>
<style lang="scss" scoped>
.leftTopNav {
  list-style: none;
  padding: 0;
  margin: 0;
}

.leftBottomNav {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 30px;
}

.navicon {
  margin-top: 10px;
}
</style>