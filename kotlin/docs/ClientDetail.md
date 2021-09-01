
# ClientDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **kotlin.String** |  | 
**tosConsent** | **kotlin.Boolean** |  | 
**marketingConsent** | **kotlin.Boolean** |  | 
**dataConsent** | **kotlin.Boolean** |  | 
**tosConsentDate** | [**java.time.LocalDate**](java.time.LocalDate.md) |  | 
**taxInformation** | **kotlin.collections.List&lt;kotlin.String&gt;** |  |  [readonly]
**countryBirth** | [**CountryField**](CountryField.md) |  | 
**lastLogin** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) |  |  [readonly]
**referredBy** | **kotlin.String** |  | 
**successfulReferrals** | **kotlin.Int** |  |  [readonly]
**kycVerified** | **kotlin.Boolean** |  |  [readonly]
**isVerified** | **kotlin.Boolean** |  |  [readonly]
**feeSegments** | **kotlin.collections.List&lt;kotlin.String&gt;** |  |  [readonly]
**extraData** | [**kotlin.collections.Map&lt;kotlin.String, kotlin.Any&gt;**](kotlin.Any.md) |  | 
**portfolios** | **kotlin.collections.List&lt;kotlin.String&gt;** |  |  [readonly]
**riskLevel** | **kotlin.Int** |  |  [readonly]
**onboardingToken** | **kotlin.String** |  |  [readonly]
**uuid** | [**java.util.UUID**](java.util.UUID.md) |  |  [readonly]
**created** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) |  |  [readonly]
**updated** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) |  |  [readonly]
**status** | [**StatusB65Enum**](StatusB65Enum.md) |  |  [readonly]
**language** | **kotlin.String** |  | 
**marketingConsentDate** | [**java.time.LocalDate**](java.time.LocalDate.md) |  |  [readonly]
**dataConsentDate** | [**java.time.LocalDate**](java.time.LocalDate.md) |  |  [readonly]
**birthdate** | [**java.time.LocalDate**](java.time.LocalDate.md) |  |  [optional]
**onboardedBy** | **kotlin.String** |  |  [optional]
**comments** | **kotlin.String** |  |  [optional]
**emailVerified** | **kotlin.Boolean** |  |  [optional]
**emailVerifyLastRequest** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) |  |  [optional]
**title** | [**OneOfLessThanTitleEnumCommaBlankEnumCommaNullEnumGreaterThan**](OneOfLessThanTitleEnumCommaBlankEnumCommaNullEnumGreaterThan.md) |  |  [optional]
**firstName** | **kotlin.String** |  |  [optional]
**middleName** | **kotlin.String** |  |  [optional]
**lastName** | **kotlin.String** |  |  [optional]
**gender** | [**OneOfLessThanGenderEnumCommaBlankEnumCommaNullEnumGreaterThan**](OneOfLessThanGenderEnumCommaBlankEnumCommaNullEnumGreaterThan.md) |  |  [optional]
**maritalStatus** | [**OneOfLessThanMaritalStatusEnumCommaBlankEnumCommaNullEnumGreaterThan**](OneOfLessThanMaritalStatusEnumCommaBlankEnumCommaNullEnumGreaterThan.md) |  |  [optional]
**phoneNumber** | **kotlin.String** |  |  [optional]
**phoneNumberVerified** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) |  |  [optional]
**employmentStatus** | [**OneOfLessThanEmploymentStatusEnumCommaBlankEnumCommaNullEnumGreaterThan**](OneOfLessThanEmploymentStatusEnumCommaBlankEnumCommaNullEnumGreaterThan.md) |  |  [optional]
**profession** | **kotlin.String** |  |  [optional]
**referralCode** | **kotlin.String** |  |  [optional]
**activated** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) |  |  [optional]
**utmSource** | **kotlin.String** |  |  [optional]
**utmMedium** | **kotlin.String** |  |  [optional]
**utmCampaign** | **kotlin.String** |  |  [optional]
**utmTerm** | **kotlin.String** |  |  [optional]
**utmContent** | **kotlin.String** |  |  [optional]



