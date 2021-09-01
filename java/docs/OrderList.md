

# OrderList

A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | [**RelatedAssetSerializerWithAssetCategories**](RelatedAssetSerializerWithAssetCategories.md) |  |  [readonly]
**trade** | **String** |  |  [readonly]
**orderType** | [**OrderTypeEnum**](OrderTypeEnum.md) |  |  [readonly]
**method** | [**OrderListMethodEnum**](OrderListMethodEnum.md) |  |  [readonly]
**status** | [**OrderListStatusEnum**](OrderListStatusEnum.md) |  |  [readonly]
**reason** | **String** |  |  [readonly]
**completed** | **OffsetDateTime** |  |  [readonly]
**rebalance** | **String** |  |  [readonly]
**portfolio** | **String** |  |  [readonly]
**shares** | **Double** |  |  [readonly]
**amount** | **Double** |  |  [readonly]
**priceAvg** | **Double** |  |  [readonly]
**currency** | [**Currency**](Currency.md) |  | 
**withdrawal** | **String** |  |  [readonly]
**created** | **OffsetDateTime** |  |  [readonly]
**stopPrice** | **Double** |  |  [readonly]
**limitPrice** | **Double** |  |  [readonly]
**duration** | **String** |  |  [readonly]



