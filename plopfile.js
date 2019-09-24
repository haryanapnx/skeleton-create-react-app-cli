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
     ],
     actions: [
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
         path: 'src/Features/{{pascalCase name}}/Index.js',
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
         pattern: `/* PLOP_INJECT_IMPORT */`,
         template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
       },
       {
         type: 'append',
         path: 'src/Features/index.js',
         pattern: `/* PLOP_INJECT_EXPORT */`,
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
         pattern: `/* PLOP_INJECT_IMPORT */`,
         template: `import {{pascalCase name}}Reducer from 'Features/{{pascalCase name}}/Redux/{{pascalCase name}}Reducer';`,
       },
       {
         type: 'append',
         path: 'src/commons/routeReducers.js',
         pattern: `/* PLOP_INJECT_EXPORT */`,
         template: `\t{{pascalCase name}}:{{pascalCase name}}Reducer,`,
       },
     ],
   })
 }