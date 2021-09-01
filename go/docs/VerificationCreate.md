# VerificationCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**VerifyType** | [**VerifyTypeEnum**](VerifyTypeEnum.md) |  | 
**Status** | Pointer to [**StatusBd7Enum**](StatusBd7Enum.md) |  | [optional] 
**Result** | Pointer to [**OneOfResultEnumBlankEnum**](oneOf&lt;ResultEnum,BlankEnum&gt;.md) |  | [optional] 
**Created** | **time.Time** |  | [readonly] 
**Updated** | **time.Time** |  | [readonly] 

## Methods

### NewVerificationCreate

`func NewVerificationCreate(uuid string, verifyType VerifyTypeEnum, created time.Time, updated time.Time, ) *VerificationCreate`

NewVerificationCreate instantiates a new VerificationCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVerificationCreateWithDefaults

`func NewVerificationCreateWithDefaults() *VerificationCreate`

NewVerificationCreateWithDefaults instantiates a new VerificationCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *VerificationCreate) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *VerificationCreate) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *VerificationCreate) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetVerifyType

`func (o *VerificationCreate) GetVerifyType() VerifyTypeEnum`

GetVerifyType returns the VerifyType field if non-nil, zero value otherwise.

### GetVerifyTypeOk

`func (o *VerificationCreate) GetVerifyTypeOk() (*VerifyTypeEnum, bool)`

GetVerifyTypeOk returns a tuple with the VerifyType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVerifyType

`func (o *VerificationCreate) SetVerifyType(v VerifyTypeEnum)`

SetVerifyType sets VerifyType field to given value.


### GetStatus

`func (o *VerificationCreate) GetStatus() StatusBd7Enum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *VerificationCreate) GetStatusOk() (*StatusBd7Enum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *VerificationCreate) SetStatus(v StatusBd7Enum)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *VerificationCreate) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetResult

`func (o *VerificationCreate) GetResult() OneOfResultEnumBlankEnum`

GetResult returns the Result field if non-nil, zero value otherwise.

### GetResultOk

`func (o *VerificationCreate) GetResultOk() (*OneOfResultEnumBlankEnum, bool)`

GetResultOk returns a tuple with the Result field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResult

`func (o *VerificationCreate) SetResult(v OneOfResultEnumBlankEnum)`

SetResult sets Result field to given value.

### HasResult

`func (o *VerificationCreate) HasResult() bool`

HasResult returns a boolean if a field has been set.

### GetCreated

`func (o *VerificationCreate) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *VerificationCreate) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *VerificationCreate) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetUpdated

`func (o *VerificationCreate) GetUpdated() time.Time`

GetUpdated returns the Updated field if non-nil, zero value otherwise.

### GetUpdatedOk

`func (o *VerificationCreate) GetUpdatedOk() (*time.Time, bool)`

GetUpdatedOk returns a tuple with the Updated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdated

`func (o *VerificationCreate) SetUpdated(v time.Time)`

SetUpdated sets Updated field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


