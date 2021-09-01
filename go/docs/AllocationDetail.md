# AllocationDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ValuationDate** | **string** |  | 
**Balance** | Pointer to **NullableFloat64** |  | [optional] 
**Invested** | Pointer to **NullableFloat64** |  | [optional] 
**Earnings** | Pointer to **NullableFloat64** |  | [optional] 
**CashActive** | **float64** |  | 
**TradeTotal** | Pointer to **NullableFloat64** |  | [optional] 
**Performance** | **float64** |  | [readonly] 
**Positions** | **[]string** |  | [readonly] 

## Methods

### NewAllocationDetail

`func NewAllocationDetail(valuationDate string, cashActive float64, performance float64, positions []string, ) *AllocationDetail`

NewAllocationDetail instantiates a new AllocationDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAllocationDetailWithDefaults

`func NewAllocationDetailWithDefaults() *AllocationDetail`

NewAllocationDetailWithDefaults instantiates a new AllocationDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValuationDate

`func (o *AllocationDetail) GetValuationDate() string`

GetValuationDate returns the ValuationDate field if non-nil, zero value otherwise.

### GetValuationDateOk

`func (o *AllocationDetail) GetValuationDateOk() (*string, bool)`

GetValuationDateOk returns a tuple with the ValuationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValuationDate

`func (o *AllocationDetail) SetValuationDate(v string)`

SetValuationDate sets ValuationDate field to given value.


### GetBalance

`func (o *AllocationDetail) GetBalance() float64`

GetBalance returns the Balance field if non-nil, zero value otherwise.

### GetBalanceOk

`func (o *AllocationDetail) GetBalanceOk() (*float64, bool)`

GetBalanceOk returns a tuple with the Balance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalance

`func (o *AllocationDetail) SetBalance(v float64)`

SetBalance sets Balance field to given value.

### HasBalance

`func (o *AllocationDetail) HasBalance() bool`

HasBalance returns a boolean if a field has been set.

### SetBalanceNil

`func (o *AllocationDetail) SetBalanceNil(b bool)`

 SetBalanceNil sets the value for Balance to be an explicit nil

### UnsetBalance
`func (o *AllocationDetail) UnsetBalance()`

UnsetBalance ensures that no value is present for Balance, not even an explicit nil
### GetInvested

`func (o *AllocationDetail) GetInvested() float64`

GetInvested returns the Invested field if non-nil, zero value otherwise.

### GetInvestedOk

`func (o *AllocationDetail) GetInvestedOk() (*float64, bool)`

GetInvestedOk returns a tuple with the Invested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvested

`func (o *AllocationDetail) SetInvested(v float64)`

SetInvested sets Invested field to given value.

### HasInvested

`func (o *AllocationDetail) HasInvested() bool`

HasInvested returns a boolean if a field has been set.

### SetInvestedNil

`func (o *AllocationDetail) SetInvestedNil(b bool)`

 SetInvestedNil sets the value for Invested to be an explicit nil

### UnsetInvested
`func (o *AllocationDetail) UnsetInvested()`

UnsetInvested ensures that no value is present for Invested, not even an explicit nil
### GetEarnings

`func (o *AllocationDetail) GetEarnings() float64`

GetEarnings returns the Earnings field if non-nil, zero value otherwise.

### GetEarningsOk

`func (o *AllocationDetail) GetEarningsOk() (*float64, bool)`

GetEarningsOk returns a tuple with the Earnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEarnings

`func (o *AllocationDetail) SetEarnings(v float64)`

SetEarnings sets Earnings field to given value.

### HasEarnings

`func (o *AllocationDetail) HasEarnings() bool`

HasEarnings returns a boolean if a field has been set.

### SetEarningsNil

`func (o *AllocationDetail) SetEarningsNil(b bool)`

 SetEarningsNil sets the value for Earnings to be an explicit nil

### UnsetEarnings
`func (o *AllocationDetail) UnsetEarnings()`

UnsetEarnings ensures that no value is present for Earnings, not even an explicit nil
### GetCashActive

`func (o *AllocationDetail) GetCashActive() float64`

GetCashActive returns the CashActive field if non-nil, zero value otherwise.

### GetCashActiveOk

`func (o *AllocationDetail) GetCashActiveOk() (*float64, bool)`

GetCashActiveOk returns a tuple with the CashActive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashActive

`func (o *AllocationDetail) SetCashActive(v float64)`

SetCashActive sets CashActive field to given value.


### GetTradeTotal

`func (o *AllocationDetail) GetTradeTotal() float64`

GetTradeTotal returns the TradeTotal field if non-nil, zero value otherwise.

### GetTradeTotalOk

`func (o *AllocationDetail) GetTradeTotalOk() (*float64, bool)`

GetTradeTotalOk returns a tuple with the TradeTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTradeTotal

`func (o *AllocationDetail) SetTradeTotal(v float64)`

SetTradeTotal sets TradeTotal field to given value.

### HasTradeTotal

`func (o *AllocationDetail) HasTradeTotal() bool`

HasTradeTotal returns a boolean if a field has been set.

### SetTradeTotalNil

`func (o *AllocationDetail) SetTradeTotalNil(b bool)`

 SetTradeTotalNil sets the value for TradeTotal to be an explicit nil

### UnsetTradeTotal
`func (o *AllocationDetail) UnsetTradeTotal()`

UnsetTradeTotal ensures that no value is present for TradeTotal, not even an explicit nil
### GetPerformance

`func (o *AllocationDetail) GetPerformance() float64`

GetPerformance returns the Performance field if non-nil, zero value otherwise.

### GetPerformanceOk

`func (o *AllocationDetail) GetPerformanceOk() (*float64, bool)`

GetPerformanceOk returns a tuple with the Performance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPerformance

`func (o *AllocationDetail) SetPerformance(v float64)`

SetPerformance sets Performance field to given value.


### GetPositions

`func (o *AllocationDetail) GetPositions() []string`

GetPositions returns the Positions field if non-nil, zero value otherwise.

### GetPositionsOk

`func (o *AllocationDetail) GetPositionsOk() (*[]string, bool)`

GetPositionsOk returns a tuple with the Positions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPositions

`func (o *AllocationDetail) SetPositions(v []string)`

SetPositions sets Positions field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


