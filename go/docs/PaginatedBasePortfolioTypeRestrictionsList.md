# PaginatedBasePortfolioTypeRestrictionsList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** |  | [optional] 
**Next** | Pointer to **NullableString** |  | [optional] 
**Previous** | Pointer to **NullableString** |  | [optional] 
**Results** | Pointer to [**[]BasePortfolioTypeRestrictions**](BasePortfolioTypeRestrictions.md) |  | [optional] 

## Methods

### NewPaginatedBasePortfolioTypeRestrictionsList

`func NewPaginatedBasePortfolioTypeRestrictionsList() *PaginatedBasePortfolioTypeRestrictionsList`

NewPaginatedBasePortfolioTypeRestrictionsList instantiates a new PaginatedBasePortfolioTypeRestrictionsList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaginatedBasePortfolioTypeRestrictionsListWithDefaults

`func NewPaginatedBasePortfolioTypeRestrictionsListWithDefaults() *PaginatedBasePortfolioTypeRestrictionsList`

NewPaginatedBasePortfolioTypeRestrictionsListWithDefaults instantiates a new PaginatedBasePortfolioTypeRestrictionsList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *PaginatedBasePortfolioTypeRestrictionsList) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *PaginatedBasePortfolioTypeRestrictionsList) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *PaginatedBasePortfolioTypeRestrictionsList) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *PaginatedBasePortfolioTypeRestrictionsList) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetNext

`func (o *PaginatedBasePortfolioTypeRestrictionsList) GetNext() string`

GetNext returns the Next field if non-nil, zero value otherwise.

### GetNextOk

`func (o *PaginatedBasePortfolioTypeRestrictionsList) GetNextOk() (*string, bool)`

GetNextOk returns a tuple with the Next field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNext

`func (o *PaginatedBasePortfolioTypeRestrictionsList) SetNext(v string)`

SetNext sets Next field to given value.

### HasNext

`func (o *PaginatedBasePortfolioTypeRestrictionsList) HasNext() bool`

HasNext returns a boolean if a field has been set.

### SetNextNil

`func (o *PaginatedBasePortfolioTypeRestrictionsList) SetNextNil(b bool)`

 SetNextNil sets the value for Next to be an explicit nil

### UnsetNext
`func (o *PaginatedBasePortfolioTypeRestrictionsList) UnsetNext()`

UnsetNext ensures that no value is present for Next, not even an explicit nil
### GetPrevious

`func (o *PaginatedBasePortfolioTypeRestrictionsList) GetPrevious() string`

GetPrevious returns the Previous field if non-nil, zero value otherwise.

### GetPreviousOk

`func (o *PaginatedBasePortfolioTypeRestrictionsList) GetPreviousOk() (*string, bool)`

GetPreviousOk returns a tuple with the Previous field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrevious

`func (o *PaginatedBasePortfolioTypeRestrictionsList) SetPrevious(v string)`

SetPrevious sets Previous field to given value.

### HasPrevious

`func (o *PaginatedBasePortfolioTypeRestrictionsList) HasPrevious() bool`

HasPrevious returns a boolean if a field has been set.

### SetPreviousNil

`func (o *PaginatedBasePortfolioTypeRestrictionsList) SetPreviousNil(b bool)`

 SetPreviousNil sets the value for Previous to be an explicit nil

### UnsetPrevious
`func (o *PaginatedBasePortfolioTypeRestrictionsList) UnsetPrevious()`

UnsetPrevious ensures that no value is present for Previous, not even an explicit nil
### GetResults

`func (o *PaginatedBasePortfolioTypeRestrictionsList) GetResults() []BasePortfolioTypeRestrictions`

GetResults returns the Results field if non-nil, zero value otherwise.

### GetResultsOk

`func (o *PaginatedBasePortfolioTypeRestrictionsList) GetResultsOk() (*[]BasePortfolioTypeRestrictions, bool)`

GetResultsOk returns a tuple with the Results field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResults

`func (o *PaginatedBasePortfolioTypeRestrictionsList) SetResults(v []BasePortfolioTypeRestrictions)`

SetResults sets Results field to given value.

### HasResults

`func (o *PaginatedBasePortfolioTypeRestrictionsList) HasResults() bool`

HasResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


