<template>
  <div class="home-page">
    <Header></Header>
    <h2 class="title">全部好物</h2>
    <van-sticky :offset-top="58" class="state-box">
      <div class="box clearfloat">
        <div class="state fl" @click="stateClick(item)" :class="stateActive===item.key?'active':''"
             v-for="(item,index) in stateArr" :key="index">{{item.value}}
        </div>
      </div>
    </van-sticky>

    <div class="list-box" id="tabContainer" v-if="listData.length">
      <van-pull-refresh
        v-model="isLoading"
        success-text="刷新成功"
        @refresh="onRefresh"
      >
        <list-item :item="item" :index="index" v-for="(item,index) in listData" :key="index"
                   @addCar="addCar"></list-item>
      </van-pull-refresh>
    </div>
    <van-empty image="search" v-else description="暂无搜索结果" />

    <div class="float-car-box" @click="goCar">
      <div class="car-box">
        <van-badge :content="carNumber" max="99" v-if="carNumber">
          <van-icon name="shopping-cart-o"/>
        </van-badge>
        <van-icon name="shopping-cart-o" v-else/>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from '@/components/footer.vue'
  import Header from '@/components/header.vue'
  import listItem from '@/components/list.vue'
  import {getList, getState} from '@/http/home'

  export default {
    components: {'list-item': listItem,Header, Footer},
    data() {
      return {
        stateArr: [],
        stateActive: 1,
        listArr: [],
        listData: [],
        isLoading: false,
        carNumber: 0,
        searchName:''
      }
    },
    mounted() {
      this.getListData()
      this.getStateData()
      if(this.$route.params&&this.$route.params['id']){
        this.searchName = this.$route.params['id'];
        this.getListDataName();
        this.stateActive = -1;
      }
    },
    methods: {
      getListData() {
        getList({}, (res) => {
          this.listData = res.data
          this.isLoading = false
        }, (err) => {
          this.$toast.fail('网络异常，请稍后重试');
        })
      },
      getListDataName() {
        getList({name:this.searchName}, (res) => {
          this.listData = res.data
          this.isLoading = false
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
        if(item.value==='全部'){
          this.getListData()
        }else{
          this.searchName = item.value;
          this.getListDataName();
        }
      },
      onRefresh() {
        this.searchName = '';
        this.stateActive = 1;
        this.getListData()
      },
      goCar() {
        this.$toast.fail('网站建设中');
      },
      addCar(item) {
        this.carNumber++
      }
    }
  }
</script>

<style lang="less" scoped>
  .home-page {
    background-color: #fff;
    margin: 60px auto 70px;

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

    .list-box {
      padding: 10px 0;
      position: relative;
      width: 100%;

      .van-pull-refresh {
        /*min-height: 200vh;*/
      }
    }

    .float-car-box {
      position: fixed;
      bottom: 100px;
      right: 20px;
      background-color: rgba(255, 255, 255, 0.9);
      border-radius: 100%;
      width: 50px;
      height: 50px;
      line-height: 50px;
      box-shadow: 2px 2px 2px #a0a2a8;

      .car-box {
        text-align: center;
        font-size: 26px;
        color: #0b090a;
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
    .van-sticky--fixed{
      z-index: 9;
    }
    .float-car-box {
      .van-badge {
        font-size: 18px;
        min-width: 20px;
        top: 10px;
      }
    }
  }
</style>
