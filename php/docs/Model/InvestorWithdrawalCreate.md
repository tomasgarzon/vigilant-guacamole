# # InvestorWithdrawalCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** |  | [readonly]
**amount** | **double** |  |
**provider** | **string** |  |
**status** | [**Status14bEnum**](Status14bEnum.md) |  | [readonly]
**reason** | **string** | Cancelled reason | [readonly]
**completed** | [**\DateTime**](\DateTime.md) |  | [readonly]
**purpose** | **string** | Withdrawal reason | [optional]
**withdrawal_type** | **string** |  | [readonly]
**extra_data** | **array<string,mixed>** | Additional withdrawal attributes for the specific portal | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
