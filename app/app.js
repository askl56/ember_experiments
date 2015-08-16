import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import inheritance from './inheritance';
import numericBox from './numberic_box';
import user from './user';
import timeManager from './time_manager'

var myTimeManager = timeManager.create({
  time: 12
});

myTimeManager.set("time",22);

myUser = user.create({
  firstName: "Andrew",
  lastName: "Scott"
});

console.log(myUser.get('fullName')); // Andrew Scott

myUser.set("firstName","Tony");
myUser.set("lastName","Stark");
console.log(myUser.get('fullName'));

var textbox = numericBox.create();
console.log(textbox.valid("12")); //true
textbox.onFocus();

var darren = father.create({
  name:'Darren',
  age:40,
  address:'Brisbane'
});

var dan = child.create({
  school:'Brisbane State High School',
  father: darren
});

console.log(dan.get('address'));

darren.set('address','sydney');

console.log(dan.get('address'));

//Output
//Brisbane
//sydney

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);
inheritance();

export default App;
