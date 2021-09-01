# AccessLog

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**Created** | **time.Time** |  | [readonly] 
**UserAgent** | **string** |  | [readonly] 
**IpAddress** | **string** |  | [readonly] 
**Browser** | **string** |  | [readonly] 
**BrowserVersion** | **string** |  | [readonly] 
**DeviceBrand** | **string** |  | [readonly] 
**DeviceModel** | **string** |  | [readonly] 
**Os** | **string** |  | [readonly] 
**OsVersion** | **string** |  | [readonly] 
**Channel** | [**ChannelEnum**](ChannelEnum.md) |  | [readonly] 
**Country** | **string** |  | 
**City** | **string** |  | [readonly] 

## Methods

### NewAccessLog

`func NewAccessLog(uuid string, created time.Time, userAgent string, ipAddress string, browser string, browserVersion string, deviceBrand string, deviceModel string, os string, osVersion string, channel ChannelEnum, country string, city string, ) *AccessLog`

NewAccessLog instantiates a new AccessLog object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessLogWithDefaults

`func NewAccessLogWithDefaults() *AccessLog`

NewAccessLogWithDefaults instantiates a new AccessLog object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *AccessLog) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *AccessLog) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *AccessLog) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetCreated

`func (o *AccessLog) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *AccessLog) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *AccessLog) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetUserAgent

`func (o *AccessLog) GetUserAgent() string`

GetUserAgent returns the UserAgent field if non-nil, zero value otherwise.

### GetUserAgentOk

`func (o *AccessLog) GetUserAgentOk() (*string, bool)`

GetUserAgentOk returns a tuple with the UserAgent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserAgent

`func (o *AccessLog) SetUserAgent(v string)`

SetUserAgent sets UserAgent field to given value.


### GetIpAddress

`func (o *AccessLog) GetIpAddress() string`

GetIpAddress returns the IpAddress field if non-nil, zero value otherwise.

### GetIpAddressOk

`func (o *AccessLog) GetIpAddressOk() (*string, bool)`

GetIpAddressOk returns a tuple with the IpAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIpAddress

`func (o *AccessLog) SetIpAddress(v string)`

SetIpAddress sets IpAddress field to given value.


### GetBrowser

`func (o *AccessLog) GetBrowser() string`

GetBrowser returns the Browser field if non-nil, zero value otherwise.

### GetBrowserOk

`func (o *AccessLog) GetBrowserOk() (*string, bool)`

GetBrowserOk returns a tuple with the Browser field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBrowser

`func (o *AccessLog) SetBrowser(v string)`

SetBrowser sets Browser field to given value.


### GetBrowserVersion

`func (o *AccessLog) GetBrowserVersion() string`

GetBrowserVersion returns the BrowserVersion field if non-nil, zero value otherwise.

### GetBrowserVersionOk

`func (o *AccessLog) GetBrowserVersionOk() (*string, bool)`

GetBrowserVersionOk returns a tuple with the BrowserVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBrowserVersion

`func (o *AccessLog) SetBrowserVersion(v string)`

SetBrowserVersion sets BrowserVersion field to given value.


### GetDeviceBrand

`func (o *AccessLog) GetDeviceBrand() string`

GetDeviceBrand returns the DeviceBrand field if non-nil, zero value otherwise.

### GetDeviceBrandOk

`func (o *AccessLog) GetDeviceBrandOk() (*string, bool)`

GetDeviceBrandOk returns a tuple with the DeviceBrand field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeviceBrand

`func (o *AccessLog) SetDeviceBrand(v string)`

SetDeviceBrand sets DeviceBrand field to given value.


### GetDeviceModel

`func (o *AccessLog) GetDeviceModel() string`

GetDeviceModel returns the DeviceModel field if non-nil, zero value otherwise.

### GetDeviceModelOk

`func (o *AccessLog) GetDeviceModelOk() (*string, bool)`

GetDeviceModelOk returns a tuple with the DeviceModel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeviceModel

`func (o *AccessLog) SetDeviceModel(v string)`

SetDeviceModel sets DeviceModel field to given value.


### GetOs

`func (o *AccessLog) GetOs() string`

GetOs returns the Os field if non-nil, zero value otherwise.

### GetOsOk

`func (o *AccessLog) GetOsOk() (*string, bool)`

GetOsOk returns a tuple with the Os field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOs

`func (o *AccessLog) SetOs(v string)`

SetOs sets Os field to given value.


### GetOsVersion

`func (o *AccessLog) GetOsVersion() string`

GetOsVersion returns the OsVersion field if non-nil, zero value otherwise.

### GetOsVersionOk

`func (o *AccessLog) GetOsVersionOk() (*string, bool)`

GetOsVersionOk returns a tuple with the OsVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOsVersion

`func (o *AccessLog) SetOsVersion(v string)`

SetOsVersion sets OsVersion field to given value.


### GetChannel

`func (o *AccessLog) GetChannel() ChannelEnum`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *AccessLog) GetChannelOk() (*ChannelEnum, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *AccessLog) SetChannel(v ChannelEnum)`

SetChannel sets Channel field to given value.


### GetCountry

`func (o *AccessLog) GetCountry() string`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *AccessLog) GetCountryOk() (*string, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *AccessLog) SetCountry(v string)`

SetCountry sets Country field to given value.


### GetCity

`func (o *AccessLog) GetCity() string`

GetCity returns the City field if non-nil, zero value otherwise.

### GetCityOk

`func (o *AccessLog) GetCityOk() (*string, bool)`

GetCityOk returns a tuple with the City field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCity

`func (o *AccessLog) SetCity(v string)`

SetCity sets City field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


