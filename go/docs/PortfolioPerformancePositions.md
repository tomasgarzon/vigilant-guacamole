# PortfolioPerformancePositions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ValuationDatetime** | **time.Time** |  | 
**LastUpdate** | **time.Time** |  | 
**Asset** | **string** |  | 
**Shares** | **float64** |  | 
**Price** | **float64** |  | 
**Currency** | **string** |  | 
**Weight** | Pointer to **float64** |  | [optional] 
**FxRateAccount** | Pointer to **float64** |  | [optional] 
**AssetCurrencyValue** | Pointer to **float64** |  | [optional] 
**Value** | **float64** |  | 
**PositionReturn** | **float64** |  | 
**UnrealisedPl** | **float64** |  | 
**RealisedPl** | **float64** |  | 
**Earnings** | **float64** |  | 
**AvgEntryPrice** | **float64** |  | 
**DailyPl** | **float64** |  | 

## Methods

### NewPortfolioPerformancePositions

`func NewPortfolioPerformancePositions(valuationDatetime time.Time, lastUpdate time.Time, asset string, shares float64, price float64, currency string, value float64, positionReturn float64, unrealisedPl float64, realisedPl float64, earnings float64, avgEntryPrice float64, dailyPl float64, ) *PortfolioPerformancePositions`

NewPortfolioPerformancePositions instantiates a new PortfolioPerformancePositions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPortfolioPerformancePositionsWithDefaults

`func NewPortfolioPerformancePositionsWithDefaults() *PortfolioPerformancePositions`

NewPortfolioPerformancePositionsWithDefaults instantiates a new PortfolioPerformancePositions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValuationDatetime

`func (o *PortfolioPerformancePositions) GetValuationDatetime() time.Time`

GetValuationDatetime returns the ValuationDatetime field if non-nil, zero value otherwise.

### GetValuationDatetimeOk

`func (o *PortfolioPerformancePositions) GetValuationDatetimeOk() (*time.Time, bool)`

GetValuationDatetimeOk returns a tuple with the ValuationDatetime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValuationDatetime

`func (o *PortfolioPerformancePositions) SetValuationDatetime(v time.Time)`

SetValuationDatetime sets ValuationDatetime field to given value.


### GetLastUpdate

`func (o *PortfolioPerformancePositions) GetLastUpdate() time.Time`

GetLastUpdate returns the LastUpdate field if non-nil, zero value otherwise.

### GetLastUpdateOk

`func (o *PortfolioPerformancePositions) GetLastUpdateOk() (*time.Time, bool)`

GetLastUpdateOk returns a tuple with the LastUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdate

`func (o *PortfolioPerformancePositions) SetLastUpdate(v time.Time)`

SetLastUpdate sets LastUpdate field to given value.


### GetAsset

`func (o *PortfolioPerformancePositions) GetAsset() string`

GetAsset returns the Asset field if non-nil, zero value otherwise.

### GetAssetOk

`func (o *PortfolioPerformancePositions) GetAssetOk() (*string, bool)`

GetAssetOk returns a tuple with the Asset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAsset

`func (o *PortfolioPerformancePositions) SetAsset(v string)`

SetAsset sets Asset field to given value.


### GetShares

`func (o *PortfolioPerformancePositions) GetShares() float64`

GetShares returns the Shares field if non-nil, zero value otherwise.

### GetSharesOk

`func (o *PortfolioPerformancePositions) GetSharesOk() (*float64, bool)`

GetSharesOk returns a tuple with the Shares field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShares

`func (o *PortfolioPerformancePositions) SetShares(v float64)`

SetShares sets Shares field to given value.


### GetPrice

`func (o *PortfolioPerformancePositions) GetPrice() float64`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *PortfolioPerformancePositions) GetPriceOk() (*float64, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *PortfolioPerformancePositions) SetPrice(v float64)`

SetPrice sets Price field to given value.


### GetCurrency

`func (o *PortfolioPerformancePositions) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *PortfolioPerformancePositions) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *PortfolioPerformancePositions) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetWeight

`func (o *PortfolioPerformancePositions) GetWeight() float64`

GetWeight returns the Weight field if non-nil, zero value otherwise.

### GetWeightOk

`func (o *PortfolioPerformancePositions) GetWeightOk() (*float64, bool)`

GetWeightOk returns a tuple with the Weight field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWeight

`func (o *PortfolioPerformancePositions) SetWeight(v float64)`

SetWeight sets Weight field to given value.

### HasWeight

`func (o *PortfolioPerformancePositions) HasWeight() bool`

HasWeight returns a boolean if a field has been set.

### GetFxRateAccount

`func (o *PortfolioPerformancePositions) GetFxRateAccount() float64`

GetFxRateAccount returns the FxRateAccount field if non-nil, zero value otherwise.

### GetFxRateAccountOk

`func (o *PortfolioPerformancePositions) GetFxRateAccountOk() (*float64, bool)`

GetFxRateAccountOk returns a tuple with the FxRateAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFxRateAccount

`func (o *PortfolioPerformancePositions) SetFxRateAccount(v float64)`

SetFxRateAccount sets FxRateAccount field to given value.

### HasFxRateAccount

`func (o *PortfolioPerformancePositions) HasFxRateAccount() bool`

HasFxRateAccount returns a boolean if a field has been set.

### GetAssetCurrencyValue

`func (o *PortfolioPerformancePositions) GetAssetCurrencyValue() float64`

GetAssetCurrencyValue returns the AssetCurrencyValue field if non-nil, zero value otherwise.

### GetAssetCurrencyValueOk

`func (o *PortfolioPerformancePositions) GetAssetCurrencyValueOk() (*float64, bool)`

GetAssetCurrencyValueOk returns a tuple with the AssetCurrencyValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssetCurrencyValue

`func (o *PortfolioPerformancePositions) SetAssetCurrencyValue(v float64)`

SetAssetCurrencyValue sets AssetCurrencyValue field to given value.

### HasAssetCurrencyValue

`func (o *PortfolioPerformancePositions) HasAssetCurrencyValue() bool`

HasAssetCurrencyValue returns a boolean if a field has been set.

### GetValue

`func (o *PortfolioPerformancePositions) GetValue() float64`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *PortfolioPerformancePositions) GetValueOk() (*float64, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *PortfolioPerformancePositions) SetValue(v float64)`

SetValue sets Value field to given value.


### GetPositionReturn

`func (o *PortfolioPerformancePositions) GetPositionReturn() float64`

GetPositionReturn returns the PositionReturn field if non-nil, zero value otherwise.

### GetPositionReturnOk

`func (o *PortfolioPerformancePositions) GetPositionReturnOk() (*float64, bool)`

GetPositionReturnOk returns a tuple with the PositionReturn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPositionReturn

`func (o *PortfolioPerformancePositions) SetPositionReturn(v float64)`

SetPositionReturn sets PositionReturn field to given value.


### GetUnrealisedPl

`func (o *PortfolioPerformancePositions) GetUnrealisedPl() float64`

GetUnrealisedPl returns the UnrealisedPl field if non-nil, zero value otherwise.

### GetUnrealisedPlOk

`func (o *PortfolioPerformancePositions) GetUnrealisedPlOk() (*float64, bool)`

GetUnrealisedPlOk returns a tuple with the UnrealisedPl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnrealisedPl

`func (o *PortfolioPerformancePositions) SetUnrealisedPl(v float64)`

SetUnrealisedPl sets UnrealisedPl field to given value.


### GetRealisedPl

`func (o *PortfolioPerformancePositions) GetRealisedPl() float64`

GetRealisedPl returns the RealisedPl field if non-nil, zero value otherwise.

### GetRealisedPlOk

`func (o *PortfolioPerformancePositions) GetRealisedPlOk() (*float64, bool)`

GetRealisedPlOk returns a tuple with the RealisedPl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRealisedPl

`func (o *PortfolioPerformancePositions) SetRealisedPl(v float64)`

SetRealisedPl sets RealisedPl field to given value.


### GetEarnings

`func (o *PortfolioPerformancePositions) GetEarnings() float64`

GetEarnings returns the Earnings field if non-nil, zero value otherwise.

### GetEarningsOk

`func (o *PortfolioPerformancePositions) GetEarningsOk() (*float64, bool)`

GetEarningsOk returns a tuple with the Earnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEarnings

`func (o *PortfolioPerformancePositions) SetEarnings(v float64)`

SetEarnings sets Earnings field to given value.


### GetAvgEntryPrice

`func (o *PortfolioPerformancePositions) GetAvgEntryPrice() float64`

GetAvgEntryPrice returns the AvgEntryPrice field if non-nil, zero value otherwise.

### GetAvgEntryPriceOk

`func (o *PortfolioPerformancePositions) GetAvgEntryPriceOk() (*float64, bool)`

GetAvgEntryPriceOk returns a tuple with the AvgEntryPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvgEntryPrice

`func (o *PortfolioPerformancePositions) SetAvgEntryPrice(v float64)`

SetAvgEntryPrice sets AvgEntryPrice field to given value.


### GetDailyPl

`func (o *PortfolioPerformancePositions) GetDailyPl() float64`

GetDailyPl returns the DailyPl field if non-nil, zero value otherwise.

### GetDailyPlOk

`func (o *PortfolioPerformancePositions) GetDailyPlOk() (*float64, bool)`

GetDailyPlOk returns a tuple with the DailyPl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDailyPl

`func (o *PortfolioPerformancePositions) SetDailyPl(v float64)`

SetDailyPl sets DailyPl field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


