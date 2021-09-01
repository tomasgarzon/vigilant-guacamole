# PatchedAssessment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | Pointer to **string** |  | [optional] [readonly] 
**Completed** | Pointer to **NullableTime** |  | [optional] 
**Choices** | Pointer to [**[]RiskChoiceQuestionCode**](RiskChoiceQuestionCode.md) |  | [optional] 
**Status** | Pointer to [**AssessmentStatusEnum**](AssessmentStatusEnum.md) |  | [optional] 
**RiskLevel** | Pointer to **int32** |  | [optional] [readonly] 
**Created** | Pointer to **time.Time** |  | [optional] [readonly] 

## Methods

### NewPatchedAssessment

`func NewPatchedAssessment() *PatchedAssessment`

NewPatchedAssessment instantiates a new PatchedAssessment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedAssessmentWithDefaults

`func NewPatchedAssessmentWithDefaults() *PatchedAssessment`

NewPatchedAssessmentWithDefaults instantiates a new PatchedAssessment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *PatchedAssessment) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *PatchedAssessment) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *PatchedAssessment) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *PatchedAssessment) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### GetCompleted

`func (o *PatchedAssessment) GetCompleted() time.Time`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *PatchedAssessment) GetCompletedOk() (*time.Time, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *PatchedAssessment) SetCompleted(v time.Time)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *PatchedAssessment) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### SetCompletedNil

`func (o *PatchedAssessment) SetCompletedNil(b bool)`

 SetCompletedNil sets the value for Completed to be an explicit nil

### UnsetCompleted
`func (o *PatchedAssessment) UnsetCompleted()`

UnsetCompleted ensures that no value is present for Completed, not even an explicit nil
### GetChoices

`func (o *PatchedAssessment) GetChoices() []RiskChoiceQuestionCode`

GetChoices returns the Choices field if non-nil, zero value otherwise.

### GetChoicesOk

`func (o *PatchedAssessment) GetChoicesOk() (*[]RiskChoiceQuestionCode, bool)`

GetChoicesOk returns a tuple with the Choices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChoices

`func (o *PatchedAssessment) SetChoices(v []RiskChoiceQuestionCode)`

SetChoices sets Choices field to given value.

### HasChoices

`func (o *PatchedAssessment) HasChoices() bool`

HasChoices returns a boolean if a field has been set.

### GetStatus

`func (o *PatchedAssessment) GetStatus() AssessmentStatusEnum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *PatchedAssessment) GetStatusOk() (*AssessmentStatusEnum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *PatchedAssessment) SetStatus(v AssessmentStatusEnum)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *PatchedAssessment) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetRiskLevel

`func (o *PatchedAssessment) GetRiskLevel() int32`

GetRiskLevel returns the RiskLevel field if non-nil, zero value otherwise.

### GetRiskLevelOk

`func (o *PatchedAssessment) GetRiskLevelOk() (*int32, bool)`

GetRiskLevelOk returns a tuple with the RiskLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskLevel

`func (o *PatchedAssessment) SetRiskLevel(v int32)`

SetRiskLevel sets RiskLevel field to given value.

### HasRiskLevel

`func (o *PatchedAssessment) HasRiskLevel() bool`

HasRiskLevel returns a boolean if a field has been set.

### GetCreated

`func (o *PatchedAssessment) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *PatchedAssessment) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *PatchedAssessment) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *PatchedAssessment) HasCreated() bool`

HasCreated returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


