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
    instance = new NucoroApi.ClientDetail();
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

  describe('ClientDetail', function() {
    it('should create an instance of ClientDetail', function() {
      // uncomment below and update the code to test ClientDetail
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be.a(NucoroApi.ClientDetail);
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property birthdate (base name: "birthdate")', function() {
      // uncomment below and update the code to test the property birthdate
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property tosConsent (base name: "tos_consent")', function() {
      // uncomment below and update the code to test the property tosConsent
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property marketingConsent (base name: "marketing_consent")', function() {
      // uncomment below and update the code to test the property marketingConsent
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property dataConsent (base name: "data_consent")', function() {
      // uncomment below and update the code to test the property dataConsent
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property tosConsentDate (base name: "tos_consent_date")', function() {
      // uncomment below and update the code to test the property tosConsentDate
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property taxInformation (base name: "tax_information")', function() {
      // uncomment below and update the code to test the property taxInformation
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property countryBirth (base name: "country_birth")', function() {
      // uncomment below and update the code to test the property countryBirth
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property lastLogin (base name: "last_login")', function() {
      // uncomment below and update the code to test the property lastLogin
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property referredBy (base name: "referred_by")', function() {
      // uncomment below and update the code to test the property referredBy
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property successfulReferrals (base name: "successful_referrals")', function() {
      // uncomment below and update the code to test the property successfulReferrals
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property kycVerified (base name: "kyc_verified")', function() {
      // uncomment below and update the code to test the property kycVerified
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property isVerified (base name: "is_verified")', function() {
      // uncomment below and update the code to test the property isVerified
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property feeSegments (base name: "fee_segments")', function() {
      // uncomment below and update the code to test the property feeSegments
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property extraData (base name: "extra_data")', function() {
      // uncomment below and update the code to test the property extraData
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property portfolios (base name: "portfolios")', function() {
      // uncomment below and update the code to test the property portfolios
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property onboardedBy (base name: "onboarded_by")', function() {
      // uncomment below and update the code to test the property onboardedBy
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property riskLevel (base name: "risk_level")', function() {
      // uncomment below and update the code to test the property riskLevel
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property onboardingToken (base name: "onboarding_token")', function() {
      // uncomment below and update the code to test the property onboardingToken
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property updated (base name: "updated")', function() {
      // uncomment below and update the code to test the property updated
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property comments (base name: "comments")', function() {
      // uncomment below and update the code to test the property comments
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property emailVerified (base name: "email_verified")', function() {
      // uncomment below and update the code to test the property emailVerified
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property emailVerifyLastRequest (base name: "email_verify_last_request")', function() {
      // uncomment below and update the code to test the property emailVerifyLastRequest
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "first_name")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property middleName (base name: "middle_name")', function() {
      // uncomment below and update the code to test the property middleName
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "last_name")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property gender (base name: "gender")', function() {
      // uncomment below and update the code to test the property gender
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property maritalStatus (base name: "marital_status")', function() {
      // uncomment below and update the code to test the property maritalStatus
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumber (base name: "phone_number")', function() {
      // uncomment below and update the code to test the property phoneNumber
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumberVerified (base name: "phone_number_verified")', function() {
      // uncomment below and update the code to test the property phoneNumberVerified
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property language (base name: "language")', function() {
      // uncomment below and update the code to test the property language
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property employmentStatus (base name: "employment_status")', function() {
      // uncomment below and update the code to test the property employmentStatus
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property profession (base name: "profession")', function() {
      // uncomment below and update the code to test the property profession
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property referralCode (base name: "referral_code")', function() {
      // uncomment below and update the code to test the property referralCode
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property activated (base name: "activated")', function() {
      // uncomment below and update the code to test the property activated
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property utmSource (base name: "utm_source")', function() {
      // uncomment below and update the code to test the property utmSource
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property utmMedium (base name: "utm_medium")', function() {
      // uncomment below and update the code to test the property utmMedium
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property utmCampaign (base name: "utm_campaign")', function() {
      // uncomment below and update the code to test the property utmCampaign
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property utmTerm (base name: "utm_term")', function() {
      // uncomment below and update the code to test the property utmTerm
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property utmContent (base name: "utm_content")', function() {
      // uncomment below and update the code to test the property utmContent
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property marketingConsentDate (base name: "marketing_consent_date")', function() {
      // uncomment below and update the code to test the property marketingConsentDate
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

    it('should have the property dataConsentDate (base name: "data_consent_date")', function() {
      // uncomment below and update the code to test the property dataConsentDate
      //var instance = new NucoroApi.ClientDetail();
      //expect(instance).to.be();
    });

  });

}));
