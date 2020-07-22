// 验证码校验
function validateAuthcode(rule, value, callback, source, options) {
  if (value === '') {
    callback(new Error('请输入验证码'));
  } else if (!/^\d{4}$/.test(value)) {
    callback(new Error('验证码格式为4位数字'));
  } else {
    callback();
  }
}

// 密码校验
function validatePass(rule, value, callback, source, options) {
  // 字母、数字、_、组成，6-20位
  if (value === '') {
    callback(new Error('请输入密码'));
  } else if (!/^[0-9a-zA-Z_]{6,20}$/.test(value)) {
    callback(new Error('密码格式为6-20位字符，包含字母、数字、下划线'));
  } else {
    callback();
  }
}

// 再次输入密码校验
function validatePassCheck(rule, value, callback, source, options) {
  if (value === '') {
    callback(new Error('请再次输入密码'));
  } else if (!/^[0-9a-zA-Z_]{6,20}$/.test(value)) {
    callback(new Error('密码格式为6-20位字符，包含字母、数字、下划线'));
  } else if (value !== source.newPassword) {
    callback(new Error('两次输入密码不一致!'));
  } else {
    callback();
  }
}

// 昵称校验
function validateUserName(rule, value, callback) {
  //不允许为空，正则校验[1-50位字符，包括字母、数字、下划线、连接符]
  if (!value) {
    callback(new Error('请输入用户名'));
  } else if (!/^[0-9a-zA-Z\u4e00-\u9fa5]{2,30}$/.test(value)) {
    callback(new Error('用户名格式为2-30位字符，包括中英文、数字'));
  } else {
    callback();
  }
}
// 物联网号校验
function validateDeviceId() {
  //不允许为空，
  if (!value) {
    callback(new Error('请输入物联网接入号'));
  } else if (!/^[0-9\u4e00-\u9fa5]{13}$/.test(value)) {
    callback(new Error('用户名格式为13位数字'));
  } else {
    callback();
  }
}

// 密码校验
function validatePassWord(rule, value, callback) {
  //不允许为空正则校验[6-20位字符，包含字母、数字、下划线]
  if (value === '') {
    callback(new Error('请输入密码'));
  } else if (!/^[0-9a-zA-Z_]{6,20}$/.test(value)) {
    callback(new Error('密码格式为6-20位字符，包含字母、数字、下划线'));
  } else {
    callback();
  }
}

// 手机号校验
function validateCellphone(rule, value = '', callback) {
  // [12位数字以内。若是1开头的，则只可输入11位，否则必须填够12位数字]
  if (value === '') {
    callback(new Error('请输入电话号码'));
  } else if (
    value !== '' &&
    !/^([02-9]{1}[0-9]{11})?$/.test(value) &&
    !/^(1[0-9]{10})?$/.test(value)
  ) {
    callback(new Error('请输入正确的电话号码'));
  } else {
    callback();
  }
}

//匹配规则中的手机号校验
function validateMatchCellphone(rule, value, callback, source) {
  // 手机号或号段，不允许为空，当matchRule==1时，正则校验[1开头的11位符合手机号码规则的数字]当matchRule==2时，正则校验[1-10位数字]
  if (value === '') {
    if (source.matchRule === 1) {
      callback(new Error('请输入手机号'));
    } else {
      callback(new Error('请输入号段'));
    }
  }
  if (
    source.matchRule &&
    source.matchRule === 1 &&
    !/^(1[0-9]{10})?$/.test(value)
  ) {
    callback(new Error('手机号格式为11位以1开头符合手机号码规则的数字'));
  } else if (
    source.matchRule &&
    source.matchRule === 2 &&
    !/^(1[0-9]{0,9})?$/.test(value)
  ) {
    callback(new Error('号段格式为10位以1开头符合号段规则的数字'));
  } else {
    callback();
  }
}
//白名单匹配规则中的手机号校验
function whiteUservalidateMatchCellphone(rule, value, callback, source) {
  // 手机号或号段，不允许为空，当matchRule==1时，正则校验[1开头的11位符合手机号码规则的数字]当matchRule==2时，正则校验[1-10位数字]
  if (
    source.matchRule &&
    source.matchRule === 1 &&
    !/^(1[0-9]{10})?$/.test(value)
  ) {
    callback(new Error('手机号格式为11位以1开头符合手机号码规则的数字'));
  } else if (
    source.matchRule &&
    source.matchRule === 2 &&
    !/^(1[0-9]{0,9})?$/.test(value)
  ) {
    callback(new Error('号段格式为10位以1开头符合号段规则的数字'));
  } else {
    callback();
  }
}
// 护照校验
function validatePassport(rule, value = '', callback, source) {
  //当userInfoType==2且不为特通时，不允许为空，其它情况，允许为空
  //正则校验[1-20位字母、数字]
  if (_notTT(source.userName) && source.userInfoType === 2 && value === '') {
    callback(new Error('请输入护照'));
  } else if (value !== '' && !/^[0-9a-zA-Z]{1,20}$/.test(value)) {
    callback(new Error('护照格式为1-20位字母、数字'));
  } else {
    callback();
  }
}

// 身份证校验
function validateIdentityCard(rule, value = '', callback, source) {
  // 当userInfoType==3且不为特通时，不允许为空，其它情况，允许为空
  // 正则校验[18位数字或17位数字最后一位字母X]
  if (_notTT(source.userName) && source.userInfoType === 3 && value === '') {
    callback(new Error('请输入身份证'));
  } else if (value !== '' && !/^[0-9]{17}([0-9]|X){1}$/.test(value)) {
    callback(new Error('身份证格式为18位数字或17位数字最后一位字母X'));
  } else {
    callback();
  }
}

// 姓名校验
function validateRealName(rule, value = '', callback) {
  // 允许为空，正则校验[1-20位字符，包括字母、汉字]
  if (value !== '' && !/^[a-zA-Z\u4e00-\u9fa5]{1,20}$/.test(value)) {
    callback(new Error('姓名格式为1-20位字符，包括字母、汉字'));
  } else {
    callback();
  }
}
// 省分平台负责人校验
function validateAdministrant(rule, value = '', callback) {
  // 允许为空，正则校验[1-10位字符，包括字母、汉字]
  if (value !== '' && !/^[a-zA-Z\u4e00-\u9fa5]{1,10}$/.test(value)) {
    callback(new Error('姓名格式为1-10位字符，包括字母、汉字'));
  } else {
    callback();
  }
}
// 省分平台联系方式校验
function validateAdministrantPhone(rule, value = '', callback) {
  // 允许为空，正则校验[1-20位数字]
  if (value !== '' && !/^[0-9]{1,20}$/.test(value)) {
    callback(new Error('联系方式为1-20位数字'));
  } else {
    callback();
  }
}
// 省分平台域名校验
function validateNetURL(rule, value = '', callback) {
  //验证域名,不允许为空 比如说 www.baidu.com
  if (value == '') {
    callback(new Error('请输入服务器域名'));
  } else if (
    value !== '' &&
    !/^([a-zA-Z0-9-]+\.){1,}(com|net|edu|miz|biz|cn|cc)$/.test(value)
  ) {
    callback(new Error('您输入的URL地址有误！正确格式如 mail.brookes.com'));
  } else {
    // callback();
    return;
  }
}

//部门校验
function validateDeptName(rule, value = '', callback) {
  // 允许为空，正则校验[1-20位汉字、字母、数字]
  if (value !== '' && !/^[0-9a-zA-Z\u4e00-\u9fa5]{1,20}$/.test(value)) {
    callback(new Error('部门格式为1-20位汉字、字母、数字'));
  } else {
    callback();
  }
}

//设备类型校验
function validateModelType(rule, value = '', callback) {
  //不允许为空
  if (value === '') {
    callback(new Error('请选择设备类型'));
  } else {
    callback();
  }
}
//商户选择校验
function validateMerchantInfo(rule, value, callback) {
  //不允许为空
  if (value === '') {
    callback(new Error('请输入并选择商户名称'));
  } else {
    callback();
  }
}

//项目选择校验
function validateProject(rule, value, callback) {
  //不允许为空
  if (value === '') {
    callback(new Error('请选择项目'));
  } else {
    callback();
  }
}

//项目选择校验
function validateProjectName(rule, value, callback) {
  if (value === '') {
    callback(new Error('请输入项目名称'));
  } else if (!/^[0-9a-zA-Z\u4e00-\u9fa5\_]{1,50}$/.test(value)) {
    callback(
      new Error('1-50位字符，包括汉字、字母、数字、下划线，不含特殊字符'),
    );
  } else {
    callback();
  }
}

//管理商户
function validateManagedMerchant(rule, value, callback) {
  //不允许为空
  if (!value || value.length == 0) {
    callback(new Error('请选择管理商户'));
  } else {
    callback();
  }
}

//检验包含的项目
function validateIncludeProjectIdList(rule, value, callback, source) {
  //如果未选择省，则提示选择省
  // if(source.provinceId){
  // }else{
  // 	callback(new Error("请先选择地区"));
  // }

  let includeProjectIdList = source.includeProjectIdList;
  let excludeProjectIdList = source.excludeProjectIdList;
  if (includeProjectIdList && excludeProjectIdList) {
    for (let item of includeProjectIdList) {
      if (excludeProjectIdList.indexOf(item) >= 0) {
        callback(new Error('该项目已被选为排除'));
      }
    }
  }
  callback();
}

//检查排除的项目
function validateExcludeProjectIdList(rule, value, callback, source) {
  //如果未选择省，则提示选择省
  // if(source.provinceId){
  // }else{
  // 	// source.excludeProjectIdList = [];//导致死循环
  // 	callback(new Error("请先选择地区"));
  // }

  let includeProjectIdList = source.includeProjectIdList;
  let excludeProjectIdList = source.excludeProjectIdList;
  if (excludeProjectIdList && includeProjectIdList) {
    for (let item of excludeProjectIdList) {
      if (includeProjectIdList.indexOf(item) >= 0) {
        callback(new Error('该项目已被选为包含'));
      }
    }
  }
  callback();
}

/*
 //帐号校验
 function validateAccount(rule, value = '', callback) {
 //不允许为空
 if (value === '') {
 callback(new Error('请输入商户账号'));
 } else if (!/^[0-9a-zA-Z\_\-]{0,50}$/.test(value)) {
 callback(new Error('英文、数字、连接符（-）、下划线（_）组合，50字符内'));
 } else {
 callback();
 }
 }
 */

//设备名称
function validateEntityName(rule, value = '', callback) {
  //不允许为空
  if (value === '') {
    //console.log('value:' + value);
    callback(new Error('请输入设备名称'));
  } else if (!/^[\w\-]{1,20}$/.test(value)) {
    callback(new Error('设备名称格式为1-20位字符'));
  } else {
    callback();
  }
}

//商户名称校验
function validateMerchantName(rule, value = '', callback) {
  if (value === '') {
    callback(new Error('请输入商户名称'));
  } else if (!/^[0-9a-zA-Z\u4e00-\u9fa5]{1,50}$/.test(value)) {
    callback(new Error('中文、英文、数字的组合，50字符以内'));
  } else {
    callback();
  }
}

// 热点管理 - 热点名称、帐号、所属AC、接入NAS归属域、网段、Bras编号、Bras机架号、Bras槽位号、代维公司、业主
// {选填}100位以内字符，不包括#，%，*，@，&特殊字符
function validateChar100(rule, value = '', callback) {
  if (value !== '' && /[#%\*@&]/.test(value)) {
    callback(new Error('请输入100位以内字符，不包括#，%，*，@，&特殊字符'));
  } else {
    callback();
  }
}
// 热点管理 - 接入电路编号、热点地点、地标、集成商、备注
// {必填}100位以内字符，不包括#，%，*，@，&特殊字符
function validateChar100Must(rule, value = '', callback) {
  if (value == '' || /[#%\*@&]/.test(value)) {
    callback(new Error('请输入100位以内字符，不包括#，%，*，@，&特殊字符'));
  } else {
    callback();
  }
}
// 100位以内字符，不包括#，%，*，@，&特殊字符，不允许空格
function validateChar100NoBlank(rule, value = '', callback) {
  if (value !== '' && /[\s#%\*@&]/.test(value)) {
    callback(
      new Error('请输入100位以内字符，不包括#，%，*，@，&特殊字符和空格'),
    );
  } else {
    callback();
  }
}

//热点编号
function validateHotareaCode(rule, value = '', callback) {
  if (!/^[\w]{0,30}$/.test(value)) {
    callback(new Error('热点编号格式为0-30位字符可由数字字母下划线组成'));
  }
  callback();
}

//升级包名称
function validateUpgradePatcheName(rule, value = '', callback) {
  if (!/^[\w]{0,30}$/.test(value)) {
    callback(new Error('升级包名称格式为0-30位字符可由数字字母下划线组成'));
  }
  callback();
}

// 角色必填
function validateRole(rule, value, callback, source) {
  //不允许为空
  if (source.roleIds === '') {
    callback(new Error('请选择角色'));
  } else {
    callback();
  }
}

// 角色必填
function validateRoleId(rule, value, callback, source) {
  //不允许为空
  if (source.roleId === '') {
    callback(new Error('请选择角色'));
  } else {
    callback();
  }
}

// 行业必填
function validateIndusrty(rule, value, callback, source) {
  //不允许为空
  if (source.industryCode === '') {
    callback(new Error('请选择行业'));
  } else {
    callback();
  }
}

// 省份必填
function validateLocation(rule, value, callback, source) {
  //不允许为空
  if (source.provinceId === '') {
    callback(new Error('请选择省份'));
  } else {
    callback();
  }
}
// 经度校验
function validateLongitude(rule, value, callback, source) {
  if (!value) {
    callback();
  } else if (
    !/^[\-\+]?(0?\d{1,2}\.\d{1,6}|1[0-7]?\d{1}\.\d{1,6}|180\.0{1,6}|180|0?\d{1,2}|1[0-7]?\d{1})$/.test(
      value,
    )
  ) {
    callback(new Error('经度格式不正确'));
  }
  callback();
}
// 纬度校验
function validateLatitude(rule, value, callback, source) {
  if (!value) {
    callback();
  } else if (
    !/^[\-\+]?([0-8]?\d{1}\.\d{1,6}|90\.0{1,6}|90|[0-8]?\d{1})$/.test(value)
  ) {
    callback(new Error('纬度格式不正确'));
  }
  callback();
}

//省市区必选
function validateAllLocation(rule, value, callback, source) {
  if (source.provinceId == '') {
    callback(new Error('省为必选项'));
  } else if (source.cityId == '') {
    callback(new Error('市为必选项'));
  } else if (source.areaId == '') {
    callback(new Error('区为必选项'));
  } else {
    callback();
  }
}

// 因为后端变量名不同，不得不新增这个冗余的函数
// 省市区必选
function validate3Location(rule, value, callback, source) {
  if (isInvalid(source.province)) {
    callback(new Error('省为必选项'));
  } else if (isInvalid(source.city)) {
    callback(new Error('市为必选项'));
  } else if (isInvalid(source.county)) {
    callback(new Error('区为必选项'));
  } else {
    callback();
  }
}

//厂商型号必选
function validateCorporationModel(rule, value, callback, source) {
  //不允许为空
  if (source.corporation === '') {
    callback(new Error('厂商为必选项'));
  } else if (source.model === '') {
    callback(new Error('型号为必选项'));
  } else {
    callback();
  }
}

//地址校验
function validateAddress(rule, value = '', callback) {
  if (value !== '' && !/^[0-9a-zA-Z\_\u4e00-\u9fa5]{1,50}$/.test(value)) {
    callback(new Error('地址格式为1-50位汉字、字母、下划线、数字'));
  } else {
    callback();
  }
}

//地址必填
function validateAllAddress(rule, value = '', callback) {
  if (value === '') {
    callback(new Error('请输入详细地址'));
  } else if (
    value !== '' &&
    !/^[0-9a-zA-Z\u4e00-\u9fa5\-\_]{1,100}$/.test(value)
  ) {
    callback(new Error('中文、英文、数字，-，_组合，100位以内。'));
  } else {
    callback();
  }
}

//备注校验
function validateRemark(rule, value = '', callback) {
  if (value !== '' && !/^[0-9a-zA-Z\_\u4e00-\u9fa5]{1,100}$/.test(value)) {
    callback(new Error('备注格式为1-100位汉字、字母、下划线、数字'));
  } else {
    callback();
  }
}

//联系人{可选}
function validateContact(rule, value = '', callback) {
  if (value !== '' && !/^[0-9a-zA-Z\u4e00-\u9fa5]{0,50}$/.test(value)) {
    callback(new Error('中文、英文、数字的组合，50字符以内。'));
  } else {
    callback();
  }
}
// 联系人{必填}
function validateAppContact(rule, value = '', callback) {
  if (value == '') callback(new Error('请输入联系人。'));
  else validateContact(rule, value, callback);
}
// 联系方式 {可选}
function validateContactWay(rule, value = '', callback) {
  if (value !== '' && !/^[0-9,-]{0,50}$/.test(value)) {
    callback(new Error('数字、连接符（-）、逗号（,），50位以内字符。'));
  } else {
    callback();
  }
}
// APP新增里的联系方式，允许多个电话同时写
function validateAPPContactWay(rule, value = '', callback) {
  if (value == '') {
    callback(new Error('请输入联系方式。'));
  } else validateContactWay(rule, value, callback);
}

// 邮箱 {必填}
function validateEmail(rule, value = '', callback) {
  if (!value) {
    callback(new Error('请输入邮箱'));
  } else if (
    !/^[a-zA-Z0-9_\.\-]{1,}@[a-zA-Z0-9_\.\-]{1,}[\.]{1}[a-zA-Z]{1,4}$/.test(
      value,
    )
  ) {
    callback(new Error('邮箱格式不正确'));
  } else {
    callback();
  }
}
// 邮箱 {可选}
function validateEmailNull(rule, value = '', callback) {
  if (value !== '' && /[#%\*&]/.test(value)) {
    callback(new Error('30位以内字符，不包括#，%，*，&特殊字符'));
  } else {
    callback();
  }
}

// 厂商名称、型号名称 {必填}
function validateCorpName(rule, value = '', callback) {
  validateChar100Must(rule, value, callback);
}
// 厂商联系方式
function validateContactWaySysconfig(rule, value = '', callback) {
  validateChar100(rule, value, callback);
}
// 公司名称
function validateCompany(rule, value = '', callback) {
  if (value == '') callback(new Error('请输入公司名称。'));
  else if (!/^[0-9a-zA-Z\u4e00-\u9fa5]{0,50}$/.test(value)) {
    callback(new Error('中文、英文、数字的组合，50字符以内。'));
  } else {
    callback();
  }
}
//短信内容
function validateSmsContent(rule, value = '', callback) {
  if (!/^[^%*&#?？]{1,50}$/.test(value) || value.indexOf('${code}') < 0) {
    callback(new Error('短信内容格式不正确'));
  } else if (value.match(/\$\{code\}/g).length > 1) {
    callback(new Error('短信内容只能包含1个${code}标记'));
  } else {
    callback();
  }
}
//文件选择
function validateFileName(rule, value = '', callback) {
  if (value.length === 0) {
    callback(new Error('请选择文件'));
  } else {
    callback();
  }
}

//输入数字,不允许为空
function validateNumber(rule, value, callback, source) {
  if (!value || !/^[0-9]+$/.test(value)) {
    callback(new Error('必填，数字'));
  } else {
    callback();
  }
}

//输入数字,允许为空
function validateNumberNull(rule, value, callback, source) {
  if (!value) {
    callback();
  }

  if (!/^[0-9\.\+\-]*$/.test(value)) {
    callback(new Error('请输入数字'));
  } else {
    callback();
  }
}

//必填项
function validateNotNull(rule, value, callback, source) {
  if (value == undefined || value == null || value == '') {
    callback(new Error('必填'));
    return false;
  } else {
    callback();
    return true;
  }
}

//策略名称
function validateStrategyName(rule, value, callback) {
  //不允许为空，正则校验[1-50位字符，包括字母、数字、下划线、连接符]
  if (value === '') {
    callback(new Error('请输入策略名称'));
  } else if (!/^[0-9a-zA-Z\u4e00-\u9fa5]{1,20}$/.test(value)) {
    callback(new Error('策略名称格式为1-20位字符，包括中文、字母、数字'));
  } else {
    callback();
  }
}
//MAC认证名称
function validateMacName(rule, value, callback) {
  //不允许为空，正则校验[1-50位字符，包括字母、数字、下划线、连接符]
  if (value === '') {
    callback(new Error('请输入区域名称'));
  } else if (!/^[0-9a-zA-Z\u4e00-\u9fa5]{1,15}$/.test(value)) {
    callback(new Error('区域名称格式为1-15位字符，包括中文、字母、数字'));
  } else {
    callback();
  }
}

//MAC认证有效时间
function validateMacAuthHour(rule, value, callback) {
  //不允许为空，填写数字，填写范围在1-180，包含1和180
  if (value === '') {
    callback(new Error('请输入有效时间'));
  } else if (!/^[1-9]\d*$/.test(value)) {
    callback(new Error('有效时间格式为数字，填写范围在1-180，包含1和180'));
  } else if (value > 180 || value < 1) {
    callback(new Error('有效时间格式为数字，填写范围在1-180，包含1和180'));
  } else {
    callback();
  }
}

//检验MAC正则
function checkMac(value) {
  return /^[0-9a-fA-F]{12}$/.test(value);
}

function validateMac(rule, value, callback) {
  if (isNotBlank(value)) {
    if (!checkMac(value)) {
      callback(new Error('设备MAC格式不正确'));
      return false;
    }
  }
  callback();
  return true;
}

//检验ipv
function validateIpAddr(rule, value, callback) {
  if (isNotBlank(value)) {
    if (
      !/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/.test(
        value,
      )
    ) {
      callback(new Error('ip地址格式不正确'));
    } else {
      callback();
    }
  } else {
    callback(new Error('必填'));
  }
}
//当选择省分平台时，不允许为空，选择小平台时不校验
function validatePortalDomain(rule, value, callback) {
  var flag = value.flag;
  var domain = value.domain;
  var port = value.port;
  console.log('domain==', domain, port, flag);
  if (flag == 0) {
    validateNetURL(rule, domain, callback);
    validatePort(rule, port, callback);
  } else if (flag == 1) {
    callback();
  }
}
function validatePort(rule, value, callback) {
  if (!value) {
    callback(new Error('端口号不能为空'));
  } else {
    callback();
  }
}
//检验ip地址段,可以为空,但如果填了,则必须正确,ipStart >= ipStop
function validateIpSection(rule, value, callback) {
  var ipStart = value.begin;
  var ipStop = value.end;
  //debugger;
  if (!ipStart && !ipStop) {
    callback();
    return;
  }
  if (!ipStart || !ipStop) {
    callback('起始IP与结束IP需要同时填写,或者全空');
    return;
  }

  if (
    !/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/.test(
      ipStart,
    )
  ) {
    callback(new Error('起始IP 格式不正确'));
    return;
  } else if (
    !/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/.test(
      ipStop,
    )
  ) {
    callback(new Error('结束IP 格式不正确'));
    return;
  }
  //校验ip的起不大于止，如：'101.202.5.1','101.202.5.30'
  let isIpSection = function(ip1, ip2) {
    try {
      var a1 = ip1.split('.');
      var a2 = ip2.split('.');
      for (let i = 0; i < 4; i++) {
        if (parseInt(a1[i]) > parseInt(a2[i])) return false;
        else if (parseInt(a1[i]) < parseInt(a2[i])) return true;
        else continue;
      }
      return true;
    } catch (e) {
      console.log('error');
      return false;
    }
  };

  if (!isIpSection(ipStart, ipStop)) {
    callback(`起IP 不可大于 止IP`);
    return;
  }
  callback();
}

//检验ipv,非必填
function validateIpAddrNull(rule, value, callback) {
  if (isNotBlank(value)) {
    if (
      !/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/.test(
        value,
      )
    ) {
      callback(new Error('ip地址格式不正确'));
    } else {
      callback();
    }
  } else {
    callback();
  }
}

//30个字符
function validateChar30(rule, value, callback) {
  //console.log('validateChar30:' + value);
  if (!value || !/^[\w\-]{1,30}$/.test(value)) {
    callback(new Error('必填，最长允许30个字符'));
  }
  callback();
}

// 组件名称 校验
function validateComponentName(rule, value, callback) {
  //不允许为空，1-20位字母、数字、下划线组成，不含特殊字符
  if (value === '') {
    callback(new Error('请输入组件名称'));
  } else if (!/^[0-9a-zA-Z\u4e00-\u9fa5_]{1,20}$/.test(value)) {
    callback(
      new Error(
        '组件名称格式为1-20位字母、数字、汉字、下划线组成，不含特殊字符',
      ),
    );
  } else {
    callback();
  }
}

// 组件版本 校验
function validateComponentVersion(rule, value, callback) {
  //不允许为空，1-20位字母、数字、下划线组成，不含特殊字符
  if (value === '') {
    callback(new Error('请输入组件版本'));
  } else if (!/^[0-9a-zA-Z_.]{1,20}$/.test(value)) {
    callback(
      new Error('组件版本格式为1-20位字母、数字、下划线组成，不含特殊字符'),
    );
  } else {
    callback();
  }
}

// 1-180之间的数字
function validateDays(rule, value, callback) {
  if (!value || !/^(([1-9]|[1-9]\d|1[0-7]\d)?|180)$/.test(value)) {
    callback('请输入1-180天内正整数');
  } else {
    callback();
  }
}

// 免费体验包，0-360之间的数字
function validatePkgHours(value, callback) {
  if (
    value == '' ||
    !/^(([0-9]|[1-9]\d|[1-2]\d\d|3[0-5]\d)?|360)$/.test(value)
  ) {
    callback('请输入0-360小时内自然数');
  } else {
    callback();
  }
}

// 0.5-24内的0.5整数倍数字
function validateOfflineTime(value, callback) {
  if (!value || !/^(([0-9]|1\d|2[0-3])+(\.[05])?|24)?$/.test(value)) {
    callback('请输入0.5的正整倍数且不超过24小时');
  } else {
    callback();
  }
}

// 结算用宽带账号
function validateBroadAccount(rule, value, callback) {
  // 允许为空正则校验[1开头的11位符合手机号码规则的数字]
  if (!value || !/^(1[0-9]{10})?$/.test(value)) {
    callback('请输入正确的11位手机号');
  } else {
    callback();
  }
}

// 无感知开关时长
function validatePolicySwitch(value, callback) {
  // 正整数，0到365
  if (
    value == '' ||
    !/^([0-9]|[1-9]\d|[1-2]\d\d|3[0-5]\d|36[0-5])?$/.test(value)
  ) {
    callback('请输入0-365的整数');
  } else {
    callback();
  }
}

//设备类型 选择校验
function validateEntityType(rule, value, callback) {
  //不允许为空
  if (value === '') {
    callback(new Error('请选择设备类型'));
  } else {
    callback();
  }
}

/**
 * 营业执照正则校验
 * licence 营业执照号码
 */
function validateBusinessLicence(rule, value, callback) {
  if (!value || !/^\d{15}/.test(value)) {
    callback('请输入营业执照,15位数字');
  } else {
    callback();
  }
}

//省市区必选
function validateDeviceRegionLocation(rule, value, callback, source) {
  //不允许为空
  console.log(source);
  if (source.province === '' || source.city === '' || source.county === '') {
    callback(new Error('省市区为必选项'));
  } else {
    callback();
  }
}

//厂商型号必选
function validateDeviceRegionCorporationModel(rule, value, callback, source) {
  //不允许为空
  if (source.corporationId === '') {
    callback(new Error('厂商为必选项'));
  } else if (source.modelId === '') {
    callback(new Error('型号为必选项'));
  } else {
    callback();
  }
}
//版本号校验
function validateDeviceRegionVersion(rule, value, callback) {
  //不允许为空
  if (value === '') {
    callback(new Error('版本号不能为空'));
  } else if (value.length > 20) {
    callback(new Error('版本号20个字符以内'));
  } else {
    callback();
  }
}
//升级类型校验
function validateDeviceRegionType(rule, value, callback) {
  //不允许为空
  if (value === '') {
    callback(new Error('升级类型不能为空'));
  } else {
    callback();
  }
}
//HD版本号校验
function validateDeviceRegionHDVersion(rule, value, callback) {
  //不允许为空
  if (value === '') {
    callback(new Error('HD版本号不能为空'));
  } else if (value.length > 20) {
    callback(new Error('HD版本号20个字符以内'));
  } else {
    callback();
  }
}

//中文用户名校验
function validateChinaChar(nStart, nEnd) {
  var key = `^[\u4e00-\u9fa5]{${nStart},${nEnd}}$`;
  var reg = new RegExp(key);
  return (rule, value = '', callback) => {
    if (value === '') {
      callback(new Error('请输入用户名'));
    } else if (!reg.test(value)) {
      callback(new Error(`中文字，${nStart}-${nEnd}字符`));
    } else {
      callback();
    }
  };
}
function validateAccount(rule, value = '', callback, source) {
  if (value === '') {
    callback(new Error('请输入4-20位字母、数字组合'));
  } else if (value !== '' && !/^[0-9a-zA-Z]{4,20}$/.test(value)) {
    callback(new Error('格式为4-20位字母、数字'));
  } else {
    callback();
  }
}
// 企业名称
function validateEnterpriseName(rule, value = '', callback) {
  if (value === '') {
    callback(new Error('请输入企业名称'));
  } else if (!/^[a-zA-Z\u4e00-\u9fa5]{1,30}$/.test(value)) {
    callback(new Error('中文、字母的组合，30字符以内'));
  } else {
    callback();
  }
}
// 企业法人
function validateLegalPerson(rule, value = '', callback) {
  if (value === '') {
    callback(new Error('请输入企业法人'));
  } else if (!/^[a-zA-Z\u4e00-\u9fa5]{1,10}$/.test(value)) {
    callback(new Error('中文、字母的组合，10字符以内'));
  } else {
    callback();
  }
}
// 营业执照编号
function validateBusinessLicenseNo(rule, value = '', callback) {
  if (value === '') {
    callback(new Error('请输入营业执照编号'));
  } else if (!/^[a-zA-Z\u4e00-\u9fa5]{1,30}$/.test(value)) {
    callback(new Error('中文、字母的组合，30字符以内'));
  } else {
    callback();
  }
}
//统一社会信用代码
function validateCreditNo(rule, value = '', callback) {
  if (value === '') {
    callback(new Error('请输入统一社会信用代码'));
  } else if (!/^(\S{9}|\S{18})$/.test(value)) {
    callback(new Error('请输入9或者18位字符'));
  } else {
    callback();
  }
}
//数据流名称校验
function validateDataStreamName(rule, value = '', callback) {
  if (value == '') callback(new Error('请输入数据流名称。'));
  else if (!/^[0-9a-zA-Z\u4e00-\u9fa5]{0,20}$/.test(value)) {
    callback(new Error('中文、英文、数字的组合，20字符以内。'));
  } else {
    callback();
  }
}
//数据流单位名称校验  中英文，10字符以内
function validateDataStreamUnitName(rule, value = '', callback) {
  if (value == '') callback(new Error('请输入数据流单位名称。'));
  else if (!/^[a-zA-Z\u4e00-\u9fa5]{0,20}$/.test(value)) {
    callback(new Error('中文、英文的组合，10字符以内。'));
  } else {
    callback();
  }
}
//产品名称校验  中英文，50字符以内
function validateProductName(rule, value = '', callback) {
  if (value == '') callback(new Error('请输入产品名称。'));
  else if (!/^[a-zA-Z\u4e00-\u9fa5]{0,50}$/.test(value)) {
    callback(new Error('中英文的组合，50字符以内。'));
  } else {
    callback();
  }
}
function validateSensorInfo(rule, value, callback, source) {
  if (value.corporation === '') {
    callback(new Error('厂家编号不能为空'));
  } else if (value.model === '') {
    callback(new Error('传感器型号不能为空'));
  } else if (value.sensorTypeCode === '') {
    callback(new Error('传感器类型'));
  } else {
    callback();
  }
}
// 设备名称
function validateDeviceName(rule, value = '', callback) {
  if (value === '') {
    callback(new Error('请输入设备名称'));
  } else if (
    value !== '' &&
    !/^[0-9a-zA-Z\u4e00-\u9fa5\-\_]{1,100}$/.test(value)
  ) {
    callback(new Error('中文、英文、数字，-，_组合，100位以内。'));
  } else {
    callback();
  }
}
// 设备名称
function validateDataStreamCode(rule, value = '', callback) {
  if (value === '') {
    callback(new Error('请输入数据流code'));
  } else if (value !== '' && !/^[0-9a-zA-Z\-\_]{1,32}$/.test(value)) {
    callback(new Error('英文、数字、-、_组合，32位以内。'));
  } else {
    callback();
  }
}
// 非必填
function validateDeviceBlank(rule, value = '', callback) {
  if (value !== '' && !/^[0-9a-zA-Z\-\_]{1,100}$/.test(value)) {
    callback(new Error('英文、数字，-，_组合，100位以内。'));
  } else {
    callback();
  }
}
// 非必填
function validateDeviceBlankC(rule, value = '', callback) {
  if (value !== '' && !/^[0-9a-zA-Z\u4e00-\u9fa5\-\_]{1,100}$/.test(value)) {
    callback(new Error('中文、英文、数字，-，_组合，100位以内。'));
  } else {
    callback();
  }
}
// 非必填
function validateSerialNumber(rule, value = '', callback) {
  if (value === '') {
    callback(new Error('请输入设备编号'));
  } else if (value !== '' && !/^[0-9a-zA-Z]{1,32}$/.test(value)) {
    callback(new Error('英文、数字组合，32位以内。'));
  } else {
    callback();
  }
}
// mac地址
function validateMacAddress(rule, value = '', callback) {
  if (value === '') {
    callback(new Error('请输入MAC地址'));
  } else if (value !== '' && !/^[0-9a-fA-F\-]{1,16}$/.test(value)) {
    callback(new Error('16位以内，数字0-9，字母a-f，-组成。'));
  } else {
    callback();
  }
}
// 端口非必填
function validateDevicePortNull(rule, value = '', callback) {
  // 正整数，0到65535
  if (value !== '' && (value < 0 || value > 65535)) {
    callback('请输入0-65535的整数');
  } else {
    callback();
  }
}
// Sdk更新URL
function validateDeviceSdkUrl(rule, value = '', callback) {
  if (value !== '' && !/^[0-9a-zA-Z\/]{1,100}$/.test(value)) {
    callback(new Error('字母、数字、/ 组合，100位以内。'));
  } else {
    callback();
  }
}
//中文用户名校验
function validateChinaChar$(nStart, nEnd) {
  var key = `^[\u4e00-\u9fa5]{${nStart},${nEnd}}$`;
  var reg = new RegExp(key);
  return (rule, value = '', callback) => {
    if (value === '') {
      callback(new Error('不允许为空'));
    } else if (!reg.test(value)) {
      callback(new Error(`中文字，${nStart}-${nEnd}字符`));
    } else {
      callback();
    }
  };
}
//触发器名称
function validateTriggerName(rule, value = '', callback) {
  if (value == '') callback(new Error('请输入触发器名称'));
  else if (!/^[0-9a-zA-Z\u4e00-\u9fa5]{0,20}$/.test(value)) {
    callback(new Error('触发器名称为中/英文、数字的组合，20字符内'));
  } else {
    callback();
  }
}
//触发器-验证码本地校验
function validateUnique(requestCB) {
  return (rule, value = '', callback) => {
    if (value === '') {
      callback(new Error('必填'));
    } else {
      requestCB(value, callback);
    }
  };
}
//应用-名称
function validateApplicationName(rule, value = '', callback) {
  if (value === '') {
    callback(new Error('请输入应用名称'));
  } else if (!/^[a-zA-Z0-9\u4e00-\u9fa5]{0,20}$/.test(value)) {
    callback(new Error('支持中、英文，数字，20字符以内'));
  } else {
    callback();
  }
}
//设备序列号
function validateSerial(rule, value = '', callback) {
  if (value == '') {
    callback(new Error('必填'));
  } else if (!/^[0-9a-zA-Z\_\-\u4e00-\u9fa5]{1,100}$/.test(value)) {
    callback(new Error('设备序列号格式为1-100位中文、英文、数字、-,_组合'));
  } else {
    callback();
  }
}
//安装地址
function validateFixAddr(rule, value = '', callback) {
  if (!/^[\S]{0,100}$/.test(value)) {
    callback(new Error(`请输入100位以内字符,不包含空格、回车`));
  } else {
    callback();
  }
}
//开卡数
//输入数字,不允许为空
function validateCardCount(rule, value, callback, source) {
  if (
    !value ||
    !/^[0-9]+$/.test(value) ||
    parseInt(value) < 1 ||
    parseInt(value) > 99999
  ) {
    callback(new Error('请输入正确的开卡数，1-99999的整数'));
  } else {
    callback();
  }
}
export default {
  validateAppContact,
  validateAPPContactWay,
  whiteUservalidateMatchCellphone,
  validateAuthcode,
  validatePass,
  validatePassCheck,
  validateUserName,
  validatePassWord,
  validateCellphone,
  validateMatchCellphone,
  validatePassport,
  validateIdentityCard,
  validateRealName,
  validateDeptName,
  validateMerchantInfo,
  validateProject,
  validateIncludeProjectIdList,
  validateExcludeProjectIdList,
  validateProjectName,
  validateAccount,
  validateMerchantName,
  validateRole,
  validateRoleId,
  validateIndusrty,
  validateLocation,
  validateLongitude,
  validateLatitude,
  validateAllLocation,
  validate3Location,
  validateAddress,
  validateAllAddress,
  validateRemark,
  validateContact,
  validateContactWay,
  validateEmail,
  validateEmailNull,
  validateSmsContent,
  validateFileName,
  validateNumber,
  validateNumberNull,
  validateNotNull,
  validateStrategyName,
  checkMac,
  validateMac,
  validateIpAddr,
  validateIpAddrNull,
  validateCorporationModel,
  validateHotareaCode,
  validateChar30,
  validateModelType,
  validateComponentName,
  validateComponentVersion,
  validateDays,
  validatePkgHours,
  validateOfflineTime,
  validateBroadAccount,
  validatePolicySwitch,
  validateEntityType,
  validateMacName,
  validateIpSection,
  validateBusinessLicence,
  validateAdministrant,
  validateAdministrantPhone,
  validateNetURL,
  validatePortalDomain,
  validatePort,
  validateDeviceRegionLocation,
  validateDeviceRegionCorporationModel,
  validateDeviceRegionVersion,
  validateDeviceRegionType,
  validateUpgradePatcheName,
  validateDeviceRegionHDVersion,
  validateCorpName,
  validateCompany,
  validateContactWaySysconfig,
  validateChar100Must,
  validateChar100,
  validateChar100NoBlank,
  validateMacAuthHour,
  validateChinaChar,
  validateAccount,
  validateBroadAccount,
  validateEnterpriseName,
  validateLegalPerson,
  validateBusinessLicenseNo,
  validateCreditNo,
  validateDataStreamName,
  validateDataStreamUnitName,
  validateDataStreamCode,
  validateSensorInfo,
  validateDeviceName,
  validateDeviceBlank,
  validateDeviceBlankC,
  validateMacAddress,
  validateDevicePortNull,
  validateDeviceSdkUrl,
  validateChinaChar$,
  validateTriggerName,
  validateUnique,
  validateApplicationName,
  validateProductName,
  validateSerial,
  validateFixAddr,
  validateSerialNumber,
  validateDeviceId,
  validateCardCount,
};
