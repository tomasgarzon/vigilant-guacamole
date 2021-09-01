# DepositCreate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **UUID** |  | [readonly] 
**amount** | **Double** |  | 
**provider** | **String** |  | 
**reference** | **String** |  | [readonly] 
**status** | [**StatusB6aEnum**](StatusB6aEnum.md) |  | [readonly] 
**reason** | **String** | Cancelled reason | [readonly] 
**completed** | **Date** |  | [readonly] 
**depositType** | [**DepositTypeEnum**](DepositTypeEnum.md) |  | [optional] 
**transactedAt** | **Date** |  | [readonly] 
**extraData** | [String: AnyCodable] | Additional deposit attributes for the specific portal | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


