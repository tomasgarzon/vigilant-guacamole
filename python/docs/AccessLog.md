# AccessLog

A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [readonly] 
**created** | **datetime** |  | [readonly] 
**user_agent** | **str** |  | [readonly] 
**ip_address** | **str** |  | [readonly] 
**browser** | **str** |  | [readonly] 
**browser_version** | **str** |  | [readonly] 
**device_brand** | **str** |  | [readonly] 
**device_model** | **str** |  | [readonly] 
**os** | **str** |  | [readonly] 
**os_version** | **str** |  | [readonly] 
**channel** | **dict** |  | [readonly] 
**country** | **str** |  | 
**city** | **str** |  | [readonly] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


