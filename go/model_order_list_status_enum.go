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

// OrderListStatusEnum the model 'OrderListStatusEnum'
type OrderListStatusEnum string

// List of OrderListStatusEnum
const (
	PENDING OrderListStatusEnum = "PENDING"
	WAITING_FOR_PRICE OrderListStatusEnum = "WAITING_FOR_PRICE"
	PROCESSING OrderListStatusEnum = "PROCESSING"
	QUOTED OrderListStatusEnum = "QUOTED"
	COMPLETED OrderListStatusEnum = "COMPLETED"
	VERIFIED OrderListStatusEnum = "VERIFIED"
	ERROR OrderListStatusEnum = "ERROR"
	CANCELLED OrderListStatusEnum = "CANCELLED"
)

var allowedOrderListStatusEnumEnumValues = []OrderListStatusEnum{
	"PENDING",
	"WAITING_FOR_PRICE",
	"PROCESSING",
	"QUOTED",
	"COMPLETED",
	"VERIFIED",
	"ERROR",
	"CANCELLED",
}

func (v *OrderListStatusEnum) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := OrderListStatusEnum(value)
	for _, existing := range allowedOrderListStatusEnumEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid OrderListStatusEnum", value)
}

// NewOrderListStatusEnumFromValue returns a pointer to a valid OrderListStatusEnum
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewOrderListStatusEnumFromValue(v string) (*OrderListStatusEnum, error) {
	ev := OrderListStatusEnum(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for OrderListStatusEnum: valid values are %v", v, allowedOrderListStatusEnumEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v OrderListStatusEnum) IsValid() bool {
	for _, existing := range allowedOrderListStatusEnumEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to OrderListStatusEnum value
func (v OrderListStatusEnum) Ptr() *OrderListStatusEnum {
	return &v
}

type NullableOrderListStatusEnum struct {
	value *OrderListStatusEnum
	isSet bool
}

func (v NullableOrderListStatusEnum) Get() *OrderListStatusEnum {
	return v.value
}

func (v *NullableOrderListStatusEnum) Set(val *OrderListStatusEnum) {
	v.value = val
	v.isSet = true
}

func (v NullableOrderListStatusEnum) IsSet() bool {
	return v.isSet
}

func (v *NullableOrderListStatusEnum) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableOrderListStatusEnum(val *OrderListStatusEnum) *NullableOrderListStatusEnum {
	return &NullableOrderListStatusEnum{value: val, isSet: true}
}

func (v NullableOrderListStatusEnum) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableOrderListStatusEnum) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

