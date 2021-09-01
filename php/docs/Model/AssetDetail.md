# # AssetDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** |  | [readonly]
**name** | **string** |  |
**isin** | **string** |  |
**ticker** | **string** |  |
**status** | [**\OpenAPI\Client\Model\Status6f6Enum**](Status6f6Enum.md) |  | [optional]
**market** | **string** |  | [readonly]
**currency** | **string** |  |
**extra_data** | **array<string,mixed>** |  | [optional]
**categories** | [**\OpenAPI\Client\Model\AssetCategory[]**](AssetCategory.md) |  |
**asset_type** | [**\OpenAPI\Client\Model\AssetTypeEnum**](AssetTypeEnum.md) |  | [optional]
**expense_ratio** | **float** | This field determines the administrative and operational costs associated to certain types of assets like ETFs or mutual funds. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
