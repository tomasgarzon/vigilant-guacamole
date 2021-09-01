# DepositCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**Amount** | **float64** |  | 
**Provider** | **string** |  | 
**Reference** | **string** |  | [readonly] 
**Status** | [**StatusB6aEnum**](StatusB6aEnum.md) |  | [readonly] 
**Reason** | **string** | Cancelled reason | [readonly] 
**Completed** | **time.Time** |  | [readonly] 
**DepositType** | Pointer to [**DepositTypeEnum**](DepositTypeEnum.md) |  | [optional] 
**TransactedAt** | **time.Time** |  | [readonly] 
**ExtraData** | Pointer to **map[string]interface{}** | Additional deposit attributes for the specific portal | [optional] 

## Methods

### NewDepositCreate

`func NewDepositCreate(uuid string, amount float64, provider string, reference string, status StatusB6aEnum, reason string, completed time.Time, transactedAt time.Time, ) *DepositCreate`

NewDepositCreate instantiates a new DepositCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDepositCreateWithDefaults

`func NewDepositCreateWithDefaults() *DepositCreate`

NewDepositCreateWithDefaults instantiates a new DepositCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *DepositCreate) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *DepositCreate) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *DepositCreate) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetAmount

`func (o *DepositCreate) GetAmount() float64`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *DepositCreate) GetAmountOk() (*float64, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *DepositCreate) SetAmount(v float64)`

SetAmount sets Amount field to given value.


### GetProvider

`func (o *DepositCreate) GetProvider() string`

GetProvider returns the Provider field if non-nil, zero value otherwise.

### GetProviderOk

`func (o *DepositCreate) GetProviderOk() (*string, bool)`

GetProviderOk returns a tuple with the Provider field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvider

`func (o *DepositCreate) SetProvider(v string)`

SetProvider sets Provider field to given value.


### GetReference

`func (o *DepositCreate) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *DepositCreate) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *DepositCreate) SetReference(v string)`

SetReference sets Reference field to given value.


### GetStatus

`func (o *DepositCreate) GetStatus() StatusB6aEnum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *DepositCreate) GetStatusOk() (*StatusB6aEnum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *DepositCreate) SetStatus(v StatusB6aEnum)`

SetStatus sets Status field to given value.


### GetReason

`func (o *DepositCreate) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *DepositCreate) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *DepositCreate) SetReason(v string)`

SetReason sets Reason field to given value.


### GetCompleted

`func (o *DepositCreate) GetCompleted() time.Time`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *DepositCreate) GetCompletedOk() (*time.Time, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *DepositCreate) SetCompleted(v time.Time)`

SetCompleted sets Completed field to given value.


### GetDepositType

`func (o *DepositCreate) GetDepositType() DepositTypeEnum`

GetDepositType returns the DepositType field if non-nil, zero value otherwise.

### GetDepositTypeOk

`func (o *DepositCreate) GetDepositTypeOk() (*DepositTypeEnum, bool)`

GetDepositTypeOk returns a tuple with the DepositType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositType

`func (o *DepositCreate) SetDepositType(v DepositTypeEnum)`

SetDepositType sets DepositType field to given value.

### HasDepositType

`func (o *DepositCreate) HasDepositType() bool`

HasDepositType returns a boolean if a field has been set.

### GetTransactedAt

`func (o *DepositCreate) GetTransactedAt() time.Time`

GetTransactedAt returns the TransactedAt field if non-nil, zero value otherwise.

### GetTransactedAtOk

`func (o *DepositCreate) GetTransactedAtOk() (*time.Time, bool)`

GetTransactedAtOk returns a tuple with the TransactedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactedAt

`func (o *DepositCreate) SetTransactedAt(v time.Time)`

SetTransactedAt sets TransactedAt field to given value.


### GetExtraData

`func (o *DepositCreate) GetExtraData() map[string]interface{}`

GetExtraData returns the ExtraData field if non-nil, zero value otherwise.

### GetExtraDataOk

`func (o *DepositCreate) GetExtraDataOk() (*map[string]interface{}, bool)`

GetExtraDataOk returns a tuple with the ExtraData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraData

`func (o *DepositCreate) SetExtraData(v map[string]interface{})`

SetExtraData sets ExtraData field to given value.

### HasExtraData

`func (o *DepositCreate) HasExtraData() bool`

HasExtraData returns a boolean if a field has been set.

### SetExtraDataNil

`func (o *DepositCreate) SetExtraDataNil(b bool)`

 SetExtraDataNil sets the value for ExtraData to be an explicit nil

### UnsetExtraData
`func (o *DepositCreate) UnsetExtraData()`

UnsetExtraData ensures that no value is present for ExtraData, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


