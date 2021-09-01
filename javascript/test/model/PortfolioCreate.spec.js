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
    instance = new NucoroApi.PortfolioCreate();
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

  describe('PortfolioCreate', function() {
    it('should create an instance of PortfolioCreate', function() {
      // uncomment below and update the code to test PortfolioCreate
      //var instance = new NucoroApi.PortfolioCreate();
      //expect(instance).to.be.a(NucoroApi.PortfolioCreate);
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new NucoroApi.PortfolioCreate();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new NucoroApi.PortfolioCreate();
      //expect(instance).to.be();
    });

    it('should have the property portfolioType (base name: "portfolio_type")', function() {
      // uncomment below and update the code to test the property portfolioType
      //var instance = new NucoroApi.PortfolioCreate();
      //expect(instance).to.be();
    });

    it('should have the property riskLevel (base name: "risk_level")', function() {
      // uncomment below and update the code to test the property riskLevel
      //var instance = new NucoroApi.PortfolioCreate();
      //expect(instance).to.be();
    });

    it('should have the property timeHorizon (base name: "time_horizon")', function() {
      // uncomment below and update the code to test the property timeHorizon
      //var instance = new NucoroApi.PortfolioCreate();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new NucoroApi.PortfolioCreate();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new NucoroApi.PortfolioCreate();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new NucoroApi.PortfolioCreate();
      //expect(instance).to.be();
    });

    it('should have the property activated (base name: "activated")', function() {
      // uncomment below and update the code to test the property activated
      //var instance = new NucoroApi.PortfolioCreate();
      //expect(instance).to.be();
    });

    it('should have the property advisor (base name: "advisor")', function() {
      // uncomment below and update the code to test the property advisor
      //var instance = new NucoroApi.PortfolioCreate();
      //expect(instance).to.be();
    });

    it('should have the property adviceEngine (base name: "advice_engine")', function() {
      // uncomment below and update the code to test the property adviceEngine
      //var instance = new NucoroApi.PortfolioCreate();
      //expect(instance).to.be();
    });

    it('should have the property extraData (base name: "extra_data")', function() {
      // uncomment below and update the code to test the property extraData
      //var instance = new NucoroApi.PortfolioCreate();
      //expect(instance).to.be();
    });

    it('should have the property client (base name: "client")', function() {
      // uncomment below and update the code to test the property client
      //var instance = new NucoroApi.PortfolioCreate();
      //expect(instance).to.be();
    });

  });

}));
