# AssetList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**Name** | **string** |  | [readonly] 
**Isin** | **string** |  | [readonly] 
**Ticker** | **string** |  | [readonly] 
**Status** | [**Status6f6Enum**](Status6f6Enum.md) |  | [readonly] 
**Market** | **string** |  | [readonly] 
**Currency** | **string** |  | 
**ExtraData** | **map[string]interface{}** |  | [readonly] 
**Categories** | [**[]AssetCategory**](AssetCategory.md) |  | 
**AssetType** | [**AssetTypeEnum**](AssetTypeEnum.md) |  | [readonly] 

## Methods

### NewAssetList

`func NewAssetList(uuid string, name string, isin string, ticker string, status Status6f6Enum, market string, currency string, extraData map[string]interface{}, categories []AssetCategory, assetType AssetTypeEnum, ) *AssetList`

NewAssetList instantiates a new AssetList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAssetListWithDefaults

`func NewAssetListWithDefaults() *AssetList`

NewAssetListWithDefaults instantiates a new AssetList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *AssetList) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *AssetList) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *AssetList) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetName

`func (o *AssetList) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AssetList) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AssetList) SetName(v string)`

SetName sets Name field to given value.


### GetIsin

`func (o *AssetList) GetIsin() string`

GetIsin returns the Isin field if non-nil, zero value otherwise.

### GetIsinOk

`func (o *AssetList) GetIsinOk() (*string, bool)`

GetIsinOk returns a tuple with the Isin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsin

`func (o *AssetList) SetIsin(v string)`

SetIsin sets Isin field to given value.


### GetTicker

`func (o *AssetList) GetTicker() string`

GetTicker returns the Ticker field if non-nil, zero value otherwise.

### GetTickerOk

`func (o *AssetList) GetTickerOk() (*string, bool)`

GetTickerOk returns a tuple with the Ticker field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTicker

`func (o *AssetList) SetTicker(v string)`

SetTicker sets Ticker field to given value.


### GetStatus

`func (o *AssetList) GetStatus() Status6f6Enum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *AssetList) GetStatusOk() (*Status6f6Enum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *AssetList) SetStatus(v Status6f6Enum)`

SetStatus sets Status field to given value.


### GetMarket

`func (o *AssetList) GetMarket() string`

GetMarket returns the Market field if non-nil, zero value otherwise.

### GetMarketOk

`func (o *AssetList) GetMarketOk() (*string, bool)`

GetMarketOk returns a tuple with the Market field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarket

`func (o *AssetList) SetMarket(v string)`

SetMarket sets Market field to given value.


### GetCurrency

`func (o *AssetList) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *AssetList) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *AssetList) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetExtraData

`func (o *AssetList) GetExtraData() map[string]interface{}`

GetExtraData returns the ExtraData field if non-nil, zero value otherwise.

### GetExtraDataOk

`func (o *AssetList) GetExtraDataOk() (*map[string]interface{}, bool)`

GetExtraDataOk returns a tuple with the ExtraData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraData

`func (o *AssetList) SetExtraData(v map[string]interface{})`

SetExtraData sets ExtraData field to given value.


### GetCategories

`func (o *AssetList) GetCategories() []AssetCategory`

GetCategories returns the Categories field if non-nil, zero value otherwise.

### GetCategoriesOk

`func (o *AssetList) GetCategoriesOk() (*[]AssetCategory, bool)`

GetCategoriesOk returns a tuple with the Categories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategories

`func (o *AssetList) SetCategories(v []AssetCategory)`

SetCategories sets Categories field to given value.


### GetAssetType

`func (o *AssetList) GetAssetType() AssetTypeEnum`

GetAssetType returns the AssetType field if non-nil, zero value otherwise.

### GetAssetTypeOk

`func (o *AssetList) GetAssetTypeOk() (*AssetTypeEnum, bool)`

GetAssetTypeOk returns a tuple with the AssetType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssetType

`func (o *AssetList) SetAssetType(v AssetTypeEnum)`

SetAssetType sets AssetType field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


