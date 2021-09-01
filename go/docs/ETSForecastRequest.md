# ETSForecastRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TimeHorizon** | **int32** |  | 
**InitialAmount** | **float64** |  | 
**RecurringAmount** | Pointer to **float64** |  | [optional] 
**RecurringPeriod** | Pointer to **int32** |  | [optional] 
**RiskLevel** | **int32** |  | 
**FavouriteCategories** | Pointer to **[]string** |  | [optional] 
**ExcludedCategories** | Pointer to **[]string** |  | [optional] 

## Methods

### NewETSForecastRequest

`func NewETSForecastRequest(timeHorizon int32, initialAmount float64, riskLevel int32, ) *ETSForecastRequest`

NewETSForecastRequest instantiates a new ETSForecastRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewETSForecastRequestWithDefaults

`func NewETSForecastRequestWithDefaults() *ETSForecastRequest`

NewETSForecastRequestWithDefaults instantiates a new ETSForecastRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTimeHorizon

`func (o *ETSForecastRequest) GetTimeHorizon() int32`

GetTimeHorizon returns the TimeHorizon field if non-nil, zero value otherwise.

### GetTimeHorizonOk

`func (o *ETSForecastRequest) GetTimeHorizonOk() (*int32, bool)`

GetTimeHorizonOk returns a tuple with the TimeHorizon field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeHorizon

`func (o *ETSForecastRequest) SetTimeHorizon(v int32)`

SetTimeHorizon sets TimeHorizon field to given value.


### GetInitialAmount

`func (o *ETSForecastRequest) GetInitialAmount() float64`

GetInitialAmount returns the InitialAmount field if non-nil, zero value otherwise.

### GetInitialAmountOk

`func (o *ETSForecastRequest) GetInitialAmountOk() (*float64, bool)`

GetInitialAmountOk returns a tuple with the InitialAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInitialAmount

`func (o *ETSForecastRequest) SetInitialAmount(v float64)`

SetInitialAmount sets InitialAmount field to given value.


### GetRecurringAmount

`func (o *ETSForecastRequest) GetRecurringAmount() float64`

GetRecurringAmount returns the RecurringAmount field if non-nil, zero value otherwise.

### GetRecurringAmountOk

`func (o *ETSForecastRequest) GetRecurringAmountOk() (*float64, bool)`

GetRecurringAmountOk returns a tuple with the RecurringAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecurringAmount

`func (o *ETSForecastRequest) SetRecurringAmount(v float64)`

SetRecurringAmount sets RecurringAmount field to given value.

### HasRecurringAmount

`func (o *ETSForecastRequest) HasRecurringAmount() bool`

HasRecurringAmount returns a boolean if a field has been set.

### GetRecurringPeriod

`func (o *ETSForecastRequest) GetRecurringPeriod() int32`

GetRecurringPeriod returns the RecurringPeriod field if non-nil, zero value otherwise.

### GetRecurringPeriodOk

`func (o *ETSForecastRequest) GetRecurringPeriodOk() (*int32, bool)`

GetRecurringPeriodOk returns a tuple with the RecurringPeriod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecurringPeriod

`func (o *ETSForecastRequest) SetRecurringPeriod(v int32)`

SetRecurringPeriod sets RecurringPeriod field to given value.

### HasRecurringPeriod

`func (o *ETSForecastRequest) HasRecurringPeriod() bool`

HasRecurringPeriod returns a boolean if a field has been set.

### GetRiskLevel

`func (o *ETSForecastRequest) GetRiskLevel() int32`

GetRiskLevel returns the RiskLevel field if non-nil, zero value otherwise.

### GetRiskLevelOk

`func (o *ETSForecastRequest) GetRiskLevelOk() (*int32, bool)`

GetRiskLevelOk returns a tuple with the RiskLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskLevel

`func (o *ETSForecastRequest) SetRiskLevel(v int32)`

SetRiskLevel sets RiskLevel field to given value.


### GetFavouriteCategories

`func (o *ETSForecastRequest) GetFavouriteCategories() []string`

GetFavouriteCategories returns the FavouriteCategories field if non-nil, zero value otherwise.

### GetFavouriteCategoriesOk

`func (o *ETSForecastRequest) GetFavouriteCategoriesOk() (*[]string, bool)`

GetFavouriteCategoriesOk returns a tuple with the FavouriteCategories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFavouriteCategories

`func (o *ETSForecastRequest) SetFavouriteCategories(v []string)`

SetFavouriteCategories sets FavouriteCategories field to given value.

### HasFavouriteCategories

`func (o *ETSForecastRequest) HasFavouriteCategories() bool`

HasFavouriteCategories returns a boolean if a field has been set.

### GetExcludedCategories

`func (o *ETSForecastRequest) GetExcludedCategories() []string`

GetExcludedCategories returns the ExcludedCategories field if non-nil, zero value otherwise.

### GetExcludedCategoriesOk

`func (o *ETSForecastRequest) GetExcludedCategoriesOk() (*[]string, bool)`

GetExcludedCategoriesOk returns a tuple with the ExcludedCategories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludedCategories

`func (o *ETSForecastRequest) SetExcludedCategories(v []string)`

SetExcludedCategories sets ExcludedCategories field to given value.

### HasExcludedCategories

`func (o *ETSForecastRequest) HasExcludedCategories() bool`

HasExcludedCategories returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


