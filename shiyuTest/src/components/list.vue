<template>
  <div class="list-item-box">
    <van-image
      width="160"
      height="160"
      lazy-load
      :src="item.img"
    />
    <div class="title van-multi-ellipsis--l2">
      <span class="dou" v-if="item.isDou">豆品</span>{{item.title}}
    </div>
    <div class="state-people-box" v-if="item.adjective||item.people">
      <span class="state" v-if="item.adjective">{{item.adjective}}</span>
      <span class="people" v-if="item.people">{{item.people}}人在逛</span>
    </div>
    <div class="price-box clearfloat">
      <div class="left fl"><span
        class="time-txt" v-if="item.prePrice">限时</span><span
        class="price-unit">￥</span><span
        class="price">{{item.prePrice||item.price}}</span><span
        class="unit" v-if="item.unit">/{{item.unit}}</span><span
        class="old-price" v-if="item.prePrice">￥{{item.price}}</span></div>
      <div class="right fr" @click="addCar(item)">
        <div class="img-box"><img src="../assets/img/icon/car.png" alt=""></div>
      </div>
    </div>
    <div class="group-box" v-if="item.isGroup"><span>正在开团&nbsp;></span></div>
  </div>
</template>

<script>
  export default {
    name: 'list',
    props: {
      item: {
        default: () => {
          return {}
        },
        type: Object
      },
      index: {
        default: 0
      }
    },

    mounted() {
      this.waterFall("#tabContainer", ".list-item-box");//实现瀑布流
      // 窗口变化自适应布局
      window.onresize = () => {
        return (() => {
          this.waterFall("#tabContainer", ".list-item-box");
        })();
      };
    },
    methods: {
      /**
       * @param { string } wrapIdName    容器id(或class)名称
       * @param { string } contentIdName 容器中内容项id(或class)名称
       * @param { number } columns        容器中内容展示列数 手机的话建议改为2
       * @param { number } columnGap     容器中 列 间隔距离 默认为20
       * @param { number } rowGap        容器中 行 间隔距离 默认为20
       */

      waterFall(wrapIdName, contentIdName, columns = 2, columnGap = 20, rowGap = 20) {
        const wrapIdNameDom = document.querySelector(wrapIdName);
        // 获得内容可用宽度（去除滚动条宽度）
        const wrapContentWidth = wrapIdNameDom.offsetWidth - 8 - 20;

        // 间隔空白区域
        const whiteArea = (columns - 1) * columnGap;

        // 得到每列宽度(也即每项内容宽度)
        const contentWidth = parseInt((wrapContentWidth - whiteArea) / columns);

        // 得到内容项集合
        const contentList = document.querySelectorAll(contentIdName);

        // 成行内容项高度集合
        const lineConentHeightList = [];

        for (let i = 0; i < contentList.length; i++) {
          // 动态设置内容项宽度
          contentList[i].style.width = contentWidth + "px";

          // 获取内容项高度
          const height = contentList[i].clientHeight;
          lineConentHeightList.push(height);

          if (i < columns) {
            contentList[i].style.top = 0;
          } else {
            let top = lineConentHeightList[i - columns] + rowGap;
            contentList[i].style.top = top + "px";

            lineConentHeightList[i] = height + top;
          }
          contentList[i].style.left = (contentWidth + columnGap) * (i % columns) + "px";
        }
        wrapIdNameDom.querySelector('.van-pull-refresh').style.height = lineConentHeightList[contentList.length-1]+'px'
      },
      addCar(item){
        this.$emit('addCar',item)
      }
    }
  }
</script>

<style lang="less" scoped>
  .list-item-box {
    position: absolute;
    height: auto;
    /*width: 44%;*/
    display: inline-block;
    /* 元素不能中断显示 */
    /*break-inside: avoid;*/
    text-align: center;
    padding: 0 10px;
    vertical-align: top;

    .title {
      color: #1a1a1a;
      text-align: left;
      margin: 10px auto;
      line-height: 20px;
      font-size: 16px;

      .dou {
        background-color: #4e7b5e;
        color: #effdec;
        border-radius: 4px;
        padding: 2px 4px;
        margin-right: 6px;
        font-size: 12px;
      }
    }

    .state-people-box {
      text-align: left;

      .state {
        background-color: #f3e8e2;
        color: #e61c18;
        padding: 4px 6px;
        font-size: 12px;
      }

      .people {
        color: #818181;
        font-size: 12px;
      }
    }

    .price-box {
      text-align: left;
      margin: 10px auto;
      line-height: 32px;

      .left {
        .time-txt {
          color: #c81721;
          font-size: 14px;
        }

        .price-unit {
          color: #c81721;
          font-size: 14px;
          margin: 0 -2px;
        }

        .price {
          color: #c81721;
          font-size: 18px;
        }

        .unit {
          color: #848484;
          font-size: 14px;
        }

        .old-price {
          color: #848484;
          font-size: 14px;
        }
      }

      .right {
        .img-box {
          width: 20px;
          height: 20px;
          border-radius: 100%;
          background-color: #d42d24;
          padding: 6px;

          img {
            width: 100%;
          }
        }
      }
    }

    .group-box {
      text-align: left;
      margin-top: -10px;

      span {
        background-color: #fcf2e6;
        color: #c3783f;
        text-align: center;
        padding: 4px 6px;
        border-radius: 4px;
        font-size: 14px;
      }
    }
  }
</style>
<style lang="less">
  .list-item-box {
    img {
      border-radius: 6px;
    }
  }
</style>
