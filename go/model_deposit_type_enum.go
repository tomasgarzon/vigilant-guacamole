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

// DepositTypeEnum the model 'DepositTypeEnum'
type DepositTypeEnum string

// List of DepositTypeEnum
const (
	CONTRIBUTION DepositTypeEnum = "CONTRIBUTION"
	TRANSFER DepositTypeEnum = "TRANSFER"
)

var allowedDepositTypeEnumEnumValues = []DepositTypeEnum{
	"CONTRIBUTION",
	"TRANSFER",
}

func (v *DepositTypeEnum) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := DepositTypeEnum(value)
	for _, existing := range allowedDepositTypeEnumEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid DepositTypeEnum", value)
}

// NewDepositTypeEnumFromValue returns a pointer to a valid DepositTypeEnum
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewDepositTypeEnumFromValue(v string) (*DepositTypeEnum, error) {
	ev := DepositTypeEnum(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for DepositTypeEnum: valid values are %v", v, allowedDepositTypeEnumEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v DepositTypeEnum) IsValid() bool {
	for _, existing := range allowedDepositTypeEnumEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to DepositTypeEnum value
func (v DepositTypeEnum) Ptr() *DepositTypeEnum {
	return &v
}

type NullableDepositTypeEnum struct {
	value *DepositTypeEnum
	isSet bool
}

func (v NullableDepositTypeEnum) Get() *DepositTypeEnum {
	return v.value
}

func (v *NullableDepositTypeEnum) Set(val *DepositTypeEnum) {
	v.value = val
	v.isSet = true
}

func (v NullableDepositTypeEnum) IsSet() bool {
	return v.isSet
}

func (v *NullableDepositTypeEnum) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDepositTypeEnum(val *DepositTypeEnum) *NullableDepositTypeEnum {
	return &NullableDepositTypeEnum{value: val, isSet: true}
}

func (v NullableDepositTypeEnum) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDepositTypeEnum) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
