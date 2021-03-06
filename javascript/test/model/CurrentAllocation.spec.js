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
    instance = new NucoroApi.CurrentAllocation();
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

  describe('CurrentAllocation', function() {
    it('should create an instance of CurrentAllocation', function() {
      // uncomment below and update the code to test CurrentAllocation
      //var instance = new NucoroApi.CurrentAllocation();
      //expect(instance).to.be.a(NucoroApi.CurrentAllocation);
    });

    it('should have the property cashActive (base name: "cash_active")', function() {
      // uncomment below and update the code to test the property cashActive
      //var instance = new NucoroApi.CurrentAllocation();
      //expect(instance).to.be();
    });

    it('should have the property balance (base name: "balance")', function() {
      // uncomment below and update the code to test the property balance
      //var instance = new NucoroApi.CurrentAllocation();
      //expect(instance).to.be();
    });

    it('should have the property invested (base name: "invested")', function() {
      // uncomment below and update the code to test the property invested
      //var instance = new NucoroApi.CurrentAllocation();
      //expect(instance).to.be();
    });

    it('should have the property earnings (base name: "earnings")', function() {
      // uncomment below and update the code to test the property earnings
      //var instance = new NucoroApi.CurrentAllocation();
      //expect(instance).to.be();
    });

    it('should have the property positions (base name: "positions")', function() {
      // uncomment below and update the code to test the property positions
      //var instance = new NucoroApi.CurrentAllocation();
      //expect(instance).to.be();
    });

    it('should have the property valuationDatetime (base name: "valuation_datetime")', function() {
      // uncomment below and update the code to test the property valuationDatetime
      //var instance = new NucoroApi.CurrentAllocation();
      //expect(instance).to.be();
    });

    it('should have the property performance (base name: "performance")', function() {
      // uncomment below and update the code to test the property performance
      //var instance = new NucoroApi.CurrentAllocation();
      //expect(instance).to.be();
    });

    it('should have the property tradeTotal (base name: "trade_total")', function() {
      // uncomment below and update the code to test the property tradeTotal
      //var instance = new NucoroApi.CurrentAllocation();
      //expect(instance).to.be();
    });

    it('should have the property cashAvailable (base name: "cash_available")', function() {
      // uncomment below and update the code to test the property cashAvailable
      //var instance = new NucoroApi.CurrentAllocation();
      //expect(instance).to.be();
    });

  });

}));
