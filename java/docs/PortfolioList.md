

# PortfolioList

A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **UUID** |  |  [readonly]
**client** | **String** |  |  [optional]
**name** | **String** |  |  [readonly]
**portfolioType** | **String** |  | 
**riskLevel** | **Integer** |  |  [readonly]
**timeHorizon** | **Integer** |  |  [readonly]
**status** | [**Status2efEnum**](Status2efEnum.md) |  |  [readonly]
**balance** | **Double** |  | 
**invested** | **Double** |  | 
**currency** | **String** |  |  [optional]
**created** | **OffsetDateTime** |  |  [readonly]
**advisor** | **String** |  |  [optional]
**adviceEngine** | **String** |  |  [optional]



