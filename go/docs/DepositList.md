# DepositList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**Amount** | **float64** |  | [readonly] 
**Reference** | **string** |  | [readonly] 
**Status** | [**StatusB6aEnum**](StatusB6aEnum.md) |  | [readonly] 
**DepositType** | [**DepositTypeEnum**](DepositTypeEnum.md) |  | [readonly] 
**Completed** | **time.Time** |  | [readonly] 
**TransactedAt** | **time.Time** |  | [readonly] 
**ExtraData** | **map[string]interface{}** | Additional deposit attributes for the specific portal | [readonly] 

## Methods

### NewDepositList

`func NewDepositList(uuid string, amount float64, reference string, status StatusB6aEnum, depositType DepositTypeEnum, completed time.Time, transactedAt time.Time, extraData map[string]interface{}, ) *DepositList`

NewDepositList instantiates a new DepositList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDepositListWithDefaults

`func NewDepositListWithDefaults() *DepositList`

NewDepositListWithDefaults instantiates a new DepositList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *DepositList) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *DepositList) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *DepositList) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetAmount

`func (o *DepositList) GetAmount() float64`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *DepositList) GetAmountOk() (*float64, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *DepositList) SetAmount(v float64)`

SetAmount sets Amount field to given value.


### GetReference

`func (o *DepositList) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *DepositList) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *DepositList) SetReference(v string)`

SetReference sets Reference field to given value.


### GetStatus

`func (o *DepositList) GetStatus() StatusB6aEnum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *DepositList) GetStatusOk() (*StatusB6aEnum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *DepositList) SetStatus(v StatusB6aEnum)`

SetStatus sets Status field to given value.


### GetDepositType

`func (o *DepositList) GetDepositType() DepositTypeEnum`

GetDepositType returns the DepositType field if non-nil, zero value otherwise.

### GetDepositTypeOk

`func (o *DepositList) GetDepositTypeOk() (*DepositTypeEnum, bool)`

GetDepositTypeOk returns a tuple with the DepositType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositType

`func (o *DepositList) SetDepositType(v DepositTypeEnum)`

SetDepositType sets DepositType field to given value.


### GetCompleted

`func (o *DepositList) GetCompleted() time.Time`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *DepositList) GetCompletedOk() (*time.Time, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *DepositList) SetCompleted(v time.Time)`

SetCompleted sets Completed field to given value.


### GetTransactedAt

`func (o *DepositList) GetTransactedAt() time.Time`

GetTransactedAt returns the TransactedAt field if non-nil, zero value otherwise.

### GetTransactedAtOk

`func (o *DepositList) GetTransactedAtOk() (*time.Time, bool)`

GetTransactedAtOk returns a tuple with the TransactedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactedAt

`func (o *DepositList) SetTransactedAt(v time.Time)`

SetTransactedAt sets TransactedAt field to given value.


### GetExtraData

`func (o *DepositList) GetExtraData() map[string]interface{}`

GetExtraData returns the ExtraData field if non-nil, zero value otherwise.

### GetExtraDataOk

`func (o *DepositList) GetExtraDataOk() (*map[string]interface{}, bool)`

GetExtraDataOk returns a tuple with the ExtraData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraData

`func (o *DepositList) SetExtraData(v map[string]interface{})`

SetExtraData sets ExtraData field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


