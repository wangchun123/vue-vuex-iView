<template>
  <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
    <Row type="flex">
      <Col v-for="(item,index) in formSearch" :key="index" v-bind="{...item}">
        <template v-if="item.type==='Input'">
          <Form-item :label="item.label" :prop="item.prop">
            <Input v-model="formValidate[item.prop]" v-bind="{...item.nodeProps}" />
          </Form-item>
        </template>
        <template v-else-if="item.type==='Select'">
          <Form-item :label="item.label" :prop="item.prop">
            <Select v-model="formValidate[item.prop]" v-bind="{...item.nodeProps}">
              <Option
                v-for="(item,index) in item.nodeProps.dataSource"
                :value="item.value"
                :key="index"
              >{{item.label}}</Option>
            </Select>
          </Form-item>
        </template>
        <template v-else-if="item.type==='DatePicker'">
          <Form-item :label="item.label" :prop="item.prop">
            <DatePicker v-model="formValidate[item.prop]" v-bind="{...item.nodeProps}"></DatePicker>
          </Form-item>
        </template>
        <template v-else-if="item.type==='TimePicker'">
          <Form-item :label="item.label" :prop="item.prop">
            <TimePicker v-model="formValidate[item.prop]" v-bind="{...item.nodeProps}"></TimePicker>
          </Form-item>
        </template>
        <template v-else-if="item.type==='Radio'">
          <Form-item :label="item.label" :prop="item.prop">
            <RadioGroup v-model="formValidate[item.prop]" v-bind="{...item.nodeProps}">
              <Radio
                v-for="(item,index) in item.nodeProps.dataSource"
                :label="item.value"
                :key="index"
              >{{item.label}}</Radio>
            </RadioGroup>
          </Form-item>
        </template>
        <template v-else-if="item.type==='Checkbox'">
          <Form-item :label="item.label" :prop="item.prop">
            <CheckboxGroup v-model="formValidate[item.prop]" v-bind="{...item.nodeProps}">
              <Checkbox
                v-for="(item,index) in item.nodeProps.dataSource"
                :label="item.value"
                :key="index"
              >{{item.label}}</Checkbox>
            </CheckboxGroup>
          </Form-item>
        </template>
        <template v-else-if="item.type==='Switch'">
          <Form-item :label="item.label" :prop="item.prop">
            <i-switch v-model="formValidate[item.prop]" v-bind="{...item.nodeProps}">
              <span slot="open">On</span>
              <span slot="close">Off</span>
            </i-switch>
          </Form-item>
        </template>
        <template v-else-if="item.type==='Slider'">
          <Form-item :label="item.label" :prop="item.prop">
            <Slider v-model="formValidate[item.prop]" v-bind="{...item.nodeProps}"></Slider>
          </Form-item>
        </template>
      </Col>
      <Col span="24">
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
