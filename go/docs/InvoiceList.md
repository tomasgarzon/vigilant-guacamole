# InvoiceList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**Number** | **string** | Invoice legal number | [readonly] 
**Status** | [**Status260Enum**](Status260Enum.md) |  | [readonly] 
**DateFrom** | **string** | Beginning of charge period | [readonly] 
**DateTo** | **string** | End of charge period | [readonly] 
**Amount** | **float64** |  | 
**Charges** | **[]string** |  | 

## Methods

### NewInvoiceList

`func NewInvoiceList(uuid string, number string, status Status260Enum, dateFrom string, dateTo string, amount float64, charges []string, ) *InvoiceList`

NewInvoiceList instantiates a new InvoiceList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInvoiceListWithDefaults

`func NewInvoiceListWithDefaults() *InvoiceList`

NewInvoiceListWithDefaults instantiates a new InvoiceList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *InvoiceList) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *InvoiceList) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *InvoiceList) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetNumber

`func (o *InvoiceList) GetNumber() string`

GetNumber returns the Number field if non-nil, zero value otherwise.

### GetNumberOk

`func (o *InvoiceList) GetNumberOk() (*string, bool)`

GetNumberOk returns a tuple with the Number field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumber

`func (o *InvoiceList) SetNumber(v string)`

SetNumber sets Number field to given value.


### GetStatus

`func (o *InvoiceList) GetStatus() Status260Enum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *InvoiceList) GetStatusOk() (*Status260Enum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *InvoiceList) SetStatus(v Status260Enum)`

SetStatus sets Status field to given value.


### GetDateFrom

`func (o *InvoiceList) GetDateFrom() string`

GetDateFrom returns the DateFrom field if non-nil, zero value otherwise.

### GetDateFromOk

`func (o *InvoiceList) GetDateFromOk() (*string, bool)`

GetDateFromOk returns a tuple with the DateFrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateFrom

`func (o *InvoiceList) SetDateFrom(v string)`

SetDateFrom sets DateFrom field to given value.


### GetDateTo

`func (o *InvoiceList) GetDateTo() string`

GetDateTo returns the DateTo field if non-nil, zero value otherwise.

### GetDateToOk

`func (o *InvoiceList) GetDateToOk() (*string, bool)`

GetDateToOk returns a tuple with the DateTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateTo

`func (o *InvoiceList) SetDateTo(v string)`

SetDateTo sets DateTo field to given value.


### GetAmount

`func (o *InvoiceList) GetAmount() float64`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *InvoiceList) GetAmountOk() (*float64, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *InvoiceList) SetAmount(v float64)`

SetAmount sets Amount field to given value.


### GetCharges

`func (o *InvoiceList) GetCharges() []string`

GetCharges returns the Charges field if non-nil, zero value otherwise.

### GetChargesOk

`func (o *InvoiceList) GetChargesOk() (*[]string, bool)`

GetChargesOk returns a tuple with the Charges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCharges

`func (o *InvoiceList) SetCharges(v []string)`

SetCharges sets Charges field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


