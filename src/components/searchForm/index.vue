<template>
  <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="60">
    <Row type="flex">
      <Col v-for="(item,index) in formSearch" :key="index" v-bind="{...item}">
        <template v-if="item.type==='Input'">
          <Form-item :label="item.label" :prop="item.prop">
            <Input
              v-model="formValidate[item.prop]"
              v-bind="{...item.nodeProps}"
              v-on="{...item.nodeEvents}"
            />
          </Form-item>
        </template>
        <template v-else-if="item.type==='Select'">
          <Form-item :label="item.label" :prop="item.prop">
            <Select
              v-model="formValidate[item.prop]"
              v-bind="{...item.nodeProps}"
              v-on="{...item.nodeEvents}"
            >
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
            <DatePicker
              v-model="formValidate[item.prop]"
              v-bind="{...item.nodeProps}"
              v-on="{...item.nodeEvents}"
            ></DatePicker>
          </Form-item>
        </template>
        <template v-else-if="item.type==='TimePicker'">
          <Form-item :label="item.label" :prop="item.prop">
            <TimePicker
              v-model="formValidate[item.prop]"
              v-bind="{...item.nodeProps}"
              v-on="{...item.nodeEvents}"
            ></TimePicker>
          </Form-item>
        </template>
        <template v-else-if="item.type==='Radio'">
          <Form-item :label="item.label" :prop="item.prop">
            <RadioGroup
              v-model="formValidate[item.prop]"
              v-bind="{...item.nodeProps}"
              v-on="{...item.nodeEvents}"
            >
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
            <CheckboxGroup
              v-model="formValidate[item.prop]"
              v-bind="{...item.nodeProps}"
              v-on="{...item.nodeEvents}"
            >
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
            <i-switch
              v-model="formValidate[item.prop]"
              v-bind="{...item.nodeProps}"
              v-on="{...item.nodeEvents}"
            >
              <span slot="open">On</span>
              <span slot="close">Off</span>
            </i-switch>
          </Form-item>
        </template>
        <template v-else-if="item.type==='Slider'">
          <Form-item :label="item.label" :prop="item.prop">
            <Slider
              v-model="formValidate[item.prop]"
              v-bind="{...item.nodeProps}"
              v-on="{...item.nodeEvents}"
            ></Slider>
          </Form-item>
        </template>
      </Col>
      <Col span="24" :style="{textAlign:footerAlign}">
        <Form-item>
          <Button type="primary" @click="handleSubmit('formValidate')">
            <span v-if="this.$slots.left">
              <slot name="left"></slot>
            </span>
            <span v-else>Submit</span>
          </Button>
          <Button @click="handleReset('formValidate')" style="margin-left: 8px">
            <span v-if="this.$slots.right">
              <slot name="right"></slot>
            </span>
            <span v-else>Reset</span>
          </Button>
        </Form-item>
      </Col>
    </Row>
  </Form>
</template>
<script>
export default {
  props: {
    formValidates: {
      //form 控件初始值
      type: Object,
      default: () => {},
    },
    ruleValidates: {
      // from 控件的校验
      type: Object,
      default: () => {},
    },
    formSearch: {
      //form 需要渲染的控件
      type: Array,
      default: () => [],
    },
    footerAlign: {
      //底部按钮对齐方式
      type: String,
      default: () => 'left',
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
