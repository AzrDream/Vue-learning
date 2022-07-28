class JueRouteInfo{
    constructor(){
        this.currentPath = null;
    }
}
class JueRouter{
    constructor(options){
        this.mode = options.mode || 'hash';
        this.routes = options.routes || [];
        // 提取路由信息
        /*
        {
            '/home': Home,
            '/about': About
        }
        * */
        this.routesMap = this.createRoutesMap();
        this.routeInfo = new JueRouteInfo();
        // 初始化默认的路由信息
        this.initDefault();
    }
    initDefault(){
        if(this.mode === 'hash'){
            // 判断有没有hash，没有的话添加/
            if(!location.hash){
                location.hash = '/';
            }
            window.addEventListener('load',()=>{
                this.routeInfo.currentPath = location.hash.slice(1);
            });
            window.addEventListener('hashchange',()=>{
                this.routeInfo.currentPath = location.hash.slice(1);
                console.log(this.routeInfo);
            });
        }else{
            if(!location.pathname){
                location.pathname = '/';
            }
            window.addEventListener('load',()=>{
                this.routeInfo.currentPath = location.pathname;
            });
            window.addEventListener('popstate',()=>{
                this.routeInfo.currentPath = location.pathname;
                console.log(this.routeInfo);
            });
        }
    }
    createRoutesMap(){
        return this.routes.reduce((map, route)=>{
            map[route.path] = route.component;
            return map;
        }, {})
    }
}
JueRouter.install = (Vue, options)=>{
    Vue.mixin({
        beforeCreate() {
            if(this.$options && this.$options.router){
                this.$router = this.$options.router;
                this.$route = this.$router.routeInfo;
                Vue.util.defineReactive(this,'xxx',this.$router);
            }else{
                this.$router = this.$parent.$router;
                this.$route = this.$router.routeInfo;
            }
        }
    });
    Vue.component('router-link',{
        props: {
            to:String
        },
        render(){
            // render中的this是代理对象,代理对象中的_self才是vue实例
            // console.log(this._self.$router.mode);
            // 这里面的to不能修改,所以使用path代替this.to
            let path = this.to;
            if(this._self.$router.mode === 'hash'){
                path = '#'+path;
            }
            // 可以使用this.$slots.default获取当中的内容
            return <a href={path}>{this.$slots.default}</a>
        }
    });
    Vue.component('router-view',{
        render(h){
            // 拿到提取的路由信息
            let routersMap = this._self.$router.routesMap;
            // 拿到当前的路由地址
            let currentPath = this._self.$route.currentPath;
            // 取出对应的组件
            let currentComponent = routersMap[currentPath];
            // 将组件传递给渲染的方法，渲染出来
            return h(currentComponent);
        }
    });
};
export default JueRouter;
