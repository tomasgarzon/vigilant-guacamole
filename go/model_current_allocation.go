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

// CurrentAllocation struct for CurrentAllocation
type CurrentAllocation struct {
	CashActive float64 `json:"cash_active"`
	Balance float64 `json:"balance"`
	Invested float64 `json:"invested"`
	Earnings float64 `json:"earnings"`
	Positions []Position `json:"positions"`
	ValuationDatetime time.Time `json:"valuation_datetime"`
	Performance *float64 `json:"performance,omitempty"`
	TradeTotal float64 `json:"trade_total"`
	CashAvailable float64 `json:"cash_available"`
}

// NewCurrentAllocation instantiates a new CurrentAllocation object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCurrentAllocation(cashActive float64, balance float64, invested float64, earnings float64, positions []Position, valuationDatetime time.Time, tradeTotal float64, cashAvailable float64) *CurrentAllocation {
	this := CurrentAllocation{}
	this.CashActive = cashActive
	this.Balance = balance
	this.Invested = invested
	this.Earnings = earnings
	this.Positions = positions
	this.ValuationDatetime = valuationDatetime
	var performance float64 = 0.0
	this.Performance = &performance
	this.TradeTotal = tradeTotal
	this.CashAvailable = cashAvailable
	return &this
}

// NewCurrentAllocationWithDefaults instantiates a new CurrentAllocation object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCurrentAllocationWithDefaults() *CurrentAllocation {
	this := CurrentAllocation{}
	var performance float64 = 0.0
	this.Performance = &performance
	return &this
}

// GetCashActive returns the CashActive field value
func (o *CurrentAllocation) GetCashActive() float64 {
	if o == nil {
		var ret float64
		return ret
	}

	return o.CashActive
}

// GetCashActiveOk returns a tuple with the CashActive field value
// and a boolean to check if the value has been set.
func (o *CurrentAllocation) GetCashActiveOk() (*float64, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.CashActive, true
}

// SetCashActive sets field value
func (o *CurrentAllocation) SetCashActive(v float64) {
	o.CashActive = v
}

// GetBalance returns the Balance field value
func (o *CurrentAllocation) GetBalance() float64 {
	if o == nil {
		var ret float64
		return ret
	}

	return o.Balance
}

// GetBalanceOk returns a tuple with the Balance field value
// and a boolean to check if the value has been set.
func (o *CurrentAllocation) GetBalanceOk() (*float64, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Balance, true
}

// SetBalance sets field value
func (o *CurrentAllocation) SetBalance(v float64) {
	o.Balance = v
}

// GetInvested returns the Invested field value
func (o *CurrentAllocation) GetInvested() float64 {
	if o == nil {
		var ret float64
		return ret
	}

	return o.Invested
}

// GetInvestedOk returns a tuple with the Invested field value
// and a boolean to check if the value has been set.
func (o *CurrentAllocation) GetInvestedOk() (*float64, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Invested, true
}

// SetInvested sets field value
func (o *CurrentAllocation) SetInvested(v float64) {
	o.Invested = v
}

// GetEarnings returns the Earnings field value
func (o *CurrentAllocation) GetEarnings() float64 {
	if o == nil {
		var ret float64
		return ret
	}

	return o.Earnings
}

// GetEarningsOk returns a tuple with the Earnings field value
// and a boolean to check if the value has been set.
func (o *CurrentAllocation) GetEarningsOk() (*float64, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Earnings, true
}

// SetEarnings sets field value
func (o *CurrentAllocation) SetEarnings(v float64) {
	o.Earnings = v
}

// GetPositions returns the Positions field value
func (o *CurrentAllocation) GetPositions() []Position {
	if o == nil {
		var ret []Position
		return ret
	}

	return o.Positions
}

// GetPositionsOk returns a tuple with the Positions field value
// and a boolean to check if the value has been set.
func (o *CurrentAllocation) GetPositionsOk() (*[]Position, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Positions, true
}

// SetPositions sets field value
func (o *CurrentAllocation) SetPositions(v []Position) {
	o.Positions = v
}

// GetValuationDatetime returns the ValuationDatetime field value
func (o *CurrentAllocation) GetValuationDatetime() time.Time {
	if o == nil {
		var ret time.Time
		return ret
	}

	return o.ValuationDatetime
}

// GetValuationDatetimeOk returns a tuple with the ValuationDatetime field value
// and a boolean to check if the value has been set.
func (o *CurrentAllocation) GetValuationDatetimeOk() (*time.Time, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.ValuationDatetime, true
}

// SetValuationDatetime sets field value
func (o *CurrentAllocation) SetValuationDatetime(v time.Time) {
	o.ValuationDatetime = v
}

// GetPerformance returns the Performance field value if set, zero value otherwise.
func (o *CurrentAllocation) GetPerformance() float64 {
	if o == nil || o.Performance == nil {
		var ret float64
		return ret
	}
	return *o.Performance
}

// GetPerformanceOk returns a tuple with the Performance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrentAllocation) GetPerformanceOk() (*float64, bool) {
	if o == nil || o.Performance == nil {
		return nil, false
	}
	return o.Performance, true
}

// HasPerformance returns a boolean if a field has been set.
func (o *CurrentAllocation) HasPerformance() bool {
	if o != nil && o.Performance != nil {
		return true
	}

	return false
}

// SetPerformance gets a reference to the given float64 and assigns it to the Performance field.
func (o *CurrentAllocation) SetPerformance(v float64) {
	o.Performance = &v
}

// GetTradeTotal returns the TradeTotal field value
func (o *CurrentAllocation) GetTradeTotal() float64 {
	if o == nil {
		var ret float64
		return ret
	}

	return o.TradeTotal
}

// GetTradeTotalOk returns a tuple with the TradeTotal field value
// and a boolean to check if the value has been set.
func (o *CurrentAllocation) GetTradeTotalOk() (*float64, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.TradeTotal, true
}

// SetTradeTotal sets field value
func (o *CurrentAllocation) SetTradeTotal(v float64) {
	o.TradeTotal = v
}

// GetCashAvailable returns the CashAvailable field value
func (o *CurrentAllocation) GetCashAvailable() float64 {
	if o == nil {
		var ret float64
		return ret
	}

	return o.CashAvailable
}

// GetCashAvailableOk returns a tuple with the CashAvailable field value
// and a boolean to check if the value has been set.
func (o *CurrentAllocation) GetCashAvailableOk() (*float64, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.CashAvailable, true
}

// SetCashAvailable sets field value
func (o *CurrentAllocation) SetCashAvailable(v float64) {
	o.CashAvailable = v
}

func (o CurrentAllocation) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["cash_active"] = o.CashActive
	}
	if true {
		toSerialize["balance"] = o.Balance
	}
	if true {
		toSerialize["invested"] = o.Invested
	}
	if true {
		toSerialize["earnings"] = o.Earnings
	}
	if true {
		toSerialize["positions"] = o.Positions
	}
	if true {
		toSerialize["valuation_datetime"] = o.ValuationDatetime
	}
	if o.Performance != nil {
		toSerialize["performance"] = o.Performance
	}
	if true {
		toSerialize["trade_total"] = o.TradeTotal
	}
	if true {
		toSerialize["cash_available"] = o.CashAvailable
	}
	return json.Marshal(toSerialize)
}

type NullableCurrentAllocation struct {
	value *CurrentAllocation
	isSet bool
}

func (v NullableCurrentAllocation) Get() *CurrentAllocation {
	return v.value
}

func (v *NullableCurrentAllocation) Set(val *CurrentAllocation) {
	v.value = val
	v.isSet = true
}

func (v NullableCurrentAllocation) IsSet() bool {
	return v.isSet
}

func (v *NullableCurrentAllocation) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCurrentAllocation(val *CurrentAllocation) *NullableCurrentAllocation {
	return &NullableCurrentAllocation{value: val, isSet: true}
}

func (v NullableCurrentAllocation) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCurrentAllocation) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


