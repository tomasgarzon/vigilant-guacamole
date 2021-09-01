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

// PaginatedAssessmentList struct for PaginatedAssessmentList
type PaginatedAssessmentList struct {
	Count *int32 `json:"count,omitempty"`
	Next NullableString `json:"next,omitempty"`
	Previous NullableString `json:"previous,omitempty"`
	Results *[]Assessment `json:"results,omitempty"`
}

// NewPaginatedAssessmentList instantiates a new PaginatedAssessmentList object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPaginatedAssessmentList() *PaginatedAssessmentList {
	this := PaginatedAssessmentList{}
	return &this
}

// NewPaginatedAssessmentListWithDefaults instantiates a new PaginatedAssessmentList object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPaginatedAssessmentListWithDefaults() *PaginatedAssessmentList {
	this := PaginatedAssessmentList{}
	return &this
}

// GetCount returns the Count field value if set, zero value otherwise.
func (o *PaginatedAssessmentList) GetCount() int32 {
	if o == nil || o.Count == nil {
		var ret int32
		return ret
	}
	return *o.Count
}

// GetCountOk returns a tuple with the Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PaginatedAssessmentList) GetCountOk() (*int32, bool) {
	if o == nil || o.Count == nil {
		return nil, false
	}
	return o.Count, true
}

// HasCount returns a boolean if a field has been set.
func (o *PaginatedAssessmentList) HasCount() bool {
	if o != nil && o.Count != nil {
		return true
	}

	return false
}

// SetCount gets a reference to the given int32 and assigns it to the Count field.
func (o *PaginatedAssessmentList) SetCount(v int32) {
	o.Count = &v
}

// GetNext returns the Next field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *PaginatedAssessmentList) GetNext() string {
	if o == nil || o.Next.Get() == nil {
		var ret string
		return ret
	}
	return *o.Next.Get()
}

// GetNextOk returns a tuple with the Next field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *PaginatedAssessmentList) GetNextOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.Next.Get(), o.Next.IsSet()
}

// HasNext returns a boolean if a field has been set.
func (o *PaginatedAssessmentList) HasNext() bool {
	if o != nil && o.Next.IsSet() {
		return true
	}

	return false
}

// SetNext gets a reference to the given NullableString and assigns it to the Next field.
func (o *PaginatedAssessmentList) SetNext(v string) {
	o.Next.Set(&v)
}
// SetNextNil sets the value for Next to be an explicit nil
func (o *PaginatedAssessmentList) SetNextNil() {
	o.Next.Set(nil)
}

// UnsetNext ensures that no value is present for Next, not even an explicit nil
func (o *PaginatedAssessmentList) UnsetNext() {
	o.Next.Unset()
}

// GetPrevious returns the Previous field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *PaginatedAssessmentList) GetPrevious() string {
	if o == nil || o.Previous.Get() == nil {
		var ret string
		return ret
	}
	return *o.Previous.Get()
}

// GetPreviousOk returns a tuple with the Previous field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *PaginatedAssessmentList) GetPreviousOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.Previous.Get(), o.Previous.IsSet()
}

// HasPrevious returns a boolean if a field has been set.
func (o *PaginatedAssessmentList) HasPrevious() bool {
	if o != nil && o.Previous.IsSet() {
		return true
	}

	return false
}

// SetPrevious gets a reference to the given NullableString and assigns it to the Previous field.
func (o *PaginatedAssessmentList) SetPrevious(v string) {
	o.Previous.Set(&v)
}
// SetPreviousNil sets the value for Previous to be an explicit nil
func (o *PaginatedAssessmentList) SetPreviousNil() {
	o.Previous.Set(nil)
}

// UnsetPrevious ensures that no value is present for Previous, not even an explicit nil
func (o *PaginatedAssessmentList) UnsetPrevious() {
	o.Previous.Unset()
}

// GetResults returns the Results field value if set, zero value otherwise.
func (o *PaginatedAssessmentList) GetResults() []Assessment {
	if o == nil || o.Results == nil {
		var ret []Assessment
		return ret
	}
	return *o.Results
}

// GetResultsOk returns a tuple with the Results field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PaginatedAssessmentList) GetResultsOk() (*[]Assessment, bool) {
	if o == nil || o.Results == nil {
		return nil, false
	}
	return o.Results, true
}

// HasResults returns a boolean if a field has been set.
func (o *PaginatedAssessmentList) HasResults() bool {
	if o != nil && o.Results != nil {
		return true
	}

	return false
}

// SetResults gets a reference to the given []Assessment and assigns it to the Results field.
func (o *PaginatedAssessmentList) SetResults(v []Assessment) {
	o.Results = &v
}

func (o PaginatedAssessmentList) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Count != nil {
		toSerialize["count"] = o.Count
	}
	if o.Next.IsSet() {
		toSerialize["next"] = o.Next.Get()
	}
	if o.Previous.IsSet() {
		toSerialize["previous"] = o.Previous.Get()
	}
	if o.Results != nil {
		toSerialize["results"] = o.Results
	}
	return json.Marshal(toSerialize)
}

type NullablePaginatedAssessmentList struct {
	value *PaginatedAssessmentList
	isSet bool
}

func (v NullablePaginatedAssessmentList) Get() *PaginatedAssessmentList {
	return v.value
}

func (v *NullablePaginatedAssessmentList) Set(val *PaginatedAssessmentList) {
	v.value = val
	v.isSet = true
}

func (v NullablePaginatedAssessmentList) IsSet() bool {
	return v.isSet
}

func (v *NullablePaginatedAssessmentList) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePaginatedAssessmentList(val *PaginatedAssessmentList) *NullablePaginatedAssessmentList {
	return &NullablePaginatedAssessmentList{value: val, isSet: true}
}

func (v NullablePaginatedAssessmentList) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePaginatedAssessmentList) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


