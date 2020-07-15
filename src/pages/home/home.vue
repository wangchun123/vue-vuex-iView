<template>
  <Button @click="test">测试</Button>
</template>
<script>
import { Button } from "iview";

export default {
  props: {
    value: String
  },
  data() {
    return {};
  },
  methods: {
    test() {
      this.$emit("some", "子组件值");
    },
    eat: function(params) {
      console.log("父组件触发子组件");
    }
  },
  created: function() {
    console.log("value", this.value);
  }
};
</script>
<style  scoped>
</style>
