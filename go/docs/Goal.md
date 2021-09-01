# Goal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**Name** | **string** |  | 
**Portfolio** | Pointer to **NullableString** |  | [optional] 
**GoalAmount** | **float64** | Desired amount needed to fulfill the goal | 
**Deadline** | **string** | Due date to reach the goal. | 
**InitialAmount** | **float64** | Initial deposit amount to start from. No sense to start by 0 | 
**RecurringAmount** | Pointer to **NullableFloat64** |  | [optional] 
**RiskLevel** | **int32** |  | 
**Created** | **time.Time** |  | [readonly] 

## Methods

### NewGoal

`func NewGoal(uuid string, name string, goalAmount float64, deadline string, initialAmount float64, riskLevel int32, created time.Time, ) *Goal`

NewGoal instantiates a new Goal object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGoalWithDefaults

`func NewGoalWithDefaults() *Goal`

NewGoalWithDefaults instantiates a new Goal object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *Goal) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *Goal) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *Goal) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetName

`func (o *Goal) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Goal) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Goal) SetName(v string)`

SetName sets Name field to given value.


### GetPortfolio

`func (o *Goal) GetPortfolio() string`

GetPortfolio returns the Portfolio field if non-nil, zero value otherwise.

### GetPortfolioOk

`func (o *Goal) GetPortfolioOk() (*string, bool)`

GetPortfolioOk returns a tuple with the Portfolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPortfolio

`func (o *Goal) SetPortfolio(v string)`

SetPortfolio sets Portfolio field to given value.

### HasPortfolio

`func (o *Goal) HasPortfolio() bool`

HasPortfolio returns a boolean if a field has been set.

### SetPortfolioNil

`func (o *Goal) SetPortfolioNil(b bool)`

 SetPortfolioNil sets the value for Portfolio to be an explicit nil

### UnsetPortfolio
`func (o *Goal) UnsetPortfolio()`

UnsetPortfolio ensures that no value is present for Portfolio, not even an explicit nil
### GetGoalAmount

`func (o *Goal) GetGoalAmount() float64`

GetGoalAmount returns the GoalAmount field if non-nil, zero value otherwise.

### GetGoalAmountOk

`func (o *Goal) GetGoalAmountOk() (*float64, bool)`

GetGoalAmountOk returns a tuple with the GoalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGoalAmount

`func (o *Goal) SetGoalAmount(v float64)`

SetGoalAmount sets GoalAmount field to given value.


### GetDeadline

`func (o *Goal) GetDeadline() string`

GetDeadline returns the Deadline field if non-nil, zero value otherwise.

### GetDeadlineOk

`func (o *Goal) GetDeadlineOk() (*string, bool)`

GetDeadlineOk returns a tuple with the Deadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadline

`func (o *Goal) SetDeadline(v string)`

SetDeadline sets Deadline field to given value.


### GetInitialAmount

`func (o *Goal) GetInitialAmount() float64`

GetInitialAmount returns the InitialAmount field if non-nil, zero value otherwise.

### GetInitialAmountOk

`func (o *Goal) GetInitialAmountOk() (*float64, bool)`

GetInitialAmountOk returns a tuple with the InitialAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInitialAmount

`func (o *Goal) SetInitialAmount(v float64)`

SetInitialAmount sets InitialAmount field to given value.


### GetRecurringAmount

`func (o *Goal) GetRecurringAmount() float64`

GetRecurringAmount returns the RecurringAmount field if non-nil, zero value otherwise.

### GetRecurringAmountOk

`func (o *Goal) GetRecurringAmountOk() (*float64, bool)`

GetRecurringAmountOk returns a tuple with the RecurringAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecurringAmount

`func (o *Goal) SetRecurringAmount(v float64)`

SetRecurringAmount sets RecurringAmount field to given value.

### HasRecurringAmount

`func (o *Goal) HasRecurringAmount() bool`

HasRecurringAmount returns a boolean if a field has been set.

### SetRecurringAmountNil

`func (o *Goal) SetRecurringAmountNil(b bool)`

 SetRecurringAmountNil sets the value for RecurringAmount to be an explicit nil

### UnsetRecurringAmount
`func (o *Goal) UnsetRecurringAmount()`

UnsetRecurringAmount ensures that no value is present for RecurringAmount, not even an explicit nil
### GetRiskLevel

`func (o *Goal) GetRiskLevel() int32`

GetRiskLevel returns the RiskLevel field if non-nil, zero value otherwise.

### GetRiskLevelOk

`func (o *Goal) GetRiskLevelOk() (*int32, bool)`

GetRiskLevelOk returns a tuple with the RiskLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskLevel

`func (o *Goal) SetRiskLevel(v int32)`

SetRiskLevel sets RiskLevel field to given value.


### GetCreated

`func (o *Goal) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Goal) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Goal) SetCreated(v time.Time)`

SetCreated sets Created field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


