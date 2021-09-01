# InvestorWithdrawalList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**Amount** | **float64** |  | [readonly] 
**Status** | [**Status14bEnum**](Status14bEnum.md) |  | [readonly] 
**WithdrawalType** | **string** |  | [readonly] 
**ExtraData** | **map[string]interface{}** | Additional withdrawal attributes for the specific portal | [readonly] 

## Methods

### NewInvestorWithdrawalList

`func NewInvestorWithdrawalList(uuid string, amount float64, status Status14bEnum, withdrawalType string, extraData map[string]interface{}, ) *InvestorWithdrawalList`

NewInvestorWithdrawalList instantiates a new InvestorWithdrawalList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInvestorWithdrawalListWithDefaults

`func NewInvestorWithdrawalListWithDefaults() *InvestorWithdrawalList`

NewInvestorWithdrawalListWithDefaults instantiates a new InvestorWithdrawalList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *InvestorWithdrawalList) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *InvestorWithdrawalList) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *InvestorWithdrawalList) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetAmount

`func (o *InvestorWithdrawalList) GetAmount() float64`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *InvestorWithdrawalList) GetAmountOk() (*float64, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *InvestorWithdrawalList) SetAmount(v float64)`

SetAmount sets Amount field to given value.


### GetStatus

`func (o *InvestorWithdrawalList) GetStatus() Status14bEnum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *InvestorWithdrawalList) GetStatusOk() (*Status14bEnum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *InvestorWithdrawalList) SetStatus(v Status14bEnum)`

SetStatus sets Status field to given value.


### GetWithdrawalType

`func (o *InvestorWithdrawalList) GetWithdrawalType() string`

GetWithdrawalType returns the WithdrawalType field if non-nil, zero value otherwise.

### GetWithdrawalTypeOk

`func (o *InvestorWithdrawalList) GetWithdrawalTypeOk() (*string, bool)`

GetWithdrawalTypeOk returns a tuple with the WithdrawalType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWithdrawalType

`func (o *InvestorWithdrawalList) SetWithdrawalType(v string)`

SetWithdrawalType sets WithdrawalType field to given value.


### GetExtraData

`func (o *InvestorWithdrawalList) GetExtraData() map[string]interface{}`

GetExtraData returns the ExtraData field if non-nil, zero value otherwise.

### GetExtraDataOk

`func (o *InvestorWithdrawalList) GetExtraDataOk() (*map[string]interface{}, bool)`

GetExtraDataOk returns a tuple with the ExtraData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraData

`func (o *InvestorWithdrawalList) SetExtraData(v map[string]interface{})`

SetExtraData sets ExtraData field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


