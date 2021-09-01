# AssetDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**Name** | **string** |  | 
**Isin** | **string** |  | 
**Ticker** | **string** |  | 
**Status** | Pointer to [**Status6f6Enum**](Status6f6Enum.md) |  | [optional] 
**Market** | **string** |  | [readonly] 
**Currency** | **string** |  | 
**ExtraData** | Pointer to **map[string]interface{}** |  | [optional] 
**Categories** | [**[]AssetCategory**](AssetCategory.md) |  | 
**AssetType** | Pointer to [**AssetTypeEnum**](AssetTypeEnum.md) |  | [optional] 
**ExpenseRatio** | Pointer to **float32** | This field determines the administrative and operational costs associated to certain types of assets like ETFs or mutual funds. | [optional] 

## Methods

### NewAssetDetail

`func NewAssetDetail(uuid string, name string, isin string, ticker string, market string, currency string, categories []AssetCategory, ) *AssetDetail`

NewAssetDetail instantiates a new AssetDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAssetDetailWithDefaults

`func NewAssetDetailWithDefaults() *AssetDetail`

NewAssetDetailWithDefaults instantiates a new AssetDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *AssetDetail) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *AssetDetail) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *AssetDetail) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetName

`func (o *AssetDetail) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AssetDetail) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AssetDetail) SetName(v string)`

SetName sets Name field to given value.


### GetIsin

`func (o *AssetDetail) GetIsin() string`

GetIsin returns the Isin field if non-nil, zero value otherwise.

### GetIsinOk

`func (o *AssetDetail) GetIsinOk() (*string, bool)`

GetIsinOk returns a tuple with the Isin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsin

`func (o *AssetDetail) SetIsin(v string)`

SetIsin sets Isin field to given value.


### GetTicker

`func (o *AssetDetail) GetTicker() string`

GetTicker returns the Ticker field if non-nil, zero value otherwise.

### GetTickerOk

`func (o *AssetDetail) GetTickerOk() (*string, bool)`

GetTickerOk returns a tuple with the Ticker field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTicker

`func (o *AssetDetail) SetTicker(v string)`

SetTicker sets Ticker field to given value.


### GetStatus

`func (o *AssetDetail) GetStatus() Status6f6Enum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *AssetDetail) GetStatusOk() (*Status6f6Enum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *AssetDetail) SetStatus(v Status6f6Enum)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *AssetDetail) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetMarket

`func (o *AssetDetail) GetMarket() string`

GetMarket returns the Market field if non-nil, zero value otherwise.

### GetMarketOk

`func (o *AssetDetail) GetMarketOk() (*string, bool)`

GetMarketOk returns a tuple with the Market field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarket

`func (o *AssetDetail) SetMarket(v string)`

SetMarket sets Market field to given value.


### GetCurrency

`func (o *AssetDetail) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *AssetDetail) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *AssetDetail) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetExtraData

`func (o *AssetDetail) GetExtraData() map[string]interface{}`

GetExtraData returns the ExtraData field if non-nil, zero value otherwise.

### GetExtraDataOk

`func (o *AssetDetail) GetExtraDataOk() (*map[string]interface{}, bool)`

GetExtraDataOk returns a tuple with the ExtraData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraData

`func (o *AssetDetail) SetExtraData(v map[string]interface{})`

SetExtraData sets ExtraData field to given value.

### HasExtraData

`func (o *AssetDetail) HasExtraData() bool`

HasExtraData returns a boolean if a field has been set.

### SetExtraDataNil

`func (o *AssetDetail) SetExtraDataNil(b bool)`

 SetExtraDataNil sets the value for ExtraData to be an explicit nil

### UnsetExtraData
`func (o *AssetDetail) UnsetExtraData()`

UnsetExtraData ensures that no value is present for ExtraData, not even an explicit nil
### GetCategories

`func (o *AssetDetail) GetCategories() []AssetCategory`

GetCategories returns the Categories field if non-nil, zero value otherwise.

### GetCategoriesOk

`func (o *AssetDetail) GetCategoriesOk() (*[]AssetCategory, bool)`

GetCategoriesOk returns a tuple with the Categories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategories

`func (o *AssetDetail) SetCategories(v []AssetCategory)`

SetCategories sets Categories field to given value.


### GetAssetType

`func (o *AssetDetail) GetAssetType() AssetTypeEnum`

GetAssetType returns the AssetType field if non-nil, zero value otherwise.

### GetAssetTypeOk

`func (o *AssetDetail) GetAssetTypeOk() (*AssetTypeEnum, bool)`

GetAssetTypeOk returns a tuple with the AssetType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssetType

`func (o *AssetDetail) SetAssetType(v AssetTypeEnum)`

SetAssetType sets AssetType field to given value.

### HasAssetType

`func (o *AssetDetail) HasAssetType() bool`

HasAssetType returns a boolean if a field has been set.

### GetExpenseRatio

`func (o *AssetDetail) GetExpenseRatio() float32`

GetExpenseRatio returns the ExpenseRatio field if non-nil, zero value otherwise.

### GetExpenseRatioOk

`func (o *AssetDetail) GetExpenseRatioOk() (*float32, bool)`

GetExpenseRatioOk returns a tuple with the ExpenseRatio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpenseRatio

`func (o *AssetDetail) SetExpenseRatio(v float32)`

SetExpenseRatio sets ExpenseRatio field to given value.

### HasExpenseRatio

`func (o *AssetDetail) HasExpenseRatio() bool`

HasExpenseRatio returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


