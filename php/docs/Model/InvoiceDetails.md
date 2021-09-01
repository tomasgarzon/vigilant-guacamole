# # InvoiceDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** |  | [readonly]
**number** | **string** | Invoice legal number | [optional]
**status** | [**\OpenAPI\Client\Model\Status260Enum**](Status260Enum.md) |  | [optional]
**created** | [**\DateTime**](\DateTime.md) |  | [readonly]
**date_from** | [**\DateTime**](\DateTime.md) | Beginning of charge period | [optional]
**date_to** | [**\DateTime**](\DateTime.md) | End of charge period | [optional]
**url** | **string** |  | [readonly]
**amount** | **double** |  |
**charges** | **string[]** |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
