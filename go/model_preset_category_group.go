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

// PresetCategoryGroup struct for PresetCategoryGroup
type PresetCategoryGroup struct {
	Uuid string `json:"uuid"`
	Code string `json:"code"`
	Categories []Category `json:"categories"`
}

// NewPresetCategoryGroup instantiates a new PresetCategoryGroup object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPresetCategoryGroup(uuid string, code string, categories []Category) *PresetCategoryGroup {
	this := PresetCategoryGroup{}
	this.Uuid = uuid
	this.Code = code
	this.Categories = categories
	return &this
}

// NewPresetCategoryGroupWithDefaults instantiates a new PresetCategoryGroup object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPresetCategoryGroupWithDefaults() *PresetCategoryGroup {
	this := PresetCategoryGroup{}
	return &this
}

// GetUuid returns the Uuid field value
func (o *PresetCategoryGroup) GetUuid() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Uuid
}

// GetUuidOk returns a tuple with the Uuid field value
// and a boolean to check if the value has been set.
func (o *PresetCategoryGroup) GetUuidOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Uuid, true
}

// SetUuid sets field value
func (o *PresetCategoryGroup) SetUuid(v string) {
	o.Uuid = v
}

// GetCode returns the Code field value
func (o *PresetCategoryGroup) GetCode() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Code
}

// GetCodeOk returns a tuple with the Code field value
// and a boolean to check if the value has been set.
func (o *PresetCategoryGroup) GetCodeOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Code, true
}

// SetCode sets field value
func (o *PresetCategoryGroup) SetCode(v string) {
	o.Code = v
}

// GetCategories returns the Categories field value
func (o *PresetCategoryGroup) GetCategories() []Category {
	if o == nil {
		var ret []Category
		return ret
	}

	return o.Categories
}

// GetCategoriesOk returns a tuple with the Categories field value
// and a boolean to check if the value has been set.
func (o *PresetCategoryGroup) GetCategoriesOk() (*[]Category, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Categories, true
}

// SetCategories sets field value
func (o *PresetCategoryGroup) SetCategories(v []Category) {
	o.Categories = v
}

func (o PresetCategoryGroup) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["uuid"] = o.Uuid
	}
	if true {
		toSerialize["code"] = o.Code
	}
	if true {
		toSerialize["categories"] = o.Categories
	}
	return json.Marshal(toSerialize)
}

type NullablePresetCategoryGroup struct {
	value *PresetCategoryGroup
	isSet bool
}

func (v NullablePresetCategoryGroup) Get() *PresetCategoryGroup {
	return v.value
}

func (v *NullablePresetCategoryGroup) Set(val *PresetCategoryGroup) {
	v.value = val
	v.isSet = true
}

func (v NullablePresetCategoryGroup) IsSet() bool {
	return v.isSet
}

func (v *NullablePresetCategoryGroup) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePresetCategoryGroup(val *PresetCategoryGroup) *NullablePresetCategoryGroup {
	return &NullablePresetCategoryGroup{value: val, isSet: true}
}

func (v NullablePresetCategoryGroup) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePresetCategoryGroup) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

