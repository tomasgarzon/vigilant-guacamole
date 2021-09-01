# Tos

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**Version** | **string** |  | 
**Content** | **string** |  | 
**Published** | Pointer to **string** |  | [optional] 
**PreviousTosUuid** | **string** |  | [readonly] 
**NextTosUuid** | **string** |  | [readonly] 

## Methods

### NewTos

`func NewTos(uuid string, version string, content string, previousTosUuid string, nextTosUuid string, ) *Tos`

NewTos instantiates a new Tos object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTosWithDefaults

`func NewTosWithDefaults() *Tos`

NewTosWithDefaults instantiates a new Tos object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *Tos) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *Tos) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *Tos) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetVersion

`func (o *Tos) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *Tos) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *Tos) SetVersion(v string)`

SetVersion sets Version field to given value.


### GetContent

`func (o *Tos) GetContent() string`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *Tos) GetContentOk() (*string, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *Tos) SetContent(v string)`

SetContent sets Content field to given value.


### GetPublished

`func (o *Tos) GetPublished() string`

GetPublished returns the Published field if non-nil, zero value otherwise.

### GetPublishedOk

`func (o *Tos) GetPublishedOk() (*string, bool)`

GetPublishedOk returns a tuple with the Published field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublished

`func (o *Tos) SetPublished(v string)`

SetPublished sets Published field to given value.

### HasPublished

`func (o *Tos) HasPublished() bool`

HasPublished returns a boolean if a field has been set.

### GetPreviousTosUuid

`func (o *Tos) GetPreviousTosUuid() string`

GetPreviousTosUuid returns the PreviousTosUuid field if non-nil, zero value otherwise.

### GetPreviousTosUuidOk

`func (o *Tos) GetPreviousTosUuidOk() (*string, bool)`

GetPreviousTosUuidOk returns a tuple with the PreviousTosUuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviousTosUuid

`func (o *Tos) SetPreviousTosUuid(v string)`

SetPreviousTosUuid sets PreviousTosUuid field to given value.


### GetNextTosUuid

`func (o *Tos) GetNextTosUuid() string`

GetNextTosUuid returns the NextTosUuid field if non-nil, zero value otherwise.

### GetNextTosUuidOk

`func (o *Tos) GetNextTosUuidOk() (*string, bool)`

GetNextTosUuidOk returns a tuple with the NextTosUuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextTosUuid

`func (o *Tos) SetNextTosUuid(v string)`

SetNextTosUuid sets NextTosUuid field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


