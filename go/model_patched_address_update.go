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

// PatchedAddressUpdate struct for PatchedAddressUpdate
type PatchedAddressUpdate struct {
	Uuid *string `json:"uuid,omitempty"`
	Line1 *string `json:"line1,omitempty"`
	Line2 NullableString `json:"line2,omitempty"`
	Postcode *string `json:"postcode,omitempty"`
	Locality *string `json:"locality,omitempty"`
	Country *string `json:"country,omitempty"`
	Region NullableString `json:"region,omitempty"`
}

// NewPatchedAddressUpdate instantiates a new PatchedAddressUpdate object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPatchedAddressUpdate() *PatchedAddressUpdate {
	this := PatchedAddressUpdate{}
	return &this
}

// NewPatchedAddressUpdateWithDefaults instantiates a new PatchedAddressUpdate object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPatchedAddressUpdateWithDefaults() *PatchedAddressUpdate {
	this := PatchedAddressUpdate{}
	return &this
}

// GetUuid returns the Uuid field value if set, zero value otherwise.
func (o *PatchedAddressUpdate) GetUuid() string {
	if o == nil || o.Uuid == nil {
		var ret string
		return ret
	}
	return *o.Uuid
}

// GetUuidOk returns a tuple with the Uuid field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PatchedAddressUpdate) GetUuidOk() (*string, bool) {
	if o == nil || o.Uuid == nil {
		return nil, false
	}
	return o.Uuid, true
}

// HasUuid returns a boolean if a field has been set.
func (o *PatchedAddressUpdate) HasUuid() bool {
	if o != nil && o.Uuid != nil {
		return true
	}

	return false
}

// SetUuid gets a reference to the given string and assigns it to the Uuid field.
func (o *PatchedAddressUpdate) SetUuid(v string) {
	o.Uuid = &v
}

// GetLine1 returns the Line1 field value if set, zero value otherwise.
func (o *PatchedAddressUpdate) GetLine1() string {
	if o == nil || o.Line1 == nil {
		var ret string
		return ret
	}
	return *o.Line1
}

// GetLine1Ok returns a tuple with the Line1 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PatchedAddressUpdate) GetLine1Ok() (*string, bool) {
	if o == nil || o.Line1 == nil {
		return nil, false
	}
	return o.Line1, true
}

// HasLine1 returns a boolean if a field has been set.
func (o *PatchedAddressUpdate) HasLine1() bool {
	if o != nil && o.Line1 != nil {
		return true
	}

	return false
}

// SetLine1 gets a reference to the given string and assigns it to the Line1 field.
func (o *PatchedAddressUpdate) SetLine1(v string) {
	o.Line1 = &v
}

// GetLine2 returns the Line2 field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *PatchedAddressUpdate) GetLine2() string {
	if o == nil || o.Line2.Get() == nil {
		var ret string
		return ret
	}
	return *o.Line2.Get()
}

// GetLine2Ok returns a tuple with the Line2 field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *PatchedAddressUpdate) GetLine2Ok() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.Line2.Get(), o.Line2.IsSet()
}

// HasLine2 returns a boolean if a field has been set.
func (o *PatchedAddressUpdate) HasLine2() bool {
	if o != nil && o.Line2.IsSet() {
		return true
	}

	return false
}

// SetLine2 gets a reference to the given NullableString and assigns it to the Line2 field.
func (o *PatchedAddressUpdate) SetLine2(v string) {
	o.Line2.Set(&v)
}
// SetLine2Nil sets the value for Line2 to be an explicit nil
func (o *PatchedAddressUpdate) SetLine2Nil() {
	o.Line2.Set(nil)
}

// UnsetLine2 ensures that no value is present for Line2, not even an explicit nil
func (o *PatchedAddressUpdate) UnsetLine2() {
	o.Line2.Unset()
}

// GetPostcode returns the Postcode field value if set, zero value otherwise.
func (o *PatchedAddressUpdate) GetPostcode() string {
	if o == nil || o.Postcode == nil {
		var ret string
		return ret
	}
	return *o.Postcode
}

// GetPostcodeOk returns a tuple with the Postcode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PatchedAddressUpdate) GetPostcodeOk() (*string, bool) {
	if o == nil || o.Postcode == nil {
		return nil, false
	}
	return o.Postcode, true
}

// HasPostcode returns a boolean if a field has been set.
func (o *PatchedAddressUpdate) HasPostcode() bool {
	if o != nil && o.Postcode != nil {
		return true
	}

	return false
}

// SetPostcode gets a reference to the given string and assigns it to the Postcode field.
func (o *PatchedAddressUpdate) SetPostcode(v string) {
	o.Postcode = &v
}

// GetLocality returns the Locality field value if set, zero value otherwise.
func (o *PatchedAddressUpdate) GetLocality() string {
	if o == nil || o.Locality == nil {
		var ret string
		return ret
	}
	return *o.Locality
}

// GetLocalityOk returns a tuple with the Locality field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PatchedAddressUpdate) GetLocalityOk() (*string, bool) {
	if o == nil || o.Locality == nil {
		return nil, false
	}
	return o.Locality, true
}

// HasLocality returns a boolean if a field has been set.
func (o *PatchedAddressUpdate) HasLocality() bool {
	if o != nil && o.Locality != nil {
		return true
	}

	return false
}

// SetLocality gets a reference to the given string and assigns it to the Locality field.
func (o *PatchedAddressUpdate) SetLocality(v string) {
	o.Locality = &v
}

// GetCountry returns the Country field value if set, zero value otherwise.
func (o *PatchedAddressUpdate) GetCountry() string {
	if o == nil || o.Country == nil {
		var ret string
		return ret
	}
	return *o.Country
}

// GetCountryOk returns a tuple with the Country field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PatchedAddressUpdate) GetCountryOk() (*string, bool) {
	if o == nil || o.Country == nil {
		return nil, false
	}
	return o.Country, true
}

// HasCountry returns a boolean if a field has been set.
func (o *PatchedAddressUpdate) HasCountry() bool {
	if o != nil && o.Country != nil {
		return true
	}

	return false
}

// SetCountry gets a reference to the given string and assigns it to the Country field.
func (o *PatchedAddressUpdate) SetCountry(v string) {
	o.Country = &v
}

// GetRegion returns the Region field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *PatchedAddressUpdate) GetRegion() string {
	if o == nil || o.Region.Get() == nil {
		var ret string
		return ret
	}
	return *o.Region.Get()
}

// GetRegionOk returns a tuple with the Region field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *PatchedAddressUpdate) GetRegionOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.Region.Get(), o.Region.IsSet()
}

// HasRegion returns a boolean if a field has been set.
func (o *PatchedAddressUpdate) HasRegion() bool {
	if o != nil && o.Region.IsSet() {
		return true
	}

	return false
}

// SetRegion gets a reference to the given NullableString and assigns it to the Region field.
func (o *PatchedAddressUpdate) SetRegion(v string) {
	o.Region.Set(&v)
}
// SetRegionNil sets the value for Region to be an explicit nil
func (o *PatchedAddressUpdate) SetRegionNil() {
	o.Region.Set(nil)
}

// UnsetRegion ensures that no value is present for Region, not even an explicit nil
func (o *PatchedAddressUpdate) UnsetRegion() {
	o.Region.Unset()
}

func (o PatchedAddressUpdate) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Uuid != nil {
		toSerialize["uuid"] = o.Uuid
	}
	if o.Line1 != nil {
		toSerialize["line1"] = o.Line1
	}
	if o.Line2.IsSet() {
		toSerialize["line2"] = o.Line2.Get()
	}
	if o.Postcode != nil {
		toSerialize["postcode"] = o.Postcode
	}
	if o.Locality != nil {
		toSerialize["locality"] = o.Locality
	}
	if o.Country != nil {
		toSerialize["country"] = o.Country
	}
	if o.Region.IsSet() {
		toSerialize["region"] = o.Region.Get()
	}
	return json.Marshal(toSerialize)
}

type NullablePatchedAddressUpdate struct {
	value *PatchedAddressUpdate
	isSet bool
}

func (v NullablePatchedAddressUpdate) Get() *PatchedAddressUpdate {
	return v.value
}

func (v *NullablePatchedAddressUpdate) Set(val *PatchedAddressUpdate) {
	v.value = val
	v.isSet = true
}

func (v NullablePatchedAddressUpdate) IsSet() bool {
	return v.isSet
}

func (v *NullablePatchedAddressUpdate) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePatchedAddressUpdate(val *PatchedAddressUpdate) *NullablePatchedAddressUpdate {
	return &NullablePatchedAddressUpdate{value: val, isSet: true}
}

func (v NullablePatchedAddressUpdate) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePatchedAddressUpdate) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


