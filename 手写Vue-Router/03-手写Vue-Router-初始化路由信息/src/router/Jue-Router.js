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
        this.routesMap = this.createRoutesMap();
        this.routeInfo = new JueRouteInfo();
        // 初始化默认的路由信息
        this.initDefault();
    }
    initDefault(){
        if(this.mode === 'hash'){
            if(!location.hash){
                location.hash = '/';
            }
            window.addEventListener('load',()=>{
                this.routeInfo.currentPath = location.hash.slice(1);
            });
            window.addEventListener('hashchange',()=>{
                this.routeInfo.currentPath = location.hash.slice(1);
                console.log(this.routeInfo);
            })
        }else{
            if(!location.pathname){
                location.pathname = '/';
            }
            window.addEventListener('load',()=>{
                this.routeInfo.currentPath = location.pathname;
            });
            window.addEventListener('hashchange',()=>{
                this.routeInfo.currentPath = location.pathname;
                console.log(this.routeInfo);
            })
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

};
export default JueRouter;
