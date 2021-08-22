# InvoiceList

A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** |  | [readonly] 
**number** | **str** | Invoice legal number | [readonly] 
**status** | **dict** |  | [readonly] 
**date_from** | **date** | Beginning of charge period | [readonly] 
**date_to** | **date** | End of charge period | [readonly] 
**amount** | **float** |  | 
**charges** | **[str, none_type]** |  | 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


