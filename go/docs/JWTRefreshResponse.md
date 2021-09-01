# JWTRefreshResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Access** | **string** |  | 
**Refresh** | **string** |  | 
**Status** | **string** |  | 

## Methods

### NewJWTRefreshResponse

`func NewJWTRefreshResponse(access string, refresh string, status string, ) *JWTRefreshResponse`

NewJWTRefreshResponse instantiates a new JWTRefreshResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJWTRefreshResponseWithDefaults

`func NewJWTRefreshResponseWithDefaults() *JWTRefreshResponse`

NewJWTRefreshResponseWithDefaults instantiates a new JWTRefreshResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccess

`func (o *JWTRefreshResponse) GetAccess() string`

GetAccess returns the Access field if non-nil, zero value otherwise.

### GetAccessOk

`func (o *JWTRefreshResponse) GetAccessOk() (*string, bool)`

GetAccessOk returns a tuple with the Access field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccess

`func (o *JWTRefreshResponse) SetAccess(v string)`

SetAccess sets Access field to given value.


### GetRefresh

`func (o *JWTRefreshResponse) GetRefresh() string`

GetRefresh returns the Refresh field if non-nil, zero value otherwise.

### GetRefreshOk

`func (o *JWTRefreshResponse) GetRefreshOk() (*string, bool)`

GetRefreshOk returns a tuple with the Refresh field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefresh

`func (o *JWTRefreshResponse) SetRefresh(v string)`

SetRefresh sets Refresh field to given value.


### GetStatus

`func (o *JWTRefreshResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *JWTRefreshResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *JWTRefreshResponse) SetStatus(v string)`

SetStatus sets Status field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


