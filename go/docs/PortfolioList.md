# PortfolioList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**Client** | Pointer to **string** |  | [optional] 
**Name** | **string** |  | [readonly] 
**PortfolioType** | **string** |  | 
**RiskLevel** | **int32** |  | [readonly] 
**TimeHorizon** | **int32** |  | [readonly] 
**Status** | [**Status2efEnum**](Status2efEnum.md) |  | [readonly] 
**Balance** | **float64** |  | 
**Invested** | **float64** |  | 
**Currency** | Pointer to **string** |  | [optional] 
**Created** | **time.Time** |  | [readonly] 
**Advisor** | Pointer to **NullableString** |  | [optional] 
**AdviceEngine** | Pointer to **NullableString** |  | [optional] 

## Methods

### NewPortfolioList

`func NewPortfolioList(uuid string, name string, portfolioType string, riskLevel int32, timeHorizon int32, status Status2efEnum, balance float64, invested float64, created time.Time, ) *PortfolioList`

NewPortfolioList instantiates a new PortfolioList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPortfolioListWithDefaults

`func NewPortfolioListWithDefaults() *PortfolioList`

NewPortfolioListWithDefaults instantiates a new PortfolioList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *PortfolioList) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *PortfolioList) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *PortfolioList) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetClient

`func (o *PortfolioList) GetClient() string`

GetClient returns the Client field if non-nil, zero value otherwise.

### GetClientOk

`func (o *PortfolioList) GetClientOk() (*string, bool)`

GetClientOk returns a tuple with the Client field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClient

`func (o *PortfolioList) SetClient(v string)`

SetClient sets Client field to given value.

### HasClient

`func (o *PortfolioList) HasClient() bool`

HasClient returns a boolean if a field has been set.

### GetName

`func (o *PortfolioList) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PortfolioList) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PortfolioList) SetName(v string)`

SetName sets Name field to given value.


### GetPortfolioType

`func (o *PortfolioList) GetPortfolioType() string`

GetPortfolioType returns the PortfolioType field if non-nil, zero value otherwise.

### GetPortfolioTypeOk

`func (o *PortfolioList) GetPortfolioTypeOk() (*string, bool)`

GetPortfolioTypeOk returns a tuple with the PortfolioType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPortfolioType

`func (o *PortfolioList) SetPortfolioType(v string)`

SetPortfolioType sets PortfolioType field to given value.


### GetRiskLevel

`func (o *PortfolioList) GetRiskLevel() int32`

GetRiskLevel returns the RiskLevel field if non-nil, zero value otherwise.

### GetRiskLevelOk

`func (o *PortfolioList) GetRiskLevelOk() (*int32, bool)`

GetRiskLevelOk returns a tuple with the RiskLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskLevel

`func (o *PortfolioList) SetRiskLevel(v int32)`

SetRiskLevel sets RiskLevel field to given value.


### GetTimeHorizon

`func (o *PortfolioList) GetTimeHorizon() int32`

GetTimeHorizon returns the TimeHorizon field if non-nil, zero value otherwise.

### GetTimeHorizonOk

`func (o *PortfolioList) GetTimeHorizonOk() (*int32, bool)`

GetTimeHorizonOk returns a tuple with the TimeHorizon field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeHorizon

`func (o *PortfolioList) SetTimeHorizon(v int32)`

SetTimeHorizon sets TimeHorizon field to given value.


### GetStatus

`func (o *PortfolioList) GetStatus() Status2efEnum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *PortfolioList) GetStatusOk() (*Status2efEnum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *PortfolioList) SetStatus(v Status2efEnum)`

SetStatus sets Status field to given value.


### GetBalance

`func (o *PortfolioList) GetBalance() float64`

GetBalance returns the Balance field if non-nil, zero value otherwise.

### GetBalanceOk

`func (o *PortfolioList) GetBalanceOk() (*float64, bool)`

GetBalanceOk returns a tuple with the Balance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalance

`func (o *PortfolioList) SetBalance(v float64)`

SetBalance sets Balance field to given value.


### GetInvested

`func (o *PortfolioList) GetInvested() float64`

GetInvested returns the Invested field if non-nil, zero value otherwise.

### GetInvestedOk

`func (o *PortfolioList) GetInvestedOk() (*float64, bool)`

GetInvestedOk returns a tuple with the Invested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvested

`func (o *PortfolioList) SetInvested(v float64)`

SetInvested sets Invested field to given value.


### GetCurrency

`func (o *PortfolioList) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *PortfolioList) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *PortfolioList) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *PortfolioList) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetCreated

`func (o *PortfolioList) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *PortfolioList) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *PortfolioList) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetAdvisor

`func (o *PortfolioList) GetAdvisor() string`

GetAdvisor returns the Advisor field if non-nil, zero value otherwise.

### GetAdvisorOk

`func (o *PortfolioList) GetAdvisorOk() (*string, bool)`

GetAdvisorOk returns a tuple with the Advisor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvisor

`func (o *PortfolioList) SetAdvisor(v string)`

SetAdvisor sets Advisor field to given value.

### HasAdvisor

`func (o *PortfolioList) HasAdvisor() bool`

HasAdvisor returns a boolean if a field has been set.

### SetAdvisorNil

`func (o *PortfolioList) SetAdvisorNil(b bool)`

 SetAdvisorNil sets the value for Advisor to be an explicit nil

### UnsetAdvisor
`func (o *PortfolioList) UnsetAdvisor()`

UnsetAdvisor ensures that no value is present for Advisor, not even an explicit nil
### GetAdviceEngine

`func (o *PortfolioList) GetAdviceEngine() string`

GetAdviceEngine returns the AdviceEngine field if non-nil, zero value otherwise.

### GetAdviceEngineOk

`func (o *PortfolioList) GetAdviceEngineOk() (*string, bool)`

GetAdviceEngineOk returns a tuple with the AdviceEngine field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdviceEngine

`func (o *PortfolioList) SetAdviceEngine(v string)`

SetAdviceEngine sets AdviceEngine field to given value.

### HasAdviceEngine

`func (o *PortfolioList) HasAdviceEngine() bool`

HasAdviceEngine returns a boolean if a field has been set.

### SetAdviceEngineNil

`func (o *PortfolioList) SetAdviceEngineNil(b bool)`

 SetAdviceEngineNil sets the value for AdviceEngine to be an explicit nil

### UnsetAdviceEngine
`func (o *PortfolioList) UnsetAdviceEngine()`

UnsetAdviceEngine ensures that no value is present for AdviceEngine, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


