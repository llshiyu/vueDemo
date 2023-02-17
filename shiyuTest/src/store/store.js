import {reactive} from 'vue'
import {getHistory, addHistory} from '@/http/home'

export const store = reactive({
  historyArr: [],
  getHistoryData() {
    getHistory({}, (res) => {
      this.historyArr = res.data;
    }, (err) => {
      this.$toast.fail('网络异常，请稍后重试');
    })
  },
  addHistoryData(value) {
    if (!value) this.historyArr = [];
    else if (this.historyArr.indexOf(value) == -1) this.historyArr.unshift(value);
    addHistory(this.historyArr, res => {
      // console.log(res);
    }, (err) => {
      this.$toast.fail('网络异常，请稍后重试');
    })

  }
})
