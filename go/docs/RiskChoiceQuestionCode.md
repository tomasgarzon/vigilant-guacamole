# RiskChoiceQuestionCode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | **string** |  | 
**Order** | Pointer to **int32** |  | [optional] 
**Description** | Pointer to **NullableString** |  | [optional] 
**Created** | **time.Time** |  | [readonly] 
**QuestionCode** | **string** |  | 

## Methods

### NewRiskChoiceQuestionCode

`func NewRiskChoiceQuestionCode(code string, created time.Time, questionCode string, ) *RiskChoiceQuestionCode`

NewRiskChoiceQuestionCode instantiates a new RiskChoiceQuestionCode object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRiskChoiceQuestionCodeWithDefaults

`func NewRiskChoiceQuestionCodeWithDefaults() *RiskChoiceQuestionCode`

NewRiskChoiceQuestionCodeWithDefaults instantiates a new RiskChoiceQuestionCode object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *RiskChoiceQuestionCode) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *RiskChoiceQuestionCode) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *RiskChoiceQuestionCode) SetCode(v string)`

SetCode sets Code field to given value.


### GetOrder

`func (o *RiskChoiceQuestionCode) GetOrder() int32`

GetOrder returns the Order field if non-nil, zero value otherwise.

### GetOrderOk

`func (o *RiskChoiceQuestionCode) GetOrderOk() (*int32, bool)`

GetOrderOk returns a tuple with the Order field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrder

`func (o *RiskChoiceQuestionCode) SetOrder(v int32)`

SetOrder sets Order field to given value.

### HasOrder

`func (o *RiskChoiceQuestionCode) HasOrder() bool`

HasOrder returns a boolean if a field has been set.

### GetDescription

`func (o *RiskChoiceQuestionCode) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RiskChoiceQuestionCode) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RiskChoiceQuestionCode) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RiskChoiceQuestionCode) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *RiskChoiceQuestionCode) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *RiskChoiceQuestionCode) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetCreated

`func (o *RiskChoiceQuestionCode) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *RiskChoiceQuestionCode) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *RiskChoiceQuestionCode) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetQuestionCode

`func (o *RiskChoiceQuestionCode) GetQuestionCode() string`

GetQuestionCode returns the QuestionCode field if non-nil, zero value otherwise.

### GetQuestionCodeOk

`func (o *RiskChoiceQuestionCode) GetQuestionCodeOk() (*string, bool)`

GetQuestionCodeOk returns a tuple with the QuestionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuestionCode

`func (o *RiskChoiceQuestionCode) SetQuestionCode(v string)`

SetQuestionCode sets QuestionCode field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


