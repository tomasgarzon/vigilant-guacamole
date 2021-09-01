# CountryField

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | [readonly] 
**Code** | **string** |  | 
**Iso3** | **string** |  | 
**Name** | **string** |  | 
**NameEnGb** | Pointer to **NullableString** |  | [optional] 
**NameEnCh** | Pointer to **NullableString** |  | [optional] 
**NameFrCh** | Pointer to **NullableString** |  | [optional] 
**NameDeCh** | Pointer to **NullableString** |  | [optional] 
**NameEsEs** | Pointer to **NullableString** |  | [optional] 
**NameItCh** | Pointer to **NullableString** |  | [optional] 
**LongName** | **string** |  | 
**LongNameEnGb** | Pointer to **NullableString** |  | [optional] 
**LongNameEnCh** | Pointer to **NullableString** |  | [optional] 
**LongNameFrCh** | Pointer to **NullableString** |  | [optional] 
**LongNameDeCh** | Pointer to **NullableString** |  | [optional] 
**LongNameEsEs** | Pointer to **NullableString** |  | [optional] 
**LongNameItCh** | Pointer to **NullableString** |  | [optional] 
**EeaCountry** | Pointer to **bool** |  | [optional] 

## Methods

### NewCountryField

`func NewCountryField(id int32, code string, iso3 string, name string, longName string, ) *CountryField`

NewCountryField instantiates a new CountryField object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCountryFieldWithDefaults

`func NewCountryFieldWithDefaults() *CountryField`

NewCountryFieldWithDefaults instantiates a new CountryField object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CountryField) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CountryField) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CountryField) SetId(v int32)`

SetId sets Id field to given value.


### GetCode

`func (o *CountryField) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *CountryField) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *CountryField) SetCode(v string)`

SetCode sets Code field to given value.


### GetIso3

`func (o *CountryField) GetIso3() string`

GetIso3 returns the Iso3 field if non-nil, zero value otherwise.

### GetIso3Ok

`func (o *CountryField) GetIso3Ok() (*string, bool)`

GetIso3Ok returns a tuple with the Iso3 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIso3

`func (o *CountryField) SetIso3(v string)`

SetIso3 sets Iso3 field to given value.


### GetName

`func (o *CountryField) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CountryField) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CountryField) SetName(v string)`

SetName sets Name field to given value.


### GetNameEnGb

`func (o *CountryField) GetNameEnGb() string`

GetNameEnGb returns the NameEnGb field if non-nil, zero value otherwise.

### GetNameEnGbOk

`func (o *CountryField) GetNameEnGbOk() (*string, bool)`

GetNameEnGbOk returns a tuple with the NameEnGb field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameEnGb

`func (o *CountryField) SetNameEnGb(v string)`

SetNameEnGb sets NameEnGb field to given value.

### HasNameEnGb

`func (o *CountryField) HasNameEnGb() bool`

HasNameEnGb returns a boolean if a field has been set.

### SetNameEnGbNil

`func (o *CountryField) SetNameEnGbNil(b bool)`

 SetNameEnGbNil sets the value for NameEnGb to be an explicit nil

### UnsetNameEnGb
`func (o *CountryField) UnsetNameEnGb()`

UnsetNameEnGb ensures that no value is present for NameEnGb, not even an explicit nil
### GetNameEnCh

`func (o *CountryField) GetNameEnCh() string`

GetNameEnCh returns the NameEnCh field if non-nil, zero value otherwise.

### GetNameEnChOk

`func (o *CountryField) GetNameEnChOk() (*string, bool)`

GetNameEnChOk returns a tuple with the NameEnCh field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameEnCh

`func (o *CountryField) SetNameEnCh(v string)`

SetNameEnCh sets NameEnCh field to given value.

### HasNameEnCh

`func (o *CountryField) HasNameEnCh() bool`

HasNameEnCh returns a boolean if a field has been set.

### SetNameEnChNil

`func (o *CountryField) SetNameEnChNil(b bool)`

 SetNameEnChNil sets the value for NameEnCh to be an explicit nil

### UnsetNameEnCh
`func (o *CountryField) UnsetNameEnCh()`

UnsetNameEnCh ensures that no value is present for NameEnCh, not even an explicit nil
### GetNameFrCh

`func (o *CountryField) GetNameFrCh() string`

GetNameFrCh returns the NameFrCh field if non-nil, zero value otherwise.

### GetNameFrChOk

`func (o *CountryField) GetNameFrChOk() (*string, bool)`

GetNameFrChOk returns a tuple with the NameFrCh field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameFrCh

`func (o *CountryField) SetNameFrCh(v string)`

SetNameFrCh sets NameFrCh field to given value.

### HasNameFrCh

`func (o *CountryField) HasNameFrCh() bool`

HasNameFrCh returns a boolean if a field has been set.

### SetNameFrChNil

`func (o *CountryField) SetNameFrChNil(b bool)`

 SetNameFrChNil sets the value for NameFrCh to be an explicit nil

### UnsetNameFrCh
`func (o *CountryField) UnsetNameFrCh()`

UnsetNameFrCh ensures that no value is present for NameFrCh, not even an explicit nil
### GetNameDeCh

`func (o *CountryField) GetNameDeCh() string`

GetNameDeCh returns the NameDeCh field if non-nil, zero value otherwise.

### GetNameDeChOk

`func (o *CountryField) GetNameDeChOk() (*string, bool)`

GetNameDeChOk returns a tuple with the NameDeCh field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameDeCh

`func (o *CountryField) SetNameDeCh(v string)`

SetNameDeCh sets NameDeCh field to given value.

### HasNameDeCh

`func (o *CountryField) HasNameDeCh() bool`

HasNameDeCh returns a boolean if a field has been set.

### SetNameDeChNil

`func (o *CountryField) SetNameDeChNil(b bool)`

 SetNameDeChNil sets the value for NameDeCh to be an explicit nil

### UnsetNameDeCh
`func (o *CountryField) UnsetNameDeCh()`

UnsetNameDeCh ensures that no value is present for NameDeCh, not even an explicit nil
### GetNameEsEs

`func (o *CountryField) GetNameEsEs() string`

GetNameEsEs returns the NameEsEs field if non-nil, zero value otherwise.

### GetNameEsEsOk

`func (o *CountryField) GetNameEsEsOk() (*string, bool)`

GetNameEsEsOk returns a tuple with the NameEsEs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameEsEs

`func (o *CountryField) SetNameEsEs(v string)`

SetNameEsEs sets NameEsEs field to given value.

### HasNameEsEs

`func (o *CountryField) HasNameEsEs() bool`

HasNameEsEs returns a boolean if a field has been set.

### SetNameEsEsNil

`func (o *CountryField) SetNameEsEsNil(b bool)`

 SetNameEsEsNil sets the value for NameEsEs to be an explicit nil

### UnsetNameEsEs
`func (o *CountryField) UnsetNameEsEs()`

UnsetNameEsEs ensures that no value is present for NameEsEs, not even an explicit nil
### GetNameItCh

`func (o *CountryField) GetNameItCh() string`

GetNameItCh returns the NameItCh field if non-nil, zero value otherwise.

### GetNameItChOk

`func (o *CountryField) GetNameItChOk() (*string, bool)`

GetNameItChOk returns a tuple with the NameItCh field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameItCh

`func (o *CountryField) SetNameItCh(v string)`

SetNameItCh sets NameItCh field to given value.

### HasNameItCh

`func (o *CountryField) HasNameItCh() bool`

HasNameItCh returns a boolean if a field has been set.

### SetNameItChNil

`func (o *CountryField) SetNameItChNil(b bool)`

 SetNameItChNil sets the value for NameItCh to be an explicit nil

### UnsetNameItCh
`func (o *CountryField) UnsetNameItCh()`

UnsetNameItCh ensures that no value is present for NameItCh, not even an explicit nil
### GetLongName

`func (o *CountryField) GetLongName() string`

GetLongName returns the LongName field if non-nil, zero value otherwise.

### GetLongNameOk

`func (o *CountryField) GetLongNameOk() (*string, bool)`

GetLongNameOk returns a tuple with the LongName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLongName

`func (o *CountryField) SetLongName(v string)`

SetLongName sets LongName field to given value.


### GetLongNameEnGb

`func (o *CountryField) GetLongNameEnGb() string`

GetLongNameEnGb returns the LongNameEnGb field if non-nil, zero value otherwise.

### GetLongNameEnGbOk

`func (o *CountryField) GetLongNameEnGbOk() (*string, bool)`

GetLongNameEnGbOk returns a tuple with the LongNameEnGb field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLongNameEnGb

`func (o *CountryField) SetLongNameEnGb(v string)`

SetLongNameEnGb sets LongNameEnGb field to given value.

### HasLongNameEnGb

`func (o *CountryField) HasLongNameEnGb() bool`

HasLongNameEnGb returns a boolean if a field has been set.

### SetLongNameEnGbNil

`func (o *CountryField) SetLongNameEnGbNil(b bool)`

 SetLongNameEnGbNil sets the value for LongNameEnGb to be an explicit nil

### UnsetLongNameEnGb
`func (o *CountryField) UnsetLongNameEnGb()`

UnsetLongNameEnGb ensures that no value is present for LongNameEnGb, not even an explicit nil
### GetLongNameEnCh

`func (o *CountryField) GetLongNameEnCh() string`

GetLongNameEnCh returns the LongNameEnCh field if non-nil, zero value otherwise.

### GetLongNameEnChOk

`func (o *CountryField) GetLongNameEnChOk() (*string, bool)`

GetLongNameEnChOk returns a tuple with the LongNameEnCh field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLongNameEnCh

`func (o *CountryField) SetLongNameEnCh(v string)`

SetLongNameEnCh sets LongNameEnCh field to given value.

### HasLongNameEnCh

`func (o *CountryField) HasLongNameEnCh() bool`

HasLongNameEnCh returns a boolean if a field has been set.

### SetLongNameEnChNil

`func (o *CountryField) SetLongNameEnChNil(b bool)`

 SetLongNameEnChNil sets the value for LongNameEnCh to be an explicit nil

### UnsetLongNameEnCh
`func (o *CountryField) UnsetLongNameEnCh()`

UnsetLongNameEnCh ensures that no value is present for LongNameEnCh, not even an explicit nil
### GetLongNameFrCh

`func (o *CountryField) GetLongNameFrCh() string`

GetLongNameFrCh returns the LongNameFrCh field if non-nil, zero value otherwise.

### GetLongNameFrChOk

`func (o *CountryField) GetLongNameFrChOk() (*string, bool)`

GetLongNameFrChOk returns a tuple with the LongNameFrCh field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLongNameFrCh

`func (o *CountryField) SetLongNameFrCh(v string)`

SetLongNameFrCh sets LongNameFrCh field to given value.

### HasLongNameFrCh

`func (o *CountryField) HasLongNameFrCh() bool`

HasLongNameFrCh returns a boolean if a field has been set.

### SetLongNameFrChNil

`func (o *CountryField) SetLongNameFrChNil(b bool)`

 SetLongNameFrChNil sets the value for LongNameFrCh to be an explicit nil

### UnsetLongNameFrCh
`func (o *CountryField) UnsetLongNameFrCh()`

UnsetLongNameFrCh ensures that no value is present for LongNameFrCh, not even an explicit nil
### GetLongNameDeCh

`func (o *CountryField) GetLongNameDeCh() string`

GetLongNameDeCh returns the LongNameDeCh field if non-nil, zero value otherwise.

### GetLongNameDeChOk

`func (o *CountryField) GetLongNameDeChOk() (*string, bool)`

GetLongNameDeChOk returns a tuple with the LongNameDeCh field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLongNameDeCh

`func (o *CountryField) SetLongNameDeCh(v string)`

SetLongNameDeCh sets LongNameDeCh field to given value.

### HasLongNameDeCh

`func (o *CountryField) HasLongNameDeCh() bool`

HasLongNameDeCh returns a boolean if a field has been set.

### SetLongNameDeChNil

`func (o *CountryField) SetLongNameDeChNil(b bool)`

 SetLongNameDeChNil sets the value for LongNameDeCh to be an explicit nil

### UnsetLongNameDeCh
`func (o *CountryField) UnsetLongNameDeCh()`

UnsetLongNameDeCh ensures that no value is present for LongNameDeCh, not even an explicit nil
### GetLongNameEsEs

`func (o *CountryField) GetLongNameEsEs() string`

GetLongNameEsEs returns the LongNameEsEs field if non-nil, zero value otherwise.

### GetLongNameEsEsOk

`func (o *CountryField) GetLongNameEsEsOk() (*string, bool)`

GetLongNameEsEsOk returns a tuple with the LongNameEsEs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLongNameEsEs

`func (o *CountryField) SetLongNameEsEs(v string)`

SetLongNameEsEs sets LongNameEsEs field to given value.

### HasLongNameEsEs

`func (o *CountryField) HasLongNameEsEs() bool`

HasLongNameEsEs returns a boolean if a field has been set.

### SetLongNameEsEsNil

`func (o *CountryField) SetLongNameEsEsNil(b bool)`

 SetLongNameEsEsNil sets the value for LongNameEsEs to be an explicit nil

### UnsetLongNameEsEs
`func (o *CountryField) UnsetLongNameEsEs()`

UnsetLongNameEsEs ensures that no value is present for LongNameEsEs, not even an explicit nil
### GetLongNameItCh

`func (o *CountryField) GetLongNameItCh() string`

GetLongNameItCh returns the LongNameItCh field if non-nil, zero value otherwise.

### GetLongNameItChOk

`func (o *CountryField) GetLongNameItChOk() (*string, bool)`

GetLongNameItChOk returns a tuple with the LongNameItCh field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLongNameItCh

`func (o *CountryField) SetLongNameItCh(v string)`

SetLongNameItCh sets LongNameItCh field to given value.

### HasLongNameItCh

`func (o *CountryField) HasLongNameItCh() bool`

HasLongNameItCh returns a boolean if a field has been set.

### SetLongNameItChNil

`func (o *CountryField) SetLongNameItChNil(b bool)`

 SetLongNameItChNil sets the value for LongNameItCh to be an explicit nil

### UnsetLongNameItCh
`func (o *CountryField) UnsetLongNameItCh()`

UnsetLongNameItCh ensures that no value is present for LongNameItCh, not even an explicit nil
### GetEeaCountry

`func (o *CountryField) GetEeaCountry() bool`

GetEeaCountry returns the EeaCountry field if non-nil, zero value otherwise.

### GetEeaCountryOk

`func (o *CountryField) GetEeaCountryOk() (*bool, bool)`

GetEeaCountryOk returns a tuple with the EeaCountry field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEeaCountry

`func (o *CountryField) SetEeaCountry(v bool)`

SetEeaCountry sets EeaCountry field to given value.

### HasEeaCountry

`func (o *CountryField) HasEeaCountry() bool`

HasEeaCountry returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


