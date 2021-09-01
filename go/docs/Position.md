# Position

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Asset** | [**RelatedAssetSerializerWithAssetCategories**](RelatedAssetSerializerWithAssetCategories.md) |  | [readonly] 
**Shares** | **float64** |  | 
**Price** | **float64** |  | 
**Value** | **float64** |  | 
**Weight** | **float64** |  | [readonly] 
**FxRateAccount** | **float64** |  | [readonly] 
**AssetCurrencyValue** | **float64** |  | [readonly] 

## Methods

### NewPosition

`func NewPosition(asset RelatedAssetSerializerWithAssetCategories, shares float64, price float64, value float64, weight float64, fxRateAccount float64, assetCurrencyValue float64, ) *Position`

NewPosition instantiates a new Position object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPositionWithDefaults

`func NewPositionWithDefaults() *Position`

NewPositionWithDefaults instantiates a new Position object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAsset

`func (o *Position) GetAsset() RelatedAssetSerializerWithAssetCategories`

GetAsset returns the Asset field if non-nil, zero value otherwise.

### GetAssetOk

`func (o *Position) GetAssetOk() (*RelatedAssetSerializerWithAssetCategories, bool)`

GetAssetOk returns a tuple with the Asset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAsset

`func (o *Position) SetAsset(v RelatedAssetSerializerWithAssetCategories)`

SetAsset sets Asset field to given value.


### GetShares

`func (o *Position) GetShares() float64`

GetShares returns the Shares field if non-nil, zero value otherwise.

### GetSharesOk

`func (o *Position) GetSharesOk() (*float64, bool)`

GetSharesOk returns a tuple with the Shares field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShares

`func (o *Position) SetShares(v float64)`

SetShares sets Shares field to given value.


### GetPrice

`func (o *Position) GetPrice() float64`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *Position) GetPriceOk() (*float64, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *Position) SetPrice(v float64)`

SetPrice sets Price field to given value.


### GetValue

`func (o *Position) GetValue() float64`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Position) GetValueOk() (*float64, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Position) SetValue(v float64)`

SetValue sets Value field to given value.


### GetWeight

`func (o *Position) GetWeight() float64`

GetWeight returns the Weight field if non-nil, zero value otherwise.

### GetWeightOk

`func (o *Position) GetWeightOk() (*float64, bool)`

GetWeightOk returns a tuple with the Weight field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWeight

`func (o *Position) SetWeight(v float64)`

SetWeight sets Weight field to given value.


### GetFxRateAccount

`func (o *Position) GetFxRateAccount() float64`

GetFxRateAccount returns the FxRateAccount field if non-nil, zero value otherwise.

### GetFxRateAccountOk

`func (o *Position) GetFxRateAccountOk() (*float64, bool)`

GetFxRateAccountOk returns a tuple with the FxRateAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFxRateAccount

`func (o *Position) SetFxRateAccount(v float64)`

SetFxRateAccount sets FxRateAccount field to given value.


### GetAssetCurrencyValue

`func (o *Position) GetAssetCurrencyValue() float64`

GetAssetCurrencyValue returns the AssetCurrencyValue field if non-nil, zero value otherwise.

### GetAssetCurrencyValueOk

`func (o *Position) GetAssetCurrencyValueOk() (*float64, bool)`

GetAssetCurrencyValueOk returns a tuple with the AssetCurrencyValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssetCurrencyValue

`func (o *Position) SetAssetCurrencyValue(v float64)`

SetAssetCurrencyValue sets AssetCurrencyValue field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


