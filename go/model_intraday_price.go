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

// IntradayPrice struct for IntradayPrice
type IntradayPrice struct {
	Amount float64 `json:"amount"`
	Datetime time.Time `json:"datetime"`
	OpenPrice float64 `json:"open_price"`
	HighPrice float64 `json:"high_price"`
	LowPrice float64 `json:"low_price"`
	PreviousClosePrice float64 `json:"previous_close_price"`
}

// NewIntradayPrice instantiates a new IntradayPrice object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewIntradayPrice(amount float64, datetime time.Time, openPrice float64, highPrice float64, lowPrice float64, previousClosePrice float64) *IntradayPrice {
	this := IntradayPrice{}
	this.Amount = amount
	this.Datetime = datetime
	this.OpenPrice = openPrice
	this.HighPrice = highPrice
	this.LowPrice = lowPrice
	this.PreviousClosePrice = previousClosePrice
	return &this
}

// NewIntradayPriceWithDefaults instantiates a new IntradayPrice object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewIntradayPriceWithDefaults() *IntradayPrice {
	this := IntradayPrice{}
	return &this
}

// GetAmount returns the Amount field value
func (o *IntradayPrice) GetAmount() float64 {
	if o == nil {
		var ret float64
		return ret
	}

	return o.Amount
}

// GetAmountOk returns a tuple with the Amount field value
// and a boolean to check if the value has been set.
func (o *IntradayPrice) GetAmountOk() (*float64, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Amount, true
}

// SetAmount sets field value
func (o *IntradayPrice) SetAmount(v float64) {
	o.Amount = v
}

// GetDatetime returns the Datetime field value
func (o *IntradayPrice) GetDatetime() time.Time {
	if o == nil {
		var ret time.Time
		return ret
	}

	return o.Datetime
}

// GetDatetimeOk returns a tuple with the Datetime field value
// and a boolean to check if the value has been set.
func (o *IntradayPrice) GetDatetimeOk() (*time.Time, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Datetime, true
}

// SetDatetime sets field value
func (o *IntradayPrice) SetDatetime(v time.Time) {
	o.Datetime = v
}

// GetOpenPrice returns the OpenPrice field value
func (o *IntradayPrice) GetOpenPrice() float64 {
	if o == nil {
		var ret float64
		return ret
	}

	return o.OpenPrice
}

// GetOpenPriceOk returns a tuple with the OpenPrice field value
// and a boolean to check if the value has been set.
func (o *IntradayPrice) GetOpenPriceOk() (*float64, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.OpenPrice, true
}

// SetOpenPrice sets field value
func (o *IntradayPrice) SetOpenPrice(v float64) {
	o.OpenPrice = v
}

// GetHighPrice returns the HighPrice field value
func (o *IntradayPrice) GetHighPrice() float64 {
	if o == nil {
		var ret float64
		return ret
	}

	return o.HighPrice
}

// GetHighPriceOk returns a tuple with the HighPrice field value
// and a boolean to check if the value has been set.
func (o *IntradayPrice) GetHighPriceOk() (*float64, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.HighPrice, true
}

// SetHighPrice sets field value
func (o *IntradayPrice) SetHighPrice(v float64) {
	o.HighPrice = v
}

// GetLowPrice returns the LowPrice field value
func (o *IntradayPrice) GetLowPrice() float64 {
	if o == nil {
		var ret float64
		return ret
	}

	return o.LowPrice
}

// GetLowPriceOk returns a tuple with the LowPrice field value
// and a boolean to check if the value has been set.
func (o *IntradayPrice) GetLowPriceOk() (*float64, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.LowPrice, true
}

// SetLowPrice sets field value
func (o *IntradayPrice) SetLowPrice(v float64) {
	o.LowPrice = v
}

// GetPreviousClosePrice returns the PreviousClosePrice field value
func (o *IntradayPrice) GetPreviousClosePrice() float64 {
	if o == nil {
		var ret float64
		return ret
	}

	return o.PreviousClosePrice
}

// GetPreviousClosePriceOk returns a tuple with the PreviousClosePrice field value
// and a boolean to check if the value has been set.
func (o *IntradayPrice) GetPreviousClosePriceOk() (*float64, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.PreviousClosePrice, true
}

// SetPreviousClosePrice sets field value
func (o *IntradayPrice) SetPreviousClosePrice(v float64) {
	o.PreviousClosePrice = v
}

func (o IntradayPrice) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["amount"] = o.Amount
	}
	if true {
		toSerialize["datetime"] = o.Datetime
	}
	if true {
		toSerialize["open_price"] = o.OpenPrice
	}
	if true {
		toSerialize["high_price"] = o.HighPrice
	}
	if true {
		toSerialize["low_price"] = o.LowPrice
	}
	if true {
		toSerialize["previous_close_price"] = o.PreviousClosePrice
	}
	return json.Marshal(toSerialize)
}

type NullableIntradayPrice struct {
	value *IntradayPrice
	isSet bool
}

func (v NullableIntradayPrice) Get() *IntradayPrice {
	return v.value
}

func (v *NullableIntradayPrice) Set(val *IntradayPrice) {
	v.value = val
	v.isSet = true
}

func (v NullableIntradayPrice) IsSet() bool {
	return v.isSet
}

func (v *NullableIntradayPrice) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableIntradayPrice(val *IntradayPrice) *NullableIntradayPrice {
	return &NullableIntradayPrice{value: val, isSet: true}
}

func (v NullableIntradayPrice) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableIntradayPrice) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


