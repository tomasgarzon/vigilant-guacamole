# ClientDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | **string** |  | 
**Birthdate** | Pointer to **string** |  | [optional] 
**TosConsent** | **bool** |  | 
**MarketingConsent** | **bool** |  | 
**DataConsent** | **bool** |  | 
**TosConsentDate** | **string** |  | 
**TaxInformation** | **[]string** |  | [readonly] 
**CountryBirth** | [**CountryField**](CountryField.md) |  | 
**LastLogin** | **time.Time** |  | [readonly] 
**ReferredBy** | **NullableString** |  | 
**SuccessfulReferrals** | **int32** |  | [readonly] 
**KycVerified** | **bool** |  | [readonly] 
**IsVerified** | **bool** |  | [readonly] 
**FeeSegments** | **[]string** |  | [readonly] 
**ExtraData** | **map[string]interface{}** |  | 
**Portfolios** | **[]string** |  | [readonly] 
**OnboardedBy** | Pointer to **NullableString** |  | [optional] 
**RiskLevel** | **int32** |  | [readonly] 
**OnboardingToken** | **string** |  | [readonly] 
**Uuid** | **string** |  | [readonly] 
**Created** | **time.Time** |  | [readonly] 
**Updated** | **time.Time** |  | [readonly] 
**Comments** | Pointer to **NullableString** |  | [optional] 
**Status** | [**StatusB65Enum**](StatusB65Enum.md) |  | [readonly] 
**EmailVerified** | Pointer to **bool** |  | [optional] 
**EmailVerifyLastRequest** | Pointer to **NullableTime** |  | [optional] 
**Title** | Pointer to [**NullableOneOfTitleEnumBlankEnumNullEnum**](oneOf&lt;TitleEnum,BlankEnum,NullEnum&gt;.md) |  | [optional] 
**FirstName** | Pointer to **NullableString** |  | [optional] 
**MiddleName** | Pointer to **NullableString** |  | [optional] 
**LastName** | Pointer to **NullableString** |  | [optional] 
**Gender** | Pointer to [**NullableOneOfGenderEnumBlankEnumNullEnum**](oneOf&lt;GenderEnum,BlankEnum,NullEnum&gt;.md) |  | [optional] 
**MaritalStatus** | Pointer to [**NullableOneOfMaritalStatusEnumBlankEnumNullEnum**](oneOf&lt;MaritalStatusEnum,BlankEnum,NullEnum&gt;.md) |  | [optional] 
**PhoneNumber** | Pointer to **NullableString** |  | [optional] 
**PhoneNumberVerified** | Pointer to **NullableTime** |  | [optional] 
**Language** | **string** |  | 
**EmploymentStatus** | Pointer to [**NullableOneOfEmploymentStatusEnumBlankEnumNullEnum**](oneOf&lt;EmploymentStatusEnum,BlankEnum,NullEnum&gt;.md) |  | [optional] 
**Profession** | Pointer to **NullableString** |  | [optional] 
**ReferralCode** | Pointer to **NullableString** |  | [optional] 
**Activated** | Pointer to **NullableTime** |  | [optional] 
**UtmSource** | Pointer to **string** |  | [optional] 
**UtmMedium** | Pointer to **string** |  | [optional] 
**UtmCampaign** | Pointer to **string** |  | [optional] 
**UtmTerm** | Pointer to **string** |  | [optional] 
**UtmContent** | Pointer to **string** |  | [optional] 
**MarketingConsentDate** | **string** |  | [readonly] 
**DataConsentDate** | **string** |  | [readonly] 

## Methods

### NewClientDetail

`func NewClientDetail(email string, tosConsent bool, marketingConsent bool, dataConsent bool, tosConsentDate string, taxInformation []string, countryBirth CountryField, lastLogin time.Time, referredBy NullableString, successfulReferrals int32, kycVerified bool, isVerified bool, feeSegments []string, extraData map[string]interface{}, portfolios []string, riskLevel int32, onboardingToken string, uuid string, created time.Time, updated time.Time, status StatusB65Enum, language string, marketingConsentDate string, dataConsentDate string, ) *ClientDetail`

NewClientDetail instantiates a new ClientDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewClientDetailWithDefaults

`func NewClientDetailWithDefaults() *ClientDetail`

NewClientDetailWithDefaults instantiates a new ClientDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmail

`func (o *ClientDetail) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *ClientDetail) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *ClientDetail) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetBirthdate

`func (o *ClientDetail) GetBirthdate() string`

GetBirthdate returns the Birthdate field if non-nil, zero value otherwise.

### GetBirthdateOk

`func (o *ClientDetail) GetBirthdateOk() (*string, bool)`

GetBirthdateOk returns a tuple with the Birthdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBirthdate

`func (o *ClientDetail) SetBirthdate(v string)`

SetBirthdate sets Birthdate field to given value.

### HasBirthdate

`func (o *ClientDetail) HasBirthdate() bool`

HasBirthdate returns a boolean if a field has been set.

### GetTosConsent

`func (o *ClientDetail) GetTosConsent() bool`

GetTosConsent returns the TosConsent field if non-nil, zero value otherwise.

### GetTosConsentOk

`func (o *ClientDetail) GetTosConsentOk() (*bool, bool)`

GetTosConsentOk returns a tuple with the TosConsent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTosConsent

`func (o *ClientDetail) SetTosConsent(v bool)`

SetTosConsent sets TosConsent field to given value.


### GetMarketingConsent

`func (o *ClientDetail) GetMarketingConsent() bool`

GetMarketingConsent returns the MarketingConsent field if non-nil, zero value otherwise.

### GetMarketingConsentOk

`func (o *ClientDetail) GetMarketingConsentOk() (*bool, bool)`

GetMarketingConsentOk returns a tuple with the MarketingConsent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketingConsent

`func (o *ClientDetail) SetMarketingConsent(v bool)`

SetMarketingConsent sets MarketingConsent field to given value.


### GetDataConsent

`func (o *ClientDetail) GetDataConsent() bool`

GetDataConsent returns the DataConsent field if non-nil, zero value otherwise.

### GetDataConsentOk

`func (o *ClientDetail) GetDataConsentOk() (*bool, bool)`

GetDataConsentOk returns a tuple with the DataConsent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataConsent

`func (o *ClientDetail) SetDataConsent(v bool)`

SetDataConsent sets DataConsent field to given value.


### GetTosConsentDate

`func (o *ClientDetail) GetTosConsentDate() string`

GetTosConsentDate returns the TosConsentDate field if non-nil, zero value otherwise.

### GetTosConsentDateOk

`func (o *ClientDetail) GetTosConsentDateOk() (*string, bool)`

GetTosConsentDateOk returns a tuple with the TosConsentDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTosConsentDate

`func (o *ClientDetail) SetTosConsentDate(v string)`

SetTosConsentDate sets TosConsentDate field to given value.


### GetTaxInformation

`func (o *ClientDetail) GetTaxInformation() []string`

GetTaxInformation returns the TaxInformation field if non-nil, zero value otherwise.

### GetTaxInformationOk

`func (o *ClientDetail) GetTaxInformationOk() (*[]string, bool)`

GetTaxInformationOk returns a tuple with the TaxInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxInformation

`func (o *ClientDetail) SetTaxInformation(v []string)`

SetTaxInformation sets TaxInformation field to given value.


### GetCountryBirth

`func (o *ClientDetail) GetCountryBirth() CountryField`

GetCountryBirth returns the CountryBirth field if non-nil, zero value otherwise.

### GetCountryBirthOk

`func (o *ClientDetail) GetCountryBirthOk() (*CountryField, bool)`

GetCountryBirthOk returns a tuple with the CountryBirth field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountryBirth

`func (o *ClientDetail) SetCountryBirth(v CountryField)`

SetCountryBirth sets CountryBirth field to given value.


### GetLastLogin

`func (o *ClientDetail) GetLastLogin() time.Time`

GetLastLogin returns the LastLogin field if non-nil, zero value otherwise.

### GetLastLoginOk

`func (o *ClientDetail) GetLastLoginOk() (*time.Time, bool)`

GetLastLoginOk returns a tuple with the LastLogin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastLogin

`func (o *ClientDetail) SetLastLogin(v time.Time)`

SetLastLogin sets LastLogin field to given value.


### GetReferredBy

`func (o *ClientDetail) GetReferredBy() string`

GetReferredBy returns the ReferredBy field if non-nil, zero value otherwise.

### GetReferredByOk

`func (o *ClientDetail) GetReferredByOk() (*string, bool)`

GetReferredByOk returns a tuple with the ReferredBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferredBy

`func (o *ClientDetail) SetReferredBy(v string)`

SetReferredBy sets ReferredBy field to given value.


### SetReferredByNil

`func (o *ClientDetail) SetReferredByNil(b bool)`

 SetReferredByNil sets the value for ReferredBy to be an explicit nil

### UnsetReferredBy
`func (o *ClientDetail) UnsetReferredBy()`

UnsetReferredBy ensures that no value is present for ReferredBy, not even an explicit nil
### GetSuccessfulReferrals

`func (o *ClientDetail) GetSuccessfulReferrals() int32`

GetSuccessfulReferrals returns the SuccessfulReferrals field if non-nil, zero value otherwise.

### GetSuccessfulReferralsOk

`func (o *ClientDetail) GetSuccessfulReferralsOk() (*int32, bool)`

GetSuccessfulReferralsOk returns a tuple with the SuccessfulReferrals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccessfulReferrals

`func (o *ClientDetail) SetSuccessfulReferrals(v int32)`

SetSuccessfulReferrals sets SuccessfulReferrals field to given value.


### GetKycVerified

`func (o *ClientDetail) GetKycVerified() bool`

GetKycVerified returns the KycVerified field if non-nil, zero value otherwise.

### GetKycVerifiedOk

`func (o *ClientDetail) GetKycVerifiedOk() (*bool, bool)`

GetKycVerifiedOk returns a tuple with the KycVerified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKycVerified

`func (o *ClientDetail) SetKycVerified(v bool)`

SetKycVerified sets KycVerified field to given value.


### GetIsVerified

`func (o *ClientDetail) GetIsVerified() bool`

GetIsVerified returns the IsVerified field if non-nil, zero value otherwise.

### GetIsVerifiedOk

`func (o *ClientDetail) GetIsVerifiedOk() (*bool, bool)`

GetIsVerifiedOk returns a tuple with the IsVerified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsVerified

`func (o *ClientDetail) SetIsVerified(v bool)`

SetIsVerified sets IsVerified field to given value.


### GetFeeSegments

`func (o *ClientDetail) GetFeeSegments() []string`

GetFeeSegments returns the FeeSegments field if non-nil, zero value otherwise.

### GetFeeSegmentsOk

`func (o *ClientDetail) GetFeeSegmentsOk() (*[]string, bool)`

GetFeeSegmentsOk returns a tuple with the FeeSegments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeeSegments

`func (o *ClientDetail) SetFeeSegments(v []string)`

SetFeeSegments sets FeeSegments field to given value.


### GetExtraData

`func (o *ClientDetail) GetExtraData() map[string]interface{}`

GetExtraData returns the ExtraData field if non-nil, zero value otherwise.

### GetExtraDataOk

`func (o *ClientDetail) GetExtraDataOk() (*map[string]interface{}, bool)`

GetExtraDataOk returns a tuple with the ExtraData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraData

`func (o *ClientDetail) SetExtraData(v map[string]interface{})`

SetExtraData sets ExtraData field to given value.


### GetPortfolios

`func (o *ClientDetail) GetPortfolios() []string`

GetPortfolios returns the Portfolios field if non-nil, zero value otherwise.

### GetPortfoliosOk

`func (o *ClientDetail) GetPortfoliosOk() (*[]string, bool)`

GetPortfoliosOk returns a tuple with the Portfolios field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPortfolios

`func (o *ClientDetail) SetPortfolios(v []string)`

SetPortfolios sets Portfolios field to given value.


### GetOnboardedBy

`func (o *ClientDetail) GetOnboardedBy() string`

GetOnboardedBy returns the OnboardedBy field if non-nil, zero value otherwise.

### GetOnboardedByOk

`func (o *ClientDetail) GetOnboardedByOk() (*string, bool)`

GetOnboardedByOk returns a tuple with the OnboardedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnboardedBy

`func (o *ClientDetail) SetOnboardedBy(v string)`

SetOnboardedBy sets OnboardedBy field to given value.

### HasOnboardedBy

`func (o *ClientDetail) HasOnboardedBy() bool`

HasOnboardedBy returns a boolean if a field has been set.

### SetOnboardedByNil

`func (o *ClientDetail) SetOnboardedByNil(b bool)`

 SetOnboardedByNil sets the value for OnboardedBy to be an explicit nil

### UnsetOnboardedBy
`func (o *ClientDetail) UnsetOnboardedBy()`

UnsetOnboardedBy ensures that no value is present for OnboardedBy, not even an explicit nil
### GetRiskLevel

`func (o *ClientDetail) GetRiskLevel() int32`

GetRiskLevel returns the RiskLevel field if non-nil, zero value otherwise.

### GetRiskLevelOk

`func (o *ClientDetail) GetRiskLevelOk() (*int32, bool)`

GetRiskLevelOk returns a tuple with the RiskLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskLevel

`func (o *ClientDetail) SetRiskLevel(v int32)`

SetRiskLevel sets RiskLevel field to given value.


### GetOnboardingToken

`func (o *ClientDetail) GetOnboardingToken() string`

GetOnboardingToken returns the OnboardingToken field if non-nil, zero value otherwise.

### GetOnboardingTokenOk

`func (o *ClientDetail) GetOnboardingTokenOk() (*string, bool)`

GetOnboardingTokenOk returns a tuple with the OnboardingToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnboardingToken

`func (o *ClientDetail) SetOnboardingToken(v string)`

SetOnboardingToken sets OnboardingToken field to given value.


### GetUuid

`func (o *ClientDetail) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *ClientDetail) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *ClientDetail) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetCreated

`func (o *ClientDetail) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *ClientDetail) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *ClientDetail) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetUpdated

`func (o *ClientDetail) GetUpdated() time.Time`

GetUpdated returns the Updated field if non-nil, zero value otherwise.

### GetUpdatedOk

`func (o *ClientDetail) GetUpdatedOk() (*time.Time, bool)`

GetUpdatedOk returns a tuple with the Updated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdated

`func (o *ClientDetail) SetUpdated(v time.Time)`

SetUpdated sets Updated field to given value.


### GetComments

`func (o *ClientDetail) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *ClientDetail) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *ClientDetail) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *ClientDetail) HasComments() bool`

HasComments returns a boolean if a field has been set.

### SetCommentsNil

`func (o *ClientDetail) SetCommentsNil(b bool)`

 SetCommentsNil sets the value for Comments to be an explicit nil

### UnsetComments
`func (o *ClientDetail) UnsetComments()`

UnsetComments ensures that no value is present for Comments, not even an explicit nil
### GetStatus

`func (o *ClientDetail) GetStatus() StatusB65Enum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ClientDetail) GetStatusOk() (*StatusB65Enum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ClientDetail) SetStatus(v StatusB65Enum)`

SetStatus sets Status field to given value.


### GetEmailVerified

`func (o *ClientDetail) GetEmailVerified() bool`

GetEmailVerified returns the EmailVerified field if non-nil, zero value otherwise.

### GetEmailVerifiedOk

`func (o *ClientDetail) GetEmailVerifiedOk() (*bool, bool)`

GetEmailVerifiedOk returns a tuple with the EmailVerified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailVerified

`func (o *ClientDetail) SetEmailVerified(v bool)`

SetEmailVerified sets EmailVerified field to given value.

### HasEmailVerified

`func (o *ClientDetail) HasEmailVerified() bool`

HasEmailVerified returns a boolean if a field has been set.

### GetEmailVerifyLastRequest

`func (o *ClientDetail) GetEmailVerifyLastRequest() time.Time`

GetEmailVerifyLastRequest returns the EmailVerifyLastRequest field if non-nil, zero value otherwise.

### GetEmailVerifyLastRequestOk

`func (o *ClientDetail) GetEmailVerifyLastRequestOk() (*time.Time, bool)`

GetEmailVerifyLastRequestOk returns a tuple with the EmailVerifyLastRequest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailVerifyLastRequest

`func (o *ClientDetail) SetEmailVerifyLastRequest(v time.Time)`

SetEmailVerifyLastRequest sets EmailVerifyLastRequest field to given value.

### HasEmailVerifyLastRequest

`func (o *ClientDetail) HasEmailVerifyLastRequest() bool`

HasEmailVerifyLastRequest returns a boolean if a field has been set.

### SetEmailVerifyLastRequestNil

`func (o *ClientDetail) SetEmailVerifyLastRequestNil(b bool)`

 SetEmailVerifyLastRequestNil sets the value for EmailVerifyLastRequest to be an explicit nil

### UnsetEmailVerifyLastRequest
`func (o *ClientDetail) UnsetEmailVerifyLastRequest()`

UnsetEmailVerifyLastRequest ensures that no value is present for EmailVerifyLastRequest, not even an explicit nil
### GetTitle

`func (o *ClientDetail) GetTitle() OneOfTitleEnumBlankEnumNullEnum`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *ClientDetail) GetTitleOk() (*OneOfTitleEnumBlankEnumNullEnum, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *ClientDetail) SetTitle(v OneOfTitleEnumBlankEnumNullEnum)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *ClientDetail) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### SetTitleNil

`func (o *ClientDetail) SetTitleNil(b bool)`

 SetTitleNil sets the value for Title to be an explicit nil

### UnsetTitle
`func (o *ClientDetail) UnsetTitle()`

UnsetTitle ensures that no value is present for Title, not even an explicit nil
### GetFirstName

`func (o *ClientDetail) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *ClientDetail) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *ClientDetail) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *ClientDetail) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.

### SetFirstNameNil

`func (o *ClientDetail) SetFirstNameNil(b bool)`

 SetFirstNameNil sets the value for FirstName to be an explicit nil

### UnsetFirstName
`func (o *ClientDetail) UnsetFirstName()`

UnsetFirstName ensures that no value is present for FirstName, not even an explicit nil
### GetMiddleName

`func (o *ClientDetail) GetMiddleName() string`

GetMiddleName returns the MiddleName field if non-nil, zero value otherwise.

### GetMiddleNameOk

`func (o *ClientDetail) GetMiddleNameOk() (*string, bool)`

GetMiddleNameOk returns a tuple with the MiddleName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMiddleName

`func (o *ClientDetail) SetMiddleName(v string)`

SetMiddleName sets MiddleName field to given value.

### HasMiddleName

`func (o *ClientDetail) HasMiddleName() bool`

HasMiddleName returns a boolean if a field has been set.

### SetMiddleNameNil

`func (o *ClientDetail) SetMiddleNameNil(b bool)`

 SetMiddleNameNil sets the value for MiddleName to be an explicit nil

### UnsetMiddleName
`func (o *ClientDetail) UnsetMiddleName()`

UnsetMiddleName ensures that no value is present for MiddleName, not even an explicit nil
### GetLastName

`func (o *ClientDetail) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *ClientDetail) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *ClientDetail) SetLastName(v string)`

SetLastName sets LastName field to given value.

### HasLastName

`func (o *ClientDetail) HasLastName() bool`

HasLastName returns a boolean if a field has been set.

### SetLastNameNil

`func (o *ClientDetail) SetLastNameNil(b bool)`

 SetLastNameNil sets the value for LastName to be an explicit nil

### UnsetLastName
`func (o *ClientDetail) UnsetLastName()`

UnsetLastName ensures that no value is present for LastName, not even an explicit nil
### GetGender

`func (o *ClientDetail) GetGender() OneOfGenderEnumBlankEnumNullEnum`

GetGender returns the Gender field if non-nil, zero value otherwise.

### GetGenderOk

`func (o *ClientDetail) GetGenderOk() (*OneOfGenderEnumBlankEnumNullEnum, bool)`

GetGenderOk returns a tuple with the Gender field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGender

`func (o *ClientDetail) SetGender(v OneOfGenderEnumBlankEnumNullEnum)`

SetGender sets Gender field to given value.

### HasGender

`func (o *ClientDetail) HasGender() bool`

HasGender returns a boolean if a field has been set.

### SetGenderNil

`func (o *ClientDetail) SetGenderNil(b bool)`

 SetGenderNil sets the value for Gender to be an explicit nil

### UnsetGender
`func (o *ClientDetail) UnsetGender()`

UnsetGender ensures that no value is present for Gender, not even an explicit nil
### GetMaritalStatus

`func (o *ClientDetail) GetMaritalStatus() OneOfMaritalStatusEnumBlankEnumNullEnum`

GetMaritalStatus returns the MaritalStatus field if non-nil, zero value otherwise.

### GetMaritalStatusOk

`func (o *ClientDetail) GetMaritalStatusOk() (*OneOfMaritalStatusEnumBlankEnumNullEnum, bool)`

GetMaritalStatusOk returns a tuple with the MaritalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaritalStatus

`func (o *ClientDetail) SetMaritalStatus(v OneOfMaritalStatusEnumBlankEnumNullEnum)`

SetMaritalStatus sets MaritalStatus field to given value.

### HasMaritalStatus

`func (o *ClientDetail) HasMaritalStatus() bool`

HasMaritalStatus returns a boolean if a field has been set.

### SetMaritalStatusNil

`func (o *ClientDetail) SetMaritalStatusNil(b bool)`

 SetMaritalStatusNil sets the value for MaritalStatus to be an explicit nil

### UnsetMaritalStatus
`func (o *ClientDetail) UnsetMaritalStatus()`

UnsetMaritalStatus ensures that no value is present for MaritalStatus, not even an explicit nil
### GetPhoneNumber

`func (o *ClientDetail) GetPhoneNumber() string`

GetPhoneNumber returns the PhoneNumber field if non-nil, zero value otherwise.

### GetPhoneNumberOk

`func (o *ClientDetail) GetPhoneNumberOk() (*string, bool)`

GetPhoneNumberOk returns a tuple with the PhoneNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhoneNumber

`func (o *ClientDetail) SetPhoneNumber(v string)`

SetPhoneNumber sets PhoneNumber field to given value.

### HasPhoneNumber

`func (o *ClientDetail) HasPhoneNumber() bool`

HasPhoneNumber returns a boolean if a field has been set.

### SetPhoneNumberNil

`func (o *ClientDetail) SetPhoneNumberNil(b bool)`

 SetPhoneNumberNil sets the value for PhoneNumber to be an explicit nil

### UnsetPhoneNumber
`func (o *ClientDetail) UnsetPhoneNumber()`

UnsetPhoneNumber ensures that no value is present for PhoneNumber, not even an explicit nil
### GetPhoneNumberVerified

`func (o *ClientDetail) GetPhoneNumberVerified() time.Time`

GetPhoneNumberVerified returns the PhoneNumberVerified field if non-nil, zero value otherwise.

### GetPhoneNumberVerifiedOk

`func (o *ClientDetail) GetPhoneNumberVerifiedOk() (*time.Time, bool)`

GetPhoneNumberVerifiedOk returns a tuple with the PhoneNumberVerified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhoneNumberVerified

`func (o *ClientDetail) SetPhoneNumberVerified(v time.Time)`

SetPhoneNumberVerified sets PhoneNumberVerified field to given value.

### HasPhoneNumberVerified

`func (o *ClientDetail) HasPhoneNumberVerified() bool`

HasPhoneNumberVerified returns a boolean if a field has been set.

### SetPhoneNumberVerifiedNil

`func (o *ClientDetail) SetPhoneNumberVerifiedNil(b bool)`

 SetPhoneNumberVerifiedNil sets the value for PhoneNumberVerified to be an explicit nil

### UnsetPhoneNumberVerified
`func (o *ClientDetail) UnsetPhoneNumberVerified()`

UnsetPhoneNumberVerified ensures that no value is present for PhoneNumberVerified, not even an explicit nil
### GetLanguage

`func (o *ClientDetail) GetLanguage() string`

GetLanguage returns the Language field if non-nil, zero value otherwise.

### GetLanguageOk

`func (o *ClientDetail) GetLanguageOk() (*string, bool)`

GetLanguageOk returns a tuple with the Language field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguage

`func (o *ClientDetail) SetLanguage(v string)`

SetLanguage sets Language field to given value.


### GetEmploymentStatus

`func (o *ClientDetail) GetEmploymentStatus() OneOfEmploymentStatusEnumBlankEnumNullEnum`

GetEmploymentStatus returns the EmploymentStatus field if non-nil, zero value otherwise.

### GetEmploymentStatusOk

`func (o *ClientDetail) GetEmploymentStatusOk() (*OneOfEmploymentStatusEnumBlankEnumNullEnum, bool)`

GetEmploymentStatusOk returns a tuple with the EmploymentStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmploymentStatus

`func (o *ClientDetail) SetEmploymentStatus(v OneOfEmploymentStatusEnumBlankEnumNullEnum)`

SetEmploymentStatus sets EmploymentStatus field to given value.

### HasEmploymentStatus

`func (o *ClientDetail) HasEmploymentStatus() bool`

HasEmploymentStatus returns a boolean if a field has been set.

### SetEmploymentStatusNil

`func (o *ClientDetail) SetEmploymentStatusNil(b bool)`

 SetEmploymentStatusNil sets the value for EmploymentStatus to be an explicit nil

### UnsetEmploymentStatus
`func (o *ClientDetail) UnsetEmploymentStatus()`

UnsetEmploymentStatus ensures that no value is present for EmploymentStatus, not even an explicit nil
### GetProfession

`func (o *ClientDetail) GetProfession() string`

GetProfession returns the Profession field if non-nil, zero value otherwise.

### GetProfessionOk

`func (o *ClientDetail) GetProfessionOk() (*string, bool)`

GetProfessionOk returns a tuple with the Profession field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfession

`func (o *ClientDetail) SetProfession(v string)`

SetProfession sets Profession field to given value.

### HasProfession

`func (o *ClientDetail) HasProfession() bool`

HasProfession returns a boolean if a field has been set.

### SetProfessionNil

`func (o *ClientDetail) SetProfessionNil(b bool)`

 SetProfessionNil sets the value for Profession to be an explicit nil

### UnsetProfession
`func (o *ClientDetail) UnsetProfession()`

UnsetProfession ensures that no value is present for Profession, not even an explicit nil
### GetReferralCode

`func (o *ClientDetail) GetReferralCode() string`

GetReferralCode returns the ReferralCode field if non-nil, zero value otherwise.

### GetReferralCodeOk

`func (o *ClientDetail) GetReferralCodeOk() (*string, bool)`

GetReferralCodeOk returns a tuple with the ReferralCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferralCode

`func (o *ClientDetail) SetReferralCode(v string)`

SetReferralCode sets ReferralCode field to given value.

### HasReferralCode

`func (o *ClientDetail) HasReferralCode() bool`

HasReferralCode returns a boolean if a field has been set.

### SetReferralCodeNil

`func (o *ClientDetail) SetReferralCodeNil(b bool)`

 SetReferralCodeNil sets the value for ReferralCode to be an explicit nil

### UnsetReferralCode
`func (o *ClientDetail) UnsetReferralCode()`

UnsetReferralCode ensures that no value is present for ReferralCode, not even an explicit nil
### GetActivated

`func (o *ClientDetail) GetActivated() time.Time`

GetActivated returns the Activated field if non-nil, zero value otherwise.

### GetActivatedOk

`func (o *ClientDetail) GetActivatedOk() (*time.Time, bool)`

GetActivatedOk returns a tuple with the Activated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivated

`func (o *ClientDetail) SetActivated(v time.Time)`

SetActivated sets Activated field to given value.

### HasActivated

`func (o *ClientDetail) HasActivated() bool`

HasActivated returns a boolean if a field has been set.

### SetActivatedNil

`func (o *ClientDetail) SetActivatedNil(b bool)`

 SetActivatedNil sets the value for Activated to be an explicit nil

### UnsetActivated
`func (o *ClientDetail) UnsetActivated()`

UnsetActivated ensures that no value is present for Activated, not even an explicit nil
### GetUtmSource

`func (o *ClientDetail) GetUtmSource() string`

GetUtmSource returns the UtmSource field if non-nil, zero value otherwise.

### GetUtmSourceOk

`func (o *ClientDetail) GetUtmSourceOk() (*string, bool)`

GetUtmSourceOk returns a tuple with the UtmSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUtmSource

`func (o *ClientDetail) SetUtmSource(v string)`

SetUtmSource sets UtmSource field to given value.

### HasUtmSource

`func (o *ClientDetail) HasUtmSource() bool`

HasUtmSource returns a boolean if a field has been set.

### GetUtmMedium

`func (o *ClientDetail) GetUtmMedium() string`

GetUtmMedium returns the UtmMedium field if non-nil, zero value otherwise.

### GetUtmMediumOk

`func (o *ClientDetail) GetUtmMediumOk() (*string, bool)`

GetUtmMediumOk returns a tuple with the UtmMedium field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUtmMedium

`func (o *ClientDetail) SetUtmMedium(v string)`

SetUtmMedium sets UtmMedium field to given value.

### HasUtmMedium

`func (o *ClientDetail) HasUtmMedium() bool`

HasUtmMedium returns a boolean if a field has been set.

### GetUtmCampaign

`func (o *ClientDetail) GetUtmCampaign() string`

GetUtmCampaign returns the UtmCampaign field if non-nil, zero value otherwise.

### GetUtmCampaignOk

`func (o *ClientDetail) GetUtmCampaignOk() (*string, bool)`

GetUtmCampaignOk returns a tuple with the UtmCampaign field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUtmCampaign

`func (o *ClientDetail) SetUtmCampaign(v string)`

SetUtmCampaign sets UtmCampaign field to given value.

### HasUtmCampaign

`func (o *ClientDetail) HasUtmCampaign() bool`

HasUtmCampaign returns a boolean if a field has been set.

### GetUtmTerm

`func (o *ClientDetail) GetUtmTerm() string`

GetUtmTerm returns the UtmTerm field if non-nil, zero value otherwise.

### GetUtmTermOk

`func (o *ClientDetail) GetUtmTermOk() (*string, bool)`

GetUtmTermOk returns a tuple with the UtmTerm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUtmTerm

`func (o *ClientDetail) SetUtmTerm(v string)`

SetUtmTerm sets UtmTerm field to given value.

### HasUtmTerm

`func (o *ClientDetail) HasUtmTerm() bool`

HasUtmTerm returns a boolean if a field has been set.

### GetUtmContent

`func (o *ClientDetail) GetUtmContent() string`

GetUtmContent returns the UtmContent field if non-nil, zero value otherwise.

### GetUtmContentOk

`func (o *ClientDetail) GetUtmContentOk() (*string, bool)`

GetUtmContentOk returns a tuple with the UtmContent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUtmContent

`func (o *ClientDetail) SetUtmContent(v string)`

SetUtmContent sets UtmContent field to given value.

### HasUtmContent

`func (o *ClientDetail) HasUtmContent() bool`

HasUtmContent returns a boolean if a field has been set.

### GetMarketingConsentDate

`func (o *ClientDetail) GetMarketingConsentDate() string`

GetMarketingConsentDate returns the MarketingConsentDate field if non-nil, zero value otherwise.

### GetMarketingConsentDateOk

`func (o *ClientDetail) GetMarketingConsentDateOk() (*string, bool)`

GetMarketingConsentDateOk returns a tuple with the MarketingConsentDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketingConsentDate

`func (o *ClientDetail) SetMarketingConsentDate(v string)`

SetMarketingConsentDate sets MarketingConsentDate field to given value.


### GetDataConsentDate

`func (o *ClientDetail) GetDataConsentDate() string`

GetDataConsentDate returns the DataConsentDate field if non-nil, zero value otherwise.

### GetDataConsentDateOk

`func (o *ClientDetail) GetDataConsentDateOk() (*string, bool)`

GetDataConsentDateOk returns a tuple with the DataConsentDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataConsentDate

`func (o *ClientDetail) SetDataConsentDate(v string)`

SetDataConsentDate sets DataConsentDate field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


