import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Forms from '@/pages/Form/form';
import TestVuex from '../pages/testVuex/index';
import VueOrder from '@/pages/vueOrder/index';
import Table from '@/pages/table/index';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', redirect: '/index' },
    {
      path: '/index',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/form',
      name: 'form',
      component: Forms,
    },
    {
      path: '/testVuex',
      name: 'testVuex',
      component: TestVuex,
    },
    {
      path: '/vueOrder',
      name: 'vueOrder',
      component: VueOrder,
    },
    {
      path: '/table',
      name: 'Table',
      component: Table,
    },
  ],
});
