# InvoiceDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**Number** | Pointer to **NullableString** | Invoice legal number | [optional] 
**Status** | Pointer to [**Status260Enum**](Status260Enum.md) |  | [optional] 
**Created** | **time.Time** |  | [readonly] 
**DateFrom** | Pointer to **NullableString** | Beginning of charge period | [optional] 
**DateTo** | Pointer to **NullableString** | End of charge period | [optional] 
**Url** | **string** |  | [readonly] 
**Amount** | **float64** |  | 
**Charges** | **[]string** |  | 

## Methods

### NewInvoiceDetails

`func NewInvoiceDetails(uuid string, created time.Time, url string, amount float64, charges []string, ) *InvoiceDetails`

NewInvoiceDetails instantiates a new InvoiceDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInvoiceDetailsWithDefaults

`func NewInvoiceDetailsWithDefaults() *InvoiceDetails`

NewInvoiceDetailsWithDefaults instantiates a new InvoiceDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *InvoiceDetails) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *InvoiceDetails) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *InvoiceDetails) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetNumber

`func (o *InvoiceDetails) GetNumber() string`

GetNumber returns the Number field if non-nil, zero value otherwise.

### GetNumberOk

`func (o *InvoiceDetails) GetNumberOk() (*string, bool)`

GetNumberOk returns a tuple with the Number field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumber

`func (o *InvoiceDetails) SetNumber(v string)`

SetNumber sets Number field to given value.

### HasNumber

`func (o *InvoiceDetails) HasNumber() bool`

HasNumber returns a boolean if a field has been set.

### SetNumberNil

`func (o *InvoiceDetails) SetNumberNil(b bool)`

 SetNumberNil sets the value for Number to be an explicit nil

### UnsetNumber
`func (o *InvoiceDetails) UnsetNumber()`

UnsetNumber ensures that no value is present for Number, not even an explicit nil
### GetStatus

`func (o *InvoiceDetails) GetStatus() Status260Enum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *InvoiceDetails) GetStatusOk() (*Status260Enum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *InvoiceDetails) SetStatus(v Status260Enum)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *InvoiceDetails) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetCreated

`func (o *InvoiceDetails) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *InvoiceDetails) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *InvoiceDetails) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetDateFrom

`func (o *InvoiceDetails) GetDateFrom() string`

GetDateFrom returns the DateFrom field if non-nil, zero value otherwise.

### GetDateFromOk

`func (o *InvoiceDetails) GetDateFromOk() (*string, bool)`

GetDateFromOk returns a tuple with the DateFrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateFrom

`func (o *InvoiceDetails) SetDateFrom(v string)`

SetDateFrom sets DateFrom field to given value.

### HasDateFrom

`func (o *InvoiceDetails) HasDateFrom() bool`

HasDateFrom returns a boolean if a field has been set.

### SetDateFromNil

`func (o *InvoiceDetails) SetDateFromNil(b bool)`

 SetDateFromNil sets the value for DateFrom to be an explicit nil

### UnsetDateFrom
`func (o *InvoiceDetails) UnsetDateFrom()`

UnsetDateFrom ensures that no value is present for DateFrom, not even an explicit nil
### GetDateTo

`func (o *InvoiceDetails) GetDateTo() string`

GetDateTo returns the DateTo field if non-nil, zero value otherwise.

### GetDateToOk

`func (o *InvoiceDetails) GetDateToOk() (*string, bool)`

GetDateToOk returns a tuple with the DateTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateTo

`func (o *InvoiceDetails) SetDateTo(v string)`

SetDateTo sets DateTo field to given value.

### HasDateTo

`func (o *InvoiceDetails) HasDateTo() bool`

HasDateTo returns a boolean if a field has been set.

### SetDateToNil

`func (o *InvoiceDetails) SetDateToNil(b bool)`

 SetDateToNil sets the value for DateTo to be an explicit nil

### UnsetDateTo
`func (o *InvoiceDetails) UnsetDateTo()`

UnsetDateTo ensures that no value is present for DateTo, not even an explicit nil
### GetUrl

`func (o *InvoiceDetails) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *InvoiceDetails) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *InvoiceDetails) SetUrl(v string)`

SetUrl sets Url field to given value.


### GetAmount

`func (o *InvoiceDetails) GetAmount() float64`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *InvoiceDetails) GetAmountOk() (*float64, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *InvoiceDetails) SetAmount(v float64)`

SetAmount sets Amount field to given value.


### GetCharges

`func (o *InvoiceDetails) GetCharges() []string`

GetCharges returns the Charges field if non-nil, zero value otherwise.

### GetChargesOk

`func (o *InvoiceDetails) GetChargesOk() (*[]string, bool)`

GetChargesOk returns a tuple with the Charges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCharges

`func (o *InvoiceDetails) SetCharges(v []string)`

SetCharges sets Charges field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


