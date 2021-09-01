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

// ModelPortfolioForecastRequest struct for ModelPortfolioForecastRequest
type ModelPortfolioForecastRequest struct {
	TimeHorizon int32 `json:"time_horizon"`
	InitialAmount float64 `json:"initial_amount"`
	RecurringAmount *float64 `json:"recurring_amount,omitempty"`
	RecurringPeriod *int32 `json:"recurring_period,omitempty"`
	ModelPortfolio string `json:"model_portfolio"`
}

// NewModelPortfolioForecastRequest instantiates a new ModelPortfolioForecastRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewModelPortfolioForecastRequest(timeHorizon int32, initialAmount float64, modelPortfolio string) *ModelPortfolioForecastRequest {
	this := ModelPortfolioForecastRequest{}
	this.TimeHorizon = timeHorizon
	this.InitialAmount = initialAmount
	this.ModelPortfolio = modelPortfolio
	return &this
}

// NewModelPortfolioForecastRequestWithDefaults instantiates a new ModelPortfolioForecastRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewModelPortfolioForecastRequestWithDefaults() *ModelPortfolioForecastRequest {
	this := ModelPortfolioForecastRequest{}
	return &this
}

// GetTimeHorizon returns the TimeHorizon field value
func (o *ModelPortfolioForecastRequest) GetTimeHorizon() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.TimeHorizon
}

// GetTimeHorizonOk returns a tuple with the TimeHorizon field value
// and a boolean to check if the value has been set.
func (o *ModelPortfolioForecastRequest) GetTimeHorizonOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.TimeHorizon, true
}

// SetTimeHorizon sets field value
func (o *ModelPortfolioForecastRequest) SetTimeHorizon(v int32) {
	o.TimeHorizon = v
}

// GetInitialAmount returns the InitialAmount field value
func (o *ModelPortfolioForecastRequest) GetInitialAmount() float64 {
	if o == nil {
		var ret float64
		return ret
	}

	return o.InitialAmount
}

// GetInitialAmountOk returns a tuple with the InitialAmount field value
// and a boolean to check if the value has been set.
func (o *ModelPortfolioForecastRequest) GetInitialAmountOk() (*float64, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.InitialAmount, true
}

// SetInitialAmount sets field value
func (o *ModelPortfolioForecastRequest) SetInitialAmount(v float64) {
	o.InitialAmount = v
}

// GetRecurringAmount returns the RecurringAmount field value if set, zero value otherwise.
func (o *ModelPortfolioForecastRequest) GetRecurringAmount() float64 {
	if o == nil || o.RecurringAmount == nil {
		var ret float64
		return ret
	}
	return *o.RecurringAmount
}

// GetRecurringAmountOk returns a tuple with the RecurringAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelPortfolioForecastRequest) GetRecurringAmountOk() (*float64, bool) {
	if o == nil || o.RecurringAmount == nil {
		return nil, false
	}
	return o.RecurringAmount, true
}

// HasRecurringAmount returns a boolean if a field has been set.
func (o *ModelPortfolioForecastRequest) HasRecurringAmount() bool {
	if o != nil && o.RecurringAmount != nil {
		return true
	}

	return false
}

// SetRecurringAmount gets a reference to the given float64 and assigns it to the RecurringAmount field.
func (o *ModelPortfolioForecastRequest) SetRecurringAmount(v float64) {
	o.RecurringAmount = &v
}

// GetRecurringPeriod returns the RecurringPeriod field value if set, zero value otherwise.
func (o *ModelPortfolioForecastRequest) GetRecurringPeriod() int32 {
	if o == nil || o.RecurringPeriod == nil {
		var ret int32
		return ret
	}
	return *o.RecurringPeriod
}

// GetRecurringPeriodOk returns a tuple with the RecurringPeriod field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelPortfolioForecastRequest) GetRecurringPeriodOk() (*int32, bool) {
	if o == nil || o.RecurringPeriod == nil {
		return nil, false
	}
	return o.RecurringPeriod, true
}

// HasRecurringPeriod returns a boolean if a field has been set.
func (o *ModelPortfolioForecastRequest) HasRecurringPeriod() bool {
	if o != nil && o.RecurringPeriod != nil {
		return true
	}

	return false
}

// SetRecurringPeriod gets a reference to the given int32 and assigns it to the RecurringPeriod field.
func (o *ModelPortfolioForecastRequest) SetRecurringPeriod(v int32) {
	o.RecurringPeriod = &v
}

// GetModelPortfolio returns the ModelPortfolio field value
func (o *ModelPortfolioForecastRequest) GetModelPortfolio() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.ModelPortfolio
}

// GetModelPortfolioOk returns a tuple with the ModelPortfolio field value
// and a boolean to check if the value has been set.
func (o *ModelPortfolioForecastRequest) GetModelPortfolioOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.ModelPortfolio, true
}

// SetModelPortfolio sets field value
func (o *ModelPortfolioForecastRequest) SetModelPortfolio(v string) {
	o.ModelPortfolio = v
}

func (o ModelPortfolioForecastRequest) MarshalJSON() ([]byte, error) {
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
		toSerialize["model_portfolio"] = o.ModelPortfolio
	}
	return json.Marshal(toSerialize)
}

type NullableModelPortfolioForecastRequest struct {
	value *ModelPortfolioForecastRequest
	isSet bool
}

func (v NullableModelPortfolioForecastRequest) Get() *ModelPortfolioForecastRequest {
	return v.value
}

func (v *NullableModelPortfolioForecastRequest) Set(val *ModelPortfolioForecastRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableModelPortfolioForecastRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableModelPortfolioForecastRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableModelPortfolioForecastRequest(val *ModelPortfolioForecastRequest) *NullableModelPortfolioForecastRequest {
	return &NullableModelPortfolioForecastRequest{value: val, isSet: true}
}

func (v NullableModelPortfolioForecastRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableModelPortfolioForecastRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

