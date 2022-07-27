/*
install方法会在外界调用Vue.use的时候执行
并且在执行的时候会把Vue实例和一些额外的参数传递给我们
* */
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
        this.state = options.state;
        // 将传递进来的getters放到Store上
        // this.getters = options.getters;
        // 1.拿到传递进来的getters
        let getters = options.getters || {};
        // 2.在Store上面新增一个getters的属性
        this.getters = {};
        // 3.将传递进来的getters中的方法添加到当前Store的getters上
        for(let key in getters) {
            Object.defineProperty(this.getters,key,{
                get:()=>{
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
