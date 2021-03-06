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

// DocumentTypeEnum the model 'DocumentTypeEnum'
type DocumentTypeEnum string

// List of DocumentTypeEnum
const (
	PASSPORT DocumentTypeEnum = "passport"
	DRIVING_LICENCE DocumentTypeEnum = "driving_licence"
	NATIONAL_IDENTITY_CARD DocumentTypeEnum = "national_identity_card"
	UTILITY_BILL DocumentTypeEnum = "utility_bill"
	LOCAL_TAX_BILL DocumentTypeEnum = "local_tax_bill"
	BANK_STATEMENT DocumentTypeEnum = "bank_statement"
	LEASE_AGREEMENT DocumentTypeEnum = "lease_agreement"
	RENT_RECEIPT DocumentTypeEnum = "rent_receipt"
	LETTER DocumentTypeEnum = "letter"
	CERTIFICATE_MARRIAGE DocumentTypeEnum = "certificate_marriage"
	DECREE_ABSOLUTE DocumentTypeEnum = "decree_absolute"
	FINAL_ORDER DocumentTypeEnum = "final_order"
	CLIENT_PHOTO DocumentTypeEnum = "client_photo"
)

var allowedDocumentTypeEnumEnumValues = []DocumentTypeEnum{
	"passport",
	"driving_licence",
	"national_identity_card",
	"utility_bill",
	"local_tax_bill",
	"bank_statement",
	"lease_agreement",
	"rent_receipt",
	"letter",
	"certificate_marriage",
	"decree_absolute",
	"final_order",
	"client_photo",
}

func (v *DocumentTypeEnum) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := DocumentTypeEnum(value)
	for _, existing := range allowedDocumentTypeEnumEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid DocumentTypeEnum", value)
}

// NewDocumentTypeEnumFromValue returns a pointer to a valid DocumentTypeEnum
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewDocumentTypeEnumFromValue(v string) (*DocumentTypeEnum, error) {
	ev := DocumentTypeEnum(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for DocumentTypeEnum: valid values are %v", v, allowedDocumentTypeEnumEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v DocumentTypeEnum) IsValid() bool {
	for _, existing := range allowedDocumentTypeEnumEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to DocumentTypeEnum value
func (v DocumentTypeEnum) Ptr() *DocumentTypeEnum {
	return &v
}

type NullableDocumentTypeEnum struct {
	value *DocumentTypeEnum
	isSet bool
}

func (v NullableDocumentTypeEnum) Get() *DocumentTypeEnum {
	return v.value
}

func (v *NullableDocumentTypeEnum) Set(val *DocumentTypeEnum) {
	v.value = val
	v.isSet = true
}

func (v NullableDocumentTypeEnum) IsSet() bool {
	return v.isSet
}

func (v *NullableDocumentTypeEnum) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDocumentTypeEnum(val *DocumentTypeEnum) *NullableDocumentTypeEnum {
	return &NullableDocumentTypeEnum{value: val, isSet: true}
}

func (v NullableDocumentTypeEnum) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDocumentTypeEnum) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

