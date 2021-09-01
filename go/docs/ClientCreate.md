# ClientCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | **string** |  | 
**Birthdate** | Pointer to **string** |  | [optional] 
**Title** | Pointer to [**NullableOneOfTitleEnumBlankEnumNullEnum**](oneOf&lt;TitleEnum,BlankEnum,NullEnum&gt;.md) |  | [optional] 
**FirstName** | Pointer to **NullableString** |  | [optional] 
**LastName** | Pointer to **NullableString** |  | [optional] 
**MiddleName** | Pointer to **NullableString** |  | [optional] 
**Gender** | Pointer to [**NullableOneOfGenderEnumBlankEnumNullEnum**](oneOf&lt;GenderEnum,BlankEnum,NullEnum&gt;.md) |  | [optional] 
**MaritalStatus** | Pointer to [**NullableOneOfMaritalStatusEnumBlankEnumNullEnum**](oneOf&lt;MaritalStatusEnum,BlankEnum,NullEnum&gt;.md) |  | [optional] 
**Language** | Pointer to **string** |  | [optional] 
**EmploymentStatus** | Pointer to [**NullableOneOfEmploymentStatusEnumBlankEnumNullEnum**](oneOf&lt;EmploymentStatusEnum,BlankEnum,NullEnum&gt;.md) |  | [optional] 
**Activated** | Pointer to **NullableTime** |  | [optional] 
**Profile** | Pointer to **map[string]interface{}** |  | [optional] 
**Password** | Pointer to **string** |  | [optional] 
**ReferralCode** | Pointer to **string** |  | [optional] 
**UtmSource** | Pointer to **string** |  | [optional] 
**UtmMedium** | Pointer to **string** |  | [optional] 
**UtmCampaign** | Pointer to **string** |  | [optional] 
**UtmTerm** | Pointer to **string** |  | [optional] 
**UtmContent** | Pointer to **string** |  | [optional] 
**TosConsent** | Pointer to **bool** |  | [optional] 
**DataConsent** | Pointer to **bool** |  | [optional] 
**MarketingConsent** | Pointer to **bool** |  | [optional] 
**ExtraData** | Pointer to **map[string]interface{}** |  | [optional] 
**PhoneNumber** | Pointer to **NullableString** |  | [optional] 

## Methods

### NewClientCreate

`func NewClientCreate(email string, ) *ClientCreate`

NewClientCreate instantiates a new ClientCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewClientCreateWithDefaults

`func NewClientCreateWithDefaults() *ClientCreate`

NewClientCreateWithDefaults instantiates a new ClientCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmail

`func (o *ClientCreate) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *ClientCreate) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *ClientCreate) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetBirthdate

`func (o *ClientCreate) GetBirthdate() string`

GetBirthdate returns the Birthdate field if non-nil, zero value otherwise.

### GetBirthdateOk

`func (o *ClientCreate) GetBirthdateOk() (*string, bool)`

GetBirthdateOk returns a tuple with the Birthdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBirthdate

`func (o *ClientCreate) SetBirthdate(v string)`

SetBirthdate sets Birthdate field to given value.

### HasBirthdate

`func (o *ClientCreate) HasBirthdate() bool`

HasBirthdate returns a boolean if a field has been set.

### GetTitle

`func (o *ClientCreate) GetTitle() OneOfTitleEnumBlankEnumNullEnum`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *ClientCreate) GetTitleOk() (*OneOfTitleEnumBlankEnumNullEnum, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *ClientCreate) SetTitle(v OneOfTitleEnumBlankEnumNullEnum)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *ClientCreate) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### SetTitleNil

`func (o *ClientCreate) SetTitleNil(b bool)`

 SetTitleNil sets the value for Title to be an explicit nil

### UnsetTitle
`func (o *ClientCreate) UnsetTitle()`

UnsetTitle ensures that no value is present for Title, not even an explicit nil
### GetFirstName

`func (o *ClientCreate) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *ClientCreate) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *ClientCreate) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *ClientCreate) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.

### SetFirstNameNil

`func (o *ClientCreate) SetFirstNameNil(b bool)`

 SetFirstNameNil sets the value for FirstName to be an explicit nil

### UnsetFirstName
`func (o *ClientCreate) UnsetFirstName()`

UnsetFirstName ensures that no value is present for FirstName, not even an explicit nil
### GetLastName

`func (o *ClientCreate) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *ClientCreate) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *ClientCreate) SetLastName(v string)`

SetLastName sets LastName field to given value.

### HasLastName

`func (o *ClientCreate) HasLastName() bool`

HasLastName returns a boolean if a field has been set.

### SetLastNameNil

`func (o *ClientCreate) SetLastNameNil(b bool)`

 SetLastNameNil sets the value for LastName to be an explicit nil

### UnsetLastName
`func (o *ClientCreate) UnsetLastName()`

UnsetLastName ensures that no value is present for LastName, not even an explicit nil
### GetMiddleName

`func (o *ClientCreate) GetMiddleName() string`

GetMiddleName returns the MiddleName field if non-nil, zero value otherwise.

### GetMiddleNameOk

`func (o *ClientCreate) GetMiddleNameOk() (*string, bool)`

GetMiddleNameOk returns a tuple with the MiddleName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMiddleName

`func (o *ClientCreate) SetMiddleName(v string)`

SetMiddleName sets MiddleName field to given value.

### HasMiddleName

`func (o *ClientCreate) HasMiddleName() bool`

HasMiddleName returns a boolean if a field has been set.

### SetMiddleNameNil

`func (o *ClientCreate) SetMiddleNameNil(b bool)`

 SetMiddleNameNil sets the value for MiddleName to be an explicit nil

### UnsetMiddleName
`func (o *ClientCreate) UnsetMiddleName()`

UnsetMiddleName ensures that no value is present for MiddleName, not even an explicit nil
### GetGender

`func (o *ClientCreate) GetGender() OneOfGenderEnumBlankEnumNullEnum`

GetGender returns the Gender field if non-nil, zero value otherwise.

### GetGenderOk

`func (o *ClientCreate) GetGenderOk() (*OneOfGenderEnumBlankEnumNullEnum, bool)`

GetGenderOk returns a tuple with the Gender field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGender

`func (o *ClientCreate) SetGender(v OneOfGenderEnumBlankEnumNullEnum)`

SetGender sets Gender field to given value.

### HasGender

`func (o *ClientCreate) HasGender() bool`

HasGender returns a boolean if a field has been set.

### SetGenderNil

`func (o *ClientCreate) SetGenderNil(b bool)`

 SetGenderNil sets the value for Gender to be an explicit nil

### UnsetGender
`func (o *ClientCreate) UnsetGender()`

UnsetGender ensures that no value is present for Gender, not even an explicit nil
### GetMaritalStatus

`func (o *ClientCreate) GetMaritalStatus() OneOfMaritalStatusEnumBlankEnumNullEnum`

GetMaritalStatus returns the MaritalStatus field if non-nil, zero value otherwise.

### GetMaritalStatusOk

`func (o *ClientCreate) GetMaritalStatusOk() (*OneOfMaritalStatusEnumBlankEnumNullEnum, bool)`

GetMaritalStatusOk returns a tuple with the MaritalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaritalStatus

`func (o *ClientCreate) SetMaritalStatus(v OneOfMaritalStatusEnumBlankEnumNullEnum)`

SetMaritalStatus sets MaritalStatus field to given value.

### HasMaritalStatus

`func (o *ClientCreate) HasMaritalStatus() bool`

HasMaritalStatus returns a boolean if a field has been set.

### SetMaritalStatusNil

`func (o *ClientCreate) SetMaritalStatusNil(b bool)`

 SetMaritalStatusNil sets the value for MaritalStatus to be an explicit nil

### UnsetMaritalStatus
`func (o *ClientCreate) UnsetMaritalStatus()`

UnsetMaritalStatus ensures that no value is present for MaritalStatus, not even an explicit nil
### GetLanguage

`func (o *ClientCreate) GetLanguage() string`

GetLanguage returns the Language field if non-nil, zero value otherwise.

### GetLanguageOk

`func (o *ClientCreate) GetLanguageOk() (*string, bool)`

GetLanguageOk returns a tuple with the Language field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguage

`func (o *ClientCreate) SetLanguage(v string)`

SetLanguage sets Language field to given value.

### HasLanguage

`func (o *ClientCreate) HasLanguage() bool`

HasLanguage returns a boolean if a field has been set.

### GetEmploymentStatus

`func (o *ClientCreate) GetEmploymentStatus() OneOfEmploymentStatusEnumBlankEnumNullEnum`

GetEmploymentStatus returns the EmploymentStatus field if non-nil, zero value otherwise.

### GetEmploymentStatusOk

`func (o *ClientCreate) GetEmploymentStatusOk() (*OneOfEmploymentStatusEnumBlankEnumNullEnum, bool)`

GetEmploymentStatusOk returns a tuple with the EmploymentStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmploymentStatus

`func (o *ClientCreate) SetEmploymentStatus(v OneOfEmploymentStatusEnumBlankEnumNullEnum)`

SetEmploymentStatus sets EmploymentStatus field to given value.

### HasEmploymentStatus

`func (o *ClientCreate) HasEmploymentStatus() bool`

HasEmploymentStatus returns a boolean if a field has been set.

### SetEmploymentStatusNil

`func (o *ClientCreate) SetEmploymentStatusNil(b bool)`

 SetEmploymentStatusNil sets the value for EmploymentStatus to be an explicit nil

### UnsetEmploymentStatus
`func (o *ClientCreate) UnsetEmploymentStatus()`

UnsetEmploymentStatus ensures that no value is present for EmploymentStatus, not even an explicit nil
### GetActivated

`func (o *ClientCreate) GetActivated() time.Time`

GetActivated returns the Activated field if non-nil, zero value otherwise.

### GetActivatedOk

`func (o *ClientCreate) GetActivatedOk() (*time.Time, bool)`

GetActivatedOk returns a tuple with the Activated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivated

`func (o *ClientCreate) SetActivated(v time.Time)`

SetActivated sets Activated field to given value.

### HasActivated

`func (o *ClientCreate) HasActivated() bool`

HasActivated returns a boolean if a field has been set.

### SetActivatedNil

`func (o *ClientCreate) SetActivatedNil(b bool)`

 SetActivatedNil sets the value for Activated to be an explicit nil

### UnsetActivated
`func (o *ClientCreate) UnsetActivated()`

UnsetActivated ensures that no value is present for Activated, not even an explicit nil
### GetProfile

`func (o *ClientCreate) GetProfile() map[string]interface{}`

GetProfile returns the Profile field if non-nil, zero value otherwise.

### GetProfileOk

`func (o *ClientCreate) GetProfileOk() (*map[string]interface{}, bool)`

GetProfileOk returns a tuple with the Profile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfile

`func (o *ClientCreate) SetProfile(v map[string]interface{})`

SetProfile sets Profile field to given value.

### HasProfile

`func (o *ClientCreate) HasProfile() bool`

HasProfile returns a boolean if a field has been set.

### GetPassword

`func (o *ClientCreate) GetPassword() string`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *ClientCreate) GetPasswordOk() (*string, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *ClientCreate) SetPassword(v string)`

SetPassword sets Password field to given value.

### HasPassword

`func (o *ClientCreate) HasPassword() bool`

HasPassword returns a boolean if a field has been set.

### GetReferralCode

`func (o *ClientCreate) GetReferralCode() string`

GetReferralCode returns the ReferralCode field if non-nil, zero value otherwise.

### GetReferralCodeOk

`func (o *ClientCreate) GetReferralCodeOk() (*string, bool)`

GetReferralCodeOk returns a tuple with the ReferralCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferralCode

`func (o *ClientCreate) SetReferralCode(v string)`

SetReferralCode sets ReferralCode field to given value.

### HasReferralCode

`func (o *ClientCreate) HasReferralCode() bool`

HasReferralCode returns a boolean if a field has been set.

### GetUtmSource

`func (o *ClientCreate) GetUtmSource() string`

GetUtmSource returns the UtmSource field if non-nil, zero value otherwise.

### GetUtmSourceOk

`func (o *ClientCreate) GetUtmSourceOk() (*string, bool)`

GetUtmSourceOk returns a tuple with the UtmSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUtmSource

`func (o *ClientCreate) SetUtmSource(v string)`

SetUtmSource sets UtmSource field to given value.

### HasUtmSource

`func (o *ClientCreate) HasUtmSource() bool`

HasUtmSource returns a boolean if a field has been set.

### GetUtmMedium

`func (o *ClientCreate) GetUtmMedium() string`

GetUtmMedium returns the UtmMedium field if non-nil, zero value otherwise.

### GetUtmMediumOk

`func (o *ClientCreate) GetUtmMediumOk() (*string, bool)`

GetUtmMediumOk returns a tuple with the UtmMedium field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUtmMedium

`func (o *ClientCreate) SetUtmMedium(v string)`

SetUtmMedium sets UtmMedium field to given value.

### HasUtmMedium

`func (o *ClientCreate) HasUtmMedium() bool`

HasUtmMedium returns a boolean if a field has been set.

### GetUtmCampaign

`func (o *ClientCreate) GetUtmCampaign() string`

GetUtmCampaign returns the UtmCampaign field if non-nil, zero value otherwise.

### GetUtmCampaignOk

`func (o *ClientCreate) GetUtmCampaignOk() (*string, bool)`

GetUtmCampaignOk returns a tuple with the UtmCampaign field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUtmCampaign

`func (o *ClientCreate) SetUtmCampaign(v string)`

SetUtmCampaign sets UtmCampaign field to given value.

### HasUtmCampaign

`func (o *ClientCreate) HasUtmCampaign() bool`

HasUtmCampaign returns a boolean if a field has been set.

### GetUtmTerm

`func (o *ClientCreate) GetUtmTerm() string`

GetUtmTerm returns the UtmTerm field if non-nil, zero value otherwise.

### GetUtmTermOk

`func (o *ClientCreate) GetUtmTermOk() (*string, bool)`

GetUtmTermOk returns a tuple with the UtmTerm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUtmTerm

`func (o *ClientCreate) SetUtmTerm(v string)`

SetUtmTerm sets UtmTerm field to given value.

### HasUtmTerm

`func (o *ClientCreate) HasUtmTerm() bool`

HasUtmTerm returns a boolean if a field has been set.

### GetUtmContent

`func (o *ClientCreate) GetUtmContent() string`

GetUtmContent returns the UtmContent field if non-nil, zero value otherwise.

### GetUtmContentOk

`func (o *ClientCreate) GetUtmContentOk() (*string, bool)`

GetUtmContentOk returns a tuple with the UtmContent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUtmContent

`func (o *ClientCreate) SetUtmContent(v string)`

SetUtmContent sets UtmContent field to given value.

### HasUtmContent

`func (o *ClientCreate) HasUtmContent() bool`

HasUtmContent returns a boolean if a field has been set.

### GetTosConsent

`func (o *ClientCreate) GetTosConsent() bool`

GetTosConsent returns the TosConsent field if non-nil, zero value otherwise.

### GetTosConsentOk

`func (o *ClientCreate) GetTosConsentOk() (*bool, bool)`

GetTosConsentOk returns a tuple with the TosConsent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTosConsent

`func (o *ClientCreate) SetTosConsent(v bool)`

SetTosConsent sets TosConsent field to given value.

### HasTosConsent

`func (o *ClientCreate) HasTosConsent() bool`

HasTosConsent returns a boolean if a field has been set.

### GetDataConsent

`func (o *ClientCreate) GetDataConsent() bool`

GetDataConsent returns the DataConsent field if non-nil, zero value otherwise.

### GetDataConsentOk

`func (o *ClientCreate) GetDataConsentOk() (*bool, bool)`

GetDataConsentOk returns a tuple with the DataConsent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataConsent

`func (o *ClientCreate) SetDataConsent(v bool)`

SetDataConsent sets DataConsent field to given value.

### HasDataConsent

`func (o *ClientCreate) HasDataConsent() bool`

HasDataConsent returns a boolean if a field has been set.

### GetMarketingConsent

`func (o *ClientCreate) GetMarketingConsent() bool`

GetMarketingConsent returns the MarketingConsent field if non-nil, zero value otherwise.

### GetMarketingConsentOk

`func (o *ClientCreate) GetMarketingConsentOk() (*bool, bool)`

GetMarketingConsentOk returns a tuple with the MarketingConsent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketingConsent

`func (o *ClientCreate) SetMarketingConsent(v bool)`

SetMarketingConsent sets MarketingConsent field to given value.

### HasMarketingConsent

`func (o *ClientCreate) HasMarketingConsent() bool`

HasMarketingConsent returns a boolean if a field has been set.

### GetExtraData

`func (o *ClientCreate) GetExtraData() map[string]interface{}`

GetExtraData returns the ExtraData field if non-nil, zero value otherwise.

### GetExtraDataOk

`func (o *ClientCreate) GetExtraDataOk() (*map[string]interface{}, bool)`

GetExtraDataOk returns a tuple with the ExtraData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraData

`func (o *ClientCreate) SetExtraData(v map[string]interface{})`

SetExtraData sets ExtraData field to given value.

### HasExtraData

`func (o *ClientCreate) HasExtraData() bool`

HasExtraData returns a boolean if a field has been set.

### GetPhoneNumber

`func (o *ClientCreate) GetPhoneNumber() string`

GetPhoneNumber returns the PhoneNumber field if non-nil, zero value otherwise.

### GetPhoneNumberOk

`func (o *ClientCreate) GetPhoneNumberOk() (*string, bool)`

GetPhoneNumberOk returns a tuple with the PhoneNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhoneNumber

`func (o *ClientCreate) SetPhoneNumber(v string)`

SetPhoneNumber sets PhoneNumber field to given value.

### HasPhoneNumber

`func (o *ClientCreate) HasPhoneNumber() bool`

HasPhoneNumber returns a boolean if a field has been set.

### SetPhoneNumberNil

`func (o *ClientCreate) SetPhoneNumberNil(b bool)`

 SetPhoneNumberNil sets the value for PhoneNumber to be an explicit nil

### UnsetPhoneNumber
`func (o *ClientCreate) UnsetPhoneNumber()`

UnsetPhoneNumber ensures that no value is present for PhoneNumber, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


