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

// VerificationCreate struct for VerificationCreate
type VerificationCreate struct {
	Uuid string `json:"uuid"`
	VerifyType VerifyTypeEnum `json:"verify_type"`
	Status *StatusBd7Enum `json:"status,omitempty"`
	Result *OneOfResultEnumBlankEnum `json:"result,omitempty"`
	Created time.Time `json:"created"`
	Updated time.Time `json:"updated"`
}

// NewVerificationCreate instantiates a new VerificationCreate object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewVerificationCreate(uuid string, verifyType VerifyTypeEnum, created time.Time, updated time.Time) *VerificationCreate {
	this := VerificationCreate{}
	this.Uuid = uuid
	this.VerifyType = verifyType
	this.Created = created
	this.Updated = updated
	return &this
}

// NewVerificationCreateWithDefaults instantiates a new VerificationCreate object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewVerificationCreateWithDefaults() *VerificationCreate {
	this := VerificationCreate{}
	return &this
}

// GetUuid returns the Uuid field value
func (o *VerificationCreate) GetUuid() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Uuid
}

// GetUuidOk returns a tuple with the Uuid field value
// and a boolean to check if the value has been set.
func (o *VerificationCreate) GetUuidOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Uuid, true
}

// SetUuid sets field value
func (o *VerificationCreate) SetUuid(v string) {
	o.Uuid = v
}

// GetVerifyType returns the VerifyType field value
func (o *VerificationCreate) GetVerifyType() VerifyTypeEnum {
	if o == nil {
		var ret VerifyTypeEnum
		return ret
	}

	return o.VerifyType
}

// GetVerifyTypeOk returns a tuple with the VerifyType field value
// and a boolean to check if the value has been set.
func (o *VerificationCreate) GetVerifyTypeOk() (*VerifyTypeEnum, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.VerifyType, true
}

// SetVerifyType sets field value
func (o *VerificationCreate) SetVerifyType(v VerifyTypeEnum) {
	o.VerifyType = v
}

// GetStatus returns the Status field value if set, zero value otherwise.
func (o *VerificationCreate) GetStatus() StatusBd7Enum {
	if o == nil || o.Status == nil {
		var ret StatusBd7Enum
		return ret
	}
	return *o.Status
}

// GetStatusOk returns a tuple with the Status field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *VerificationCreate) GetStatusOk() (*StatusBd7Enum, bool) {
	if o == nil || o.Status == nil {
		return nil, false
	}
	return o.Status, true
}

// HasStatus returns a boolean if a field has been set.
func (o *VerificationCreate) HasStatus() bool {
	if o != nil && o.Status != nil {
		return true
	}

	return false
}

// SetStatus gets a reference to the given StatusBd7Enum and assigns it to the Status field.
func (o *VerificationCreate) SetStatus(v StatusBd7Enum) {
	o.Status = &v
}

// GetResult returns the Result field value if set, zero value otherwise.
func (o *VerificationCreate) GetResult() OneOfResultEnumBlankEnum {
	if o == nil || o.Result == nil {
		var ret OneOfResultEnumBlankEnum
		return ret
	}
	return *o.Result
}

// GetResultOk returns a tuple with the Result field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *VerificationCreate) GetResultOk() (*OneOfResultEnumBlankEnum, bool) {
	if o == nil || o.Result == nil {
		return nil, false
	}
	return o.Result, true
}

// HasResult returns a boolean if a field has been set.
func (o *VerificationCreate) HasResult() bool {
	if o != nil && o.Result != nil {
		return true
	}

	return false
}

// SetResult gets a reference to the given OneOfResultEnumBlankEnum and assigns it to the Result field.
func (o *VerificationCreate) SetResult(v OneOfResultEnumBlankEnum) {
	o.Result = &v
}

// GetCreated returns the Created field value
func (o *VerificationCreate) GetCreated() time.Time {
	if o == nil {
		var ret time.Time
		return ret
	}

	return o.Created
}

// GetCreatedOk returns a tuple with the Created field value
// and a boolean to check if the value has been set.
func (o *VerificationCreate) GetCreatedOk() (*time.Time, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Created, true
}

// SetCreated sets field value
func (o *VerificationCreate) SetCreated(v time.Time) {
	o.Created = v
}

// GetUpdated returns the Updated field value
func (o *VerificationCreate) GetUpdated() time.Time {
	if o == nil {
		var ret time.Time
		return ret
	}

	return o.Updated
}

// GetUpdatedOk returns a tuple with the Updated field value
// and a boolean to check if the value has been set.
func (o *VerificationCreate) GetUpdatedOk() (*time.Time, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Updated, true
}

// SetUpdated sets field value
func (o *VerificationCreate) SetUpdated(v time.Time) {
	o.Updated = v
}

func (o VerificationCreate) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["uuid"] = o.Uuid
	}
	if true {
		toSerialize["verify_type"] = o.VerifyType
	}
	if o.Status != nil {
		toSerialize["status"] = o.Status
	}
	if o.Result != nil {
		toSerialize["result"] = o.Result
	}
	if true {
		toSerialize["created"] = o.Created
	}
	if true {
		toSerialize["updated"] = o.Updated
	}
	return json.Marshal(toSerialize)
}

type NullableVerificationCreate struct {
	value *VerificationCreate
	isSet bool
}

func (v NullableVerificationCreate) Get() *VerificationCreate {
	return v.value
}

func (v *NullableVerificationCreate) Set(val *VerificationCreate) {
	v.value = val
	v.isSet = true
}

func (v NullableVerificationCreate) IsSet() bool {
	return v.isSet
}

func (v *NullableVerificationCreate) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableVerificationCreate(val *VerificationCreate) *NullableVerificationCreate {
	return &NullableVerificationCreate{value: val, isSet: true}
}

func (v NullableVerificationCreate) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableVerificationCreate) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


