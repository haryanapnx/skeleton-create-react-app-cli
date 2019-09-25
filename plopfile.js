const requireField = fieldName => {
   return value => {
     if (String(value).length === 0 ) {
       return fieldName + ' is required'
     }
     return true
   }
 }

module.exports = plop => {
   plop.setGenerator('features', {
     description: 'Create a reusable component',
     prompts: [
       {
         type: 'input',
         name: 'name',
         message: 'What is your feature name?',
         validate: requireField('name')
       },
       {
         type: 'confirm',
         name: 'withAuth',
         message: 'Need Route with Authentication (Y/N)?',
         validate: requireField('route')
       },
    ],
     actions: function(data){
       let actions = [
         {
           type: 'add',
           path: 'src/Features/{{pascalCase name}}/{{pascalCase name}}.js',
           templateFile: 'plop-templates/Features/Features.js.hbs',
         },
         {
           type: 'add',
           path: 'src/Features/{{pascalCase name}}/{{pascalCase name}}Container.js',
           templateFile: 'plop-templates/Features/Container.js.hbs',
         },
         {
           type: 'add',
           path: 'src/Features/{{pascalCase name}}/Modals/{{pascalCase name}}Modals.js',
           templateFile: 'plop-templates/Features/Modals/Modal.js.hbs',
         },
         {
           type: 'add',
           path: 'src/Features/{{pascalCase name}}/Modals/{{pascalCase name}}Content.js',
           templateFile: 'plop-templates/Features/Modals/Content.js.hbs',
         },
         {
           type: 'add',
           path: 'src/Features/{{pascalCase name}}/Redux/{{pascalCase name}}Constant.js',
           templateFile: 'plop-templates/Features/Redux/Constant.js.hbs',
         },
         {
           type: 'add',
           path: 'src/Features/{{pascalCase name}}/Redux/{{pascalCase name}}Action.js',
           templateFile: 'plop-templates/Features/Redux/Action.js.hbs',
         },
         {
           type: 'add',
           path: 'src/Features/{{pascalCase name}}/Redux/{{pascalCase name}}Reducer.js',
           templateFile: 'plop-templates/Features/Redux/Reducer.js.hbs',
         },
         {
           type: 'add',
           path: 'src/Features/{{pascalCase name}}/{{pascalCase name}}.scss',
           templateFile: 'plop-templates/Features/Style.scss.hbs',
         },
         {
           type: 'add',
           path: 'src/Features/{{pascalCase name}}/index.js',
           templateFile: 'plop-templates/Features/index.js.hbs',
         },
         {
           type: 'add',
           path: 'src/Features/index.js',
           templateFile: 'plop-templates/injectable-features.js.hbs',
           skipIfExists: true,
         },
         {
           type: 'append',
           path: 'src/Features/index.js',
           pattern: `/* FEATURES_INJECT_IMPORT */`,
           template: `const {{pascalCase name}} = loadable(() => import('./{{pascalCase name}}'));`,
         },
         {
           type: 'append',
           path: 'src/Features/index.js',
           pattern: `/* FEATURES_INJECT_EXPORT */`,
           template: `\t{{pascalCase name}},`,
         },
         {
           type: 'add',
           path: 'src/commons/routeReducers.js',
           templateFile: 'plop-templates/inject-reducers.js.hbs',
           skipIfExists: true,
         },
         {
           type: 'append',
           path: 'src/commons/routeReducers.js',
           pattern: `/* ROUTE_INJECT_IMPORT */`,
           template: `import {{pascalCase name}}Reducer from 'Features/{{pascalCase name}}/Redux/{{pascalCase name}}Reducer';`,
         },
         {
           type: 'append',
           path: 'src/commons/routeReducers.js',
           pattern: `/* ROUTE_INJECT_EXPORT */`,
           template: `\t{{pascalCase name}}:{{pascalCase name}}Reducer,`,
         },
         {
           type: 'add',
           path: 'src/routes/index.js',
           templateFile: 'plop-templates/inject-router.js.hbs',
           skipIfExists: true,
         },
         {
           type: 'append',
           path: 'src/routes/index.js',
           pattern: `/* ROUTE_INJECT_IMPORT */`,
           template: `{{pascalCase name}},`,
         },
       ]
       if (data.withAuth) {
         actions.push({
            type: 'append',
            path: 'src/routes/index.js',
            pattern: `{/* ROUTE_INJECT_EXPORT */}`,
            template: `<AuthRoutes path="/{{dashCase name}}" exact component={ {{pascalCase name}} } />`,
         })
       } else {
        actions.push({
          type: 'append',
          path: 'src/routes/index.js',
          pattern: `{/* ROUTE_INJECT_EXPORT */}`,
          template: `<Route path="/{{dashCase name}}" exact component={ {{pascalCase name}} } />`,
       })
       }
       return actions
     }
   })
 }