/*
Nucoro API

No description

API version: 4.175.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
	"time"
)

// ClientCreate A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
type ClientCreate struct {
	Email string `json:"email"`
	Birthdate *string `json:"birthdate,omitempty"`
	Title NullableOneOfTitleEnumBlankEnumNullEnum `json:"title,omitempty"`
	FirstName NullableString `json:"first_name,omitempty"`
	LastName NullableString `json:"last_name,omitempty"`
	MiddleName NullableString `json:"middle_name,omitempty"`
	Gender NullableOneOfGenderEnumBlankEnumNullEnum `json:"gender,omitempty"`
	MaritalStatus NullableOneOfMaritalStatusEnumBlankEnumNullEnum `json:"marital_status,omitempty"`
	Language *string `json:"language,omitempty"`
	EmploymentStatus NullableOneOfEmploymentStatusEnumBlankEnumNullEnum `json:"employment_status,omitempty"`
	Activated NullableTime `json:"activated,omitempty"`
	Profile *map[string]interface{} `json:"profile,omitempty"`
	Password *string `json:"password,omitempty"`
	ReferralCode *string `json:"referral_code,omitempty"`
	UtmSource *string `json:"utm_source,omitempty"`
	UtmMedium *string `json:"utm_medium,omitempty"`
	UtmCampaign *string `json:"utm_campaign,omitempty"`
	UtmTerm *string `json:"utm_term,omitempty"`
	UtmContent *string `json:"utm_content,omitempty"`
	TosConsent *bool `json:"tos_consent,omitempty"`
	DataConsent *bool `json:"data_consent,omitempty"`
	MarketingConsent *bool `json:"marketing_consent,omitempty"`
	ExtraData *map[string]interface{} `json:"extra_data,omitempty"`
	PhoneNumber NullableString `json:"phone_number,omitempty"`
}

// NewClientCreate instantiates a new ClientCreate object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewClientCreate(email string) *ClientCreate {
	this := ClientCreate{}
	this.Email = email
	return &this
}

// NewClientCreateWithDefaults instantiates a new ClientCreate object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewClientCreateWithDefaults() *ClientCreate {
	this := ClientCreate{}
	return &this
}

// GetEmail returns the Email field value
func (o *ClientCreate) GetEmail() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Email
}

// GetEmailOk returns a tuple with the Email field value
// and a boolean to check if the value has been set.
func (o *ClientCreate) GetEmailOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Email, true
}

// SetEmail sets field value
func (o *ClientCreate) SetEmail(v string) {
	o.Email = v
}

// GetBirthdate returns the Birthdate field value if set, zero value otherwise.
func (o *ClientCreate) GetBirthdate() string {
	if o == nil || o.Birthdate == nil {
		var ret string
		return ret
	}
	return *o.Birthdate
}

// GetBirthdateOk returns a tuple with the Birthdate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ClientCreate) GetBirthdateOk() (*string, bool) {
	if o == nil || o.Birthdate == nil {
		return nil, false
	}
	return o.Birthdate, true
}

// HasBirthdate returns a boolean if a field has been set.
func (o *ClientCreate) HasBirthdate() bool {
	if o != nil && o.Birthdate != nil {
		return true
	}

	return false
}

// SetBirthdate gets a reference to the given string and assigns it to the Birthdate field.
func (o *ClientCreate) SetBirthdate(v string) {
	o.Birthdate = &v
}

// GetTitle returns the Title field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *ClientCreate) GetTitle() OneOfTitleEnumBlankEnumNullEnum {
	if o == nil || o.Title.Get() == nil {
		var ret OneOfTitleEnumBlankEnumNullEnum
		return ret
	}
	return *o.Title.Get()
}

// GetTitleOk returns a tuple with the Title field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *ClientCreate) GetTitleOk() (*OneOfTitleEnumBlankEnumNullEnum, bool) {
	if o == nil  {
		return nil, false
	}
	return o.Title.Get(), o.Title.IsSet()
}

// HasTitle returns a boolean if a field has been set.
func (o *ClientCreate) HasTitle() bool {
	if o != nil && o.Title.IsSet() {
		return true
	}

	return false
}

// SetTitle gets a reference to the given NullableOneOfTitleEnumBlankEnumNullEnum and assigns it to the Title field.
func (o *ClientCreate) SetTitle(v OneOfTitleEnumBlankEnumNullEnum) {
	o.Title.Set(&v)
}
// SetTitleNil sets the value for Title to be an explicit nil
func (o *ClientCreate) SetTitleNil() {
	o.Title.Set(nil)
}

// UnsetTitle ensures that no value is present for Title, not even an explicit nil
func (o *ClientCreate) UnsetTitle() {
	o.Title.Unset()
}

// GetFirstName returns the FirstName field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *ClientCreate) GetFirstName() string {
	if o == nil || o.FirstName.Get() == nil {
		var ret string
		return ret
	}
	return *o.FirstName.Get()
}

// GetFirstNameOk returns a tuple with the FirstName field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *ClientCreate) GetFirstNameOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.FirstName.Get(), o.FirstName.IsSet()
}

// HasFirstName returns a boolean if a field has been set.
func (o *ClientCreate) HasFirstName() bool {
	if o != nil && o.FirstName.IsSet() {
		return true
	}

	return false
}

// SetFirstName gets a reference to the given NullableString and assigns it to the FirstName field.
func (o *ClientCreate) SetFirstName(v string) {
	o.FirstName.Set(&v)
}
// SetFirstNameNil sets the value for FirstName to be an explicit nil
func (o *ClientCreate) SetFirstNameNil() {
	o.FirstName.Set(nil)
}

// UnsetFirstName ensures that no value is present for FirstName, not even an explicit nil
func (o *ClientCreate) UnsetFirstName() {
	o.FirstName.Unset()
}

// GetLastName returns the LastName field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *ClientCreate) GetLastName() string {
	if o == nil || o.LastName.Get() == nil {
		var ret string
		return ret
	}
	return *o.LastName.Get()
}

// GetLastNameOk returns a tuple with the LastName field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *ClientCreate) GetLastNameOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.LastName.Get(), o.LastName.IsSet()
}

// HasLastName returns a boolean if a field has been set.
func (o *ClientCreate) HasLastName() bool {
	if o != nil && o.LastName.IsSet() {
		return true
	}

	return false
}

// SetLastName gets a reference to the given NullableString and assigns it to the LastName field.
func (o *ClientCreate) SetLastName(v string) {
	o.LastName.Set(&v)
}
// SetLastNameNil sets the value for LastName to be an explicit nil
func (o *ClientCreate) SetLastNameNil() {
	o.LastName.Set(nil)
}

// UnsetLastName ensures that no value is present for LastName, not even an explicit nil
func (o *ClientCreate) UnsetLastName() {
	o.LastName.Unset()
}

// GetMiddleName returns the MiddleName field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *ClientCreate) GetMiddleName() string {
	if o == nil || o.MiddleName.Get() == nil {
		var ret string
		return ret
	}
	return *o.MiddleName.Get()
}

// GetMiddleNameOk returns a tuple with the MiddleName field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *ClientCreate) GetMiddleNameOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.MiddleName.Get(), o.MiddleName.IsSet()
}

// HasMiddleName returns a boolean if a field has been set.
func (o *ClientCreate) HasMiddleName() bool {
	if o != nil && o.MiddleName.IsSet() {
		return true
	}

	return false
}

// SetMiddleName gets a reference to the given NullableString and assigns it to the MiddleName field.
func (o *ClientCreate) SetMiddleName(v string) {
	o.MiddleName.Set(&v)
}
// SetMiddleNameNil sets the value for MiddleName to be an explicit nil
func (o *ClientCreate) SetMiddleNameNil() {
	o.MiddleName.Set(nil)
}

// UnsetMiddleName ensures that no value is present for MiddleName, not even an explicit nil
func (o *ClientCreate) UnsetMiddleName() {
	o.MiddleName.Unset()
}

// GetGender returns the Gender field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *ClientCreate) GetGender() OneOfGenderEnumBlankEnumNullEnum {
	if o == nil || o.Gender.Get() == nil {
		var ret OneOfGenderEnumBlankEnumNullEnum
		return ret
	}
	return *o.Gender.Get()
}

// GetGenderOk returns a tuple with the Gender field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *ClientCreate) GetGenderOk() (*OneOfGenderEnumBlankEnumNullEnum, bool) {
	if o == nil  {
		return nil, false
	}
	return o.Gender.Get(), o.Gender.IsSet()
}

// HasGender returns a boolean if a field has been set.
func (o *ClientCreate) HasGender() bool {
	if o != nil && o.Gender.IsSet() {
		return true
	}

	return false
}

// SetGender gets a reference to the given NullableOneOfGenderEnumBlankEnumNullEnum and assigns it to the Gender field.
func (o *ClientCreate) SetGender(v OneOfGenderEnumBlankEnumNullEnum) {
	o.Gender.Set(&v)
}
// SetGenderNil sets the value for Gender to be an explicit nil
func (o *ClientCreate) SetGenderNil() {
	o.Gender.Set(nil)
}

// UnsetGender ensures that no value is present for Gender, not even an explicit nil
func (o *ClientCreate) UnsetGender() {
	o.Gender.Unset()
}

// GetMaritalStatus returns the MaritalStatus field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *ClientCreate) GetMaritalStatus() OneOfMaritalStatusEnumBlankEnumNullEnum {
	if o == nil || o.MaritalStatus.Get() == nil {
		var ret OneOfMaritalStatusEnumBlankEnumNullEnum
		return ret
	}
	return *o.MaritalStatus.Get()
}

// GetMaritalStatusOk returns a tuple with the MaritalStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *ClientCreate) GetMaritalStatusOk() (*OneOfMaritalStatusEnumBlankEnumNullEnum, bool) {
	if o == nil  {
		return nil, false
	}
	return o.MaritalStatus.Get(), o.MaritalStatus.IsSet()
}

// HasMaritalStatus returns a boolean if a field has been set.
func (o *ClientCreate) HasMaritalStatus() bool {
	if o != nil && o.MaritalStatus.IsSet() {
		return true
	}

	return false
}

// SetMaritalStatus gets a reference to the given NullableOneOfMaritalStatusEnumBlankEnumNullEnum and assigns it to the MaritalStatus field.
func (o *ClientCreate) SetMaritalStatus(v OneOfMaritalStatusEnumBlankEnumNullEnum) {
	o.MaritalStatus.Set(&v)
}
// SetMaritalStatusNil sets the value for MaritalStatus to be an explicit nil
func (o *ClientCreate) SetMaritalStatusNil() {
	o.MaritalStatus.Set(nil)
}

// UnsetMaritalStatus ensures that no value is present for MaritalStatus, not even an explicit nil
func (o *ClientCreate) UnsetMaritalStatus() {
	o.MaritalStatus.Unset()
}

// GetLanguage returns the Language field value if set, zero value otherwise.
func (o *ClientCreate) GetLanguage() string {
	if o == nil || o.Language == nil {
		var ret string
		return ret
	}
	return *o.Language
}

// GetLanguageOk returns a tuple with the Language field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ClientCreate) GetLanguageOk() (*string, bool) {
	if o == nil || o.Language == nil {
		return nil, false
	}
	return o.Language, true
}

// HasLanguage returns a boolean if a field has been set.
func (o *ClientCreate) HasLanguage() bool {
	if o != nil && o.Language != nil {
		return true
	}

	return false
}

// SetLanguage gets a reference to the given string and assigns it to the Language field.
func (o *ClientCreate) SetLanguage(v string) {
	o.Language = &v
}

// GetEmploymentStatus returns the EmploymentStatus field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *ClientCreate) GetEmploymentStatus() OneOfEmploymentStatusEnumBlankEnumNullEnum {
	if o == nil || o.EmploymentStatus.Get() == nil {
		var ret OneOfEmploymentStatusEnumBlankEnumNullEnum
		return ret
	}
	return *o.EmploymentStatus.Get()
}

// GetEmploymentStatusOk returns a tuple with the EmploymentStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *ClientCreate) GetEmploymentStatusOk() (*OneOfEmploymentStatusEnumBlankEnumNullEnum, bool) {
	if o == nil  {
		return nil, false
	}
	return o.EmploymentStatus.Get(), o.EmploymentStatus.IsSet()
}

// HasEmploymentStatus returns a boolean if a field has been set.
func (o *ClientCreate) HasEmploymentStatus() bool {
	if o != nil && o.EmploymentStatus.IsSet() {
		return true
	}

	return false
}

// SetEmploymentStatus gets a reference to the given NullableOneOfEmploymentStatusEnumBlankEnumNullEnum and assigns it to the EmploymentStatus field.
func (o *ClientCreate) SetEmploymentStatus(v OneOfEmploymentStatusEnumBlankEnumNullEnum) {
	o.EmploymentStatus.Set(&v)
}
// SetEmploymentStatusNil sets the value for EmploymentStatus to be an explicit nil
func (o *ClientCreate) SetEmploymentStatusNil() {
	o.EmploymentStatus.Set(nil)
}

// UnsetEmploymentStatus ensures that no value is present for EmploymentStatus, not even an explicit nil
func (o *ClientCreate) UnsetEmploymentStatus() {
	o.EmploymentStatus.Unset()
}

// GetActivated returns the Activated field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *ClientCreate) GetActivated() time.Time {
	if o == nil || o.Activated.Get() == nil {
		var ret time.Time
		return ret
	}
	return *o.Activated.Get()
}

// GetActivatedOk returns a tuple with the Activated field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *ClientCreate) GetActivatedOk() (*time.Time, bool) {
	if o == nil  {
		return nil, false
	}
	return o.Activated.Get(), o.Activated.IsSet()
}

// HasActivated returns a boolean if a field has been set.
func (o *ClientCreate) HasActivated() bool {
	if o != nil && o.Activated.IsSet() {
		return true
	}

	return false
}

// SetActivated gets a reference to the given NullableTime and assigns it to the Activated field.
func (o *ClientCreate) SetActivated(v time.Time) {
	o.Activated.Set(&v)
}
// SetActivatedNil sets the value for Activated to be an explicit nil
func (o *ClientCreate) SetActivatedNil() {
	o.Activated.Set(nil)
}

// UnsetActivated ensures that no value is present for Activated, not even an explicit nil
func (o *ClientCreate) UnsetActivated() {
	o.Activated.Unset()
}

// GetProfile returns the Profile field value if set, zero value otherwise.
func (o *ClientCreate) GetProfile() map[string]interface{} {
	if o == nil || o.Profile == nil {
		var ret map[string]interface{}
		return ret
	}
	return *o.Profile
}

// GetProfileOk returns a tuple with the Profile field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ClientCreate) GetProfileOk() (*map[string]interface{}, bool) {
	if o == nil || o.Profile == nil {
		return nil, false
	}
	return o.Profile, true
}

// HasProfile returns a boolean if a field has been set.
func (o *ClientCreate) HasProfile() bool {
	if o != nil && o.Profile != nil {
		return true
	}

	return false
}

// SetProfile gets a reference to the given map[string]interface{} and assigns it to the Profile field.
func (o *ClientCreate) SetProfile(v map[string]interface{}) {
	o.Profile = &v
}

// GetPassword returns the Password field value if set, zero value otherwise.
func (o *ClientCreate) GetPassword() string {
	if o == nil || o.Password == nil {
		var ret string
		return ret
	}
	return *o.Password
}

// GetPasswordOk returns a tuple with the Password field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ClientCreate) GetPasswordOk() (*string, bool) {
	if o == nil || o.Password == nil {
		return nil, false
	}
	return o.Password, true
}

// HasPassword returns a boolean if a field has been set.
func (o *ClientCreate) HasPassword() bool {
	if o != nil && o.Password != nil {
		return true
	}

	return false
}

// SetPassword gets a reference to the given string and assigns it to the Password field.
func (o *ClientCreate) SetPassword(v string) {
	o.Password = &v
}

// GetReferralCode returns the ReferralCode field value if set, zero value otherwise.
func (o *ClientCreate) GetReferralCode() string {
	if o == nil || o.ReferralCode == nil {
		var ret string
		return ret
	}
	return *o.ReferralCode
}

// GetReferralCodeOk returns a tuple with the ReferralCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ClientCreate) GetReferralCodeOk() (*string, bool) {
	if o == nil || o.ReferralCode == nil {
		return nil, false
	}
	return o.ReferralCode, true
}

// HasReferralCode returns a boolean if a field has been set.
func (o *ClientCreate) HasReferralCode() bool {
	if o != nil && o.ReferralCode != nil {
		return true
	}

	return false
}

// SetReferralCode gets a reference to the given string and assigns it to the ReferralCode field.
func (o *ClientCreate) SetReferralCode(v string) {
	o.ReferralCode = &v
}

// GetUtmSource returns the UtmSource field value if set, zero value otherwise.
func (o *ClientCreate) GetUtmSource() string {
	if o == nil || o.UtmSource == nil {
		var ret string
		return ret
	}
	return *o.UtmSource
}

// GetUtmSourceOk returns a tuple with the UtmSource field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ClientCreate) GetUtmSourceOk() (*string, bool) {
	if o == nil || o.UtmSource == nil {
		return nil, false
	}
	return o.UtmSource, true
}

// HasUtmSource returns a boolean if a field has been set.
func (o *ClientCreate) HasUtmSource() bool {
	if o != nil && o.UtmSource != nil {
		return true
	}

	return false
}

// SetUtmSource gets a reference to the given string and assigns it to the UtmSource field.
func (o *ClientCreate) SetUtmSource(v string) {
	o.UtmSource = &v
}

// GetUtmMedium returns the UtmMedium field value if set, zero value otherwise.
func (o *ClientCreate) GetUtmMedium() string {
	if o == nil || o.UtmMedium == nil {
		var ret string
		return ret
	}
	return *o.UtmMedium
}

// GetUtmMediumOk returns a tuple with the UtmMedium field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ClientCreate) GetUtmMediumOk() (*string, bool) {
	if o == nil || o.UtmMedium == nil {
		return nil, false
	}
	return o.UtmMedium, true
}

// HasUtmMedium returns a boolean if a field has been set.
func (o *ClientCreate) HasUtmMedium() bool {
	if o != nil && o.UtmMedium != nil {
		return true
	}

	return false
}

// SetUtmMedium gets a reference to the given string and assigns it to the UtmMedium field.
func (o *ClientCreate) SetUtmMedium(v string) {
	o.UtmMedium = &v
}

// GetUtmCampaign returns the UtmCampaign field value if set, zero value otherwise.
func (o *ClientCreate) GetUtmCampaign() string {
	if o == nil || o.UtmCampaign == nil {
		var ret string
		return ret
	}
	return *o.UtmCampaign
}

// GetUtmCampaignOk returns a tuple with the UtmCampaign field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ClientCreate) GetUtmCampaignOk() (*string, bool) {
	if o == nil || o.UtmCampaign == nil {
		return nil, false
	}
	return o.UtmCampaign, true
}

// HasUtmCampaign returns a boolean if a field has been set.
func (o *ClientCreate) HasUtmCampaign() bool {
	if o != nil && o.UtmCampaign != nil {
		return true
	}

	return false
}

// SetUtmCampaign gets a reference to the given string and assigns it to the UtmCampaign field.
func (o *ClientCreate) SetUtmCampaign(v string) {
	o.UtmCampaign = &v
}

// GetUtmTerm returns the UtmTerm field value if set, zero value otherwise.
func (o *ClientCreate) GetUtmTerm() string {
	if o == nil || o.UtmTerm == nil {
		var ret string
		return ret
	}
	return *o.UtmTerm
}

// GetUtmTermOk returns a tuple with the UtmTerm field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ClientCreate) GetUtmTermOk() (*string, bool) {
	if o == nil || o.UtmTerm == nil {
		return nil, false
	}
	return o.UtmTerm, true
}

// HasUtmTerm returns a boolean if a field has been set.
func (o *ClientCreate) HasUtmTerm() bool {
	if o != nil && o.UtmTerm != nil {
		return true
	}

	return false
}

// SetUtmTerm gets a reference to the given string and assigns it to the UtmTerm field.
func (o *ClientCreate) SetUtmTerm(v string) {
	o.UtmTerm = &v
}

// GetUtmContent returns the UtmContent field value if set, zero value otherwise.
func (o *ClientCreate) GetUtmContent() string {
	if o == nil || o.UtmContent == nil {
		var ret string
		return ret
	}
	return *o.UtmContent
}

// GetUtmContentOk returns a tuple with the UtmContent field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ClientCreate) GetUtmContentOk() (*string, bool) {
	if o == nil || o.UtmContent == nil {
		return nil, false
	}
	return o.UtmContent, true
}

// HasUtmContent returns a boolean if a field has been set.
func (o *ClientCreate) HasUtmContent() bool {
	if o != nil && o.UtmContent != nil {
		return true
	}

	return false
}

// SetUtmContent gets a reference to the given string and assigns it to the UtmContent field.
func (o *ClientCreate) SetUtmContent(v string) {
	o.UtmContent = &v
}

// GetTosConsent returns the TosConsent field value if set, zero value otherwise.
func (o *ClientCreate) GetTosConsent() bool {
	if o == nil || o.TosConsent == nil {
		var ret bool
		return ret
	}
	return *o.TosConsent
}

// GetTosConsentOk returns a tuple with the TosConsent field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ClientCreate) GetTosConsentOk() (*bool, bool) {
	if o == nil || o.TosConsent == nil {
		return nil, false
	}
	return o.TosConsent, true
}

// HasTosConsent returns a boolean if a field has been set.
func (o *ClientCreate) HasTosConsent() bool {
	if o != nil && o.TosConsent != nil {
		return true
	}

	return false
}

// SetTosConsent gets a reference to the given bool and assigns it to the TosConsent field.
func (o *ClientCreate) SetTosConsent(v bool) {
	o.TosConsent = &v
}

// GetDataConsent returns the DataConsent field value if set, zero value otherwise.
func (o *ClientCreate) GetDataConsent() bool {
	if o == nil || o.DataConsent == nil {
		var ret bool
		return ret
	}
	return *o.DataConsent
}

// GetDataConsentOk returns a tuple with the DataConsent field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ClientCreate) GetDataConsentOk() (*bool, bool) {
	if o == nil || o.DataConsent == nil {
		return nil, false
	}
	return o.DataConsent, true
}

// HasDataConsent returns a boolean if a field has been set.
func (o *ClientCreate) HasDataConsent() bool {
	if o != nil && o.DataConsent != nil {
		return true
	}

	return false
}

// SetDataConsent gets a reference to the given bool and assigns it to the DataConsent field.
func (o *ClientCreate) SetDataConsent(v bool) {
	o.DataConsent = &v
}

// GetMarketingConsent returns the MarketingConsent field value if set, zero value otherwise.
func (o *ClientCreate) GetMarketingConsent() bool {
	if o == nil || o.MarketingConsent == nil {
		var ret bool
		return ret
	}
	return *o.MarketingConsent
}

// GetMarketingConsentOk returns a tuple with the MarketingConsent field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ClientCreate) GetMarketingConsentOk() (*bool, bool) {
	if o == nil || o.MarketingConsent == nil {
		return nil, false
	}
	return o.MarketingConsent, true
}

// HasMarketingConsent returns a boolean if a field has been set.
func (o *ClientCreate) HasMarketingConsent() bool {
	if o != nil && o.MarketingConsent != nil {
		return true
	}

	return false
}

// SetMarketingConsent gets a reference to the given bool and assigns it to the MarketingConsent field.
func (o *ClientCreate) SetMarketingConsent(v bool) {
	o.MarketingConsent = &v
}

// GetExtraData returns the ExtraData field value if set, zero value otherwise.
func (o *ClientCreate) GetExtraData() map[string]interface{} {
	if o == nil || o.ExtraData == nil {
		var ret map[string]interface{}
		return ret
	}
	return *o.ExtraData
}

// GetExtraDataOk returns a tuple with the ExtraData field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ClientCreate) GetExtraDataOk() (*map[string]interface{}, bool) {
	if o == nil || o.ExtraData == nil {
		return nil, false
	}
	return o.ExtraData, true
}

// HasExtraData returns a boolean if a field has been set.
func (o *ClientCreate) HasExtraData() bool {
	if o != nil && o.ExtraData != nil {
		return true
	}

	return false
}

// SetExtraData gets a reference to the given map[string]interface{} and assigns it to the ExtraData field.
func (o *ClientCreate) SetExtraData(v map[string]interface{}) {
	o.ExtraData = &v
}

// GetPhoneNumber returns the PhoneNumber field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *ClientCreate) GetPhoneNumber() string {
	if o == nil || o.PhoneNumber.Get() == nil {
		var ret string
		return ret
	}
	return *o.PhoneNumber.Get()
}

// GetPhoneNumberOk returns a tuple with the PhoneNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *ClientCreate) GetPhoneNumberOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.PhoneNumber.Get(), o.PhoneNumber.IsSet()
}

// HasPhoneNumber returns a boolean if a field has been set.
func (o *ClientCreate) HasPhoneNumber() bool {
	if o != nil && o.PhoneNumber.IsSet() {
		return true
	}

	return false
}

// SetPhoneNumber gets a reference to the given NullableString and assigns it to the PhoneNumber field.
func (o *ClientCreate) SetPhoneNumber(v string) {
	o.PhoneNumber.Set(&v)
}
// SetPhoneNumberNil sets the value for PhoneNumber to be an explicit nil
func (o *ClientCreate) SetPhoneNumberNil() {
	o.PhoneNumber.Set(nil)
}

// UnsetPhoneNumber ensures that no value is present for PhoneNumber, not even an explicit nil
func (o *ClientCreate) UnsetPhoneNumber() {
	o.PhoneNumber.Unset()
}

func (o ClientCreate) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["email"] = o.Email
	}
	if o.Birthdate != nil {
		toSerialize["birthdate"] = o.Birthdate
	}
	if o.Title.IsSet() {
		toSerialize["title"] = o.Title.Get()
	}
	if o.FirstName.IsSet() {
		toSerialize["first_name"] = o.FirstName.Get()
	}
	if o.LastName.IsSet() {
		toSerialize["last_name"] = o.LastName.Get()
	}
	if o.MiddleName.IsSet() {
		toSerialize["middle_name"] = o.MiddleName.Get()
	}
	if o.Gender.IsSet() {
		toSerialize["gender"] = o.Gender.Get()
	}
	if o.MaritalStatus.IsSet() {
		toSerialize["marital_status"] = o.MaritalStatus.Get()
	}
	if o.Language != nil {
		toSerialize["language"] = o.Language
	}
	if o.EmploymentStatus.IsSet() {
		toSerialize["employment_status"] = o.EmploymentStatus.Get()
	}
	if o.Activated.IsSet() {
		toSerialize["activated"] = o.Activated.Get()
	}
	if o.Profile != nil {
		toSerialize["profile"] = o.Profile
	}
	if o.Password != nil {
		toSerialize["password"] = o.Password
	}
	if o.ReferralCode != nil {
		toSerialize["referral_code"] = o.ReferralCode
	}
	if o.UtmSource != nil {
		toSerialize["utm_source"] = o.UtmSource
	}
	if o.UtmMedium != nil {
		toSerialize["utm_medium"] = o.UtmMedium
	}
	if o.UtmCampaign != nil {
		toSerialize["utm_campaign"] = o.UtmCampaign
	}
	if o.UtmTerm != nil {
		toSerialize["utm_term"] = o.UtmTerm
	}
	if o.UtmContent != nil {
		toSerialize["utm_content"] = o.UtmContent
	}
	if o.TosConsent != nil {
		toSerialize["tos_consent"] = o.TosConsent
	}
	if o.DataConsent != nil {
		toSerialize["data_consent"] = o.DataConsent
	}
	if o.MarketingConsent != nil {
		toSerialize["marketing_consent"] = o.MarketingConsent
	}
	if o.ExtraData != nil {
		toSerialize["extra_data"] = o.ExtraData
	}
	if o.PhoneNumber.IsSet() {
		toSerialize["phone_number"] = o.PhoneNumber.Get()
	}
	return json.Marshal(toSerialize)
}

type NullableClientCreate struct {
	value *ClientCreate
	isSet bool
}

func (v NullableClientCreate) Get() *ClientCreate {
	return v.value
}

func (v *NullableClientCreate) Set(val *ClientCreate) {
	v.value = val
	v.isSet = true
}

func (v NullableClientCreate) IsSet() bool {
	return v.isSet
}

func (v *NullableClientCreate) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableClientCreate(val *ClientCreate) *NullableClientCreate {
	return &NullableClientCreate{value: val, isSet: true}
}

func (v NullableClientCreate) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableClientCreate) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


