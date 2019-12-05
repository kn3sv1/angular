import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

//import { Student } from 'typescript-boilerplate';
const yourModuleName = require('typescript-boilerplate');
//let user = new Student("Jane", "M.", "User");

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);