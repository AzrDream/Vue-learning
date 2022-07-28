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
            }else{
                this.$router = this.$parent.$router;
                this.$route = this.$router.routeInfo;
            }
        }
    })
};
export default JueRouter;
