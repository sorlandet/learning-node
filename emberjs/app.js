'use strict';

var App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.Router.map(function(){
    this.route('about', {path: '/about'});
    this.resource('products', function(){
        this.resource('product', {path: '/:product_id'});
        this.route('onsale');
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

App.ProductsOnsaleRoute = Ember.Route.extend({
    model: function(){
        return this.modelFor('products').filterBy('isOnSale');
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

App.ReviewsController = Ember.ArrayController.extend({
    sortProperties: ['reviewedAt'],
    sortAscending: false
});



// Components

App.ProductDetailsComponent = Ember.Component.extend({
    tagName: 'li',
    className: ['row'],

    reviewsCount: Ember.computed.alias('product.reviews.length'),
    hasReviews: function () {
        return this.get('reviewsCount') > 0;
    }.property('reviewsCount')
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




// Views

App.ProductView = Ember.View.extend({
    classNames: ['row'],
    classNameBindings: ['isOnSale'],
    isOnSale: Ember.computed.alias('controller.isOnSale')
});




// Fixtures

App.Product.FIXTURES = [
    {
        id: 1,
        title: 'Audi A6 Allroad',
        description: 'bla bla bla',
        price: 99,
        isOnSale: true,
        image: 'static/images/audi-a6-allroad.jpg',
        reviews: [100, 101]
    },
    {
        id: 2,
        title: 'Lexus Gs',
        description: 'bla bla bla',
        price: 249,
        isOnSale: true,
        image: 'static/images/lexus-gs.jpg'
    },
    {
        id: 3,
        title: 'McLaren P1',
        description: 'bla bla bla',
        price: 249,
        isOnSale: true,
        image: 'static/images/mclaren-p1.jpg'
    },
    {
        id: 4,
        title: 'Opel Insignia Country Tourer',
        description: 'bla bla bla',
        price: 249,
        isOnSale: true,
        image: 'static/images/opel-insignia-country-tourer.jpg'
    },
    {
        id: 5,
        title: 'Porsche Panamera',
        description: 'bla bla bla',
        price: 249,
        isOnSale: false,
        image: 'static/images/porsche-panamera.jpg'
    },
    {
        id: 6,
        title: 'Subaru Outback',
        description: 'bla bla bla',
        price: 249,
        isOnSale: false,
        image: 'static/images/subaru-outback.jpg'
    },
    {
        id: 7,
        title: 'Volvo XC70',
        description: 'bla bla bla',
        price: 249,
        isOnSale: false,
        image: 'static/images/volvo-xc70.jpg'
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


