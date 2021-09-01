# ConversationList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**Created** | **time.Time** |  | [readonly] 
**Subject** | **string** |  | 
**LastMessage** | [**Message**](Message.md) |  | 
**Unreads** | **int32** |  | [readonly] 

## Methods

### NewConversationList

`func NewConversationList(uuid string, created time.Time, subject string, lastMessage Message, unreads int32, ) *ConversationList`

NewConversationList instantiates a new ConversationList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConversationListWithDefaults

`func NewConversationListWithDefaults() *ConversationList`

NewConversationListWithDefaults instantiates a new ConversationList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *ConversationList) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *ConversationList) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *ConversationList) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetCreated

`func (o *ConversationList) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *ConversationList) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *ConversationList) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetSubject

`func (o *ConversationList) GetSubject() string`

GetSubject returns the Subject field if non-nil, zero value otherwise.

### GetSubjectOk

`func (o *ConversationList) GetSubjectOk() (*string, bool)`

GetSubjectOk returns a tuple with the Subject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubject

`func (o *ConversationList) SetSubject(v string)`

SetSubject sets Subject field to given value.


### GetLastMessage

`func (o *ConversationList) GetLastMessage() Message`

GetLastMessage returns the LastMessage field if non-nil, zero value otherwise.

### GetLastMessageOk

`func (o *ConversationList) GetLastMessageOk() (*Message, bool)`

GetLastMessageOk returns a tuple with the LastMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastMessage

`func (o *ConversationList) SetLastMessage(v Message)`

SetLastMessage sets LastMessage field to given value.


### GetUnreads

`func (o *ConversationList) GetUnreads() int32`

GetUnreads returns the Unreads field if non-nil, zero value otherwise.

### GetUnreadsOk

`func (o *ConversationList) GetUnreadsOk() (*int32, bool)`

GetUnreadsOk returns a tuple with the Unreads field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnreads

`func (o *ConversationList) SetUnreads(v int32)`

SetUnreads sets Unreads field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


