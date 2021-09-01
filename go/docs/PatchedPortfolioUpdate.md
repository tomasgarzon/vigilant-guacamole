# PatchedPortfolioUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | Pointer to **string** |  | [optional] [readonly] 
**Name** | Pointer to **string** |  | [optional] 
**PortfolioType** | Pointer to **string** |  | [optional] 
**RiskLevel** | Pointer to **NullableInt32** |  | [optional] 
**TimeHorizon** | Pointer to **NullableInt32** |  | [optional] 
**Status** | Pointer to [**Status2efEnum**](Status2efEnum.md) |  | [optional] [readonly] 
**Currency** | Pointer to **string** |  | [optional] 
**Created** | Pointer to **time.Time** |  | [optional] [readonly] 
**Activated** | Pointer to **time.Time** |  | [optional] [readonly] 
**Advisor** | Pointer to **string** |  | [optional] 
**AdviceEngine** | Pointer to **string** |  | [optional] 
**ExtraData** | Pointer to **map[string]interface{}** |  | [optional] 
**Client** | Pointer to **string** |  | [optional] 

## Methods

### NewPatchedPortfolioUpdate

`func NewPatchedPortfolioUpdate() *PatchedPortfolioUpdate`

NewPatchedPortfolioUpdate instantiates a new PatchedPortfolioUpdate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedPortfolioUpdateWithDefaults

`func NewPatchedPortfolioUpdateWithDefaults() *PatchedPortfolioUpdate`

NewPatchedPortfolioUpdateWithDefaults instantiates a new PatchedPortfolioUpdate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *PatchedPortfolioUpdate) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *PatchedPortfolioUpdate) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *PatchedPortfolioUpdate) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *PatchedPortfolioUpdate) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### GetName

`func (o *PatchedPortfolioUpdate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PatchedPortfolioUpdate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PatchedPortfolioUpdate) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PatchedPortfolioUpdate) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPortfolioType

`func (o *PatchedPortfolioUpdate) GetPortfolioType() string`

GetPortfolioType returns the PortfolioType field if non-nil, zero value otherwise.

### GetPortfolioTypeOk

`func (o *PatchedPortfolioUpdate) GetPortfolioTypeOk() (*string, bool)`

GetPortfolioTypeOk returns a tuple with the PortfolioType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPortfolioType

`func (o *PatchedPortfolioUpdate) SetPortfolioType(v string)`

SetPortfolioType sets PortfolioType field to given value.

### HasPortfolioType

`func (o *PatchedPortfolioUpdate) HasPortfolioType() bool`

HasPortfolioType returns a boolean if a field has been set.

### GetRiskLevel

`func (o *PatchedPortfolioUpdate) GetRiskLevel() int32`

GetRiskLevel returns the RiskLevel field if non-nil, zero value otherwise.

### GetRiskLevelOk

`func (o *PatchedPortfolioUpdate) GetRiskLevelOk() (*int32, bool)`

GetRiskLevelOk returns a tuple with the RiskLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskLevel

`func (o *PatchedPortfolioUpdate) SetRiskLevel(v int32)`

SetRiskLevel sets RiskLevel field to given value.

### HasRiskLevel

`func (o *PatchedPortfolioUpdate) HasRiskLevel() bool`

HasRiskLevel returns a boolean if a field has been set.

### SetRiskLevelNil

`func (o *PatchedPortfolioUpdate) SetRiskLevelNil(b bool)`

 SetRiskLevelNil sets the value for RiskLevel to be an explicit nil

### UnsetRiskLevel
`func (o *PatchedPortfolioUpdate) UnsetRiskLevel()`

UnsetRiskLevel ensures that no value is present for RiskLevel, not even an explicit nil
### GetTimeHorizon

`func (o *PatchedPortfolioUpdate) GetTimeHorizon() int32`

GetTimeHorizon returns the TimeHorizon field if non-nil, zero value otherwise.

### GetTimeHorizonOk

`func (o *PatchedPortfolioUpdate) GetTimeHorizonOk() (*int32, bool)`

GetTimeHorizonOk returns a tuple with the TimeHorizon field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeHorizon

`func (o *PatchedPortfolioUpdate) SetTimeHorizon(v int32)`

SetTimeHorizon sets TimeHorizon field to given value.

### HasTimeHorizon

`func (o *PatchedPortfolioUpdate) HasTimeHorizon() bool`

HasTimeHorizon returns a boolean if a field has been set.

### SetTimeHorizonNil

`func (o *PatchedPortfolioUpdate) SetTimeHorizonNil(b bool)`

 SetTimeHorizonNil sets the value for TimeHorizon to be an explicit nil

### UnsetTimeHorizon
`func (o *PatchedPortfolioUpdate) UnsetTimeHorizon()`

UnsetTimeHorizon ensures that no value is present for TimeHorizon, not even an explicit nil
### GetStatus

`func (o *PatchedPortfolioUpdate) GetStatus() Status2efEnum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *PatchedPortfolioUpdate) GetStatusOk() (*Status2efEnum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *PatchedPortfolioUpdate) SetStatus(v Status2efEnum)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *PatchedPortfolioUpdate) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetCurrency

`func (o *PatchedPortfolioUpdate) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *PatchedPortfolioUpdate) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *PatchedPortfolioUpdate) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *PatchedPortfolioUpdate) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetCreated

`func (o *PatchedPortfolioUpdate) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *PatchedPortfolioUpdate) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *PatchedPortfolioUpdate) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *PatchedPortfolioUpdate) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetActivated

`func (o *PatchedPortfolioUpdate) GetActivated() time.Time`

GetActivated returns the Activated field if non-nil, zero value otherwise.

### GetActivatedOk

`func (o *PatchedPortfolioUpdate) GetActivatedOk() (*time.Time, bool)`

GetActivatedOk returns a tuple with the Activated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivated

`func (o *PatchedPortfolioUpdate) SetActivated(v time.Time)`

SetActivated sets Activated field to given value.

### HasActivated

`func (o *PatchedPortfolioUpdate) HasActivated() bool`

HasActivated returns a boolean if a field has been set.

### GetAdvisor

`func (o *PatchedPortfolioUpdate) GetAdvisor() string`

GetAdvisor returns the Advisor field if non-nil, zero value otherwise.

### GetAdvisorOk

`func (o *PatchedPortfolioUpdate) GetAdvisorOk() (*string, bool)`

GetAdvisorOk returns a tuple with the Advisor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvisor

`func (o *PatchedPortfolioUpdate) SetAdvisor(v string)`

SetAdvisor sets Advisor field to given value.

### HasAdvisor

`func (o *PatchedPortfolioUpdate) HasAdvisor() bool`

HasAdvisor returns a boolean if a field has been set.

### GetAdviceEngine

`func (o *PatchedPortfolioUpdate) GetAdviceEngine() string`

GetAdviceEngine returns the AdviceEngine field if non-nil, zero value otherwise.

### GetAdviceEngineOk

`func (o *PatchedPortfolioUpdate) GetAdviceEngineOk() (*string, bool)`

GetAdviceEngineOk returns a tuple with the AdviceEngine field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdviceEngine

`func (o *PatchedPortfolioUpdate) SetAdviceEngine(v string)`

SetAdviceEngine sets AdviceEngine field to given value.

### HasAdviceEngine

`func (o *PatchedPortfolioUpdate) HasAdviceEngine() bool`

HasAdviceEngine returns a boolean if a field has been set.

### GetExtraData

`func (o *PatchedPortfolioUpdate) GetExtraData() map[string]interface{}`

GetExtraData returns the ExtraData field if non-nil, zero value otherwise.

### GetExtraDataOk

`func (o *PatchedPortfolioUpdate) GetExtraDataOk() (*map[string]interface{}, bool)`

GetExtraDataOk returns a tuple with the ExtraData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraData

`func (o *PatchedPortfolioUpdate) SetExtraData(v map[string]interface{})`

SetExtraData sets ExtraData field to given value.

### HasExtraData

`func (o *PatchedPortfolioUpdate) HasExtraData() bool`

HasExtraData returns a boolean if a field has been set.

### GetClient

`func (o *PatchedPortfolioUpdate) GetClient() string`

GetClient returns the Client field if non-nil, zero value otherwise.

### GetClientOk

`func (o *PatchedPortfolioUpdate) GetClientOk() (*string, bool)`

GetClientOk returns a tuple with the Client field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClient

`func (o *PatchedPortfolioUpdate) SetClient(v string)`

SetClient sets Client field to given value.

### HasClient

`func (o *PatchedPortfolioUpdate) HasClient() bool`

HasClient returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


