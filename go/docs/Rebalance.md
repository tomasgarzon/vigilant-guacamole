# Rebalance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**Status** | [**RebalanceStatusEnum**](RebalanceStatusEnum.md) |  | [readonly] 
**Reason** | **string** | Cancelled reason | [readonly] 
**BrokerOrders** | **[]string** |  | [readonly] 

## Methods

### NewRebalance

`func NewRebalance(uuid string, status RebalanceStatusEnum, reason string, brokerOrders []string, ) *Rebalance`

NewRebalance instantiates a new Rebalance object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRebalanceWithDefaults

`func NewRebalanceWithDefaults() *Rebalance`

NewRebalanceWithDefaults instantiates a new Rebalance object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *Rebalance) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *Rebalance) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *Rebalance) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetStatus

`func (o *Rebalance) GetStatus() RebalanceStatusEnum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Rebalance) GetStatusOk() (*RebalanceStatusEnum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Rebalance) SetStatus(v RebalanceStatusEnum)`

SetStatus sets Status field to given value.


### GetReason

`func (o *Rebalance) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *Rebalance) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *Rebalance) SetReason(v string)`

SetReason sets Reason field to given value.


### GetBrokerOrders

`func (o *Rebalance) GetBrokerOrders() []string`

GetBrokerOrders returns the BrokerOrders field if non-nil, zero value otherwise.

### GetBrokerOrdersOk

`func (o *Rebalance) GetBrokerOrdersOk() (*[]string, bool)`

GetBrokerOrdersOk returns a tuple with the BrokerOrders field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBrokerOrders

`func (o *Rebalance) SetBrokerOrders(v []string)`

SetBrokerOrders sets BrokerOrders field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


