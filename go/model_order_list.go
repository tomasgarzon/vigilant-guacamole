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

// OrderList A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
type OrderList struct {
	Asset RelatedAssetSerializerWithAssetCategories `json:"asset"`
	Trade string `json:"trade"`
	OrderType OrderTypeEnum `json:"order_type"`
	Method OrderListMethodEnum `json:"method"`
	Status OrderListStatusEnum `json:"status"`
	Reason string `json:"reason"`
	Completed time.Time `json:"completed"`
	Rebalance string `json:"rebalance"`
	Portfolio string `json:"portfolio"`
	Shares float64 `json:"shares"`
	Amount float64 `json:"amount"`
	PriceAvg float64 `json:"price_avg"`
	Currency Currency `json:"currency"`
	Withdrawal string `json:"withdrawal"`
	Created time.Time `json:"created"`
	StopPrice NullableFloat64 `json:"stop_price"`
	LimitPrice NullableFloat64 `json:"limit_price"`
	Duration string `json:"duration"`
}

// NewOrderList instantiates a new OrderList object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewOrderList(asset RelatedAssetSerializerWithAssetCategories, trade string, orderType OrderTypeEnum, method OrderListMethodEnum, status OrderListStatusEnum, reason string, completed time.Time, rebalance string, portfolio string, shares float64, amount float64, priceAvg float64, currency Currency, withdrawal string, created time.Time, stopPrice NullableFloat64, limitPrice NullableFloat64, duration string) *OrderList {
	this := OrderList{}
	this.Asset = asset
	this.Trade = trade
	this.OrderType = orderType
	this.Method = method
	this.Status = status
	this.Reason = reason
	this.Completed = completed
	this.Rebalance = rebalance
	this.Portfolio = portfolio
	this.Shares = shares
	this.Amount = amount
	this.PriceAvg = priceAvg
	this.Currency = currency
	this.Withdrawal = withdrawal
	this.Created = created
	this.StopPrice = stopPrice
	this.LimitPrice = limitPrice
	this.Duration = duration
	return &this
}

// NewOrderListWithDefaults instantiates a new OrderList object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewOrderListWithDefaults() *OrderList {
	this := OrderList{}
	return &this
}

// GetAsset returns the Asset field value
func (o *OrderList) GetAsset() RelatedAssetSerializerWithAssetCategories {
	if o == nil {
		var ret RelatedAssetSerializerWithAssetCategories
		return ret
	}

	return o.Asset
}

// GetAssetOk returns a tuple with the Asset field value
// and a boolean to check if the value has been set.
func (o *OrderList) GetAssetOk() (*RelatedAssetSerializerWithAssetCategories, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Asset, true
}

// SetAsset sets field value
func (o *OrderList) SetAsset(v RelatedAssetSerializerWithAssetCategories) {
	o.Asset = v
}

// GetTrade returns the Trade field value
func (o *OrderList) GetTrade() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Trade
}

// GetTradeOk returns a tuple with the Trade field value
// and a boolean to check if the value has been set.
func (o *OrderList) GetTradeOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Trade, true
}

// SetTrade sets field value
func (o *OrderList) SetTrade(v string) {
	o.Trade = v
}

// GetOrderType returns the OrderType field value
func (o *OrderList) GetOrderType() OrderTypeEnum {
	if o == nil {
		var ret OrderTypeEnum
		return ret
	}

	return o.OrderType
}

// GetOrderTypeOk returns a tuple with the OrderType field value
// and a boolean to check if the value has been set.
func (o *OrderList) GetOrderTypeOk() (*OrderTypeEnum, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.OrderType, true
}

// SetOrderType sets field value
func (o *OrderList) SetOrderType(v OrderTypeEnum) {
	o.OrderType = v
}

// GetMethod returns the Method field value
func (o *OrderList) GetMethod() OrderListMethodEnum {
	if o == nil {
		var ret OrderListMethodEnum
		return ret
	}

	return o.Method
}

// GetMethodOk returns a tuple with the Method field value
// and a boolean to check if the value has been set.
func (o *OrderList) GetMethodOk() (*OrderListMethodEnum, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Method, true
}

// SetMethod sets field value
func (o *OrderList) SetMethod(v OrderListMethodEnum) {
	o.Method = v
}

// GetStatus returns the Status field value
func (o *OrderList) GetStatus() OrderListStatusEnum {
	if o == nil {
		var ret OrderListStatusEnum
		return ret
	}

	return o.Status
}

// GetStatusOk returns a tuple with the Status field value
// and a boolean to check if the value has been set.
func (o *OrderList) GetStatusOk() (*OrderListStatusEnum, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Status, true
}

// SetStatus sets field value
func (o *OrderList) SetStatus(v OrderListStatusEnum) {
	o.Status = v
}

// GetReason returns the Reason field value
func (o *OrderList) GetReason() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Reason
}

// GetReasonOk returns a tuple with the Reason field value
// and a boolean to check if the value has been set.
func (o *OrderList) GetReasonOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Reason, true
}

// SetReason sets field value
func (o *OrderList) SetReason(v string) {
	o.Reason = v
}

// GetCompleted returns the Completed field value
func (o *OrderList) GetCompleted() time.Time {
	if o == nil {
		var ret time.Time
		return ret
	}

	return o.Completed
}

// GetCompletedOk returns a tuple with the Completed field value
// and a boolean to check if the value has been set.
func (o *OrderList) GetCompletedOk() (*time.Time, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Completed, true
}

// SetCompleted sets field value
func (o *OrderList) SetCompleted(v time.Time) {
	o.Completed = v
}

// GetRebalance returns the Rebalance field value
func (o *OrderList) GetRebalance() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Rebalance
}

// GetRebalanceOk returns a tuple with the Rebalance field value
// and a boolean to check if the value has been set.
func (o *OrderList) GetRebalanceOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Rebalance, true
}

// SetRebalance sets field value
func (o *OrderList) SetRebalance(v string) {
	o.Rebalance = v
}

// GetPortfolio returns the Portfolio field value
func (o *OrderList) GetPortfolio() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Portfolio
}

// GetPortfolioOk returns a tuple with the Portfolio field value
// and a boolean to check if the value has been set.
func (o *OrderList) GetPortfolioOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Portfolio, true
}

// SetPortfolio sets field value
func (o *OrderList) SetPortfolio(v string) {
	o.Portfolio = v
}

// GetShares returns the Shares field value
func (o *OrderList) GetShares() float64 {
	if o == nil {
		var ret float64
		return ret
	}

	return o.Shares
}

// GetSharesOk returns a tuple with the Shares field value
// and a boolean to check if the value has been set.
func (o *OrderList) GetSharesOk() (*float64, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Shares, true
}

// SetShares sets field value
func (o *OrderList) SetShares(v float64) {
	o.Shares = v
}

// GetAmount returns the Amount field value
func (o *OrderList) GetAmount() float64 {
	if o == nil {
		var ret float64
		return ret
	}

	return o.Amount
}

// GetAmountOk returns a tuple with the Amount field value
// and a boolean to check if the value has been set.
func (o *OrderList) GetAmountOk() (*float64, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Amount, true
}

// SetAmount sets field value
func (o *OrderList) SetAmount(v float64) {
	o.Amount = v
}

// GetPriceAvg returns the PriceAvg field value
func (o *OrderList) GetPriceAvg() float64 {
	if o == nil {
		var ret float64
		return ret
	}

	return o.PriceAvg
}

// GetPriceAvgOk returns a tuple with the PriceAvg field value
// and a boolean to check if the value has been set.
func (o *OrderList) GetPriceAvgOk() (*float64, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.PriceAvg, true
}

// SetPriceAvg sets field value
func (o *OrderList) SetPriceAvg(v float64) {
	o.PriceAvg = v
}

// GetCurrency returns the Currency field value
func (o *OrderList) GetCurrency() Currency {
	if o == nil {
		var ret Currency
		return ret
	}

	return o.Currency
}

// GetCurrencyOk returns a tuple with the Currency field value
// and a boolean to check if the value has been set.
func (o *OrderList) GetCurrencyOk() (*Currency, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Currency, true
}

// SetCurrency sets field value
func (o *OrderList) SetCurrency(v Currency) {
	o.Currency = v
}

// GetWithdrawal returns the Withdrawal field value
func (o *OrderList) GetWithdrawal() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Withdrawal
}

// GetWithdrawalOk returns a tuple with the Withdrawal field value
// and a boolean to check if the value has been set.
func (o *OrderList) GetWithdrawalOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Withdrawal, true
}

// SetWithdrawal sets field value
func (o *OrderList) SetWithdrawal(v string) {
	o.Withdrawal = v
}

// GetCreated returns the Created field value
func (o *OrderList) GetCreated() time.Time {
	if o == nil {
		var ret time.Time
		return ret
	}

	return o.Created
}

// GetCreatedOk returns a tuple with the Created field value
// and a boolean to check if the value has been set.
func (o *OrderList) GetCreatedOk() (*time.Time, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Created, true
}

// SetCreated sets field value
func (o *OrderList) SetCreated(v time.Time) {
	o.Created = v
}

// GetStopPrice returns the StopPrice field value
// If the value is explicit nil, the zero value for float64 will be returned
func (o *OrderList) GetStopPrice() float64 {
	if o == nil || o.StopPrice.Get() == nil {
		var ret float64
		return ret
	}

	return *o.StopPrice.Get()
}

// GetStopPriceOk returns a tuple with the StopPrice field value
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *OrderList) GetStopPriceOk() (*float64, bool) {
	if o == nil  {
		return nil, false
	}
	return o.StopPrice.Get(), o.StopPrice.IsSet()
}

// SetStopPrice sets field value
func (o *OrderList) SetStopPrice(v float64) {
	o.StopPrice.Set(&v)
}

// GetLimitPrice returns the LimitPrice field value
// If the value is explicit nil, the zero value for float64 will be returned
func (o *OrderList) GetLimitPrice() float64 {
	if o == nil || o.LimitPrice.Get() == nil {
		var ret float64
		return ret
	}

	return *o.LimitPrice.Get()
}

// GetLimitPriceOk returns a tuple with the LimitPrice field value
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *OrderList) GetLimitPriceOk() (*float64, bool) {
	if o == nil  {
		return nil, false
	}
	return o.LimitPrice.Get(), o.LimitPrice.IsSet()
}

// SetLimitPrice sets field value
func (o *OrderList) SetLimitPrice(v float64) {
	o.LimitPrice.Set(&v)
}

// GetDuration returns the Duration field value
func (o *OrderList) GetDuration() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Duration
}

// GetDurationOk returns a tuple with the Duration field value
// and a boolean to check if the value has been set.
func (o *OrderList) GetDurationOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Duration, true
}

// SetDuration sets field value
func (o *OrderList) SetDuration(v string) {
	o.Duration = v
}

func (o OrderList) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["asset"] = o.Asset
	}
	if true {
		toSerialize["trade"] = o.Trade
	}
	if true {
		toSerialize["order_type"] = o.OrderType
	}
	if true {
		toSerialize["method"] = o.Method
	}
	if true {
		toSerialize["status"] = o.Status
	}
	if true {
		toSerialize["reason"] = o.Reason
	}
	if true {
		toSerialize["completed"] = o.Completed
	}
	if true {
		toSerialize["rebalance"] = o.Rebalance
	}
	if true {
		toSerialize["portfolio"] = o.Portfolio
	}
	if true {
		toSerialize["shares"] = o.Shares
	}
	if true {
		toSerialize["amount"] = o.Amount
	}
	if true {
		toSerialize["price_avg"] = o.PriceAvg
	}
	if true {
		toSerialize["currency"] = o.Currency
	}
	if true {
		toSerialize["withdrawal"] = o.Withdrawal
	}
	if true {
		toSerialize["created"] = o.Created
	}
	if true {
		toSerialize["stop_price"] = o.StopPrice.Get()
	}
	if true {
		toSerialize["limit_price"] = o.LimitPrice.Get()
	}
	if true {
		toSerialize["duration"] = o.Duration
	}
	return json.Marshal(toSerialize)
}

type NullableOrderList struct {
	value *OrderList
	isSet bool
}

func (v NullableOrderList) Get() *OrderList {
	return v.value
}

func (v *NullableOrderList) Set(val *OrderList) {
	v.value = val
	v.isSet = true
}

func (v NullableOrderList) IsSet() bool {
	return v.isSet
}

func (v *NullableOrderList) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableOrderList(val *OrderList) *NullableOrderList {
	return &NullableOrderList{value: val, isSet: true}
}

func (v NullableOrderList) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableOrderList) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


