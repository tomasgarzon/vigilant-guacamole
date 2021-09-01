# ApplicationClientUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** |  | 
**birthdate** | **Date** |  | [optional] 
**tosConsent** | **Bool** |  | [optional] 
**marketingConsent** | **Bool** |  | [optional] 
**dataConsent** | **Bool** |  | [optional] 
**tosConsentDate** | **Date** |  | [readonly] 
**taxInformation** | **[String]** |  | [readonly] 
**countryBirth** | [**CountryField**](CountryField.md) |  | 
**lastLogin** | **Date** |  | [readonly] 
**referredBy** | **String** |  | 
**successfulReferrals** | **Int** |  | [readonly] 
**kycVerified** | **Bool** |  | [readonly] 
**isVerified** | **Bool** |  | [readonly] 
**feeSegments** | **[String]** |  | [readonly] 
**extraData** | [String: AnyCodable] |  | [optional] 
**portfolios** | **[String]** |  | [readonly] 
**onboardedBy** | **String** |  | [optional] 
**riskLevel** | **Int** |  | [readonly] 
**onboardingToken** | **String** |  | [readonly] 
**password** | **String** |  | [optional] 
**emailVerifiedLastRequest** | **Date** |  | [optional] 
**uuid** | **UUID** |  | [readonly] 
**created** | **Date** |  | [readonly] 
**updated** | **Date** |  | [readonly] 
**comments** | **String** |  | [optional] 
**status** | [**StatusB65Enum**](StatusB65Enum.md) |  | [readonly] 
**emailVerified** | **Bool** |  | [optional] 
**emailVerifyLastRequest** | **Date** |  | [optional] 
**title** | [**ApplicationClientUpdateTitleOneOf**](ApplicationClientUpdateTitleOneOf.md) |  | [optional] 
**firstName** | **String** |  | [optional] 
**middleName** | **String** |  | [optional] 
**lastName** | **String** |  | [optional] 
**gender** | [**ApplicationClientUpdateGenderOneOf**](ApplicationClientUpdateGenderOneOf.md) |  | [optional] 
**maritalStatus** | [**ApplicationClientUpdateMaritalStatusOneOf**](ApplicationClientUpdateMaritalStatusOneOf.md) |  | [optional] 
**phoneNumber** | **String** |  | [optional] 
**phoneNumberVerified** | **Date** |  | [optional] 
**language** | **String** |  | 
**employmentStatus** | [**ApplicationClientUpdateEmploymentStatusOneOf**](ApplicationClientUpdateEmploymentStatusOneOf.md) |  | [optional] 
**profession** | **String** |  | [optional] 
**referralCode** | **String** |  | [optional] 
**activated** | **Date** |  | [optional] 
**utmSource** | **String** |  | [optional] 
**utmMedium** | **String** |  | [optional] 
**utmCampaign** | **String** |  | [optional] 
**utmTerm** | **String** |  | [optional] 
**utmContent** | **String** |  | [optional] 
**marketingConsentDate** | **Date** |  | [readonly] 
**dataConsentDate** | **Date** |  | [readonly] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


