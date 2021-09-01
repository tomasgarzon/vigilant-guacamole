# # WithdrawalDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** |  | [readonly]
**portfolio** | **string** |  |
**amount** | **double** |  |
**provider** | **string** |  |
**status** | [**\OpenAPI\Client\Model\Status14bEnum**](Status14bEnum.md) |  |
**reason** | **string** | Cancelled reason | [optional]
**completed** | [**\DateTime**](\DateTime.md) |  | [optional]
**purpose** | **string** | Withdrawal reason | [optional]
**created** | [**\DateTime**](\DateTime.md) |  | [readonly]
**withdrawal_type** | **string** |  | [readonly]
**extra_data** | **array<string,mixed>** | Additional withdrawal attributes for the specific portal | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
