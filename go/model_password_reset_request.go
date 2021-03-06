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

// PasswordResetRequest struct for PasswordResetRequest
type PasswordResetRequest struct {
	Email string `json:"email"`
}

// NewPasswordResetRequest instantiates a new PasswordResetRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPasswordResetRequest(email string) *PasswordResetRequest {
	this := PasswordResetRequest{}
	this.Email = email
	return &this
}

// NewPasswordResetRequestWithDefaults instantiates a new PasswordResetRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPasswordResetRequestWithDefaults() *PasswordResetRequest {
	this := PasswordResetRequest{}
	return &this
}

// GetEmail returns the Email field value
func (o *PasswordResetRequest) GetEmail() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Email
}

// GetEmailOk returns a tuple with the Email field value
// and a boolean to check if the value has been set.
func (o *PasswordResetRequest) GetEmailOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Email, true
}

// SetEmail sets field value
func (o *PasswordResetRequest) SetEmail(v string) {
	o.Email = v
}

func (o PasswordResetRequest) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["email"] = o.Email
	}
	return json.Marshal(toSerialize)
}

type NullablePasswordResetRequest struct {
	value *PasswordResetRequest
	isSet bool
}

func (v NullablePasswordResetRequest) Get() *PasswordResetRequest {
	return v.value
}

func (v *NullablePasswordResetRequest) Set(val *PasswordResetRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePasswordResetRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePasswordResetRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePasswordResetRequest(val *PasswordResetRequest) *NullablePasswordResetRequest {
	return &NullablePasswordResetRequest{value: val, isSet: true}
}

func (v NullablePasswordResetRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePasswordResetRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


