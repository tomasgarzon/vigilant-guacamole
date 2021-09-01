# AddressCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**Line1** | **string** |  | 
**Line2** | Pointer to **NullableString** |  | [optional] 
**Postcode** | **string** |  | 
**Locality** | **string** |  | 
**Country** | **string** |  | 
**Region** | Pointer to **NullableString** |  | [optional] 

## Methods

### NewAddressCreate

`func NewAddressCreate(uuid string, line1 string, postcode string, locality string, country string, ) *AddressCreate`

NewAddressCreate instantiates a new AddressCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAddressCreateWithDefaults

`func NewAddressCreateWithDefaults() *AddressCreate`

NewAddressCreateWithDefaults instantiates a new AddressCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *AddressCreate) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *AddressCreate) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *AddressCreate) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetLine1

`func (o *AddressCreate) GetLine1() string`

GetLine1 returns the Line1 field if non-nil, zero value otherwise.

### GetLine1Ok

`func (o *AddressCreate) GetLine1Ok() (*string, bool)`

GetLine1Ok returns a tuple with the Line1 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLine1

`func (o *AddressCreate) SetLine1(v string)`

SetLine1 sets Line1 field to given value.


### GetLine2

`func (o *AddressCreate) GetLine2() string`

GetLine2 returns the Line2 field if non-nil, zero value otherwise.

### GetLine2Ok

`func (o *AddressCreate) GetLine2Ok() (*string, bool)`

GetLine2Ok returns a tuple with the Line2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLine2

`func (o *AddressCreate) SetLine2(v string)`

SetLine2 sets Line2 field to given value.

### HasLine2

`func (o *AddressCreate) HasLine2() bool`

HasLine2 returns a boolean if a field has been set.

### SetLine2Nil

`func (o *AddressCreate) SetLine2Nil(b bool)`

 SetLine2Nil sets the value for Line2 to be an explicit nil

### UnsetLine2
`func (o *AddressCreate) UnsetLine2()`

UnsetLine2 ensures that no value is present for Line2, not even an explicit nil
### GetPostcode

`func (o *AddressCreate) GetPostcode() string`

GetPostcode returns the Postcode field if non-nil, zero value otherwise.

### GetPostcodeOk

`func (o *AddressCreate) GetPostcodeOk() (*string, bool)`

GetPostcodeOk returns a tuple with the Postcode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostcode

`func (o *AddressCreate) SetPostcode(v string)`

SetPostcode sets Postcode field to given value.


### GetLocality

`func (o *AddressCreate) GetLocality() string`

GetLocality returns the Locality field if non-nil, zero value otherwise.

### GetLocalityOk

`func (o *AddressCreate) GetLocalityOk() (*string, bool)`

GetLocalityOk returns a tuple with the Locality field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocality

`func (o *AddressCreate) SetLocality(v string)`

SetLocality sets Locality field to given value.


### GetCountry

`func (o *AddressCreate) GetCountry() string`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *AddressCreate) GetCountryOk() (*string, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *AddressCreate) SetCountry(v string)`

SetCountry sets Country field to given value.


### GetRegion

`func (o *AddressCreate) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *AddressCreate) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *AddressCreate) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *AddressCreate) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### SetRegionNil

`func (o *AddressCreate) SetRegionNil(b bool)`

 SetRegionNil sets the value for Region to be an explicit nil

### UnsetRegion
`func (o *AddressCreate) UnsetRegion()`

UnsetRegion ensures that no value is present for Region, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


