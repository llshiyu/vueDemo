<template>
  <div class="home-page">
    <Header></Header>
<!--    <div class="search-box">-->
<!--      <input type="text" class="search-input" v-model="searchItem">-->
<!--      <div @click="add" class="search-btn btn">新建</div>-->
<!--    </div>-->


    <ul class="list-box">
      <li v-for="(item,index) in listArr" :key="index">
        <list :item="item" :index="index" @del="del(index)" @update="update(index)" @save="save(index)"></list>
      </li>
    </ul>

    <ul class="list-box">
      <li v-for="(item,index) in listData" :key="index">
        <img :src="item.img" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  import Header from '@/components/header.vue'

  import list from '@/components/list.vue'
  import {getList} from '@/http/home'

  export default {
    components: {Header, list},
    data() {
      return {
        searchItem: '',
        listArr: [],
        listData: []
      }
    },
    mounted() {
      this.getListData()
    },
    methods: {
      getListData() {
        getList('', (res) => {
          console.log(res);
          this.listData = res.data
        }, (err) => {
        })
      },

      add() {
        if (this.searchItem) {
          this.listArr.push(
            {
              cont: this.searchItem,
              isUpdate: false
            }
          );
          this.searchItem = ''
        } else {
          this.$toast({
            message: '请输入内容',
            icon: 'fail'
          });
        }
      },
      del(i) {
        if (this.listArr[i]) this.listArr.splice(i, 1);
        this.$toast.success('删除成功!');
      },
      update(i) {
        this.listArr[i]['isUpdate'] = true
      },
      save(i) {
        this.listArr[i]['isUpdate'] = false
        this.$toast.success('保存成功!');
      }
    }
  }
</script>

<style lang="less">
  img {
    height: 100px;
    width: 100px;
  }

  .list-box {
    padding-top: 80px;
  }

  .search-box {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    height: 70px;
    line-height: 70px;
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.08);
  }

  .btn {
    width: 60px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    display: inline-block;
    border-radius: 4px;
    margin-right: 20px;
    cursor: pointer;
  }

  .btn:hover {
    font-weight: 700;
  }

  .search-btn {
    border: 1px solid #409EFF;
    background-color: #409EFF;
    color: #fff;
  }

  .del-btn {
    border: 1px solid #333;
    background-color: #fff;
    color: #333;
  }

  .save-btn {
    border: 1px solid #67c23a;
    background-color: #67c23a;
    color: #fff;
  }

  .update-btn {
    border: 1px solid #409EFF;
    background-color: #409EFF;
    color: #fff;
  }

  .home-page .list-box li {
    list-style-type: none;
    border: 1px solid #333;
    margin: 10px;
    padding: 20px;
    text-align: left;
    border-radius: 4px;
  }

  .home-page .list-box li .list-input {
    min-width: 100px;
    min-height: 30px;
    line-height: 30px;
    margin-bottom: 20px;
    display: block;
  }

  .home-page .list-box li .list-title {
    min-width: 100px;
    min-height: 30px;
    line-height: 30px;
    margin-bottom: 20px;
  }
</style>
