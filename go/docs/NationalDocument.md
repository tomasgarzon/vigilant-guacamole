# NationalDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**Code** | **string** |  | 
**Name** | **string** |  | 
**Countries** | **[]string** |  | 

## Methods

### NewNationalDocument

`func NewNationalDocument(uuid string, code string, name string, countries []string, ) *NationalDocument`

NewNationalDocument instantiates a new NationalDocument object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNationalDocumentWithDefaults

`func NewNationalDocumentWithDefaults() *NationalDocument`

NewNationalDocumentWithDefaults instantiates a new NationalDocument object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *NationalDocument) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *NationalDocument) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *NationalDocument) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetCode

`func (o *NationalDocument) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *NationalDocument) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *NationalDocument) SetCode(v string)`

SetCode sets Code field to given value.


### GetName

`func (o *NationalDocument) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *NationalDocument) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *NationalDocument) SetName(v string)`

SetName sets Name field to given value.


### GetCountries

`func (o *NationalDocument) GetCountries() []string`

GetCountries returns the Countries field if non-nil, zero value otherwise.

### GetCountriesOk

`func (o *NationalDocument) GetCountriesOk() (*[]string, bool)`

GetCountriesOk returns a tuple with the Countries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountries

`func (o *NationalDocument) SetCountries(v []string)`

SetCountries sets Countries field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


