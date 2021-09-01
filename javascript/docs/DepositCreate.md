# NucoroApi.DepositCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **String** |  | [readonly] 
**amount** | **Number** |  | 
**provider** | **String** |  | 
**reference** | **String** |  | [readonly] 
**status** | [**StatusB6aEnum**](StatusB6aEnum.md) |  | [readonly] 
**reason** | **String** | Cancelled reason | [readonly] 
**completed** | **Date** |  | [readonly] 
**depositType** | [**DepositTypeEnum**](DepositTypeEnum.md) |  | [optional] 
**transactedAt** | **Date** |  | [readonly] 
**extraData** | **{String: Object}** | Additional deposit attributes for the specific portal | [optional] 


