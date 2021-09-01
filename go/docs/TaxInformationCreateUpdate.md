# TaxInformationCreateUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**Country** | **string** |  | 
**DocumentNumber** | **string** |  | 
**DocumentType** | Pointer to **string** |  | [optional] 

## Methods

### NewTaxInformationCreateUpdate

`func NewTaxInformationCreateUpdate(uuid string, country string, documentNumber string, ) *TaxInformationCreateUpdate`

NewTaxInformationCreateUpdate instantiates a new TaxInformationCreateUpdate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaxInformationCreateUpdateWithDefaults

`func NewTaxInformationCreateUpdateWithDefaults() *TaxInformationCreateUpdate`

NewTaxInformationCreateUpdateWithDefaults instantiates a new TaxInformationCreateUpdate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *TaxInformationCreateUpdate) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *TaxInformationCreateUpdate) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *TaxInformationCreateUpdate) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetCountry

`func (o *TaxInformationCreateUpdate) GetCountry() string`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *TaxInformationCreateUpdate) GetCountryOk() (*string, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *TaxInformationCreateUpdate) SetCountry(v string)`

SetCountry sets Country field to given value.


### GetDocumentNumber

`func (o *TaxInformationCreateUpdate) GetDocumentNumber() string`

GetDocumentNumber returns the DocumentNumber field if non-nil, zero value otherwise.

### GetDocumentNumberOk

`func (o *TaxInformationCreateUpdate) GetDocumentNumberOk() (*string, bool)`

GetDocumentNumberOk returns a tuple with the DocumentNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocumentNumber

`func (o *TaxInformationCreateUpdate) SetDocumentNumber(v string)`

SetDocumentNumber sets DocumentNumber field to given value.


### GetDocumentType

`func (o *TaxInformationCreateUpdate) GetDocumentType() string`

GetDocumentType returns the DocumentType field if non-nil, zero value otherwise.

### GetDocumentTypeOk

`func (o *TaxInformationCreateUpdate) GetDocumentTypeOk() (*string, bool)`

GetDocumentTypeOk returns a tuple with the DocumentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocumentType

`func (o *TaxInformationCreateUpdate) SetDocumentType(v string)`

SetDocumentType sets DocumentType field to given value.

### HasDocumentType

`func (o *TaxInformationCreateUpdate) HasDocumentType() bool`

HasDocumentType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


