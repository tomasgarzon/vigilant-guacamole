# RelatedAssetSerializerWithPermission

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

## Methods

### NewRelatedAssetSerializerWithPermission

`func NewRelatedAssetSerializerWithPermission(uuid string, isin string, ticker string, name string, ) *RelatedAssetSerializerWithPermission`

NewRelatedAssetSerializerWithPermission instantiates a new RelatedAssetSerializerWithPermission object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRelatedAssetSerializerWithPermissionWithDefaults

`func NewRelatedAssetSerializerWithPermissionWithDefaults() *RelatedAssetSerializerWithPermission`

NewRelatedAssetSerializerWithPermissionWithDefaults instantiates a new RelatedAssetSerializerWithPermission object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *RelatedAssetSerializerWithPermission) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *RelatedAssetSerializerWithPermission) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *RelatedAssetSerializerWithPermission) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetMarket

`func (o *RelatedAssetSerializerWithPermission) GetMarket() string`

GetMarket returns the Market field if non-nil, zero value otherwise.

### GetMarketOk

`func (o *RelatedAssetSerializerWithPermission) GetMarketOk() (*string, bool)`

GetMarketOk returns a tuple with the Market field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarket

`func (o *RelatedAssetSerializerWithPermission) SetMarket(v string)`

SetMarket sets Market field to given value.

### HasMarket

`func (o *RelatedAssetSerializerWithPermission) HasMarket() bool`

HasMarket returns a boolean if a field has been set.

### GetIsin

`func (o *RelatedAssetSerializerWithPermission) GetIsin() string`

GetIsin returns the Isin field if non-nil, zero value otherwise.

### GetIsinOk

`func (o *RelatedAssetSerializerWithPermission) GetIsinOk() (*string, bool)`

GetIsinOk returns a tuple with the Isin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsin

`func (o *RelatedAssetSerializerWithPermission) SetIsin(v string)`

SetIsin sets Isin field to given value.


### GetCurrency

`func (o *RelatedAssetSerializerWithPermission) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *RelatedAssetSerializerWithPermission) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *RelatedAssetSerializerWithPermission) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *RelatedAssetSerializerWithPermission) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetTicker

`func (o *RelatedAssetSerializerWithPermission) GetTicker() string`

GetTicker returns the Ticker field if non-nil, zero value otherwise.

### GetTickerOk

`func (o *RelatedAssetSerializerWithPermission) GetTickerOk() (*string, bool)`

GetTickerOk returns a tuple with the Ticker field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTicker

`func (o *RelatedAssetSerializerWithPermission) SetTicker(v string)`

SetTicker sets Ticker field to given value.


### GetName

`func (o *RelatedAssetSerializerWithPermission) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RelatedAssetSerializerWithPermission) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RelatedAssetSerializerWithPermission) SetName(v string)`

SetName sets Name field to given value.


### GetExtraData

`func (o *RelatedAssetSerializerWithPermission) GetExtraData() map[string]interface{}`

GetExtraData returns the ExtraData field if non-nil, zero value otherwise.

### GetExtraDataOk

`func (o *RelatedAssetSerializerWithPermission) GetExtraDataOk() (*map[string]interface{}, bool)`

GetExtraDataOk returns a tuple with the ExtraData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraData

`func (o *RelatedAssetSerializerWithPermission) SetExtraData(v map[string]interface{})`

SetExtraData sets ExtraData field to given value.

### HasExtraData

`func (o *RelatedAssetSerializerWithPermission) HasExtraData() bool`

HasExtraData returns a boolean if a field has been set.

### SetExtraDataNil

`func (o *RelatedAssetSerializerWithPermission) SetExtraDataNil(b bool)`

 SetExtraDataNil sets the value for ExtraData to be an explicit nil

### UnsetExtraData
`func (o *RelatedAssetSerializerWithPermission) UnsetExtraData()`

UnsetExtraData ensures that no value is present for ExtraData, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


