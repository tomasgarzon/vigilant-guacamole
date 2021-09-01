# PortfolioPerformance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ValuationDate** | **string** |  | 
**Percentage** | Pointer to **float64** |  | [optional] [default to 0.0]
**Performance** | Pointer to **float64** |  | [optional] [default to 0.0]

## Methods

### NewPortfolioPerformance

`func NewPortfolioPerformance(valuationDate string, ) *PortfolioPerformance`

NewPortfolioPerformance instantiates a new PortfolioPerformance object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPortfolioPerformanceWithDefaults

`func NewPortfolioPerformanceWithDefaults() *PortfolioPerformance`

NewPortfolioPerformanceWithDefaults instantiates a new PortfolioPerformance object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValuationDate

`func (o *PortfolioPerformance) GetValuationDate() string`

GetValuationDate returns the ValuationDate field if non-nil, zero value otherwise.

### GetValuationDateOk

`func (o *PortfolioPerformance) GetValuationDateOk() (*string, bool)`

GetValuationDateOk returns a tuple with the ValuationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValuationDate

`func (o *PortfolioPerformance) SetValuationDate(v string)`

SetValuationDate sets ValuationDate field to given value.


### GetPercentage

`func (o *PortfolioPerformance) GetPercentage() float64`

GetPercentage returns the Percentage field if non-nil, zero value otherwise.

### GetPercentageOk

`func (o *PortfolioPerformance) GetPercentageOk() (*float64, bool)`

GetPercentageOk returns a tuple with the Percentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentage

`func (o *PortfolioPerformance) SetPercentage(v float64)`

SetPercentage sets Percentage field to given value.

### HasPercentage

`func (o *PortfolioPerformance) HasPercentage() bool`

HasPercentage returns a boolean if a field has been set.

### GetPerformance

`func (o *PortfolioPerformance) GetPerformance() float64`

GetPerformance returns the Performance field if non-nil, zero value otherwise.

### GetPerformanceOk

`func (o *PortfolioPerformance) GetPerformanceOk() (*float64, bool)`

GetPerformanceOk returns a tuple with the Performance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPerformance

`func (o *PortfolioPerformance) SetPerformance(v float64)`

SetPerformance sets Performance field to given value.

### HasPerformance

`func (o *PortfolioPerformance) HasPerformance() bool`

HasPerformance returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


