<template>
  <div class="home-page">
    <h2 class="title">全部好物</h2>
    <van-sticky :offset-top="58" class="state-box">
      <div class="box clearfloat">
        <div class="state fl" @click="stateClick(item)" :class="stateActive===item.key?'active':''"
             v-for="(item,index) in stateArr" :key="index">{{item.value}}
        </div>
      </div>
    </van-sticky>

    <div class="list-box" id="tabContainer">
      <van-pull-refresh
        v-model="isLoading"
        success-text="刷新成功"
        @refresh="onRefresh"
      >
        <list-item :item="item" :index="index" v-for="(item,index) in listData" :key="index"></list-item>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
  import listItem from '@/components/list.vue'
  import {getList, getState} from '@/http/home'

  export default {
    components: {'list-item': listItem},
    data() {
      return {
        stateArr: [],
        stateActive: 1,
        listArr: [],
        listData: [],
        isLoading:false,

      }
    },
    mounted() {
      this.getListData()
      this.getStateData()
    },
    methods: {
      getListData() {
        getList({}, (res) => {
          this.listData = res.data
        }, (err) => {
          this.$toast.fail('网络异常，请稍后重试');
        })
      },
      getStateData() {
        getState({}, (res) => {
          this.stateArr = res.data
        }, (err) => {
          this.$toast.fail('网络异常，请稍后重试');
        })
      },
      stateClick(item) {
        this.stateActive = item.key;
        this.getListData();
      },
      onRefresh(){

      },
    }
  }
</script>

<style lang="less" scoped>
  .home-page {
    background-color: #fff;

    .title {
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
        scrollbar-width: none; /* firefox */
        -ms-overflow-style: none; /* IE 10+ */
        &::-webkit-scrollbar {
          display: none; /* Chrome Safari */
        }
        .state {
          background-color: #f1f1f1;
          color: #8a8a8a;
          padding: 4px 10px;
          margin-right: 10px;
          border-radius: 4px;

          &.active {
            background-color: #fcf2e6;
            color: #ff9a32;
          }
        }
      }
    }
    .list-box{
      padding: 10px 0;
      position: relative;
      width: 100%;
      .van-pull-refresh{
        /*min-height: 200vh;*/
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
