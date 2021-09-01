# DepositDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**Portfolio** | **string** |  | 
**Amount** | **float64** |  | 
**Provider** | **string** |  | 
**Reference** | **string** |  | [readonly] 
**Status** | Pointer to [**StatusB6aEnum**](StatusB6aEnum.md) |  | [optional] 
**Reason** | Pointer to **string** | Cancelled reason | [optional] 
**Completed** | Pointer to **NullableTime** |  | [optional] 
**DepositType** | Pointer to [**DepositTypeEnum**](DepositTypeEnum.md) |  | [optional] 
**TransactedAt** | Pointer to **NullableTime** |  | [optional] 
**ExtraData** | Pointer to **map[string]interface{}** | Additional deposit attributes for the specific portal | [optional] 

## Methods

### NewDepositDetail

`func NewDepositDetail(uuid string, portfolio string, amount float64, provider string, reference string, ) *DepositDetail`

NewDepositDetail instantiates a new DepositDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDepositDetailWithDefaults

`func NewDepositDetailWithDefaults() *DepositDetail`

NewDepositDetailWithDefaults instantiates a new DepositDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *DepositDetail) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *DepositDetail) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *DepositDetail) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetPortfolio

`func (o *DepositDetail) GetPortfolio() string`

GetPortfolio returns the Portfolio field if non-nil, zero value otherwise.

### GetPortfolioOk

`func (o *DepositDetail) GetPortfolioOk() (*string, bool)`

GetPortfolioOk returns a tuple with the Portfolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPortfolio

`func (o *DepositDetail) SetPortfolio(v string)`

SetPortfolio sets Portfolio field to given value.


### GetAmount

`func (o *DepositDetail) GetAmount() float64`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *DepositDetail) GetAmountOk() (*float64, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *DepositDetail) SetAmount(v float64)`

SetAmount sets Amount field to given value.


### GetProvider

`func (o *DepositDetail) GetProvider() string`

GetProvider returns the Provider field if non-nil, zero value otherwise.

### GetProviderOk

`func (o *DepositDetail) GetProviderOk() (*string, bool)`

GetProviderOk returns a tuple with the Provider field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvider

`func (o *DepositDetail) SetProvider(v string)`

SetProvider sets Provider field to given value.


### GetReference

`func (o *DepositDetail) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *DepositDetail) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *DepositDetail) SetReference(v string)`

SetReference sets Reference field to given value.


### GetStatus

`func (o *DepositDetail) GetStatus() StatusB6aEnum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *DepositDetail) GetStatusOk() (*StatusB6aEnum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *DepositDetail) SetStatus(v StatusB6aEnum)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *DepositDetail) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetReason

`func (o *DepositDetail) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *DepositDetail) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *DepositDetail) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *DepositDetail) HasReason() bool`

HasReason returns a boolean if a field has been set.

### GetCompleted

`func (o *DepositDetail) GetCompleted() time.Time`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *DepositDetail) GetCompletedOk() (*time.Time, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *DepositDetail) SetCompleted(v time.Time)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *DepositDetail) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### SetCompletedNil

`func (o *DepositDetail) SetCompletedNil(b bool)`

 SetCompletedNil sets the value for Completed to be an explicit nil

### UnsetCompleted
`func (o *DepositDetail) UnsetCompleted()`

UnsetCompleted ensures that no value is present for Completed, not even an explicit nil
### GetDepositType

`func (o *DepositDetail) GetDepositType() DepositTypeEnum`

GetDepositType returns the DepositType field if non-nil, zero value otherwise.

### GetDepositTypeOk

`func (o *DepositDetail) GetDepositTypeOk() (*DepositTypeEnum, bool)`

GetDepositTypeOk returns a tuple with the DepositType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositType

`func (o *DepositDetail) SetDepositType(v DepositTypeEnum)`

SetDepositType sets DepositType field to given value.

### HasDepositType

`func (o *DepositDetail) HasDepositType() bool`

HasDepositType returns a boolean if a field has been set.

### GetTransactedAt

`func (o *DepositDetail) GetTransactedAt() time.Time`

GetTransactedAt returns the TransactedAt field if non-nil, zero value otherwise.

### GetTransactedAtOk

`func (o *DepositDetail) GetTransactedAtOk() (*time.Time, bool)`

GetTransactedAtOk returns a tuple with the TransactedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactedAt

`func (o *DepositDetail) SetTransactedAt(v time.Time)`

SetTransactedAt sets TransactedAt field to given value.

### HasTransactedAt

`func (o *DepositDetail) HasTransactedAt() bool`

HasTransactedAt returns a boolean if a field has been set.

### SetTransactedAtNil

`func (o *DepositDetail) SetTransactedAtNil(b bool)`

 SetTransactedAtNil sets the value for TransactedAt to be an explicit nil

### UnsetTransactedAt
`func (o *DepositDetail) UnsetTransactedAt()`

UnsetTransactedAt ensures that no value is present for TransactedAt, not even an explicit nil
### GetExtraData

`func (o *DepositDetail) GetExtraData() map[string]interface{}`

GetExtraData returns the ExtraData field if non-nil, zero value otherwise.

### GetExtraDataOk

`func (o *DepositDetail) GetExtraDataOk() (*map[string]interface{}, bool)`

GetExtraDataOk returns a tuple with the ExtraData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraData

`func (o *DepositDetail) SetExtraData(v map[string]interface{})`

SetExtraData sets ExtraData field to given value.

### HasExtraData

`func (o *DepositDetail) HasExtraData() bool`

HasExtraData returns a boolean if a field has been set.

### SetExtraDataNil

`func (o *DepositDetail) SetExtraDataNil(b bool)`

 SetExtraDataNil sets the value for ExtraData to be an explicit nil

### UnsetExtraData
`func (o *DepositDetail) UnsetExtraData()`

UnsetExtraData ensures that no value is present for ExtraData, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


