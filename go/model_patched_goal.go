/*
Nucoro API

No description

API version: 4.175.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
	"time"
)

// PatchedGoal struct for PatchedGoal
type PatchedGoal struct {
	Uuid *string `json:"uuid,omitempty"`
	Name *string `json:"name,omitempty"`
	Portfolio NullableString `json:"portfolio,omitempty"`
	// Desired amount needed to fulfill the goal
	GoalAmount *float64 `json:"goal_amount,omitempty"`
	// Due date to reach the goal.
	Deadline *string `json:"deadline,omitempty"`
	// Initial deposit amount to start from. No sense to start by 0
	InitialAmount *float64 `json:"initial_amount,omitempty"`
	RecurringAmount NullableFloat64 `json:"recurring_amount,omitempty"`
	RiskLevel *int32 `json:"risk_level,omitempty"`
	Created *time.Time `json:"created,omitempty"`
}

// NewPatchedGoal instantiates a new PatchedGoal object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPatchedGoal() *PatchedGoal {
	this := PatchedGoal{}
	return &this
}

// NewPatchedGoalWithDefaults instantiates a new PatchedGoal object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPatchedGoalWithDefaults() *PatchedGoal {
	this := PatchedGoal{}
	return &this
}

// GetUuid returns the Uuid field value if set, zero value otherwise.
func (o *PatchedGoal) GetUuid() string {
	if o == nil || o.Uuid == nil {
		var ret string
		return ret
	}
	return *o.Uuid
}

// GetUuidOk returns a tuple with the Uuid field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PatchedGoal) GetUuidOk() (*string, bool) {
	if o == nil || o.Uuid == nil {
		return nil, false
	}
	return o.Uuid, true
}

// HasUuid returns a boolean if a field has been set.
func (o *PatchedGoal) HasUuid() bool {
	if o != nil && o.Uuid != nil {
		return true
	}

	return false
}

// SetUuid gets a reference to the given string and assigns it to the Uuid field.
func (o *PatchedGoal) SetUuid(v string) {
	o.Uuid = &v
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *PatchedGoal) GetName() string {
	if o == nil || o.Name == nil {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PatchedGoal) GetNameOk() (*string, bool) {
	if o == nil || o.Name == nil {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *PatchedGoal) HasName() bool {
	if o != nil && o.Name != nil {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *PatchedGoal) SetName(v string) {
	o.Name = &v
}

// GetPortfolio returns the Portfolio field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *PatchedGoal) GetPortfolio() string {
	if o == nil || o.Portfolio.Get() == nil {
		var ret string
		return ret
	}
	return *o.Portfolio.Get()
}

// GetPortfolioOk returns a tuple with the Portfolio field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *PatchedGoal) GetPortfolioOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.Portfolio.Get(), o.Portfolio.IsSet()
}

// HasPortfolio returns a boolean if a field has been set.
func (o *PatchedGoal) HasPortfolio() bool {
	if o != nil && o.Portfolio.IsSet() {
		return true
	}

	return false
}

// SetPortfolio gets a reference to the given NullableString and assigns it to the Portfolio field.
func (o *PatchedGoal) SetPortfolio(v string) {
	o.Portfolio.Set(&v)
}
// SetPortfolioNil sets the value for Portfolio to be an explicit nil
func (o *PatchedGoal) SetPortfolioNil() {
	o.Portfolio.Set(nil)
}

// UnsetPortfolio ensures that no value is present for Portfolio, not even an explicit nil
func (o *PatchedGoal) UnsetPortfolio() {
	o.Portfolio.Unset()
}

// GetGoalAmount returns the GoalAmount field value if set, zero value otherwise.
func (o *PatchedGoal) GetGoalAmount() float64 {
	if o == nil || o.GoalAmount == nil {
		var ret float64
		return ret
	}
	return *o.GoalAmount
}

// GetGoalAmountOk returns a tuple with the GoalAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PatchedGoal) GetGoalAmountOk() (*float64, bool) {
	if o == nil || o.GoalAmount == nil {
		return nil, false
	}
	return o.GoalAmount, true
}

// HasGoalAmount returns a boolean if a field has been set.
func (o *PatchedGoal) HasGoalAmount() bool {
	if o != nil && o.GoalAmount != nil {
		return true
	}

	return false
}

// SetGoalAmount gets a reference to the given float64 and assigns it to the GoalAmount field.
func (o *PatchedGoal) SetGoalAmount(v float64) {
	o.GoalAmount = &v
}

// GetDeadline returns the Deadline field value if set, zero value otherwise.
func (o *PatchedGoal) GetDeadline() string {
	if o == nil || o.Deadline == nil {
		var ret string
		return ret
	}
	return *o.Deadline
}

// GetDeadlineOk returns a tuple with the Deadline field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PatchedGoal) GetDeadlineOk() (*string, bool) {
	if o == nil || o.Deadline == nil {
		return nil, false
	}
	return o.Deadline, true
}

// HasDeadline returns a boolean if a field has been set.
func (o *PatchedGoal) HasDeadline() bool {
	if o != nil && o.Deadline != nil {
		return true
	}

	return false
}

// SetDeadline gets a reference to the given string and assigns it to the Deadline field.
func (o *PatchedGoal) SetDeadline(v string) {
	o.Deadline = &v
}

// GetInitialAmount returns the InitialAmount field value if set, zero value otherwise.
func (o *PatchedGoal) GetInitialAmount() float64 {
	if o == nil || o.InitialAmount == nil {
		var ret float64
		return ret
	}
	return *o.InitialAmount
}

// GetInitialAmountOk returns a tuple with the InitialAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PatchedGoal) GetInitialAmountOk() (*float64, bool) {
	if o == nil || o.InitialAmount == nil {
		return nil, false
	}
	return o.InitialAmount, true
}

// HasInitialAmount returns a boolean if a field has been set.
func (o *PatchedGoal) HasInitialAmount() bool {
	if o != nil && o.InitialAmount != nil {
		return true
	}

	return false
}

// SetInitialAmount gets a reference to the given float64 and assigns it to the InitialAmount field.
func (o *PatchedGoal) SetInitialAmount(v float64) {
	o.InitialAmount = &v
}

// GetRecurringAmount returns the RecurringAmount field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *PatchedGoal) GetRecurringAmount() float64 {
	if o == nil || o.RecurringAmount.Get() == nil {
		var ret float64
		return ret
	}
	return *o.RecurringAmount.Get()
}

// GetRecurringAmountOk returns a tuple with the RecurringAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *PatchedGoal) GetRecurringAmountOk() (*float64, bool) {
	if o == nil  {
		return nil, false
	}
	return o.RecurringAmount.Get(), o.RecurringAmount.IsSet()
}

// HasRecurringAmount returns a boolean if a field has been set.
func (o *PatchedGoal) HasRecurringAmount() bool {
	if o != nil && o.RecurringAmount.IsSet() {
		return true
	}

	return false
}

// SetRecurringAmount gets a reference to the given NullableFloat64 and assigns it to the RecurringAmount field.
func (o *PatchedGoal) SetRecurringAmount(v float64) {
	o.RecurringAmount.Set(&v)
}
// SetRecurringAmountNil sets the value for RecurringAmount to be an explicit nil
func (o *PatchedGoal) SetRecurringAmountNil() {
	o.RecurringAmount.Set(nil)
}

// UnsetRecurringAmount ensures that no value is present for RecurringAmount, not even an explicit nil
func (o *PatchedGoal) UnsetRecurringAmount() {
	o.RecurringAmount.Unset()
}

// GetRiskLevel returns the RiskLevel field value if set, zero value otherwise.
func (o *PatchedGoal) GetRiskLevel() int32 {
	if o == nil || o.RiskLevel == nil {
		var ret int32
		return ret
	}
	return *o.RiskLevel
}

// GetRiskLevelOk returns a tuple with the RiskLevel field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PatchedGoal) GetRiskLevelOk() (*int32, bool) {
	if o == nil || o.RiskLevel == nil {
		return nil, false
	}
	return o.RiskLevel, true
}

// HasRiskLevel returns a boolean if a field has been set.
func (o *PatchedGoal) HasRiskLevel() bool {
	if o != nil && o.RiskLevel != nil {
		return true
	}

	return false
}

// SetRiskLevel gets a reference to the given int32 and assigns it to the RiskLevel field.
func (o *PatchedGoal) SetRiskLevel(v int32) {
	o.RiskLevel = &v
}

// GetCreated returns the Created field value if set, zero value otherwise.
func (o *PatchedGoal) GetCreated() time.Time {
	if o == nil || o.Created == nil {
		var ret time.Time
		return ret
	}
	return *o.Created
}

// GetCreatedOk returns a tuple with the Created field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PatchedGoal) GetCreatedOk() (*time.Time, bool) {
	if o == nil || o.Created == nil {
		return nil, false
	}
	return o.Created, true
}

// HasCreated returns a boolean if a field has been set.
func (o *PatchedGoal) HasCreated() bool {
	if o != nil && o.Created != nil {
		return true
	}

	return false
}

// SetCreated gets a reference to the given time.Time and assigns it to the Created field.
func (o *PatchedGoal) SetCreated(v time.Time) {
	o.Created = &v
}

func (o PatchedGoal) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Uuid != nil {
		toSerialize["uuid"] = o.Uuid
	}
	if o.Name != nil {
		toSerialize["name"] = o.Name
	}
	if o.Portfolio.IsSet() {
		toSerialize["portfolio"] = o.Portfolio.Get()
	}
	if o.GoalAmount != nil {
		toSerialize["goal_amount"] = o.GoalAmount
	}
	if o.Deadline != nil {
		toSerialize["deadline"] = o.Deadline
	}
	if o.InitialAmount != nil {
		toSerialize["initial_amount"] = o.InitialAmount
	}
	if o.RecurringAmount.IsSet() {
		toSerialize["recurring_amount"] = o.RecurringAmount.Get()
	}
	if o.RiskLevel != nil {
		toSerialize["risk_level"] = o.RiskLevel
	}
	if o.Created != nil {
		toSerialize["created"] = o.Created
	}
	return json.Marshal(toSerialize)
}

type NullablePatchedGoal struct {
	value *PatchedGoal
	isSet bool
}

func (v NullablePatchedGoal) Get() *PatchedGoal {
	return v.value
}

func (v *NullablePatchedGoal) Set(val *PatchedGoal) {
	v.value = val
	v.isSet = true
}

func (v NullablePatchedGoal) IsSet() bool {
	return v.isSet
}

func (v *NullablePatchedGoal) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePatchedGoal(val *PatchedGoal) *NullablePatchedGoal {
	return &NullablePatchedGoal{value: val, isSet: true}
}

func (v NullablePatchedGoal) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePatchedGoal) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

