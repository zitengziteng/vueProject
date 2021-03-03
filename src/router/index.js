import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home'
import Login from '../views/login/Login'
import Register from '../views/register/Register'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Register',
    component: Register,
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: 'Home'}):  next();
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: 'Home'}):  next();
    }
    // 访问这个页面之前才会执行这个函数
    // to要跳转页面； from来源； next调用，逻辑继续执行
    // beforeEnter: (to, from, next) => {
    //   console.log(to,from)
    //   //登录状态；  如果已经登录了，就直接跳转
    //   const isLogin = localStorage.isLogin;
    //   if (isLogin) {
    //     next({name: 'Home'});
    //   } else {
    //     next();
    //   }
    // }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 路由守卫
// router.beforeEach((to, from, next) => {
//   // 从本地取isLogin 状态，判断是否登录；
//   const isLogin = localStorage.isLogin;
//   if (isLogin || to.name  === "Login") {
//     next();
//   } else {
//     next({name:'Login'})
//   }
//   console.log(to,from)
//   next();
// })
// export default router
router.beforeEach((to, from ,next) => {
  const { isLogin } = localStorage;
  const { name } = to;
  const isLoginOrRegister = (name === "Login" || name === "Register");
  (isLogin || isLoginOrRegister) ? next() : next({ name: 'Login'});
  // 如果是登录、注册页面也会给展示；  需要判断下是否是  登录状态；
  // 如果是  登录转态  跳转到 Home页面； 
})

export default router