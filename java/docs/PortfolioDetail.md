

# PortfolioDetail

A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **UUID** |  |  [readonly]
**name** | **String** |  | 
**portfolioType** | **String** |  | 
**riskLevel** | **Integer** |  |  [optional]
**timeHorizon** | **Integer** |  |  [optional]
**status** | **Status2efEnum** |  |  [optional]
**extraData** | **Map&lt;String, Object&gt;** | Additional Portfolio attributes |  [optional]
**currency** | **String** |  |  [optional]
**created** | **OffsetDateTime** |  |  [readonly]
**activated** | **OffsetDateTime** |  |  [optional]
**balance** | **Double** |  | 
**performance** | **Double** |  | 
**depositReference** | **String** |  |  [readonly]
**advisor** | **String** |  |  [optional]
**adviceEngine** | **String** |  |  [optional]
**client** | **String** |  |  [optional]



