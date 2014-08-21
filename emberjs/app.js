'use strict';

var App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.Router.map(function(){
    this.route('about', {path: '/about'});
    this.resource('products', function(){
        this.resource('product', {path: '/:product_id'});
    });

});

//App.ApplicationAdapter = DS.RESTAdapter.extend({
//
//});

App.ApplicationAdapter = DS.FixtureAdapter.extend({

});




// Routes

App.IndexRoute = Ember.Route.extend({
    model: function(){
        return this.store.findAll('product');
    }
});

App.ProductsRoute = Ember.Route.extend({
    model: function(){
        return this.store.findAll('product');
    }
});

App.ProductRoute = Ember.Route.extend({
    model: function(params){
        console.log(params);
        return this.store.find('product', params.product_id);
    }
});




// Controllers

App.IndexController = Ember.ArrayController.extend({
//    productsCount: function(){ return this.get('length'); }.property('length'),
    productsCount: Ember.computed.alias('length'),
    logo: 'static/images/1.jpg',
    time: function(){
        return (new Date()).toDateString();
    }.property(),
    onSale: function(){
        return this.filterBy('isOnSale', true).slice(0, 3);
    }.property('@each.isOnSale')
});

App.ProductsController = Ember.ArrayController.extend({
    sortProperties: ['title']
});




// Models

App.Product = DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string'),
    price: DS.attr('nubmer'),
    isOnSale: DS.attr('boolean'),
    image: DS.attr('string'),
    reviews: DS.hasMany('review', {async: true})
});

App.Review = DS.Model.extend({
    text: DS.attr('string'),
    reviewedAt: DS.attr('date'),
    product: DS.belongsTo('product')
});




// Fixtures

App.Product.FIXTURES = [
    {
        id: 1,
        title: 'Flint',
        description: 'bla bla bla',
        price: 99,
        isOnSale: true,
        image: 'static/images/1.jpg',
        reviews: [100, 101]
    },
    {
        id: 2,
        title: 'AKindling',
        description: 'bla bla bla',
        price: 249,
        isOnSale: false,
        image: 'static/images/2.jpg'
    }
];

App.Review.FIXTURES = [
    {
        id: 100,
        product: 1,
        text: 'review 1 text'
    },
    {
        id: 101,
        product: 1,
        text: 'review 2 text'
    }
];


