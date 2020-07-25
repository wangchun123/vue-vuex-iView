<template>
  <div>
    <span>1.class和style怎么动态绑定</span>
    <div :class="{red:isRead,green:isGreen}">class</div>
    <div :class="['','red']">class</div>

    <div :style="{color:'yellow',fontSize:'20px'}">style</div>
    <div :style="[{color:'yellow'},{fontSize:'20px'}]">style</div>

    <Button @click="handelClick">{{obj[0].name}}</Button>
  </div>
</template>
<script>
import { add } from '../../util/mixins';

export default {
  mixins: [add],
  data() {
    return {
      isRead: true,
      isGreen: false,
      obj: [{ item: 123, name: '小于' }],
    };
  },
  methods: {
    handelClick() {
      this.obj[0].name = 'qwe';
    },
  },
  async created() {
    console.log(await this.fetchData());
  },
};
</script>
<style  scoped>
.red {
  color: red;
}
.green {
  color: green;
}
</style>
