# RelatedAssetSerializerWithAssetCategories

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**Market** | Pointer to **string** |  | [optional] 
**Isin** | **string** |  | 
**Currency** | Pointer to **string** |  | [optional] 
**Ticker** | **string** |  | 
**Name** | **string** |  | 
**ExtraData** | Pointer to **map[string]interface{}** |  | [optional] 
**Categories** | **[]string** |  | [readonly] 

## Methods

### NewRelatedAssetSerializerWithAssetCategories

`func NewRelatedAssetSerializerWithAssetCategories(uuid string, isin string, ticker string, name string, categories []string, ) *RelatedAssetSerializerWithAssetCategories`

NewRelatedAssetSerializerWithAssetCategories instantiates a new RelatedAssetSerializerWithAssetCategories object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRelatedAssetSerializerWithAssetCategoriesWithDefaults

`func NewRelatedAssetSerializerWithAssetCategoriesWithDefaults() *RelatedAssetSerializerWithAssetCategories`

NewRelatedAssetSerializerWithAssetCategoriesWithDefaults instantiates a new RelatedAssetSerializerWithAssetCategories object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *RelatedAssetSerializerWithAssetCategories) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *RelatedAssetSerializerWithAssetCategories) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *RelatedAssetSerializerWithAssetCategories) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetMarket

`func (o *RelatedAssetSerializerWithAssetCategories) GetMarket() string`

GetMarket returns the Market field if non-nil, zero value otherwise.

### GetMarketOk

`func (o *RelatedAssetSerializerWithAssetCategories) GetMarketOk() (*string, bool)`

GetMarketOk returns a tuple with the Market field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarket

`func (o *RelatedAssetSerializerWithAssetCategories) SetMarket(v string)`

SetMarket sets Market field to given value.

### HasMarket

`func (o *RelatedAssetSerializerWithAssetCategories) HasMarket() bool`

HasMarket returns a boolean if a field has been set.

### GetIsin

`func (o *RelatedAssetSerializerWithAssetCategories) GetIsin() string`

GetIsin returns the Isin field if non-nil, zero value otherwise.

### GetIsinOk

`func (o *RelatedAssetSerializerWithAssetCategories) GetIsinOk() (*string, bool)`

GetIsinOk returns a tuple with the Isin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsin

`func (o *RelatedAssetSerializerWithAssetCategories) SetIsin(v string)`

SetIsin sets Isin field to given value.


### GetCurrency

`func (o *RelatedAssetSerializerWithAssetCategories) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *RelatedAssetSerializerWithAssetCategories) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *RelatedAssetSerializerWithAssetCategories) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *RelatedAssetSerializerWithAssetCategories) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetTicker

`func (o *RelatedAssetSerializerWithAssetCategories) GetTicker() string`

GetTicker returns the Ticker field if non-nil, zero value otherwise.

### GetTickerOk

`func (o *RelatedAssetSerializerWithAssetCategories) GetTickerOk() (*string, bool)`

GetTickerOk returns a tuple with the Ticker field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTicker

`func (o *RelatedAssetSerializerWithAssetCategories) SetTicker(v string)`

SetTicker sets Ticker field to given value.


### GetName

`func (o *RelatedAssetSerializerWithAssetCategories) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RelatedAssetSerializerWithAssetCategories) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RelatedAssetSerializerWithAssetCategories) SetName(v string)`

SetName sets Name field to given value.


### GetExtraData

`func (o *RelatedAssetSerializerWithAssetCategories) GetExtraData() map[string]interface{}`

GetExtraData returns the ExtraData field if non-nil, zero value otherwise.

### GetExtraDataOk

`func (o *RelatedAssetSerializerWithAssetCategories) GetExtraDataOk() (*map[string]interface{}, bool)`

GetExtraDataOk returns a tuple with the ExtraData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraData

`func (o *RelatedAssetSerializerWithAssetCategories) SetExtraData(v map[string]interface{})`

SetExtraData sets ExtraData field to given value.

### HasExtraData

`func (o *RelatedAssetSerializerWithAssetCategories) HasExtraData() bool`

HasExtraData returns a boolean if a field has been set.

### SetExtraDataNil

`func (o *RelatedAssetSerializerWithAssetCategories) SetExtraDataNil(b bool)`

 SetExtraDataNil sets the value for ExtraData to be an explicit nil

### UnsetExtraData
`func (o *RelatedAssetSerializerWithAssetCategories) UnsetExtraData()`

UnsetExtraData ensures that no value is present for ExtraData, not even an explicit nil
### GetCategories

`func (o *RelatedAssetSerializerWithAssetCategories) GetCategories() []string`

GetCategories returns the Categories field if non-nil, zero value otherwise.

### GetCategoriesOk

`func (o *RelatedAssetSerializerWithAssetCategories) GetCategoriesOk() (*[]string, bool)`

GetCategoriesOk returns a tuple with the Categories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategories

`func (o *RelatedAssetSerializerWithAssetCategories) SetCategories(v []string)`

SetCategories sets Categories field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


