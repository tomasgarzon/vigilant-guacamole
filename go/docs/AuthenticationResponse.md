# AuthenticationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **string** |  | [optional] [default to "ok"]
**Error** | Pointer to **string** |  | [optional] 
**Id** | **string** |  | 
**Email** | **string** |  | 
**SessionToken** | **string** |  | 

## Methods

### NewAuthenticationResponse

`func NewAuthenticationResponse(id string, email string, sessionToken string, ) *AuthenticationResponse`

NewAuthenticationResponse instantiates a new AuthenticationResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthenticationResponseWithDefaults

`func NewAuthenticationResponseWithDefaults() *AuthenticationResponse`

NewAuthenticationResponseWithDefaults instantiates a new AuthenticationResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *AuthenticationResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *AuthenticationResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *AuthenticationResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *AuthenticationResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetError

`func (o *AuthenticationResponse) GetError() string`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *AuthenticationResponse) GetErrorOk() (*string, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *AuthenticationResponse) SetError(v string)`

SetError sets Error field to given value.

### HasError

`func (o *AuthenticationResponse) HasError() bool`

HasError returns a boolean if a field has been set.

### GetId

`func (o *AuthenticationResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AuthenticationResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AuthenticationResponse) SetId(v string)`

SetId sets Id field to given value.


### GetEmail

`func (o *AuthenticationResponse) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *AuthenticationResponse) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *AuthenticationResponse) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetSessionToken

`func (o *AuthenticationResponse) GetSessionToken() string`

GetSessionToken returns the SessionToken field if non-nil, zero value otherwise.

### GetSessionTokenOk

`func (o *AuthenticationResponse) GetSessionTokenOk() (*string, bool)`

GetSessionTokenOk returns a tuple with the SessionToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSessionToken

`func (o *AuthenticationResponse) SetSessionToken(v string)`

SetSessionToken sets SessionToken field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


