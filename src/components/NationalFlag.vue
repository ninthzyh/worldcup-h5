<template>
  <img :src="`${img?'':defaultFlag}`" alt="" class="national-flag" :style="{
        width,
        height,
        margin
  }">
</template>
<script>
import defaultFlag from "../assets/images/default-flag.svg";
export default {
  props: {
    width: {
      //默认宽
      type: String,
      default: 0,
    },
    height: {
      //默认高
      type: String,
      default: 0,
    },
    margin: {
      //默认边距
      type: String,
      default: "0 0 0 0",
    },
    img: {
      // 国旗图片
      type: String,
      default: '',
    },
  },
  data(){
    return{
      defaultFlag
    }
  }
};
</script>