# InvoiceDetails

A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [readonly] 
**created** | **datetime** |  | [readonly] 
**url** | **str** |  | [readonly] 
**amount** | **float** |  | 
**charges** | **[str, none_type]** |  | 
**number** | **str, none_type** | Invoice legal number | [optional] 
**status** | [**Status260Enum**](Status260Enum.md) |  | [optional] 
**date_from** | **date, none_type** | Beginning of charge period | [optional] 
**date_to** | **date, none_type** | End of charge period | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


