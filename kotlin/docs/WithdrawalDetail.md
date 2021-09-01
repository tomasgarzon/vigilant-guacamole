
# WithdrawalDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | [**java.util.UUID**](java.util.UUID.md) |  |  [readonly]
**portfolio** | **kotlin.String** |  | 
**amount** | **kotlin.Double** |  | 
**provider** | **kotlin.String** |  | 
**status** | [**Status14bEnum**](Status14bEnum.md) |  | 
**created** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) |  |  [readonly]
**withdrawalType** | **kotlin.String** |  |  [readonly]
**reason** | **kotlin.String** | Cancelled reason |  [optional]
**completed** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) |  |  [optional]
**purpose** | **kotlin.String** | Withdrawal reason |  [optional]
**extraData** | [**kotlin.collections.Map&lt;kotlin.String, kotlin.Any&gt;**](kotlin.Any.md) | Additional withdrawal attributes for the specific portal |  [optional]



