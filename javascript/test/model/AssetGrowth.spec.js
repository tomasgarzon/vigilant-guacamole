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
    instance = new NucoroApi.AssetGrowth();
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

  describe('AssetGrowth', function() {
    it('should create an instance of AssetGrowth', function() {
      // uncomment below and update the code to test AssetGrowth
      //var instance = new NucoroApi.AssetGrowth();
      //expect(instance).to.be.a(NucoroApi.AssetGrowth);
    });

    it('should have the property year (base name: "year")', function() {
      // uncomment below and update the code to test the property year
      //var instance = new NucoroApi.AssetGrowth();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new NucoroApi.AssetGrowth();
      //expect(instance).to.be();
    });

  });

}));