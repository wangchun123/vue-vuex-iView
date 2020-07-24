<template>
  <div>
    <SearchForm v-bind="formProps" v-show="isShowForm" @successSubmit="handleSubmit"></SearchForm>
    <Table v-bind="tableProps" v-on="tableProps.tableEvent"></Table>
    <Row>
      <i-col :style="{textAlign:pageNationAlign,marginTop:'10px'}">
        <Page
          :total="pageTotal"
          show-total
          show-elevator
          show-sizer
          @on-change="pageChange"
          @on-page-size-change="pageSizeChange"
        />
      </i-col>
    </Row>
  </div>
</template>
<script>
import SearchForm from '../searchForm/index';

export default {
  components: {
    SearchForm,
  },
  props: {
    tableProps: {
      type: Object,
      default: () => {},
    },
    formProps: {
      type: Object,
      default: () => {},
    },
    isShowForm: {
      type: Boolean,
      default: () => true,
    },
    pageTotal: {
      type: Number,
      default: () => 0,
    },
    pageNationAlign: {
      type: String,
      default: () => 'right',
    },
  },
  data() {
    return {
      param: {
        current: 1,
        pageSize: 10,
        ...this.formProps.formValidates,
      },
    };
  },
  methods: {
    handleSubmit(val) {
      Object.assign(this.param, val);
      this.$emit('searchTableList', this.param);
    },
    pageChange(val) {
      Object.assign(this.param, { current: val });
      this.$emit('searchTableList', this.param);
    },
    pageSizeChange(val) {
      Object.assign(this.param, { current: 1, pageSize: val });
      this.$emit('searchTableList', this.param);
    },
  },
};
</script>
