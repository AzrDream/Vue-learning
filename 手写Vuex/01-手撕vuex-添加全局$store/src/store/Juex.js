const install = (Vue, options)=>{
    Vue.mixin({
        beforeCreate(){
            if(this.$options&&this.$options.store){
                this.$store = this.$options.store;
            }else{
                this.$store = this.$parent.$store;
            }
        }
    });
};
class Store{
    constructor(options){
        this.options = options;
    }
}
export default {
    install,
    Store
}
