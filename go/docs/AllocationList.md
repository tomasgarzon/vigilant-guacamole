# AllocationList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ValuationDate** | **string** |  | [readonly] 
**Balance** | **float64** |  | [readonly] 
**Invested** | **float64** |  | [readonly] 
**Earnings** | **float64** |  | [readonly] 
**CashActive** | **float64** |  | [readonly] 
**TradeTotal** | **float64** |  | [readonly] 
**Performance** | **float64** |  | [readonly] 

## Methods

### NewAllocationList

`func NewAllocationList(valuationDate string, balance float64, invested float64, earnings float64, cashActive float64, tradeTotal float64, performance float64, ) *AllocationList`

NewAllocationList instantiates a new AllocationList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAllocationListWithDefaults

`func NewAllocationListWithDefaults() *AllocationList`

NewAllocationListWithDefaults instantiates a new AllocationList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValuationDate

`func (o *AllocationList) GetValuationDate() string`

GetValuationDate returns the ValuationDate field if non-nil, zero value otherwise.

### GetValuationDateOk

`func (o *AllocationList) GetValuationDateOk() (*string, bool)`

GetValuationDateOk returns a tuple with the ValuationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValuationDate

`func (o *AllocationList) SetValuationDate(v string)`

SetValuationDate sets ValuationDate field to given value.


### GetBalance

`func (o *AllocationList) GetBalance() float64`

GetBalance returns the Balance field if non-nil, zero value otherwise.

### GetBalanceOk

`func (o *AllocationList) GetBalanceOk() (*float64, bool)`

GetBalanceOk returns a tuple with the Balance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalance

`func (o *AllocationList) SetBalance(v float64)`

SetBalance sets Balance field to given value.


### GetInvested

`func (o *AllocationList) GetInvested() float64`

GetInvested returns the Invested field if non-nil, zero value otherwise.

### GetInvestedOk

`func (o *AllocationList) GetInvestedOk() (*float64, bool)`

GetInvestedOk returns a tuple with the Invested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvested

`func (o *AllocationList) SetInvested(v float64)`

SetInvested sets Invested field to given value.


### GetEarnings

`func (o *AllocationList) GetEarnings() float64`

GetEarnings returns the Earnings field if non-nil, zero value otherwise.

### GetEarningsOk

`func (o *AllocationList) GetEarningsOk() (*float64, bool)`

GetEarningsOk returns a tuple with the Earnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEarnings

`func (o *AllocationList) SetEarnings(v float64)`

SetEarnings sets Earnings field to given value.


### GetCashActive

`func (o *AllocationList) GetCashActive() float64`

GetCashActive returns the CashActive field if non-nil, zero value otherwise.

### GetCashActiveOk

`func (o *AllocationList) GetCashActiveOk() (*float64, bool)`

GetCashActiveOk returns a tuple with the CashActive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashActive

`func (o *AllocationList) SetCashActive(v float64)`

SetCashActive sets CashActive field to given value.


### GetTradeTotal

`func (o *AllocationList) GetTradeTotal() float64`

GetTradeTotal returns the TradeTotal field if non-nil, zero value otherwise.

### GetTradeTotalOk

`func (o *AllocationList) GetTradeTotalOk() (*float64, bool)`

GetTradeTotalOk returns a tuple with the TradeTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTradeTotal

`func (o *AllocationList) SetTradeTotal(v float64)`

SetTradeTotal sets TradeTotal field to given value.


### GetPerformance

`func (o *AllocationList) GetPerformance() float64`

GetPerformance returns the Performance field if non-nil, zero value otherwise.

### GetPerformanceOk

`func (o *AllocationList) GetPerformanceOk() (*float64, bool)`

GetPerformanceOk returns a tuple with the Performance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPerformance

`func (o *AllocationList) SetPerformance(v float64)`

SetPerformance sets Performance field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


