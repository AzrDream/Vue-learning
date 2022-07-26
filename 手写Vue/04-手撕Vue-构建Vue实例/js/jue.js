class Jue{
    constructor(options){
        // 1.保存创建的时候传递过来的数据
        if(this.isElement(options.el)){
            this.$el = options.el;
        }else{
            this.$el = document.querySelector(options.el);
        }
        this.$data = options.data;
        // 2.根据指定的区域和数据去编译渲染界面
        if(this.$el){
            new Compier(this)
        }
    }
    // 判断是否是一个元素
    isElement(node){
        return node.nodeType === 1;
    }
}
class Compier{
    constructor(vm) {
        this.vm = vm;
    }
}
