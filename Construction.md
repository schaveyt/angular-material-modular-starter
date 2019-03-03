# Construction

## Create an Angular Workspace without an Application

~~~bash
$ ng new angular-material-modular-starter

? Would you like to add Angular routing? Yes*
? Which stylesheet format would yo like to use? CSS
...
...
...
~~~

##. Add an Starter application

~~~bash
ng g application client-app
~~~

## Installed Angular Material

~~~bash
npm install --save @angular/material @angular/cdk @angular/animations
~~~

- Update client-app's AppModule's imports to utilize the Angular Animations
- Updated client-app style.css to use a default material theme
- Installed hammerjs for gestures
- Including Angular Material icons
- Created Angular Module to support imports.

## Added a UI library

~~~bash
ng g library lib-ui --prefix lib-ui
~~~

To add a component to the __lib-ui__ library

~~~bash
ng g c my-component-name --project lib-ui
~~~

## Added a material 'consolidated' Angular Module for the ClientApp

~~~bash
1 ng g module material
~~~

- Update client-app's AppModule's imports to utilize the local Material consolidated module.


## Creating the Layout Component

This component is going to be an entry point for our entire application, so let’s create it and import its selector
inside the app.component.ts

~~~bash
ng g component layout
~~~


## Angular Flex Layout

Before we modify the HTML component of the new LayoutComponent, we need to install one more library: \
@angular/flex-layout \

This library will help us create a responsive application. So, let’s install it:

~~~bash
npm install @angular/flex-layout –save
~~~

- Register it inside the app.module.ts
- Updated the LayoutComponent's html (see it html comments)
- Update the LayoutComponent's css (see its html commetns)

