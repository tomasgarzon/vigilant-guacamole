

# ApplicationClientUpdate

A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** |  | 
**birthdate** | **LocalDate** |  |  [optional]
**tosConsent** | **Boolean** |  |  [optional]
**marketingConsent** | **Boolean** |  |  [optional]
**dataConsent** | **Boolean** |  |  [optional]
**tosConsentDate** | **LocalDate** |  |  [readonly]
**taxInformation** | **List&lt;String&gt;** |  |  [readonly]
**countryBirth** | [**CountryField**](CountryField.md) |  | 
**lastLogin** | **OffsetDateTime** |  |  [readonly]
**referredBy** | **String** |  | 
**successfulReferrals** | **Integer** |  |  [readonly]
**kycVerified** | **Boolean** |  |  [readonly]
**isVerified** | **Boolean** |  |  [readonly]
**feeSegments** | **List&lt;String&gt;** |  |  [readonly]
**extraData** | **Map&lt;String, Object&gt;** |  |  [optional]
**portfolios** | **List&lt;String&gt;** |  |  [readonly]
**onboardedBy** | **String** |  |  [optional]
**riskLevel** | **Integer** |  |  [readonly]
**onboardingToken** | **String** |  |  [readonly]
**password** | **String** |  |  [optional]
**emailVerifiedLastRequest** | **OffsetDateTime** |  |  [optional]
**uuid** | **UUID** |  |  [readonly]
**created** | **OffsetDateTime** |  |  [readonly]
**updated** | **OffsetDateTime** |  |  [readonly]
**comments** | **String** |  |  [optional]
**status** | [**StatusB65Enum**](StatusB65Enum.md) |  |  [readonly]
**emailVerified** | **Boolean** |  |  [optional]
**emailVerifyLastRequest** | **OffsetDateTime** |  |  [optional]
**title** | [**OneOfTitleEnumBlankEnumNullEnum**](OneOfTitleEnumBlankEnumNullEnum.md) |  |  [optional]
**firstName** | **String** |  |  [optional]
**middleName** | **String** |  |  [optional]
**lastName** | **String** |  |  [optional]
**gender** | [**OneOfGenderEnumBlankEnumNullEnum**](OneOfGenderEnumBlankEnumNullEnum.md) |  |  [optional]
**maritalStatus** | [**OneOfMaritalStatusEnumBlankEnumNullEnum**](OneOfMaritalStatusEnumBlankEnumNullEnum.md) |  |  [optional]
**phoneNumber** | **String** |  |  [optional]
**phoneNumberVerified** | **OffsetDateTime** |  |  [optional]
**language** | **String** |  | 
**employmentStatus** | [**OneOfEmploymentStatusEnumBlankEnumNullEnum**](OneOfEmploymentStatusEnumBlankEnumNullEnum.md) |  |  [optional]
**profession** | **String** |  |  [optional]
**referralCode** | **String** |  |  [optional]
**activated** | **OffsetDateTime** |  |  [optional]
**utmSource** | **String** |  |  [optional]
**utmMedium** | **String** |  |  [optional]
**utmCampaign** | **String** |  |  [optional]
**utmTerm** | **String** |  |  [optional]
**utmContent** | **String** |  |  [optional]
**marketingConsentDate** | **LocalDate** |  |  [readonly]
**dataConsentDate** | **LocalDate** |  |  [readonly]



