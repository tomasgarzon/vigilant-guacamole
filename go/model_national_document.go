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

// NationalDocument struct for NationalDocument
type NationalDocument struct {
	Uuid string `json:"uuid"`
	Code string `json:"code"`
	Name string `json:"name"`
	Countries []string `json:"countries"`
}

// NewNationalDocument instantiates a new NationalDocument object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewNationalDocument(uuid string, code string, name string, countries []string) *NationalDocument {
	this := NationalDocument{}
	this.Uuid = uuid
	this.Code = code
	this.Name = name
	this.Countries = countries
	return &this
}

// NewNationalDocumentWithDefaults instantiates a new NationalDocument object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewNationalDocumentWithDefaults() *NationalDocument {
	this := NationalDocument{}
	return &this
}

// GetUuid returns the Uuid field value
func (o *NationalDocument) GetUuid() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Uuid
}

// GetUuidOk returns a tuple with the Uuid field value
// and a boolean to check if the value has been set.
func (o *NationalDocument) GetUuidOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Uuid, true
}

// SetUuid sets field value
func (o *NationalDocument) SetUuid(v string) {
	o.Uuid = v
}

// GetCode returns the Code field value
func (o *NationalDocument) GetCode() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Code
}

// GetCodeOk returns a tuple with the Code field value
// and a boolean to check if the value has been set.
func (o *NationalDocument) GetCodeOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Code, true
}

// SetCode sets field value
func (o *NationalDocument) SetCode(v string) {
	o.Code = v
}

// GetName returns the Name field value
func (o *NationalDocument) GetName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Name
}

// GetNameOk returns a tuple with the Name field value
// and a boolean to check if the value has been set.
func (o *NationalDocument) GetNameOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Name, true
}

// SetName sets field value
func (o *NationalDocument) SetName(v string) {
	o.Name = v
}

// GetCountries returns the Countries field value
func (o *NationalDocument) GetCountries() []string {
	if o == nil {
		var ret []string
		return ret
	}

	return o.Countries
}

// GetCountriesOk returns a tuple with the Countries field value
// and a boolean to check if the value has been set.
func (o *NationalDocument) GetCountriesOk() (*[]string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Countries, true
}

// SetCountries sets field value
func (o *NationalDocument) SetCountries(v []string) {
	o.Countries = v
}

func (o NationalDocument) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["uuid"] = o.Uuid
	}
	if true {
		toSerialize["code"] = o.Code
	}
	if true {
		toSerialize["name"] = o.Name
	}
	if true {
		toSerialize["countries"] = o.Countries
	}
	return json.Marshal(toSerialize)
}

type NullableNationalDocument struct {
	value *NationalDocument
	isSet bool
}

func (v NullableNationalDocument) Get() *NationalDocument {
	return v.value
}

func (v *NullableNationalDocument) Set(val *NationalDocument) {
	v.value = val
	v.isSet = true
}

func (v NullableNationalDocument) IsSet() bool {
	return v.isSet
}

func (v *NullableNationalDocument) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableNationalDocument(val *NationalDocument) *NullableNationalDocument {
	return &NullableNationalDocument{value: val, isSet: true}
}

func (v NullableNationalDocument) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableNationalDocument) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

