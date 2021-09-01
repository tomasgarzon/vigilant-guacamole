# FeedActivityList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**Created** | **time.Time** |  | [readonly] 
**ActivityType** | [**ActivityTypeEnum**](ActivityTypeEnum.md) |  | [readonly] 
**ActivityData** | **map[string]interface{}** |  | [readonly] 

## Methods

### NewFeedActivityList

`func NewFeedActivityList(uuid string, created time.Time, activityType ActivityTypeEnum, activityData map[string]interface{}, ) *FeedActivityList`

NewFeedActivityList instantiates a new FeedActivityList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFeedActivityListWithDefaults

`func NewFeedActivityListWithDefaults() *FeedActivityList`

NewFeedActivityListWithDefaults instantiates a new FeedActivityList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *FeedActivityList) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *FeedActivityList) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *FeedActivityList) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetCreated

`func (o *FeedActivityList) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *FeedActivityList) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *FeedActivityList) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetActivityType

`func (o *FeedActivityList) GetActivityType() ActivityTypeEnum`

GetActivityType returns the ActivityType field if non-nil, zero value otherwise.

### GetActivityTypeOk

`func (o *FeedActivityList) GetActivityTypeOk() (*ActivityTypeEnum, bool)`

GetActivityTypeOk returns a tuple with the ActivityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityType

`func (o *FeedActivityList) SetActivityType(v ActivityTypeEnum)`

SetActivityType sets ActivityType field to given value.


### GetActivityData

`func (o *FeedActivityList) GetActivityData() map[string]interface{}`

GetActivityData returns the ActivityData field if non-nil, zero value otherwise.

### GetActivityDataOk

`func (o *FeedActivityList) GetActivityDataOk() (*map[string]interface{}, bool)`

GetActivityDataOk returns a tuple with the ActivityData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityData

`func (o *FeedActivityList) SetActivityData(v map[string]interface{})`

SetActivityData sets ActivityData field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


