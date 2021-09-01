# CurrentAllocation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CashActive** | **float64** |  | 
**Balance** | **float64** |  | 
**Invested** | **float64** |  | 
**Earnings** | **float64** |  | 
**Positions** | [**[]Position**](Position.md) |  | 
**ValuationDatetime** | **time.Time** |  | [readonly] 
**Performance** | Pointer to **float64** |  | [optional] [default to 0.0]
**TradeTotal** | **float64** |  | 
**CashAvailable** | **float64** |  | [readonly] 

## Methods

### NewCurrentAllocation

`func NewCurrentAllocation(cashActive float64, balance float64, invested float64, earnings float64, positions []Position, valuationDatetime time.Time, tradeTotal float64, cashAvailable float64, ) *CurrentAllocation`

NewCurrentAllocation instantiates a new CurrentAllocation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCurrentAllocationWithDefaults

`func NewCurrentAllocationWithDefaults() *CurrentAllocation`

NewCurrentAllocationWithDefaults instantiates a new CurrentAllocation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCashActive

`func (o *CurrentAllocation) GetCashActive() float64`

GetCashActive returns the CashActive field if non-nil, zero value otherwise.

### GetCashActiveOk

`func (o *CurrentAllocation) GetCashActiveOk() (*float64, bool)`

GetCashActiveOk returns a tuple with the CashActive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashActive

`func (o *CurrentAllocation) SetCashActive(v float64)`

SetCashActive sets CashActive field to given value.


### GetBalance

`func (o *CurrentAllocation) GetBalance() float64`

GetBalance returns the Balance field if non-nil, zero value otherwise.

### GetBalanceOk

`func (o *CurrentAllocation) GetBalanceOk() (*float64, bool)`

GetBalanceOk returns a tuple with the Balance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalance

`func (o *CurrentAllocation) SetBalance(v float64)`

SetBalance sets Balance field to given value.


### GetInvested

`func (o *CurrentAllocation) GetInvested() float64`

GetInvested returns the Invested field if non-nil, zero value otherwise.

### GetInvestedOk

`func (o *CurrentAllocation) GetInvestedOk() (*float64, bool)`

GetInvestedOk returns a tuple with the Invested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvested

`func (o *CurrentAllocation) SetInvested(v float64)`

SetInvested sets Invested field to given value.


### GetEarnings

`func (o *CurrentAllocation) GetEarnings() float64`

GetEarnings returns the Earnings field if non-nil, zero value otherwise.

### GetEarningsOk

`func (o *CurrentAllocation) GetEarningsOk() (*float64, bool)`

GetEarningsOk returns a tuple with the Earnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEarnings

`func (o *CurrentAllocation) SetEarnings(v float64)`

SetEarnings sets Earnings field to given value.


### GetPositions

`func (o *CurrentAllocation) GetPositions() []Position`

GetPositions returns the Positions field if non-nil, zero value otherwise.

### GetPositionsOk

`func (o *CurrentAllocation) GetPositionsOk() (*[]Position, bool)`

GetPositionsOk returns a tuple with the Positions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPositions

`func (o *CurrentAllocation) SetPositions(v []Position)`

SetPositions sets Positions field to given value.


### GetValuationDatetime

`func (o *CurrentAllocation) GetValuationDatetime() time.Time`

GetValuationDatetime returns the ValuationDatetime field if non-nil, zero value otherwise.

### GetValuationDatetimeOk

`func (o *CurrentAllocation) GetValuationDatetimeOk() (*time.Time, bool)`

GetValuationDatetimeOk returns a tuple with the ValuationDatetime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValuationDatetime

`func (o *CurrentAllocation) SetValuationDatetime(v time.Time)`

SetValuationDatetime sets ValuationDatetime field to given value.


### GetPerformance

`func (o *CurrentAllocation) GetPerformance() float64`

GetPerformance returns the Performance field if non-nil, zero value otherwise.

### GetPerformanceOk

`func (o *CurrentAllocation) GetPerformanceOk() (*float64, bool)`

GetPerformanceOk returns a tuple with the Performance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPerformance

`func (o *CurrentAllocation) SetPerformance(v float64)`

SetPerformance sets Performance field to given value.

### HasPerformance

`func (o *CurrentAllocation) HasPerformance() bool`

HasPerformance returns a boolean if a field has been set.

### GetTradeTotal

`func (o *CurrentAllocation) GetTradeTotal() float64`

GetTradeTotal returns the TradeTotal field if non-nil, zero value otherwise.

### GetTradeTotalOk

`func (o *CurrentAllocation) GetTradeTotalOk() (*float64, bool)`

GetTradeTotalOk returns a tuple with the TradeTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTradeTotal

`func (o *CurrentAllocation) SetTradeTotal(v float64)`

SetTradeTotal sets TradeTotal field to given value.


### GetCashAvailable

`func (o *CurrentAllocation) GetCashAvailable() float64`

GetCashAvailable returns the CashAvailable field if non-nil, zero value otherwise.

### GetCashAvailableOk

`func (o *CurrentAllocation) GetCashAvailableOk() (*float64, bool)`

GetCashAvailableOk returns a tuple with the CashAvailable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashAvailable

`func (o *CurrentAllocation) SetCashAvailable(v float64)`

SetCashAvailable sets CashAvailable field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


