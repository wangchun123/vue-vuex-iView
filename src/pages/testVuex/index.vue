<template>
  <div>
    <!-- <Homes :value="son" @some="add" ref="all" /> -->
    <Input type="text" v-model="value" />
    {{value}}
    <button @click="fater">父组件</button>
    <ul v-for="item in arr" :key="item.name">
      <li>{{item.name}}</li>
    </ul>

    <div v-if="show==true">A</div>
    <div v-else>B</div>

    <div v-html="span">qwewqewqeqwewqewqe</div>

    <Button @click="setNameDefault">同步stor</Button>
    <Button @click="setNameDefaultAsync">异步stor</Button>

    <div>{{this.$store.state.name}}</div>

    <div>{{this.$store.getters.forMatterName}}</div>
    <div>{{this.$store.getters.customForMatterName('你是最帅的')}}</div>
    <!-- <From /> -->
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
// import Homes from "./pages/home/home";
// import From from "./pages/Form/form";

import { Input, Button } from "iview";

export default {
  name:"TestVuex",
  components: {
    // Homes,
    // From
  },
  data() {
    return {
      son: "xioayu",
      value: "",
      arr: [
        { id: 1, name: "qwe" },
        { id: 2, name: "ert" },
        { id: 3, name: "xcv" }
      ],
      show: false,
      span: "<span>qweqweq</span>"
    };
  },
  methods: {
    add(params) {
      this.son = params;
      console.log("this.son", this.son);
      console.log("params", params);
    },
    fater: function(params) {
      console.log("fu", this.$refs.all.eat());
    },
    setNameDefault: function() {
      this.$store.commit({
        type: "changeNameWithParam",
        name: "同步结果"
      });
    },
    setNameDefaultAsync: function() {
      this.$store.dispatch({
        type: "changeNameWithParamAsync",
        name: "异步结果"
      });
    }
  },
  created: function(params) {
    this.value = "初始值";
    console.log("store", this.$store);

    // vuex的刷新页面丢失问题处理

    if (sessionStorage.getItem("storedata")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("storedata"))
        )
      );
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("storedata", JSON.stringify(this.$store.state));
    });

    // 兼容iphone手机
    window.addEventListener("pagehide", () => {
      sessionStorage.setItem("storedata", JSON.stringify(this.$store.state));
    });
  },
  watch: {
    son: function(params) {
      console.log("son改变了");
    }
  }
};
</script>
