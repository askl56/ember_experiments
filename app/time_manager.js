import Ember from 'ember';

export default Ember.Object.extend({
  time:00,
  timeChanged: function(){
    // Do something when the time is changed
    console.log("time changed");
  }.observes('time')
});
