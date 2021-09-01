

# ClientCreate

A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** |  | 
**birthdate** | **LocalDate** |  |  [optional]
**title** | [**OneOfTitleEnumBlankEnumNullEnum**](OneOfTitleEnumBlankEnumNullEnum.md) |  |  [optional]
**firstName** | **String** |  |  [optional]
**lastName** | **String** |  |  [optional]
**middleName** | **String** |  |  [optional]
**gender** | [**OneOfGenderEnumBlankEnumNullEnum**](OneOfGenderEnumBlankEnumNullEnum.md) |  |  [optional]
**maritalStatus** | [**OneOfMaritalStatusEnumBlankEnumNullEnum**](OneOfMaritalStatusEnumBlankEnumNullEnum.md) |  |  [optional]
**language** | **String** |  |  [optional]
**employmentStatus** | [**OneOfEmploymentStatusEnumBlankEnumNullEnum**](OneOfEmploymentStatusEnumBlankEnumNullEnum.md) |  |  [optional]
**activated** | **OffsetDateTime** |  |  [optional]
**profile** | **Map&lt;String, Object&gt;** |  |  [optional]
**password** | **String** |  |  [optional]
**referralCode** | **String** |  |  [optional]
**utmSource** | **String** |  |  [optional]
**utmMedium** | **String** |  |  [optional]
**utmCampaign** | **String** |  |  [optional]
**utmTerm** | **String** |  |  [optional]
**utmContent** | **String** |  |  [optional]
**tosConsent** | **Boolean** |  |  [optional]
**dataConsent** | **Boolean** |  |  [optional]
**marketingConsent** | **Boolean** |  |  [optional]
**extraData** | **Map&lt;String, Object&gt;** |  |  [optional]
**phoneNumber** | **String** |  |  [optional]



