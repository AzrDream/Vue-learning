/*
install方法会在外界调用Vue.use的时候执行
并且在执行的时候会把Vue实例和一些额外的参数传递给我们
* */
import Vue from 'vue';
const install = (Vue, options)=>{
    Vue.mixin({
        beforeCreate() {
            if(this.$options&&this.$options.store){
                this.$store = this.$options.store;
            }
            else{
                this.$store = this.$parent.$store;
            }
        }
    });
};
class ModuleCollection {
    constructor(rootModule) {
        this.register([],rootModule);
    }
    register(arr, rootModule){
        // console.log(arr);   // [] [home] [account] [account,login]
        // 1.按照我们需要的格式创建模块
        let module = {
            _raw: rootModule,
            _state: rootModule.state,
            _children: {}
        };
        // 2.保存模块信息
        if(arr.length === 0){
            // 保存根模块
            this.root = module;
        }else{
            // 保存子模块
            // this.root._children[arr[arr.length-1]] = module;
            // let testArr = ['account', 'login'];
            // let res = testArr.splice(0,testArr.length-1);
            // console.log(res);
            let parent = arr.splice(0,arr.length-1).reduce((root,currentKey)=>{
                return root._children[currentKey];
            },this.root);
            parent._children[arr[arr.length-1]] = module;
        }
        // 3.处理子模块
        for(let childrenModuleName in rootModule.modules){
            let childrenModule = rootModule.modules[childrenModuleName];
            this.register(arr.concat(childrenModuleName), childrenModule)
        }
    }
}
class Store{
    constructor(options){
        // 将创建Store时需要共享的数据添加到Store上面
        Vue.util.defineReactive(this,'state',options.state);
        // 提取模块信息
        this.modules = new ModuleCollection(options);
        // 安装子模块的数据
        this.initModules([],this.modules.root);
        /*
        设置成这样
        let root = {
            _raw:rootModule,   // 根模块
            _state:rootModule.state,  // 根模块的数据
            _children:{ //子模块的属性
                home:{
                    _raw:homeModule,   // 根模块
                    _state:homeModule.state,  // 根模块的数据
                    _children:{}
                },
                account:{
                    _raw:accountModule,   // 根模块
                    _state:accountModule.state,  // 根模块的数据
                    _children:{
                        login:{
                            _raw:loginModule,   // 根模块
                            _state:loginModule.state,  // 根模块的数据
                            _children:{}
                        }
                    }
                },
            }
        }
        * */
    }
    initModules(arr, rootModule){
        // console.log(arr); // [] [home] [account] [account, login]
        // 如果当前是子模块, 那么就需要将数据安装到this.state上
        if(arr.length > 0){
            let parent = arr.splice(0, arr.length-1).reduce((state, currentKey)=>{
                return state[currentKey];
            }, this.state);
            Vue.set(parent, arr[arr.length-1], rootModule._state);
        }
        // 将传递进来的getters放到Store上
        this.initGetters(rootModule._raw);
        // 将传递进来的mutations放到Store上
        this.initMutations(rootModule._raw);
        // 将传递进来的actions放到Store上
        this.initActions(rootModule._raw);
        // 如果当前不是子模块, 那么就需要从根模块中取出子模块的信息来安装
        for(let childrenModuleName in rootModule._children){
            let  childrenModule = rootModule._children[childrenModuleName];
            this.initModules(arr.concat(childrenModuleName), childrenModule);
        }
    }
    // 触发actions方法的dispatch
    dispatch = (type, payload)=>{
        this.actions[type].forEach(fn=>fn(payload));
    };
    // 封装实现actions方法
    initActions(options){
        // 1.拿到传递进来的actions
        let actions = options.actions || {};
        // 2.在Store上新增一个actions的属性
        this.actions = this.actions || {};
        // 3.将传递进来的actions中的方法添加到当前Store的actions上
        for(let key in actions){
            this.actions[key] = this.actions[key] || [];
            this.actions[key].push((payload)=>{
                actions[key](this, payload);
            });
        }
    }
    // mutations方法中的commit，this.$store.commit('addNum',10);
    commit = (type, payload)=>{
        // console.log(this);
        this.mutations[type].forEach(fn=>fn(payload));
    };
    // 封装实现mutations方法
    initMutations(options){
        // 1.拿到传递进来的mutations
        let mutations = options.mutations || {};
        // 2.在Store上新增一个mutations的属性
        this.mutations = this.mutations || {};
        // 3.将传递进来的mutations中的方法添加到当前Store的mutations上
        for(let key in mutations){
            this.mutations[key] = this.mutations[key] || [];
            this.mutations[key].push((payload)=>{
                mutations[key](options.state, payload);
            });
        }
    }
    // 封装实现getters方法
    initGetters(options){
        // this.getters = options.getters;
        // 1.拿到传递进来的getters
        let getters = options.getters || {};
        // 2.在Store上新增一个getters的属性
        this.getters = this.getters || {};
        // 3.将传递进来的getters中的方法添加到当前Store的getters上
        for(let key in getters){
            Object.defineProperty(this.getters, key, {
                get:()=>{
                    return getters[key](options.state);
                }
            })
        }
    }
}
export default {
    install,
    Store
}
