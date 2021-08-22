# DepositDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **UUID** |  | [readonly] 
**portfolio** | **String** |  | 
**amount** | **Double** |  | 
**provider** | **String** |  | 
**reference** | **String** |  | [readonly] 
**status** | [**StatusB6aEnum**](StatusB6aEnum.md) |  | [optional] 
**reason** | **String** | Cancelled reason | [optional] 
**completed** | **Date** |  | [optional] 
**depositType** | [**DepositTypeEnum**](DepositTypeEnum.md) |  | [optional] 
**transactedAt** | **Date** |  | [optional] 
**extraData** | [String: AnyCodable] | Additional deposit attributes for the specific portal | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


