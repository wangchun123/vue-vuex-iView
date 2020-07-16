<template>
  <div>
    <span>1.class和style怎么动态绑定</span>
    <div :class="{red:isRead,green:isGreen}">class</div>
    <div :class="['','red']">class</div>

    <div :style="{color:'yellow',fontSize:'20px'}">style</div>
    <div :style="[{color:'yellow'},{fontSize:'20px'}]">style</div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      isRead: true,
      isGreen: false,
    };
  },
  methods: {},
  created: function() {},
};
</script>
<style  scoped>
.red {
  /* background: red; */
  color: red;
}
.green {
  color: green;
}
</style>
