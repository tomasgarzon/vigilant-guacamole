/*
Nucoro API

No description

API version: 4.175.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
	"time"
)

// VerificationList A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
type VerificationList struct {
	Uuid string `json:"uuid"`
	VerifyType VerifyTypeEnum `json:"verify_type"`
	Status StatusBd7Enum `json:"status"`
	Result ResultEnum `json:"result"`
	Created time.Time `json:"created"`
	Updated time.Time `json:"updated"`
	VerificationDocuments []string `json:"verification_documents"`
}

// NewVerificationList instantiates a new VerificationList object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewVerificationList(uuid string, verifyType VerifyTypeEnum, status StatusBd7Enum, result ResultEnum, created time.Time, updated time.Time, verificationDocuments []string) *VerificationList {
	this := VerificationList{}
	this.Uuid = uuid
	this.VerifyType = verifyType
	this.Status = status
	this.Result = result
	this.Created = created
	this.Updated = updated
	this.VerificationDocuments = verificationDocuments
	return &this
}

// NewVerificationListWithDefaults instantiates a new VerificationList object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewVerificationListWithDefaults() *VerificationList {
	this := VerificationList{}
	return &this
}

// GetUuid returns the Uuid field value
func (o *VerificationList) GetUuid() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Uuid
}

// GetUuidOk returns a tuple with the Uuid field value
// and a boolean to check if the value has been set.
func (o *VerificationList) GetUuidOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Uuid, true
}

// SetUuid sets field value
func (o *VerificationList) SetUuid(v string) {
	o.Uuid = v
}

// GetVerifyType returns the VerifyType field value
func (o *VerificationList) GetVerifyType() VerifyTypeEnum {
	if o == nil {
		var ret VerifyTypeEnum
		return ret
	}

	return o.VerifyType
}

// GetVerifyTypeOk returns a tuple with the VerifyType field value
// and a boolean to check if the value has been set.
func (o *VerificationList) GetVerifyTypeOk() (*VerifyTypeEnum, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.VerifyType, true
}

// SetVerifyType sets field value
func (o *VerificationList) SetVerifyType(v VerifyTypeEnum) {
	o.VerifyType = v
}

// GetStatus returns the Status field value
func (o *VerificationList) GetStatus() StatusBd7Enum {
	if o == nil {
		var ret StatusBd7Enum
		return ret
	}

	return o.Status
}

// GetStatusOk returns a tuple with the Status field value
// and a boolean to check if the value has been set.
func (o *VerificationList) GetStatusOk() (*StatusBd7Enum, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Status, true
}

// SetStatus sets field value
func (o *VerificationList) SetStatus(v StatusBd7Enum) {
	o.Status = v
}

// GetResult returns the Result field value
func (o *VerificationList) GetResult() ResultEnum {
	if o == nil {
		var ret ResultEnum
		return ret
	}

	return o.Result
}

// GetResultOk returns a tuple with the Result field value
// and a boolean to check if the value has been set.
func (o *VerificationList) GetResultOk() (*ResultEnum, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Result, true
}

// SetResult sets field value
func (o *VerificationList) SetResult(v ResultEnum) {
	o.Result = v
}

// GetCreated returns the Created field value
func (o *VerificationList) GetCreated() time.Time {
	if o == nil {
		var ret time.Time
		return ret
	}

	return o.Created
}

// GetCreatedOk returns a tuple with the Created field value
// and a boolean to check if the value has been set.
func (o *VerificationList) GetCreatedOk() (*time.Time, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Created, true
}

// SetCreated sets field value
func (o *VerificationList) SetCreated(v time.Time) {
	o.Created = v
}

// GetUpdated returns the Updated field value
func (o *VerificationList) GetUpdated() time.Time {
	if o == nil {
		var ret time.Time
		return ret
	}

	return o.Updated
}

// GetUpdatedOk returns a tuple with the Updated field value
// and a boolean to check if the value has been set.
func (o *VerificationList) GetUpdatedOk() (*time.Time, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Updated, true
}

// SetUpdated sets field value
func (o *VerificationList) SetUpdated(v time.Time) {
	o.Updated = v
}

// GetVerificationDocuments returns the VerificationDocuments field value
func (o *VerificationList) GetVerificationDocuments() []string {
	if o == nil {
		var ret []string
		return ret
	}

	return o.VerificationDocuments
}

// GetVerificationDocumentsOk returns a tuple with the VerificationDocuments field value
// and a boolean to check if the value has been set.
func (o *VerificationList) GetVerificationDocumentsOk() (*[]string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.VerificationDocuments, true
}

// SetVerificationDocuments sets field value
func (o *VerificationList) SetVerificationDocuments(v []string) {
	o.VerificationDocuments = v
}

func (o VerificationList) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["uuid"] = o.Uuid
	}
	if true {
		toSerialize["verify_type"] = o.VerifyType
	}
	if true {
		toSerialize["status"] = o.Status
	}
	if true {
		toSerialize["result"] = o.Result
	}
	if true {
		toSerialize["created"] = o.Created
	}
	if true {
		toSerialize["updated"] = o.Updated
	}
	if true {
		toSerialize["verification_documents"] = o.VerificationDocuments
	}
	return json.Marshal(toSerialize)
}

type NullableVerificationList struct {
	value *VerificationList
	isSet bool
}

func (v NullableVerificationList) Get() *VerificationList {
	return v.value
}

func (v *NullableVerificationList) Set(val *VerificationList) {
	v.value = val
	v.isSet = true
}

func (v NullableVerificationList) IsSet() bool {
	return v.isSet
}

func (v *NullableVerificationList) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableVerificationList(val *VerificationList) *NullableVerificationList {
	return &NullableVerificationList{value: val, isSet: true}
}

func (v NullableVerificationList) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableVerificationList) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


