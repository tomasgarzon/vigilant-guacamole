
# InvoiceDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | [**java.util.UUID**](java.util.UUID.md) |  |  [readonly]
**created** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) |  |  [readonly]
**url** | [**java.net.URI**](java.net.URI.md) |  |  [readonly]
**amount** | **kotlin.Double** |  | 
**charges** | **kotlin.collections.List&lt;kotlin.String&gt;** |  | 
**number** | **kotlin.String** | Invoice legal number |  [optional]
**status** | [**Status260Enum**](Status260Enum.md) |  |  [optional]
**dateFrom** | [**java.time.LocalDate**](java.time.LocalDate.md) | Beginning of charge period |  [optional]
**dateTo** | [**java.time.LocalDate**](java.time.LocalDate.md) | End of charge period |  [optional]



