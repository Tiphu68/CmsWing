
'use strict';
// 本文件由Cmswing系统生成，请勿修改！
module.exports = {
  
  // 模型管理
  sys_models_item: {
    createdAt: { type: 'string', description: '创建时间' },
    desc: { type: 'string', description: '模型说明' },
    id: { type: 'string', description: '主键' },
    name: { type: 'string', description: '模型名称' },
    oldName: { type: 'string', description: '改变后的模型名称' },
    paranoid: { type: 'boolean', description: '偏执表' },
    updatedAt: { type: 'string', description: '更新时间' },
    uuid: { type: 'string', description: 'uuid' },
    
  },
  sys_models_add: {
    desc: { type: 'string', description: '模型说明', required: true },
    name: { type: 'string', description: '模型名称', required: true },
    oldName: { type: 'string', description: '改变后的模型名称', required: false },
    paranoid: { type: 'boolean', description: '偏执表', required: false },
    
  },
  sys_models_edit: {
    desc: { type: 'string', description: '模型说明' },
    name: { type: 'string', description: '模型名称' },
    oldName: { type: 'string', description: '改变后的模型名称' },
    paranoid: { type: 'boolean', description: '偏执表' },
    
  },

  // 系统用户
  sys_user_item: {
    admin: { type: 'boolean', description: '系统管理员' },
    createdAt: { type: 'string', description: '创建时间' },
    email: { type: 'string', description: '邮箱' },
    group_uuid: { type: 'string', description: '组织id' },
    id: { type: 'string', description: '主键' },
    mobile: { type: 'string', description: '手机号' },
    password: { type: 'string', description: '密码' },
    state: { type: 'boolean', description: '状态false禁用true正常' },
    updatedAt: { type: 'string', description: '更新时间' },
    username: { type: 'string', description: '用户名' },
    uuid: { type: 'string', description: 'uuid' },
    
  },
  sys_user_add: {
    admin: { type: 'boolean', description: '系统管理员', required: false },
    email: { type: 'string', description: '邮箱', required: false },
    group_uuid: { type: 'string', description: '组织id', required: false },
    mobile: { type: 'string', description: '手机号', required: false },
    password: { type: 'string', description: '密码', required: true },
    state: { type: 'boolean', description: '状态false禁用true正常', required: false },
    username: { type: 'string', description: '用户名', required: true },
    uuid: { type: 'string', description: 'uuid', required: true },
    
  },
  sys_user_edit: {
    admin: { type: 'boolean', description: '系统管理员' },
    email: { type: 'string', description: '邮箱' },
    group_uuid: { type: 'string', description: '组织id' },
    mobile: { type: 'string', description: '手机号' },
    password: { type: 'string', description: '密码' },
    state: { type: 'boolean', description: '状态false禁用true正常' },
    username: { type: 'string', description: '用户名' },
    
  },

  // 模型字段表
  sys_models_fields_item: {
    add: { type: 'boolean', description: '添加' },
    allowNull: { type: 'boolean', description: '必填' },
    autoIncrement: { type: 'boolean', description: '自动递增' },
    booleantype: { type: 'string', description: 'BOOLEAN类型' },
    comment: { type: 'string', description: '字段说明' },
    createdAt: { type: 'string', description: '创建时间' },
    defaultValue: { type: 'string', description: '默认值' },
    defaulttonow: { type: 'boolean', description: '默认当前时间' },
    edit: { type: 'boolean', description: '编辑' },
    enumValue: { type: 'string', description: '枚举值' },
    id: { type: 'string', description: '主键' },
    lengths: { type: 'string', description: '长度' },
    models_uuid: { type: 'string', description: '关联sys_models的uuid' },
    name: { type: 'string', description: '字段名' },
    point: { type: 'string', description: '小数点' },
    primaryKey: { type: 'boolean', description: '主键' },
    sort: { type: 'string', description: '排序' },
    type: { type: 'string', description: '字段类型' },
    unsigned: { type: 'boolean', description: '无符号' },
    updatedAt: { type: 'string', description: '更新时间' },
    uuid: { type: 'string', description: 'uuid' },
    uuidtype: { type: 'string', description: 'uuid类型' },
    where: { type: 'boolean', description: '查询' },
    zerofill: { type: 'boolean', description: '零填充' },
    
  },
  sys_models_fields_add: {
    add: { type: 'boolean', description: '添加', required: false },
    allowNull: { type: 'boolean', description: '必填', required: false },
    autoIncrement: { type: 'boolean', description: '自动递增', required: false },
    booleantype: { type: 'string', description: 'BOOLEAN类型', required: false },
    comment: { type: 'string', description: '字段说明', required: true },
    defaultValue: { type: 'string', description: '默认值', required: false },
    defaulttonow: { type: 'boolean', description: '默认当前时间', required: false },
    edit: { type: 'boolean', description: '编辑', required: false },
    enumValue: { type: 'string', description: '枚举值', required: false },
    lengths: { type: 'string', description: '长度', required: false },
    models_uuid: { type: 'string', description: '关联sys_models的uuid', required: true },
    name: { type: 'string', description: '字段名', required: true },
    point: { type: 'string', description: '小数点', required: false },
    primaryKey: { type: 'boolean', description: '主键', required: false },
    sort: { type: 'string', description: '排序', required: true },
    type: { type: 'string', description: '字段类型', required: false },
    unsigned: { type: 'boolean', description: '无符号', required: false },
    uuidtype: { type: 'string', description: 'uuid类型', required: false },
    where: { type: 'boolean', description: '查询', required: false },
    zerofill: { type: 'boolean', description: '零填充', required: false },
    
  },
  sys_models_fields_edit: {
    add: { type: 'boolean', description: '添加' },
    allowNull: { type: 'boolean', description: '必填' },
    autoIncrement: { type: 'boolean', description: '自动递增' },
    booleantype: { type: 'string', description: 'BOOLEAN类型' },
    comment: { type: 'string', description: '字段说明' },
    defaultValue: { type: 'string', description: '默认值' },
    defaulttonow: { type: 'boolean', description: '默认当前时间' },
    edit: { type: 'boolean', description: '编辑' },
    enumValue: { type: 'string', description: '枚举值' },
    lengths: { type: 'string', description: '长度' },
    models_uuid: { type: 'string', description: '关联sys_models的uuid' },
    name: { type: 'string', description: '字段名' },
    point: { type: 'string', description: '小数点' },
    primaryKey: { type: 'boolean', description: '主键' },
    sort: { type: 'string', description: '排序' },
    type: { type: 'string', description: '字段类型' },
    unsigned: { type: 'boolean', description: '无符号' },
    uuidtype: { type: 'string', description: 'uuid类型' },
    where: { type: 'boolean', description: '查询' },
    zerofill: { type: 'boolean', description: '零填充' },
    
  },

  // 模型索引
  sys_models_indexes_item: {
    createdAt: { type: 'string', description: '创建时间' },
    fields: { type: 'string', description: '索引字段' },
    id: { type: 'string', description: '主键' },
    models_uuid: { type: 'string', description: '关联模型uuid' },
    sort: { type: 'string', description: '排序' },
    unique: { type: 'boolean', description: '唯一' },
    updatedAt: { type: 'string', description: '更新时间' },
    uuid: { type: 'string', description: 'uuid' },
    
  },
  sys_models_indexes_add: {
    fields: { type: 'string', description: '索引字段', required: false },
    models_uuid: { type: 'string', description: '关联模型uuid', required: true },
    sort: { type: 'string', description: '排序', required: true },
    unique: { type: 'boolean', description: '唯一', required: true },
    
  },
  sys_models_indexes_edit: {
    fields: { type: 'string', description: '索引字段' },
    models_uuid: { type: 'string', description: '关联模型uuid' },
    sort: { type: 'string', description: '排序' },
    unique: { type: 'boolean', description: '唯一' },
    
  },

  // 模型关联
  sys_models_associate_item: {
    child_uuid: { type: 'string', description: '子表' },
    constraints: { type: 'boolean', description: '约束' },
    createdAt: { type: 'string', description: '创建时间' },
    foreignKey: { type: 'string', description: '子键' },
    id: { type: 'string', description: '主键' },
    models_uuid: { type: 'string', description: 'models_uuid' },
    parent_uuid: { type: 'string', description: '父表' },
    sort: { type: 'string', description: '排序' },
    targetKey: { type: 'string', description: '父键' },
    throughKey: { type: 'string', description: '中间键' },
    through_uuid: { type: 'string', description: '中间表' },
    type: { type: 'string', description: '关联类型' },
    updatedAt: { type: 'string', description: '更新时间' },
    uuid: { type: 'string', description: 'uuid' },
    
  },
  sys_models_associate_add: {
    child_uuid: { type: 'string', description: '子表', required: true },
    constraints: { type: 'boolean', description: '约束', required: true },
    foreignKey: { type: 'string', description: '子键', required: true },
    models_uuid: { type: 'string', description: 'models_uuid', required: true },
    parent_uuid: { type: 'string', description: '父表', required: true },
    sort: { type: 'string', description: '排序', required: true },
    targetKey: { type: 'string', description: '父键', required: true },
    throughKey: { type: 'string', description: '中间键', required: false },
    through_uuid: { type: 'string', description: '中间表', required: false },
    type: { type: 'string', description: '关联类型', required: true },
    
  },
  sys_models_associate_edit: {
    child_uuid: { type: 'string', description: '子表' },
    constraints: { type: 'boolean', description: '约束' },
    foreignKey: { type: 'string', description: '子键' },
    models_uuid: { type: 'string', description: 'models_uuid' },
    parent_uuid: { type: 'string', description: '父表' },
    sort: { type: 'string', description: '排序' },
    targetKey: { type: 'string', description: '父键' },
    throughKey: { type: 'string', description: '中间键' },
    through_uuid: { type: 'string', description: '中间表' },
    type: { type: 'string', description: '关联类型' },
    
  },

  // 路由管理
  sys_routes_item: {
    action: { type: 'string', description: '控制器方法' },
    admin: { type: 'boolean', description: '控制器/页面' },
    class_uuid: { type: 'string', description: '关联classify的uuid' },
    controller: { type: 'string', description: '控制器' },
    createdAt: { type: 'string', description: '创建时间' },
    icon: { type: 'string', description: '配置菜单的图标' },
    id: { type: 'string', description: '主键' },
    ignoreMiddleware: { type: 'string', description: '排除模块统一设置的middleware' },
    link: { type: 'string', description: '页面地址' },
    linkType: { type: 'string', description: '链接类型' },
    middleware: { type: 'string', description: '在 Router 里面可以配置多个 Middleware' },
    name: { type: 'string', description: '名称' },
    path: { type: 'string', description: '路由 URL 路径' },
    puuid: { type: 'string', description: '路由父uuid' },
    role: { type: 'boolean', description: '是否为角色权限节点' },
    sort: { type: 'string', description: '排序' },
    updatedAt: { type: 'string', description: '更新时间' },
    uuid: { type: 'string', description: 'uuid' },
    verb: { type: 'string', description: '用户触发动作，支持 get，post 等所有 HTTP 方法' },
    
  },
  sys_routes_add: {
    action: { type: 'string', description: '控制器方法', required: false },
    admin: { type: 'boolean', description: '控制器/页面', required: false },
    class_uuid: { type: 'string', description: '关联classify的uuid', required: true },
    controller: { type: 'string', description: '控制器', required: false },
    createdAt: { type: 'string', description: '创建时间', required: true },
    icon: { type: 'string', description: '配置菜单的图标', required: false },
    ignoreMiddleware: { type: 'string', description: '排除模块统一设置的middleware', required: false },
    link: { type: 'string', description: '页面地址', required: false },
    linkType: { type: 'string', description: '链接类型', required: false },
    middleware: { type: 'string', description: '在 Router 里面可以配置多个 Middleware', required: false },
    name: { type: 'string', description: '名称', required: true },
    path: { type: 'string', description: '路由 URL 路径', required: true },
    puuid: { type: 'string', description: '路由父uuid', required: false },
    role: { type: 'boolean', description: '是否为角色权限节点', required: false },
    sort: { type: 'string', description: '排序', required: false },
    verb: { type: 'string', description: '用户触发动作，支持 get，post 等所有 HTTP 方法', required: true },
    
  },
  sys_routes_edit: {
    action: { type: 'string', description: '控制器方法' },
    admin: { type: 'boolean', description: '控制器/页面' },
    class_uuid: { type: 'string', description: '关联classify的uuid' },
    controller: { type: 'string', description: '控制器' },
    icon: { type: 'string', description: '配置菜单的图标' },
    ignoreMiddleware: { type: 'string', description: '排除模块统一设置的middleware' },
    link: { type: 'string', description: '页面地址' },
    linkType: { type: 'string', description: '链接类型' },
    middleware: { type: 'string', description: '在 Router 里面可以配置多个 Middleware' },
    name: { type: 'string', description: '名称' },
    path: { type: 'string', description: '路由 URL 路径' },
    puuid: { type: 'string', description: '路由父uuid' },
    role: { type: 'boolean', description: '是否为角色权限节点' },
    sort: { type: 'string', description: '排序' },
    updatedAt: { type: 'string', description: '更新时间' },
    verb: { type: 'string', description: '用户触发动作，支持 get，post 等所有 HTTP 方法' },
    
  },

  // 路由分类
  sys_routes_classify_item: {
    createdAt: { type: 'string', description: '创建时间' },
    id: { type: 'string', description: '主键' },
    middleware: { type: 'string', description: '在 Router 里面可以配置多个 Middleware' },
    name: { type: 'string', description: '分类名称' },
    remarks: { type: 'string', description: '备注' },
    sort: { type: 'string', description: '越小越靠前' },
    sys: { type: 'boolean', description: '是否系统' },
    updatedAt: { type: 'string', description: '更新时间' },
    uuid: { type: 'string', description: 'uuid' },
    
  },
  sys_routes_classify_add: {
    middleware: { type: 'string', description: '在 Router 里面可以配置多个 Middleware', required: false },
    name: { type: 'string', description: '分类名称', required: true },
    remarks: { type: 'string', description: '备注', required: false },
    sort: { type: 'string', description: '越小越靠前', required: false },
    
  },
  sys_routes_classify_edit: {
    middleware: { type: 'string', description: '在 Router 里面可以配置多个 Middleware' },
    name: { type: 'string', description: '分类名称' },
    remarks: { type: 'string', description: '备注' },
    sort: { type: 'string', description: '越小越靠前' },
    
  },

  // 系统用户组
  sys_user_group_item: {
    createdAt: { type: 'string', description: '创建时间' },
    desc: { type: 'string', description: '分组说明' },
    id: { type: 'string', description: '主键' },
    name: { type: 'string', description: '分组名称' },
    puuid: { type: 'string', description: '父uuid' },
    sort: { type: 'string', description: '排序' },
    updatedAt: { type: 'string', description: '更新时间' },
    uuid: { type: 'string', description: 'uuid' },
    
  },
  sys_user_group_add: {
    desc: { type: 'string', description: '分组说明', required: false },
    name: { type: 'string', description: '分组名称', required: true },
    puuid: { type: 'string', description: '父uuid', required: false },
    sort: { type: 'string', description: '排序', required: false },
    uuid: { type: 'string', description: 'uuid', required: true },
    
  },
  sys_user_group_edit: {
    desc: { type: 'string', description: '分组说明' },
    name: { type: 'string', description: '分组名称' },
    puuid: { type: 'string', description: '父uuid' },
    sort: { type: 'string', description: '排序' },
    uuid: { type: 'string', description: 'uuid' },
    
  },

  // 角色表
  sys_role_item: {
    createdAt: { type: 'string', description: '创建时间' },
    desc: { type: 'string', description: '角色说明' },
    g_uuids: { type: 'string', description: 'graphql节点' },
    id: { type: 'string', description: '主键' },
    name: { type: 'string', description: '角色名称' },
    r_uuids: { type: 'string', description: '路由节点' },
    state: { type: 'boolean', description: '状态' },
    updatedAt: { type: 'string', description: '更新时间' },
    uuid: { type: 'string', description: 'uuid' },
    
  },
  sys_role_add: {
    desc: { type: 'string', description: '角色说明', required: false },
    g_uuids: { type: 'string', description: 'graphql节点', required: false },
    name: { type: 'string', description: '角色名称', required: true },
    r_uuids: { type: 'string', description: '路由节点', required: false },
    state: { type: 'boolean', description: '状态', required: false },
    uuid: { type: 'string', description: 'uuid', required: true },
    
  },
  sys_role_edit: {
    desc: { type: 'string', description: '角色说明' },
    g_uuids: { type: 'string', description: 'graphql节点' },
    name: { type: 'string', description: '角色名称' },
    r_uuids: { type: 'string', description: '路由节点' },
    state: { type: 'boolean', description: '状态' },
    
  },

  // 用户角色中间表
  sys_user_role_item: {
    createdAt: { type: 'string', description: '创建时间' },
    id: { type: 'string', description: '主键' },
    role_uuid: { type: 'string', description: '角色uuid' },
    updatedAt: { type: 'string', description: '更新时间' },
    user_uuid: { type: 'string', description: '用户uuid' },
    
  },
  sys_user_role_add: {
    role_uuid: { type: 'string', description: '角色uuid', required: true },
    user_uuid: { type: 'string', description: '用户uuid', required: true },
    
  },
  sys_user_role_edit: {
    role_uuid: { type: 'string', description: '角色uuid' },
    user_uuid: { type: 'string', description: '用户uuid' },
    
  },

  // 开放接口
  sys_openApi_item: {
    createdAt: { type: 'string', description: '创建时间' },
    id: { type: 'string', description: '主键' },
    open_uuids: { type: 'string', description: '开放接口节点' },
    updatedAt: { type: 'string', description: '更新时间' },
    uuid: { type: 'string', description: 'uuid' },
    
  },
  sys_openApi_add: {
    open_uuids: { type: 'string', description: '开放接口节点', required: false },
    uuid: { type: 'string', description: 'uuid', required: false },
    
  },
  sys_openApi_edit: {
    open_uuids: { type: 'string', description: '开放接口节点' },
    uuid: { type: 'string', description: 'uuid' },
    
  },

};