# Watchlist

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**Name** | **string** |  | 
**Assets** | [**[]RelatedAssetSerializerWithPermission**](RelatedAssetSerializerWithPermission.md) |  | 

## Methods

### NewWatchlist

`func NewWatchlist(uuid string, name string, assets []RelatedAssetSerializerWithPermission, ) *Watchlist`

NewWatchlist instantiates a new Watchlist object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWatchlistWithDefaults

`func NewWatchlistWithDefaults() *Watchlist`

NewWatchlistWithDefaults instantiates a new Watchlist object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *Watchlist) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *Watchlist) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *Watchlist) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetName

`func (o *Watchlist) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Watchlist) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Watchlist) SetName(v string)`

SetName sets Name field to given value.


### GetAssets

`func (o *Watchlist) GetAssets() []RelatedAssetSerializerWithPermission`

GetAssets returns the Assets field if non-nil, zero value otherwise.

### GetAssetsOk

`func (o *Watchlist) GetAssetsOk() (*[]RelatedAssetSerializerWithPermission, bool)`

GetAssetsOk returns a tuple with the Assets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssets

`func (o *Watchlist) SetAssets(v []RelatedAssetSerializerWithPermission)`

SetAssets sets Assets field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


