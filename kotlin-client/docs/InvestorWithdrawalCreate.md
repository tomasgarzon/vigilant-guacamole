
# InvestorWithdrawalCreate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | [**java.util.UUID**](java.util.UUID.md) |  |  [readonly]
**amount** | **kotlin.Double** |  | 
**provider** | **kotlin.String** |  | 
**status** | [**Status14bEnum**](Status14bEnum.md) |  |  [readonly]
**reason** | **kotlin.String** | Cancelled reason |  [readonly]
**completed** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) |  |  [readonly]
**withdrawalType** | **kotlin.String** |  |  [readonly]
**purpose** | **kotlin.String** | Withdrawal reason |  [optional]
**extraData** | [**kotlin.collections.Map&lt;kotlin.String, kotlin.Any&gt;**](kotlin.Any.md) | Additional withdrawal attributes for the specific portal |  [optional]



