# PortfolioDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**Name** | **string** |  | 
**PortfolioType** | **string** |  | 
**RiskLevel** | Pointer to **NullableInt32** |  | [optional] 
**TimeHorizon** | Pointer to **NullableInt32** |  | [optional] 
**Status** | Pointer to [**Status2efEnum**](Status2efEnum.md) |  | [optional] 
**ExtraData** | Pointer to **map[string]interface{}** | Additional Portfolio attributes | [optional] 
**Currency** | Pointer to **string** |  | [optional] 
**Created** | **time.Time** |  | [readonly] 
**Activated** | Pointer to **NullableTime** |  | [optional] 
**Balance** | **float64** |  | 
**Performance** | **float64** |  | 
**DepositReference** | **string** |  | [readonly] 
**Advisor** | Pointer to **NullableString** |  | [optional] 
**AdviceEngine** | Pointer to **NullableString** |  | [optional] 
**Client** | Pointer to **string** |  | [optional] 

## Methods

### NewPortfolioDetail

`func NewPortfolioDetail(uuid string, name string, portfolioType string, created time.Time, balance float64, performance float64, depositReference string, ) *PortfolioDetail`

NewPortfolioDetail instantiates a new PortfolioDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPortfolioDetailWithDefaults

`func NewPortfolioDetailWithDefaults() *PortfolioDetail`

NewPortfolioDetailWithDefaults instantiates a new PortfolioDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *PortfolioDetail) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *PortfolioDetail) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *PortfolioDetail) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetName

`func (o *PortfolioDetail) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PortfolioDetail) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PortfolioDetail) SetName(v string)`

SetName sets Name field to given value.


### GetPortfolioType

`func (o *PortfolioDetail) GetPortfolioType() string`

GetPortfolioType returns the PortfolioType field if non-nil, zero value otherwise.

### GetPortfolioTypeOk

`func (o *PortfolioDetail) GetPortfolioTypeOk() (*string, bool)`

GetPortfolioTypeOk returns a tuple with the PortfolioType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPortfolioType

`func (o *PortfolioDetail) SetPortfolioType(v string)`

SetPortfolioType sets PortfolioType field to given value.


### GetRiskLevel

`func (o *PortfolioDetail) GetRiskLevel() int32`

GetRiskLevel returns the RiskLevel field if non-nil, zero value otherwise.

### GetRiskLevelOk

`func (o *PortfolioDetail) GetRiskLevelOk() (*int32, bool)`

GetRiskLevelOk returns a tuple with the RiskLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskLevel

`func (o *PortfolioDetail) SetRiskLevel(v int32)`

SetRiskLevel sets RiskLevel field to given value.

### HasRiskLevel

`func (o *PortfolioDetail) HasRiskLevel() bool`

HasRiskLevel returns a boolean if a field has been set.

### SetRiskLevelNil

`func (o *PortfolioDetail) SetRiskLevelNil(b bool)`

 SetRiskLevelNil sets the value for RiskLevel to be an explicit nil

### UnsetRiskLevel
`func (o *PortfolioDetail) UnsetRiskLevel()`

UnsetRiskLevel ensures that no value is present for RiskLevel, not even an explicit nil
### GetTimeHorizon

`func (o *PortfolioDetail) GetTimeHorizon() int32`

GetTimeHorizon returns the TimeHorizon field if non-nil, zero value otherwise.

### GetTimeHorizonOk

`func (o *PortfolioDetail) GetTimeHorizonOk() (*int32, bool)`

GetTimeHorizonOk returns a tuple with the TimeHorizon field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeHorizon

`func (o *PortfolioDetail) SetTimeHorizon(v int32)`

SetTimeHorizon sets TimeHorizon field to given value.

### HasTimeHorizon

`func (o *PortfolioDetail) HasTimeHorizon() bool`

HasTimeHorizon returns a boolean if a field has been set.

### SetTimeHorizonNil

`func (o *PortfolioDetail) SetTimeHorizonNil(b bool)`

 SetTimeHorizonNil sets the value for TimeHorizon to be an explicit nil

### UnsetTimeHorizon
`func (o *PortfolioDetail) UnsetTimeHorizon()`

UnsetTimeHorizon ensures that no value is present for TimeHorizon, not even an explicit nil
### GetStatus

`func (o *PortfolioDetail) GetStatus() Status2efEnum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *PortfolioDetail) GetStatusOk() (*Status2efEnum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *PortfolioDetail) SetStatus(v Status2efEnum)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *PortfolioDetail) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetExtraData

`func (o *PortfolioDetail) GetExtraData() map[string]interface{}`

GetExtraData returns the ExtraData field if non-nil, zero value otherwise.

### GetExtraDataOk

`func (o *PortfolioDetail) GetExtraDataOk() (*map[string]interface{}, bool)`

GetExtraDataOk returns a tuple with the ExtraData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraData

`func (o *PortfolioDetail) SetExtraData(v map[string]interface{})`

SetExtraData sets ExtraData field to given value.

### HasExtraData

`func (o *PortfolioDetail) HasExtraData() bool`

HasExtraData returns a boolean if a field has been set.

### SetExtraDataNil

`func (o *PortfolioDetail) SetExtraDataNil(b bool)`

 SetExtraDataNil sets the value for ExtraData to be an explicit nil

### UnsetExtraData
`func (o *PortfolioDetail) UnsetExtraData()`

UnsetExtraData ensures that no value is present for ExtraData, not even an explicit nil
### GetCurrency

`func (o *PortfolioDetail) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *PortfolioDetail) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *PortfolioDetail) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *PortfolioDetail) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetCreated

`func (o *PortfolioDetail) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *PortfolioDetail) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *PortfolioDetail) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetActivated

`func (o *PortfolioDetail) GetActivated() time.Time`

GetActivated returns the Activated field if non-nil, zero value otherwise.

### GetActivatedOk

`func (o *PortfolioDetail) GetActivatedOk() (*time.Time, bool)`

GetActivatedOk returns a tuple with the Activated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivated

`func (o *PortfolioDetail) SetActivated(v time.Time)`

SetActivated sets Activated field to given value.

### HasActivated

`func (o *PortfolioDetail) HasActivated() bool`

HasActivated returns a boolean if a field has been set.

### SetActivatedNil

`func (o *PortfolioDetail) SetActivatedNil(b bool)`

 SetActivatedNil sets the value for Activated to be an explicit nil

### UnsetActivated
`func (o *PortfolioDetail) UnsetActivated()`

UnsetActivated ensures that no value is present for Activated, not even an explicit nil
### GetBalance

`func (o *PortfolioDetail) GetBalance() float64`

GetBalance returns the Balance field if non-nil, zero value otherwise.

### GetBalanceOk

`func (o *PortfolioDetail) GetBalanceOk() (*float64, bool)`

GetBalanceOk returns a tuple with the Balance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalance

`func (o *PortfolioDetail) SetBalance(v float64)`

SetBalance sets Balance field to given value.


### GetPerformance

`func (o *PortfolioDetail) GetPerformance() float64`

GetPerformance returns the Performance field if non-nil, zero value otherwise.

### GetPerformanceOk

`func (o *PortfolioDetail) GetPerformanceOk() (*float64, bool)`

GetPerformanceOk returns a tuple with the Performance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPerformance

`func (o *PortfolioDetail) SetPerformance(v float64)`

SetPerformance sets Performance field to given value.


### GetDepositReference

`func (o *PortfolioDetail) GetDepositReference() string`

GetDepositReference returns the DepositReference field if non-nil, zero value otherwise.

### GetDepositReferenceOk

`func (o *PortfolioDetail) GetDepositReferenceOk() (*string, bool)`

GetDepositReferenceOk returns a tuple with the DepositReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositReference

`func (o *PortfolioDetail) SetDepositReference(v string)`

SetDepositReference sets DepositReference field to given value.


### GetAdvisor

`func (o *PortfolioDetail) GetAdvisor() string`

GetAdvisor returns the Advisor field if non-nil, zero value otherwise.

### GetAdvisorOk

`func (o *PortfolioDetail) GetAdvisorOk() (*string, bool)`

GetAdvisorOk returns a tuple with the Advisor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvisor

`func (o *PortfolioDetail) SetAdvisor(v string)`

SetAdvisor sets Advisor field to given value.

### HasAdvisor

`func (o *PortfolioDetail) HasAdvisor() bool`

HasAdvisor returns a boolean if a field has been set.

### SetAdvisorNil

`func (o *PortfolioDetail) SetAdvisorNil(b bool)`

 SetAdvisorNil sets the value for Advisor to be an explicit nil

### UnsetAdvisor
`func (o *PortfolioDetail) UnsetAdvisor()`

UnsetAdvisor ensures that no value is present for Advisor, not even an explicit nil
### GetAdviceEngine

`func (o *PortfolioDetail) GetAdviceEngine() string`

GetAdviceEngine returns the AdviceEngine field if non-nil, zero value otherwise.

### GetAdviceEngineOk

`func (o *PortfolioDetail) GetAdviceEngineOk() (*string, bool)`

GetAdviceEngineOk returns a tuple with the AdviceEngine field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdviceEngine

`func (o *PortfolioDetail) SetAdviceEngine(v string)`

SetAdviceEngine sets AdviceEngine field to given value.

### HasAdviceEngine

`func (o *PortfolioDetail) HasAdviceEngine() bool`

HasAdviceEngine returns a boolean if a field has been set.

### SetAdviceEngineNil

`func (o *PortfolioDetail) SetAdviceEngineNil(b bool)`

 SetAdviceEngineNil sets the value for AdviceEngine to be an explicit nil

### UnsetAdviceEngine
`func (o *PortfolioDetail) UnsetAdviceEngine()`

UnsetAdviceEngine ensures that no value is present for AdviceEngine, not even an explicit nil
### GetClient

`func (o *PortfolioDetail) GetClient() string`

GetClient returns the Client field if non-nil, zero value otherwise.

### GetClientOk

`func (o *PortfolioDetail) GetClientOk() (*string, bool)`

GetClientOk returns a tuple with the Client field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClient

`func (o *PortfolioDetail) SetClient(v string)`

SetClient sets Client field to given value.

### HasClient

`func (o *PortfolioDetail) HasClient() bool`

HasClient returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


