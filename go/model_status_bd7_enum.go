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

// StatusBd7Enum the model 'StatusBd7Enum'
type StatusBd7Enum string

// List of StatusBd7Enum
const (
	PENDING StatusBd7Enum = "PENDING"
	PROCESSING StatusBd7Enum = "PROCESSING"
	COMPLETED StatusBd7Enum = "COMPLETED"
	PAUSED StatusBd7Enum = "PAUSED"
	REOPENED StatusBd7Enum = "REOPENED"
	OTHER StatusBd7Enum = "OTHER"
	ERROR StatusBd7Enum = "ERROR"
	CANCELLED StatusBd7Enum = "CANCELLED"
	OUTDATED StatusBd7Enum = "OUTDATED"
)

var allowedStatusBd7EnumEnumValues = []StatusBd7Enum{
	"PENDING",
	"PROCESSING",
	"COMPLETED",
	"PAUSED",
	"REOPENED",
	"OTHER",
	"ERROR",
	"CANCELLED",
	"OUTDATED",
}

func (v *StatusBd7Enum) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := StatusBd7Enum(value)
	for _, existing := range allowedStatusBd7EnumEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid StatusBd7Enum", value)
}

// NewStatusBd7EnumFromValue returns a pointer to a valid StatusBd7Enum
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewStatusBd7EnumFromValue(v string) (*StatusBd7Enum, error) {
	ev := StatusBd7Enum(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for StatusBd7Enum: valid values are %v", v, allowedStatusBd7EnumEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v StatusBd7Enum) IsValid() bool {
	for _, existing := range allowedStatusBd7EnumEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to StatusBd7Enum value
func (v StatusBd7Enum) Ptr() *StatusBd7Enum {
	return &v
}

type NullableStatusBd7Enum struct {
	value *StatusBd7Enum
	isSet bool
}

func (v NullableStatusBd7Enum) Get() *StatusBd7Enum {
	return v.value
}

func (v *NullableStatusBd7Enum) Set(val *StatusBd7Enum) {
	v.value = val
	v.isSet = true
}

func (v NullableStatusBd7Enum) IsSet() bool {
	return v.isSet
}

func (v *NullableStatusBd7Enum) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStatusBd7Enum(val *StatusBd7Enum) *NullableStatusBd7Enum {
	return &NullableStatusBd7Enum{value: val, isSet: true}
}

func (v NullableStatusBd7Enum) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStatusBd7Enum) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

