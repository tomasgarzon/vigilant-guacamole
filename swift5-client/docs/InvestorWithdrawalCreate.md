# InvestorWithdrawalCreate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **UUID** |  | [readonly] 
**amount** | **Double** |  | 
**provider** | **String** |  | 
**status** | [**Status14bEnum**](Status14bEnum.md) |  | [readonly] 
**reason** | **String** | Cancelled reason | [readonly] 
**completed** | **Date** |  | [readonly] 
**purpose** | **String** | Withdrawal reason | [optional] 
**withdrawalType** | **String** |  | [readonly] 
**extraData** | [String: AnyCodable] | Additional withdrawal attributes for the specific portal | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


