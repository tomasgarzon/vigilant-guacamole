

# WithdrawalDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **UUID** |  |  [readonly]
**portfolio** | **String** |  | 
**amount** | **Double** |  | 
**provider** | **String** |  | 
**status** | **Status14bEnum** |  | 
**reason** | **String** | Cancelled reason |  [optional]
**completed** | **OffsetDateTime** |  |  [optional]
**purpose** | **String** | Withdrawal reason |  [optional]
**created** | **OffsetDateTime** |  |  [readonly]
**withdrawalType** | **String** |  |  [readonly]
**extraData** | **Map&lt;String, Object&gt;** | Additional withdrawal attributes for the specific portal |  [optional]



