# PortalSettingValueList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | [readonly] 
**Uuid** | **string** |  | [readonly] 
**Created** | **time.Time** |  | [readonly] 
**Updated** | **time.Time** |  | [readonly] 
**Value** | **string** |  | 
**Portal** | **int32** |  | 
**Key** | **int32** |  | 

## Methods

### NewPortalSettingValueList

`func NewPortalSettingValueList(id int32, uuid string, created time.Time, updated time.Time, value string, portal int32, key int32, ) *PortalSettingValueList`

NewPortalSettingValueList instantiates a new PortalSettingValueList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPortalSettingValueListWithDefaults

`func NewPortalSettingValueListWithDefaults() *PortalSettingValueList`

NewPortalSettingValueListWithDefaults instantiates a new PortalSettingValueList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *PortalSettingValueList) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PortalSettingValueList) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PortalSettingValueList) SetId(v int32)`

SetId sets Id field to given value.


### GetUuid

`func (o *PortalSettingValueList) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *PortalSettingValueList) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *PortalSettingValueList) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetCreated

`func (o *PortalSettingValueList) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *PortalSettingValueList) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *PortalSettingValueList) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetUpdated

`func (o *PortalSettingValueList) GetUpdated() time.Time`

GetUpdated returns the Updated field if non-nil, zero value otherwise.

### GetUpdatedOk

`func (o *PortalSettingValueList) GetUpdatedOk() (*time.Time, bool)`

GetUpdatedOk returns a tuple with the Updated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdated

`func (o *PortalSettingValueList) SetUpdated(v time.Time)`

SetUpdated sets Updated field to given value.


### GetValue

`func (o *PortalSettingValueList) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *PortalSettingValueList) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *PortalSettingValueList) SetValue(v string)`

SetValue sets Value field to given value.


### GetPortal

`func (o *PortalSettingValueList) GetPortal() int32`

GetPortal returns the Portal field if non-nil, zero value otherwise.

### GetPortalOk

`func (o *PortalSettingValueList) GetPortalOk() (*int32, bool)`

GetPortalOk returns a tuple with the Portal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPortal

`func (o *PortalSettingValueList) SetPortal(v int32)`

SetPortal sets Portal field to given value.


### GetKey

`func (o *PortalSettingValueList) GetKey() int32`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *PortalSettingValueList) GetKeyOk() (*int32, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *PortalSettingValueList) SetKey(v int32)`

SetKey sets Key field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


