

# InvoiceDetails

A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **UUID** |  |  [readonly]
**number** | **String** | Invoice legal number |  [optional]
**status** | **Status260Enum** |  |  [optional]
**created** | **OffsetDateTime** |  |  [readonly]
**dateFrom** | **LocalDate** | Beginning of charge period |  [optional]
**dateTo** | **LocalDate** | End of charge period |  [optional]
**url** | **URI** |  |  [readonly]
**amount** | **Double** |  | 
**charges** | **List&lt;String&gt;** |  | 



