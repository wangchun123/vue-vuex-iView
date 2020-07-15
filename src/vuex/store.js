import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  name: "张三"
};

const mutations = {
  changeNameZhangSan(state) {
    state.name = "李四";
  },
  changeNameWithParam(state, paylod) {
    state.name = paylod.name;
  }
};

const actions = {
  changeNameAsync(context) {
    let _name = context.state.name;
    setTimeout(() => {
      context.commit("changeNameZhangSan");
    }, 1000);
  },
  changeNameWithParamAsync(context, payload) {
    setTimeout(() => {
      context.commit("changeNameWithParam", payload);
    }, 1000);
  }
};

const getters = {
  forMatterName: state => {
    let postfix = "";
    if (state.name == "张三") {
      postfix = "最棒";
    }
    return state.name + postfix;
  },
  customForMatterName: state => val => {
    let postfix = "";
    if (state.name == "张三") {
      postfix = val;
    }
    return state.name + postfix;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
