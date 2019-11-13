import Vue from 'vue' 
import Router from 'vue-router' 
 
const DashboardLayout = () => import(/* webpackChunkName: "dashboard" */ '../components/dashboardLayout.vue') 
 
function loadView(view) {
    return () => import(/* webpackChunkName: "view[request]" */ `../components/dashboardContents/${view}.vue`) } 
 
    const routes = [     
        {       
            path: '/',       
            component: DashboardLayout,       
            children: [         
                {           
                    name: 'Dashboard',           
                    path: '/',           
                    component: loadView('dashboard')         
                },
                {           
                    name: 'UserController',           
                    path: '/userController',           
                    component: loadView('userController')         
                },
                {           
                    name: 'BranchController',           
                    path: '/branchController',           
                    component: loadView('branchController')         
                }        
            ]     
        },   
    ]   
    Vue.use(Router) 
     
    const router = new Router({mode: 'history', routes: routes}) 
     
    export default router   