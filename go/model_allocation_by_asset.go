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

// AllocationByAsset struct for AllocationByAsset
type AllocationByAsset struct {
	CategoryCode string `json:"category_code"`
	DisplayAllocationChart bool `json:"display_allocation_chart"`
	DisplayAllocationChartConfigurationError bool `json:"display_allocation_chart_configuration_error"`
	AllocationsByCode []AllocationByCode `json:"allocations_by_code"`
}

// NewAllocationByAsset instantiates a new AllocationByAsset object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAllocationByAsset(categoryCode string, displayAllocationChart bool, displayAllocationChartConfigurationError bool, allocationsByCode []AllocationByCode) *AllocationByAsset {
	this := AllocationByAsset{}
	this.CategoryCode = categoryCode
	this.DisplayAllocationChart = displayAllocationChart
	this.DisplayAllocationChartConfigurationError = displayAllocationChartConfigurationError
	this.AllocationsByCode = allocationsByCode
	return &this
}

// NewAllocationByAssetWithDefaults instantiates a new AllocationByAsset object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAllocationByAssetWithDefaults() *AllocationByAsset {
	this := AllocationByAsset{}
	return &this
}

// GetCategoryCode returns the CategoryCode field value
func (o *AllocationByAsset) GetCategoryCode() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.CategoryCode
}

// GetCategoryCodeOk returns a tuple with the CategoryCode field value
// and a boolean to check if the value has been set.
func (o *AllocationByAsset) GetCategoryCodeOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.CategoryCode, true
}

// SetCategoryCode sets field value
func (o *AllocationByAsset) SetCategoryCode(v string) {
	o.CategoryCode = v
}

// GetDisplayAllocationChart returns the DisplayAllocationChart field value
func (o *AllocationByAsset) GetDisplayAllocationChart() bool {
	if o == nil {
		var ret bool
		return ret
	}

	return o.DisplayAllocationChart
}

// GetDisplayAllocationChartOk returns a tuple with the DisplayAllocationChart field value
// and a boolean to check if the value has been set.
func (o *AllocationByAsset) GetDisplayAllocationChartOk() (*bool, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.DisplayAllocationChart, true
}

// SetDisplayAllocationChart sets field value
func (o *AllocationByAsset) SetDisplayAllocationChart(v bool) {
	o.DisplayAllocationChart = v
}

// GetDisplayAllocationChartConfigurationError returns the DisplayAllocationChartConfigurationError field value
func (o *AllocationByAsset) GetDisplayAllocationChartConfigurationError() bool {
	if o == nil {
		var ret bool
		return ret
	}

	return o.DisplayAllocationChartConfigurationError
}

// GetDisplayAllocationChartConfigurationErrorOk returns a tuple with the DisplayAllocationChartConfigurationError field value
// and a boolean to check if the value has been set.
func (o *AllocationByAsset) GetDisplayAllocationChartConfigurationErrorOk() (*bool, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.DisplayAllocationChartConfigurationError, true
}

// SetDisplayAllocationChartConfigurationError sets field value
func (o *AllocationByAsset) SetDisplayAllocationChartConfigurationError(v bool) {
	o.DisplayAllocationChartConfigurationError = v
}

// GetAllocationsByCode returns the AllocationsByCode field value
func (o *AllocationByAsset) GetAllocationsByCode() []AllocationByCode {
	if o == nil {
		var ret []AllocationByCode
		return ret
	}

	return o.AllocationsByCode
}

// GetAllocationsByCodeOk returns a tuple with the AllocationsByCode field value
// and a boolean to check if the value has been set.
func (o *AllocationByAsset) GetAllocationsByCodeOk() (*[]AllocationByCode, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.AllocationsByCode, true
}

// SetAllocationsByCode sets field value
func (o *AllocationByAsset) SetAllocationsByCode(v []AllocationByCode) {
	o.AllocationsByCode = v
}

func (o AllocationByAsset) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["category_code"] = o.CategoryCode
	}
	if true {
		toSerialize["display_allocation_chart"] = o.DisplayAllocationChart
	}
	if true {
		toSerialize["display_allocation_chart_configuration_error"] = o.DisplayAllocationChartConfigurationError
	}
	if true {
		toSerialize["allocations_by_code"] = o.AllocationsByCode
	}
	return json.Marshal(toSerialize)
}

type NullableAllocationByAsset struct {
	value *AllocationByAsset
	isSet bool
}

func (v NullableAllocationByAsset) Get() *AllocationByAsset {
	return v.value
}

func (v *NullableAllocationByAsset) Set(val *AllocationByAsset) {
	v.value = val
	v.isSet = true
}

func (v NullableAllocationByAsset) IsSet() bool {
	return v.isSet
}

func (v *NullableAllocationByAsset) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAllocationByAsset(val *AllocationByAsset) *NullableAllocationByAsset {
	return &NullableAllocationByAsset{value: val, isSet: true}
}

func (v NullableAllocationByAsset) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAllocationByAsset) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


