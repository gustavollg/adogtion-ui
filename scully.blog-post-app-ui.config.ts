import {registerPlugin, ScullyConfig, httpGetJson} from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer'

registerPlugin('router', 'postPlugin', async () => {
  const postList: any = await httpGetJson('http://localhost:1337/api/posts');
  const handledRoutes = [];
  for (let post of postList['data']) {
    handledRoutes.push({
      route: '/p/' + post.id
    });
  }
  return handledRoutes;
});


export const config: ScullyConfig = {
  projectRoot: "./src/app",
  projectName: "blog-post-app-ui",
  outDir: './dist/static',
  extraRoutes: ['/posts'],
  routes: {
    '/p/:postId': {
      type: 'postPlugin',
      url: 'http://localhost:1337/api/posts'
    }
  }
};
