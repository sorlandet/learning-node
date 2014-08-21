'use strict';

var App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.Router.map(function(){
    this.route('about', {path: '/about'});
    this.resource('products');
    this.resource('product', {path: '/products/:title'});
});

App.ProductsRoute = Ember.Route.extend({
    model: function(){
        return App.PRODUCTS;
    }
});

App.ProductRoute = Ember.Route.extend({
    model: function(params){
        console.log(params);
        return App.PRODUCTS.findBy('title', params.title);
    }
});

App.IndexController = Ember.Controller.extend({
    productsCount: 6,
    logo: 'static/images/1.jpg',
    time: function(){
        return (new Date()).toDateString();
    }.property()
});


App.PRODUCTS = [
    {
        title: 'Flint',
        description: 'bla bla bla',
        price: 99,
        isOnSale: true,
        image: 'static/images/1.jpg'
    },
    {
        title: 'Kindling',
        description: 'bla bla bla',
        price: 249,
        isOnSale: false,
        image: 'static/images/2.jpg'
    }
];