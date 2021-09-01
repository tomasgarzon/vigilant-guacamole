# CreateOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Shares** | **int32** |  | 
**Asset** | [**RelatedAssetSerializerWithAssetCategories**](RelatedAssetSerializerWithAssetCategories.md) |  | 
**Portfolio** | Pointer to **string** |  | [optional] 
**OrderType** | [**OrderTypeEnum**](OrderTypeEnum.md) |  | 
**Method** | [**CreateOrderMethodEnum**](CreateOrderMethodEnum.md) |  | 
**LimitPrice** | Pointer to **NullableFloat64** |  | [optional] 
**StopPrice** | Pointer to **NullableFloat64** |  | [optional] 
**Duration** | Pointer to [**NullableOneOfDurationEnumNullEnum**](oneOf&lt;DurationEnum,NullEnum&gt;.md) |  | [optional] 

## Methods

### NewCreateOrder

`func NewCreateOrder(shares int32, asset RelatedAssetSerializerWithAssetCategories, orderType OrderTypeEnum, method CreateOrderMethodEnum, ) *CreateOrder`

NewCreateOrder instantiates a new CreateOrder object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateOrderWithDefaults

`func NewCreateOrderWithDefaults() *CreateOrder`

NewCreateOrderWithDefaults instantiates a new CreateOrder object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetShares

`func (o *CreateOrder) GetShares() int32`

GetShares returns the Shares field if non-nil, zero value otherwise.

### GetSharesOk

`func (o *CreateOrder) GetSharesOk() (*int32, bool)`

GetSharesOk returns a tuple with the Shares field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShares

`func (o *CreateOrder) SetShares(v int32)`

SetShares sets Shares field to given value.


### GetAsset

`func (o *CreateOrder) GetAsset() RelatedAssetSerializerWithAssetCategories`

GetAsset returns the Asset field if non-nil, zero value otherwise.

### GetAssetOk

`func (o *CreateOrder) GetAssetOk() (*RelatedAssetSerializerWithAssetCategories, bool)`

GetAssetOk returns a tuple with the Asset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAsset

`func (o *CreateOrder) SetAsset(v RelatedAssetSerializerWithAssetCategories)`

SetAsset sets Asset field to given value.


### GetPortfolio

`func (o *CreateOrder) GetPortfolio() string`

GetPortfolio returns the Portfolio field if non-nil, zero value otherwise.

### GetPortfolioOk

`func (o *CreateOrder) GetPortfolioOk() (*string, bool)`

GetPortfolioOk returns a tuple with the Portfolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPortfolio

`func (o *CreateOrder) SetPortfolio(v string)`

SetPortfolio sets Portfolio field to given value.

### HasPortfolio

`func (o *CreateOrder) HasPortfolio() bool`

HasPortfolio returns a boolean if a field has been set.

### GetOrderType

`func (o *CreateOrder) GetOrderType() OrderTypeEnum`

GetOrderType returns the OrderType field if non-nil, zero value otherwise.

### GetOrderTypeOk

`func (o *CreateOrder) GetOrderTypeOk() (*OrderTypeEnum, bool)`

GetOrderTypeOk returns a tuple with the OrderType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderType

`func (o *CreateOrder) SetOrderType(v OrderTypeEnum)`

SetOrderType sets OrderType field to given value.


### GetMethod

`func (o *CreateOrder) GetMethod() CreateOrderMethodEnum`

GetMethod returns the Method field if non-nil, zero value otherwise.

### GetMethodOk

`func (o *CreateOrder) GetMethodOk() (*CreateOrderMethodEnum, bool)`

GetMethodOk returns a tuple with the Method field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMethod

`func (o *CreateOrder) SetMethod(v CreateOrderMethodEnum)`

SetMethod sets Method field to given value.


### GetLimitPrice

`func (o *CreateOrder) GetLimitPrice() float64`

GetLimitPrice returns the LimitPrice field if non-nil, zero value otherwise.

### GetLimitPriceOk

`func (o *CreateOrder) GetLimitPriceOk() (*float64, bool)`

GetLimitPriceOk returns a tuple with the LimitPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimitPrice

`func (o *CreateOrder) SetLimitPrice(v float64)`

SetLimitPrice sets LimitPrice field to given value.

### HasLimitPrice

`func (o *CreateOrder) HasLimitPrice() bool`

HasLimitPrice returns a boolean if a field has been set.

### SetLimitPriceNil

`func (o *CreateOrder) SetLimitPriceNil(b bool)`

 SetLimitPriceNil sets the value for LimitPrice to be an explicit nil

### UnsetLimitPrice
`func (o *CreateOrder) UnsetLimitPrice()`

UnsetLimitPrice ensures that no value is present for LimitPrice, not even an explicit nil
### GetStopPrice

`func (o *CreateOrder) GetStopPrice() float64`

GetStopPrice returns the StopPrice field if non-nil, zero value otherwise.

### GetStopPriceOk

`func (o *CreateOrder) GetStopPriceOk() (*float64, bool)`

GetStopPriceOk returns a tuple with the StopPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStopPrice

`func (o *CreateOrder) SetStopPrice(v float64)`

SetStopPrice sets StopPrice field to given value.

### HasStopPrice

`func (o *CreateOrder) HasStopPrice() bool`

HasStopPrice returns a boolean if a field has been set.

### SetStopPriceNil

`func (o *CreateOrder) SetStopPriceNil(b bool)`

 SetStopPriceNil sets the value for StopPrice to be an explicit nil

### UnsetStopPrice
`func (o *CreateOrder) UnsetStopPrice()`

UnsetStopPrice ensures that no value is present for StopPrice, not even an explicit nil
### GetDuration

`func (o *CreateOrder) GetDuration() OneOfDurationEnumNullEnum`

GetDuration returns the Duration field if non-nil, zero value otherwise.

### GetDurationOk

`func (o *CreateOrder) GetDurationOk() (*OneOfDurationEnumNullEnum, bool)`

GetDurationOk returns a tuple with the Duration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDuration

`func (o *CreateOrder) SetDuration(v OneOfDurationEnumNullEnum)`

SetDuration sets Duration field to given value.

### HasDuration

`func (o *CreateOrder) HasDuration() bool`

HasDuration returns a boolean if a field has been set.

### SetDurationNil

`func (o *CreateOrder) SetDurationNil(b bool)`

 SetDurationNil sets the value for Duration to be an explicit nil

### UnsetDuration
`func (o *CreateOrder) UnsetDuration()`

UnsetDuration ensures that no value is present for Duration, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


