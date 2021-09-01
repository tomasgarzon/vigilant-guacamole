

# PatchedPortfolioUpdate

A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **UUID** |  |  [optional] [readonly]
**name** | **String** |  |  [optional]
**portfolioType** | **String** |  |  [optional]
**riskLevel** | **Integer** |  |  [optional]
**timeHorizon** | **Integer** |  |  [optional]
**status** | [**Status2efEnum**](Status2efEnum.md) |  |  [optional] [readonly]
**currency** | **String** |  |  [optional]
**created** | **OffsetDateTime** |  |  [optional] [readonly]
**activated** | **OffsetDateTime** |  |  [optional] [readonly]
**advisor** | **String** |  |  [optional]
**adviceEngine** | **String** |  |  [optional]
**extraData** | **Map&lt;String, Object&gt;** |  |  [optional]
**client** | **String** |  |  [optional]



