<template>
  <SearchForm
    :formValidates="formValidate"
    :ruleValidates="formRuleValidate"
    :formSearch="formSearch"
    @successSubmit="handleSubmit"
  ></SearchForm>
</template>
<script>
import SearchForm from '../../components/searchForm/index';

export default {
  components: {
    SearchForm,
  },
  data() {
    return {
      formValidate: { name: '', name1: '', name2: '', name3: '' },
      formRuleValidate: {
        name: [
          {
            required: true,
            message: 'Please fill in the user name',
            trigger: 'blur',
          },
        ],
      },
      formSearch: [
        {
          span: 24,
          label: 'qw:',
          type: 'Input',
          prop: 'name',
          nodeProps: {
            placeholder: '12321',
          },
        },
        {
          span: 8,
          label: 'df:',
          type: 'Select',
          prop: 'name1',
          nodeProps: {
            dataSource: [{ label: '你好', value: 1 }],
          },
        },
        { span: 8, label: 'df:', type: 'DatePicker', prop: 'name2' },
        {
          span: 24,
          label: 'df:',
          type: 'DatePicker',
          prop: 'name3',
          nodeProps: {
            confirm: true,
          },
        },
      ],
    };
  },
  methods: {
    handleSubmit(val) {
      const { name, name1, name2 } = val;
      console.log('父组件', name, name1, name2);
    },
  },
};
</script>
