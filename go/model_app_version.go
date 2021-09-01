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

// AppVersion struct for AppVersion
type AppVersion struct {
	Number int32 `json:"number"`
}

// NewAppVersion instantiates a new AppVersion object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAppVersion(number int32) *AppVersion {
	this := AppVersion{}
	this.Number = number
	return &this
}

// NewAppVersionWithDefaults instantiates a new AppVersion object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAppVersionWithDefaults() *AppVersion {
	this := AppVersion{}
	return &this
}

// GetNumber returns the Number field value
func (o *AppVersion) GetNumber() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Number
}

// GetNumberOk returns a tuple with the Number field value
// and a boolean to check if the value has been set.
func (o *AppVersion) GetNumberOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Number, true
}

// SetNumber sets field value
func (o *AppVersion) SetNumber(v int32) {
	o.Number = v
}

func (o AppVersion) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["number"] = o.Number
	}
	return json.Marshal(toSerialize)
}

type NullableAppVersion struct {
	value *AppVersion
	isSet bool
}

func (v NullableAppVersion) Get() *AppVersion {
	return v.value
}

func (v *NullableAppVersion) Set(val *AppVersion) {
	v.value = val
	v.isSet = true
}

func (v NullableAppVersion) IsSet() bool {
	return v.isSet
}

func (v *NullableAppVersion) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAppVersion(val *AppVersion) *NullableAppVersion {
	return &NullableAppVersion{value: val, isSet: true}
}

func (v NullableAppVersion) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAppVersion) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

