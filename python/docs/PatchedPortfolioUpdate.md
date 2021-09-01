# PatchedPortfolioUpdate

A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [optional] [readonly] 
**name** | **str** |  | [optional] 
**portfolio_type** | **str** |  | [optional] 
**risk_level** | **int, none_type** |  | [optional] 
**time_horizon** | **int, none_type** |  | [optional] 
**status** | **dict** |  | [optional] [readonly] 
**currency** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**activated** | **datetime** |  | [optional] [readonly] 
**advisor** | **str** |  | [optional] 
**advice_engine** | **str** |  | [optional] 
**extra_data** | **{str: (bool, date, datetime, dict, float, int, list, str, none_type)}** |  | [optional] 
**client** | **str** |  | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


