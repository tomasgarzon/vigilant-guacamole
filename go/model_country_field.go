/*
Nucoro API

No description

API version: 4.175.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// CountryField struct for CountryField
type CountryField struct {
	Id int32 `json:"id"`
	Code string `json:"code"`
	Iso3 string `json:"iso3"`
	Name string `json:"name"`
	NameEnGb NullableString `json:"name_en_gb,omitempty"`
	NameEnCh NullableString `json:"name_en_ch,omitempty"`
	NameFrCh NullableString `json:"name_fr_ch,omitempty"`
	NameDeCh NullableString `json:"name_de_ch,omitempty"`
	NameEsEs NullableString `json:"name_es_es,omitempty"`
	NameItCh NullableString `json:"name_it_ch,omitempty"`
	LongName string `json:"long_name"`
	LongNameEnGb NullableString `json:"long_name_en_gb,omitempty"`
	LongNameEnCh NullableString `json:"long_name_en_ch,omitempty"`
	LongNameFrCh NullableString `json:"long_name_fr_ch,omitempty"`
	LongNameDeCh NullableString `json:"long_name_de_ch,omitempty"`
	LongNameEsEs NullableString `json:"long_name_es_es,omitempty"`
	LongNameItCh NullableString `json:"long_name_it_ch,omitempty"`
	EeaCountry *bool `json:"eea_country,omitempty"`
}

// NewCountryField instantiates a new CountryField object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCountryField(id int32, code string, iso3 string, name string, longName string) *CountryField {
	this := CountryField{}
	this.Id = id
	this.Code = code
	this.Iso3 = iso3
	this.Name = name
	this.LongName = longName
	return &this
}

// NewCountryFieldWithDefaults instantiates a new CountryField object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCountryFieldWithDefaults() *CountryField {
	this := CountryField{}
	return &this
}

// GetId returns the Id field value
func (o *CountryField) GetId() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Id
}

// GetIdOk returns a tuple with the Id field value
// and a boolean to check if the value has been set.
func (o *CountryField) GetIdOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Id, true
}

// SetId sets field value
func (o *CountryField) SetId(v int32) {
	o.Id = v
}

// GetCode returns the Code field value
func (o *CountryField) GetCode() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Code
}

// GetCodeOk returns a tuple with the Code field value
// and a boolean to check if the value has been set.
func (o *CountryField) GetCodeOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Code, true
}

// SetCode sets field value
func (o *CountryField) SetCode(v string) {
	o.Code = v
}

// GetIso3 returns the Iso3 field value
func (o *CountryField) GetIso3() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Iso3
}

// GetIso3Ok returns a tuple with the Iso3 field value
// and a boolean to check if the value has been set.
func (o *CountryField) GetIso3Ok() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Iso3, true
}

// SetIso3 sets field value
func (o *CountryField) SetIso3(v string) {
	o.Iso3 = v
}

// GetName returns the Name field value
func (o *CountryField) GetName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Name
}

// GetNameOk returns a tuple with the Name field value
// and a boolean to check if the value has been set.
func (o *CountryField) GetNameOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Name, true
}

// SetName sets field value
func (o *CountryField) SetName(v string) {
	o.Name = v
}

// GetNameEnGb returns the NameEnGb field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *CountryField) GetNameEnGb() string {
	if o == nil || o.NameEnGb.Get() == nil {
		var ret string
		return ret
	}
	return *o.NameEnGb.Get()
}

// GetNameEnGbOk returns a tuple with the NameEnGb field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *CountryField) GetNameEnGbOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.NameEnGb.Get(), o.NameEnGb.IsSet()
}

// HasNameEnGb returns a boolean if a field has been set.
func (o *CountryField) HasNameEnGb() bool {
	if o != nil && o.NameEnGb.IsSet() {
		return true
	}

	return false
}

// SetNameEnGb gets a reference to the given NullableString and assigns it to the NameEnGb field.
func (o *CountryField) SetNameEnGb(v string) {
	o.NameEnGb.Set(&v)
}
// SetNameEnGbNil sets the value for NameEnGb to be an explicit nil
func (o *CountryField) SetNameEnGbNil() {
	o.NameEnGb.Set(nil)
}

// UnsetNameEnGb ensures that no value is present for NameEnGb, not even an explicit nil
func (o *CountryField) UnsetNameEnGb() {
	o.NameEnGb.Unset()
}

// GetNameEnCh returns the NameEnCh field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *CountryField) GetNameEnCh() string {
	if o == nil || o.NameEnCh.Get() == nil {
		var ret string
		return ret
	}
	return *o.NameEnCh.Get()
}

// GetNameEnChOk returns a tuple with the NameEnCh field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *CountryField) GetNameEnChOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.NameEnCh.Get(), o.NameEnCh.IsSet()
}

// HasNameEnCh returns a boolean if a field has been set.
func (o *CountryField) HasNameEnCh() bool {
	if o != nil && o.NameEnCh.IsSet() {
		return true
	}

	return false
}

// SetNameEnCh gets a reference to the given NullableString and assigns it to the NameEnCh field.
func (o *CountryField) SetNameEnCh(v string) {
	o.NameEnCh.Set(&v)
}
// SetNameEnChNil sets the value for NameEnCh to be an explicit nil
func (o *CountryField) SetNameEnChNil() {
	o.NameEnCh.Set(nil)
}

// UnsetNameEnCh ensures that no value is present for NameEnCh, not even an explicit nil
func (o *CountryField) UnsetNameEnCh() {
	o.NameEnCh.Unset()
}

// GetNameFrCh returns the NameFrCh field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *CountryField) GetNameFrCh() string {
	if o == nil || o.NameFrCh.Get() == nil {
		var ret string
		return ret
	}
	return *o.NameFrCh.Get()
}

// GetNameFrChOk returns a tuple with the NameFrCh field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *CountryField) GetNameFrChOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.NameFrCh.Get(), o.NameFrCh.IsSet()
}

// HasNameFrCh returns a boolean if a field has been set.
func (o *CountryField) HasNameFrCh() bool {
	if o != nil && o.NameFrCh.IsSet() {
		return true
	}

	return false
}

// SetNameFrCh gets a reference to the given NullableString and assigns it to the NameFrCh field.
func (o *CountryField) SetNameFrCh(v string) {
	o.NameFrCh.Set(&v)
}
// SetNameFrChNil sets the value for NameFrCh to be an explicit nil
func (o *CountryField) SetNameFrChNil() {
	o.NameFrCh.Set(nil)
}

// UnsetNameFrCh ensures that no value is present for NameFrCh, not even an explicit nil
func (o *CountryField) UnsetNameFrCh() {
	o.NameFrCh.Unset()
}

// GetNameDeCh returns the NameDeCh field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *CountryField) GetNameDeCh() string {
	if o == nil || o.NameDeCh.Get() == nil {
		var ret string
		return ret
	}
	return *o.NameDeCh.Get()
}

// GetNameDeChOk returns a tuple with the NameDeCh field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *CountryField) GetNameDeChOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.NameDeCh.Get(), o.NameDeCh.IsSet()
}

// HasNameDeCh returns a boolean if a field has been set.
func (o *CountryField) HasNameDeCh() bool {
	if o != nil && o.NameDeCh.IsSet() {
		return true
	}

	return false
}

// SetNameDeCh gets a reference to the given NullableString and assigns it to the NameDeCh field.
func (o *CountryField) SetNameDeCh(v string) {
	o.NameDeCh.Set(&v)
}
// SetNameDeChNil sets the value for NameDeCh to be an explicit nil
func (o *CountryField) SetNameDeChNil() {
	o.NameDeCh.Set(nil)
}

// UnsetNameDeCh ensures that no value is present for NameDeCh, not even an explicit nil
func (o *CountryField) UnsetNameDeCh() {
	o.NameDeCh.Unset()
}

// GetNameEsEs returns the NameEsEs field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *CountryField) GetNameEsEs() string {
	if o == nil || o.NameEsEs.Get() == nil {
		var ret string
		return ret
	}
	return *o.NameEsEs.Get()
}

// GetNameEsEsOk returns a tuple with the NameEsEs field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *CountryField) GetNameEsEsOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.NameEsEs.Get(), o.NameEsEs.IsSet()
}

// HasNameEsEs returns a boolean if a field has been set.
func (o *CountryField) HasNameEsEs() bool {
	if o != nil && o.NameEsEs.IsSet() {
		return true
	}

	return false
}

// SetNameEsEs gets a reference to the given NullableString and assigns it to the NameEsEs field.
func (o *CountryField) SetNameEsEs(v string) {
	o.NameEsEs.Set(&v)
}
// SetNameEsEsNil sets the value for NameEsEs to be an explicit nil
func (o *CountryField) SetNameEsEsNil() {
	o.NameEsEs.Set(nil)
}

// UnsetNameEsEs ensures that no value is present for NameEsEs, not even an explicit nil
func (o *CountryField) UnsetNameEsEs() {
	o.NameEsEs.Unset()
}

// GetNameItCh returns the NameItCh field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *CountryField) GetNameItCh() string {
	if o == nil || o.NameItCh.Get() == nil {
		var ret string
		return ret
	}
	return *o.NameItCh.Get()
}

// GetNameItChOk returns a tuple with the NameItCh field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *CountryField) GetNameItChOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.NameItCh.Get(), o.NameItCh.IsSet()
}

// HasNameItCh returns a boolean if a field has been set.
func (o *CountryField) HasNameItCh() bool {
	if o != nil && o.NameItCh.IsSet() {
		return true
	}

	return false
}

// SetNameItCh gets a reference to the given NullableString and assigns it to the NameItCh field.
func (o *CountryField) SetNameItCh(v string) {
	o.NameItCh.Set(&v)
}
// SetNameItChNil sets the value for NameItCh to be an explicit nil
func (o *CountryField) SetNameItChNil() {
	o.NameItCh.Set(nil)
}

// UnsetNameItCh ensures that no value is present for NameItCh, not even an explicit nil
func (o *CountryField) UnsetNameItCh() {
	o.NameItCh.Unset()
}

// GetLongName returns the LongName field value
func (o *CountryField) GetLongName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.LongName
}

// GetLongNameOk returns a tuple with the LongName field value
// and a boolean to check if the value has been set.
func (o *CountryField) GetLongNameOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.LongName, true
}

// SetLongName sets field value
func (o *CountryField) SetLongName(v string) {
	o.LongName = v
}

// GetLongNameEnGb returns the LongNameEnGb field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *CountryField) GetLongNameEnGb() string {
	if o == nil || o.LongNameEnGb.Get() == nil {
		var ret string
		return ret
	}
	return *o.LongNameEnGb.Get()
}

// GetLongNameEnGbOk returns a tuple with the LongNameEnGb field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *CountryField) GetLongNameEnGbOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.LongNameEnGb.Get(), o.LongNameEnGb.IsSet()
}

// HasLongNameEnGb returns a boolean if a field has been set.
func (o *CountryField) HasLongNameEnGb() bool {
	if o != nil && o.LongNameEnGb.IsSet() {
		return true
	}

	return false
}

// SetLongNameEnGb gets a reference to the given NullableString and assigns it to the LongNameEnGb field.
func (o *CountryField) SetLongNameEnGb(v string) {
	o.LongNameEnGb.Set(&v)
}
// SetLongNameEnGbNil sets the value for LongNameEnGb to be an explicit nil
func (o *CountryField) SetLongNameEnGbNil() {
	o.LongNameEnGb.Set(nil)
}

// UnsetLongNameEnGb ensures that no value is present for LongNameEnGb, not even an explicit nil
func (o *CountryField) UnsetLongNameEnGb() {
	o.LongNameEnGb.Unset()
}

// GetLongNameEnCh returns the LongNameEnCh field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *CountryField) GetLongNameEnCh() string {
	if o == nil || o.LongNameEnCh.Get() == nil {
		var ret string
		return ret
	}
	return *o.LongNameEnCh.Get()
}

// GetLongNameEnChOk returns a tuple with the LongNameEnCh field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *CountryField) GetLongNameEnChOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.LongNameEnCh.Get(), o.LongNameEnCh.IsSet()
}

// HasLongNameEnCh returns a boolean if a field has been set.
func (o *CountryField) HasLongNameEnCh() bool {
	if o != nil && o.LongNameEnCh.IsSet() {
		return true
	}

	return false
}

// SetLongNameEnCh gets a reference to the given NullableString and assigns it to the LongNameEnCh field.
func (o *CountryField) SetLongNameEnCh(v string) {
	o.LongNameEnCh.Set(&v)
}
// SetLongNameEnChNil sets the value for LongNameEnCh to be an explicit nil
func (o *CountryField) SetLongNameEnChNil() {
	o.LongNameEnCh.Set(nil)
}

// UnsetLongNameEnCh ensures that no value is present for LongNameEnCh, not even an explicit nil
func (o *CountryField) UnsetLongNameEnCh() {
	o.LongNameEnCh.Unset()
}

// GetLongNameFrCh returns the LongNameFrCh field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *CountryField) GetLongNameFrCh() string {
	if o == nil || o.LongNameFrCh.Get() == nil {
		var ret string
		return ret
	}
	return *o.LongNameFrCh.Get()
}

// GetLongNameFrChOk returns a tuple with the LongNameFrCh field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *CountryField) GetLongNameFrChOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.LongNameFrCh.Get(), o.LongNameFrCh.IsSet()
}

// HasLongNameFrCh returns a boolean if a field has been set.
func (o *CountryField) HasLongNameFrCh() bool {
	if o != nil && o.LongNameFrCh.IsSet() {
		return true
	}

	return false
}

// SetLongNameFrCh gets a reference to the given NullableString and assigns it to the LongNameFrCh field.
func (o *CountryField) SetLongNameFrCh(v string) {
	o.LongNameFrCh.Set(&v)
}
// SetLongNameFrChNil sets the value for LongNameFrCh to be an explicit nil
func (o *CountryField) SetLongNameFrChNil() {
	o.LongNameFrCh.Set(nil)
}

// UnsetLongNameFrCh ensures that no value is present for LongNameFrCh, not even an explicit nil
func (o *CountryField) UnsetLongNameFrCh() {
	o.LongNameFrCh.Unset()
}

// GetLongNameDeCh returns the LongNameDeCh field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *CountryField) GetLongNameDeCh() string {
	if o == nil || o.LongNameDeCh.Get() == nil {
		var ret string
		return ret
	}
	return *o.LongNameDeCh.Get()
}

// GetLongNameDeChOk returns a tuple with the LongNameDeCh field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *CountryField) GetLongNameDeChOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.LongNameDeCh.Get(), o.LongNameDeCh.IsSet()
}

// HasLongNameDeCh returns a boolean if a field has been set.
func (o *CountryField) HasLongNameDeCh() bool {
	if o != nil && o.LongNameDeCh.IsSet() {
		return true
	}

	return false
}

// SetLongNameDeCh gets a reference to the given NullableString and assigns it to the LongNameDeCh field.
func (o *CountryField) SetLongNameDeCh(v string) {
	o.LongNameDeCh.Set(&v)
}
// SetLongNameDeChNil sets the value for LongNameDeCh to be an explicit nil
func (o *CountryField) SetLongNameDeChNil() {
	o.LongNameDeCh.Set(nil)
}

// UnsetLongNameDeCh ensures that no value is present for LongNameDeCh, not even an explicit nil
func (o *CountryField) UnsetLongNameDeCh() {
	o.LongNameDeCh.Unset()
}

// GetLongNameEsEs returns the LongNameEsEs field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *CountryField) GetLongNameEsEs() string {
	if o == nil || o.LongNameEsEs.Get() == nil {
		var ret string
		return ret
	}
	return *o.LongNameEsEs.Get()
}

// GetLongNameEsEsOk returns a tuple with the LongNameEsEs field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *CountryField) GetLongNameEsEsOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.LongNameEsEs.Get(), o.LongNameEsEs.IsSet()
}

// HasLongNameEsEs returns a boolean if a field has been set.
func (o *CountryField) HasLongNameEsEs() bool {
	if o != nil && o.LongNameEsEs.IsSet() {
		return true
	}

	return false
}

// SetLongNameEsEs gets a reference to the given NullableString and assigns it to the LongNameEsEs field.
func (o *CountryField) SetLongNameEsEs(v string) {
	o.LongNameEsEs.Set(&v)
}
// SetLongNameEsEsNil sets the value for LongNameEsEs to be an explicit nil
func (o *CountryField) SetLongNameEsEsNil() {
	o.LongNameEsEs.Set(nil)
}

// UnsetLongNameEsEs ensures that no value is present for LongNameEsEs, not even an explicit nil
func (o *CountryField) UnsetLongNameEsEs() {
	o.LongNameEsEs.Unset()
}

// GetLongNameItCh returns the LongNameItCh field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *CountryField) GetLongNameItCh() string {
	if o == nil || o.LongNameItCh.Get() == nil {
		var ret string
		return ret
	}
	return *o.LongNameItCh.Get()
}

// GetLongNameItChOk returns a tuple with the LongNameItCh field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *CountryField) GetLongNameItChOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.LongNameItCh.Get(), o.LongNameItCh.IsSet()
}

// HasLongNameItCh returns a boolean if a field has been set.
func (o *CountryField) HasLongNameItCh() bool {
	if o != nil && o.LongNameItCh.IsSet() {
		return true
	}

	return false
}

// SetLongNameItCh gets a reference to the given NullableString and assigns it to the LongNameItCh field.
func (o *CountryField) SetLongNameItCh(v string) {
	o.LongNameItCh.Set(&v)
}
// SetLongNameItChNil sets the value for LongNameItCh to be an explicit nil
func (o *CountryField) SetLongNameItChNil() {
	o.LongNameItCh.Set(nil)
}

// UnsetLongNameItCh ensures that no value is present for LongNameItCh, not even an explicit nil
func (o *CountryField) UnsetLongNameItCh() {
	o.LongNameItCh.Unset()
}

// GetEeaCountry returns the EeaCountry field value if set, zero value otherwise.
func (o *CountryField) GetEeaCountry() bool {
	if o == nil || o.EeaCountry == nil {
		var ret bool
		return ret
	}
	return *o.EeaCountry
}

// GetEeaCountryOk returns a tuple with the EeaCountry field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CountryField) GetEeaCountryOk() (*bool, bool) {
	if o == nil || o.EeaCountry == nil {
		return nil, false
	}
	return o.EeaCountry, true
}

// HasEeaCountry returns a boolean if a field has been set.
func (o *CountryField) HasEeaCountry() bool {
	if o != nil && o.EeaCountry != nil {
		return true
	}

	return false
}

// SetEeaCountry gets a reference to the given bool and assigns it to the EeaCountry field.
func (o *CountryField) SetEeaCountry(v bool) {
	o.EeaCountry = &v
}

func (o CountryField) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["id"] = o.Id
	}
	if true {
		toSerialize["code"] = o.Code
	}
	if true {
		toSerialize["iso3"] = o.Iso3
	}
	if true {
		toSerialize["name"] = o.Name
	}
	if o.NameEnGb.IsSet() {
		toSerialize["name_en_gb"] = o.NameEnGb.Get()
	}
	if o.NameEnCh.IsSet() {
		toSerialize["name_en_ch"] = o.NameEnCh.Get()
	}
	if o.NameFrCh.IsSet() {
		toSerialize["name_fr_ch"] = o.NameFrCh.Get()
	}
	if o.NameDeCh.IsSet() {
		toSerialize["name_de_ch"] = o.NameDeCh.Get()
	}
	if o.NameEsEs.IsSet() {
		toSerialize["name_es_es"] = o.NameEsEs.Get()
	}
	if o.NameItCh.IsSet() {
		toSerialize["name_it_ch"] = o.NameItCh.Get()
	}
	if true {
		toSerialize["long_name"] = o.LongName
	}
	if o.LongNameEnGb.IsSet() {
		toSerialize["long_name_en_gb"] = o.LongNameEnGb.Get()
	}
	if o.LongNameEnCh.IsSet() {
		toSerialize["long_name_en_ch"] = o.LongNameEnCh.Get()
	}
	if o.LongNameFrCh.IsSet() {
		toSerialize["long_name_fr_ch"] = o.LongNameFrCh.Get()
	}
	if o.LongNameDeCh.IsSet() {
		toSerialize["long_name_de_ch"] = o.LongNameDeCh.Get()
	}
	if o.LongNameEsEs.IsSet() {
		toSerialize["long_name_es_es"] = o.LongNameEsEs.Get()
	}
	if o.LongNameItCh.IsSet() {
		toSerialize["long_name_it_ch"] = o.LongNameItCh.Get()
	}
	if o.EeaCountry != nil {
		toSerialize["eea_country"] = o.EeaCountry
	}
	return json.Marshal(toSerialize)
}

type NullableCountryField struct {
	value *CountryField
	isSet bool
}

func (v NullableCountryField) Get() *CountryField {
	return v.value
}

func (v *NullableCountryField) Set(val *CountryField) {
	v.value = val
	v.isSet = true
}

func (v NullableCountryField) IsSet() bool {
	return v.isSet
}

func (v *NullableCountryField) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCountryField(val *CountryField) *NullableCountryField {
	return &NullableCountryField{value: val, isSet: true}
}

func (v NullableCountryField) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCountryField) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


