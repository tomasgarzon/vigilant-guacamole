# PortfolioUpdate

A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [readonly] 
**name** | **str** |  | 
**portfolio_type** | **str** |  | 
**status** | **dict** |  | [readonly] 
**created** | **datetime** |  | [readonly] 
**activated** | **datetime** |  | [readonly] 
**advisor** | **str** |  | 
**advice_engine** | **str** |  | 
**risk_level** | **int, none_type** |  | [optional] 
**time_horizon** | **int, none_type** |  | [optional] 
**currency** | **str** |  | [optional] 
**extra_data** | **{str: (bool, date, datetime, dict, float, int, list, str, none_type)}** |  | [optional] 
**client** | **str** |  | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


