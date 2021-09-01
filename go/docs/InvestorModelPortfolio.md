# InvestorModelPortfolio

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**Name** | **string** |  | [readonly] 
**CashWeight** | **float64** | Percentage on the interval 0-1. | [readonly] 
**RiskLevel** | **int32** |  | [readonly] 
**Allocation** | [**[]AssetModelPortfolio**](AssetModelPortfolio.md) |  | [readonly] 
**ExtraData** | **map[string]interface{}** | Additional ModelPortfolio attributes | [readonly] 

## Methods

### NewInvestorModelPortfolio

`func NewInvestorModelPortfolio(uuid string, name string, cashWeight float64, riskLevel int32, allocation []AssetModelPortfolio, extraData map[string]interface{}, ) *InvestorModelPortfolio`

NewInvestorModelPortfolio instantiates a new InvestorModelPortfolio object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInvestorModelPortfolioWithDefaults

`func NewInvestorModelPortfolioWithDefaults() *InvestorModelPortfolio`

NewInvestorModelPortfolioWithDefaults instantiates a new InvestorModelPortfolio object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *InvestorModelPortfolio) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *InvestorModelPortfolio) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *InvestorModelPortfolio) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetName

`func (o *InvestorModelPortfolio) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *InvestorModelPortfolio) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *InvestorModelPortfolio) SetName(v string)`

SetName sets Name field to given value.


### GetCashWeight

`func (o *InvestorModelPortfolio) GetCashWeight() float64`

GetCashWeight returns the CashWeight field if non-nil, zero value otherwise.

### GetCashWeightOk

`func (o *InvestorModelPortfolio) GetCashWeightOk() (*float64, bool)`

GetCashWeightOk returns a tuple with the CashWeight field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashWeight

`func (o *InvestorModelPortfolio) SetCashWeight(v float64)`

SetCashWeight sets CashWeight field to given value.


### GetRiskLevel

`func (o *InvestorModelPortfolio) GetRiskLevel() int32`

GetRiskLevel returns the RiskLevel field if non-nil, zero value otherwise.

### GetRiskLevelOk

`func (o *InvestorModelPortfolio) GetRiskLevelOk() (*int32, bool)`

GetRiskLevelOk returns a tuple with the RiskLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskLevel

`func (o *InvestorModelPortfolio) SetRiskLevel(v int32)`

SetRiskLevel sets RiskLevel field to given value.


### GetAllocation

`func (o *InvestorModelPortfolio) GetAllocation() []AssetModelPortfolio`

GetAllocation returns the Allocation field if non-nil, zero value otherwise.

### GetAllocationOk

`func (o *InvestorModelPortfolio) GetAllocationOk() (*[]AssetModelPortfolio, bool)`

GetAllocationOk returns a tuple with the Allocation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllocation

`func (o *InvestorModelPortfolio) SetAllocation(v []AssetModelPortfolio)`

SetAllocation sets Allocation field to given value.


### GetExtraData

`func (o *InvestorModelPortfolio) GetExtraData() map[string]interface{}`

GetExtraData returns the ExtraData field if non-nil, zero value otherwise.

### GetExtraDataOk

`func (o *InvestorModelPortfolio) GetExtraDataOk() (*map[string]interface{}, bool)`

GetExtraDataOk returns a tuple with the ExtraData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraData

`func (o *InvestorModelPortfolio) SetExtraData(v map[string]interface{})`

SetExtraData sets ExtraData field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


