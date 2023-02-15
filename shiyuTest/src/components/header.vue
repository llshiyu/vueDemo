<template>
  <div class="header-box">
    <van-row class="header-row">
      <van-col span="3" @click="operateMenu"><img class="img-box" src="../assets/img/icon/menu.png" alt=""></van-col>
      <van-col span="18">
        <van-search v-model="searchValue" placeholder="请输入搜索关键词"/>
      </van-col>
      <van-col span="3" @click="operateMail">
        <div class="img-box">
          <van-badge :content="1"><img src="../assets/img/icon/mail.png" alt=""></van-badge>
        </div>
      </van-col>
    </van-row>

    <van-popup v-model="showMenu" position="left" :style="{ width: '70%',height:'100%' }">
      wode
    </van-popup>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchValue: '',
        showMenu: false,
      }
    },
    methods: {
      operateMenu() {
        this.showMenu = !this.showMenu
      },
      operateMail() {
        this.$toast.fail('系统建设中');
      }
    }
  }
</script>

<style lang="less" scoped>
  .header-box {
    background-color: #fff;

    .header-row {
      .van-col {
        height: 54px;
        line-height: 54px;
        text-align: center;

        .img-box{
          width: 32px;
          height: 32px;
          margin-top: 10px;
          img{
            width: 100%;
            height: 100%;
          }

        }

        .van-search__content {
          background-color: #eef3ef;
          border-radius: 4px;
        }

        .van-search .van-cell {
        }
      }
    }
  }
</style>
<style lang="less">
  .header-box{
    .header-row{
      .img-box{
        .van-badge{
          right: 4px;
          width: 22px;
          height: 22px;
          line-height: 18px;
          top: 4px;
          padding: 0;
          text-align: center;
          background-color: #fe5b5e;
        }
      }
    }
  }
</style>
