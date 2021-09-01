# PatchedInvestorFee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **float64** | Determinates a percentage or an amount (between 0 and 1 if percentage otherwise Positive Decimal) | [optional] 
**ValueUnit** | Pointer to [**ValueUnitEnum**](ValueUnitEnum.md) | Determines the type of the value(Fixed, Percentage) | [optional] 
**FeeType** | Pointer to [**FeeTypeEnum**](FeeTypeEnum.md) | Each choice should have a related method on fee model that contains the logic to charge the client | [optional] 
**Concept** | Pointer to **string** | Describes the concept that will be shown on invoice | [optional] 
**DateFrom** | Pointer to **NullableString** | Defines the end date when the percentage should be applied | [optional] 
**DateTo** | Pointer to **NullableString** | Defines the start date when the percentage should be applied | [optional] 
**AmountFrom** | Pointer to **NullableFloat64** | Defines the amount start range when the percentage should be applied | [optional] 
**AmountTo** | Pointer to **NullableFloat64** | Defines the amount end range when the percentage should be applied | [optional] 
**Uuid** | Pointer to **string** |  | [optional] [readonly] 
**Created** | Pointer to **time.Time** |  | [optional] [readonly] 
**Updated** | Pointer to **time.Time** |  | [optional] [readonly] 

## Methods

### NewPatchedInvestorFee

`func NewPatchedInvestorFee() *PatchedInvestorFee`

NewPatchedInvestorFee instantiates a new PatchedInvestorFee object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedInvestorFeeWithDefaults

`func NewPatchedInvestorFeeWithDefaults() *PatchedInvestorFee`

NewPatchedInvestorFeeWithDefaults instantiates a new PatchedInvestorFee object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *PatchedInvestorFee) GetValue() float64`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *PatchedInvestorFee) GetValueOk() (*float64, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *PatchedInvestorFee) SetValue(v float64)`

SetValue sets Value field to given value.

### HasValue

`func (o *PatchedInvestorFee) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetValueUnit

`func (o *PatchedInvestorFee) GetValueUnit() ValueUnitEnum`

GetValueUnit returns the ValueUnit field if non-nil, zero value otherwise.

### GetValueUnitOk

`func (o *PatchedInvestorFee) GetValueUnitOk() (*ValueUnitEnum, bool)`

GetValueUnitOk returns a tuple with the ValueUnit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValueUnit

`func (o *PatchedInvestorFee) SetValueUnit(v ValueUnitEnum)`

SetValueUnit sets ValueUnit field to given value.

### HasValueUnit

`func (o *PatchedInvestorFee) HasValueUnit() bool`

HasValueUnit returns a boolean if a field has been set.

### GetFeeType

`func (o *PatchedInvestorFee) GetFeeType() FeeTypeEnum`

GetFeeType returns the FeeType field if non-nil, zero value otherwise.

### GetFeeTypeOk

`func (o *PatchedInvestorFee) GetFeeTypeOk() (*FeeTypeEnum, bool)`

GetFeeTypeOk returns a tuple with the FeeType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeeType

`func (o *PatchedInvestorFee) SetFeeType(v FeeTypeEnum)`

SetFeeType sets FeeType field to given value.

### HasFeeType

`func (o *PatchedInvestorFee) HasFeeType() bool`

HasFeeType returns a boolean if a field has been set.

### GetConcept

`func (o *PatchedInvestorFee) GetConcept() string`

GetConcept returns the Concept field if non-nil, zero value otherwise.

### GetConceptOk

`func (o *PatchedInvestorFee) GetConceptOk() (*string, bool)`

GetConceptOk returns a tuple with the Concept field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConcept

`func (o *PatchedInvestorFee) SetConcept(v string)`

SetConcept sets Concept field to given value.

### HasConcept

`func (o *PatchedInvestorFee) HasConcept() bool`

HasConcept returns a boolean if a field has been set.

### GetDateFrom

`func (o *PatchedInvestorFee) GetDateFrom() string`

GetDateFrom returns the DateFrom field if non-nil, zero value otherwise.

### GetDateFromOk

`func (o *PatchedInvestorFee) GetDateFromOk() (*string, bool)`

GetDateFromOk returns a tuple with the DateFrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateFrom

`func (o *PatchedInvestorFee) SetDateFrom(v string)`

SetDateFrom sets DateFrom field to given value.

### HasDateFrom

`func (o *PatchedInvestorFee) HasDateFrom() bool`

HasDateFrom returns a boolean if a field has been set.

### SetDateFromNil

`func (o *PatchedInvestorFee) SetDateFromNil(b bool)`

 SetDateFromNil sets the value for DateFrom to be an explicit nil

### UnsetDateFrom
`func (o *PatchedInvestorFee) UnsetDateFrom()`

UnsetDateFrom ensures that no value is present for DateFrom, not even an explicit nil
### GetDateTo

`func (o *PatchedInvestorFee) GetDateTo() string`

GetDateTo returns the DateTo field if non-nil, zero value otherwise.

### GetDateToOk

`func (o *PatchedInvestorFee) GetDateToOk() (*string, bool)`

GetDateToOk returns a tuple with the DateTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateTo

`func (o *PatchedInvestorFee) SetDateTo(v string)`

SetDateTo sets DateTo field to given value.

### HasDateTo

`func (o *PatchedInvestorFee) HasDateTo() bool`

HasDateTo returns a boolean if a field has been set.

### SetDateToNil

`func (o *PatchedInvestorFee) SetDateToNil(b bool)`

 SetDateToNil sets the value for DateTo to be an explicit nil

### UnsetDateTo
`func (o *PatchedInvestorFee) UnsetDateTo()`

UnsetDateTo ensures that no value is present for DateTo, not even an explicit nil
### GetAmountFrom

`func (o *PatchedInvestorFee) GetAmountFrom() float64`

GetAmountFrom returns the AmountFrom field if non-nil, zero value otherwise.

### GetAmountFromOk

`func (o *PatchedInvestorFee) GetAmountFromOk() (*float64, bool)`

GetAmountFromOk returns a tuple with the AmountFrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountFrom

`func (o *PatchedInvestorFee) SetAmountFrom(v float64)`

SetAmountFrom sets AmountFrom field to given value.

### HasAmountFrom

`func (o *PatchedInvestorFee) HasAmountFrom() bool`

HasAmountFrom returns a boolean if a field has been set.

### SetAmountFromNil

`func (o *PatchedInvestorFee) SetAmountFromNil(b bool)`

 SetAmountFromNil sets the value for AmountFrom to be an explicit nil

### UnsetAmountFrom
`func (o *PatchedInvestorFee) UnsetAmountFrom()`

UnsetAmountFrom ensures that no value is present for AmountFrom, not even an explicit nil
### GetAmountTo

`func (o *PatchedInvestorFee) GetAmountTo() float64`

GetAmountTo returns the AmountTo field if non-nil, zero value otherwise.

### GetAmountToOk

`func (o *PatchedInvestorFee) GetAmountToOk() (*float64, bool)`

GetAmountToOk returns a tuple with the AmountTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountTo

`func (o *PatchedInvestorFee) SetAmountTo(v float64)`

SetAmountTo sets AmountTo field to given value.

### HasAmountTo

`func (o *PatchedInvestorFee) HasAmountTo() bool`

HasAmountTo returns a boolean if a field has been set.

### SetAmountToNil

`func (o *PatchedInvestorFee) SetAmountToNil(b bool)`

 SetAmountToNil sets the value for AmountTo to be an explicit nil

### UnsetAmountTo
`func (o *PatchedInvestorFee) UnsetAmountTo()`

UnsetAmountTo ensures that no value is present for AmountTo, not even an explicit nil
### GetUuid

`func (o *PatchedInvestorFee) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *PatchedInvestorFee) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *PatchedInvestorFee) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *PatchedInvestorFee) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### GetCreated

`func (o *PatchedInvestorFee) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *PatchedInvestorFee) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *PatchedInvestorFee) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *PatchedInvestorFee) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetUpdated

`func (o *PatchedInvestorFee) GetUpdated() time.Time`

GetUpdated returns the Updated field if non-nil, zero value otherwise.

### GetUpdatedOk

`func (o *PatchedInvestorFee) GetUpdatedOk() (*time.Time, bool)`

GetUpdatedOk returns a tuple with the Updated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdated

`func (o *PatchedInvestorFee) SetUpdated(v time.Time)`

SetUpdated sets Updated field to given value.

### HasUpdated

`func (o *PatchedInvestorFee) HasUpdated() bool`

HasUpdated returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


