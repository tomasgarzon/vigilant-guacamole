/*
Nucoro API

No description

API version: 4.175.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
	"fmt"
)

// StatusB65Enum the model 'StatusB65Enum'
type StatusB65Enum string

// List of StatusB65Enum
const (
	ONBOARDING StatusB65Enum = "ONBOARDING"
	PENDING StatusB65Enum = "PENDING"
	ACTIVE StatusB65Enum = "ACTIVE"
	INACTIVE StatusB65Enum = "INACTIVE"
	CUSTODIAN_PENDING StatusB65Enum = "CUSTODIAN_PENDING"
	KYC_PENDING StatusB65Enum = "KYC_PENDING"
)

var allowedStatusB65EnumEnumValues = []StatusB65Enum{
	"ONBOARDING",
	"PENDING",
	"ACTIVE",
	"INACTIVE",
	"CUSTODIAN_PENDING",
	"KYC_PENDING",
}

func (v *StatusB65Enum) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := StatusB65Enum(value)
	for _, existing := range allowedStatusB65EnumEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid StatusB65Enum", value)
}

// NewStatusB65EnumFromValue returns a pointer to a valid StatusB65Enum
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewStatusB65EnumFromValue(v string) (*StatusB65Enum, error) {
	ev := StatusB65Enum(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for StatusB65Enum: valid values are %v", v, allowedStatusB65EnumEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v StatusB65Enum) IsValid() bool {
	for _, existing := range allowedStatusB65EnumEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to StatusB65Enum value
func (v StatusB65Enum) Ptr() *StatusB65Enum {
	return &v
}

type NullableStatusB65Enum struct {
	value *StatusB65Enum
	isSet bool
}

func (v NullableStatusB65Enum) Get() *StatusB65Enum {
	return v.value
}

func (v *NullableStatusB65Enum) Set(val *StatusB65Enum) {
	v.value = val
	v.isSet = true
}

func (v NullableStatusB65Enum) IsSet() bool {
	return v.isSet
}

func (v *NullableStatusB65Enum) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStatusB65Enum(val *StatusB65Enum) *NullableStatusB65Enum {
	return &NullableStatusB65Enum{value: val, isSet: true}
}

func (v NullableStatusB65Enum) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStatusB65Enum) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

