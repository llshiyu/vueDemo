<template>
  <van-tabbar v-model="active" active-color="#67b750" class="footer-box" inactive-color="#878687" @change="onChange">
    <van-tabbar-item name="home">
      <span>首页</span>
      <template #icon="props">
        <img :src="props.active ? home.active : home.inactive"/>
      </template>
    </van-tabbar-item>
    <van-tabbar-item name="video">
      <span>书影音</span>
      <template #icon="props">
        <img :src="props.active ? video.active : video.inactive"/>
      </template>
    </van-tabbar-item>
    <van-tabbar-item name="group">
      <span>小组</span>
      <template #icon="props">
        <img :src="props.active ? group.active : group.inactive"/>
      </template>
    </van-tabbar-item>
    <van-tabbar-item name="list">
      <span>市集</span>
      <template #icon="props">
        <img :src="props.active ? list.active : list.inactive"/>
      </template>
    </van-tabbar-item>
    <van-tabbar-item name="my">
      <span>我</span>
      <template #icon="props">
        <img :src="props.active ? my.active : my.inactive"/>
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
  export default {
    data() {
      return {
        active: 'list',
        home: {
          active: require('@/assets/img/icon/home-active.png'),
          inactive: require('@/assets/img/icon/home.png')
        },
        video: {
          active: require('@/assets/img/icon/video-active.png'),
          inactive: require('@/assets/img/icon/video.png')
        },
        group: {
          active: require('@/assets/img/icon/group-active.png'),
          inactive: require('@/assets/img/icon/group.png')
        },
        list: {
          active: require('@/assets/img/icon/list-active.png'),
          inactive: require('@/assets/img/icon/list.png')
        },
        my: {
          active: require('@/assets/img/icon/my-active.png'),
          inactive: require('@/assets/img/icon/my.png')
        }
      }
    },
    methods: {
      onChange(index) {
        console.log(index);
        if (index !== 'list') {
          this.$toast.fail('系统建设中');
          this.active = 'list'
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .van-tabbar.footer-box {
    height: 70px;

    .van-tabbar-item {
      font-size: 12px;
    }

    .van-tabbar-item__icon {
      margin-bottom: 10px;

      img {
        width: 26px;
        height: 26px;
      }
    }
  }


</style>
<style lang="less">
  .footer-box {
    .van-tabbar-item__icon {
      margin-bottom: 8px;
    }
  }
</style>
