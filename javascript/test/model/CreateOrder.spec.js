/**
 * Nucoro API
 * No description
 *
 * The version of the OpenAPI document: 4.175.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NucoroApi);
  }
}(this, function(expect, NucoroApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NucoroApi.CreateOrder();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CreateOrder', function() {
    it('should create an instance of CreateOrder', function() {
      // uncomment below and update the code to test CreateOrder
      //var instance = new NucoroApi.CreateOrder();
      //expect(instance).to.be.a(NucoroApi.CreateOrder);
    });

    it('should have the property shares (base name: "shares")', function() {
      // uncomment below and update the code to test the property shares
      //var instance = new NucoroApi.CreateOrder();
      //expect(instance).to.be();
    });

    it('should have the property asset (base name: "asset")', function() {
      // uncomment below and update the code to test the property asset
      //var instance = new NucoroApi.CreateOrder();
      //expect(instance).to.be();
    });

    it('should have the property portfolio (base name: "portfolio")', function() {
      // uncomment below and update the code to test the property portfolio
      //var instance = new NucoroApi.CreateOrder();
      //expect(instance).to.be();
    });

    it('should have the property orderType (base name: "order_type")', function() {
      // uncomment below and update the code to test the property orderType
      //var instance = new NucoroApi.CreateOrder();
      //expect(instance).to.be();
    });

    it('should have the property method (base name: "method")', function() {
      // uncomment below and update the code to test the property method
      //var instance = new NucoroApi.CreateOrder();
      //expect(instance).to.be();
    });

    it('should have the property limitPrice (base name: "limit_price")', function() {
      // uncomment below and update the code to test the property limitPrice
      //var instance = new NucoroApi.CreateOrder();
      //expect(instance).to.be();
    });

    it('should have the property stopPrice (base name: "stop_price")', function() {
      // uncomment below and update the code to test the property stopPrice
      //var instance = new NucoroApi.CreateOrder();
      //expect(instance).to.be();
    });

    it('should have the property duration (base name: "duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instance = new NucoroApi.CreateOrder();
      //expect(instance).to.be();
    });

  });

}));