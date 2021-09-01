# OrderList

A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | **dict** |  | [readonly] 
**trade** | **str** |  | [readonly] 
**order_type** | **dict** |  | [readonly] 
**method** | **dict** |  | [readonly] 
**status** | **dict** |  | [readonly] 
**reason** | **str** |  | [readonly] 
**completed** | **datetime** |  | [readonly] 
**rebalance** | **str** |  | [readonly] 
**portfolio** | **str** |  | [readonly] 
**shares** | **float** |  | [readonly] 
**amount** | **float** |  | [readonly] 
**price_avg** | **float** |  | [readonly] 
**currency** | [**Currency**](Currency.md) |  | 
**withdrawal** | **str** |  | [readonly] 
**created** | **datetime** |  | [readonly] 
**stop_price** | **float, none_type** |  | [readonly] 
**limit_price** | **float, none_type** |  | [readonly] 
**duration** | **str** |  | [readonly] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


