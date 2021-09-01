# RiskChoice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | **string** |  | [readonly] 
**Order** | **int32** |  | [readonly] 
**Description** | **string** |  | [readonly] 
**Created** | **time.Time** |  | [readonly] 

## Methods

### NewRiskChoice

`func NewRiskChoice(code string, order int32, description string, created time.Time, ) *RiskChoice`

NewRiskChoice instantiates a new RiskChoice object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRiskChoiceWithDefaults

`func NewRiskChoiceWithDefaults() *RiskChoice`

NewRiskChoiceWithDefaults instantiates a new RiskChoice object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *RiskChoice) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *RiskChoice) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *RiskChoice) SetCode(v string)`

SetCode sets Code field to given value.


### GetOrder

`func (o *RiskChoice) GetOrder() int32`

GetOrder returns the Order field if non-nil, zero value otherwise.

### GetOrderOk

`func (o *RiskChoice) GetOrderOk() (*int32, bool)`

GetOrderOk returns a tuple with the Order field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrder

`func (o *RiskChoice) SetOrder(v int32)`

SetOrder sets Order field to given value.


### GetDescription

`func (o *RiskChoice) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RiskChoice) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RiskChoice) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetCreated

`func (o *RiskChoice) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *RiskChoice) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *RiskChoice) SetCreated(v time.Time)`

SetCreated sets Created field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


