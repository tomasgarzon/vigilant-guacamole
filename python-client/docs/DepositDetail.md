# DepositDetail


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [readonly] 
**portfolio** | **str** |  | 
**amount** | **float** |  | 
**provider** | **str** |  | 
**reference** | **str** |  | [readonly] 
**status** | [**StatusB6aEnum**](StatusB6aEnum.md) |  | [optional] 
**reason** | **str** | Cancelled reason | [optional] 
**completed** | **datetime, none_type** |  | [optional] 
**deposit_type** | [**DepositTypeEnum**](DepositTypeEnum.md) |  | [optional] 
**transacted_at** | **datetime, none_type** |  | [optional] 
**extra_data** | **{str: (bool, date, datetime, dict, float, int, list, str, none_type)}, none_type** | Additional deposit attributes for the specific portal | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


