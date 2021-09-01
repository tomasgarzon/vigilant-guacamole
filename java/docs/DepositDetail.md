

# DepositDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **UUID** |  |  [readonly]
**portfolio** | **String** |  | 
**amount** | **Double** |  | 
**provider** | **String** |  | 
**reference** | **String** |  |  [readonly]
**status** | **StatusB6aEnum** |  |  [optional]
**reason** | **String** | Cancelled reason |  [optional]
**completed** | **OffsetDateTime** |  |  [optional]
**depositType** | **DepositTypeEnum** |  |  [optional]
**transactedAt** | **OffsetDateTime** |  |  [optional]
**extraData** | **Map&lt;String, Object&gt;** | Additional deposit attributes for the specific portal |  [optional]



