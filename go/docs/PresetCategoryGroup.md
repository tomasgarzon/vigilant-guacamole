# PresetCategoryGroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**Code** | **string** |  | [readonly] 
**Categories** | [**[]Category**](Category.md) |  | 

## Methods

### NewPresetCategoryGroup

`func NewPresetCategoryGroup(uuid string, code string, categories []Category, ) *PresetCategoryGroup`

NewPresetCategoryGroup instantiates a new PresetCategoryGroup object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPresetCategoryGroupWithDefaults

`func NewPresetCategoryGroupWithDefaults() *PresetCategoryGroup`

NewPresetCategoryGroupWithDefaults instantiates a new PresetCategoryGroup object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *PresetCategoryGroup) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *PresetCategoryGroup) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *PresetCategoryGroup) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetCode

`func (o *PresetCategoryGroup) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *PresetCategoryGroup) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *PresetCategoryGroup) SetCode(v string)`

SetCode sets Code field to given value.


### GetCategories

`func (o *PresetCategoryGroup) GetCategories() []Category`

GetCategories returns the Categories field if non-nil, zero value otherwise.

### GetCategoriesOk

`func (o *PresetCategoryGroup) GetCategoriesOk() (*[]Category, bool)`

GetCategoriesOk returns a tuple with the Categories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategories

`func (o *PresetCategoryGroup) SetCategories(v []Category)`

SetCategories sets Categories field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


