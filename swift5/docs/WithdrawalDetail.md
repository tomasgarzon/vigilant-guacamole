# WithdrawalDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **UUID** |  | [readonly] 
**portfolio** | **String** |  | 
**amount** | **Double** |  | 
**provider** | **String** |  | 
**status** | [**Status14bEnum**](Status14bEnum.md) |  | 
**reason** | **String** | Cancelled reason | [optional] 
**completed** | **Date** |  | [optional] 
**purpose** | **String** | Withdrawal reason | [optional] 
**created** | **Date** |  | [readonly] 
**withdrawalType** | **String** |  | [readonly] 
**extraData** | [String: AnyCodable] | Additional withdrawal attributes for the specific portal | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


