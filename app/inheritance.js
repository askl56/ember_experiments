import Ember from 'ember';

export default function(){

  var base = Ember.Object.extend({
    baseProperty: true
  });

  var derived = base.extend({
  });

  derived.reopen({
    derivedProperty: true
  });

  var derivedObject = derived.create({
  });

  console.log(derivedObject.get('baseProperty'));//true
  console.log(derivedObject.get('derivedProperty'));//true

  var anotherDerivedObject = derived.create();
  console.log(anotherDerivedObject.get('derivedProperty'));//true

}
