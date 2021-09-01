
# DepositCreate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | [**java.util.UUID**](java.util.UUID.md) |  |  [readonly]
**amount** | **kotlin.Double** |  | 
**provider** | **kotlin.String** |  | 
**reference** | **kotlin.String** |  |  [readonly]
**status** | [**StatusB6aEnum**](StatusB6aEnum.md) |  |  [readonly]
**reason** | **kotlin.String** | Cancelled reason |  [readonly]
**completed** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) |  |  [readonly]
**transactedAt** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) |  |  [readonly]
**depositType** | [**DepositTypeEnum**](DepositTypeEnum.md) |  |  [optional]
**extraData** | [**kotlin.collections.Map&lt;kotlin.String, kotlin.Any&gt;**](kotlin.Any.md) | Additional deposit attributes for the specific portal |  [optional]



