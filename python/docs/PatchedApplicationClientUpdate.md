# PatchedApplicationClientUpdate

A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**birthdate** | **date** |  | [optional] 
**tos_consent** | **bool** |  | [optional] 
**marketing_consent** | **bool** |  | [optional] 
**data_consent** | **bool** |  | [optional] 
**tos_consent_date** | **date** |  | [optional] [readonly] 
**tax_information** | **[str, none_type]** |  | [optional] [readonly] 
**country_birth** | [**CountryField**](CountryField.md) |  | [optional] 
**last_login** | **datetime** |  | [optional] [readonly] 
**referred_by** | **str, none_type** |  | [optional] 
**successful_referrals** | **int** |  | [optional] [readonly] 
**kyc_verified** | **bool** |  | [optional] [readonly] 
**is_verified** | **bool** |  | [optional] [readonly] 
**fee_segments** | **[str]** |  | [optional] [readonly] 
**extra_data** | **{str: (bool, date, datetime, dict, float, int, list, str, none_type)}** |  | [optional] 
**portfolios** | **[str]** |  | [optional] [readonly] 
**onboarded_by** | **str, none_type** |  | [optional] 
**risk_level** | **int** |  | [optional] [readonly] 
**onboarding_token** | **str** |  | [optional] [readonly] 
**password** | **str** |  | [optional] 
**email_verified_last_request** | **datetime** |  | [optional] 
**uuid** | **str** |  | [optional] [readonly] 
**created** | **datetime** |  | [optional] [readonly] 
**updated** | **datetime** |  | [optional] [readonly] 
**comments** | **str, none_type** |  | [optional] 
**status** | **dict** |  | [optional] [readonly] 
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
**language** | **str** |  | [optional] 
**employment_status** | **dict, none_type** |  | [optional] 
**profession** | **str, none_type** |  | [optional] 
**referral_code** | **str, none_type** |  | [optional] 
**activated** | **datetime, none_type** |  | [optional] 
**utm_source** | **str** |  | [optional] 
**utm_medium** | **str** |  | [optional] 
**utm_campaign** | **str** |  | [optional] 
**utm_term** | **str** |  | [optional] 
**utm_content** | **str** |  | [optional] 
**marketing_consent_date** | **date** |  | [optional] [readonly] 
**data_consent_date** | **date** |  | [optional] [readonly] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

