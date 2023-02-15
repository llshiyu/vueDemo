<template>
  <div class="home-page">
    <h2 class="title">全部好物</h2>
    <van-sticky :offset-top="60" class="state-box">
      <div class="box clearfloat">
        <div class="state fl" @click="stateClick(item)" :class="stateActive===item.key?'active':''" v-for="(item,index) in stateArr" :key="index">{{item.value}}</div>
      </div>
    </van-sticky>


    <ul class="list-box">
      <li v-for="(item,index) in listData" :key="index">
        <img :src="item.img" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  import list from '@/components/list.vue'
  import {getList, getState} from '@/http/home'

  export default {
    components: {list},
    data() {
      return {
        stateArr: [],
        stateActive:1,
        listArr: [],
        listData: []
      }
    },
    mounted() {
      this.getListData()
      this.getStateData()
    },
    methods: {
      getListData() {
        getList('', (res) => {
          this.listData = res.data
        }, (err) => {
          this.$toast.fail('网络异常，请稍后重试');
        })
      },
      getStateData(){
        getState('', (res) => {
          this.stateArr = res.data
        }, (err) => {
          this.$toast.fail('网络异常，请稍后重试');
        })
      },
      stateClick(item){
        this.stateActive = item.key
      }
    }
  }
</script>

<style lang="less" scoped>
  .home-page {
    background-color: #fff;
    .title{
      padding: 10px;
      font-weight: 500;
    }
    .state-box {
      background-color: #fff;
      /*overflow-x: scroll;*/
      min-width: 100%;

      .box {
        padding: 10px 8px;
        overflow-x: scroll;
        min-width: 100%;
        width: max-content;

        .state {
          background-color: #f1f1f1;
          color: #8a8a8a;
          padding: 4px 10px;
          margin-right: 10px;
          border-radius: 4px;
          &.active{
            background-color: #fcf2e6;
            color: #ff9a32;
          }
        }
      }
    }
  }
</style>
<style lang="less">
  .home-page {
    .state-box {
      .van-sticky {
        overflow-x: scroll;
        background-color: #fff;
      }
    }
  }
</style>
