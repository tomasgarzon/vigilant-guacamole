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
    instance = new NucoroApi.AccessLog();
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

  describe('AccessLog', function() {
    it('should create an instance of AccessLog', function() {
      // uncomment below and update the code to test AccessLog
      //var instance = new NucoroApi.AccessLog();
      //expect(instance).to.be.a(NucoroApi.AccessLog);
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new NucoroApi.AccessLog();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new NucoroApi.AccessLog();
      //expect(instance).to.be();
    });

    it('should have the property userAgent (base name: "user_agent")', function() {
      // uncomment below and update the code to test the property userAgent
      //var instance = new NucoroApi.AccessLog();
      //expect(instance).to.be();
    });

    it('should have the property ipAddress (base name: "ip_address")', function() {
      // uncomment below and update the code to test the property ipAddress
      //var instance = new NucoroApi.AccessLog();
      //expect(instance).to.be();
    });

    it('should have the property browser (base name: "browser")', function() {
      // uncomment below and update the code to test the property browser
      //var instance = new NucoroApi.AccessLog();
      //expect(instance).to.be();
    });

    it('should have the property browserVersion (base name: "browser_version")', function() {
      // uncomment below and update the code to test the property browserVersion
      //var instance = new NucoroApi.AccessLog();
      //expect(instance).to.be();
    });

    it('should have the property deviceBrand (base name: "device_brand")', function() {
      // uncomment below and update the code to test the property deviceBrand
      //var instance = new NucoroApi.AccessLog();
      //expect(instance).to.be();
    });

    it('should have the property deviceModel (base name: "device_model")', function() {
      // uncomment below and update the code to test the property deviceModel
      //var instance = new NucoroApi.AccessLog();
      //expect(instance).to.be();
    });

    it('should have the property os (base name: "os")', function() {
      // uncomment below and update the code to test the property os
      //var instance = new NucoroApi.AccessLog();
      //expect(instance).to.be();
    });

    it('should have the property osVersion (base name: "os_version")', function() {
      // uncomment below and update the code to test the property osVersion
      //var instance = new NucoroApi.AccessLog();
      //expect(instance).to.be();
    });

    it('should have the property channel (base name: "channel")', function() {
      // uncomment below and update the code to test the property channel
      //var instance = new NucoroApi.AccessLog();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new NucoroApi.AccessLog();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new NucoroApi.AccessLog();
      //expect(instance).to.be();
    });

  });

}));
