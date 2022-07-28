class JueRouter{
    constructor(options){
        this.mode = options.mode || 'hash';
        this.routes = options.routes || [];
        this.routesMap = this.createRoutesMap();
        console.log(this.routesMap);
    }
    createRoutesMap(){
        return this.routes.reduce((map,route)=>{
            map[route.path] = route.component;
            return map;
        },{});
    }
}
JueRouter.install = (Vue, options)=>{

};
export default JueRouter;
