

# CreateOrder

A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shares** | **Integer** |  | 
**asset** | [**RelatedAssetSerializerWithAssetCategories**](RelatedAssetSerializerWithAssetCategories.md) |  | 
**portfolio** | **String** |  |  [optional]
**orderType** | **OrderTypeEnum** |  | 
**method** | **CreateOrderMethodEnum** |  | 
**limitPrice** | **Double** |  |  [optional]
**stopPrice** | **Double** |  |  [optional]
**duration** | [**OneOfDurationEnumNullEnum**](OneOfDurationEnumNullEnum.md) |  |  [optional]



