/*
install方法会在外界调用Vue.use的时候执行
并且在执行的时候会把Vue实例和一些额外的参数传递给我们
* */
import Vue from 'vue';
const install = (Vue, options)=>{
    // 给每一个Vue实例都添加一个$store属性
    /*
    在Vue中有一个名称叫做mixin方法，这个方法会在创建每一个Vue实例的时候执行，所以我们可以通过mixin方法给每一个Vue实例添加￥store属性
    * */
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
class Store{
    constructor(options){
        // 将创建Store时需要共享的数据添加到Store上面
        // this.state = options.state;
        // 将数据变为双向数据绑定的内容
        /*
        在Vue中有一个util的工具类，这个工具类上有一个defineReactive方法
        通过这个方法可以快速的将某个数据变成双向绑定的数据
        defineReactive这个方法接收三个参数
        第一个参数：要给哪个对象添加属性
        第二个参数：要给指定的对象添加什么属性
        第三个参数：要给这个属性添加什么值
        * */
        Vue.util.defineReactive(this,'state',options.state);
        // 将传递进来的getters放到Store上
        this.initGetters(options);
        // 将传递进来的mutations放到Store上
        this.initMutations(options);
        // 将传递进来的actions放到Store上
        this.initActions(options);
    }
    // 触发actions方法的dispatch
    dispatch=(type, payload)=>{
        this.actions[type](payload);
    };
    // 封装实现actions方法
    initActions(options){
        let actions = options.actions || {};
        this.actions = {};
        for(let key in this.actions){
            this.actions[key]=(payload)=>{
                actions[key](this,payload);
            }
        }
    }
    // mutations方法中的commit，this.$store.commit('addNum',10);
    commit=(type, payload)=>{
        this.mutations[type](payload);
    };
    // 封装实现mutations方法
    initMutations(options){
        // 1.拿到传递进来的mutations
        let mutations = options.mutations || {};
        // 2.在Store上面新增一个mutations的属性
        this.mutations = {};
        // 3.将传递进来的mutations中的方法添加到当前Store的mutations上
        for(let key in this.mutations){
            this.mutations[key] = (payload)=>{
                mutations[key](this.state, payload);
            }
        }
    }
    // 封装实现getters方法
    initGetters(options){
        // this.getters = options.getters;
        // 1.拿到传递进来的getters
        let getters = options.getters || {};
        // 2.在Store上面新增一个getters的属性
        this.getters = {};
        // 3.将传递进来的getters中的方法添加到当前Store的getters上
        for(let key in getters) {
            Object.defineProperty(this.getters,key,{
                get:()=> {
                    return getters[key](this.state);
                }
            })
        }
    }
}
export default {
    install,
    Store
}
