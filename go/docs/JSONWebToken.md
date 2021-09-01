# JSONWebToken

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Username** | **string** |  | 
**Password** | **string** |  | 
**Captcha** | Pointer to **string** |  | [optional] 

## Methods

### NewJSONWebToken

`func NewJSONWebToken(username string, password string, ) *JSONWebToken`

NewJSONWebToken instantiates a new JSONWebToken object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJSONWebTokenWithDefaults

`func NewJSONWebTokenWithDefaults() *JSONWebToken`

NewJSONWebTokenWithDefaults instantiates a new JSONWebToken object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUsername

`func (o *JSONWebToken) GetUsername() string`

GetUsername returns the Username field if non-nil, zero value otherwise.

### GetUsernameOk

`func (o *JSONWebToken) GetUsernameOk() (*string, bool)`

GetUsernameOk returns a tuple with the Username field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsername

`func (o *JSONWebToken) SetUsername(v string)`

SetUsername sets Username field to given value.


### GetPassword

`func (o *JSONWebToken) GetPassword() string`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *JSONWebToken) GetPasswordOk() (*string, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *JSONWebToken) SetPassword(v string)`

SetPassword sets Password field to given value.


### GetCaptcha

`func (o *JSONWebToken) GetCaptcha() string`

GetCaptcha returns the Captcha field if non-nil, zero value otherwise.

### GetCaptchaOk

`func (o *JSONWebToken) GetCaptchaOk() (*string, bool)`

GetCaptchaOk returns a tuple with the Captcha field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCaptcha

`func (o *JSONWebToken) SetCaptcha(v string)`

SetCaptcha sets Captcha field to given value.

### HasCaptcha

`func (o *JSONWebToken) HasCaptcha() bool`

HasCaptcha returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


