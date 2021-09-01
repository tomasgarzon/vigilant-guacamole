# ForecastDecumulationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InitialAmount** | **float64** |  | 
**RecurringAmount** | **float64** |  | 
**RiskLevel** | **int32** |  | 
**WithdrawalAmount** | **float64** |  | 
**RetirementAge** | **int32** |  | 
**LifeExpectancy** | Pointer to **int32** |  | [optional] 

## Methods

### NewForecastDecumulationRequest

`func NewForecastDecumulationRequest(initialAmount float64, recurringAmount float64, riskLevel int32, withdrawalAmount float64, retirementAge int32, ) *ForecastDecumulationRequest`

NewForecastDecumulationRequest instantiates a new ForecastDecumulationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewForecastDecumulationRequestWithDefaults

`func NewForecastDecumulationRequestWithDefaults() *ForecastDecumulationRequest`

NewForecastDecumulationRequestWithDefaults instantiates a new ForecastDecumulationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInitialAmount

`func (o *ForecastDecumulationRequest) GetInitialAmount() float64`

GetInitialAmount returns the InitialAmount field if non-nil, zero value otherwise.

### GetInitialAmountOk

`func (o *ForecastDecumulationRequest) GetInitialAmountOk() (*float64, bool)`

GetInitialAmountOk returns a tuple with the InitialAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInitialAmount

`func (o *ForecastDecumulationRequest) SetInitialAmount(v float64)`

SetInitialAmount sets InitialAmount field to given value.


### GetRecurringAmount

`func (o *ForecastDecumulationRequest) GetRecurringAmount() float64`

GetRecurringAmount returns the RecurringAmount field if non-nil, zero value otherwise.

### GetRecurringAmountOk

`func (o *ForecastDecumulationRequest) GetRecurringAmountOk() (*float64, bool)`

GetRecurringAmountOk returns a tuple with the RecurringAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecurringAmount

`func (o *ForecastDecumulationRequest) SetRecurringAmount(v float64)`

SetRecurringAmount sets RecurringAmount field to given value.


### GetRiskLevel

`func (o *ForecastDecumulationRequest) GetRiskLevel() int32`

GetRiskLevel returns the RiskLevel field if non-nil, zero value otherwise.

### GetRiskLevelOk

`func (o *ForecastDecumulationRequest) GetRiskLevelOk() (*int32, bool)`

GetRiskLevelOk returns a tuple with the RiskLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskLevel

`func (o *ForecastDecumulationRequest) SetRiskLevel(v int32)`

SetRiskLevel sets RiskLevel field to given value.


### GetWithdrawalAmount

`func (o *ForecastDecumulationRequest) GetWithdrawalAmount() float64`

GetWithdrawalAmount returns the WithdrawalAmount field if non-nil, zero value otherwise.

### GetWithdrawalAmountOk

`func (o *ForecastDecumulationRequest) GetWithdrawalAmountOk() (*float64, bool)`

GetWithdrawalAmountOk returns a tuple with the WithdrawalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWithdrawalAmount

`func (o *ForecastDecumulationRequest) SetWithdrawalAmount(v float64)`

SetWithdrawalAmount sets WithdrawalAmount field to given value.


### GetRetirementAge

`func (o *ForecastDecumulationRequest) GetRetirementAge() int32`

GetRetirementAge returns the RetirementAge field if non-nil, zero value otherwise.

### GetRetirementAgeOk

`func (o *ForecastDecumulationRequest) GetRetirementAgeOk() (*int32, bool)`

GetRetirementAgeOk returns a tuple with the RetirementAge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetirementAge

`func (o *ForecastDecumulationRequest) SetRetirementAge(v int32)`

SetRetirementAge sets RetirementAge field to given value.


### GetLifeExpectancy

`func (o *ForecastDecumulationRequest) GetLifeExpectancy() int32`

GetLifeExpectancy returns the LifeExpectancy field if non-nil, zero value otherwise.

### GetLifeExpectancyOk

`func (o *ForecastDecumulationRequest) GetLifeExpectancyOk() (*int32, bool)`

GetLifeExpectancyOk returns a tuple with the LifeExpectancy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLifeExpectancy

`func (o *ForecastDecumulationRequest) SetLifeExpectancy(v int32)`

SetLifeExpectancy sets LifeExpectancy field to given value.

### HasLifeExpectancy

`func (o *ForecastDecumulationRequest) HasLifeExpectancy() bool`

HasLifeExpectancy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


