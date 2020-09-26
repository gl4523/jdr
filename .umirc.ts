import { defineConfig } from 'umi';
const isProduction = Object.is(process.env.NODE_ENV, 'production');
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  dynamicImport: {},
  antd: {},
  publicPath: isProduction ? 'https://gl4523.github.io/jdr/' : '/',
});
