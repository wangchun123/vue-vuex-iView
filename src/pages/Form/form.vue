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
import { validateAuthcode } from '../../util/validate';

//支持promise校验
const some = (rule, value) => {
  return new Promise((resolve, reject) => {
    if (value < 18) {
      reject('too young'); // reject with error message
    } else {
      resolve();
    }
  });
};

export default {
  components: {
    SearchForm,
  },
  data() {
    return {
      formValidate: {
        name: '1',
        name1: '1',
        name2: '11111111',
        name3: '111111',
        name4: '1',
        name5: [1, 2],
        name6: true,
        name7: [10, 20],
        name8: 'asadasdasd',
      },
      formRuleValidate: {
        name8: [
          {
            required: true,
            message: 'Please fill in the user name',
            trigger: 'blur',
          },
        ],
        name: [
          {
            validator: some,
            trigger: 'blur',
          },
        ],
      },
      formSearch: [
        {
          span: 24,
          label: 'Input:',
          type: 'Input',
          prop: 'name',
          nodeProps: {
            placeholder: '12321',
          },
          nodeEvents: {
            'on-change': val => {
              console.log('val', val.target.value);
            },
          },
        },
        {
          span: 24,
          label: 'Select:',
          type: 'Select',
          prop: 'name1',
          nodeProps: {
            dataSource: [{ label: '你好', value: '1' }],
          },
        },
        { span: 6, label: 'DatePicker:', type: 'DatePicker', prop: 'name2' },
        {
          span: 12,
          label: '—',
          type: 'TimePicker',
          prop: 'name3',
          pull: 1,
          nodeProps: {
            confirm: true,
          },
        },
        {
          span: 8,
          label: 'Radio:',
          type: 'Radio',
          prop: 'name4',
          nodeProps: {
            dataSource: [
              { label: '你好', value: '1' },
              { label: '你好1', value: '2' },
            ],
          },
        },
        {
          span: 24,
          label: 'Checkbox:',
          type: 'Checkbox',
          prop: 'name5',
          nodeProps: {
            dataSource: [
              { label: '你好', value: 1 },
              { label: '你好1', value: 2 },
            ],
          },
        },
        {
          span: 24,
          label: 'Switch:',
          type: 'Switch',
          prop: 'name6',
          nodeProps: {},
        },
        {
          span: 24,
          label: 'Slider:',
          type: 'Slider',
          prop: 'name7',
          nodeProps: {},
        },
        {
          span: 24,
          label: 'Text:',
          type: 'Input',
          prop: 'name8',
          nodeProps: {
            placeholder: '12321',
            type: 'textarea',
          },
        },
      ],
    };
  },
  methods: {
    handleSubmit(val) {
      const { name, name1, name2 } = val;
      console.log('父组件', name, name1, name2, { ...val });
    },
  },
};
</script>
