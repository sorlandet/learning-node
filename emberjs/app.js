'use strict';

var App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.Router.map(function(){
    this.route('about', {path: '/aboutus'});
});

App.IndexController = Ember.Controller.extend({
    productsCount: 6,
    logo: 'static/images/logo.jpg',
    time: function(){
        return (new Date()).toDateString();
    }.property()
});