# # ApplicationClientUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** |  |
**birthdate** | [**\DateTime**](\DateTime.md) |  | [optional]
**tos_consent** | **bool** |  | [optional]
**marketing_consent** | **bool** |  | [optional]
**data_consent** | **bool** |  | [optional]
**tos_consent_date** | [**\DateTime**](\DateTime.md) |  | [readonly]
**tax_information** | **string[]** |  | [readonly]
**country_birth** | [**\OpenAPI\Client\Model\CountryField**](CountryField.md) |  |
**last_login** | [**\DateTime**](\DateTime.md) |  | [readonly]
**referred_by** | **string** |  |
**successful_referrals** | **int** |  | [readonly]
**kyc_verified** | **bool** |  | [readonly]
**is_verified** | **bool** |  | [readonly]
**fee_segments** | **string[]** |  | [readonly]
**extra_data** | **array<string,mixed>** |  | [optional]
**portfolios** | **string[]** |  | [readonly]
**onboarded_by** | **string** |  | [optional]
**risk_level** | **int** |  | [readonly]
**onboarding_token** | **string** |  | [readonly]
**password** | **string** |  | [optional]
**email_verified_last_request** | [**\DateTime**](\DateTime.md) |  | [optional]
**uuid** | **string** |  | [readonly]
**created** | [**\DateTime**](\DateTime.md) |  | [readonly]
**updated** | [**\DateTime**](\DateTime.md) |  | [readonly]
**comments** | **string** |  | [optional]
**status** | [**StatusB65Enum**](StatusB65Enum.md) |  | [readonly]
**email_verified** | **bool** |  | [optional]
**email_verify_last_request** | [**\DateTime**](\DateTime.md) |  | [optional]
**title** | [**OneOfTitleEnumBlankEnumNullEnum**](OneOfTitleEnumBlankEnumNullEnum.md) |  | [optional]
**first_name** | **string** |  | [optional]
**middle_name** | **string** |  | [optional]
**last_name** | **string** |  | [optional]
**gender** | [**OneOfGenderEnumBlankEnumNullEnum**](OneOfGenderEnumBlankEnumNullEnum.md) |  | [optional]
**marital_status** | [**OneOfMaritalStatusEnumBlankEnumNullEnum**](OneOfMaritalStatusEnumBlankEnumNullEnum.md) |  | [optional]
**phone_number** | **string** |  | [optional]
**phone_number_verified** | [**\DateTime**](\DateTime.md) |  | [optional]
**language** | **string** |  |
**employment_status** | [**OneOfEmploymentStatusEnumBlankEnumNullEnum**](OneOfEmploymentStatusEnumBlankEnumNullEnum.md) |  | [optional]
**profession** | **string** |  | [optional]
**referral_code** | **string** |  | [optional]
**activated** | [**\DateTime**](\DateTime.md) |  | [optional]
**utm_source** | **string** |  | [optional]
**utm_medium** | **string** |  | [optional]
**utm_campaign** | **string** |  | [optional]
**utm_term** | **string** |  | [optional]
**utm_content** | **string** |  | [optional]
**marketing_consent_date** | [**\DateTime**](\DateTime.md) |  | [readonly]
**data_consent_date** | [**\DateTime**](\DateTime.md) |  | [readonly]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
