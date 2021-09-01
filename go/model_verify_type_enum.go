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

// VerifyTypeEnum the model 'VerifyTypeEnum'
type VerifyTypeEnum string

// List of VerifyTypeEnum
const (
	IDENTITY VerifyTypeEnum = "IDENTITY"
	BANKING VerifyTypeEnum = "BANKING"
)

var allowedVerifyTypeEnumEnumValues = []VerifyTypeEnum{
	"IDENTITY",
	"BANKING",
}

func (v *VerifyTypeEnum) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := VerifyTypeEnum(value)
	for _, existing := range allowedVerifyTypeEnumEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid VerifyTypeEnum", value)
}

// NewVerifyTypeEnumFromValue returns a pointer to a valid VerifyTypeEnum
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewVerifyTypeEnumFromValue(v string) (*VerifyTypeEnum, error) {
	ev := VerifyTypeEnum(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for VerifyTypeEnum: valid values are %v", v, allowedVerifyTypeEnumEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v VerifyTypeEnum) IsValid() bool {
	for _, existing := range allowedVerifyTypeEnumEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to VerifyTypeEnum value
func (v VerifyTypeEnum) Ptr() *VerifyTypeEnum {
	return &v
}

type NullableVerifyTypeEnum struct {
	value *VerifyTypeEnum
	isSet bool
}

func (v NullableVerifyTypeEnum) Get() *VerifyTypeEnum {
	return v.value
}

func (v *NullableVerifyTypeEnum) Set(val *VerifyTypeEnum) {
	v.value = val
	v.isSet = true
}

func (v NullableVerifyTypeEnum) IsSet() bool {
	return v.isSet
}

func (v *NullableVerifyTypeEnum) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableVerifyTypeEnum(val *VerifyTypeEnum) *NullableVerifyTypeEnum {
	return &NullableVerifyTypeEnum{value: val, isSet: true}
}

func (v NullableVerifyTypeEnum) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableVerifyTypeEnum) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

