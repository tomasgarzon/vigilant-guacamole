# # DepositDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** |  | [readonly]
**portfolio** | **string** |  |
**amount** | **double** |  |
**provider** | **string** |  |
**reference** | **string** |  | [readonly]
**status** | [**\OpenAPI\Client\Model\StatusB6aEnum**](StatusB6aEnum.md) |  | [optional]
**reason** | **string** | Cancelled reason | [optional]
**completed** | [**\DateTime**](\DateTime.md) |  | [optional]
**deposit_type** | [**\OpenAPI\Client\Model\DepositTypeEnum**](DepositTypeEnum.md) |  | [optional]
**transacted_at** | [**\DateTime**](\DateTime.md) |  | [optional]
**extra_data** | **array<string,mixed>** | Additional deposit attributes for the specific portal | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
