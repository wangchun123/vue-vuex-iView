<template>
  <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
    <Row type="flex">
      <i-col v-for="(item,index) in formSearch" :key="index" v-bind="{...item}">
        <template v-if="item.type==='Input'">
          <Form-item v-bind="{...item}">
            <Input
              v-model="formValidate[item.prop]"
              v-bind="{...item.nodeProps}"
              v-on="{...item.nodeEvents}"
            />
          </Form-item>
        </template>
        <template v-else-if="item.type==='Select'">
          <Form-item v-bind="{...item}">
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
          <Form-item v-bind="{...item}">
            <DatePicker
              v-model="formValidate[item.prop]"
              v-bind="{...item.nodeProps}"
              v-on="{...item.nodeEvents}"
            ></DatePicker>
          </Form-item>
        </template>
        <template v-else-if="item.type==='TimePicker'">
          <Form-item v-bind="{...item}">
            <TimePicker
              v-model="formValidate[item.prop]"
              v-bind="{...item.nodeProps}"
              v-on="{...item.nodeEvents}"
            ></TimePicker>
          </Form-item>
        </template>
        <template v-else-if="item.type==='Radio'">
          <Form-item v-bind="{...item}">
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
          <Form-item v-bind="{...item}">
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
          <Form-item v-bind="{...item}">
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
          <Form-item v-bind="{...item}">
            <Slider
              v-model="formValidate[item.prop]"
              v-bind="{...item.nodeProps}"
              v-on="{...item.nodeEvents}"
            ></Slider>
          </Form-item>
        </template>
      </i-col>
      <i-col span="24" :style="{textAlign:footerAlign}">
        <Form-item :label-width="0">
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
      </i-col>
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
