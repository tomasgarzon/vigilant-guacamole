

# VerificationList

A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **UUID** |  |  [readonly]
**verifyType** | [**VerifyTypeEnum**](VerifyTypeEnum.md) |  |  [readonly]
**status** | [**StatusBd7Enum**](StatusBd7Enum.md) |  |  [readonly]
**result** | [**ResultEnum**](ResultEnum.md) |  |  [readonly]
**created** | **OffsetDateTime** |  |  [readonly]
**updated** | **OffsetDateTime** |  |  [readonly]
**verificationDocuments** | **List&lt;String&gt;** |  | 



