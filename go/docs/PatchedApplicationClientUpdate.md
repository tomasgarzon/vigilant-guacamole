# PatchedApplicationClientUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | Pointer to **string** |  | [optional] 
**Birthdate** | Pointer to **string** |  | [optional] 
**TosConsent** | Pointer to **bool** |  | [optional] 
**MarketingConsent** | Pointer to **bool** |  | [optional] 
**DataConsent** | Pointer to **bool** |  | [optional] 
**TosConsentDate** | Pointer to **string** |  | [optional] [readonly] 
**TaxInformation** | Pointer to **[]string** |  | [optional] [readonly] 
**CountryBirth** | Pointer to [**CountryField**](CountryField.md) |  | [optional] 
**LastLogin** | Pointer to **time.Time** |  | [optional] [readonly] 
**ReferredBy** | Pointer to **NullableString** |  | [optional] 
**SuccessfulReferrals** | Pointer to **int32** |  | [optional] [readonly] 
**KycVerified** | Pointer to **bool** |  | [optional] [readonly] 
**IsVerified** | Pointer to **bool** |  | [optional] [readonly] 
**FeeSegments** | Pointer to **[]string** |  | [optional] [readonly] 
**ExtraData** | Pointer to **map[string]interface{}** |  | [optional] 
**Portfolios** | Pointer to **[]string** |  | [optional] [readonly] 
**OnboardedBy** | Pointer to **NullableString** |  | [optional] 
**RiskLevel** | Pointer to **int32** |  | [optional] [readonly] 
**OnboardingToken** | Pointer to **string** |  | [optional] [readonly] 
**Password** | Pointer to **string** |  | [optional] 
**EmailVerifiedLastRequest** | Pointer to **time.Time** |  | [optional] 
**Uuid** | Pointer to **string** |  | [optional] [readonly] 
**Created** | Pointer to **time.Time** |  | [optional] [readonly] 
**Updated** | Pointer to **time.Time** |  | [optional] [readonly] 
**Comments** | Pointer to **NullableString** |  | [optional] 
**Status** | Pointer to [**StatusB65Enum**](StatusB65Enum.md) |  | [optional] [readonly] 
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
**Language** | Pointer to **string** |  | [optional] 
**EmploymentStatus** | Pointer to [**NullableOneOfEmploymentStatusEnumBlankEnumNullEnum**](oneOf&lt;EmploymentStatusEnum,BlankEnum,NullEnum&gt;.md) |  | [optional] 
**Profession** | Pointer to **NullableString** |  | [optional] 
**ReferralCode** | Pointer to **NullableString** |  | [optional] 
**Activated** | Pointer to **NullableTime** |  | [optional] 
**UtmSource** | Pointer to **string** |  | [optional] 
**UtmMedium** | Pointer to **string** |  | [optional] 
**UtmCampaign** | Pointer to **string** |  | [optional] 
**UtmTerm** | Pointer to **string** |  | [optional] 
**UtmContent** | Pointer to **string** |  | [optional] 
**MarketingConsentDate** | Pointer to **string** |  | [optional] [readonly] 
**DataConsentDate** | Pointer to **string** |  | [optional] [readonly] 

## Methods

### NewPatchedApplicationClientUpdate

`func NewPatchedApplicationClientUpdate() *PatchedApplicationClientUpdate`

NewPatchedApplicationClientUpdate instantiates a new PatchedApplicationClientUpdate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedApplicationClientUpdateWithDefaults

`func NewPatchedApplicationClientUpdateWithDefaults() *PatchedApplicationClientUpdate`

NewPatchedApplicationClientUpdateWithDefaults instantiates a new PatchedApplicationClientUpdate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmail

`func (o *PatchedApplicationClientUpdate) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *PatchedApplicationClientUpdate) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *PatchedApplicationClientUpdate) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *PatchedApplicationClientUpdate) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetBirthdate

`func (o *PatchedApplicationClientUpdate) GetBirthdate() string`

GetBirthdate returns the Birthdate field if non-nil, zero value otherwise.

### GetBirthdateOk

`func (o *PatchedApplicationClientUpdate) GetBirthdateOk() (*string, bool)`

GetBirthdateOk returns a tuple with the Birthdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBirthdate

`func (o *PatchedApplicationClientUpdate) SetBirthdate(v string)`

SetBirthdate sets Birthdate field to given value.

### HasBirthdate

`func (o *PatchedApplicationClientUpdate) HasBirthdate() bool`

HasBirthdate returns a boolean if a field has been set.

### GetTosConsent

`func (o *PatchedApplicationClientUpdate) GetTosConsent() bool`

GetTosConsent returns the TosConsent field if non-nil, zero value otherwise.

### GetTosConsentOk

`func (o *PatchedApplicationClientUpdate) GetTosConsentOk() (*bool, bool)`

GetTosConsentOk returns a tuple with the TosConsent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTosConsent

`func (o *PatchedApplicationClientUpdate) SetTosConsent(v bool)`

SetTosConsent sets TosConsent field to given value.

### HasTosConsent

`func (o *PatchedApplicationClientUpdate) HasTosConsent() bool`

HasTosConsent returns a boolean if a field has been set.

### GetMarketingConsent

`func (o *PatchedApplicationClientUpdate) GetMarketingConsent() bool`

GetMarketingConsent returns the MarketingConsent field if non-nil, zero value otherwise.

### GetMarketingConsentOk

`func (o *PatchedApplicationClientUpdate) GetMarketingConsentOk() (*bool, bool)`

GetMarketingConsentOk returns a tuple with the MarketingConsent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketingConsent

`func (o *PatchedApplicationClientUpdate) SetMarketingConsent(v bool)`

SetMarketingConsent sets MarketingConsent field to given value.

### HasMarketingConsent

`func (o *PatchedApplicationClientUpdate) HasMarketingConsent() bool`

HasMarketingConsent returns a boolean if a field has been set.

### GetDataConsent

`func (o *PatchedApplicationClientUpdate) GetDataConsent() bool`

GetDataConsent returns the DataConsent field if non-nil, zero value otherwise.

### GetDataConsentOk

`func (o *PatchedApplicationClientUpdate) GetDataConsentOk() (*bool, bool)`

GetDataConsentOk returns a tuple with the DataConsent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataConsent

`func (o *PatchedApplicationClientUpdate) SetDataConsent(v bool)`

SetDataConsent sets DataConsent field to given value.

### HasDataConsent

`func (o *PatchedApplicationClientUpdate) HasDataConsent() bool`

HasDataConsent returns a boolean if a field has been set.

### GetTosConsentDate

`func (o *PatchedApplicationClientUpdate) GetTosConsentDate() string`

GetTosConsentDate returns the TosConsentDate field if non-nil, zero value otherwise.

### GetTosConsentDateOk

`func (o *PatchedApplicationClientUpdate) GetTosConsentDateOk() (*string, bool)`

GetTosConsentDateOk returns a tuple with the TosConsentDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTosConsentDate

`func (o *PatchedApplicationClientUpdate) SetTosConsentDate(v string)`

SetTosConsentDate sets TosConsentDate field to given value.

### HasTosConsentDate

`func (o *PatchedApplicationClientUpdate) HasTosConsentDate() bool`

HasTosConsentDate returns a boolean if a field has been set.

### GetTaxInformation

`func (o *PatchedApplicationClientUpdate) GetTaxInformation() []string`

GetTaxInformation returns the TaxInformation field if non-nil, zero value otherwise.

### GetTaxInformationOk

`func (o *PatchedApplicationClientUpdate) GetTaxInformationOk() (*[]string, bool)`

GetTaxInformationOk returns a tuple with the TaxInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxInformation

`func (o *PatchedApplicationClientUpdate) SetTaxInformation(v []string)`

SetTaxInformation sets TaxInformation field to given value.

### HasTaxInformation

`func (o *PatchedApplicationClientUpdate) HasTaxInformation() bool`

HasTaxInformation returns a boolean if a field has been set.

### GetCountryBirth

`func (o *PatchedApplicationClientUpdate) GetCountryBirth() CountryField`

GetCountryBirth returns the CountryBirth field if non-nil, zero value otherwise.

### GetCountryBirthOk

`func (o *PatchedApplicationClientUpdate) GetCountryBirthOk() (*CountryField, bool)`

GetCountryBirthOk returns a tuple with the CountryBirth field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountryBirth

`func (o *PatchedApplicationClientUpdate) SetCountryBirth(v CountryField)`

SetCountryBirth sets CountryBirth field to given value.

### HasCountryBirth

`func (o *PatchedApplicationClientUpdate) HasCountryBirth() bool`

HasCountryBirth returns a boolean if a field has been set.

### GetLastLogin

`func (o *PatchedApplicationClientUpdate) GetLastLogin() time.Time`

GetLastLogin returns the LastLogin field if non-nil, zero value otherwise.

### GetLastLoginOk

`func (o *PatchedApplicationClientUpdate) GetLastLoginOk() (*time.Time, bool)`

GetLastLoginOk returns a tuple with the LastLogin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastLogin

`func (o *PatchedApplicationClientUpdate) SetLastLogin(v time.Time)`

SetLastLogin sets LastLogin field to given value.

### HasLastLogin

`func (o *PatchedApplicationClientUpdate) HasLastLogin() bool`

HasLastLogin returns a boolean if a field has been set.

### GetReferredBy

`func (o *PatchedApplicationClientUpdate) GetReferredBy() string`

GetReferredBy returns the ReferredBy field if non-nil, zero value otherwise.

### GetReferredByOk

`func (o *PatchedApplicationClientUpdate) GetReferredByOk() (*string, bool)`

GetReferredByOk returns a tuple with the ReferredBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferredBy

`func (o *PatchedApplicationClientUpdate) SetReferredBy(v string)`

SetReferredBy sets ReferredBy field to given value.

### HasReferredBy

`func (o *PatchedApplicationClientUpdate) HasReferredBy() bool`

HasReferredBy returns a boolean if a field has been set.

### SetReferredByNil

`func (o *PatchedApplicationClientUpdate) SetReferredByNil(b bool)`

 SetReferredByNil sets the value for ReferredBy to be an explicit nil

### UnsetReferredBy
`func (o *PatchedApplicationClientUpdate) UnsetReferredBy()`

UnsetReferredBy ensures that no value is present for ReferredBy, not even an explicit nil
### GetSuccessfulReferrals

`func (o *PatchedApplicationClientUpdate) GetSuccessfulReferrals() int32`

GetSuccessfulReferrals returns the SuccessfulReferrals field if non-nil, zero value otherwise.

### GetSuccessfulReferralsOk

`func (o *PatchedApplicationClientUpdate) GetSuccessfulReferralsOk() (*int32, bool)`

GetSuccessfulReferralsOk returns a tuple with the SuccessfulReferrals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccessfulReferrals

`func (o *PatchedApplicationClientUpdate) SetSuccessfulReferrals(v int32)`

SetSuccessfulReferrals sets SuccessfulReferrals field to given value.

### HasSuccessfulReferrals

`func (o *PatchedApplicationClientUpdate) HasSuccessfulReferrals() bool`

HasSuccessfulReferrals returns a boolean if a field has been set.

### GetKycVerified

`func (o *PatchedApplicationClientUpdate) GetKycVerified() bool`

GetKycVerified returns the KycVerified field if non-nil, zero value otherwise.

### GetKycVerifiedOk

`func (o *PatchedApplicationClientUpdate) GetKycVerifiedOk() (*bool, bool)`

GetKycVerifiedOk returns a tuple with the KycVerified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKycVerified

`func (o *PatchedApplicationClientUpdate) SetKycVerified(v bool)`

SetKycVerified sets KycVerified field to given value.

### HasKycVerified

`func (o *PatchedApplicationClientUpdate) HasKycVerified() bool`

HasKycVerified returns a boolean if a field has been set.

### GetIsVerified

`func (o *PatchedApplicationClientUpdate) GetIsVerified() bool`

GetIsVerified returns the IsVerified field if non-nil, zero value otherwise.

### GetIsVerifiedOk

`func (o *PatchedApplicationClientUpdate) GetIsVerifiedOk() (*bool, bool)`

GetIsVerifiedOk returns a tuple with the IsVerified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsVerified

`func (o *PatchedApplicationClientUpdate) SetIsVerified(v bool)`

SetIsVerified sets IsVerified field to given value.

### HasIsVerified

`func (o *PatchedApplicationClientUpdate) HasIsVerified() bool`

HasIsVerified returns a boolean if a field has been set.

### GetFeeSegments

`func (o *PatchedApplicationClientUpdate) GetFeeSegments() []string`

GetFeeSegments returns the FeeSegments field if non-nil, zero value otherwise.

### GetFeeSegmentsOk

`func (o *PatchedApplicationClientUpdate) GetFeeSegmentsOk() (*[]string, bool)`

GetFeeSegmentsOk returns a tuple with the FeeSegments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeeSegments

`func (o *PatchedApplicationClientUpdate) SetFeeSegments(v []string)`

SetFeeSegments sets FeeSegments field to given value.

### HasFeeSegments

`func (o *PatchedApplicationClientUpdate) HasFeeSegments() bool`

HasFeeSegments returns a boolean if a field has been set.

### GetExtraData

`func (o *PatchedApplicationClientUpdate) GetExtraData() map[string]interface{}`

GetExtraData returns the ExtraData field if non-nil, zero value otherwise.

### GetExtraDataOk

`func (o *PatchedApplicationClientUpdate) GetExtraDataOk() (*map[string]interface{}, bool)`

GetExtraDataOk returns a tuple with the ExtraData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraData

`func (o *PatchedApplicationClientUpdate) SetExtraData(v map[string]interface{})`

SetExtraData sets ExtraData field to given value.

### HasExtraData

`func (o *PatchedApplicationClientUpdate) HasExtraData() bool`

HasExtraData returns a boolean if a field has been set.

### GetPortfolios

`func (o *PatchedApplicationClientUpdate) GetPortfolios() []string`

GetPortfolios returns the Portfolios field if non-nil, zero value otherwise.

### GetPortfoliosOk

`func (o *PatchedApplicationClientUpdate) GetPortfoliosOk() (*[]string, bool)`

GetPortfoliosOk returns a tuple with the Portfolios field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPortfolios

`func (o *PatchedApplicationClientUpdate) SetPortfolios(v []string)`

SetPortfolios sets Portfolios field to given value.

### HasPortfolios

`func (o *PatchedApplicationClientUpdate) HasPortfolios() bool`

HasPortfolios returns a boolean if a field has been set.

### GetOnboardedBy

`func (o *PatchedApplicationClientUpdate) GetOnboardedBy() string`

GetOnboardedBy returns the OnboardedBy field if non-nil, zero value otherwise.

### GetOnboardedByOk

`func (o *PatchedApplicationClientUpdate) GetOnboardedByOk() (*string, bool)`

GetOnboardedByOk returns a tuple with the OnboardedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnboardedBy

`func (o *PatchedApplicationClientUpdate) SetOnboardedBy(v string)`

SetOnboardedBy sets OnboardedBy field to given value.

### HasOnboardedBy

`func (o *PatchedApplicationClientUpdate) HasOnboardedBy() bool`

HasOnboardedBy returns a boolean if a field has been set.

### SetOnboardedByNil

`func (o *PatchedApplicationClientUpdate) SetOnboardedByNil(b bool)`

 SetOnboardedByNil sets the value for OnboardedBy to be an explicit nil

### UnsetOnboardedBy
`func (o *PatchedApplicationClientUpdate) UnsetOnboardedBy()`

UnsetOnboardedBy ensures that no value is present for OnboardedBy, not even an explicit nil
### GetRiskLevel

`func (o *PatchedApplicationClientUpdate) GetRiskLevel() int32`

GetRiskLevel returns the RiskLevel field if non-nil, zero value otherwise.

### GetRiskLevelOk

`func (o *PatchedApplicationClientUpdate) GetRiskLevelOk() (*int32, bool)`

GetRiskLevelOk returns a tuple with the RiskLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskLevel

`func (o *PatchedApplicationClientUpdate) SetRiskLevel(v int32)`

SetRiskLevel sets RiskLevel field to given value.

### HasRiskLevel

`func (o *PatchedApplicationClientUpdate) HasRiskLevel() bool`

HasRiskLevel returns a boolean if a field has been set.

### GetOnboardingToken

`func (o *PatchedApplicationClientUpdate) GetOnboardingToken() string`

GetOnboardingToken returns the OnboardingToken field if non-nil, zero value otherwise.

### GetOnboardingTokenOk

`func (o *PatchedApplicationClientUpdate) GetOnboardingTokenOk() (*string, bool)`

GetOnboardingTokenOk returns a tuple with the OnboardingToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnboardingToken

`func (o *PatchedApplicationClientUpdate) SetOnboardingToken(v string)`

SetOnboardingToken sets OnboardingToken field to given value.

### HasOnboardingToken

`func (o *PatchedApplicationClientUpdate) HasOnboardingToken() bool`

HasOnboardingToken returns a boolean if a field has been set.

### GetPassword

`func (o *PatchedApplicationClientUpdate) GetPassword() string`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *PatchedApplicationClientUpdate) GetPasswordOk() (*string, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *PatchedApplicationClientUpdate) SetPassword(v string)`

SetPassword sets Password field to given value.

### HasPassword

`func (o *PatchedApplicationClientUpdate) HasPassword() bool`

HasPassword returns a boolean if a field has been set.

### GetEmailVerifiedLastRequest

`func (o *PatchedApplicationClientUpdate) GetEmailVerifiedLastRequest() time.Time`

GetEmailVerifiedLastRequest returns the EmailVerifiedLastRequest field if non-nil, zero value otherwise.

### GetEmailVerifiedLastRequestOk

`func (o *PatchedApplicationClientUpdate) GetEmailVerifiedLastRequestOk() (*time.Time, bool)`

GetEmailVerifiedLastRequestOk returns a tuple with the EmailVerifiedLastRequest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailVerifiedLastRequest

`func (o *PatchedApplicationClientUpdate) SetEmailVerifiedLastRequest(v time.Time)`

SetEmailVerifiedLastRequest sets EmailVerifiedLastRequest field to given value.

### HasEmailVerifiedLastRequest

`func (o *PatchedApplicationClientUpdate) HasEmailVerifiedLastRequest() bool`

HasEmailVerifiedLastRequest returns a boolean if a field has been set.

### GetUuid

`func (o *PatchedApplicationClientUpdate) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *PatchedApplicationClientUpdate) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *PatchedApplicationClientUpdate) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *PatchedApplicationClientUpdate) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### GetCreated

`func (o *PatchedApplicationClientUpdate) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *PatchedApplicationClientUpdate) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *PatchedApplicationClientUpdate) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *PatchedApplicationClientUpdate) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetUpdated

`func (o *PatchedApplicationClientUpdate) GetUpdated() time.Time`

GetUpdated returns the Updated field if non-nil, zero value otherwise.

### GetUpdatedOk

`func (o *PatchedApplicationClientUpdate) GetUpdatedOk() (*time.Time, bool)`

GetUpdatedOk returns a tuple with the Updated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdated

`func (o *PatchedApplicationClientUpdate) SetUpdated(v time.Time)`

SetUpdated sets Updated field to given value.

### HasUpdated

`func (o *PatchedApplicationClientUpdate) HasUpdated() bool`

HasUpdated returns a boolean if a field has been set.

### GetComments

`func (o *PatchedApplicationClientUpdate) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *PatchedApplicationClientUpdate) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *PatchedApplicationClientUpdate) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *PatchedApplicationClientUpdate) HasComments() bool`

HasComments returns a boolean if a field has been set.

### SetCommentsNil

`func (o *PatchedApplicationClientUpdate) SetCommentsNil(b bool)`

 SetCommentsNil sets the value for Comments to be an explicit nil

### UnsetComments
`func (o *PatchedApplicationClientUpdate) UnsetComments()`

UnsetComments ensures that no value is present for Comments, not even an explicit nil
### GetStatus

`func (o *PatchedApplicationClientUpdate) GetStatus() StatusB65Enum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *PatchedApplicationClientUpdate) GetStatusOk() (*StatusB65Enum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *PatchedApplicationClientUpdate) SetStatus(v StatusB65Enum)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *PatchedApplicationClientUpdate) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetEmailVerified

`func (o *PatchedApplicationClientUpdate) GetEmailVerified() bool`

GetEmailVerified returns the EmailVerified field if non-nil, zero value otherwise.

### GetEmailVerifiedOk

`func (o *PatchedApplicationClientUpdate) GetEmailVerifiedOk() (*bool, bool)`

GetEmailVerifiedOk returns a tuple with the EmailVerified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailVerified

`func (o *PatchedApplicationClientUpdate) SetEmailVerified(v bool)`

SetEmailVerified sets EmailVerified field to given value.

### HasEmailVerified

`func (o *PatchedApplicationClientUpdate) HasEmailVerified() bool`

HasEmailVerified returns a boolean if a field has been set.

### GetEmailVerifyLastRequest

`func (o *PatchedApplicationClientUpdate) GetEmailVerifyLastRequest() time.Time`

GetEmailVerifyLastRequest returns the EmailVerifyLastRequest field if non-nil, zero value otherwise.

### GetEmailVerifyLastRequestOk

`func (o *PatchedApplicationClientUpdate) GetEmailVerifyLastRequestOk() (*time.Time, bool)`

GetEmailVerifyLastRequestOk returns a tuple with the EmailVerifyLastRequest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailVerifyLastRequest

`func (o *PatchedApplicationClientUpdate) SetEmailVerifyLastRequest(v time.Time)`

SetEmailVerifyLastRequest sets EmailVerifyLastRequest field to given value.

### HasEmailVerifyLastRequest

`func (o *PatchedApplicationClientUpdate) HasEmailVerifyLastRequest() bool`

HasEmailVerifyLastRequest returns a boolean if a field has been set.

### SetEmailVerifyLastRequestNil

`func (o *PatchedApplicationClientUpdate) SetEmailVerifyLastRequestNil(b bool)`

 SetEmailVerifyLastRequestNil sets the value for EmailVerifyLastRequest to be an explicit nil

### UnsetEmailVerifyLastRequest
`func (o *PatchedApplicationClientUpdate) UnsetEmailVerifyLastRequest()`

UnsetEmailVerifyLastRequest ensures that no value is present for EmailVerifyLastRequest, not even an explicit nil
### GetTitle

`func (o *PatchedApplicationClientUpdate) GetTitle() OneOfTitleEnumBlankEnumNullEnum`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *PatchedApplicationClientUpdate) GetTitleOk() (*OneOfTitleEnumBlankEnumNullEnum, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *PatchedApplicationClientUpdate) SetTitle(v OneOfTitleEnumBlankEnumNullEnum)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *PatchedApplicationClientUpdate) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### SetTitleNil

`func (o *PatchedApplicationClientUpdate) SetTitleNil(b bool)`

 SetTitleNil sets the value for Title to be an explicit nil

### UnsetTitle
`func (o *PatchedApplicationClientUpdate) UnsetTitle()`

UnsetTitle ensures that no value is present for Title, not even an explicit nil
### GetFirstName

`func (o *PatchedApplicationClientUpdate) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *PatchedApplicationClientUpdate) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *PatchedApplicationClientUpdate) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *PatchedApplicationClientUpdate) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.

### SetFirstNameNil

`func (o *PatchedApplicationClientUpdate) SetFirstNameNil(b bool)`

 SetFirstNameNil sets the value for FirstName to be an explicit nil

### UnsetFirstName
`func (o *PatchedApplicationClientUpdate) UnsetFirstName()`

UnsetFirstName ensures that no value is present for FirstName, not even an explicit nil
### GetMiddleName

`func (o *PatchedApplicationClientUpdate) GetMiddleName() string`

GetMiddleName returns the MiddleName field if non-nil, zero value otherwise.

### GetMiddleNameOk

`func (o *PatchedApplicationClientUpdate) GetMiddleNameOk() (*string, bool)`

GetMiddleNameOk returns a tuple with the MiddleName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMiddleName

`func (o *PatchedApplicationClientUpdate) SetMiddleName(v string)`

SetMiddleName sets MiddleName field to given value.

### HasMiddleName

`func (o *PatchedApplicationClientUpdate) HasMiddleName() bool`

HasMiddleName returns a boolean if a field has been set.

### SetMiddleNameNil

`func (o *PatchedApplicationClientUpdate) SetMiddleNameNil(b bool)`

 SetMiddleNameNil sets the value for MiddleName to be an explicit nil

### UnsetMiddleName
`func (o *PatchedApplicationClientUpdate) UnsetMiddleName()`

UnsetMiddleName ensures that no value is present for MiddleName, not even an explicit nil
### GetLastName

`func (o *PatchedApplicationClientUpdate) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *PatchedApplicationClientUpdate) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *PatchedApplicationClientUpdate) SetLastName(v string)`

SetLastName sets LastName field to given value.

### HasLastName

`func (o *PatchedApplicationClientUpdate) HasLastName() bool`

HasLastName returns a boolean if a field has been set.

### SetLastNameNil

`func (o *PatchedApplicationClientUpdate) SetLastNameNil(b bool)`

 SetLastNameNil sets the value for LastName to be an explicit nil

### UnsetLastName
`func (o *PatchedApplicationClientUpdate) UnsetLastName()`

UnsetLastName ensures that no value is present for LastName, not even an explicit nil
### GetGender

`func (o *PatchedApplicationClientUpdate) GetGender() OneOfGenderEnumBlankEnumNullEnum`

GetGender returns the Gender field if non-nil, zero value otherwise.

### GetGenderOk

`func (o *PatchedApplicationClientUpdate) GetGenderOk() (*OneOfGenderEnumBlankEnumNullEnum, bool)`

GetGenderOk returns a tuple with the Gender field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGender

`func (o *PatchedApplicationClientUpdate) SetGender(v OneOfGenderEnumBlankEnumNullEnum)`

SetGender sets Gender field to given value.

### HasGender

`func (o *PatchedApplicationClientUpdate) HasGender() bool`

HasGender returns a boolean if a field has been set.

### SetGenderNil

`func (o *PatchedApplicationClientUpdate) SetGenderNil(b bool)`

 SetGenderNil sets the value for Gender to be an explicit nil

### UnsetGender
`func (o *PatchedApplicationClientUpdate) UnsetGender()`

UnsetGender ensures that no value is present for Gender, not even an explicit nil
### GetMaritalStatus

`func (o *PatchedApplicationClientUpdate) GetMaritalStatus() OneOfMaritalStatusEnumBlankEnumNullEnum`

GetMaritalStatus returns the MaritalStatus field if non-nil, zero value otherwise.

### GetMaritalStatusOk

`func (o *PatchedApplicationClientUpdate) GetMaritalStatusOk() (*OneOfMaritalStatusEnumBlankEnumNullEnum, bool)`

GetMaritalStatusOk returns a tuple with the MaritalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaritalStatus

`func (o *PatchedApplicationClientUpdate) SetMaritalStatus(v OneOfMaritalStatusEnumBlankEnumNullEnum)`

SetMaritalStatus sets MaritalStatus field to given value.

### HasMaritalStatus

`func (o *PatchedApplicationClientUpdate) HasMaritalStatus() bool`

HasMaritalStatus returns a boolean if a field has been set.

### SetMaritalStatusNil

`func (o *PatchedApplicationClientUpdate) SetMaritalStatusNil(b bool)`

 SetMaritalStatusNil sets the value for MaritalStatus to be an explicit nil

### UnsetMaritalStatus
`func (o *PatchedApplicationClientUpdate) UnsetMaritalStatus()`

UnsetMaritalStatus ensures that no value is present for MaritalStatus, not even an explicit nil
### GetPhoneNumber

`func (o *PatchedApplicationClientUpdate) GetPhoneNumber() string`

GetPhoneNumber returns the PhoneNumber field if non-nil, zero value otherwise.

### GetPhoneNumberOk

`func (o *PatchedApplicationClientUpdate) GetPhoneNumberOk() (*string, bool)`

GetPhoneNumberOk returns a tuple with the PhoneNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhoneNumber

`func (o *PatchedApplicationClientUpdate) SetPhoneNumber(v string)`

SetPhoneNumber sets PhoneNumber field to given value.

### HasPhoneNumber

`func (o *PatchedApplicationClientUpdate) HasPhoneNumber() bool`

HasPhoneNumber returns a boolean if a field has been set.

### SetPhoneNumberNil

`func (o *PatchedApplicationClientUpdate) SetPhoneNumberNil(b bool)`

 SetPhoneNumberNil sets the value for PhoneNumber to be an explicit nil

### UnsetPhoneNumber
`func (o *PatchedApplicationClientUpdate) UnsetPhoneNumber()`

UnsetPhoneNumber ensures that no value is present for PhoneNumber, not even an explicit nil
### GetPhoneNumberVerified

`func (o *PatchedApplicationClientUpdate) GetPhoneNumberVerified() time.Time`

GetPhoneNumberVerified returns the PhoneNumberVerified field if non-nil, zero value otherwise.

### GetPhoneNumberVerifiedOk

`func (o *PatchedApplicationClientUpdate) GetPhoneNumberVerifiedOk() (*time.Time, bool)`

GetPhoneNumberVerifiedOk returns a tuple with the PhoneNumberVerified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhoneNumberVerified

`func (o *PatchedApplicationClientUpdate) SetPhoneNumberVerified(v time.Time)`

SetPhoneNumberVerified sets PhoneNumberVerified field to given value.

### HasPhoneNumberVerified

`func (o *PatchedApplicationClientUpdate) HasPhoneNumberVerified() bool`

HasPhoneNumberVerified returns a boolean if a field has been set.

### SetPhoneNumberVerifiedNil

`func (o *PatchedApplicationClientUpdate) SetPhoneNumberVerifiedNil(b bool)`

 SetPhoneNumberVerifiedNil sets the value for PhoneNumberVerified to be an explicit nil

### UnsetPhoneNumberVerified
`func (o *PatchedApplicationClientUpdate) UnsetPhoneNumberVerified()`

UnsetPhoneNumberVerified ensures that no value is present for PhoneNumberVerified, not even an explicit nil
### GetLanguage

`func (o *PatchedApplicationClientUpdate) GetLanguage() string`

GetLanguage returns the Language field if non-nil, zero value otherwise.

### GetLanguageOk

`func (o *PatchedApplicationClientUpdate) GetLanguageOk() (*string, bool)`

GetLanguageOk returns a tuple with the Language field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguage

`func (o *PatchedApplicationClientUpdate) SetLanguage(v string)`

SetLanguage sets Language field to given value.

### HasLanguage

`func (o *PatchedApplicationClientUpdate) HasLanguage() bool`

HasLanguage returns a boolean if a field has been set.

### GetEmploymentStatus

`func (o *PatchedApplicationClientUpdate) GetEmploymentStatus() OneOfEmploymentStatusEnumBlankEnumNullEnum`

GetEmploymentStatus returns the EmploymentStatus field if non-nil, zero value otherwise.

### GetEmploymentStatusOk

`func (o *PatchedApplicationClientUpdate) GetEmploymentStatusOk() (*OneOfEmploymentStatusEnumBlankEnumNullEnum, bool)`

GetEmploymentStatusOk returns a tuple with the EmploymentStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmploymentStatus

`func (o *PatchedApplicationClientUpdate) SetEmploymentStatus(v OneOfEmploymentStatusEnumBlankEnumNullEnum)`

SetEmploymentStatus sets EmploymentStatus field to given value.

### HasEmploymentStatus

`func (o *PatchedApplicationClientUpdate) HasEmploymentStatus() bool`

HasEmploymentStatus returns a boolean if a field has been set.

### SetEmploymentStatusNil

`func (o *PatchedApplicationClientUpdate) SetEmploymentStatusNil(b bool)`

 SetEmploymentStatusNil sets the value for EmploymentStatus to be an explicit nil

### UnsetEmploymentStatus
`func (o *PatchedApplicationClientUpdate) UnsetEmploymentStatus()`

UnsetEmploymentStatus ensures that no value is present for EmploymentStatus, not even an explicit nil
### GetProfession

`func (o *PatchedApplicationClientUpdate) GetProfession() string`

GetProfession returns the Profession field if non-nil, zero value otherwise.

### GetProfessionOk

`func (o *PatchedApplicationClientUpdate) GetProfessionOk() (*string, bool)`

GetProfessionOk returns a tuple with the Profession field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfession

`func (o *PatchedApplicationClientUpdate) SetProfession(v string)`

SetProfession sets Profession field to given value.

### HasProfession

`func (o *PatchedApplicationClientUpdate) HasProfession() bool`

HasProfession returns a boolean if a field has been set.

### SetProfessionNil

`func (o *PatchedApplicationClientUpdate) SetProfessionNil(b bool)`

 SetProfessionNil sets the value for Profession to be an explicit nil

### UnsetProfession
`func (o *PatchedApplicationClientUpdate) UnsetProfession()`

UnsetProfession ensures that no value is present for Profession, not even an explicit nil
### GetReferralCode

`func (o *PatchedApplicationClientUpdate) GetReferralCode() string`

GetReferralCode returns the ReferralCode field if non-nil, zero value otherwise.

### GetReferralCodeOk

`func (o *PatchedApplicationClientUpdate) GetReferralCodeOk() (*string, bool)`

GetReferralCodeOk returns a tuple with the ReferralCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferralCode

`func (o *PatchedApplicationClientUpdate) SetReferralCode(v string)`

SetReferralCode sets ReferralCode field to given value.

### HasReferralCode

`func (o *PatchedApplicationClientUpdate) HasReferralCode() bool`

HasReferralCode returns a boolean if a field has been set.

### SetReferralCodeNil

`func (o *PatchedApplicationClientUpdate) SetReferralCodeNil(b bool)`

 SetReferralCodeNil sets the value for ReferralCode to be an explicit nil

### UnsetReferralCode
`func (o *PatchedApplicationClientUpdate) UnsetReferralCode()`

UnsetReferralCode ensures that no value is present for ReferralCode, not even an explicit nil
### GetActivated

`func (o *PatchedApplicationClientUpdate) GetActivated() time.Time`

GetActivated returns the Activated field if non-nil, zero value otherwise.

### GetActivatedOk

`func (o *PatchedApplicationClientUpdate) GetActivatedOk() (*time.Time, bool)`

GetActivatedOk returns a tuple with the Activated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivated

`func (o *PatchedApplicationClientUpdate) SetActivated(v time.Time)`

SetActivated sets Activated field to given value.

### HasActivated

`func (o *PatchedApplicationClientUpdate) HasActivated() bool`

HasActivated returns a boolean if a field has been set.

### SetActivatedNil

`func (o *PatchedApplicationClientUpdate) SetActivatedNil(b bool)`

 SetActivatedNil sets the value for Activated to be an explicit nil

### UnsetActivated
`func (o *PatchedApplicationClientUpdate) UnsetActivated()`

UnsetActivated ensures that no value is present for Activated, not even an explicit nil
### GetUtmSource

`func (o *PatchedApplicationClientUpdate) GetUtmSource() string`

GetUtmSource returns the UtmSource field if non-nil, zero value otherwise.

### GetUtmSourceOk

`func (o *PatchedApplicationClientUpdate) GetUtmSourceOk() (*string, bool)`

GetUtmSourceOk returns a tuple with the UtmSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUtmSource

`func (o *PatchedApplicationClientUpdate) SetUtmSource(v string)`

SetUtmSource sets UtmSource field to given value.

### HasUtmSource

`func (o *PatchedApplicationClientUpdate) HasUtmSource() bool`

HasUtmSource returns a boolean if a field has been set.

### GetUtmMedium

`func (o *PatchedApplicationClientUpdate) GetUtmMedium() string`

GetUtmMedium returns the UtmMedium field if non-nil, zero value otherwise.

### GetUtmMediumOk

`func (o *PatchedApplicationClientUpdate) GetUtmMediumOk() (*string, bool)`

GetUtmMediumOk returns a tuple with the UtmMedium field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUtmMedium

`func (o *PatchedApplicationClientUpdate) SetUtmMedium(v string)`

SetUtmMedium sets UtmMedium field to given value.

### HasUtmMedium

`func (o *PatchedApplicationClientUpdate) HasUtmMedium() bool`

HasUtmMedium returns a boolean if a field has been set.

### GetUtmCampaign

`func (o *PatchedApplicationClientUpdate) GetUtmCampaign() string`

GetUtmCampaign returns the UtmCampaign field if non-nil, zero value otherwise.

### GetUtmCampaignOk

`func (o *PatchedApplicationClientUpdate) GetUtmCampaignOk() (*string, bool)`

GetUtmCampaignOk returns a tuple with the UtmCampaign field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUtmCampaign

`func (o *PatchedApplicationClientUpdate) SetUtmCampaign(v string)`

SetUtmCampaign sets UtmCampaign field to given value.

### HasUtmCampaign

`func (o *PatchedApplicationClientUpdate) HasUtmCampaign() bool`

HasUtmCampaign returns a boolean if a field has been set.

### GetUtmTerm

`func (o *PatchedApplicationClientUpdate) GetUtmTerm() string`

GetUtmTerm returns the UtmTerm field if non-nil, zero value otherwise.

### GetUtmTermOk

`func (o *PatchedApplicationClientUpdate) GetUtmTermOk() (*string, bool)`

GetUtmTermOk returns a tuple with the UtmTerm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUtmTerm

`func (o *PatchedApplicationClientUpdate) SetUtmTerm(v string)`

SetUtmTerm sets UtmTerm field to given value.

### HasUtmTerm

`func (o *PatchedApplicationClientUpdate) HasUtmTerm() bool`

HasUtmTerm returns a boolean if a field has been set.

### GetUtmContent

`func (o *PatchedApplicationClientUpdate) GetUtmContent() string`

GetUtmContent returns the UtmContent field if non-nil, zero value otherwise.

### GetUtmContentOk

`func (o *PatchedApplicationClientUpdate) GetUtmContentOk() (*string, bool)`

GetUtmContentOk returns a tuple with the UtmContent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUtmContent

`func (o *PatchedApplicationClientUpdate) SetUtmContent(v string)`

SetUtmContent sets UtmContent field to given value.

### HasUtmContent

`func (o *PatchedApplicationClientUpdate) HasUtmContent() bool`

HasUtmContent returns a boolean if a field has been set.

### GetMarketingConsentDate

`func (o *PatchedApplicationClientUpdate) GetMarketingConsentDate() string`

GetMarketingConsentDate returns the MarketingConsentDate field if non-nil, zero value otherwise.

### GetMarketingConsentDateOk

`func (o *PatchedApplicationClientUpdate) GetMarketingConsentDateOk() (*string, bool)`

GetMarketingConsentDateOk returns a tuple with the MarketingConsentDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketingConsentDate

`func (o *PatchedApplicationClientUpdate) SetMarketingConsentDate(v string)`

SetMarketingConsentDate sets MarketingConsentDate field to given value.

### HasMarketingConsentDate

`func (o *PatchedApplicationClientUpdate) HasMarketingConsentDate() bool`

HasMarketingConsentDate returns a boolean if a field has been set.

### GetDataConsentDate

`func (o *PatchedApplicationClientUpdate) GetDataConsentDate() string`

GetDataConsentDate returns the DataConsentDate field if non-nil, zero value otherwise.

### GetDataConsentDateOk

`func (o *PatchedApplicationClientUpdate) GetDataConsentDateOk() (*string, bool)`

GetDataConsentDateOk returns a tuple with the DataConsentDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataConsentDate

`func (o *PatchedApplicationClientUpdate) SetDataConsentDate(v string)`

SetDataConsentDate sets DataConsentDate field to given value.

### HasDataConsentDate

`func (o *PatchedApplicationClientUpdate) HasDataConsentDate() bool`

HasDataConsentDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


