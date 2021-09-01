# VerificationDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**DocumentType** | [**DocumentTypeEnum**](DocumentTypeEnum.md) |  | 
**DocumentFront** | **string** |  | 
**DocumentBack** | **string** |  | 

## Methods

### NewVerificationDocument

`func NewVerificationDocument(uuid string, documentType DocumentTypeEnum, documentFront string, documentBack string, ) *VerificationDocument`

NewVerificationDocument instantiates a new VerificationDocument object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVerificationDocumentWithDefaults

`func NewVerificationDocumentWithDefaults() *VerificationDocument`

NewVerificationDocumentWithDefaults instantiates a new VerificationDocument object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *VerificationDocument) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *VerificationDocument) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *VerificationDocument) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetDocumentType

`func (o *VerificationDocument) GetDocumentType() DocumentTypeEnum`

GetDocumentType returns the DocumentType field if non-nil, zero value otherwise.

### GetDocumentTypeOk

`func (o *VerificationDocument) GetDocumentTypeOk() (*DocumentTypeEnum, bool)`

GetDocumentTypeOk returns a tuple with the DocumentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocumentType

`func (o *VerificationDocument) SetDocumentType(v DocumentTypeEnum)`

SetDocumentType sets DocumentType field to given value.


### GetDocumentFront

`func (o *VerificationDocument) GetDocumentFront() string`

GetDocumentFront returns the DocumentFront field if non-nil, zero value otherwise.

### GetDocumentFrontOk

`func (o *VerificationDocument) GetDocumentFrontOk() (*string, bool)`

GetDocumentFrontOk returns a tuple with the DocumentFront field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocumentFront

`func (o *VerificationDocument) SetDocumentFront(v string)`

SetDocumentFront sets DocumentFront field to given value.


### GetDocumentBack

`func (o *VerificationDocument) GetDocumentBack() string`

GetDocumentBack returns the DocumentBack field if non-nil, zero value otherwise.

### GetDocumentBackOk

`func (o *VerificationDocument) GetDocumentBackOk() (*string, bool)`

GetDocumentBackOk returns a tuple with the DocumentBack field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocumentBack

`func (o *VerificationDocument) SetDocumentBack(v string)`

SetDocumentBack sets DocumentBack field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


