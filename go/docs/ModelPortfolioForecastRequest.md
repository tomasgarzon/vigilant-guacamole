# ModelPortfolioForecastRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TimeHorizon** | **int32** |  | 
**InitialAmount** | **float64** |  | 
**RecurringAmount** | Pointer to **float64** |  | [optional] 
**RecurringPeriod** | Pointer to **int32** |  | [optional] 
**ModelPortfolio** | **string** |  | 

## Methods

### NewModelPortfolioForecastRequest

`func NewModelPortfolioForecastRequest(timeHorizon int32, initialAmount float64, modelPortfolio string, ) *ModelPortfolioForecastRequest`

NewModelPortfolioForecastRequest instantiates a new ModelPortfolioForecastRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelPortfolioForecastRequestWithDefaults

`func NewModelPortfolioForecastRequestWithDefaults() *ModelPortfolioForecastRequest`

NewModelPortfolioForecastRequestWithDefaults instantiates a new ModelPortfolioForecastRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTimeHorizon

`func (o *ModelPortfolioForecastRequest) GetTimeHorizon() int32`

GetTimeHorizon returns the TimeHorizon field if non-nil, zero value otherwise.

### GetTimeHorizonOk

`func (o *ModelPortfolioForecastRequest) GetTimeHorizonOk() (*int32, bool)`

GetTimeHorizonOk returns a tuple with the TimeHorizon field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeHorizon

`func (o *ModelPortfolioForecastRequest) SetTimeHorizon(v int32)`

SetTimeHorizon sets TimeHorizon field to given value.


### GetInitialAmount

`func (o *ModelPortfolioForecastRequest) GetInitialAmount() float64`

GetInitialAmount returns the InitialAmount field if non-nil, zero value otherwise.

### GetInitialAmountOk

`func (o *ModelPortfolioForecastRequest) GetInitialAmountOk() (*float64, bool)`

GetInitialAmountOk returns a tuple with the InitialAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInitialAmount

`func (o *ModelPortfolioForecastRequest) SetInitialAmount(v float64)`

SetInitialAmount sets InitialAmount field to given value.


### GetRecurringAmount

`func (o *ModelPortfolioForecastRequest) GetRecurringAmount() float64`

GetRecurringAmount returns the RecurringAmount field if non-nil, zero value otherwise.

### GetRecurringAmountOk

`func (o *ModelPortfolioForecastRequest) GetRecurringAmountOk() (*float64, bool)`

GetRecurringAmountOk returns a tuple with the RecurringAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecurringAmount

`func (o *ModelPortfolioForecastRequest) SetRecurringAmount(v float64)`

SetRecurringAmount sets RecurringAmount field to given value.

### HasRecurringAmount

`func (o *ModelPortfolioForecastRequest) HasRecurringAmount() bool`

HasRecurringAmount returns a boolean if a field has been set.

### GetRecurringPeriod

`func (o *ModelPortfolioForecastRequest) GetRecurringPeriod() int32`

GetRecurringPeriod returns the RecurringPeriod field if non-nil, zero value otherwise.

### GetRecurringPeriodOk

`func (o *ModelPortfolioForecastRequest) GetRecurringPeriodOk() (*int32, bool)`

GetRecurringPeriodOk returns a tuple with the RecurringPeriod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecurringPeriod

`func (o *ModelPortfolioForecastRequest) SetRecurringPeriod(v int32)`

SetRecurringPeriod sets RecurringPeriod field to given value.

### HasRecurringPeriod

`func (o *ModelPortfolioForecastRequest) HasRecurringPeriod() bool`

HasRecurringPeriod returns a boolean if a field has been set.

### GetModelPortfolio

`func (o *ModelPortfolioForecastRequest) GetModelPortfolio() string`

GetModelPortfolio returns the ModelPortfolio field if non-nil, zero value otherwise.

### GetModelPortfolioOk

`func (o *ModelPortfolioForecastRequest) GetModelPortfolioOk() (*string, bool)`

GetModelPortfolioOk returns a tuple with the ModelPortfolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModelPortfolio

`func (o *ModelPortfolioForecastRequest) SetModelPortfolio(v string)`

SetModelPortfolio sets ModelPortfolio field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


