
# PatchedInvestorFee

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**&#x60;value&#x60;** | **kotlin.Double** | Determinates a percentage or an amount (between 0 and 1 if percentage otherwise Positive Decimal) |  [optional]
**valueUnit** | [**ValueUnitEnum**](ValueUnitEnum.md) | Determines the type of the value(Fixed, Percentage) |  [optional]
**feeType** | [**FeeTypeEnum**](FeeTypeEnum.md) | Each choice should have a related method on fee model that contains the logic to charge the client |  [optional]
**concept** | **kotlin.String** | Describes the concept that will be shown on invoice |  [optional]
**dateFrom** | [**java.time.LocalDate**](java.time.LocalDate.md) | Defines the end date when the percentage should be applied |  [optional]
**dateTo** | [**java.time.LocalDate**](java.time.LocalDate.md) | Defines the start date when the percentage should be applied |  [optional]
**amountFrom** | **kotlin.Double** | Defines the amount start range when the percentage should be applied |  [optional]
**amountTo** | **kotlin.Double** | Defines the amount end range when the percentage should be applied |  [optional]
**uuid** | [**java.util.UUID**](java.util.UUID.md) |  |  [optional] [readonly]
**created** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) |  |  [optional] [readonly]
**updated** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) |  |  [optional] [readonly]



