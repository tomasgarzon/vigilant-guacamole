

# InvoiceList

A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **UUID** |  |  [readonly]
**number** | **String** | Invoice legal number |  [readonly]
**status** | [**Status260Enum**](Status260Enum.md) |  |  [readonly]
**dateFrom** | **LocalDate** | Beginning of charge period |  [readonly]
**dateTo** | **LocalDate** | End of charge period |  [readonly]
**amount** | **Double** |  | 
**charges** | **List&lt;String&gt;** |  | 



