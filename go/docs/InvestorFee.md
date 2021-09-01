# InvestorFee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **float64** | Determinates a percentage or an amount (between 0 and 1 if percentage otherwise Positive Decimal) | [optional] 
**ValueUnit** | Pointer to [**ValueUnitEnum**](ValueUnitEnum.md) | Determines the type of the value(Fixed, Percentage) | [optional] 
**FeeType** | [**FeeTypeEnum**](FeeTypeEnum.md) | Each choice should have a related method on fee model that contains the logic to charge the client | 
**Concept** | **string** | Describes the concept that will be shown on invoice | 
**DateFrom** | Pointer to **NullableString** | Defines the end date when the percentage should be applied | [optional] 
**DateTo** | Pointer to **NullableString** | Defines the start date when the percentage should be applied | [optional] 
**AmountFrom** | Pointer to **NullableFloat64** | Defines the amount start range when the percentage should be applied | [optional] 
**AmountTo** | Pointer to **NullableFloat64** | Defines the amount end range when the percentage should be applied | [optional] 
**Uuid** | **string** |  | [readonly] 
**Created** | **time.Time** |  | [readonly] 
**Updated** | **time.Time** |  | [readonly] 

## Methods

### NewInvestorFee

`func NewInvestorFee(feeType FeeTypeEnum, concept string, uuid string, created time.Time, updated time.Time, ) *InvestorFee`

NewInvestorFee instantiates a new InvestorFee object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInvestorFeeWithDefaults

`func NewInvestorFeeWithDefaults() *InvestorFee`

NewInvestorFeeWithDefaults instantiates a new InvestorFee object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *InvestorFee) GetValue() float64`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *InvestorFee) GetValueOk() (*float64, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *InvestorFee) SetValue(v float64)`

SetValue sets Value field to given value.

### HasValue

`func (o *InvestorFee) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetValueUnit

`func (o *InvestorFee) GetValueUnit() ValueUnitEnum`

GetValueUnit returns the ValueUnit field if non-nil, zero value otherwise.

### GetValueUnitOk

`func (o *InvestorFee) GetValueUnitOk() (*ValueUnitEnum, bool)`

GetValueUnitOk returns a tuple with the ValueUnit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValueUnit

`func (o *InvestorFee) SetValueUnit(v ValueUnitEnum)`

SetValueUnit sets ValueUnit field to given value.

### HasValueUnit

`func (o *InvestorFee) HasValueUnit() bool`

HasValueUnit returns a boolean if a field has been set.

### GetFeeType

`func (o *InvestorFee) GetFeeType() FeeTypeEnum`

GetFeeType returns the FeeType field if non-nil, zero value otherwise.

### GetFeeTypeOk

`func (o *InvestorFee) GetFeeTypeOk() (*FeeTypeEnum, bool)`

GetFeeTypeOk returns a tuple with the FeeType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeeType

`func (o *InvestorFee) SetFeeType(v FeeTypeEnum)`

SetFeeType sets FeeType field to given value.


### GetConcept

`func (o *InvestorFee) GetConcept() string`

GetConcept returns the Concept field if non-nil, zero value otherwise.

### GetConceptOk

`func (o *InvestorFee) GetConceptOk() (*string, bool)`

GetConceptOk returns a tuple with the Concept field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConcept

`func (o *InvestorFee) SetConcept(v string)`

SetConcept sets Concept field to given value.


### GetDateFrom

`func (o *InvestorFee) GetDateFrom() string`

GetDateFrom returns the DateFrom field if non-nil, zero value otherwise.

### GetDateFromOk

`func (o *InvestorFee) GetDateFromOk() (*string, bool)`

GetDateFromOk returns a tuple with the DateFrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateFrom

`func (o *InvestorFee) SetDateFrom(v string)`

SetDateFrom sets DateFrom field to given value.

### HasDateFrom

`func (o *InvestorFee) HasDateFrom() bool`

HasDateFrom returns a boolean if a field has been set.

### SetDateFromNil

`func (o *InvestorFee) SetDateFromNil(b bool)`

 SetDateFromNil sets the value for DateFrom to be an explicit nil

### UnsetDateFrom
`func (o *InvestorFee) UnsetDateFrom()`

UnsetDateFrom ensures that no value is present for DateFrom, not even an explicit nil
### GetDateTo

`func (o *InvestorFee) GetDateTo() string`

GetDateTo returns the DateTo field if non-nil, zero value otherwise.

### GetDateToOk

`func (o *InvestorFee) GetDateToOk() (*string, bool)`

GetDateToOk returns a tuple with the DateTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateTo

`func (o *InvestorFee) SetDateTo(v string)`

SetDateTo sets DateTo field to given value.

### HasDateTo

`func (o *InvestorFee) HasDateTo() bool`

HasDateTo returns a boolean if a field has been set.

### SetDateToNil

`func (o *InvestorFee) SetDateToNil(b bool)`

 SetDateToNil sets the value for DateTo to be an explicit nil

### UnsetDateTo
`func (o *InvestorFee) UnsetDateTo()`

UnsetDateTo ensures that no value is present for DateTo, not even an explicit nil
### GetAmountFrom

`func (o *InvestorFee) GetAmountFrom() float64`

GetAmountFrom returns the AmountFrom field if non-nil, zero value otherwise.

### GetAmountFromOk

`func (o *InvestorFee) GetAmountFromOk() (*float64, bool)`

GetAmountFromOk returns a tuple with the AmountFrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountFrom

`func (o *InvestorFee) SetAmountFrom(v float64)`

SetAmountFrom sets AmountFrom field to given value.

### HasAmountFrom

`func (o *InvestorFee) HasAmountFrom() bool`

HasAmountFrom returns a boolean if a field has been set.

### SetAmountFromNil

`func (o *InvestorFee) SetAmountFromNil(b bool)`

 SetAmountFromNil sets the value for AmountFrom to be an explicit nil

### UnsetAmountFrom
`func (o *InvestorFee) UnsetAmountFrom()`

UnsetAmountFrom ensures that no value is present for AmountFrom, not even an explicit nil
### GetAmountTo

`func (o *InvestorFee) GetAmountTo() float64`

GetAmountTo returns the AmountTo field if non-nil, zero value otherwise.

### GetAmountToOk

`func (o *InvestorFee) GetAmountToOk() (*float64, bool)`

GetAmountToOk returns a tuple with the AmountTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountTo

`func (o *InvestorFee) SetAmountTo(v float64)`

SetAmountTo sets AmountTo field to given value.

### HasAmountTo

`func (o *InvestorFee) HasAmountTo() bool`

HasAmountTo returns a boolean if a field has been set.

### SetAmountToNil

`func (o *InvestorFee) SetAmountToNil(b bool)`

 SetAmountToNil sets the value for AmountTo to be an explicit nil

### UnsetAmountTo
`func (o *InvestorFee) UnsetAmountTo()`

UnsetAmountTo ensures that no value is present for AmountTo, not even an explicit nil
### GetUuid

`func (o *InvestorFee) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *InvestorFee) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *InvestorFee) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetCreated

`func (o *InvestorFee) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *InvestorFee) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *InvestorFee) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetUpdated

`func (o *InvestorFee) GetUpdated() time.Time`

GetUpdated returns the Updated field if non-nil, zero value otherwise.

### GetUpdatedOk

`func (o *InvestorFee) GetUpdatedOk() (*time.Time, bool)`

GetUpdatedOk returns a tuple with the Updated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdated

`func (o *InvestorFee) SetUpdated(v time.Time)`

SetUpdated sets Updated field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


