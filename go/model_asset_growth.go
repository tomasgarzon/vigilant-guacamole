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

// AssetGrowth struct for AssetGrowth
type AssetGrowth struct {
	Year int32 `json:"year"`
	Amount float64 `json:"amount"`
}

// NewAssetGrowth instantiates a new AssetGrowth object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAssetGrowth(year int32, amount float64) *AssetGrowth {
	this := AssetGrowth{}
	this.Year = year
	this.Amount = amount
	return &this
}

// NewAssetGrowthWithDefaults instantiates a new AssetGrowth object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAssetGrowthWithDefaults() *AssetGrowth {
	this := AssetGrowth{}
	return &this
}

// GetYear returns the Year field value
func (o *AssetGrowth) GetYear() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Year
}

// GetYearOk returns a tuple with the Year field value
// and a boolean to check if the value has been set.
func (o *AssetGrowth) GetYearOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Year, true
}

// SetYear sets field value
func (o *AssetGrowth) SetYear(v int32) {
	o.Year = v
}

// GetAmount returns the Amount field value
func (o *AssetGrowth) GetAmount() float64 {
	if o == nil {
		var ret float64
		return ret
	}

	return o.Amount
}

// GetAmountOk returns a tuple with the Amount field value
// and a boolean to check if the value has been set.
func (o *AssetGrowth) GetAmountOk() (*float64, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Amount, true
}

// SetAmount sets field value
func (o *AssetGrowth) SetAmount(v float64) {
	o.Amount = v
}

func (o AssetGrowth) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["year"] = o.Year
	}
	if true {
		toSerialize["amount"] = o.Amount
	}
	return json.Marshal(toSerialize)
}

type NullableAssetGrowth struct {
	value *AssetGrowth
	isSet bool
}

func (v NullableAssetGrowth) Get() *AssetGrowth {
	return v.value
}

func (v *NullableAssetGrowth) Set(val *AssetGrowth) {
	v.value = val
	v.isSet = true
}

func (v NullableAssetGrowth) IsSet() bool {
	return v.isSet
}

func (v *NullableAssetGrowth) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAssetGrowth(val *AssetGrowth) *NullableAssetGrowth {
	return &NullableAssetGrowth{value: val, isSet: true}
}

func (v NullableAssetGrowth) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAssetGrowth) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


