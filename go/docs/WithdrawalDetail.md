# WithdrawalDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**Portfolio** | **string** |  | 
**Amount** | **float64** |  | 
**Provider** | **string** |  | 
**Status** | [**Status14bEnum**](Status14bEnum.md) |  | 
**Reason** | Pointer to **string** | Cancelled reason | [optional] 
**Completed** | Pointer to **NullableTime** |  | [optional] 
**Purpose** | Pointer to **NullableString** | Withdrawal reason | [optional] 
**Created** | **time.Time** |  | [readonly] 
**WithdrawalType** | **string** |  | [readonly] 
**ExtraData** | Pointer to **map[string]interface{}** | Additional withdrawal attributes for the specific portal | [optional] 

## Methods

### NewWithdrawalDetail

`func NewWithdrawalDetail(uuid string, portfolio string, amount float64, provider string, status Status14bEnum, created time.Time, withdrawalType string, ) *WithdrawalDetail`

NewWithdrawalDetail instantiates a new WithdrawalDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWithdrawalDetailWithDefaults

`func NewWithdrawalDetailWithDefaults() *WithdrawalDetail`

NewWithdrawalDetailWithDefaults instantiates a new WithdrawalDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *WithdrawalDetail) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *WithdrawalDetail) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *WithdrawalDetail) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetPortfolio

`func (o *WithdrawalDetail) GetPortfolio() string`

GetPortfolio returns the Portfolio field if non-nil, zero value otherwise.

### GetPortfolioOk

`func (o *WithdrawalDetail) GetPortfolioOk() (*string, bool)`

GetPortfolioOk returns a tuple with the Portfolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPortfolio

`func (o *WithdrawalDetail) SetPortfolio(v string)`

SetPortfolio sets Portfolio field to given value.


### GetAmount

`func (o *WithdrawalDetail) GetAmount() float64`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *WithdrawalDetail) GetAmountOk() (*float64, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *WithdrawalDetail) SetAmount(v float64)`

SetAmount sets Amount field to given value.


### GetProvider

`func (o *WithdrawalDetail) GetProvider() string`

GetProvider returns the Provider field if non-nil, zero value otherwise.

### GetProviderOk

`func (o *WithdrawalDetail) GetProviderOk() (*string, bool)`

GetProviderOk returns a tuple with the Provider field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvider

`func (o *WithdrawalDetail) SetProvider(v string)`

SetProvider sets Provider field to given value.


### GetStatus

`func (o *WithdrawalDetail) GetStatus() Status14bEnum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *WithdrawalDetail) GetStatusOk() (*Status14bEnum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *WithdrawalDetail) SetStatus(v Status14bEnum)`

SetStatus sets Status field to given value.


### GetReason

`func (o *WithdrawalDetail) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *WithdrawalDetail) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *WithdrawalDetail) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *WithdrawalDetail) HasReason() bool`

HasReason returns a boolean if a field has been set.

### GetCompleted

`func (o *WithdrawalDetail) GetCompleted() time.Time`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *WithdrawalDetail) GetCompletedOk() (*time.Time, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *WithdrawalDetail) SetCompleted(v time.Time)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *WithdrawalDetail) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### SetCompletedNil

`func (o *WithdrawalDetail) SetCompletedNil(b bool)`

 SetCompletedNil sets the value for Completed to be an explicit nil

### UnsetCompleted
`func (o *WithdrawalDetail) UnsetCompleted()`

UnsetCompleted ensures that no value is present for Completed, not even an explicit nil
### GetPurpose

`func (o *WithdrawalDetail) GetPurpose() string`

GetPurpose returns the Purpose field if non-nil, zero value otherwise.

### GetPurposeOk

`func (o *WithdrawalDetail) GetPurposeOk() (*string, bool)`

GetPurposeOk returns a tuple with the Purpose field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurpose

`func (o *WithdrawalDetail) SetPurpose(v string)`

SetPurpose sets Purpose field to given value.

### HasPurpose

`func (o *WithdrawalDetail) HasPurpose() bool`

HasPurpose returns a boolean if a field has been set.

### SetPurposeNil

`func (o *WithdrawalDetail) SetPurposeNil(b bool)`

 SetPurposeNil sets the value for Purpose to be an explicit nil

### UnsetPurpose
`func (o *WithdrawalDetail) UnsetPurpose()`

UnsetPurpose ensures that no value is present for Purpose, not even an explicit nil
### GetCreated

`func (o *WithdrawalDetail) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *WithdrawalDetail) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *WithdrawalDetail) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetWithdrawalType

`func (o *WithdrawalDetail) GetWithdrawalType() string`

GetWithdrawalType returns the WithdrawalType field if non-nil, zero value otherwise.

### GetWithdrawalTypeOk

`func (o *WithdrawalDetail) GetWithdrawalTypeOk() (*string, bool)`

GetWithdrawalTypeOk returns a tuple with the WithdrawalType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWithdrawalType

`func (o *WithdrawalDetail) SetWithdrawalType(v string)`

SetWithdrawalType sets WithdrawalType field to given value.


### GetExtraData

`func (o *WithdrawalDetail) GetExtraData() map[string]interface{}`

GetExtraData returns the ExtraData field if non-nil, zero value otherwise.

### GetExtraDataOk

`func (o *WithdrawalDetail) GetExtraDataOk() (*map[string]interface{}, bool)`

GetExtraDataOk returns a tuple with the ExtraData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraData

`func (o *WithdrawalDetail) SetExtraData(v map[string]interface{})`

SetExtraData sets ExtraData field to given value.

### HasExtraData

`func (o *WithdrawalDetail) HasExtraData() bool`

HasExtraData returns a boolean if a field has been set.

### SetExtraDataNil

`func (o *WithdrawalDetail) SetExtraDataNil(b bool)`

 SetExtraDataNil sets the value for ExtraData to be an explicit nil

### UnsetExtraData
`func (o *WithdrawalDetail) UnsetExtraData()`

UnsetExtraData ensures that no value is present for ExtraData, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


