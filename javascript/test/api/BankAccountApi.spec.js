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
    instance = new NucoroApi.BankAccountApi();
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

  describe('BankAccountApi', function() {
    describe('clientBankAccountCreate', function() {
      it('should call clientBankAccountCreate successfully', function(done) {
        //uncomment below and update the code to test clientBankAccountCreate
        //instance.clientBankAccountCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientBankAccountDelete', function() {
      it('should call clientBankAccountDelete successfully', function(done) {
        //uncomment below and update the code to test clientBankAccountDelete
        //instance.clientBankAccountDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientBankAccountPartialUpdate', function() {
      it('should call clientBankAccountPartialUpdate successfully', function(done) {
        //uncomment below and update the code to test clientBankAccountPartialUpdate
        //instance.clientBankAccountPartialUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientBankAccountRetrieve', function() {
      it('should call clientBankAccountRetrieve successfully', function(done) {
        //uncomment below and update the code to test clientBankAccountRetrieve
        //instance.clientBankAccountRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientBankAccountUpdate', function() {
      it('should call clientBankAccountUpdate successfully', function(done) {
        //uncomment below and update the code to test clientBankAccountUpdate
        //instance.clientBankAccountUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientBankAccountsList', function() {
      it('should call clientBankAccountsList successfully', function(done) {
        //uncomment below and update the code to test clientBankAccountsList
        //instance.clientBankAccountsList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
