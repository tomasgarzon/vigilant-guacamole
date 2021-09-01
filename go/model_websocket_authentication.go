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

// WebsocketAuthentication struct for WebsocketAuthentication
type WebsocketAuthentication struct {
	Ticket string `json:"ticket"`
}

// NewWebsocketAuthentication instantiates a new WebsocketAuthentication object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewWebsocketAuthentication(ticket string) *WebsocketAuthentication {
	this := WebsocketAuthentication{}
	this.Ticket = ticket
	return &this
}

// NewWebsocketAuthenticationWithDefaults instantiates a new WebsocketAuthentication object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewWebsocketAuthenticationWithDefaults() *WebsocketAuthentication {
	this := WebsocketAuthentication{}
	return &this
}

// GetTicket returns the Ticket field value
func (o *WebsocketAuthentication) GetTicket() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Ticket
}

// GetTicketOk returns a tuple with the Ticket field value
// and a boolean to check if the value has been set.
func (o *WebsocketAuthentication) GetTicketOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Ticket, true
}

// SetTicket sets field value
func (o *WebsocketAuthentication) SetTicket(v string) {
	o.Ticket = v
}

func (o WebsocketAuthentication) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["ticket"] = o.Ticket
	}
	return json.Marshal(toSerialize)
}

type NullableWebsocketAuthentication struct {
	value *WebsocketAuthentication
	isSet bool
}

func (v NullableWebsocketAuthentication) Get() *WebsocketAuthentication {
	return v.value
}

func (v *NullableWebsocketAuthentication) Set(val *WebsocketAuthentication) {
	v.value = val
	v.isSet = true
}

func (v NullableWebsocketAuthentication) IsSet() bool {
	return v.isSet
}

func (v *NullableWebsocketAuthentication) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableWebsocketAuthentication(val *WebsocketAuthentication) *NullableWebsocketAuthentication {
	return &NullableWebsocketAuthentication{value: val, isSet: true}
}

func (v NullableWebsocketAuthentication) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableWebsocketAuthentication) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


