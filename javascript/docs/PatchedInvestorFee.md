# NucoroApi.PatchedInvestorFee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **Number** | Determinates a percentage or an amount (between 0 and 1 if percentage otherwise Positive Decimal) | [optional] 
**valueUnit** | [**ValueUnitEnum**](ValueUnitEnum.md) | Determines the type of the value(Fixed, Percentage) | [optional] 
**feeType** | [**FeeTypeEnum**](FeeTypeEnum.md) | Each choice should have a related method on fee model that contains the logic to charge the client | [optional] 
**concept** | **String** | Describes the concept that will be shown on invoice | [optional] 
**dateFrom** | **Date** | Defines the end date when the percentage should be applied | [optional] 
**dateTo** | **Date** | Defines the start date when the percentage should be applied | [optional] 
**amountFrom** | **Number** | Defines the amount start range when the percentage should be applied | [optional] 
**amountTo** | **Number** | Defines the amount end range when the percentage should be applied | [optional] 
**uuid** | **String** |  | [optional] [readonly] 
**created** | **Date** |  | [optional] [readonly] 
**updated** | **Date** |  | [optional] [readonly] 


