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

// Unsubscribe struct for Unsubscribe
type Unsubscribe struct {
	Id string `json:"id"`
	Subscription string `json:"subscription"`
}

// NewUnsubscribe instantiates a new Unsubscribe object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUnsubscribe(id string, subscription string) *Unsubscribe {
	this := Unsubscribe{}
	this.Id = id
	this.Subscription = subscription
	return &this
}

// NewUnsubscribeWithDefaults instantiates a new Unsubscribe object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUnsubscribeWithDefaults() *Unsubscribe {
	this := Unsubscribe{}
	return &this
}

// GetId returns the Id field value
func (o *Unsubscribe) GetId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Id
}

// GetIdOk returns a tuple with the Id field value
// and a boolean to check if the value has been set.
func (o *Unsubscribe) GetIdOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Id, true
}

// SetId sets field value
func (o *Unsubscribe) SetId(v string) {
	o.Id = v
}

// GetSubscription returns the Subscription field value
func (o *Unsubscribe) GetSubscription() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Subscription
}

// GetSubscriptionOk returns a tuple with the Subscription field value
// and a boolean to check if the value has been set.
func (o *Unsubscribe) GetSubscriptionOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Subscription, true
}

// SetSubscription sets field value
func (o *Unsubscribe) SetSubscription(v string) {
	o.Subscription = v
}

func (o Unsubscribe) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["id"] = o.Id
	}
	if true {
		toSerialize["subscription"] = o.Subscription
	}
	return json.Marshal(toSerialize)
}

type NullableUnsubscribe struct {
	value *Unsubscribe
	isSet bool
}

func (v NullableUnsubscribe) Get() *Unsubscribe {
	return v.value
}

func (v *NullableUnsubscribe) Set(val *Unsubscribe) {
	v.value = val
	v.isSet = true
}

func (v NullableUnsubscribe) IsSet() bool {
	return v.isSet
}

func (v *NullableUnsubscribe) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUnsubscribe(val *Unsubscribe) *NullableUnsubscribe {
	return &NullableUnsubscribe{value: val, isSet: true}
}

func (v NullableUnsubscribe) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUnsubscribe) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

