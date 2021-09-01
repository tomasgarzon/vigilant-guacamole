# AllocationByAsset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CategoryCode** | **string** |  | 
**DisplayAllocationChart** | **bool** |  | 
**DisplayAllocationChartConfigurationError** | **bool** |  | 
**AllocationsByCode** | [**[]AllocationByCode**](AllocationByCode.md) |  | 

## Methods

### NewAllocationByAsset

`func NewAllocationByAsset(categoryCode string, displayAllocationChart bool, displayAllocationChartConfigurationError bool, allocationsByCode []AllocationByCode, ) *AllocationByAsset`

NewAllocationByAsset instantiates a new AllocationByAsset object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAllocationByAssetWithDefaults

`func NewAllocationByAssetWithDefaults() *AllocationByAsset`

NewAllocationByAssetWithDefaults instantiates a new AllocationByAsset object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCategoryCode

`func (o *AllocationByAsset) GetCategoryCode() string`

GetCategoryCode returns the CategoryCode field if non-nil, zero value otherwise.

### GetCategoryCodeOk

`func (o *AllocationByAsset) GetCategoryCodeOk() (*string, bool)`

GetCategoryCodeOk returns a tuple with the CategoryCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategoryCode

`func (o *AllocationByAsset) SetCategoryCode(v string)`

SetCategoryCode sets CategoryCode field to given value.


### GetDisplayAllocationChart

`func (o *AllocationByAsset) GetDisplayAllocationChart() bool`

GetDisplayAllocationChart returns the DisplayAllocationChart field if non-nil, zero value otherwise.

### GetDisplayAllocationChartOk

`func (o *AllocationByAsset) GetDisplayAllocationChartOk() (*bool, bool)`

GetDisplayAllocationChartOk returns a tuple with the DisplayAllocationChart field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayAllocationChart

`func (o *AllocationByAsset) SetDisplayAllocationChart(v bool)`

SetDisplayAllocationChart sets DisplayAllocationChart field to given value.


### GetDisplayAllocationChartConfigurationError

`func (o *AllocationByAsset) GetDisplayAllocationChartConfigurationError() bool`

GetDisplayAllocationChartConfigurationError returns the DisplayAllocationChartConfigurationError field if non-nil, zero value otherwise.

### GetDisplayAllocationChartConfigurationErrorOk

`func (o *AllocationByAsset) GetDisplayAllocationChartConfigurationErrorOk() (*bool, bool)`

GetDisplayAllocationChartConfigurationErrorOk returns a tuple with the DisplayAllocationChartConfigurationError field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayAllocationChartConfigurationError

`func (o *AllocationByAsset) SetDisplayAllocationChartConfigurationError(v bool)`

SetDisplayAllocationChartConfigurationError sets DisplayAllocationChartConfigurationError field to given value.


### GetAllocationsByCode

`func (o *AllocationByAsset) GetAllocationsByCode() []AllocationByCode`

GetAllocationsByCode returns the AllocationsByCode field if non-nil, zero value otherwise.

### GetAllocationsByCodeOk

`func (o *AllocationByAsset) GetAllocationsByCodeOk() (*[]AllocationByCode, bool)`

GetAllocationsByCodeOk returns a tuple with the AllocationsByCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllocationsByCode

`func (o *AllocationByAsset) SetAllocationsByCode(v []AllocationByCode)`

SetAllocationsByCode sets AllocationsByCode field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


