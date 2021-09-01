

# PortfolioUpdate

A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **UUID** |  |  [readonly]
**name** | **String** |  | 
**portfolioType** | **String** |  | 
**riskLevel** | **Integer** |  |  [optional]
**timeHorizon** | **Integer** |  |  [optional]
**status** | [**Status2efEnum**](Status2efEnum.md) |  |  [readonly]
**currency** | **String** |  |  [optional]
**created** | **OffsetDateTime** |  |  [readonly]
**activated** | **OffsetDateTime** |  |  [readonly]
**advisor** | **String** |  | 
**adviceEngine** | **String** |  | 
**extraData** | **Map&lt;String, Object&gt;** |  |  [optional]
**client** | **String** |  |  [optional]



