<template>
  <div>
    <span>1.class和style怎么动态绑定</span>
    <div :class="{red:isRead,green:isGreen}">class</div>
    <div :class="['','red']">class</div>

    <div :style="{color:'yellow',fontSize:'20px'}">style</div>
    <div :style="[{color:'yellow'},{fontSize:'20px'}]">style</div>

    <input type="text" v-model="fistName" />
    <input type="text" v-model="lastName" />
    <span>{{fullName}}</span>
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
      name: '王二',
      fistName: '小',
      lastName: '明',
      obj: [{ item: 123, name: '小于' }],
    };
  },
  methods: {
    handelClick() {
      this.obj[0].name = 'qwe';
    },
  },
  computed: {
    //1.对于任何复杂逻辑，你都应当使用计算属性
    //2.计算属性是基于它们的响应式依赖进行缓存的,计算属性会立即返回之前的计算结果，而不必再次执行函数
    //3.依赖多个变量，使用计算属性编写，更加优雅。
    fullName: function () {
      return this.fistName + this.lastName;
    },
  },
  watch: {
    //当需要在数据变化时执行异步或开销较大的操作时
    name: function (newVal, oldVal) {
      console.log(newVal, oldVal);
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
