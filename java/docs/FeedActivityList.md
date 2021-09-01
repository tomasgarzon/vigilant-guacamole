

# FeedActivityList

A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **UUID** |  |  [readonly]
**created** | **OffsetDateTime** |  |  [readonly]
**activityType** | [**ActivityTypeEnum**](ActivityTypeEnum.md) |  |  [readonly]
**activityData** | **Map&lt;String, Object&gt;** |  |  [readonly]



