# ClientPerformance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ValuationDate** | **string** |  | 
**Performance** | **float64** |  | 

## Methods

### NewClientPerformance

`func NewClientPerformance(valuationDate string, performance float64, ) *ClientPerformance`

NewClientPerformance instantiates a new ClientPerformance object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewClientPerformanceWithDefaults

`func NewClientPerformanceWithDefaults() *ClientPerformance`

NewClientPerformanceWithDefaults instantiates a new ClientPerformance object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValuationDate

`func (o *ClientPerformance) GetValuationDate() string`

GetValuationDate returns the ValuationDate field if non-nil, zero value otherwise.

### GetValuationDateOk

`func (o *ClientPerformance) GetValuationDateOk() (*string, bool)`

GetValuationDateOk returns a tuple with the ValuationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValuationDate

`func (o *ClientPerformance) SetValuationDate(v string)`

SetValuationDate sets ValuationDate field to given value.


### GetPerformance

`func (o *ClientPerformance) GetPerformance() float64`

GetPerformance returns the Performance field if non-nil, zero value otherwise.

### GetPerformanceOk

`func (o *ClientPerformance) GetPerformanceOk() (*float64, bool)`

GetPerformanceOk returns a tuple with the Performance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPerformance

`func (o *ClientPerformance) SetPerformance(v float64)`

SetPerformance sets Performance field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


