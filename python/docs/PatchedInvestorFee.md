# PatchedInvestorFee


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **float** | Determinates a percentage or an amount (between 0 and 1 if percentage otherwise Positive Decimal) | [optional] 
**value_unit** | **dict** | Determines the type of the value(Fixed, Percentage) | [optional] 
**fee_type** | **dict** | Each choice should have a related method on fee model that contains the logic to charge the client | [optional] 
**concept** | **str** | Describes the concept that will be shown on invoice | [optional] 
**date_from** | **date, none_type** | Defines the end date when the percentage should be applied | [optional] 
**date_to** | **date, none_type** | Defines the start date when the percentage should be applied | [optional] 
**amount_from** | **float, none_type** | Defines the amount start range when the percentage should be applied | [optional] 
**amount_to** | **float, none_type** | Defines the amount end range when the percentage should be applied | [optional] 
**uuid** | **str** |  | [optional] [readonly] 
**created** | **datetime** |  | [optional] [readonly] 
**updated** | **datetime** |  | [optional] [readonly] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


