# # PatchedInvestorFee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **double** | Determinates a percentage or an amount (between 0 and 1 if percentage otherwise Positive Decimal) | [optional]
**value_unit** | [**ValueUnitEnum**](ValueUnitEnum.md) | Determines the type of the value(Fixed, Percentage) | [optional]
**fee_type** | [**FeeTypeEnum**](FeeTypeEnum.md) | Each choice should have a related method on fee model that contains the logic to charge the client | [optional]
**concept** | **string** | Describes the concept that will be shown on invoice | [optional]
**date_from** | [**\DateTime**](\DateTime.md) | Defines the end date when the percentage should be applied | [optional]
**date_to** | [**\DateTime**](\DateTime.md) | Defines the start date when the percentage should be applied | [optional]
**amount_from** | **double** | Defines the amount start range when the percentage should be applied | [optional]
**amount_to** | **double** | Defines the amount end range when the percentage should be applied | [optional]
**uuid** | **string** |  | [optional] [readonly]
**created** | [**\DateTime**](\DateTime.md) |  | [optional] [readonly]
**updated** | [**\DateTime**](\DateTime.md) |  | [optional] [readonly]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
