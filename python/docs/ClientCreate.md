# ClientCreate

A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | 
**birthdate** | **date** |  | [optional] 
**title** | **dict, none_type** |  | [optional] 
**first_name** | **str, none_type** |  | [optional] 
**last_name** | **str, none_type** |  | [optional] 
**middle_name** | **str, none_type** |  | [optional] 
**gender** | **dict, none_type** |  | [optional] 
**marital_status** | **dict, none_type** |  | [optional] 
**language** | **str** |  | [optional] 
**employment_status** | **dict, none_type** |  | [optional] 
**activated** | **datetime, none_type** |  | [optional] 
**profile** | **{str: (bool, date, datetime, dict, float, int, list, str, none_type)}** |  | [optional] 
**password** | **str** |  | [optional] 
**referral_code** | **str** |  | [optional] 
**utm_source** | **str** |  | [optional] 
**utm_medium** | **str** |  | [optional] 
**utm_campaign** | **str** |  | [optional] 
**utm_term** | **str** |  | [optional] 
**utm_content** | **str** |  | [optional] 
**tos_consent** | **bool** |  | [optional] 
**data_consent** | **bool** |  | [optional] 
**marketing_consent** | **bool** |  | [optional] 
**extra_data** | **{str: (bool, date, datetime, dict, float, int, list, str, none_type)}** |  | [optional] 
**phone_number** | **str, none_type** |  | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


