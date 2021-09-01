# VerificationWithType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**VerifyType** | [**VerifyTypeEnum**](VerifyTypeEnum.md) |  | 
**Status** | Pointer to [**StatusBd7Enum**](StatusBd7Enum.md) |  | [optional] 
**Result** | Pointer to [**OneOfResultEnumBlankEnum**](oneOf&lt;ResultEnum,BlankEnum&gt;.md) |  | [optional] 
**Created** | **time.Time** |  | [readonly] 
**Updated** | **time.Time** |  | [readonly] 
**VerificationDocuments** | [**[]VerificationDocumentCreate**](VerificationDocumentCreate.md) |  | [readonly] 

## Methods

### NewVerificationWithType

`func NewVerificationWithType(uuid string, verifyType VerifyTypeEnum, created time.Time, updated time.Time, verificationDocuments []VerificationDocumentCreate, ) *VerificationWithType`

NewVerificationWithType instantiates a new VerificationWithType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVerificationWithTypeWithDefaults

`func NewVerificationWithTypeWithDefaults() *VerificationWithType`

NewVerificationWithTypeWithDefaults instantiates a new VerificationWithType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *VerificationWithType) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *VerificationWithType) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *VerificationWithType) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetVerifyType

`func (o *VerificationWithType) GetVerifyType() VerifyTypeEnum`

GetVerifyType returns the VerifyType field if non-nil, zero value otherwise.

### GetVerifyTypeOk

`func (o *VerificationWithType) GetVerifyTypeOk() (*VerifyTypeEnum, bool)`

GetVerifyTypeOk returns a tuple with the VerifyType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVerifyType

`func (o *VerificationWithType) SetVerifyType(v VerifyTypeEnum)`

SetVerifyType sets VerifyType field to given value.


### GetStatus

`func (o *VerificationWithType) GetStatus() StatusBd7Enum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *VerificationWithType) GetStatusOk() (*StatusBd7Enum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *VerificationWithType) SetStatus(v StatusBd7Enum)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *VerificationWithType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetResult

`func (o *VerificationWithType) GetResult() OneOfResultEnumBlankEnum`

GetResult returns the Result field if non-nil, zero value otherwise.

### GetResultOk

`func (o *VerificationWithType) GetResultOk() (*OneOfResultEnumBlankEnum, bool)`

GetResultOk returns a tuple with the Result field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResult

`func (o *VerificationWithType) SetResult(v OneOfResultEnumBlankEnum)`

SetResult sets Result field to given value.

### HasResult

`func (o *VerificationWithType) HasResult() bool`

HasResult returns a boolean if a field has been set.

### GetCreated

`func (o *VerificationWithType) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *VerificationWithType) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *VerificationWithType) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetUpdated

`func (o *VerificationWithType) GetUpdated() time.Time`

GetUpdated returns the Updated field if non-nil, zero value otherwise.

### GetUpdatedOk

`func (o *VerificationWithType) GetUpdatedOk() (*time.Time, bool)`

GetUpdatedOk returns a tuple with the Updated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdated

`func (o *VerificationWithType) SetUpdated(v time.Time)`

SetUpdated sets Updated field to given value.


### GetVerificationDocuments

`func (o *VerificationWithType) GetVerificationDocuments() []VerificationDocumentCreate`

GetVerificationDocuments returns the VerificationDocuments field if non-nil, zero value otherwise.

### GetVerificationDocumentsOk

`func (o *VerificationWithType) GetVerificationDocumentsOk() (*[]VerificationDocumentCreate, bool)`

GetVerificationDocumentsOk returns a tuple with the VerificationDocuments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVerificationDocuments

`func (o *VerificationWithType) SetVerificationDocuments(v []VerificationDocumentCreate)`

SetVerificationDocuments sets VerificationDocuments field to given value.


### SetVerificationDocumentsNil

`func (o *VerificationWithType) SetVerificationDocumentsNil(b bool)`

 SetVerificationDocumentsNil sets the value for VerificationDocuments to be an explicit nil

### UnsetVerificationDocuments
`func (o *VerificationWithType) UnsetVerificationDocuments()`

UnsetVerificationDocuments ensures that no value is present for VerificationDocuments, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


