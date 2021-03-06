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

// CategoryStatusEnum the model 'CategoryStatusEnum'
type CategoryStatusEnum string

// List of CategoryStatusEnum
const (
	ACTIVE CategoryStatusEnum = "ACTIVE"
	INACTIVE CategoryStatusEnum = "INACTIVE"
)

var allowedCategoryStatusEnumEnumValues = []CategoryStatusEnum{
	"ACTIVE",
	"INACTIVE",
}

func (v *CategoryStatusEnum) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := CategoryStatusEnum(value)
	for _, existing := range allowedCategoryStatusEnumEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid CategoryStatusEnum", value)
}

// NewCategoryStatusEnumFromValue returns a pointer to a valid CategoryStatusEnum
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewCategoryStatusEnumFromValue(v string) (*CategoryStatusEnum, error) {
	ev := CategoryStatusEnum(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for CategoryStatusEnum: valid values are %v", v, allowedCategoryStatusEnumEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v CategoryStatusEnum) IsValid() bool {
	for _, existing := range allowedCategoryStatusEnumEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to CategoryStatusEnum value
func (v CategoryStatusEnum) Ptr() *CategoryStatusEnum {
	return &v
}

type NullableCategoryStatusEnum struct {
	value *CategoryStatusEnum
	isSet bool
}

func (v NullableCategoryStatusEnum) Get() *CategoryStatusEnum {
	return v.value
}

func (v *NullableCategoryStatusEnum) Set(val *CategoryStatusEnum) {
	v.value = val
	v.isSet = true
}

func (v NullableCategoryStatusEnum) IsSet() bool {
	return v.isSet
}

func (v *NullableCategoryStatusEnum) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCategoryStatusEnum(val *CategoryStatusEnum) *NullableCategoryStatusEnum {
	return &NullableCategoryStatusEnum{value: val, isSet: true}
}

func (v NullableCategoryStatusEnum) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCategoryStatusEnum) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

