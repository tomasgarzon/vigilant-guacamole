# PortfolioList

A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [readonly] 
**name** | **str** |  | [readonly] 
**portfolio_type** | **str** |  | 
**risk_level** | **int** |  | [readonly] 
**time_horizon** | **int** |  | [readonly] 
**status** | **dict** |  | [readonly] 
**balance** | **float** |  | 
**invested** | **float** |  | 
**created** | **datetime** |  | [readonly] 
**currency** | **str** |  | [optional] 
**advisor** | **str, none_type** |  | [optional] 
**advice_engine** | **str, none_type** |  | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


