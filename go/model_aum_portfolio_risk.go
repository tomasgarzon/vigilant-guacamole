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

// AUMPortfolioRisk struct for AUMPortfolioRisk
type AUMPortfolioRisk struct {
	RiskLevel int32 `json:"risk_level"`
	Balance float64 `json:"balance"`
}

// NewAUMPortfolioRisk instantiates a new AUMPortfolioRisk object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAUMPortfolioRisk(riskLevel int32, balance float64) *AUMPortfolioRisk {
	this := AUMPortfolioRisk{}
	this.RiskLevel = riskLevel
	this.Balance = balance
	return &this
}

// NewAUMPortfolioRiskWithDefaults instantiates a new AUMPortfolioRisk object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAUMPortfolioRiskWithDefaults() *AUMPortfolioRisk {
	this := AUMPortfolioRisk{}
	return &this
}

// GetRiskLevel returns the RiskLevel field value
func (o *AUMPortfolioRisk) GetRiskLevel() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.RiskLevel
}

// GetRiskLevelOk returns a tuple with the RiskLevel field value
// and a boolean to check if the value has been set.
func (o *AUMPortfolioRisk) GetRiskLevelOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.RiskLevel, true
}

// SetRiskLevel sets field value
func (o *AUMPortfolioRisk) SetRiskLevel(v int32) {
	o.RiskLevel = v
}

// GetBalance returns the Balance field value
func (o *AUMPortfolioRisk) GetBalance() float64 {
	if o == nil {
		var ret float64
		return ret
	}

	return o.Balance
}

// GetBalanceOk returns a tuple with the Balance field value
// and a boolean to check if the value has been set.
func (o *AUMPortfolioRisk) GetBalanceOk() (*float64, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Balance, true
}

// SetBalance sets field value
func (o *AUMPortfolioRisk) SetBalance(v float64) {
	o.Balance = v
}

func (o AUMPortfolioRisk) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["risk_level"] = o.RiskLevel
	}
	if true {
		toSerialize["balance"] = o.Balance
	}
	return json.Marshal(toSerialize)
}

type NullableAUMPortfolioRisk struct {
	value *AUMPortfolioRisk
	isSet bool
}

func (v NullableAUMPortfolioRisk) Get() *AUMPortfolioRisk {
	return v.value
}

func (v *NullableAUMPortfolioRisk) Set(val *AUMPortfolioRisk) {
	v.value = val
	v.isSet = true
}

func (v NullableAUMPortfolioRisk) IsSet() bool {
	return v.isSet
}

func (v *NullableAUMPortfolioRisk) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAUMPortfolioRisk(val *AUMPortfolioRisk) *NullableAUMPortfolioRisk {
	return &NullableAUMPortfolioRisk{value: val, isSet: true}
}

func (v NullableAUMPortfolioRisk) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAUMPortfolioRisk) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


