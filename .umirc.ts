import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '管理页面',
  },
  metas: [{ name: 'react-umi-template', content: 'ReactUmi模板项目' }],
  proxy: {
    '/api': {
      target: 'http://localhost:8000',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  mock: {
    include: ['src/mock/*.ts'],
  },
  reactQuery: {},
  routes: [
    { path: '/login', component: './Login', layout: false },
    { path: '/register', component: './Register', layout: false },
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: './Home',
    },
    { path: '/403', component: './403' },
    { path: '/*', component: './404' },
  ],
  npmClient: 'npm',
});
