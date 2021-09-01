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
    instance = new NucoroApi.VerificationDocument();
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

  describe('VerificationDocument', function() {
    it('should create an instance of VerificationDocument', function() {
      // uncomment below and update the code to test VerificationDocument
      //var instance = new NucoroApi.VerificationDocument();
      //expect(instance).to.be.a(NucoroApi.VerificationDocument);
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new NucoroApi.VerificationDocument();
      //expect(instance).to.be();
    });

    it('should have the property documentType (base name: "document_type")', function() {
      // uncomment below and update the code to test the property documentType
      //var instance = new NucoroApi.VerificationDocument();
      //expect(instance).to.be();
    });

    it('should have the property documentFront (base name: "document_front")', function() {
      // uncomment below and update the code to test the property documentFront
      //var instance = new NucoroApi.VerificationDocument();
      //expect(instance).to.be();
    });

    it('should have the property documentBack (base name: "document_back")', function() {
      // uncomment below and update the code to test the property documentBack
      //var instance = new NucoroApi.VerificationDocument();
      //expect(instance).to.be();
    });

  });

}));
