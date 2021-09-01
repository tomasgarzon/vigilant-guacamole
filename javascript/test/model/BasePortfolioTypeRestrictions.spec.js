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
    instance = new NucoroApi.BasePortfolioTypeRestrictions();
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

  describe('BasePortfolioTypeRestrictions', function() {
    it('should create an instance of BasePortfolioTypeRestrictions', function() {
      // uncomment below and update the code to test BasePortfolioTypeRestrictions
      //var instance = new NucoroApi.BasePortfolioTypeRestrictions();
      //expect(instance).to.be.a(NucoroApi.BasePortfolioTypeRestrictions);
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instance = new NucoroApi.BasePortfolioTypeRestrictions();
      //expect(instance).to.be();
    });

    it('should have the property dateFrom (base name: "date_from")', function() {
      // uncomment below and update the code to test the property dateFrom
      //var instance = new NucoroApi.BasePortfolioTypeRestrictions();
      //expect(instance).to.be();
    });

    it('should have the property dateTo (base name: "date_to")', function() {
      // uncomment below and update the code to test the property dateTo
      //var instance = new NucoroApi.BasePortfolioTypeRestrictions();
      //expect(instance).to.be();
    });

    it('should have the property cleanValue (base name: "clean_value")', function() {
      // uncomment below and update the code to test the property cleanValue
      //var instance = new NucoroApi.BasePortfolioTypeRestrictions();
      //expect(instance).to.be();
    });

  });

}));