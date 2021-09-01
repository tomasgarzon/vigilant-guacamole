# AssetDetail

A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [readonly] 
**name** | **str** |  | 
**isin** | **str** |  | 
**ticker** | **str** |  | 
**market** | **str** |  | [readonly] 
**currency** | **str** |  | 
**categories** | [**[AssetCategory]**](AssetCategory.md) |  | 
**status** | [**Status6f6Enum**](Status6f6Enum.md) |  | [optional] 
**extra_data** | **{str: (bool, date, datetime, dict, float, int, list, str, none_type)}, none_type** |  | [optional] 
**asset_type** | [**AssetTypeEnum**](AssetTypeEnum.md) |  | [optional] 
**expense_ratio** | **float** | This field determines the administrative and operational costs associated to certain types of assets like ETFs or mutual funds. | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


