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
    instance = new NucoroApi.InvestorFee();
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

  describe('InvestorFee', function() {
    it('should create an instance of InvestorFee', function() {
      // uncomment below and update the code to test InvestorFee
      //var instance = new NucoroApi.InvestorFee();
      //expect(instance).to.be.a(NucoroApi.InvestorFee);
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new NucoroApi.InvestorFee();
      //expect(instance).to.be();
    });

    it('should have the property valueUnit (base name: "value_unit")', function() {
      // uncomment below and update the code to test the property valueUnit
      //var instance = new NucoroApi.InvestorFee();
      //expect(instance).to.be();
    });

    it('should have the property feeType (base name: "fee_type")', function() {
      // uncomment below and update the code to test the property feeType
      //var instance = new NucoroApi.InvestorFee();
      //expect(instance).to.be();
    });

    it('should have the property concept (base name: "concept")', function() {
      // uncomment below and update the code to test the property concept
      //var instance = new NucoroApi.InvestorFee();
      //expect(instance).to.be();
    });

    it('should have the property dateFrom (base name: "date_from")', function() {
      // uncomment below and update the code to test the property dateFrom
      //var instance = new NucoroApi.InvestorFee();
      //expect(instance).to.be();
    });

    it('should have the property dateTo (base name: "date_to")', function() {
      // uncomment below and update the code to test the property dateTo
      //var instance = new NucoroApi.InvestorFee();
      //expect(instance).to.be();
    });

    it('should have the property amountFrom (base name: "amount_from")', function() {
      // uncomment below and update the code to test the property amountFrom
      //var instance = new NucoroApi.InvestorFee();
      //expect(instance).to.be();
    });

    it('should have the property amountTo (base name: "amount_to")', function() {
      // uncomment below and update the code to test the property amountTo
      //var instance = new NucoroApi.InvestorFee();
      //expect(instance).to.be();
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new NucoroApi.InvestorFee();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new NucoroApi.InvestorFee();
      //expect(instance).to.be();
    });

    it('should have the property updated (base name: "updated")', function() {
      // uncomment below and update the code to test the property updated
      //var instance = new NucoroApi.InvestorFee();
      //expect(instance).to.be();
    });

  });

}));
