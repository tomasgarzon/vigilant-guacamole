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

// Assessment struct for Assessment
type Assessment struct {
	Uuid string `json:"uuid"`
	Completed NullableTime `json:"completed,omitempty"`
	Choices []RiskChoiceQuestionCode `json:"choices"`
	Status *AssessmentStatusEnum `json:"status,omitempty"`
	RiskLevel int32 `json:"risk_level"`
	Created time.Time `json:"created"`
}

// NewAssessment instantiates a new Assessment object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAssessment(uuid string, choices []RiskChoiceQuestionCode, riskLevel int32, created time.Time) *Assessment {
	this := Assessment{}
	this.Uuid = uuid
	this.Choices = choices
	this.RiskLevel = riskLevel
	this.Created = created
	return &this
}

// NewAssessmentWithDefaults instantiates a new Assessment object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAssessmentWithDefaults() *Assessment {
	this := Assessment{}
	return &this
}

// GetUuid returns the Uuid field value
func (o *Assessment) GetUuid() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Uuid
}

// GetUuidOk returns a tuple with the Uuid field value
// and a boolean to check if the value has been set.
func (o *Assessment) GetUuidOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Uuid, true
}

// SetUuid sets field value
func (o *Assessment) SetUuid(v string) {
	o.Uuid = v
}

// GetCompleted returns the Completed field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *Assessment) GetCompleted() time.Time {
	if o == nil || o.Completed.Get() == nil {
		var ret time.Time
		return ret
	}
	return *o.Completed.Get()
}

// GetCompletedOk returns a tuple with the Completed field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *Assessment) GetCompletedOk() (*time.Time, bool) {
	if o == nil  {
		return nil, false
	}
	return o.Completed.Get(), o.Completed.IsSet()
}

// HasCompleted returns a boolean if a field has been set.
func (o *Assessment) HasCompleted() bool {
	if o != nil && o.Completed.IsSet() {
		return true
	}

	return false
}

// SetCompleted gets a reference to the given NullableTime and assigns it to the Completed field.
func (o *Assessment) SetCompleted(v time.Time) {
	o.Completed.Set(&v)
}
// SetCompletedNil sets the value for Completed to be an explicit nil
func (o *Assessment) SetCompletedNil() {
	o.Completed.Set(nil)
}

// UnsetCompleted ensures that no value is present for Completed, not even an explicit nil
func (o *Assessment) UnsetCompleted() {
	o.Completed.Unset()
}

// GetChoices returns the Choices field value
func (o *Assessment) GetChoices() []RiskChoiceQuestionCode {
	if o == nil {
		var ret []RiskChoiceQuestionCode
		return ret
	}

	return o.Choices
}

// GetChoicesOk returns a tuple with the Choices field value
// and a boolean to check if the value has been set.
func (o *Assessment) GetChoicesOk() (*[]RiskChoiceQuestionCode, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Choices, true
}

// SetChoices sets field value
func (o *Assessment) SetChoices(v []RiskChoiceQuestionCode) {
	o.Choices = v
}

// GetStatus returns the Status field value if set, zero value otherwise.
func (o *Assessment) GetStatus() AssessmentStatusEnum {
	if o == nil || o.Status == nil {
		var ret AssessmentStatusEnum
		return ret
	}
	return *o.Status
}

// GetStatusOk returns a tuple with the Status field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Assessment) GetStatusOk() (*AssessmentStatusEnum, bool) {
	if o == nil || o.Status == nil {
		return nil, false
	}
	return o.Status, true
}

// HasStatus returns a boolean if a field has been set.
func (o *Assessment) HasStatus() bool {
	if o != nil && o.Status != nil {
		return true
	}

	return false
}

// SetStatus gets a reference to the given AssessmentStatusEnum and assigns it to the Status field.
func (o *Assessment) SetStatus(v AssessmentStatusEnum) {
	o.Status = &v
}

// GetRiskLevel returns the RiskLevel field value
func (o *Assessment) GetRiskLevel() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.RiskLevel
}

// GetRiskLevelOk returns a tuple with the RiskLevel field value
// and a boolean to check if the value has been set.
func (o *Assessment) GetRiskLevelOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.RiskLevel, true
}

// SetRiskLevel sets field value
func (o *Assessment) SetRiskLevel(v int32) {
	o.RiskLevel = v
}

// GetCreated returns the Created field value
func (o *Assessment) GetCreated() time.Time {
	if o == nil {
		var ret time.Time
		return ret
	}

	return o.Created
}

// GetCreatedOk returns a tuple with the Created field value
// and a boolean to check if the value has been set.
func (o *Assessment) GetCreatedOk() (*time.Time, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Created, true
}

// SetCreated sets field value
func (o *Assessment) SetCreated(v time.Time) {
	o.Created = v
}

func (o Assessment) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["uuid"] = o.Uuid
	}
	if o.Completed.IsSet() {
		toSerialize["completed"] = o.Completed.Get()
	}
	if true {
		toSerialize["choices"] = o.Choices
	}
	if o.Status != nil {
		toSerialize["status"] = o.Status
	}
	if true {
		toSerialize["risk_level"] = o.RiskLevel
	}
	if true {
		toSerialize["created"] = o.Created
	}
	return json.Marshal(toSerialize)
}

type NullableAssessment struct {
	value *Assessment
	isSet bool
}

func (v NullableAssessment) Get() *Assessment {
	return v.value
}

func (v *NullableAssessment) Set(val *Assessment) {
	v.value = val
	v.isSet = true
}

func (v NullableAssessment) IsSet() bool {
	return v.isSet
}

func (v *NullableAssessment) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAssessment(val *Assessment) *NullableAssessment {
	return &NullableAssessment{value: val, isSet: true}
}

func (v NullableAssessment) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAssessment) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


