<template>
  <div class="chat-list">
    <!-- 顶部搜索框 -->
    <div class="header-search">
      <div class="search">
        <el-input
          placeholder="搜索"
          v-model="searchText"
          @keyup.enter="search()"
        >
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <button class="search-button">+</button>
      </div>
    </div>
    <!-- 左侧聊天列表 -->
    <div class="lists">
      <div class="list" v-for="item in list" :key="item.id">
        <div class="avatar">
          <img :src="item.avatar" alt="" width="50px" height="50px" />
        </div>
        <div class="info">
          <div class="name">{{ item.name }}</div>
          <div class="message">{{ item.message }}</div>
        </div>
        <div class="time">{{ item.time }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ChatList',
  data() {
    return {
      searchText: '',
      list: [
        {
          id: 1,
          avatar: '/images/qjh.jpg',
          name: 'Hey.',
          message:
            '我这也是，我公司的硬件，以前是个女孩子，我来了一个月不到，那女娃就辞了',
          time: '15:00',
        },
        {
          id: 2,
          avatar: '/images/ld.jpg',
          name: '刘老师',
          message: '1988，我自认为是韩剧之神，最棒的电视剧，没有第一',
          time: '14:00',
        },
      ],
    }
  },
  methods: {
    search() {},
  },
}
</script>
<style lang="scss" scoped>
.search {
  display: flex;
  padding: 10px 0px 10px 10px;
  .search-button {
    margin-left: 10px;
    border: none;
  }
  &::v-deep{
    .el-input__inner {
      height: 30px;
      line-height: 30px;
      background: #E2E2E2;
    }
    .el-input {
      border-radius: 4px;
    }
    .el-input__prefix {
      top: -4px;
    }
  }
}

.lists {
  width: 300px;
  background: #e6e5e5;
  .list {
    display: flex;
    box-sizing: border-box;
    padding: 10px;
  }
}

.info {
  width: 200px;
  box-sizing: border-box;
  padding-left: 10px;
  .name {
    width: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .message {
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    margin-top: 10px;
  }
}
.time {
  font-size: 12px;
  color: #b9b9c4;
}

</style>
