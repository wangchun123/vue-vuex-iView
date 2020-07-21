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
      formValidate: { name: '', name1: '', name2: '' },
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
          span: 8,
          placeholder: 12321,
          label: 'qw:',
          type: 'Input',
          prop: 'name',
        },
        {
          span: 8,
          label: 'df:',
          type: 'Select',
          dataSocue: [{ label: '你好', value: 1 }],
          prop: 'name1',
        },
        { span: 8, label: 'df:', type: 'DatePicker', prop: 'name2' },
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
