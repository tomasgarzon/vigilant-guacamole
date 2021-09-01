# ConversationCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**Portal** | **int32** |  | [readonly] 
**Created** | **time.Time** |  | [readonly] 
**Subject** | **string** |  | 
**Messages** | Pointer to [**NullableMessage**](Message.md) |  | [optional] 

## Methods

### NewConversationCreate

`func NewConversationCreate(uuid string, portal int32, created time.Time, subject string, ) *ConversationCreate`

NewConversationCreate instantiates a new ConversationCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConversationCreateWithDefaults

`func NewConversationCreateWithDefaults() *ConversationCreate`

NewConversationCreateWithDefaults instantiates a new ConversationCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *ConversationCreate) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *ConversationCreate) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *ConversationCreate) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetPortal

`func (o *ConversationCreate) GetPortal() int32`

GetPortal returns the Portal field if non-nil, zero value otherwise.

### GetPortalOk

`func (o *ConversationCreate) GetPortalOk() (*int32, bool)`

GetPortalOk returns a tuple with the Portal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPortal

`func (o *ConversationCreate) SetPortal(v int32)`

SetPortal sets Portal field to given value.


### GetCreated

`func (o *ConversationCreate) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *ConversationCreate) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *ConversationCreate) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetSubject

`func (o *ConversationCreate) GetSubject() string`

GetSubject returns the Subject field if non-nil, zero value otherwise.

### GetSubjectOk

`func (o *ConversationCreate) GetSubjectOk() (*string, bool)`

GetSubjectOk returns a tuple with the Subject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubject

`func (o *ConversationCreate) SetSubject(v string)`

SetSubject sets Subject field to given value.


### GetMessages

`func (o *ConversationCreate) GetMessages() Message`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *ConversationCreate) GetMessagesOk() (*Message, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *ConversationCreate) SetMessages(v Message)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *ConversationCreate) HasMessages() bool`

HasMessages returns a boolean if a field has been set.

### SetMessagesNil

`func (o *ConversationCreate) SetMessagesNil(b bool)`

 SetMessagesNil sets the value for Messages to be an explicit nil

### UnsetMessages
`func (o *ConversationCreate) UnsetMessages()`

UnsetMessages ensures that no value is present for Messages, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


