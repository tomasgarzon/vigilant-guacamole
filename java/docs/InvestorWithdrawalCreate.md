

# InvestorWithdrawalCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **UUID** |  |  [readonly]
**amount** | **Double** |  | 
**provider** | **String** |  | 
**status** | [**Status14bEnum**](Status14bEnum.md) |  |  [readonly]
**reason** | **String** | Cancelled reason |  [readonly]
**completed** | **OffsetDateTime** |  |  [readonly]
**purpose** | **String** | Withdrawal reason |  [optional]
**withdrawalType** | **String** |  |  [readonly]
**extraData** | **Map&lt;String, Object&gt;** | Additional withdrawal attributes for the specific portal |  [optional]



