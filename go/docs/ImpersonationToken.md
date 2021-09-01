# ImpersonationToken

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Impersonator** | **string** |  | 
**Impersonated** | **string** |  | 
**Token** | **string** |  | 

## Methods

### NewImpersonationToken

`func NewImpersonationToken(impersonator string, impersonated string, token string, ) *ImpersonationToken`

NewImpersonationToken instantiates a new ImpersonationToken object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImpersonationTokenWithDefaults

`func NewImpersonationTokenWithDefaults() *ImpersonationToken`

NewImpersonationTokenWithDefaults instantiates a new ImpersonationToken object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetImpersonator

`func (o *ImpersonationToken) GetImpersonator() string`

GetImpersonator returns the Impersonator field if non-nil, zero value otherwise.

### GetImpersonatorOk

`func (o *ImpersonationToken) GetImpersonatorOk() (*string, bool)`

GetImpersonatorOk returns a tuple with the Impersonator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImpersonator

`func (o *ImpersonationToken) SetImpersonator(v string)`

SetImpersonator sets Impersonator field to given value.


### GetImpersonated

`func (o *ImpersonationToken) GetImpersonated() string`

GetImpersonated returns the Impersonated field if non-nil, zero value otherwise.

### GetImpersonatedOk

`func (o *ImpersonationToken) GetImpersonatedOk() (*string, bool)`

GetImpersonatedOk returns a tuple with the Impersonated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImpersonated

`func (o *ImpersonationToken) SetImpersonated(v string)`

SetImpersonated sets Impersonated field to given value.


### GetToken

`func (o *ImpersonationToken) GetToken() string`

GetToken returns the Token field if non-nil, zero value otherwise.

### GetTokenOk

`func (o *ImpersonationToken) GetTokenOk() (*string, bool)`

GetTokenOk returns a tuple with the Token field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToken

`func (o *ImpersonationToken) SetToken(v string)`

SetToken sets Token field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


