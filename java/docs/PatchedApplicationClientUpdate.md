

# PatchedApplicationClientUpdate

A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** |  |  [optional]
**birthdate** | **LocalDate** |  |  [optional]
**tosConsent** | **Boolean** |  |  [optional]
**marketingConsent** | **Boolean** |  |  [optional]
**dataConsent** | **Boolean** |  |  [optional]
**tosConsentDate** | **LocalDate** |  |  [optional] [readonly]
**taxInformation** | **List&lt;String&gt;** |  |  [optional] [readonly]
**countryBirth** | [**CountryField**](CountryField.md) |  |  [optional]
**lastLogin** | **OffsetDateTime** |  |  [optional] [readonly]
**referredBy** | **String** |  |  [optional]
**successfulReferrals** | **Integer** |  |  [optional] [readonly]
**kycVerified** | **Boolean** |  |  [optional] [readonly]
**isVerified** | **Boolean** |  |  [optional] [readonly]
**feeSegments** | **List&lt;String&gt;** |  |  [optional] [readonly]
**extraData** | **Map&lt;String, Object&gt;** |  |  [optional]
**portfolios** | **List&lt;String&gt;** |  |  [optional] [readonly]
**onboardedBy** | **String** |  |  [optional]
**riskLevel** | **Integer** |  |  [optional] [readonly]
**onboardingToken** | **String** |  |  [optional] [readonly]
**password** | **String** |  |  [optional]
**emailVerifiedLastRequest** | **OffsetDateTime** |  |  [optional]
**uuid** | **UUID** |  |  [optional] [readonly]
**created** | **OffsetDateTime** |  |  [optional] [readonly]
**updated** | **OffsetDateTime** |  |  [optional] [readonly]
**comments** | **String** |  |  [optional]
**status** | [**StatusB65Enum**](StatusB65Enum.md) |  |  [optional] [readonly]
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
**language** | **String** |  |  [optional]
**employmentStatus** | [**OneOfEmploymentStatusEnumBlankEnumNullEnum**](OneOfEmploymentStatusEnumBlankEnumNullEnum.md) |  |  [optional]
**profession** | **String** |  |  [optional]
**referralCode** | **String** |  |  [optional]
**activated** | **OffsetDateTime** |  |  [optional]
**utmSource** | **String** |  |  [optional]
**utmMedium** | **String** |  |  [optional]
**utmCampaign** | **String** |  |  [optional]
**utmTerm** | **String** |  |  [optional]
**utmContent** | **String** |  |  [optional]
**marketingConsentDate** | **LocalDate** |  |  [optional] [readonly]
**dataConsentDate** | **LocalDate** |  |  [optional] [readonly]



