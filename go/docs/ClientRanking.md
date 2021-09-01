# ClientRanking

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TopPerforming** | [**[]ClientEmbedRanking**](ClientEmbedRanking.md) |  | 
**BottomPerforming** | [**[]ClientEmbedRanking**](ClientEmbedRanking.md) |  | 

## Methods

### NewClientRanking

`func NewClientRanking(topPerforming []ClientEmbedRanking, bottomPerforming []ClientEmbedRanking, ) *ClientRanking`

NewClientRanking instantiates a new ClientRanking object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewClientRankingWithDefaults

`func NewClientRankingWithDefaults() *ClientRanking`

NewClientRankingWithDefaults instantiates a new ClientRanking object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTopPerforming

`func (o *ClientRanking) GetTopPerforming() []ClientEmbedRanking`

GetTopPerforming returns the TopPerforming field if non-nil, zero value otherwise.

### GetTopPerformingOk

`func (o *ClientRanking) GetTopPerformingOk() (*[]ClientEmbedRanking, bool)`

GetTopPerformingOk returns a tuple with the TopPerforming field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTopPerforming

`func (o *ClientRanking) SetTopPerforming(v []ClientEmbedRanking)`

SetTopPerforming sets TopPerforming field to given value.


### GetBottomPerforming

`func (o *ClientRanking) GetBottomPerforming() []ClientEmbedRanking`

GetBottomPerforming returns the BottomPerforming field if non-nil, zero value otherwise.

### GetBottomPerformingOk

`func (o *ClientRanking) GetBottomPerformingOk() (*[]ClientEmbedRanking, bool)`

GetBottomPerformingOk returns a tuple with the BottomPerforming field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBottomPerforming

`func (o *ClientRanking) SetBottomPerforming(v []ClientEmbedRanking)`

SetBottomPerforming sets BottomPerforming field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


