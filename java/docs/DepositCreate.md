

# DepositCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **UUID** |  |  [readonly]
**amount** | **Double** |  | 
**provider** | **String** |  | 
**reference** | **String** |  |  [readonly]
**status** | [**StatusB6aEnum**](StatusB6aEnum.md) |  |  [readonly]
**reason** | **String** | Cancelled reason |  [readonly]
**completed** | **OffsetDateTime** |  |  [readonly]
**depositType** | **DepositTypeEnum** |  |  [optional]
**transactedAt** | **OffsetDateTime** |  |  [readonly]
**extraData** | **Map&lt;String, Object&gt;** | Additional deposit attributes for the specific portal |  [optional]



