# CoreCategoryGroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**Code** | **string** |  | [readonly] 
**RiskLevel** | **int32** |  | 
**Categories** | [**[]Category**](Category.md) |  | 

## Methods

### NewCoreCategoryGroup

`func NewCoreCategoryGroup(uuid string, code string, riskLevel int32, categories []Category, ) *CoreCategoryGroup`

NewCoreCategoryGroup instantiates a new CoreCategoryGroup object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCoreCategoryGroupWithDefaults

`func NewCoreCategoryGroupWithDefaults() *CoreCategoryGroup`

NewCoreCategoryGroupWithDefaults instantiates a new CoreCategoryGroup object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *CoreCategoryGroup) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *CoreCategoryGroup) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *CoreCategoryGroup) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetCode

`func (o *CoreCategoryGroup) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *CoreCategoryGroup) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *CoreCategoryGroup) SetCode(v string)`

SetCode sets Code field to given value.


### GetRiskLevel

`func (o *CoreCategoryGroup) GetRiskLevel() int32`

GetRiskLevel returns the RiskLevel field if non-nil, zero value otherwise.

### GetRiskLevelOk

`func (o *CoreCategoryGroup) GetRiskLevelOk() (*int32, bool)`

GetRiskLevelOk returns a tuple with the RiskLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskLevel

`func (o *CoreCategoryGroup) SetRiskLevel(v int32)`

SetRiskLevel sets RiskLevel field to given value.


### GetCategories

`func (o *CoreCategoryGroup) GetCategories() []Category`

GetCategories returns the Categories field if non-nil, zero value otherwise.

### GetCategoriesOk

`func (o *CoreCategoryGroup) GetCategoriesOk() (*[]Category, bool)`

GetCategoriesOk returns a tuple with the Categories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategories

`func (o *CoreCategoryGroup) SetCategories(v []Category)`

SetCategories sets Categories field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


