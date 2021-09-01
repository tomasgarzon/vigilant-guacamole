# ForecastRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GoalAmount** | **float64** |  | 
**Deadline** | **string** |  | 
**InitialAmount** | **float64** |  | 
**RecurringAmount** | **float64** |  | 
**RiskLevel** | **int32** |  | 

## Methods

### NewForecastRequest

`func NewForecastRequest(goalAmount float64, deadline string, initialAmount float64, recurringAmount float64, riskLevel int32, ) *ForecastRequest`

NewForecastRequest instantiates a new ForecastRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewForecastRequestWithDefaults

`func NewForecastRequestWithDefaults() *ForecastRequest`

NewForecastRequestWithDefaults instantiates a new ForecastRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGoalAmount

`func (o *ForecastRequest) GetGoalAmount() float64`

GetGoalAmount returns the GoalAmount field if non-nil, zero value otherwise.

### GetGoalAmountOk

`func (o *ForecastRequest) GetGoalAmountOk() (*float64, bool)`

GetGoalAmountOk returns a tuple with the GoalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGoalAmount

`func (o *ForecastRequest) SetGoalAmount(v float64)`

SetGoalAmount sets GoalAmount field to given value.


### GetDeadline

`func (o *ForecastRequest) GetDeadline() string`

GetDeadline returns the Deadline field if non-nil, zero value otherwise.

### GetDeadlineOk

`func (o *ForecastRequest) GetDeadlineOk() (*string, bool)`

GetDeadlineOk returns a tuple with the Deadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadline

`func (o *ForecastRequest) SetDeadline(v string)`

SetDeadline sets Deadline field to given value.


### GetInitialAmount

`func (o *ForecastRequest) GetInitialAmount() float64`

GetInitialAmount returns the InitialAmount field if non-nil, zero value otherwise.

### GetInitialAmountOk

`func (o *ForecastRequest) GetInitialAmountOk() (*float64, bool)`

GetInitialAmountOk returns a tuple with the InitialAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInitialAmount

`func (o *ForecastRequest) SetInitialAmount(v float64)`

SetInitialAmount sets InitialAmount field to given value.


### GetRecurringAmount

`func (o *ForecastRequest) GetRecurringAmount() float64`

GetRecurringAmount returns the RecurringAmount field if non-nil, zero value otherwise.

### GetRecurringAmountOk

`func (o *ForecastRequest) GetRecurringAmountOk() (*float64, bool)`

GetRecurringAmountOk returns a tuple with the RecurringAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecurringAmount

`func (o *ForecastRequest) SetRecurringAmount(v float64)`

SetRecurringAmount sets RecurringAmount field to given value.


### GetRiskLevel

`func (o *ForecastRequest) GetRiskLevel() int32`

GetRiskLevel returns the RiskLevel field if non-nil, zero value otherwise.

### GetRiskLevelOk

`func (o *ForecastRequest) GetRiskLevelOk() (*int32, bool)`

GetRiskLevelOk returns a tuple with the RiskLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskLevel

`func (o *ForecastRequest) SetRiskLevel(v int32)`

SetRiskLevel sets RiskLevel field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


