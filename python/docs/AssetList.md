# AssetList

A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [readonly] 
**name** | **str** |  | [readonly] 
**isin** | **str** |  | [readonly] 
**ticker** | **str** |  | [readonly] 
**status** | **dict** |  | [readonly] 
**market** | **str** |  | [readonly] 
**currency** | **str** |  | 
**extra_data** | **{str: (bool, date, datetime, dict, float, int, list, str, none_type)}** |  | [readonly] 
**categories** | [**[AssetCategory]**](AssetCategory.md) |  | 
**asset_type** | **dict** |  | [readonly] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


