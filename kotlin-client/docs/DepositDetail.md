
# DepositDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | [**java.util.UUID**](java.util.UUID.md) |  |  [readonly]
**portfolio** | **kotlin.String** |  | 
**amount** | **kotlin.Double** |  | 
**provider** | **kotlin.String** |  | 
**reference** | **kotlin.String** |  |  [readonly]
**status** | [**StatusB6aEnum**](StatusB6aEnum.md) |  |  [optional]
**reason** | **kotlin.String** | Cancelled reason |  [optional]
**completed** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) |  |  [optional]
**depositType** | [**DepositTypeEnum**](DepositTypeEnum.md) |  |  [optional]
**transactedAt** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) |  |  [optional]
**extraData** | [**kotlin.collections.Map&lt;kotlin.String, kotlin.Any&gt;**](kotlin.Any.md) | Additional deposit attributes for the specific portal |  [optional]



