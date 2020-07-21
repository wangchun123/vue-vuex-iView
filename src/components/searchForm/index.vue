<template>
  <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
    <Row type="flex">
      <Col :span="item.span" v-for="(item,index) in formSearch" :key="index">
        <template v-if="item.type==='Input'">
          <Form-item :label="item.label" :prop="item.prop">
            <Input v-model="formValidate[item.prop]" :placeholder="item.placeholder" />
          </Form-item>
        </template>
        <template v-else-if="item.type==='Select'">
          <Form-item :label="item.label" :prop="item.prop">
            <Select v-model="formValidate[item.prop]" :placeholder="item.placeholder">
              <Option
                v-for="(item,index) in item.dataSocue"
                :value="item.value"
                :key="index"
              >{{item.label}}</Option>
            </Select>
          </Form-item>
        </template>
        <template v-else-if="item.type==='DatePicker'">
          <Form-item :label="item.label" :prop="item.prop">
            <DatePicker v-model="formValidate[item.prop]" :placeholder="item.placeholder"></DatePicker>
          </Form-item>
        </template>
      </Col>
      <Col>
        <Form-item>
          <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
          <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </Form-item>
      </Col>
    </Row>
  </Form>
</template>
<script>
export default {
  props: {
    formValidates: {
      type: Object,
      default: {},
    },
    ruleValidates: {
      type: Object,
      default: {},
    },
    formSearch: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      formValidate: this.formValidates,
      ruleValidate: this.ruleValidates,
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$emit('successSubmit', this.formValidate);
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
  },
};
</script>
