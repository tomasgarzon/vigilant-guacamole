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
    instance = new NucoroApi.RelatedAssetSerializerWithAssetCategories();
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

  describe('RelatedAssetSerializerWithAssetCategories', function() {
    it('should create an instance of RelatedAssetSerializerWithAssetCategories', function() {
      // uncomment below and update the code to test RelatedAssetSerializerWithAssetCategories
      //var instance = new NucoroApi.RelatedAssetSerializerWithAssetCategories();
      //expect(instance).to.be.a(NucoroApi.RelatedAssetSerializerWithAssetCategories);
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new NucoroApi.RelatedAssetSerializerWithAssetCategories();
      //expect(instance).to.be();
    });

    it('should have the property market (base name: "market")', function() {
      // uncomment below and update the code to test the property market
      //var instance = new NucoroApi.RelatedAssetSerializerWithAssetCategories();
      //expect(instance).to.be();
    });

    it('should have the property isin (base name: "isin")', function() {
      // uncomment below and update the code to test the property isin
      //var instance = new NucoroApi.RelatedAssetSerializerWithAssetCategories();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new NucoroApi.RelatedAssetSerializerWithAssetCategories();
      //expect(instance).to.be();
    });

    it('should have the property ticker (base name: "ticker")', function() {
      // uncomment below and update the code to test the property ticker
      //var instance = new NucoroApi.RelatedAssetSerializerWithAssetCategories();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new NucoroApi.RelatedAssetSerializerWithAssetCategories();
      //expect(instance).to.be();
    });

    it('should have the property extraData (base name: "extra_data")', function() {
      // uncomment below and update the code to test the property extraData
      //var instance = new NucoroApi.RelatedAssetSerializerWithAssetCategories();
      //expect(instance).to.be();
    });

    it('should have the property categories (base name: "categories")', function() {
      // uncomment below and update the code to test the property categories
      //var instance = new NucoroApi.RelatedAssetSerializerWithAssetCategories();
      //expect(instance).to.be();
    });

  });

}));
