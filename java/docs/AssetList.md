

# AssetList

A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **UUID** |  |  [readonly]
**name** | **String** |  |  [readonly]
**isin** | **String** |  |  [readonly]
**ticker** | **String** |  |  [readonly]
**status** | [**Status6f6Enum**](Status6f6Enum.md) |  |  [readonly]
**market** | **String** |  |  [readonly]
**currency** | **String** |  | 
**extraData** | **Map&lt;String, Object&gt;** |  |  [readonly]
**categories** | [**List&lt;AssetCategory&gt;**](AssetCategory.md) |  | 
**assetType** | [**AssetTypeEnum**](AssetTypeEnum.md) |  |  [readonly]



