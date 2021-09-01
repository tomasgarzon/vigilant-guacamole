# Message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**User** | **string** |  | [readonly] 
**ReadDate** | **time.Time** |  | [readonly] 
**Content** | Pointer to **string** |  | [optional] 
**Created** | **time.Time** |  | [readonly] 
**Attachments** | [**[]Attachment**](Attachment.md) |  | [readonly] 
**Uuid** | **string** |  | [readonly] 

## Methods

### NewMessage

`func NewMessage(user string, readDate time.Time, created time.Time, attachments []Attachment, uuid string, ) *Message`

NewMessage instantiates a new Message object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMessageWithDefaults

`func NewMessageWithDefaults() *Message`

NewMessageWithDefaults instantiates a new Message object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUser

`func (o *Message) GetUser() string`

GetUser returns the User field if non-nil, zero value otherwise.

### GetUserOk

`func (o *Message) GetUserOk() (*string, bool)`

GetUserOk returns a tuple with the User field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUser

`func (o *Message) SetUser(v string)`

SetUser sets User field to given value.


### GetReadDate

`func (o *Message) GetReadDate() time.Time`

GetReadDate returns the ReadDate field if non-nil, zero value otherwise.

### GetReadDateOk

`func (o *Message) GetReadDateOk() (*time.Time, bool)`

GetReadDateOk returns a tuple with the ReadDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReadDate

`func (o *Message) SetReadDate(v time.Time)`

SetReadDate sets ReadDate field to given value.


### GetContent

`func (o *Message) GetContent() string`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *Message) GetContentOk() (*string, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *Message) SetContent(v string)`

SetContent sets Content field to given value.

### HasContent

`func (o *Message) HasContent() bool`

HasContent returns a boolean if a field has been set.

### GetCreated

`func (o *Message) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Message) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Message) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetAttachments

`func (o *Message) GetAttachments() []Attachment`

GetAttachments returns the Attachments field if non-nil, zero value otherwise.

### GetAttachmentsOk

`func (o *Message) GetAttachmentsOk() (*[]Attachment, bool)`

GetAttachmentsOk returns a tuple with the Attachments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachments

`func (o *Message) SetAttachments(v []Attachment)`

SetAttachments sets Attachments field to given value.


### GetUuid

`func (o *Message) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *Message) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *Message) SetUuid(v string)`

SetUuid sets Uuid field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


