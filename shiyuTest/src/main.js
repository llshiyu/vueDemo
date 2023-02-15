// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/common.less'
import '@/assets/css/style.less'
import {
  Toast,
  Dialog,
  Button,
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
  Skeleton,
  Sticky,
  Tag,
  Grid, GridItem,
  Tabbar, TabbarItem,
  NavBar,
  Sku
} from 'vant'

Vue.config.productionTip = false
Vue.use(Toast)
  .use(Dialog)
  .use(Button)
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
  .use(Skeleton)
  .use(Sticky)
  .use(Tag)
  .use(Grid)
  .use(GridItem)
  .use(Tabbar)
  .use(TabbarItem)
  .use(NavBar)
  .use(Sku)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
