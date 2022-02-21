# A blog post application called adogtion-ui

### Important information
1. I've chosen the Strapi CMS
2. I've created a repository for the Strapi CMS project. To clone the project: git clone https://github.com/gustavollg/adogtion-strapi-cms.git
3. Just in case the Strapi CMS project asks to authenticate -> user: gustavo, password: Password123
4. The default Strapi CMS API port is being used by the application (1337). In case it needs to be changed, there are two places that are using this port. in the "environments.prod.ts" file and in the "scully.blog-post-app-ui.config.ts" file
5. Although I was able to integrate Scully, I wasn't able to generate the routes corresponding to "p/${postIdentfier}". In the other hand, I understood the concept of creating a Scully custom plugin in order to generate the dynamic routes. The route /posts is being generated by Scully. So, when Scully is serving the application, the route "p/${postIdentfier}" won't be working as expected.

### Running the application
1. Clone the git project: https://github.com/gustavollg/adogtion-ui.git
2. In the project folder, run the command: npm install.

4. In order to run the project without Scully serving the application, run the command: ng serve
5. In order to run the project with Scully serving the application, run the command "ng build" then "npx scully", and then "npx scully serve --"
