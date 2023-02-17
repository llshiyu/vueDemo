// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/common.less'
import {
  Toast,
  Dialog,
  Empty,
  Icon,
  Image as VanImage,
  Col, Row,
  Popup,
  Search,
  Loading,
  PullRefresh,
  Badge,
  Lazyload,
  List,
  Sticky,
  Grid, GridItem,
  Tabbar, TabbarItem,
  Sku
} from 'vant'

Vue.config.productionTip = false
Vue.use(Toast)
  .use(Dialog)
  .use(Empty)
  .use(Icon)
  .use(VanImage)
  .use(Col)
  .use(Row)
  .use(Popup)
  .use(Search)
  .use(Loading)
  .use(PullRefresh)
  .use(Badge)
  .use(Lazyload, {
    lazyComponent: true,
  })
  .use(List)
  .use(Sticky)
  .use(Grid)
  .use(GridItem)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Sku)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
