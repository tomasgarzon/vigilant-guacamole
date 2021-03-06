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

// ClientRanking struct for ClientRanking
type ClientRanking struct {
	TopPerforming []ClientEmbedRanking `json:"top_performing"`
	BottomPerforming []ClientEmbedRanking `json:"bottom_performing"`
}

// NewClientRanking instantiates a new ClientRanking object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewClientRanking(topPerforming []ClientEmbedRanking, bottomPerforming []ClientEmbedRanking) *ClientRanking {
	this := ClientRanking{}
	this.TopPerforming = topPerforming
	this.BottomPerforming = bottomPerforming
	return &this
}

// NewClientRankingWithDefaults instantiates a new ClientRanking object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewClientRankingWithDefaults() *ClientRanking {
	this := ClientRanking{}
	return &this
}

// GetTopPerforming returns the TopPerforming field value
func (o *ClientRanking) GetTopPerforming() []ClientEmbedRanking {
	if o == nil {
		var ret []ClientEmbedRanking
		return ret
	}

	return o.TopPerforming
}

// GetTopPerformingOk returns a tuple with the TopPerforming field value
// and a boolean to check if the value has been set.
func (o *ClientRanking) GetTopPerformingOk() (*[]ClientEmbedRanking, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.TopPerforming, true
}

// SetTopPerforming sets field value
func (o *ClientRanking) SetTopPerforming(v []ClientEmbedRanking) {
	o.TopPerforming = v
}

// GetBottomPerforming returns the BottomPerforming field value
func (o *ClientRanking) GetBottomPerforming() []ClientEmbedRanking {
	if o == nil {
		var ret []ClientEmbedRanking
		return ret
	}

	return o.BottomPerforming
}

// GetBottomPerformingOk returns a tuple with the BottomPerforming field value
// and a boolean to check if the value has been set.
func (o *ClientRanking) GetBottomPerformingOk() (*[]ClientEmbedRanking, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.BottomPerforming, true
}

// SetBottomPerforming sets field value
func (o *ClientRanking) SetBottomPerforming(v []ClientEmbedRanking) {
	o.BottomPerforming = v
}

func (o ClientRanking) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["top_performing"] = o.TopPerforming
	}
	if true {
		toSerialize["bottom_performing"] = o.BottomPerforming
	}
	return json.Marshal(toSerialize)
}

type NullableClientRanking struct {
	value *ClientRanking
	isSet bool
}

func (v NullableClientRanking) Get() *ClientRanking {
	return v.value
}

func (v *NullableClientRanking) Set(val *ClientRanking) {
	v.value = val
	v.isSet = true
}

func (v NullableClientRanking) IsSet() bool {
	return v.isSet
}

func (v *NullableClientRanking) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableClientRanking(val *ClientRanking) *NullableClientRanking {
	return &NullableClientRanking{value: val, isSet: true}
}

func (v NullableClientRanking) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableClientRanking) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


