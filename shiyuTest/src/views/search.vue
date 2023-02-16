<template>
  <div class="search-cont-box">
    <van-search
      v-model="value"
      ref="getFocus"
      show-action
      :placeholder="placeholder"
      @search="onSearch"
      @cancel="onCancel"
    />
    <div class="search-cont">
      <div class="history-box line-box flex-box" v-if="historyArr.length">
        <div class="title">历史</div>
        <div class="cont flex1">
          <span class="item" @click="clickHistory(item)" v-for="(item,index) in historyArr"
                :key="index">{{item}}</span>
          <van-icon name="delete-o" @click="delHistory"/>
        </div>
      </div>

      <div class="suggest-box line-box flex-box">
        <div class="title">建议</div>
        <div class="cont flex1">
          <span class="item" @click="clickHistory(item)" v-for="(item,index) in suggestArr1" :key="index+item.value+'01'">{{item.value}}</span>
          <van-icon name="replay" @click="replaySuggest"/>
          <br>
          <span class="item" @click="clickHistory(item)" v-for="(item,index) in suggestArr2" :key="index+item.value+'02'">{{item.value}}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import {getSuggest, getHistory, addHistory} from '@/http/home'

  export default {
    data() {
      return {
        value: '',
        placeholder: '叶璇葉璇',
        historyArr: [],
        suggestArr1: [],
        suggestArr2: []
      }
    },
    mounted() {
      this.getSuggestData();
      this.getHistoryData();
      this.placeholder = this.$route.query['id']
      this.$nextTick(() => {
        this.$refs.getFocus.querySelector('input').focus()
      })
    },
    methods: {
      getSuggestData() {
        getSuggest({}, (res) => {
          this.suggestArr1 = [];
          this.suggestArr2 = [];
          res.data.forEach((value, i) => {
            if (i < 4) this.suggestArr1.push(value);
            else this.suggestArr2.push(value);
          })
        }, (err) => {
          this.$toast.fail('网络异常，请稍后重试');
        })
      },
      getHistoryData(){
        getHistory({}, (res) => {
          this.historyArr = res.data;
        }, (err) => {
          this.$toast.fail('网络异常，请稍后重试');
        })
      },
      addHistoryData(value){
        addHistory(value,res=>{
          console.log(res);
        }, (err) => {
          this.$toast.fail('网络异常，请稍后重试');
        })
      },
      onSearch(val) {
        if (!val) val = this.placeholder
        this.historyArr.unshift(val);
        this.addHistoryData(this.historyArr)
        this.$router.push({name: 'index', params: {id: val}});
      },
      onCancel() {
        this.$router.go(-1)
      },
      clickHistory(item) {
        this.historyArr.unshift(item.value);
        this.addHistoryData(this.historyArr)
        this.$router.push({name: 'index', params: {id: item.value}});
      },
      delHistory() {
        this.historyArr = []
        this.addHistoryData(this.historyArr)
      },
      replaySuggest() {
        this.getSuggestData();
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../assets/css/style.less';

  .search-cont-box {
    .van-search {
      .van-search__content {
        background-color: #eef3ef;
        border-radius: 14px;
        height: 40px;
        line-height: 40px;
        color: #9ea39d;
        text-align: center;

        .van-cell {
          line-height: 40px;
        }
      }

      .van-search__action {
        color: @active-color;
        font-size: 19px;
        margin-left: 8px;
        margin-right: 8px;
      }
    }

    .search-cont {
      .line-box {
        line-height: 30px;
        padding: 10px 0 0 10px;
      }

      .title {
        font-size: 16px;
        color: #191919;
        width: 50px;
        text-align: center;
        padding-bottom: 10px;
        padding-top: 10px;
      }

      .cont {
        padding-bottom: 10px;
        padding-right: 20px;
        font-size: 16px;
        border-bottom: 1px solid #e0e0e0;
        overflow-x: scroll;
        scrollbar-width: none; /* firefox */
        -ms-overflow-style: none; /* IE 10+ */

        &::-webkit-scrollbar {
          display: none; /* Chrome Safari */
        }

        .item {
          margin-top: 10px;
          background-color: #f7f7f7;
          color: #191919;
          margin-right: 10px;
          border-radius: 4px;
          height: 30px;
          line-height: 30px;
          display: inline-block;
          padding: 0 8px;
        }

        .van-icon {
          border-left: 1px solid #e0e0e0;
          padding-left: 10px;
          color: #b2b2b2;
          font-size: 18px;
        }
      }

      .history-box {
        min-width: 100%;
        overflow-x: scroll;
        scrollbar-width: none; /* firefox */
        -ms-overflow-style: none; /* IE 10+ */

        &::-webkit-scrollbar {
          display: none; /* Chrome Safari */
        }

        .cont {
          white-space: nowrap;

        }
      }

      .suggest-box {
        .cont {
          border-bottom: none;
          white-space: nowrap;
        }
      }

    }
  }
</style>
<style lang="less">
  .search-cont-box {
    .van-search__content {
      .van-icon {
        font-size: 26px;
      }

      input[type="search"] {
        font-size: 16px;

      }
    }
  }
</style>
