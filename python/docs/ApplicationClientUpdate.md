# ApplicationClientUpdate

A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | 
**tos_consent_date** | **date** |  | [readonly] 
**tax_information** | **[str, none_type]** |  | [readonly] 
**country_birth** | [**CountryField**](CountryField.md) |  | 
**last_login** | **datetime** |  | [readonly] 
**referred_by** | **str, none_type** |  | 
**successful_referrals** | **int** |  | [readonly] 
**kyc_verified** | **bool** |  | [readonly] 
**is_verified** | **bool** |  | [readonly] 
**fee_segments** | **[str]** |  | [readonly] 
**portfolios** | **[str]** |  | [readonly] 
**risk_level** | **int** |  | [readonly] 
**onboarding_token** | **str** |  | [readonly] 
**uuid** | **str** |  | [readonly] 
**created** | **datetime** |  | [readonly] 
**updated** | **datetime** |  | [readonly] 
**status** | **dict** |  | [readonly] 
**language** | **str** |  | 
**marketing_consent_date** | **date** |  | [readonly] 
**data_consent_date** | **date** |  | [readonly] 
**birthdate** | **date** |  | [optional] 
**tos_consent** | **bool** |  | [optional] 
**marketing_consent** | **bool** |  | [optional] 
**data_consent** | **bool** |  | [optional] 
**extra_data** | **{str: (bool, date, datetime, dict, float, int, list, str, none_type)}** |  | [optional] 
**onboarded_by** | **str, none_type** |  | [optional] 
**password** | **str** |  | [optional] 
**email_verified_last_request** | **datetime** |  | [optional] 
**comments** | **str, none_type** |  | [optional] 
**email_verified** | **bool** |  | [optional] 
**email_verify_last_request** | **datetime, none_type** |  | [optional] 
**title** | **dict, none_type** |  | [optional] 
**first_name** | **str, none_type** |  | [optional] 
**middle_name** | **str, none_type** |  | [optional] 
**last_name** | **str, none_type** |  | [optional] 
**gender** | **dict, none_type** |  | [optional] 
**marital_status** | **dict, none_type** |  | [optional] 
**phone_number** | **str, none_type** |  | [optional] 
**phone_number_verified** | **datetime, none_type** |  | [optional] 
**employment_status** | **dict, none_type** |  | [optional] 
**profession** | **str, none_type** |  | [optional] 
**referral_code** | **str, none_type** |  | [optional] 
**activated** | **datetime, none_type** |  | [optional] 
**utm_source** | **str** |  | [optional] 
**utm_medium** | **str** |  | [optional] 
**utm_campaign** | **str** |  | [optional] 
**utm_term** | **str** |  | [optional] 
**utm_content** | **str** |  | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


