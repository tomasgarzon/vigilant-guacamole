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

// ClientEmbedRanking struct for ClientEmbedRanking
type ClientEmbedRanking struct {
	Uuid string `json:"uuid"`
	FullName string `json:"full_name"`
	Balance float64 `json:"balance"`
	Earnings float64 `json:"earnings"`
	Mwrr float64 `json:"mwrr"`
	Twrr float64 `json:"twrr"`
}

// NewClientEmbedRanking instantiates a new ClientEmbedRanking object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewClientEmbedRanking(uuid string, fullName string, balance float64, earnings float64, mwrr float64, twrr float64) *ClientEmbedRanking {
	this := ClientEmbedRanking{}
	this.Uuid = uuid
	this.FullName = fullName
	this.Balance = balance
	this.Earnings = earnings
	this.Mwrr = mwrr
	this.Twrr = twrr
	return &this
}

// NewClientEmbedRankingWithDefaults instantiates a new ClientEmbedRanking object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewClientEmbedRankingWithDefaults() *ClientEmbedRanking {
	this := ClientEmbedRanking{}
	return &this
}

// GetUuid returns the Uuid field value
func (o *ClientEmbedRanking) GetUuid() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Uuid
}

// GetUuidOk returns a tuple with the Uuid field value
// and a boolean to check if the value has been set.
func (o *ClientEmbedRanking) GetUuidOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Uuid, true
}

// SetUuid sets field value
func (o *ClientEmbedRanking) SetUuid(v string) {
	o.Uuid = v
}

// GetFullName returns the FullName field value
func (o *ClientEmbedRanking) GetFullName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.FullName
}

// GetFullNameOk returns a tuple with the FullName field value
// and a boolean to check if the value has been set.
func (o *ClientEmbedRanking) GetFullNameOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.FullName, true
}

// SetFullName sets field value
func (o *ClientEmbedRanking) SetFullName(v string) {
	o.FullName = v
}

// GetBalance returns the Balance field value
func (o *ClientEmbedRanking) GetBalance() float64 {
	if o == nil {
		var ret float64
		return ret
	}

	return o.Balance
}

// GetBalanceOk returns a tuple with the Balance field value
// and a boolean to check if the value has been set.
func (o *ClientEmbedRanking) GetBalanceOk() (*float64, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Balance, true
}

// SetBalance sets field value
func (o *ClientEmbedRanking) SetBalance(v float64) {
	o.Balance = v
}

// GetEarnings returns the Earnings field value
func (o *ClientEmbedRanking) GetEarnings() float64 {
	if o == nil {
		var ret float64
		return ret
	}

	return o.Earnings
}

// GetEarningsOk returns a tuple with the Earnings field value
// and a boolean to check if the value has been set.
func (o *ClientEmbedRanking) GetEarningsOk() (*float64, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Earnings, true
}

// SetEarnings sets field value
func (o *ClientEmbedRanking) SetEarnings(v float64) {
	o.Earnings = v
}

// GetMwrr returns the Mwrr field value
func (o *ClientEmbedRanking) GetMwrr() float64 {
	if o == nil {
		var ret float64
		return ret
	}

	return o.Mwrr
}

// GetMwrrOk returns a tuple with the Mwrr field value
// and a boolean to check if the value has been set.
func (o *ClientEmbedRanking) GetMwrrOk() (*float64, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Mwrr, true
}

// SetMwrr sets field value
func (o *ClientEmbedRanking) SetMwrr(v float64) {
	o.Mwrr = v
}

// GetTwrr returns the Twrr field value
func (o *ClientEmbedRanking) GetTwrr() float64 {
	if o == nil {
		var ret float64
		return ret
	}

	return o.Twrr
}

// GetTwrrOk returns a tuple with the Twrr field value
// and a boolean to check if the value has been set.
func (o *ClientEmbedRanking) GetTwrrOk() (*float64, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Twrr, true
}

// SetTwrr sets field value
func (o *ClientEmbedRanking) SetTwrr(v float64) {
	o.Twrr = v
}

func (o ClientEmbedRanking) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["uuid"] = o.Uuid
	}
	if true {
		toSerialize["full_name"] = o.FullName
	}
	if true {
		toSerialize["balance"] = o.Balance
	}
	if true {
		toSerialize["earnings"] = o.Earnings
	}
	if true {
		toSerialize["mwrr"] = o.Mwrr
	}
	if true {
		toSerialize["twrr"] = o.Twrr
	}
	return json.Marshal(toSerialize)
}

type NullableClientEmbedRanking struct {
	value *ClientEmbedRanking
	isSet bool
}

func (v NullableClientEmbedRanking) Get() *ClientEmbedRanking {
	return v.value
}

func (v *NullableClientEmbedRanking) Set(val *ClientEmbedRanking) {
	v.value = val
	v.isSet = true
}

func (v NullableClientEmbedRanking) IsSet() bool {
	return v.isSet
}

func (v *NullableClientEmbedRanking) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableClientEmbedRanking(val *ClientEmbedRanking) *NullableClientEmbedRanking {
	return &NullableClientEmbedRanking{value: val, isSet: true}
}

func (v NullableClientEmbedRanking) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableClientEmbedRanking) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


