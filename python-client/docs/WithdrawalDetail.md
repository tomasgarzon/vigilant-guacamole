# WithdrawalDetail


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [readonly] 
**portfolio** | **str** |  | 
**amount** | **float** |  | 
**provider** | **str** |  | 
**status** | [**Status14bEnum**](Status14bEnum.md) |  | 
**created** | **datetime** |  | [readonly] 
**withdrawal_type** | **str** |  | [readonly] 
**reason** | **str** | Cancelled reason | [optional] 
**completed** | **datetime, none_type** |  | [optional] 
**purpose** | **str, none_type** | Withdrawal reason | [optional] 
**extra_data** | **{str: (bool, date, datetime, dict, float, int, list, str, none_type)}, none_type** | Additional withdrawal attributes for the specific portal | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


