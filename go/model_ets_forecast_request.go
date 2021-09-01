/*
Nucoro API

No description

API version: 4.175.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// ETSForecastRequest struct for ETSForecastRequest
type ETSForecastRequest struct {
	TimeHorizon int32 `json:"time_horizon"`
	InitialAmount float64 `json:"initial_amount"`
	RecurringAmount *float64 `json:"recurring_amount,omitempty"`
	RecurringPeriod *int32 `json:"recurring_period,omitempty"`
	RiskLevel int32 `json:"risk_level"`
	FavouriteCategories *[]string `json:"favourite_categories,omitempty"`
	ExcludedCategories *[]string `json:"excluded_categories,omitempty"`
}

// NewETSForecastRequest instantiates a new ETSForecastRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewETSForecastRequest(timeHorizon int32, initialAmount float64, riskLevel int32) *ETSForecastRequest {
	this := ETSForecastRequest{}
	this.TimeHorizon = timeHorizon
	this.InitialAmount = initialAmount
	this.RiskLevel = riskLevel
	return &this
}

// NewETSForecastRequestWithDefaults instantiates a new ETSForecastRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewETSForecastRequestWithDefaults() *ETSForecastRequest {
	this := ETSForecastRequest{}
	return &this
}

// GetTimeHorizon returns the TimeHorizon field value
func (o *ETSForecastRequest) GetTimeHorizon() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.TimeHorizon
}

// GetTimeHorizonOk returns a tuple with the TimeHorizon field value
// and a boolean to check if the value has been set.
func (o *ETSForecastRequest) GetTimeHorizonOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.TimeHorizon, true
}

// SetTimeHorizon sets field value
func (o *ETSForecastRequest) SetTimeHorizon(v int32) {
	o.TimeHorizon = v
}

// GetInitialAmount returns the InitialAmount field value
func (o *ETSForecastRequest) GetInitialAmount() float64 {
	if o == nil {
		var ret float64
		return ret
	}

	return o.InitialAmount
}

// GetInitialAmountOk returns a tuple with the InitialAmount field value
// and a boolean to check if the value has been set.
func (o *ETSForecastRequest) GetInitialAmountOk() (*float64, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.InitialAmount, true
}

// SetInitialAmount sets field value
func (o *ETSForecastRequest) SetInitialAmount(v float64) {
	o.InitialAmount = v
}

// GetRecurringAmount returns the RecurringAmount field value if set, zero value otherwise.
func (o *ETSForecastRequest) GetRecurringAmount() float64 {
	if o == nil || o.RecurringAmount == nil {
		var ret float64
		return ret
	}
	return *o.RecurringAmount
}

// GetRecurringAmountOk returns a tuple with the RecurringAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ETSForecastRequest) GetRecurringAmountOk() (*float64, bool) {
	if o == nil || o.RecurringAmount == nil {
		return nil, false
	}
	return o.RecurringAmount, true
}

// HasRecurringAmount returns a boolean if a field has been set.
func (o *ETSForecastRequest) HasRecurringAmount() bool {
	if o != nil && o.RecurringAmount != nil {
		return true
	}

	return false
}

// SetRecurringAmount gets a reference to the given float64 and assigns it to the RecurringAmount field.
func (o *ETSForecastRequest) SetRecurringAmount(v float64) {
	o.RecurringAmount = &v
}

// GetRecurringPeriod returns the RecurringPeriod field value if set, zero value otherwise.
func (o *ETSForecastRequest) GetRecurringPeriod() int32 {
	if o == nil || o.RecurringPeriod == nil {
		var ret int32
		return ret
	}
	return *o.RecurringPeriod
}

// GetRecurringPeriodOk returns a tuple with the RecurringPeriod field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ETSForecastRequest) GetRecurringPeriodOk() (*int32, bool) {
	if o == nil || o.RecurringPeriod == nil {
		return nil, false
	}
	return o.RecurringPeriod, true
}

// HasRecurringPeriod returns a boolean if a field has been set.
func (o *ETSForecastRequest) HasRecurringPeriod() bool {
	if o != nil && o.RecurringPeriod != nil {
		return true
	}

	return false
}

// SetRecurringPeriod gets a reference to the given int32 and assigns it to the RecurringPeriod field.
func (o *ETSForecastRequest) SetRecurringPeriod(v int32) {
	o.RecurringPeriod = &v
}

// GetRiskLevel returns the RiskLevel field value
func (o *ETSForecastRequest) GetRiskLevel() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.RiskLevel
}

// GetRiskLevelOk returns a tuple with the RiskLevel field value
// and a boolean to check if the value has been set.
func (o *ETSForecastRequest) GetRiskLevelOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.RiskLevel, true
}

// SetRiskLevel sets field value
func (o *ETSForecastRequest) SetRiskLevel(v int32) {
	o.RiskLevel = v
}

// GetFavouriteCategories returns the FavouriteCategories field value if set, zero value otherwise.
func (o *ETSForecastRequest) GetFavouriteCategories() []string {
	if o == nil || o.FavouriteCategories == nil {
		var ret []string
		return ret
	}
	return *o.FavouriteCategories
}

// GetFavouriteCategoriesOk returns a tuple with the FavouriteCategories field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ETSForecastRequest) GetFavouriteCategoriesOk() (*[]string, bool) {
	if o == nil || o.FavouriteCategories == nil {
		return nil, false
	}
	return o.FavouriteCategories, true
}

// HasFavouriteCategories returns a boolean if a field has been set.
func (o *ETSForecastRequest) HasFavouriteCategories() bool {
	if o != nil && o.FavouriteCategories != nil {
		return true
	}

	return false
}

// SetFavouriteCategories gets a reference to the given []string and assigns it to the FavouriteCategories field.
func (o *ETSForecastRequest) SetFavouriteCategories(v []string) {
	o.FavouriteCategories = &v
}

// GetExcludedCategories returns the ExcludedCategories field value if set, zero value otherwise.
func (o *ETSForecastRequest) GetExcludedCategories() []string {
	if o == nil || o.ExcludedCategories == nil {
		var ret []string
		return ret
	}
	return *o.ExcludedCategories
}

// GetExcludedCategoriesOk returns a tuple with the ExcludedCategories field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ETSForecastRequest) GetExcludedCategoriesOk() (*[]string, bool) {
	if o == nil || o.ExcludedCategories == nil {
		return nil, false
	}
	return o.ExcludedCategories, true
}

// HasExcludedCategories returns a boolean if a field has been set.
func (o *ETSForecastRequest) HasExcludedCategories() bool {
	if o != nil && o.ExcludedCategories != nil {
		return true
	}

	return false
}

// SetExcludedCategories gets a reference to the given []string and assigns it to the ExcludedCategories field.
func (o *ETSForecastRequest) SetExcludedCategories(v []string) {
	o.ExcludedCategories = &v
}

func (o ETSForecastRequest) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["time_horizon"] = o.TimeHorizon
	}
	if true {
		toSerialize["initial_amount"] = o.InitialAmount
	}
	if o.RecurringAmount != nil {
		toSerialize["recurring_amount"] = o.RecurringAmount
	}
	if o.RecurringPeriod != nil {
		toSerialize["recurring_period"] = o.RecurringPeriod
	}
	if true {
		toSerialize["risk_level"] = o.RiskLevel
	}
	if o.FavouriteCategories != nil {
		toSerialize["favourite_categories"] = o.FavouriteCategories
	}
	if o.ExcludedCategories != nil {
		toSerialize["excluded_categories"] = o.ExcludedCategories
	}
	return json.Marshal(toSerialize)
}

type NullableETSForecastRequest struct {
	value *ETSForecastRequest
	isSet bool
}

func (v NullableETSForecastRequest) Get() *ETSForecastRequest {
	return v.value
}

func (v *NullableETSForecastRequest) Set(val *ETSForecastRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableETSForecastRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableETSForecastRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableETSForecastRequest(val *ETSForecastRequest) *NullableETSForecastRequest {
	return &NullableETSForecastRequest{value: val, isSet: true}
}

func (v NullableETSForecastRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableETSForecastRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


