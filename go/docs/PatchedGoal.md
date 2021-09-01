# PatchedGoal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | Pointer to **string** |  | [optional] [readonly] 
**Name** | Pointer to **string** |  | [optional] 
**Portfolio** | Pointer to **NullableString** |  | [optional] 
**GoalAmount** | Pointer to **float64** | Desired amount needed to fulfill the goal | [optional] 
**Deadline** | Pointer to **string** | Due date to reach the goal. | [optional] 
**InitialAmount** | Pointer to **float64** | Initial deposit amount to start from. No sense to start by 0 | [optional] 
**RecurringAmount** | Pointer to **NullableFloat64** |  | [optional] 
**RiskLevel** | Pointer to **int32** |  | [optional] 
**Created** | Pointer to **time.Time** |  | [optional] [readonly] 

## Methods

### NewPatchedGoal

`func NewPatchedGoal() *PatchedGoal`

NewPatchedGoal instantiates a new PatchedGoal object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedGoalWithDefaults

`func NewPatchedGoalWithDefaults() *PatchedGoal`

NewPatchedGoalWithDefaults instantiates a new PatchedGoal object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *PatchedGoal) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *PatchedGoal) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *PatchedGoal) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *PatchedGoal) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### GetName

`func (o *PatchedGoal) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PatchedGoal) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PatchedGoal) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PatchedGoal) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPortfolio

`func (o *PatchedGoal) GetPortfolio() string`

GetPortfolio returns the Portfolio field if non-nil, zero value otherwise.

### GetPortfolioOk

`func (o *PatchedGoal) GetPortfolioOk() (*string, bool)`

GetPortfolioOk returns a tuple with the Portfolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPortfolio

`func (o *PatchedGoal) SetPortfolio(v string)`

SetPortfolio sets Portfolio field to given value.

### HasPortfolio

`func (o *PatchedGoal) HasPortfolio() bool`

HasPortfolio returns a boolean if a field has been set.

### SetPortfolioNil

`func (o *PatchedGoal) SetPortfolioNil(b bool)`

 SetPortfolioNil sets the value for Portfolio to be an explicit nil

### UnsetPortfolio
`func (o *PatchedGoal) UnsetPortfolio()`

UnsetPortfolio ensures that no value is present for Portfolio, not even an explicit nil
### GetGoalAmount

`func (o *PatchedGoal) GetGoalAmount() float64`

GetGoalAmount returns the GoalAmount field if non-nil, zero value otherwise.

### GetGoalAmountOk

`func (o *PatchedGoal) GetGoalAmountOk() (*float64, bool)`

GetGoalAmountOk returns a tuple with the GoalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGoalAmount

`func (o *PatchedGoal) SetGoalAmount(v float64)`

SetGoalAmount sets GoalAmount field to given value.

### HasGoalAmount

`func (o *PatchedGoal) HasGoalAmount() bool`

HasGoalAmount returns a boolean if a field has been set.

### GetDeadline

`func (o *PatchedGoal) GetDeadline() string`

GetDeadline returns the Deadline field if non-nil, zero value otherwise.

### GetDeadlineOk

`func (o *PatchedGoal) GetDeadlineOk() (*string, bool)`

GetDeadlineOk returns a tuple with the Deadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadline

`func (o *PatchedGoal) SetDeadline(v string)`

SetDeadline sets Deadline field to given value.

### HasDeadline

`func (o *PatchedGoal) HasDeadline() bool`

HasDeadline returns a boolean if a field has been set.

### GetInitialAmount

`func (o *PatchedGoal) GetInitialAmount() float64`

GetInitialAmount returns the InitialAmount field if non-nil, zero value otherwise.

### GetInitialAmountOk

`func (o *PatchedGoal) GetInitialAmountOk() (*float64, bool)`

GetInitialAmountOk returns a tuple with the InitialAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInitialAmount

`func (o *PatchedGoal) SetInitialAmount(v float64)`

SetInitialAmount sets InitialAmount field to given value.

### HasInitialAmount

`func (o *PatchedGoal) HasInitialAmount() bool`

HasInitialAmount returns a boolean if a field has been set.

### GetRecurringAmount

`func (o *PatchedGoal) GetRecurringAmount() float64`

GetRecurringAmount returns the RecurringAmount field if non-nil, zero value otherwise.

### GetRecurringAmountOk

`func (o *PatchedGoal) GetRecurringAmountOk() (*float64, bool)`

GetRecurringAmountOk returns a tuple with the RecurringAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecurringAmount

`func (o *PatchedGoal) SetRecurringAmount(v float64)`

SetRecurringAmount sets RecurringAmount field to given value.

### HasRecurringAmount

`func (o *PatchedGoal) HasRecurringAmount() bool`

HasRecurringAmount returns a boolean if a field has been set.

### SetRecurringAmountNil

`func (o *PatchedGoal) SetRecurringAmountNil(b bool)`

 SetRecurringAmountNil sets the value for RecurringAmount to be an explicit nil

### UnsetRecurringAmount
`func (o *PatchedGoal) UnsetRecurringAmount()`

UnsetRecurringAmount ensures that no value is present for RecurringAmount, not even an explicit nil
### GetRiskLevel

`func (o *PatchedGoal) GetRiskLevel() int32`

GetRiskLevel returns the RiskLevel field if non-nil, zero value otherwise.

### GetRiskLevelOk

`func (o *PatchedGoal) GetRiskLevelOk() (*int32, bool)`

GetRiskLevelOk returns a tuple with the RiskLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskLevel

`func (o *PatchedGoal) SetRiskLevel(v int32)`

SetRiskLevel sets RiskLevel field to given value.

### HasRiskLevel

`func (o *PatchedGoal) HasRiskLevel() bool`

HasRiskLevel returns a boolean if a field has been set.

### GetCreated

`func (o *PatchedGoal) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *PatchedGoal) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *PatchedGoal) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *PatchedGoal) HasCreated() bool`

HasCreated returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


