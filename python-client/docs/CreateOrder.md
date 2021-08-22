# CreateOrder

A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shares** | **int** |  | 
**asset** | [**RelatedAssetSerializerWithAssetCategories**](RelatedAssetSerializerWithAssetCategories.md) |  | 
**order_type** | [**OrderTypeEnum**](OrderTypeEnum.md) |  | 
**method** | [**CreateOrderMethodEnum**](CreateOrderMethodEnum.md) |  | 
**portfolio** | **str** |  | [optional] 
**limit_price** | **float, none_type** |  | [optional] 
**stop_price** | **float, none_type** |  | [optional] 
**duration** | **dict, none_type** |  | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


