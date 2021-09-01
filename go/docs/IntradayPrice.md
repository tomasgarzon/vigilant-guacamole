# IntradayPrice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | **float64** |  | [readonly] 
**Datetime** | **time.Time** |  | [readonly] 
**OpenPrice** | **float64** |  | 
**HighPrice** | **float64** |  | 
**LowPrice** | **float64** |  | 
**PreviousClosePrice** | **float64** |  | 

## Methods

### NewIntradayPrice

`func NewIntradayPrice(amount float64, datetime time.Time, openPrice float64, highPrice float64, lowPrice float64, previousClosePrice float64, ) *IntradayPrice`

NewIntradayPrice instantiates a new IntradayPrice object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntradayPriceWithDefaults

`func NewIntradayPriceWithDefaults() *IntradayPrice`

NewIntradayPriceWithDefaults instantiates a new IntradayPrice object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *IntradayPrice) GetAmount() float64`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *IntradayPrice) GetAmountOk() (*float64, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *IntradayPrice) SetAmount(v float64)`

SetAmount sets Amount field to given value.


### GetDatetime

`func (o *IntradayPrice) GetDatetime() time.Time`

GetDatetime returns the Datetime field if non-nil, zero value otherwise.

### GetDatetimeOk

`func (o *IntradayPrice) GetDatetimeOk() (*time.Time, bool)`

GetDatetimeOk returns a tuple with the Datetime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatetime

`func (o *IntradayPrice) SetDatetime(v time.Time)`

SetDatetime sets Datetime field to given value.


### GetOpenPrice

`func (o *IntradayPrice) GetOpenPrice() float64`

GetOpenPrice returns the OpenPrice field if non-nil, zero value otherwise.

### GetOpenPriceOk

`func (o *IntradayPrice) GetOpenPriceOk() (*float64, bool)`

GetOpenPriceOk returns a tuple with the OpenPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOpenPrice

`func (o *IntradayPrice) SetOpenPrice(v float64)`

SetOpenPrice sets OpenPrice field to given value.


### GetHighPrice

`func (o *IntradayPrice) GetHighPrice() float64`

GetHighPrice returns the HighPrice field if non-nil, zero value otherwise.

### GetHighPriceOk

`func (o *IntradayPrice) GetHighPriceOk() (*float64, bool)`

GetHighPriceOk returns a tuple with the HighPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHighPrice

`func (o *IntradayPrice) SetHighPrice(v float64)`

SetHighPrice sets HighPrice field to given value.


### GetLowPrice

`func (o *IntradayPrice) GetLowPrice() float64`

GetLowPrice returns the LowPrice field if non-nil, zero value otherwise.

### GetLowPriceOk

`func (o *IntradayPrice) GetLowPriceOk() (*float64, bool)`

GetLowPriceOk returns a tuple with the LowPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLowPrice

`func (o *IntradayPrice) SetLowPrice(v float64)`

SetLowPrice sets LowPrice field to given value.


### GetPreviousClosePrice

`func (o *IntradayPrice) GetPreviousClosePrice() float64`

GetPreviousClosePrice returns the PreviousClosePrice field if non-nil, zero value otherwise.

### GetPreviousClosePriceOk

`func (o *IntradayPrice) GetPreviousClosePriceOk() (*float64, bool)`

GetPreviousClosePriceOk returns a tuple with the PreviousClosePrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviousClosePrice

`func (o *IntradayPrice) SetPreviousClosePrice(v float64)`

SetPreviousClosePrice sets PreviousClosePrice field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


