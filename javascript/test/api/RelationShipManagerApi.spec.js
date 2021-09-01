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
    instance = new NucoroApi.RelationShipManagerApi();
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

  describe('RelationShipManagerApi', function() {
    describe('apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve', function() {
      it('should call apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve successfully', function(done) {
        //uncomment below and update the code to test apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve
        //instance.apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve', function() {
      it('should call apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve successfully', function(done) {
        //uncomment below and update the code to test apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve
        //instance.apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve', function() {
      it('should call apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve successfully', function(done) {
        //uncomment below and update the code to test apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve
        //instance.apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve', function() {
      it('should call apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve successfully', function(done) {
        //uncomment below and update the code to test apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve
        //instance.apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2RelationshipManagerAnalyticsAumRetrieve', function() {
      it('should call apiV2RelationshipManagerAnalyticsAumRetrieve successfully', function(done) {
        //uncomment below and update the code to test apiV2RelationshipManagerAnalyticsAumRetrieve
        //instance.apiV2RelationshipManagerAnalyticsAumRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2RelationshipManagerAnalyticsClientByRiskRetrieve', function() {
      it('should call apiV2RelationshipManagerAnalyticsClientByRiskRetrieve successfully', function(done) {
        //uncomment below and update the code to test apiV2RelationshipManagerAnalyticsClientByRiskRetrieve
        //instance.apiV2RelationshipManagerAnalyticsClientByRiskRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2RelationshipManagerAnalyticsClientByStatusRetrieve', function() {
      it('should call apiV2RelationshipManagerAnalyticsClientByStatusRetrieve successfully', function(done) {
        //uncomment below and update the code to test apiV2RelationshipManagerAnalyticsClientByStatusRetrieve
        //instance.apiV2RelationshipManagerAnalyticsClientByStatusRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2RelationshipManagerAnalyticsClientRankingRetrieve', function() {
      it('should call apiV2RelationshipManagerAnalyticsClientRankingRetrieve successfully', function(done) {
        //uncomment below and update the code to test apiV2RelationshipManagerAnalyticsClientRankingRetrieve
        //instance.apiV2RelationshipManagerAnalyticsClientRankingRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve', function() {
      it('should call apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve successfully', function(done) {
        //uncomment below and update the code to test apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve
        //instance.apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve', function() {
      it('should call apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve successfully', function(done) {
        //uncomment below and update the code to test apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve
        //instance.apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve', function() {
      it('should call apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve successfully', function(done) {
        //uncomment below and update the code to test apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve
        //instance.apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2RelationshipManagerMeRetrieve', function() {
      it('should call apiV2RelationshipManagerMeRetrieve successfully', function(done) {
        //uncomment below and update the code to test apiV2RelationshipManagerMeRetrieve
        //instance.apiV2RelationshipManagerMeRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2RelationshipManagerRetrieve', function() {
      it('should call apiV2RelationshipManagerRetrieve successfully', function(done) {
        //uncomment below and update the code to test apiV2RelationshipManagerRetrieve
        //instance.apiV2RelationshipManagerRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));