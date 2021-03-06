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
    instance = new NucoroApi.Tos();
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

  describe('Tos', function() {
    it('should create an instance of Tos', function() {
      // uncomment below and update the code to test Tos
      //var instance = new NucoroApi.Tos();
      //expect(instance).to.be.a(NucoroApi.Tos);
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new NucoroApi.Tos();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new NucoroApi.Tos();
      //expect(instance).to.be();
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instance = new NucoroApi.Tos();
      //expect(instance).to.be();
    });

    it('should have the property published (base name: "published")', function() {
      // uncomment below and update the code to test the property published
      //var instance = new NucoroApi.Tos();
      //expect(instance).to.be();
    });

    it('should have the property previousTosUuid (base name: "previous_tos_uuid")', function() {
      // uncomment below and update the code to test the property previousTosUuid
      //var instance = new NucoroApi.Tos();
      //expect(instance).to.be();
    });

    it('should have the property nextTosUuid (base name: "next_tos_uuid")', function() {
      // uncomment below and update the code to test the property nextTosUuid
      //var instance = new NucoroApi.Tos();
      //expect(instance).to.be();
    });

  });

}));
