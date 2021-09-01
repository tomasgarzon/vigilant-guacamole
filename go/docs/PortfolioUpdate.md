# PortfolioUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**Name** | **string** |  | 
**PortfolioType** | **string** |  | 
**RiskLevel** | Pointer to **NullableInt32** |  | [optional] 
**TimeHorizon** | Pointer to **NullableInt32** |  | [optional] 
**Status** | [**Status2efEnum**](Status2efEnum.md) |  | [readonly] 
**Currency** | Pointer to **string** |  | [optional] 
**Created** | **time.Time** |  | [readonly] 
**Activated** | **time.Time** |  | [readonly] 
**Advisor** | **string** |  | 
**AdviceEngine** | **string** |  | 
**ExtraData** | Pointer to **map[string]interface{}** |  | [optional] 
**Client** | Pointer to **string** |  | [optional] 

## Methods

### NewPortfolioUpdate

`func NewPortfolioUpdate(uuid string, name string, portfolioType string, status Status2efEnum, created time.Time, activated time.Time, advisor string, adviceEngine string, ) *PortfolioUpdate`

NewPortfolioUpdate instantiates a new PortfolioUpdate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPortfolioUpdateWithDefaults

`func NewPortfolioUpdateWithDefaults() *PortfolioUpdate`

NewPortfolioUpdateWithDefaults instantiates a new PortfolioUpdate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *PortfolioUpdate) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *PortfolioUpdate) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *PortfolioUpdate) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetName

`func (o *PortfolioUpdate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PortfolioUpdate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PortfolioUpdate) SetName(v string)`

SetName sets Name field to given value.


### GetPortfolioType

`func (o *PortfolioUpdate) GetPortfolioType() string`

GetPortfolioType returns the PortfolioType field if non-nil, zero value otherwise.

### GetPortfolioTypeOk

`func (o *PortfolioUpdate) GetPortfolioTypeOk() (*string, bool)`

GetPortfolioTypeOk returns a tuple with the PortfolioType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPortfolioType

`func (o *PortfolioUpdate) SetPortfolioType(v string)`

SetPortfolioType sets PortfolioType field to given value.


### GetRiskLevel

`func (o *PortfolioUpdate) GetRiskLevel() int32`

GetRiskLevel returns the RiskLevel field if non-nil, zero value otherwise.

### GetRiskLevelOk

`func (o *PortfolioUpdate) GetRiskLevelOk() (*int32, bool)`

GetRiskLevelOk returns a tuple with the RiskLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskLevel

`func (o *PortfolioUpdate) SetRiskLevel(v int32)`

SetRiskLevel sets RiskLevel field to given value.

### HasRiskLevel

`func (o *PortfolioUpdate) HasRiskLevel() bool`

HasRiskLevel returns a boolean if a field has been set.

### SetRiskLevelNil

`func (o *PortfolioUpdate) SetRiskLevelNil(b bool)`

 SetRiskLevelNil sets the value for RiskLevel to be an explicit nil

### UnsetRiskLevel
`func (o *PortfolioUpdate) UnsetRiskLevel()`

UnsetRiskLevel ensures that no value is present for RiskLevel, not even an explicit nil
### GetTimeHorizon

`func (o *PortfolioUpdate) GetTimeHorizon() int32`

GetTimeHorizon returns the TimeHorizon field if non-nil, zero value otherwise.

### GetTimeHorizonOk

`func (o *PortfolioUpdate) GetTimeHorizonOk() (*int32, bool)`

GetTimeHorizonOk returns a tuple with the TimeHorizon field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeHorizon

`func (o *PortfolioUpdate) SetTimeHorizon(v int32)`

SetTimeHorizon sets TimeHorizon field to given value.

### HasTimeHorizon

`func (o *PortfolioUpdate) HasTimeHorizon() bool`

HasTimeHorizon returns a boolean if a field has been set.

### SetTimeHorizonNil

`func (o *PortfolioUpdate) SetTimeHorizonNil(b bool)`

 SetTimeHorizonNil sets the value for TimeHorizon to be an explicit nil

### UnsetTimeHorizon
`func (o *PortfolioUpdate) UnsetTimeHorizon()`

UnsetTimeHorizon ensures that no value is present for TimeHorizon, not even an explicit nil
### GetStatus

`func (o *PortfolioUpdate) GetStatus() Status2efEnum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *PortfolioUpdate) GetStatusOk() (*Status2efEnum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *PortfolioUpdate) SetStatus(v Status2efEnum)`

SetStatus sets Status field to given value.


### GetCurrency

`func (o *PortfolioUpdate) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *PortfolioUpdate) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *PortfolioUpdate) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *PortfolioUpdate) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetCreated

`func (o *PortfolioUpdate) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *PortfolioUpdate) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *PortfolioUpdate) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetActivated

`func (o *PortfolioUpdate) GetActivated() time.Time`

GetActivated returns the Activated field if non-nil, zero value otherwise.

### GetActivatedOk

`func (o *PortfolioUpdate) GetActivatedOk() (*time.Time, bool)`

GetActivatedOk returns a tuple with the Activated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivated

`func (o *PortfolioUpdate) SetActivated(v time.Time)`

SetActivated sets Activated field to given value.


### GetAdvisor

`func (o *PortfolioUpdate) GetAdvisor() string`

GetAdvisor returns the Advisor field if non-nil, zero value otherwise.

### GetAdvisorOk

`func (o *PortfolioUpdate) GetAdvisorOk() (*string, bool)`

GetAdvisorOk returns a tuple with the Advisor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvisor

`func (o *PortfolioUpdate) SetAdvisor(v string)`

SetAdvisor sets Advisor field to given value.


### GetAdviceEngine

`func (o *PortfolioUpdate) GetAdviceEngine() string`

GetAdviceEngine returns the AdviceEngine field if non-nil, zero value otherwise.

### GetAdviceEngineOk

`func (o *PortfolioUpdate) GetAdviceEngineOk() (*string, bool)`

GetAdviceEngineOk returns a tuple with the AdviceEngine field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdviceEngine

`func (o *PortfolioUpdate) SetAdviceEngine(v string)`

SetAdviceEngine sets AdviceEngine field to given value.


### GetExtraData

`func (o *PortfolioUpdate) GetExtraData() map[string]interface{}`

GetExtraData returns the ExtraData field if non-nil, zero value otherwise.

### GetExtraDataOk

`func (o *PortfolioUpdate) GetExtraDataOk() (*map[string]interface{}, bool)`

GetExtraDataOk returns a tuple with the ExtraData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraData

`func (o *PortfolioUpdate) SetExtraData(v map[string]interface{})`

SetExtraData sets ExtraData field to given value.

### HasExtraData

`func (o *PortfolioUpdate) HasExtraData() bool`

HasExtraData returns a boolean if a field has been set.

### GetClient

`func (o *PortfolioUpdate) GetClient() string`

GetClient returns the Client field if non-nil, zero value otherwise.

### GetClientOk

`func (o *PortfolioUpdate) GetClientOk() (*string, bool)`

GetClientOk returns a tuple with the Client field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClient

`func (o *PortfolioUpdate) SetClient(v string)`

SetClient sets Client field to given value.

### HasClient

`func (o *PortfolioUpdate) HasClient() bool`

HasClient returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


