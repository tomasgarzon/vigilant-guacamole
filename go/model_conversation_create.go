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

// ConversationCreate struct for ConversationCreate
type ConversationCreate struct {
	Uuid string `json:"uuid"`
	Portal int32 `json:"portal"`
	Created time.Time `json:"created"`
	Subject string `json:"subject"`
	Messages NullableMessage `json:"messages,omitempty"`
}

// NewConversationCreate instantiates a new ConversationCreate object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewConversationCreate(uuid string, portal int32, created time.Time, subject string) *ConversationCreate {
	this := ConversationCreate{}
	this.Uuid = uuid
	this.Portal = portal
	this.Created = created
	this.Subject = subject
	return &this
}

// NewConversationCreateWithDefaults instantiates a new ConversationCreate object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewConversationCreateWithDefaults() *ConversationCreate {
	this := ConversationCreate{}
	return &this
}

// GetUuid returns the Uuid field value
func (o *ConversationCreate) GetUuid() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Uuid
}

// GetUuidOk returns a tuple with the Uuid field value
// and a boolean to check if the value has been set.
func (o *ConversationCreate) GetUuidOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Uuid, true
}

// SetUuid sets field value
func (o *ConversationCreate) SetUuid(v string) {
	o.Uuid = v
}

// GetPortal returns the Portal field value
func (o *ConversationCreate) GetPortal() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Portal
}

// GetPortalOk returns a tuple with the Portal field value
// and a boolean to check if the value has been set.
func (o *ConversationCreate) GetPortalOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Portal, true
}

// SetPortal sets field value
func (o *ConversationCreate) SetPortal(v int32) {
	o.Portal = v
}

// GetCreated returns the Created field value
func (o *ConversationCreate) GetCreated() time.Time {
	if o == nil {
		var ret time.Time
		return ret
	}

	return o.Created
}

// GetCreatedOk returns a tuple with the Created field value
// and a boolean to check if the value has been set.
func (o *ConversationCreate) GetCreatedOk() (*time.Time, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Created, true
}

// SetCreated sets field value
func (o *ConversationCreate) SetCreated(v time.Time) {
	o.Created = v
}

// GetSubject returns the Subject field value
func (o *ConversationCreate) GetSubject() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Subject
}

// GetSubjectOk returns a tuple with the Subject field value
// and a boolean to check if the value has been set.
func (o *ConversationCreate) GetSubjectOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Subject, true
}

// SetSubject sets field value
func (o *ConversationCreate) SetSubject(v string) {
	o.Subject = v
}

// GetMessages returns the Messages field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *ConversationCreate) GetMessages() Message {
	if o == nil || o.Messages.Get() == nil {
		var ret Message
		return ret
	}
	return *o.Messages.Get()
}

// GetMessagesOk returns a tuple with the Messages field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *ConversationCreate) GetMessagesOk() (*Message, bool) {
	if o == nil  {
		return nil, false
	}
	return o.Messages.Get(), o.Messages.IsSet()
}

// HasMessages returns a boolean if a field has been set.
func (o *ConversationCreate) HasMessages() bool {
	if o != nil && o.Messages.IsSet() {
		return true
	}

	return false
}

// SetMessages gets a reference to the given NullableMessage and assigns it to the Messages field.
func (o *ConversationCreate) SetMessages(v Message) {
	o.Messages.Set(&v)
}
// SetMessagesNil sets the value for Messages to be an explicit nil
func (o *ConversationCreate) SetMessagesNil() {
	o.Messages.Set(nil)
}

// UnsetMessages ensures that no value is present for Messages, not even an explicit nil
func (o *ConversationCreate) UnsetMessages() {
	o.Messages.Unset()
}

func (o ConversationCreate) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["uuid"] = o.Uuid
	}
	if true {
		toSerialize["portal"] = o.Portal
	}
	if true {
		toSerialize["created"] = o.Created
	}
	if true {
		toSerialize["subject"] = o.Subject
	}
	if o.Messages.IsSet() {
		toSerialize["messages"] = o.Messages.Get()
	}
	return json.Marshal(toSerialize)
}

type NullableConversationCreate struct {
	value *ConversationCreate
	isSet bool
}

func (v NullableConversationCreate) Get() *ConversationCreate {
	return v.value
}

func (v *NullableConversationCreate) Set(val *ConversationCreate) {
	v.value = val
	v.isSet = true
}

func (v NullableConversationCreate) IsSet() bool {
	return v.isSet
}

func (v *NullableConversationCreate) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableConversationCreate(val *ConversationCreate) *NullableConversationCreate {
	return &NullableConversationCreate{value: val, isSet: true}
}

func (v NullableConversationCreate) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableConversationCreate) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

