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
    instance = new NucoroApi.ClientApi();
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

  describe('ClientApi', function() {
    describe('clientAddressCreate', function() {
      it('should call clientAddressCreate successfully', function(done) {
        //uncomment below and update the code to test clientAddressCreate
        //instance.clientAddressCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientAddressDelete', function() {
      it('should call clientAddressDelete successfully', function(done) {
        //uncomment below and update the code to test clientAddressDelete
        //instance.clientAddressDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientAddressPartialUpdate', function() {
      it('should call clientAddressPartialUpdate successfully', function(done) {
        //uncomment below and update the code to test clientAddressPartialUpdate
        //instance.clientAddressPartialUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientAddressRetrieve', function() {
      it('should call clientAddressRetrieve successfully', function(done) {
        //uncomment below and update the code to test clientAddressRetrieve
        //instance.clientAddressRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientAddressUpdate', function() {
      it('should call clientAddressUpdate successfully', function(done) {
        //uncomment below and update the code to test clientAddressUpdate
        //instance.clientAddressUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientAddressesList', function() {
      it('should call clientAddressesList successfully', function(done) {
        //uncomment below and update the code to test clientAddressesList
        //instance.clientAddressesList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
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
    describe('clientCompleteOnboarding', function() {
      it('should call clientCompleteOnboarding successfully', function(done) {
        //uncomment below and update the code to test clientCompleteOnboarding
        //instance.clientCompleteOnboarding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientCreate', function() {
      it('should call clientCreate successfully', function(done) {
        //uncomment below and update the code to test clientCreate
        //instance.clientCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientDocumentCreate', function() {
      it('should call clientDocumentCreate successfully', function(done) {
        //uncomment below and update the code to test clientDocumentCreate
        //instance.clientDocumentCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientDocumentDelete', function() {
      it('should call clientDocumentDelete successfully', function(done) {
        //uncomment below and update the code to test clientDocumentDelete
        //instance.clientDocumentDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientDocumentList', function() {
      it('should call clientDocumentList successfully', function(done) {
        //uncomment below and update the code to test clientDocumentList
        //instance.clientDocumentList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientDocumentRetrieve', function() {
      it('should call clientDocumentRetrieve successfully', function(done) {
        //uncomment below and update the code to test clientDocumentRetrieve
        //instance.clientDocumentRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientList', function() {
      it('should call clientList successfully', function(done) {
        //uncomment below and update the code to test clientList
        //instance.clientList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientNationalityCreate', function() {
      it('should call clientNationalityCreate successfully', function(done) {
        //uncomment below and update the code to test clientNationalityCreate
        //instance.clientNationalityCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientNationlitiesList', function() {
      it('should call clientNationlitiesList successfully', function(done) {
        //uncomment below and update the code to test clientNationlitiesList
        //instance.clientNationlitiesList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientNationlityDelete', function() {
      it('should call clientNationlityDelete successfully', function(done) {
        //uncomment below and update the code to test clientNationlityDelete
        //instance.clientNationlityDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientNationlityPartialUpdate', function() {
      it('should call clientNationlityPartialUpdate successfully', function(done) {
        //uncomment below and update the code to test clientNationlityPartialUpdate
        //instance.clientNationlityPartialUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientNationlityRetrieve', function() {
      it('should call clientNationlityRetrieve successfully', function(done) {
        //uncomment below and update the code to test clientNationlityRetrieve
        //instance.clientNationlityRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientNationlityUpdate', function() {
      it('should call clientNationlityUpdate successfully', function(done) {
        //uncomment below and update the code to test clientNationlityUpdate
        //instance.clientNationlityUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPartialUpdate', function() {
      it('should call clientPartialUpdate successfully', function(done) {
        //uncomment below and update the code to test clientPartialUpdate
        //instance.clientPartialUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientRetrieve', function() {
      it('should call clientRetrieve successfully', function(done) {
        //uncomment below and update the code to test clientRetrieve
        //instance.clientRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientRiskAssessmentCreate', function() {
      it('should call clientRiskAssessmentCreate successfully', function(done) {
        //uncomment below and update the code to test clientRiskAssessmentCreate
        //instance.clientRiskAssessmentCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientRiskAssessmentDelete', function() {
      it('should call clientRiskAssessmentDelete successfully', function(done) {
        //uncomment below and update the code to test clientRiskAssessmentDelete
        //instance.clientRiskAssessmentDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientRiskAssessmentList', function() {
      it('should call clientRiskAssessmentList successfully', function(done) {
        //uncomment below and update the code to test clientRiskAssessmentList
        //instance.clientRiskAssessmentList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientRiskAssessmentPartialUpdate', function() {
      it('should call clientRiskAssessmentPartialUpdate successfully', function(done) {
        //uncomment below and update the code to test clientRiskAssessmentPartialUpdate
        //instance.clientRiskAssessmentPartialUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientRiskAssessmentRetrieve', function() {
      it('should call clientRiskAssessmentRetrieve successfully', function(done) {
        //uncomment below and update the code to test clientRiskAssessmentRetrieve
        //instance.clientRiskAssessmentRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientTWRRPerformance', function() {
      it('should call clientTWRRPerformance successfully', function(done) {
        //uncomment below and update the code to test clientTWRRPerformance
        //instance.clientTWRRPerformance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientTaxInformationCreate', function() {
      it('should call clientTaxInformationCreate successfully', function(done) {
        //uncomment below and update the code to test clientTaxInformationCreate
        //instance.clientTaxInformationCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientTaxInformationDelete', function() {
      it('should call clientTaxInformationDelete successfully', function(done) {
        //uncomment below and update the code to test clientTaxInformationDelete
        //instance.clientTaxInformationDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientTaxInformationList', function() {
      it('should call clientTaxInformationList successfully', function(done) {
        //uncomment below and update the code to test clientTaxInformationList
        //instance.clientTaxInformationList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientTaxInformationPartialUpdate', function() {
      it('should call clientTaxInformationPartialUpdate successfully', function(done) {
        //uncomment below and update the code to test clientTaxInformationPartialUpdate
        //instance.clientTaxInformationPartialUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientTaxInformationRetrieve', function() {
      it('should call clientTaxInformationRetrieve successfully', function(done) {
        //uncomment below and update the code to test clientTaxInformationRetrieve
        //instance.clientTaxInformationRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientTaxInformationUpdate', function() {
      it('should call clientTaxInformationUpdate successfully', function(done) {
        //uncomment below and update the code to test clientTaxInformationUpdate
        //instance.clientTaxInformationUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientUpdate', function() {
      it('should call clientUpdate successfully', function(done) {
        //uncomment below and update the code to test clientUpdate
        //instance.clientUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientVerificationCreate', function() {
      it('should call clientVerificationCreate successfully', function(done) {
        //uncomment below and update the code to test clientVerificationCreate
        //instance.clientVerificationCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientVerificationDocumentCreate', function() {
      it('should call clientVerificationDocumentCreate successfully', function(done) {
        //uncomment below and update the code to test clientVerificationDocumentCreate
        //instance.clientVerificationDocumentCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientVerificationDocumentDelete', function() {
      it('should call clientVerificationDocumentDelete successfully', function(done) {
        //uncomment below and update the code to test clientVerificationDocumentDelete
        //instance.clientVerificationDocumentDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientVerificationDocumentList', function() {
      it('should call clientVerificationDocumentList successfully', function(done) {
        //uncomment below and update the code to test clientVerificationDocumentList
        //instance.clientVerificationDocumentList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientVerificationDocumentPartialUpdate', function() {
      it('should call clientVerificationDocumentPartialUpdate successfully', function(done) {
        //uncomment below and update the code to test clientVerificationDocumentPartialUpdate
        //instance.clientVerificationDocumentPartialUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientVerificationDocumentRetrieve', function() {
      it('should call clientVerificationDocumentRetrieve successfully', function(done) {
        //uncomment below and update the code to test clientVerificationDocumentRetrieve
        //instance.clientVerificationDocumentRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientVerificationDocumentUpdate', function() {
      it('should call clientVerificationDocumentUpdate successfully', function(done) {
        //uncomment below and update the code to test clientVerificationDocumentUpdate
        //instance.clientVerificationDocumentUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientVerificationList', function() {
      it('should call clientVerificationList successfully', function(done) {
        //uncomment below and update the code to test clientVerificationList
        //instance.clientVerificationList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientVerificationRetrieve', function() {
      it('should call clientVerificationRetrieve successfully', function(done) {
        //uncomment below and update the code to test clientVerificationRetrieve
        //instance.clientVerificationRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
