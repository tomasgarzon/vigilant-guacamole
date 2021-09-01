# TaxReport

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**DateFrom** | **string** |  | [readonly] 
**DateTo** | **string** |  | [readonly] 
**Created** | **time.Time** |  | [readonly] 
**Status** | [**Status181Enum**](Status181Enum.md) |  | [readonly] 

## Methods

### NewTaxReport

`func NewTaxReport(uuid string, dateFrom string, dateTo string, created time.Time, status Status181Enum, ) *TaxReport`

NewTaxReport instantiates a new TaxReport object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaxReportWithDefaults

`func NewTaxReportWithDefaults() *TaxReport`

NewTaxReportWithDefaults instantiates a new TaxReport object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *TaxReport) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *TaxReport) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *TaxReport) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetDateFrom

`func (o *TaxReport) GetDateFrom() string`

GetDateFrom returns the DateFrom field if non-nil, zero value otherwise.

### GetDateFromOk

`func (o *TaxReport) GetDateFromOk() (*string, bool)`

GetDateFromOk returns a tuple with the DateFrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateFrom

`func (o *TaxReport) SetDateFrom(v string)`

SetDateFrom sets DateFrom field to given value.


### GetDateTo

`func (o *TaxReport) GetDateTo() string`

GetDateTo returns the DateTo field if non-nil, zero value otherwise.

### GetDateToOk

`func (o *TaxReport) GetDateToOk() (*string, bool)`

GetDateToOk returns a tuple with the DateTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateTo

`func (o *TaxReport) SetDateTo(v string)`

SetDateTo sets DateTo field to given value.


### GetCreated

`func (o *TaxReport) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *TaxReport) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *TaxReport) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetStatus

`func (o *TaxReport) GetStatus() Status181Enum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TaxReport) GetStatusOk() (*Status181Enum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TaxReport) SetStatus(v Status181Enum)`

SetStatus sets Status field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


