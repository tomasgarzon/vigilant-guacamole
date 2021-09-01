# PortfolioCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**Name** | **string** |  | 
**PortfolioType** | **string** |  | 
**RiskLevel** | **int32** |  | 
**TimeHorizon** | **int32** |  | 
**Status** | [**Status2efEnum**](Status2efEnum.md) |  | [readonly] 
**Currency** | Pointer to **string** |  | [optional] 
**Created** | **time.Time** |  | [readonly] 
**Activated** | **time.Time** |  | [readonly] 
**Advisor** | **string** |  | 
**AdviceEngine** | **string** |  | 
**ExtraData** | Pointer to **map[string]interface{}** |  | [optional] 
**Client** | Pointer to **string** |  | [optional] 

## Methods

### NewPortfolioCreate

`func NewPortfolioCreate(uuid string, name string, portfolioType string, riskLevel int32, timeHorizon int32, status Status2efEnum, created time.Time, activated time.Time, advisor string, adviceEngine string, ) *PortfolioCreate`

NewPortfolioCreate instantiates a new PortfolioCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPortfolioCreateWithDefaults

`func NewPortfolioCreateWithDefaults() *PortfolioCreate`

NewPortfolioCreateWithDefaults instantiates a new PortfolioCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *PortfolioCreate) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *PortfolioCreate) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *PortfolioCreate) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetName

`func (o *PortfolioCreate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PortfolioCreate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PortfolioCreate) SetName(v string)`

SetName sets Name field to given value.


### GetPortfolioType

`func (o *PortfolioCreate) GetPortfolioType() string`

GetPortfolioType returns the PortfolioType field if non-nil, zero value otherwise.

### GetPortfolioTypeOk

`func (o *PortfolioCreate) GetPortfolioTypeOk() (*string, bool)`

GetPortfolioTypeOk returns a tuple with the PortfolioType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPortfolioType

`func (o *PortfolioCreate) SetPortfolioType(v string)`

SetPortfolioType sets PortfolioType field to given value.


### GetRiskLevel

`func (o *PortfolioCreate) GetRiskLevel() int32`

GetRiskLevel returns the RiskLevel field if non-nil, zero value otherwise.

### GetRiskLevelOk

`func (o *PortfolioCreate) GetRiskLevelOk() (*int32, bool)`

GetRiskLevelOk returns a tuple with the RiskLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskLevel

`func (o *PortfolioCreate) SetRiskLevel(v int32)`

SetRiskLevel sets RiskLevel field to given value.


### GetTimeHorizon

`func (o *PortfolioCreate) GetTimeHorizon() int32`

GetTimeHorizon returns the TimeHorizon field if non-nil, zero value otherwise.

### GetTimeHorizonOk

`func (o *PortfolioCreate) GetTimeHorizonOk() (*int32, bool)`

GetTimeHorizonOk returns a tuple with the TimeHorizon field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeHorizon

`func (o *PortfolioCreate) SetTimeHorizon(v int32)`

SetTimeHorizon sets TimeHorizon field to given value.


### GetStatus

`func (o *PortfolioCreate) GetStatus() Status2efEnum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *PortfolioCreate) GetStatusOk() (*Status2efEnum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *PortfolioCreate) SetStatus(v Status2efEnum)`

SetStatus sets Status field to given value.


### GetCurrency

`func (o *PortfolioCreate) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *PortfolioCreate) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *PortfolioCreate) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *PortfolioCreate) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetCreated

`func (o *PortfolioCreate) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *PortfolioCreate) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *PortfolioCreate) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetActivated

`func (o *PortfolioCreate) GetActivated() time.Time`

GetActivated returns the Activated field if non-nil, zero value otherwise.

### GetActivatedOk

`func (o *PortfolioCreate) GetActivatedOk() (*time.Time, bool)`

GetActivatedOk returns a tuple with the Activated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivated

`func (o *PortfolioCreate) SetActivated(v time.Time)`

SetActivated sets Activated field to given value.


### GetAdvisor

`func (o *PortfolioCreate) GetAdvisor() string`

GetAdvisor returns the Advisor field if non-nil, zero value otherwise.

### GetAdvisorOk

`func (o *PortfolioCreate) GetAdvisorOk() (*string, bool)`

GetAdvisorOk returns a tuple with the Advisor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvisor

`func (o *PortfolioCreate) SetAdvisor(v string)`

SetAdvisor sets Advisor field to given value.


### GetAdviceEngine

`func (o *PortfolioCreate) GetAdviceEngine() string`

GetAdviceEngine returns the AdviceEngine field if non-nil, zero value otherwise.

### GetAdviceEngineOk

`func (o *PortfolioCreate) GetAdviceEngineOk() (*string, bool)`

GetAdviceEngineOk returns a tuple with the AdviceEngine field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdviceEngine

`func (o *PortfolioCreate) SetAdviceEngine(v string)`

SetAdviceEngine sets AdviceEngine field to given value.


### GetExtraData

`func (o *PortfolioCreate) GetExtraData() map[string]interface{}`

GetExtraData returns the ExtraData field if non-nil, zero value otherwise.

### GetExtraDataOk

`func (o *PortfolioCreate) GetExtraDataOk() (*map[string]interface{}, bool)`

GetExtraDataOk returns a tuple with the ExtraData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraData

`func (o *PortfolioCreate) SetExtraData(v map[string]interface{})`

SetExtraData sets ExtraData field to given value.

### HasExtraData

`func (o *PortfolioCreate) HasExtraData() bool`

HasExtraData returns a boolean if a field has been set.

### GetClient

`func (o *PortfolioCreate) GetClient() string`

GetClient returns the Client field if non-nil, zero value otherwise.

### GetClientOk

`func (o *PortfolioCreate) GetClientOk() (*string, bool)`

GetClientOk returns a tuple with the Client field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClient

`func (o *PortfolioCreate) SetClient(v string)`

SetClient sets Client field to given value.

### HasClient

`func (o *PortfolioCreate) HasClient() bool`

HasClient returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


