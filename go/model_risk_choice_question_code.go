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

// RiskChoiceQuestionCode struct for RiskChoiceQuestionCode
type RiskChoiceQuestionCode struct {
	Code string `json:"code"`
	Order *int32 `json:"order,omitempty"`
	Description NullableString `json:"description,omitempty"`
	Created time.Time `json:"created"`
	QuestionCode string `json:"question_code"`
}

// NewRiskChoiceQuestionCode instantiates a new RiskChoiceQuestionCode object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRiskChoiceQuestionCode(code string, created time.Time, questionCode string) *RiskChoiceQuestionCode {
	this := RiskChoiceQuestionCode{}
	this.Code = code
	this.Created = created
	this.QuestionCode = questionCode
	return &this
}

// NewRiskChoiceQuestionCodeWithDefaults instantiates a new RiskChoiceQuestionCode object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRiskChoiceQuestionCodeWithDefaults() *RiskChoiceQuestionCode {
	this := RiskChoiceQuestionCode{}
	return &this
}

// GetCode returns the Code field value
func (o *RiskChoiceQuestionCode) GetCode() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Code
}

// GetCodeOk returns a tuple with the Code field value
// and a boolean to check if the value has been set.
func (o *RiskChoiceQuestionCode) GetCodeOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Code, true
}

// SetCode sets field value
func (o *RiskChoiceQuestionCode) SetCode(v string) {
	o.Code = v
}

// GetOrder returns the Order field value if set, zero value otherwise.
func (o *RiskChoiceQuestionCode) GetOrder() int32 {
	if o == nil || o.Order == nil {
		var ret int32
		return ret
	}
	return *o.Order
}

// GetOrderOk returns a tuple with the Order field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RiskChoiceQuestionCode) GetOrderOk() (*int32, bool) {
	if o == nil || o.Order == nil {
		return nil, false
	}
	return o.Order, true
}

// HasOrder returns a boolean if a field has been set.
func (o *RiskChoiceQuestionCode) HasOrder() bool {
	if o != nil && o.Order != nil {
		return true
	}

	return false
}

// SetOrder gets a reference to the given int32 and assigns it to the Order field.
func (o *RiskChoiceQuestionCode) SetOrder(v int32) {
	o.Order = &v
}

// GetDescription returns the Description field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *RiskChoiceQuestionCode) GetDescription() string {
	if o == nil || o.Description.Get() == nil {
		var ret string
		return ret
	}
	return *o.Description.Get()
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *RiskChoiceQuestionCode) GetDescriptionOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.Description.Get(), o.Description.IsSet()
}

// HasDescription returns a boolean if a field has been set.
func (o *RiskChoiceQuestionCode) HasDescription() bool {
	if o != nil && o.Description.IsSet() {
		return true
	}

	return false
}

// SetDescription gets a reference to the given NullableString and assigns it to the Description field.
func (o *RiskChoiceQuestionCode) SetDescription(v string) {
	o.Description.Set(&v)
}
// SetDescriptionNil sets the value for Description to be an explicit nil
func (o *RiskChoiceQuestionCode) SetDescriptionNil() {
	o.Description.Set(nil)
}

// UnsetDescription ensures that no value is present for Description, not even an explicit nil
func (o *RiskChoiceQuestionCode) UnsetDescription() {
	o.Description.Unset()
}

// GetCreated returns the Created field value
func (o *RiskChoiceQuestionCode) GetCreated() time.Time {
	if o == nil {
		var ret time.Time
		return ret
	}

	return o.Created
}

// GetCreatedOk returns a tuple with the Created field value
// and a boolean to check if the value has been set.
func (o *RiskChoiceQuestionCode) GetCreatedOk() (*time.Time, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Created, true
}

// SetCreated sets field value
func (o *RiskChoiceQuestionCode) SetCreated(v time.Time) {
	o.Created = v
}

// GetQuestionCode returns the QuestionCode field value
func (o *RiskChoiceQuestionCode) GetQuestionCode() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.QuestionCode
}

// GetQuestionCodeOk returns a tuple with the QuestionCode field value
// and a boolean to check if the value has been set.
func (o *RiskChoiceQuestionCode) GetQuestionCodeOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.QuestionCode, true
}

// SetQuestionCode sets field value
func (o *RiskChoiceQuestionCode) SetQuestionCode(v string) {
	o.QuestionCode = v
}

func (o RiskChoiceQuestionCode) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["code"] = o.Code
	}
	if o.Order != nil {
		toSerialize["order"] = o.Order
	}
	if o.Description.IsSet() {
		toSerialize["description"] = o.Description.Get()
	}
	if true {
		toSerialize["created"] = o.Created
	}
	if true {
		toSerialize["question_code"] = o.QuestionCode
	}
	return json.Marshal(toSerialize)
}

type NullableRiskChoiceQuestionCode struct {
	value *RiskChoiceQuestionCode
	isSet bool
}

func (v NullableRiskChoiceQuestionCode) Get() *RiskChoiceQuestionCode {
	return v.value
}

func (v *NullableRiskChoiceQuestionCode) Set(val *RiskChoiceQuestionCode) {
	v.value = val
	v.isSet = true
}

func (v NullableRiskChoiceQuestionCode) IsSet() bool {
	return v.isSet
}

func (v *NullableRiskChoiceQuestionCode) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRiskChoiceQuestionCode(val *RiskChoiceQuestionCode) *NullableRiskChoiceQuestionCode {
	return &NullableRiskChoiceQuestionCode{value: val, isSet: true}
}

func (v NullableRiskChoiceQuestionCode) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRiskChoiceQuestionCode) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

