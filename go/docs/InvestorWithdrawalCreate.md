# InvestorWithdrawalCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**Amount** | **float64** |  | 
**Provider** | **string** |  | 
**Status** | [**Status14bEnum**](Status14bEnum.md) |  | [readonly] 
**Reason** | **string** | Cancelled reason | [readonly] 
**Completed** | **time.Time** |  | [readonly] 
**Purpose** | Pointer to **NullableString** | Withdrawal reason | [optional] 
**WithdrawalType** | **string** |  | [readonly] 
**ExtraData** | Pointer to **map[string]interface{}** | Additional withdrawal attributes for the specific portal | [optional] 

## Methods

### NewInvestorWithdrawalCreate

`func NewInvestorWithdrawalCreate(uuid string, amount float64, provider string, status Status14bEnum, reason string, completed time.Time, withdrawalType string, ) *InvestorWithdrawalCreate`

NewInvestorWithdrawalCreate instantiates a new InvestorWithdrawalCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInvestorWithdrawalCreateWithDefaults

`func NewInvestorWithdrawalCreateWithDefaults() *InvestorWithdrawalCreate`

NewInvestorWithdrawalCreateWithDefaults instantiates a new InvestorWithdrawalCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *InvestorWithdrawalCreate) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *InvestorWithdrawalCreate) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *InvestorWithdrawalCreate) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetAmount

`func (o *InvestorWithdrawalCreate) GetAmount() float64`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *InvestorWithdrawalCreate) GetAmountOk() (*float64, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *InvestorWithdrawalCreate) SetAmount(v float64)`

SetAmount sets Amount field to given value.


### GetProvider

`func (o *InvestorWithdrawalCreate) GetProvider() string`

GetProvider returns the Provider field if non-nil, zero value otherwise.

### GetProviderOk

`func (o *InvestorWithdrawalCreate) GetProviderOk() (*string, bool)`

GetProviderOk returns a tuple with the Provider field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvider

`func (o *InvestorWithdrawalCreate) SetProvider(v string)`

SetProvider sets Provider field to given value.


### GetStatus

`func (o *InvestorWithdrawalCreate) GetStatus() Status14bEnum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *InvestorWithdrawalCreate) GetStatusOk() (*Status14bEnum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *InvestorWithdrawalCreate) SetStatus(v Status14bEnum)`

SetStatus sets Status field to given value.


### GetReason

`func (o *InvestorWithdrawalCreate) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *InvestorWithdrawalCreate) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *InvestorWithdrawalCreate) SetReason(v string)`

SetReason sets Reason field to given value.


### GetCompleted

`func (o *InvestorWithdrawalCreate) GetCompleted() time.Time`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *InvestorWithdrawalCreate) GetCompletedOk() (*time.Time, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *InvestorWithdrawalCreate) SetCompleted(v time.Time)`

SetCompleted sets Completed field to given value.


### GetPurpose

`func (o *InvestorWithdrawalCreate) GetPurpose() string`

GetPurpose returns the Purpose field if non-nil, zero value otherwise.

### GetPurposeOk

`func (o *InvestorWithdrawalCreate) GetPurposeOk() (*string, bool)`

GetPurposeOk returns a tuple with the Purpose field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurpose

`func (o *InvestorWithdrawalCreate) SetPurpose(v string)`

SetPurpose sets Purpose field to given value.

### HasPurpose

`func (o *InvestorWithdrawalCreate) HasPurpose() bool`

HasPurpose returns a boolean if a field has been set.

### SetPurposeNil

`func (o *InvestorWithdrawalCreate) SetPurposeNil(b bool)`

 SetPurposeNil sets the value for Purpose to be an explicit nil

### UnsetPurpose
`func (o *InvestorWithdrawalCreate) UnsetPurpose()`

UnsetPurpose ensures that no value is present for Purpose, not even an explicit nil
### GetWithdrawalType

`func (o *InvestorWithdrawalCreate) GetWithdrawalType() string`

GetWithdrawalType returns the WithdrawalType field if non-nil, zero value otherwise.

### GetWithdrawalTypeOk

`func (o *InvestorWithdrawalCreate) GetWithdrawalTypeOk() (*string, bool)`

GetWithdrawalTypeOk returns a tuple with the WithdrawalType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWithdrawalType

`func (o *InvestorWithdrawalCreate) SetWithdrawalType(v string)`

SetWithdrawalType sets WithdrawalType field to given value.


### GetExtraData

`func (o *InvestorWithdrawalCreate) GetExtraData() map[string]interface{}`

GetExtraData returns the ExtraData field if non-nil, zero value otherwise.

### GetExtraDataOk

`func (o *InvestorWithdrawalCreate) GetExtraDataOk() (*map[string]interface{}, bool)`

GetExtraDataOk returns a tuple with the ExtraData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraData

`func (o *InvestorWithdrawalCreate) SetExtraData(v map[string]interface{})`

SetExtraData sets ExtraData field to given value.

### HasExtraData

`func (o *InvestorWithdrawalCreate) HasExtraData() bool`

HasExtraData returns a boolean if a field has been set.

### SetExtraDataNil

`func (o *InvestorWithdrawalCreate) SetExtraDataNil(b bool)`

 SetExtraDataNil sets the value for ExtraData to be an explicit nil

### UnsetExtraData
`func (o *InvestorWithdrawalCreate) UnsetExtraData()`

UnsetExtraData ensures that no value is present for ExtraData, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


