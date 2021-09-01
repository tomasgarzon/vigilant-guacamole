

# AssetDetail

A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **UUID** |  |  [readonly]
**name** | **String** |  | 
**isin** | **String** |  | 
**ticker** | **String** |  | 
**status** | **Status6f6Enum** |  |  [optional]
**market** | **String** |  |  [readonly]
**currency** | **String** |  | 
**extraData** | **Map&lt;String, Object&gt;** |  |  [optional]
**categories** | [**List&lt;AssetCategory&gt;**](AssetCategory.md) |  | 
**assetType** | **AssetTypeEnum** |  |  [optional]
**expenseRatio** | **Float** | This field determines the administrative and operational costs associated to certain types of assets like ETFs or mutual funds. |  [optional]



