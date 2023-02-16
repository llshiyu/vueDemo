<template>
  <div class="header-box">
    <van-row class="header-row">
      <van-col span="3" @click="operateMenu"><img class="img-box" src="../assets/img/icon/menu.png" alt=""></van-col>
      <van-col span="18" @click="showSearchPage">
        <div class="search-box">
          <img src="../assets/img/icon/search.png" alt="" class="">
<!--          <van-icon name="search" class=""/>-->
          <span class="search-value" v-if="searchValue">{{searchValue}}</span>
          <span class="" v-else>{{searchKeywords}}</span>
        </div>
      </van-col>
      <van-col span="3" @click="operateMail">
        <div class="img-box">
          <van-badge :content="1"><img src="../assets/img/icon/mail.png" alt=""></van-badge>
        </div>
      </van-col>
    </van-row>

    <van-popup v-model="showMenu" position="left" class="menu-popup" :style="{ width: '70%',height:'100%' }">
      <van-row class="top">
        <van-col span="12">
          <van-icon name="cross" />
        </van-col>
        <van-col span="12">

        </van-col>
      </van-row>
    </van-popup>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchValue: '',
        showMenu: false,
        searchKeywords: '叶璇葉璇'
      }
    },
    mounted(){
      if(this.$route.params&&this.$route.params['id']){
        this.searchValue = this.$route.params['id']
      }
    },
    methods: {
      operateMenu() {
        this.showMenu = !this.showMenu
      },
      showSearchPage(){
        this.$router.push({path:'/search',query:{id:this.searchValue||this.searchKeywords}})
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
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;

    .header-row {
      .van-col {
        height: 60px;
        line-height: 60px;
        text-align: center;

        .img-box {
          width: 34px;
          height: 34px;
          margin-top: 10px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .search-box {
          background-color: #eef3ef;
          border-radius: 14px;
          margin: 10px 10px 10px 0;
          height: 40px;
          line-height: 40px;
          color: #9ea39d;
          font-size: 16px;
          text-align: center;
          display: flex;
          justify-content: center;
          .van-icon {
            font-size: 28px;
            line-height: 30px;
            top: 4px;
          }
          img{
            width: 28px;
            height: 28px;
            padding-top: 5px;
          }
          span {
            &.search-value{
              color: #191919;
            }
          }
        }
      }
    }
  }
</style>
<style lang="less">
  .header-box {
    .header-row {
      .img-box {
        .van-badge {
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
