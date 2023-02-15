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
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        placeholder:'叶璇葉璇'
      }
    },
    mounted(){
      this.$nextTick(()=>{
        this.$refs.getFocus.querySelector('input').focus()
      })
    },
    methods: {
      onSearch(val) {
        if(!val)val = this.placeholder
        this.$toast(val);
      },
      onCancel() {
        this.$router.go(-1)
      },
    }
  }
</script>

<style scoped>

</style>
