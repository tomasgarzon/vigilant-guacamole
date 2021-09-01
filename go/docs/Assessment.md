# Assessment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**Completed** | Pointer to **NullableTime** |  | [optional] 
**Choices** | [**[]RiskChoiceQuestionCode**](RiskChoiceQuestionCode.md) |  | 
**Status** | Pointer to [**AssessmentStatusEnum**](AssessmentStatusEnum.md) |  | [optional] 
**RiskLevel** | **int32** |  | [readonly] 
**Created** | **time.Time** |  | [readonly] 

## Methods

### NewAssessment

`func NewAssessment(uuid string, choices []RiskChoiceQuestionCode, riskLevel int32, created time.Time, ) *Assessment`

NewAssessment instantiates a new Assessment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAssessmentWithDefaults

`func NewAssessmentWithDefaults() *Assessment`

NewAssessmentWithDefaults instantiates a new Assessment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *Assessment) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *Assessment) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *Assessment) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetCompleted

`func (o *Assessment) GetCompleted() time.Time`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *Assessment) GetCompletedOk() (*time.Time, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *Assessment) SetCompleted(v time.Time)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *Assessment) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### SetCompletedNil

`func (o *Assessment) SetCompletedNil(b bool)`

 SetCompletedNil sets the value for Completed to be an explicit nil

### UnsetCompleted
`func (o *Assessment) UnsetCompleted()`

UnsetCompleted ensures that no value is present for Completed, not even an explicit nil
### GetChoices

`func (o *Assessment) GetChoices() []RiskChoiceQuestionCode`

GetChoices returns the Choices field if non-nil, zero value otherwise.

### GetChoicesOk

`func (o *Assessment) GetChoicesOk() (*[]RiskChoiceQuestionCode, bool)`

GetChoicesOk returns a tuple with the Choices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChoices

`func (o *Assessment) SetChoices(v []RiskChoiceQuestionCode)`

SetChoices sets Choices field to given value.


### GetStatus

`func (o *Assessment) GetStatus() AssessmentStatusEnum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Assessment) GetStatusOk() (*AssessmentStatusEnum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Assessment) SetStatus(v AssessmentStatusEnum)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Assessment) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetRiskLevel

`func (o *Assessment) GetRiskLevel() int32`

GetRiskLevel returns the RiskLevel field if non-nil, zero value otherwise.

### GetRiskLevelOk

`func (o *Assessment) GetRiskLevelOk() (*int32, bool)`

GetRiskLevelOk returns a tuple with the RiskLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskLevel

`func (o *Assessment) SetRiskLevel(v int32)`

SetRiskLevel sets RiskLevel field to given value.


### GetCreated

`func (o *Assessment) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Assessment) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Assessment) SetCreated(v time.Time)`

SetCreated sets Created field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


