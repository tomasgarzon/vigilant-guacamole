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

// DurationEnum the model 'DurationEnum'
type DurationEnum string

// List of DurationEnum
const (
	GOOD_TILL_CANCEL DurationEnum = "GOOD_TILL_CANCEL"
	DAY_ORDER DurationEnum = "DAY_ORDER"
)

var allowedDurationEnumEnumValues = []DurationEnum{
	"GOOD_TILL_CANCEL",
	"DAY_ORDER",
}

func (v *DurationEnum) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := DurationEnum(value)
	for _, existing := range allowedDurationEnumEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid DurationEnum", value)
}

// NewDurationEnumFromValue returns a pointer to a valid DurationEnum
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewDurationEnumFromValue(v string) (*DurationEnum, error) {
	ev := DurationEnum(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for DurationEnum: valid values are %v", v, allowedDurationEnumEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v DurationEnum) IsValid() bool {
	for _, existing := range allowedDurationEnumEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to DurationEnum value
func (v DurationEnum) Ptr() *DurationEnum {
	return &v
}

type NullableDurationEnum struct {
	value *DurationEnum
	isSet bool
}

func (v NullableDurationEnum) Get() *DurationEnum {
	return v.value
}

func (v *NullableDurationEnum) Set(val *DurationEnum) {
	v.value = val
	v.isSet = true
}

func (v NullableDurationEnum) IsSet() bool {
	return v.isSet
}

func (v *NullableDurationEnum) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDurationEnum(val *DurationEnum) *NullableDurationEnum {
	return &NullableDurationEnum{value: val, isSet: true}
}

func (v NullableDurationEnum) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDurationEnum) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

