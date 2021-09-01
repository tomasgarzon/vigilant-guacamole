# ApplicationClientUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | **string** |  | 
**Birthdate** | Pointer to **string** |  | [optional] 
**TosConsent** | Pointer to **bool** |  | [optional] 
**MarketingConsent** | Pointer to **bool** |  | [optional] 
**DataConsent** | Pointer to **bool** |  | [optional] 
**TosConsentDate** | **string** |  | [readonly] 
**TaxInformation** | **[]string** |  | [readonly] 
**CountryBirth** | [**CountryField**](CountryField.md) |  | 
**LastLogin** | **time.Time** |  | [readonly] 
**ReferredBy** | **NullableString** |  | 
**SuccessfulReferrals** | **int32** |  | [readonly] 
**KycVerified** | **bool** |  | [readonly] 
**IsVerified** | **bool** |  | [readonly] 
**FeeSegments** | **[]string** |  | [readonly] 
**ExtraData** | Pointer to **map[string]interface{}** |  | [optional] 
**Portfolios** | **[]string** |  | [readonly] 
**OnboardedBy** | Pointer to **NullableString** |  | [optional] 
**RiskLevel** | **int32** |  | [readonly] 
**OnboardingToken** | **string** |  | [readonly] 
**Password** | Pointer to **string** |  | [optional] 
**EmailVerifiedLastRequest** | Pointer to **time.Time** |  | [optional] 
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

### NewApplicationClientUpdate

`func NewApplicationClientUpdate(email string, tosConsentDate string, taxInformation []string, countryBirth CountryField, lastLogin time.Time, referredBy NullableString, successfulReferrals int32, kycVerified bool, isVerified bool, feeSegments []string, portfolios []string, riskLevel int32, onboardingToken string, uuid string, created time.Time, updated time.Time, status StatusB65Enum, language string, marketingConsentDate string, dataConsentDate string, ) *ApplicationClientUpdate`

NewApplicationClientUpdate instantiates a new ApplicationClientUpdate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApplicationClientUpdateWithDefaults

`func NewApplicationClientUpdateWithDefaults() *ApplicationClientUpdate`

NewApplicationClientUpdateWithDefaults instantiates a new ApplicationClientUpdate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmail

`func (o *ApplicationClientUpdate) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *ApplicationClientUpdate) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *ApplicationClientUpdate) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetBirthdate

`func (o *ApplicationClientUpdate) GetBirthdate() string`

GetBirthdate returns the Birthdate field if non-nil, zero value otherwise.

### GetBirthdateOk

`func (o *ApplicationClientUpdate) GetBirthdateOk() (*string, bool)`

GetBirthdateOk returns a tuple with the Birthdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBirthdate

`func (o *ApplicationClientUpdate) SetBirthdate(v string)`

SetBirthdate sets Birthdate field to given value.

### HasBirthdate

`func (o *ApplicationClientUpdate) HasBirthdate() bool`

HasBirthdate returns a boolean if a field has been set.

### GetTosConsent

`func (o *ApplicationClientUpdate) GetTosConsent() bool`

GetTosConsent returns the TosConsent field if non-nil, zero value otherwise.

### GetTosConsentOk

`func (o *ApplicationClientUpdate) GetTosConsentOk() (*bool, bool)`

GetTosConsentOk returns a tuple with the TosConsent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTosConsent

`func (o *ApplicationClientUpdate) SetTosConsent(v bool)`

SetTosConsent sets TosConsent field to given value.

### HasTosConsent

`func (o *ApplicationClientUpdate) HasTosConsent() bool`

HasTosConsent returns a boolean if a field has been set.

### GetMarketingConsent

`func (o *ApplicationClientUpdate) GetMarketingConsent() bool`

GetMarketingConsent returns the MarketingConsent field if non-nil, zero value otherwise.

### GetMarketingConsentOk

`func (o *ApplicationClientUpdate) GetMarketingConsentOk() (*bool, bool)`

GetMarketingConsentOk returns a tuple with the MarketingConsent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketingConsent

`func (o *ApplicationClientUpdate) SetMarketingConsent(v bool)`

SetMarketingConsent sets MarketingConsent field to given value.

### HasMarketingConsent

`func (o *ApplicationClientUpdate) HasMarketingConsent() bool`

HasMarketingConsent returns a boolean if a field has been set.

### GetDataConsent

`func (o *ApplicationClientUpdate) GetDataConsent() bool`

GetDataConsent returns the DataConsent field if non-nil, zero value otherwise.

### GetDataConsentOk

`func (o *ApplicationClientUpdate) GetDataConsentOk() (*bool, bool)`

GetDataConsentOk returns a tuple with the DataConsent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataConsent

`func (o *ApplicationClientUpdate) SetDataConsent(v bool)`

SetDataConsent sets DataConsent field to given value.

### HasDataConsent

`func (o *ApplicationClientUpdate) HasDataConsent() bool`

HasDataConsent returns a boolean if a field has been set.

### GetTosConsentDate

`func (o *ApplicationClientUpdate) GetTosConsentDate() string`

GetTosConsentDate returns the TosConsentDate field if non-nil, zero value otherwise.

### GetTosConsentDateOk

`func (o *ApplicationClientUpdate) GetTosConsentDateOk() (*string, bool)`

GetTosConsentDateOk returns a tuple with the TosConsentDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTosConsentDate

`func (o *ApplicationClientUpdate) SetTosConsentDate(v string)`

SetTosConsentDate sets TosConsentDate field to given value.


### GetTaxInformation

`func (o *ApplicationClientUpdate) GetTaxInformation() []string`

GetTaxInformation returns the TaxInformation field if non-nil, zero value otherwise.

### GetTaxInformationOk

`func (o *ApplicationClientUpdate) GetTaxInformationOk() (*[]string, bool)`

GetTaxInformationOk returns a tuple with the TaxInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxInformation

`func (o *ApplicationClientUpdate) SetTaxInformation(v []string)`

SetTaxInformation sets TaxInformation field to given value.


### GetCountryBirth

`func (o *ApplicationClientUpdate) GetCountryBirth() CountryField`

GetCountryBirth returns the CountryBirth field if non-nil, zero value otherwise.

### GetCountryBirthOk

`func (o *ApplicationClientUpdate) GetCountryBirthOk() (*CountryField, bool)`

GetCountryBirthOk returns a tuple with the CountryBirth field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountryBirth

`func (o *ApplicationClientUpdate) SetCountryBirth(v CountryField)`

SetCountryBirth sets CountryBirth field to given value.


### GetLastLogin

`func (o *ApplicationClientUpdate) GetLastLogin() time.Time`

GetLastLogin returns the LastLogin field if non-nil, zero value otherwise.

### GetLastLoginOk

`func (o *ApplicationClientUpdate) GetLastLoginOk() (*time.Time, bool)`

GetLastLoginOk returns a tuple with the LastLogin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastLogin

`func (o *ApplicationClientUpdate) SetLastLogin(v time.Time)`

SetLastLogin sets LastLogin field to given value.


### GetReferredBy

`func (o *ApplicationClientUpdate) GetReferredBy() string`

GetReferredBy returns the ReferredBy field if non-nil, zero value otherwise.

### GetReferredByOk

`func (o *ApplicationClientUpdate) GetReferredByOk() (*string, bool)`

GetReferredByOk returns a tuple with the ReferredBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferredBy

`func (o *ApplicationClientUpdate) SetReferredBy(v string)`

SetReferredBy sets ReferredBy field to given value.


### SetReferredByNil

`func (o *ApplicationClientUpdate) SetReferredByNil(b bool)`

 SetReferredByNil sets the value for ReferredBy to be an explicit nil

### UnsetReferredBy
`func (o *ApplicationClientUpdate) UnsetReferredBy()`

UnsetReferredBy ensures that no value is present for ReferredBy, not even an explicit nil
### GetSuccessfulReferrals

`func (o *ApplicationClientUpdate) GetSuccessfulReferrals() int32`

GetSuccessfulReferrals returns the SuccessfulReferrals field if non-nil, zero value otherwise.

### GetSuccessfulReferralsOk

`func (o *ApplicationClientUpdate) GetSuccessfulReferralsOk() (*int32, bool)`

GetSuccessfulReferralsOk returns a tuple with the SuccessfulReferrals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccessfulReferrals

`func (o *ApplicationClientUpdate) SetSuccessfulReferrals(v int32)`

SetSuccessfulReferrals sets SuccessfulReferrals field to given value.


### GetKycVerified

`func (o *ApplicationClientUpdate) GetKycVerified() bool`

GetKycVerified returns the KycVerified field if non-nil, zero value otherwise.

### GetKycVerifiedOk

`func (o *ApplicationClientUpdate) GetKycVerifiedOk() (*bool, bool)`

GetKycVerifiedOk returns a tuple with the KycVerified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKycVerified

`func (o *ApplicationClientUpdate) SetKycVerified(v bool)`

SetKycVerified sets KycVerified field to given value.


### GetIsVerified

`func (o *ApplicationClientUpdate) GetIsVerified() bool`

GetIsVerified returns the IsVerified field if non-nil, zero value otherwise.

### GetIsVerifiedOk

`func (o *ApplicationClientUpdate) GetIsVerifiedOk() (*bool, bool)`

GetIsVerifiedOk returns a tuple with the IsVerified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsVerified

`func (o *ApplicationClientUpdate) SetIsVerified(v bool)`

SetIsVerified sets IsVerified field to given value.


### GetFeeSegments

`func (o *ApplicationClientUpdate) GetFeeSegments() []string`

GetFeeSegments returns the FeeSegments field if non-nil, zero value otherwise.

### GetFeeSegmentsOk

`func (o *ApplicationClientUpdate) GetFeeSegmentsOk() (*[]string, bool)`

GetFeeSegmentsOk returns a tuple with the FeeSegments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeeSegments

`func (o *ApplicationClientUpdate) SetFeeSegments(v []string)`

SetFeeSegments sets FeeSegments field to given value.


### GetExtraData

`func (o *ApplicationClientUpdate) GetExtraData() map[string]interface{}`

GetExtraData returns the ExtraData field if non-nil, zero value otherwise.

### GetExtraDataOk

`func (o *ApplicationClientUpdate) GetExtraDataOk() (*map[string]interface{}, bool)`

GetExtraDataOk returns a tuple with the ExtraData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraData

`func (o *ApplicationClientUpdate) SetExtraData(v map[string]interface{})`

SetExtraData sets ExtraData field to given value.

### HasExtraData

`func (o *ApplicationClientUpdate) HasExtraData() bool`

HasExtraData returns a boolean if a field has been set.

### GetPortfolios

`func (o *ApplicationClientUpdate) GetPortfolios() []string`

GetPortfolios returns the Portfolios field if non-nil, zero value otherwise.

### GetPortfoliosOk

`func (o *ApplicationClientUpdate) GetPortfoliosOk() (*[]string, bool)`

GetPortfoliosOk returns a tuple with the Portfolios field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPortfolios

`func (o *ApplicationClientUpdate) SetPortfolios(v []string)`

SetPortfolios sets Portfolios field to given value.


### GetOnboardedBy

`func (o *ApplicationClientUpdate) GetOnboardedBy() string`

GetOnboardedBy returns the OnboardedBy field if non-nil, zero value otherwise.

### GetOnboardedByOk

`func (o *ApplicationClientUpdate) GetOnboardedByOk() (*string, bool)`

GetOnboardedByOk returns a tuple with the OnboardedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnboardedBy

`func (o *ApplicationClientUpdate) SetOnboardedBy(v string)`

SetOnboardedBy sets OnboardedBy field to given value.

### HasOnboardedBy

`func (o *ApplicationClientUpdate) HasOnboardedBy() bool`

HasOnboardedBy returns a boolean if a field has been set.

### SetOnboardedByNil

`func (o *ApplicationClientUpdate) SetOnboardedByNil(b bool)`

 SetOnboardedByNil sets the value for OnboardedBy to be an explicit nil

### UnsetOnboardedBy
`func (o *ApplicationClientUpdate) UnsetOnboardedBy()`

UnsetOnboardedBy ensures that no value is present for OnboardedBy, not even an explicit nil
### GetRiskLevel

`func (o *ApplicationClientUpdate) GetRiskLevel() int32`

GetRiskLevel returns the RiskLevel field if non-nil, zero value otherwise.

### GetRiskLevelOk

`func (o *ApplicationClientUpdate) GetRiskLevelOk() (*int32, bool)`

GetRiskLevelOk returns a tuple with the RiskLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskLevel

`func (o *ApplicationClientUpdate) SetRiskLevel(v int32)`

SetRiskLevel sets RiskLevel field to given value.


### GetOnboardingToken

`func (o *ApplicationClientUpdate) GetOnboardingToken() string`

GetOnboardingToken returns the OnboardingToken field if non-nil, zero value otherwise.

### GetOnboardingTokenOk

`func (o *ApplicationClientUpdate) GetOnboardingTokenOk() (*string, bool)`

GetOnboardingTokenOk returns a tuple with the OnboardingToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnboardingToken

`func (o *ApplicationClientUpdate) SetOnboardingToken(v string)`

SetOnboardingToken sets OnboardingToken field to given value.


### GetPassword

`func (o *ApplicationClientUpdate) GetPassword() string`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *ApplicationClientUpdate) GetPasswordOk() (*string, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *ApplicationClientUpdate) SetPassword(v string)`

SetPassword sets Password field to given value.

### HasPassword

`func (o *ApplicationClientUpdate) HasPassword() bool`

HasPassword returns a boolean if a field has been set.

### GetEmailVerifiedLastRequest

`func (o *ApplicationClientUpdate) GetEmailVerifiedLastRequest() time.Time`

GetEmailVerifiedLastRequest returns the EmailVerifiedLastRequest field if non-nil, zero value otherwise.

### GetEmailVerifiedLastRequestOk

`func (o *ApplicationClientUpdate) GetEmailVerifiedLastRequestOk() (*time.Time, bool)`

GetEmailVerifiedLastRequestOk returns a tuple with the EmailVerifiedLastRequest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailVerifiedLastRequest

`func (o *ApplicationClientUpdate) SetEmailVerifiedLastRequest(v time.Time)`

SetEmailVerifiedLastRequest sets EmailVerifiedLastRequest field to given value.

### HasEmailVerifiedLastRequest

`func (o *ApplicationClientUpdate) HasEmailVerifiedLastRequest() bool`

HasEmailVerifiedLastRequest returns a boolean if a field has been set.

### GetUuid

`func (o *ApplicationClientUpdate) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *ApplicationClientUpdate) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *ApplicationClientUpdate) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetCreated

`func (o *ApplicationClientUpdate) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *ApplicationClientUpdate) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *ApplicationClientUpdate) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetUpdated

`func (o *ApplicationClientUpdate) GetUpdated() time.Time`

GetUpdated returns the Updated field if non-nil, zero value otherwise.

### GetUpdatedOk

`func (o *ApplicationClientUpdate) GetUpdatedOk() (*time.Time, bool)`

GetUpdatedOk returns a tuple with the Updated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdated

`func (o *ApplicationClientUpdate) SetUpdated(v time.Time)`

SetUpdated sets Updated field to given value.


### GetComments

`func (o *ApplicationClientUpdate) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *ApplicationClientUpdate) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *ApplicationClientUpdate) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *ApplicationClientUpdate) HasComments() bool`

HasComments returns a boolean if a field has been set.

### SetCommentsNil

`func (o *ApplicationClientUpdate) SetCommentsNil(b bool)`

 SetCommentsNil sets the value for Comments to be an explicit nil

### UnsetComments
`func (o *ApplicationClientUpdate) UnsetComments()`

UnsetComments ensures that no value is present for Comments, not even an explicit nil
### GetStatus

`func (o *ApplicationClientUpdate) GetStatus() StatusB65Enum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ApplicationClientUpdate) GetStatusOk() (*StatusB65Enum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ApplicationClientUpdate) SetStatus(v StatusB65Enum)`

SetStatus sets Status field to given value.


### GetEmailVerified

`func (o *ApplicationClientUpdate) GetEmailVerified() bool`

GetEmailVerified returns the EmailVerified field if non-nil, zero value otherwise.

### GetEmailVerifiedOk

`func (o *ApplicationClientUpdate) GetEmailVerifiedOk() (*bool, bool)`

GetEmailVerifiedOk returns a tuple with the EmailVerified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailVerified

`func (o *ApplicationClientUpdate) SetEmailVerified(v bool)`

SetEmailVerified sets EmailVerified field to given value.

### HasEmailVerified

`func (o *ApplicationClientUpdate) HasEmailVerified() bool`

HasEmailVerified returns a boolean if a field has been set.

### GetEmailVerifyLastRequest

`func (o *ApplicationClientUpdate) GetEmailVerifyLastRequest() time.Time`

GetEmailVerifyLastRequest returns the EmailVerifyLastRequest field if non-nil, zero value otherwise.

### GetEmailVerifyLastRequestOk

`func (o *ApplicationClientUpdate) GetEmailVerifyLastRequestOk() (*time.Time, bool)`

GetEmailVerifyLastRequestOk returns a tuple with the EmailVerifyLastRequest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailVerifyLastRequest

`func (o *ApplicationClientUpdate) SetEmailVerifyLastRequest(v time.Time)`

SetEmailVerifyLastRequest sets EmailVerifyLastRequest field to given value.

### HasEmailVerifyLastRequest

`func (o *ApplicationClientUpdate) HasEmailVerifyLastRequest() bool`

HasEmailVerifyLastRequest returns a boolean if a field has been set.

### SetEmailVerifyLastRequestNil

`func (o *ApplicationClientUpdate) SetEmailVerifyLastRequestNil(b bool)`

 SetEmailVerifyLastRequestNil sets the value for EmailVerifyLastRequest to be an explicit nil

### UnsetEmailVerifyLastRequest
`func (o *ApplicationClientUpdate) UnsetEmailVerifyLastRequest()`

UnsetEmailVerifyLastRequest ensures that no value is present for EmailVerifyLastRequest, not even an explicit nil
### GetTitle

`func (o *ApplicationClientUpdate) GetTitle() OneOfTitleEnumBlankEnumNullEnum`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *ApplicationClientUpdate) GetTitleOk() (*OneOfTitleEnumBlankEnumNullEnum, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *ApplicationClientUpdate) SetTitle(v OneOfTitleEnumBlankEnumNullEnum)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *ApplicationClientUpdate) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### SetTitleNil

`func (o *ApplicationClientUpdate) SetTitleNil(b bool)`

 SetTitleNil sets the value for Title to be an explicit nil

### UnsetTitle
`func (o *ApplicationClientUpdate) UnsetTitle()`

UnsetTitle ensures that no value is present for Title, not even an explicit nil
### GetFirstName

`func (o *ApplicationClientUpdate) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *ApplicationClientUpdate) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *ApplicationClientUpdate) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *ApplicationClientUpdate) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.

### SetFirstNameNil

`func (o *ApplicationClientUpdate) SetFirstNameNil(b bool)`

 SetFirstNameNil sets the value for FirstName to be an explicit nil

### UnsetFirstName
`func (o *ApplicationClientUpdate) UnsetFirstName()`

UnsetFirstName ensures that no value is present for FirstName, not even an explicit nil
### GetMiddleName

`func (o *ApplicationClientUpdate) GetMiddleName() string`

GetMiddleName returns the MiddleName field if non-nil, zero value otherwise.

### GetMiddleNameOk

`func (o *ApplicationClientUpdate) GetMiddleNameOk() (*string, bool)`

GetMiddleNameOk returns a tuple with the MiddleName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMiddleName

`func (o *ApplicationClientUpdate) SetMiddleName(v string)`

SetMiddleName sets MiddleName field to given value.

### HasMiddleName

`func (o *ApplicationClientUpdate) HasMiddleName() bool`

HasMiddleName returns a boolean if a field has been set.

### SetMiddleNameNil

`func (o *ApplicationClientUpdate) SetMiddleNameNil(b bool)`

 SetMiddleNameNil sets the value for MiddleName to be an explicit nil

### UnsetMiddleName
`func (o *ApplicationClientUpdate) UnsetMiddleName()`

UnsetMiddleName ensures that no value is present for MiddleName, not even an explicit nil
### GetLastName

`func (o *ApplicationClientUpdate) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *ApplicationClientUpdate) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *ApplicationClientUpdate) SetLastName(v string)`

SetLastName sets LastName field to given value.

### HasLastName

`func (o *ApplicationClientUpdate) HasLastName() bool`

HasLastName returns a boolean if a field has been set.

### SetLastNameNil

`func (o *ApplicationClientUpdate) SetLastNameNil(b bool)`

 SetLastNameNil sets the value for LastName to be an explicit nil

### UnsetLastName
`func (o *ApplicationClientUpdate) UnsetLastName()`

UnsetLastName ensures that no value is present for LastName, not even an explicit nil
### GetGender

`func (o *ApplicationClientUpdate) GetGender() OneOfGenderEnumBlankEnumNullEnum`

GetGender returns the Gender field if non-nil, zero value otherwise.

### GetGenderOk

`func (o *ApplicationClientUpdate) GetGenderOk() (*OneOfGenderEnumBlankEnumNullEnum, bool)`

GetGenderOk returns a tuple with the Gender field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGender

`func (o *ApplicationClientUpdate) SetGender(v OneOfGenderEnumBlankEnumNullEnum)`

SetGender sets Gender field to given value.

### HasGender

`func (o *ApplicationClientUpdate) HasGender() bool`

HasGender returns a boolean if a field has been set.

### SetGenderNil

`func (o *ApplicationClientUpdate) SetGenderNil(b bool)`

 SetGenderNil sets the value for Gender to be an explicit nil

### UnsetGender
`func (o *ApplicationClientUpdate) UnsetGender()`

UnsetGender ensures that no value is present for Gender, not even an explicit nil
### GetMaritalStatus

`func (o *ApplicationClientUpdate) GetMaritalStatus() OneOfMaritalStatusEnumBlankEnumNullEnum`

GetMaritalStatus returns the MaritalStatus field if non-nil, zero value otherwise.

### GetMaritalStatusOk

`func (o *ApplicationClientUpdate) GetMaritalStatusOk() (*OneOfMaritalStatusEnumBlankEnumNullEnum, bool)`

GetMaritalStatusOk returns a tuple with the MaritalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaritalStatus

`func (o *ApplicationClientUpdate) SetMaritalStatus(v OneOfMaritalStatusEnumBlankEnumNullEnum)`

SetMaritalStatus sets MaritalStatus field to given value.

### HasMaritalStatus

`func (o *ApplicationClientUpdate) HasMaritalStatus() bool`

HasMaritalStatus returns a boolean if a field has been set.

### SetMaritalStatusNil

`func (o *ApplicationClientUpdate) SetMaritalStatusNil(b bool)`

 SetMaritalStatusNil sets the value for MaritalStatus to be an explicit nil

### UnsetMaritalStatus
`func (o *ApplicationClientUpdate) UnsetMaritalStatus()`

UnsetMaritalStatus ensures that no value is present for MaritalStatus, not even an explicit nil
### GetPhoneNumber

`func (o *ApplicationClientUpdate) GetPhoneNumber() string`

GetPhoneNumber returns the PhoneNumber field if non-nil, zero value otherwise.

### GetPhoneNumberOk

`func (o *ApplicationClientUpdate) GetPhoneNumberOk() (*string, bool)`

GetPhoneNumberOk returns a tuple with the PhoneNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhoneNumber

`func (o *ApplicationClientUpdate) SetPhoneNumber(v string)`

SetPhoneNumber sets PhoneNumber field to given value.

### HasPhoneNumber

`func (o *ApplicationClientUpdate) HasPhoneNumber() bool`

HasPhoneNumber returns a boolean if a field has been set.

### SetPhoneNumberNil

`func (o *ApplicationClientUpdate) SetPhoneNumberNil(b bool)`

 SetPhoneNumberNil sets the value for PhoneNumber to be an explicit nil

### UnsetPhoneNumber
`func (o *ApplicationClientUpdate) UnsetPhoneNumber()`

UnsetPhoneNumber ensures that no value is present for PhoneNumber, not even an explicit nil
### GetPhoneNumberVerified

`func (o *ApplicationClientUpdate) GetPhoneNumberVerified() time.Time`

GetPhoneNumberVerified returns the PhoneNumberVerified field if non-nil, zero value otherwise.

### GetPhoneNumberVerifiedOk

`func (o *ApplicationClientUpdate) GetPhoneNumberVerifiedOk() (*time.Time, bool)`

GetPhoneNumberVerifiedOk returns a tuple with the PhoneNumberVerified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhoneNumberVerified

`func (o *ApplicationClientUpdate) SetPhoneNumberVerified(v time.Time)`

SetPhoneNumberVerified sets PhoneNumberVerified field to given value.

### HasPhoneNumberVerified

`func (o *ApplicationClientUpdate) HasPhoneNumberVerified() bool`

HasPhoneNumberVerified returns a boolean if a field has been set.

### SetPhoneNumberVerifiedNil

`func (o *ApplicationClientUpdate) SetPhoneNumberVerifiedNil(b bool)`

 SetPhoneNumberVerifiedNil sets the value for PhoneNumberVerified to be an explicit nil

### UnsetPhoneNumberVerified
`func (o *ApplicationClientUpdate) UnsetPhoneNumberVerified()`

UnsetPhoneNumberVerified ensures that no value is present for PhoneNumberVerified, not even an explicit nil
### GetLanguage

`func (o *ApplicationClientUpdate) GetLanguage() string`

GetLanguage returns the Language field if non-nil, zero value otherwise.

### GetLanguageOk

`func (o *ApplicationClientUpdate) GetLanguageOk() (*string, bool)`

GetLanguageOk returns a tuple with the Language field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguage

`func (o *ApplicationClientUpdate) SetLanguage(v string)`

SetLanguage sets Language field to given value.


### GetEmploymentStatus

`func (o *ApplicationClientUpdate) GetEmploymentStatus() OneOfEmploymentStatusEnumBlankEnumNullEnum`

GetEmploymentStatus returns the EmploymentStatus field if non-nil, zero value otherwise.

### GetEmploymentStatusOk

`func (o *ApplicationClientUpdate) GetEmploymentStatusOk() (*OneOfEmploymentStatusEnumBlankEnumNullEnum, bool)`

GetEmploymentStatusOk returns a tuple with the EmploymentStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmploymentStatus

`func (o *ApplicationClientUpdate) SetEmploymentStatus(v OneOfEmploymentStatusEnumBlankEnumNullEnum)`

SetEmploymentStatus sets EmploymentStatus field to given value.

### HasEmploymentStatus

`func (o *ApplicationClientUpdate) HasEmploymentStatus() bool`

HasEmploymentStatus returns a boolean if a field has been set.

### SetEmploymentStatusNil

`func (o *ApplicationClientUpdate) SetEmploymentStatusNil(b bool)`

 SetEmploymentStatusNil sets the value for EmploymentStatus to be an explicit nil

### UnsetEmploymentStatus
`func (o *ApplicationClientUpdate) UnsetEmploymentStatus()`

UnsetEmploymentStatus ensures that no value is present for EmploymentStatus, not even an explicit nil
### GetProfession

`func (o *ApplicationClientUpdate) GetProfession() string`

GetProfession returns the Profession field if non-nil, zero value otherwise.

### GetProfessionOk

`func (o *ApplicationClientUpdate) GetProfessionOk() (*string, bool)`

GetProfessionOk returns a tuple with the Profession field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfession

`func (o *ApplicationClientUpdate) SetProfession(v string)`

SetProfession sets Profession field to given value.

### HasProfession

`func (o *ApplicationClientUpdate) HasProfession() bool`

HasProfession returns a boolean if a field has been set.

### SetProfessionNil

`func (o *ApplicationClientUpdate) SetProfessionNil(b bool)`

 SetProfessionNil sets the value for Profession to be an explicit nil

### UnsetProfession
`func (o *ApplicationClientUpdate) UnsetProfession()`

UnsetProfession ensures that no value is present for Profession, not even an explicit nil
### GetReferralCode

`func (o *ApplicationClientUpdate) GetReferralCode() string`

GetReferralCode returns the ReferralCode field if non-nil, zero value otherwise.

### GetReferralCodeOk

`func (o *ApplicationClientUpdate) GetReferralCodeOk() (*string, bool)`

GetReferralCodeOk returns a tuple with the ReferralCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferralCode

`func (o *ApplicationClientUpdate) SetReferralCode(v string)`

SetReferralCode sets ReferralCode field to given value.

### HasReferralCode

`func (o *ApplicationClientUpdate) HasReferralCode() bool`

HasReferralCode returns a boolean if a field has been set.

### SetReferralCodeNil

`func (o *ApplicationClientUpdate) SetReferralCodeNil(b bool)`

 SetReferralCodeNil sets the value for ReferralCode to be an explicit nil

### UnsetReferralCode
`func (o *ApplicationClientUpdate) UnsetReferralCode()`

UnsetReferralCode ensures that no value is present for ReferralCode, not even an explicit nil
### GetActivated

`func (o *ApplicationClientUpdate) GetActivated() time.Time`

GetActivated returns the Activated field if non-nil, zero value otherwise.

### GetActivatedOk

`func (o *ApplicationClientUpdate) GetActivatedOk() (*time.Time, bool)`

GetActivatedOk returns a tuple with the Activated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivated

`func (o *ApplicationClientUpdate) SetActivated(v time.Time)`

SetActivated sets Activated field to given value.

### HasActivated

`func (o *ApplicationClientUpdate) HasActivated() bool`

HasActivated returns a boolean if a field has been set.

### SetActivatedNil

`func (o *ApplicationClientUpdate) SetActivatedNil(b bool)`

 SetActivatedNil sets the value for Activated to be an explicit nil

### UnsetActivated
`func (o *ApplicationClientUpdate) UnsetActivated()`

UnsetActivated ensures that no value is present for Activated, not even an explicit nil
### GetUtmSource

`func (o *ApplicationClientUpdate) GetUtmSource() string`

GetUtmSource returns the UtmSource field if non-nil, zero value otherwise.

### GetUtmSourceOk

`func (o *ApplicationClientUpdate) GetUtmSourceOk() (*string, bool)`

GetUtmSourceOk returns a tuple with the UtmSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUtmSource

`func (o *ApplicationClientUpdate) SetUtmSource(v string)`

SetUtmSource sets UtmSource field to given value.

### HasUtmSource

`func (o *ApplicationClientUpdate) HasUtmSource() bool`

HasUtmSource returns a boolean if a field has been set.

### GetUtmMedium

`func (o *ApplicationClientUpdate) GetUtmMedium() string`

GetUtmMedium returns the UtmMedium field if non-nil, zero value otherwise.

### GetUtmMediumOk

`func (o *ApplicationClientUpdate) GetUtmMediumOk() (*string, bool)`

GetUtmMediumOk returns a tuple with the UtmMedium field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUtmMedium

`func (o *ApplicationClientUpdate) SetUtmMedium(v string)`

SetUtmMedium sets UtmMedium field to given value.

### HasUtmMedium

`func (o *ApplicationClientUpdate) HasUtmMedium() bool`

HasUtmMedium returns a boolean if a field has been set.

### GetUtmCampaign

`func (o *ApplicationClientUpdate) GetUtmCampaign() string`

GetUtmCampaign returns the UtmCampaign field if non-nil, zero value otherwise.

### GetUtmCampaignOk

`func (o *ApplicationClientUpdate) GetUtmCampaignOk() (*string, bool)`

GetUtmCampaignOk returns a tuple with the UtmCampaign field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUtmCampaign

`func (o *ApplicationClientUpdate) SetUtmCampaign(v string)`

SetUtmCampaign sets UtmCampaign field to given value.

### HasUtmCampaign

`func (o *ApplicationClientUpdate) HasUtmCampaign() bool`

HasUtmCampaign returns a boolean if a field has been set.

### GetUtmTerm

`func (o *ApplicationClientUpdate) GetUtmTerm() string`

GetUtmTerm returns the UtmTerm field if non-nil, zero value otherwise.

### GetUtmTermOk

`func (o *ApplicationClientUpdate) GetUtmTermOk() (*string, bool)`

GetUtmTermOk returns a tuple with the UtmTerm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUtmTerm

`func (o *ApplicationClientUpdate) SetUtmTerm(v string)`

SetUtmTerm sets UtmTerm field to given value.

### HasUtmTerm

`func (o *ApplicationClientUpdate) HasUtmTerm() bool`

HasUtmTerm returns a boolean if a field has been set.

### GetUtmContent

`func (o *ApplicationClientUpdate) GetUtmContent() string`

GetUtmContent returns the UtmContent field if non-nil, zero value otherwise.

### GetUtmContentOk

`func (o *ApplicationClientUpdate) GetUtmContentOk() (*string, bool)`

GetUtmContentOk returns a tuple with the UtmContent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUtmContent

`func (o *ApplicationClientUpdate) SetUtmContent(v string)`

SetUtmContent sets UtmContent field to given value.

### HasUtmContent

`func (o *ApplicationClientUpdate) HasUtmContent() bool`

HasUtmContent returns a boolean if a field has been set.

### GetMarketingConsentDate

`func (o *ApplicationClientUpdate) GetMarketingConsentDate() string`

GetMarketingConsentDate returns the MarketingConsentDate field if non-nil, zero value otherwise.

### GetMarketingConsentDateOk

`func (o *ApplicationClientUpdate) GetMarketingConsentDateOk() (*string, bool)`

GetMarketingConsentDateOk returns a tuple with the MarketingConsentDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketingConsentDate

`func (o *ApplicationClientUpdate) SetMarketingConsentDate(v string)`

SetMarketingConsentDate sets MarketingConsentDate field to given value.


### GetDataConsentDate

`func (o *ApplicationClientUpdate) GetDataConsentDate() string`

GetDataConsentDate returns the DataConsentDate field if non-nil, zero value otherwise.

### GetDataConsentDateOk

`func (o *ApplicationClientUpdate) GetDataConsentDateOk() (*string, bool)`

GetDataConsentDateOk returns a tuple with the DataConsentDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataConsentDate

`func (o *ApplicationClientUpdate) SetDataConsentDate(v string)`

SetDataConsentDate sets DataConsentDate field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


