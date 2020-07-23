<template>
  <SearchTable
    :tableProps="tableProps"
    :formProps="formProps"
    @searchTableList="searchTableList"
    :isShowForm="true"
    :pageTotal="pageTotal"
  ></SearchTable>
</template>
<script>
import SearchTable from '../../components/searchTable';
import { tableData } from '../../util/const';

export default {
  components: {
    SearchTable,
  },
  data() {
    return {
      relodParam: {},
      pageTotal: 100,
      tableProps: {
        border: true,
        columns: [
          {
            title: 'Name',
            key: 'name',
          },
          {
            title: 'Age',
            key: 'age',
          },
          {
            title: 'Province',
            key: 'province',
          },
          {
            title: 'City',
            key: 'city',
          },
          {
            title: 'Address',
            key: 'address',
          },
          {
            title: 'Postcode',
            key: 'zip',
          },
          {
            title: 'Action',
            key: 'action',

            render: (h, params) => {
              const {
                row: { id },
              } = params;

              return h('div', [
                h(
                  'Button',
                  {
                    props: {
                      type: 'text',
                      size: 'small',
                    },
                    on: {
                      click: () => {
                        this.handelDelete(id);
                      },
                    },
                  },
                  'View',
                ),
                h(
                  'Button',
                  {
                    props: {
                      type: 'text',
                      size: 'small',
                    },
                  },
                  'Edit',
                ),
              ]);
            },
          },
        ],
        data: tableData,
      },
      formProps: {
        formValidates: { name: 1123, name1: '1' },
        footerAlign: 'right',
        formSearch: [
          {
            span: 8,
            'label-width': 60,
            label: '国际:',
            type: 'Input',
            prop: 'name',
            nodeProps: {
              placeholder: '',
            },
            nodeEvents: {
              'on-change': val => {
                console.log('val', val.target.value);
              },
            },
          },
          {
            span: 8,
            'label-width': 60,
            label: '区号:',
            type: 'Select',
            prop: 'name1',
            nodeProps: {
              placeholder: '',
              dataSource: [{ label: '你好', value: '1' }],
            },
            nodeEvents: {
              'on-change': val => {
                console.log('val', val.target.value);
              },
            },
          },
        ],
      },
    };
  },
  methods: {
    searchTableList(val) {
      this.relodParam = val;

      console.log('异步请求', val);
    },
    handelDelete(val) {
      console.log(val);
      this.searchTableList(this.relodParam);
    },
  },
  mounted() {
    const param = {
      current: 1,
      pageSize: 10,
      ...this.formProps.formValidates,
    };
    this.searchTableList(param);
  },
};
</script>
<style>
</style>
