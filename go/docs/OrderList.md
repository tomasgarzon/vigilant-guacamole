# OrderList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Asset** | [**RelatedAssetSerializerWithAssetCategories**](RelatedAssetSerializerWithAssetCategories.md) |  | [readonly] 
**Trade** | **string** |  | [readonly] 
**OrderType** | [**OrderTypeEnum**](OrderTypeEnum.md) |  | [readonly] 
**Method** | [**OrderListMethodEnum**](OrderListMethodEnum.md) |  | [readonly] 
**Status** | [**OrderListStatusEnum**](OrderListStatusEnum.md) |  | [readonly] 
**Reason** | **string** |  | [readonly] 
**Completed** | **time.Time** |  | [readonly] 
**Rebalance** | **string** |  | [readonly] 
**Portfolio** | **string** |  | [readonly] 
**Shares** | **float64** |  | [readonly] 
**Amount** | **float64** |  | [readonly] 
**PriceAvg** | **float64** |  | [readonly] 
**Currency** | [**Currency**](Currency.md) |  | 
**Withdrawal** | **string** |  | [readonly] 
**Created** | **time.Time** |  | [readonly] 
**StopPrice** | **NullableFloat64** |  | [readonly] 
**LimitPrice** | **NullableFloat64** |  | [readonly] 
**Duration** | **string** |  | [readonly] 

## Methods

### NewOrderList

`func NewOrderList(asset RelatedAssetSerializerWithAssetCategories, trade string, orderType OrderTypeEnum, method OrderListMethodEnum, status OrderListStatusEnum, reason string, completed time.Time, rebalance string, portfolio string, shares float64, amount float64, priceAvg float64, currency Currency, withdrawal string, created time.Time, stopPrice NullableFloat64, limitPrice NullableFloat64, duration string, ) *OrderList`

NewOrderList instantiates a new OrderList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrderListWithDefaults

`func NewOrderListWithDefaults() *OrderList`

NewOrderListWithDefaults instantiates a new OrderList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAsset

`func (o *OrderList) GetAsset() RelatedAssetSerializerWithAssetCategories`

GetAsset returns the Asset field if non-nil, zero value otherwise.

### GetAssetOk

`func (o *OrderList) GetAssetOk() (*RelatedAssetSerializerWithAssetCategories, bool)`

GetAssetOk returns a tuple with the Asset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAsset

`func (o *OrderList) SetAsset(v RelatedAssetSerializerWithAssetCategories)`

SetAsset sets Asset field to given value.


### GetTrade

`func (o *OrderList) GetTrade() string`

GetTrade returns the Trade field if non-nil, zero value otherwise.

### GetTradeOk

`func (o *OrderList) GetTradeOk() (*string, bool)`

GetTradeOk returns a tuple with the Trade field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrade

`func (o *OrderList) SetTrade(v string)`

SetTrade sets Trade field to given value.


### GetOrderType

`func (o *OrderList) GetOrderType() OrderTypeEnum`

GetOrderType returns the OrderType field if non-nil, zero value otherwise.

### GetOrderTypeOk

`func (o *OrderList) GetOrderTypeOk() (*OrderTypeEnum, bool)`

GetOrderTypeOk returns a tuple with the OrderType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderType

`func (o *OrderList) SetOrderType(v OrderTypeEnum)`

SetOrderType sets OrderType field to given value.


### GetMethod

`func (o *OrderList) GetMethod() OrderListMethodEnum`

GetMethod returns the Method field if non-nil, zero value otherwise.

### GetMethodOk

`func (o *OrderList) GetMethodOk() (*OrderListMethodEnum, bool)`

GetMethodOk returns a tuple with the Method field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMethod

`func (o *OrderList) SetMethod(v OrderListMethodEnum)`

SetMethod sets Method field to given value.


### GetStatus

`func (o *OrderList) GetStatus() OrderListStatusEnum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *OrderList) GetStatusOk() (*OrderListStatusEnum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *OrderList) SetStatus(v OrderListStatusEnum)`

SetStatus sets Status field to given value.


### GetReason

`func (o *OrderList) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *OrderList) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *OrderList) SetReason(v string)`

SetReason sets Reason field to given value.


### GetCompleted

`func (o *OrderList) GetCompleted() time.Time`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *OrderList) GetCompletedOk() (*time.Time, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *OrderList) SetCompleted(v time.Time)`

SetCompleted sets Completed field to given value.


### GetRebalance

`func (o *OrderList) GetRebalance() string`

GetRebalance returns the Rebalance field if non-nil, zero value otherwise.

### GetRebalanceOk

`func (o *OrderList) GetRebalanceOk() (*string, bool)`

GetRebalanceOk returns a tuple with the Rebalance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRebalance

`func (o *OrderList) SetRebalance(v string)`

SetRebalance sets Rebalance field to given value.


### GetPortfolio

`func (o *OrderList) GetPortfolio() string`

GetPortfolio returns the Portfolio field if non-nil, zero value otherwise.

### GetPortfolioOk

`func (o *OrderList) GetPortfolioOk() (*string, bool)`

GetPortfolioOk returns a tuple with the Portfolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPortfolio

`func (o *OrderList) SetPortfolio(v string)`

SetPortfolio sets Portfolio field to given value.


### GetShares

`func (o *OrderList) GetShares() float64`

GetShares returns the Shares field if non-nil, zero value otherwise.

### GetSharesOk

`func (o *OrderList) GetSharesOk() (*float64, bool)`

GetSharesOk returns a tuple with the Shares field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShares

`func (o *OrderList) SetShares(v float64)`

SetShares sets Shares field to given value.


### GetAmount

`func (o *OrderList) GetAmount() float64`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *OrderList) GetAmountOk() (*float64, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *OrderList) SetAmount(v float64)`

SetAmount sets Amount field to given value.


### GetPriceAvg

`func (o *OrderList) GetPriceAvg() float64`

GetPriceAvg returns the PriceAvg field if non-nil, zero value otherwise.

### GetPriceAvgOk

`func (o *OrderList) GetPriceAvgOk() (*float64, bool)`

GetPriceAvgOk returns a tuple with the PriceAvg field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriceAvg

`func (o *OrderList) SetPriceAvg(v float64)`

SetPriceAvg sets PriceAvg field to given value.


### GetCurrency

`func (o *OrderList) GetCurrency() Currency`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *OrderList) GetCurrencyOk() (*Currency, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *OrderList) SetCurrency(v Currency)`

SetCurrency sets Currency field to given value.


### GetWithdrawal

`func (o *OrderList) GetWithdrawal() string`

GetWithdrawal returns the Withdrawal field if non-nil, zero value otherwise.

### GetWithdrawalOk

`func (o *OrderList) GetWithdrawalOk() (*string, bool)`

GetWithdrawalOk returns a tuple with the Withdrawal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWithdrawal

`func (o *OrderList) SetWithdrawal(v string)`

SetWithdrawal sets Withdrawal field to given value.


### GetCreated

`func (o *OrderList) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *OrderList) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *OrderList) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetStopPrice

`func (o *OrderList) GetStopPrice() float64`

GetStopPrice returns the StopPrice field if non-nil, zero value otherwise.

### GetStopPriceOk

`func (o *OrderList) GetStopPriceOk() (*float64, bool)`

GetStopPriceOk returns a tuple with the StopPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStopPrice

`func (o *OrderList) SetStopPrice(v float64)`

SetStopPrice sets StopPrice field to given value.


### SetStopPriceNil

`func (o *OrderList) SetStopPriceNil(b bool)`

 SetStopPriceNil sets the value for StopPrice to be an explicit nil

### UnsetStopPrice
`func (o *OrderList) UnsetStopPrice()`

UnsetStopPrice ensures that no value is present for StopPrice, not even an explicit nil
### GetLimitPrice

`func (o *OrderList) GetLimitPrice() float64`

GetLimitPrice returns the LimitPrice field if non-nil, zero value otherwise.

### GetLimitPriceOk

`func (o *OrderList) GetLimitPriceOk() (*float64, bool)`

GetLimitPriceOk returns a tuple with the LimitPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimitPrice

`func (o *OrderList) SetLimitPrice(v float64)`

SetLimitPrice sets LimitPrice field to given value.


### SetLimitPriceNil

`func (o *OrderList) SetLimitPriceNil(b bool)`

 SetLimitPriceNil sets the value for LimitPrice to be an explicit nil

### UnsetLimitPrice
`func (o *OrderList) UnsetLimitPrice()`

UnsetLimitPrice ensures that no value is present for LimitPrice, not even an explicit nil
### GetDuration

`func (o *OrderList) GetDuration() string`

GetDuration returns the Duration field if non-nil, zero value otherwise.

### GetDurationOk

`func (o *OrderList) GetDurationOk() (*string, bool)`

GetDurationOk returns a tuple with the Duration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDuration

`func (o *OrderList) SetDuration(v string)`

SetDuration sets Duration field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


