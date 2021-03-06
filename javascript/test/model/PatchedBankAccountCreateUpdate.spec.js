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
    instance = new NucoroApi.PatchedBankAccountCreateUpdate();
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

  describe('PatchedBankAccountCreateUpdate', function() {
    it('should create an instance of PatchedBankAccountCreateUpdate', function() {
      // uncomment below and update the code to test PatchedBankAccountCreateUpdate
      //var instance = new NucoroApi.PatchedBankAccountCreateUpdate();
      //expect(instance).to.be.a(NucoroApi.PatchedBankAccountCreateUpdate);
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new NucoroApi.PatchedBankAccountCreateUpdate();
      //expect(instance).to.be();
    });

    it('should have the property accountNumber (base name: "account_number")', function() {
      // uncomment below and update the code to test the property accountNumber
      //var instance = new NucoroApi.PatchedBankAccountCreateUpdate();
      //expect(instance).to.be();
    });

    it('should have the property accountSortCode (base name: "account_sort_code")', function() {
      // uncomment below and update the code to test the property accountSortCode
      //var instance = new NucoroApi.PatchedBankAccountCreateUpdate();
      //expect(instance).to.be();
    });

    it('should have the property accountHolderName (base name: "account_holder_name")', function() {
      // uncomment below and update the code to test the property accountHolderName
      //var instance = new NucoroApi.PatchedBankAccountCreateUpdate();
      //expect(instance).to.be();
    });

    it('should have the property joint (base name: "joint")', function() {
      // uncomment below and update the code to test the property joint
      //var instance = new NucoroApi.PatchedBankAccountCreateUpdate();
      //expect(instance).to.be();
    });

    it('should have the property bankName (base name: "bank_name")', function() {
      // uncomment below and update the code to test the property bankName
      //var instance = new NucoroApi.PatchedBankAccountCreateUpdate();
      //expect(instance).to.be();
    });

    it('should have the property iban (base name: "iban")', function() {
      // uncomment below and update the code to test the property iban
      //var instance = new NucoroApi.PatchedBankAccountCreateUpdate();
      //expect(instance).to.be();
    });

    it('should have the property swiftCode (base name: "swift_code")', function() {
      // uncomment below and update the code to test the property swiftCode
      //var instance = new NucoroApi.PatchedBankAccountCreateUpdate();
      //expect(instance).to.be();
    });

  });

}));
