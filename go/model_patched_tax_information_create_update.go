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

// PatchedTaxInformationCreateUpdate A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
type PatchedTaxInformationCreateUpdate struct {
	Uuid *string `json:"uuid,omitempty"`
	Country *string `json:"country,omitempty"`
	DocumentNumber *string `json:"document_number,omitempty"`
	DocumentType *string `json:"document_type,omitempty"`
}

// NewPatchedTaxInformationCreateUpdate instantiates a new PatchedTaxInformationCreateUpdate object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPatchedTaxInformationCreateUpdate() *PatchedTaxInformationCreateUpdate {
	this := PatchedTaxInformationCreateUpdate{}
	return &this
}

// NewPatchedTaxInformationCreateUpdateWithDefaults instantiates a new PatchedTaxInformationCreateUpdate object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPatchedTaxInformationCreateUpdateWithDefaults() *PatchedTaxInformationCreateUpdate {
	this := PatchedTaxInformationCreateUpdate{}
	return &this
}

// GetUuid returns the Uuid field value if set, zero value otherwise.
func (o *PatchedTaxInformationCreateUpdate) GetUuid() string {
	if o == nil || o.Uuid == nil {
		var ret string
		return ret
	}
	return *o.Uuid
}

// GetUuidOk returns a tuple with the Uuid field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PatchedTaxInformationCreateUpdate) GetUuidOk() (*string, bool) {
	if o == nil || o.Uuid == nil {
		return nil, false
	}
	return o.Uuid, true
}

// HasUuid returns a boolean if a field has been set.
func (o *PatchedTaxInformationCreateUpdate) HasUuid() bool {
	if o != nil && o.Uuid != nil {
		return true
	}

	return false
}

// SetUuid gets a reference to the given string and assigns it to the Uuid field.
func (o *PatchedTaxInformationCreateUpdate) SetUuid(v string) {
	o.Uuid = &v
}

// GetCountry returns the Country field value if set, zero value otherwise.
func (o *PatchedTaxInformationCreateUpdate) GetCountry() string {
	if o == nil || o.Country == nil {
		var ret string
		return ret
	}
	return *o.Country
}

// GetCountryOk returns a tuple with the Country field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PatchedTaxInformationCreateUpdate) GetCountryOk() (*string, bool) {
	if o == nil || o.Country == nil {
		return nil, false
	}
	return o.Country, true
}

// HasCountry returns a boolean if a field has been set.
func (o *PatchedTaxInformationCreateUpdate) HasCountry() bool {
	if o != nil && o.Country != nil {
		return true
	}

	return false
}

// SetCountry gets a reference to the given string and assigns it to the Country field.
func (o *PatchedTaxInformationCreateUpdate) SetCountry(v string) {
	o.Country = &v
}

// GetDocumentNumber returns the DocumentNumber field value if set, zero value otherwise.
func (o *PatchedTaxInformationCreateUpdate) GetDocumentNumber() string {
	if o == nil || o.DocumentNumber == nil {
		var ret string
		return ret
	}
	return *o.DocumentNumber
}

// GetDocumentNumberOk returns a tuple with the DocumentNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PatchedTaxInformationCreateUpdate) GetDocumentNumberOk() (*string, bool) {
	if o == nil || o.DocumentNumber == nil {
		return nil, false
	}
	return o.DocumentNumber, true
}

// HasDocumentNumber returns a boolean if a field has been set.
func (o *PatchedTaxInformationCreateUpdate) HasDocumentNumber() bool {
	if o != nil && o.DocumentNumber != nil {
		return true
	}

	return false
}

// SetDocumentNumber gets a reference to the given string and assigns it to the DocumentNumber field.
func (o *PatchedTaxInformationCreateUpdate) SetDocumentNumber(v string) {
	o.DocumentNumber = &v
}

// GetDocumentType returns the DocumentType field value if set, zero value otherwise.
func (o *PatchedTaxInformationCreateUpdate) GetDocumentType() string {
	if o == nil || o.DocumentType == nil {
		var ret string
		return ret
	}
	return *o.DocumentType
}

// GetDocumentTypeOk returns a tuple with the DocumentType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PatchedTaxInformationCreateUpdate) GetDocumentTypeOk() (*string, bool) {
	if o == nil || o.DocumentType == nil {
		return nil, false
	}
	return o.DocumentType, true
}

// HasDocumentType returns a boolean if a field has been set.
func (o *PatchedTaxInformationCreateUpdate) HasDocumentType() bool {
	if o != nil && o.DocumentType != nil {
		return true
	}

	return false
}

// SetDocumentType gets a reference to the given string and assigns it to the DocumentType field.
func (o *PatchedTaxInformationCreateUpdate) SetDocumentType(v string) {
	o.DocumentType = &v
}

func (o PatchedTaxInformationCreateUpdate) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Uuid != nil {
		toSerialize["uuid"] = o.Uuid
	}
	if o.Country != nil {
		toSerialize["country"] = o.Country
	}
	if o.DocumentNumber != nil {
		toSerialize["document_number"] = o.DocumentNumber
	}
	if o.DocumentType != nil {
		toSerialize["document_type"] = o.DocumentType
	}
	return json.Marshal(toSerialize)
}

type NullablePatchedTaxInformationCreateUpdate struct {
	value *PatchedTaxInformationCreateUpdate
	isSet bool
}

func (v NullablePatchedTaxInformationCreateUpdate) Get() *PatchedTaxInformationCreateUpdate {
	return v.value
}

func (v *NullablePatchedTaxInformationCreateUpdate) Set(val *PatchedTaxInformationCreateUpdate) {
	v.value = val
	v.isSet = true
}

func (v NullablePatchedTaxInformationCreateUpdate) IsSet() bool {
	return v.isSet
}

func (v *NullablePatchedTaxInformationCreateUpdate) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePatchedTaxInformationCreateUpdate(val *PatchedTaxInformationCreateUpdate) *NullablePatchedTaxInformationCreateUpdate {
	return &NullablePatchedTaxInformationCreateUpdate{value: val, isSet: true}
}

func (v NullablePatchedTaxInformationCreateUpdate) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePatchedTaxInformationCreateUpdate) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


