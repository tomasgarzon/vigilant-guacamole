# # PortfolioDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** |  | [readonly]
**name** | **string** |  |
**portfolio_type** | **string** |  |
**risk_level** | **int** |  | [optional]
**time_horizon** | **int** |  | [optional]
**status** | [**\OpenAPI\Client\Model\Status2efEnum**](Status2efEnum.md) |  | [optional]
**extra_data** | **array<string,mixed>** | Additional Portfolio attributes | [optional]
**currency** | **string** |  | [optional]
**created** | [**\DateTime**](\DateTime.md) |  | [readonly]
**activated** | [**\DateTime**](\DateTime.md) |  | [optional]
**balance** | **double** |  |
**performance** | **double** |  |
**deposit_reference** | **string** |  | [readonly]
**advisor** | **string** |  | [optional]
**advice_engine** | **string** |  | [optional]
**client** | **string** |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
