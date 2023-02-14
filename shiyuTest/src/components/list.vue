<template>
  <div>
    <input type="text" class="list-input" v-if="item.isUpdate" v-model="item.cont">
    <div class="list-title" v-else>{{item.cont}}</div>
    <div class="btn del-btn" @click="del(index)">删除</div>
    <div class="btn save-btn" v-if="item.isUpdate" @click="save(index)">保存</div>
    <div class="btn update-btn" v-else @click="update(index)">修改</div>
  </div>
</template>

<script>
  export default {
    name:'list',
    props: {
      item: {
        default: () => { return {} },
        type: Object
      },
      index:{
        default:0
      }
    },
    methods: {
      del(index) {
        this.$dialog.confirm({
          title: '提示',
          message: '此操作将永久删除该数据, 是否继续?',
        }).then(() => {
          this.$emit('del', index)
        }).catch(() => {
          this.$toast({
            message: '已取消删除',
            icon: 'warning-o'
          });
        });
      },
      save(index) {
        this.$emit('save', index)
      },
      update(index) {
        this.$emit('update', index)
      }
    }
  }
</script>

<style scoped>

</style>
