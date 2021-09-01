# # DepositCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** |  | [readonly]
**amount** | **double** |  |
**provider** | **string** |  |
**reference** | **string** |  | [readonly]
**status** | [**StatusB6aEnum**](StatusB6aEnum.md) |  | [readonly]
**reason** | **string** | Cancelled reason | [readonly]
**completed** | [**\DateTime**](\DateTime.md) |  | [readonly]
**deposit_type** | [**\OpenAPI\Client\Model\DepositTypeEnum**](DepositTypeEnum.md) |  | [optional]
**transacted_at** | [**\DateTime**](\DateTime.md) |  | [readonly]
**extra_data** | **array<string,mixed>** | Additional deposit attributes for the specific portal | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
