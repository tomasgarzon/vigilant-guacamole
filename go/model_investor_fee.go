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

// InvestorFee struct for InvestorFee
type InvestorFee struct {
	// Determinates a percentage or an amount (between 0 and 1 if percentage otherwise Positive Decimal)
	Value *float64 `json:"value,omitempty"`
	// Determines the type of the value(Fixed, Percentage)
	ValueUnit *ValueUnitEnum `json:"value_unit,omitempty"`
	// Each choice should have a related method on fee model that contains the logic to charge the client
	FeeType FeeTypeEnum `json:"fee_type"`
	// Describes the concept that will be shown on invoice
	Concept string `json:"concept"`
	// Defines the end date when the percentage should be applied
	DateFrom NullableString `json:"date_from,omitempty"`
	// Defines the start date when the percentage should be applied
	DateTo NullableString `json:"date_to,omitempty"`
	// Defines the amount start range when the percentage should be applied
	AmountFrom NullableFloat64 `json:"amount_from,omitempty"`
	// Defines the amount end range when the percentage should be applied
	AmountTo NullableFloat64 `json:"amount_to,omitempty"`
	Uuid string `json:"uuid"`
	Created time.Time `json:"created"`
	Updated time.Time `json:"updated"`
}

// NewInvestorFee instantiates a new InvestorFee object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInvestorFee(feeType FeeTypeEnum, concept string, uuid string, created time.Time, updated time.Time) *InvestorFee {
	this := InvestorFee{}
	this.FeeType = feeType
	this.Concept = concept
	this.Uuid = uuid
	this.Created = created
	this.Updated = updated
	return &this
}

// NewInvestorFeeWithDefaults instantiates a new InvestorFee object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInvestorFeeWithDefaults() *InvestorFee {
	this := InvestorFee{}
	return &this
}

// GetValue returns the Value field value if set, zero value otherwise.
func (o *InvestorFee) GetValue() float64 {
	if o == nil || o.Value == nil {
		var ret float64
		return ret
	}
	return *o.Value
}

// GetValueOk returns a tuple with the Value field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InvestorFee) GetValueOk() (*float64, bool) {
	if o == nil || o.Value == nil {
		return nil, false
	}
	return o.Value, true
}

// HasValue returns a boolean if a field has been set.
func (o *InvestorFee) HasValue() bool {
	if o != nil && o.Value != nil {
		return true
	}

	return false
}

// SetValue gets a reference to the given float64 and assigns it to the Value field.
func (o *InvestorFee) SetValue(v float64) {
	o.Value = &v
}

// GetValueUnit returns the ValueUnit field value if set, zero value otherwise.
func (o *InvestorFee) GetValueUnit() ValueUnitEnum {
	if o == nil || o.ValueUnit == nil {
		var ret ValueUnitEnum
		return ret
	}
	return *o.ValueUnit
}

// GetValueUnitOk returns a tuple with the ValueUnit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InvestorFee) GetValueUnitOk() (*ValueUnitEnum, bool) {
	if o == nil || o.ValueUnit == nil {
		return nil, false
	}
	return o.ValueUnit, true
}

// HasValueUnit returns a boolean if a field has been set.
func (o *InvestorFee) HasValueUnit() bool {
	if o != nil && o.ValueUnit != nil {
		return true
	}

	return false
}

// SetValueUnit gets a reference to the given ValueUnitEnum and assigns it to the ValueUnit field.
func (o *InvestorFee) SetValueUnit(v ValueUnitEnum) {
	o.ValueUnit = &v
}

// GetFeeType returns the FeeType field value
func (o *InvestorFee) GetFeeType() FeeTypeEnum {
	if o == nil {
		var ret FeeTypeEnum
		return ret
	}

	return o.FeeType
}

// GetFeeTypeOk returns a tuple with the FeeType field value
// and a boolean to check if the value has been set.
func (o *InvestorFee) GetFeeTypeOk() (*FeeTypeEnum, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.FeeType, true
}

// SetFeeType sets field value
func (o *InvestorFee) SetFeeType(v FeeTypeEnum) {
	o.FeeType = v
}

// GetConcept returns the Concept field value
func (o *InvestorFee) GetConcept() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Concept
}

// GetConceptOk returns a tuple with the Concept field value
// and a boolean to check if the value has been set.
func (o *InvestorFee) GetConceptOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Concept, true
}

// SetConcept sets field value
func (o *InvestorFee) SetConcept(v string) {
	o.Concept = v
}

// GetDateFrom returns the DateFrom field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *InvestorFee) GetDateFrom() string {
	if o == nil || o.DateFrom.Get() == nil {
		var ret string
		return ret
	}
	return *o.DateFrom.Get()
}

// GetDateFromOk returns a tuple with the DateFrom field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *InvestorFee) GetDateFromOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.DateFrom.Get(), o.DateFrom.IsSet()
}

// HasDateFrom returns a boolean if a field has been set.
func (o *InvestorFee) HasDateFrom() bool {
	if o != nil && o.DateFrom.IsSet() {
		return true
	}

	return false
}

// SetDateFrom gets a reference to the given NullableString and assigns it to the DateFrom field.
func (o *InvestorFee) SetDateFrom(v string) {
	o.DateFrom.Set(&v)
}
// SetDateFromNil sets the value for DateFrom to be an explicit nil
func (o *InvestorFee) SetDateFromNil() {
	o.DateFrom.Set(nil)
}

// UnsetDateFrom ensures that no value is present for DateFrom, not even an explicit nil
func (o *InvestorFee) UnsetDateFrom() {
	o.DateFrom.Unset()
}

// GetDateTo returns the DateTo field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *InvestorFee) GetDateTo() string {
	if o == nil || o.DateTo.Get() == nil {
		var ret string
		return ret
	}
	return *o.DateTo.Get()
}

// GetDateToOk returns a tuple with the DateTo field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *InvestorFee) GetDateToOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.DateTo.Get(), o.DateTo.IsSet()
}

// HasDateTo returns a boolean if a field has been set.
func (o *InvestorFee) HasDateTo() bool {
	if o != nil && o.DateTo.IsSet() {
		return true
	}

	return false
}

// SetDateTo gets a reference to the given NullableString and assigns it to the DateTo field.
func (o *InvestorFee) SetDateTo(v string) {
	o.DateTo.Set(&v)
}
// SetDateToNil sets the value for DateTo to be an explicit nil
func (o *InvestorFee) SetDateToNil() {
	o.DateTo.Set(nil)
}

// UnsetDateTo ensures that no value is present for DateTo, not even an explicit nil
func (o *InvestorFee) UnsetDateTo() {
	o.DateTo.Unset()
}

// GetAmountFrom returns the AmountFrom field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *InvestorFee) GetAmountFrom() float64 {
	if o == nil || o.AmountFrom.Get() == nil {
		var ret float64
		return ret
	}
	return *o.AmountFrom.Get()
}

// GetAmountFromOk returns a tuple with the AmountFrom field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *InvestorFee) GetAmountFromOk() (*float64, bool) {
	if o == nil  {
		return nil, false
	}
	return o.AmountFrom.Get(), o.AmountFrom.IsSet()
}

// HasAmountFrom returns a boolean if a field has been set.
func (o *InvestorFee) HasAmountFrom() bool {
	if o != nil && o.AmountFrom.IsSet() {
		return true
	}

	return false
}

// SetAmountFrom gets a reference to the given NullableFloat64 and assigns it to the AmountFrom field.
func (o *InvestorFee) SetAmountFrom(v float64) {
	o.AmountFrom.Set(&v)
}
// SetAmountFromNil sets the value for AmountFrom to be an explicit nil
func (o *InvestorFee) SetAmountFromNil() {
	o.AmountFrom.Set(nil)
}

// UnsetAmountFrom ensures that no value is present for AmountFrom, not even an explicit nil
func (o *InvestorFee) UnsetAmountFrom() {
	o.AmountFrom.Unset()
}

// GetAmountTo returns the AmountTo field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *InvestorFee) GetAmountTo() float64 {
	if o == nil || o.AmountTo.Get() == nil {
		var ret float64
		return ret
	}
	return *o.AmountTo.Get()
}

// GetAmountToOk returns a tuple with the AmountTo field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *InvestorFee) GetAmountToOk() (*float64, bool) {
	if o == nil  {
		return nil, false
	}
	return o.AmountTo.Get(), o.AmountTo.IsSet()
}

// HasAmountTo returns a boolean if a field has been set.
func (o *InvestorFee) HasAmountTo() bool {
	if o != nil && o.AmountTo.IsSet() {
		return true
	}

	return false
}

// SetAmountTo gets a reference to the given NullableFloat64 and assigns it to the AmountTo field.
func (o *InvestorFee) SetAmountTo(v float64) {
	o.AmountTo.Set(&v)
}
// SetAmountToNil sets the value for AmountTo to be an explicit nil
func (o *InvestorFee) SetAmountToNil() {
	o.AmountTo.Set(nil)
}

// UnsetAmountTo ensures that no value is present for AmountTo, not even an explicit nil
func (o *InvestorFee) UnsetAmountTo() {
	o.AmountTo.Unset()
}

// GetUuid returns the Uuid field value
func (o *InvestorFee) GetUuid() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Uuid
}

// GetUuidOk returns a tuple with the Uuid field value
// and a boolean to check if the value has been set.
func (o *InvestorFee) GetUuidOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Uuid, true
}

// SetUuid sets field value
func (o *InvestorFee) SetUuid(v string) {
	o.Uuid = v
}

// GetCreated returns the Created field value
func (o *InvestorFee) GetCreated() time.Time {
	if o == nil {
		var ret time.Time
		return ret
	}

	return o.Created
}

// GetCreatedOk returns a tuple with the Created field value
// and a boolean to check if the value has been set.
func (o *InvestorFee) GetCreatedOk() (*time.Time, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Created, true
}

// SetCreated sets field value
func (o *InvestorFee) SetCreated(v time.Time) {
	o.Created = v
}

// GetUpdated returns the Updated field value
func (o *InvestorFee) GetUpdated() time.Time {
	if o == nil {
		var ret time.Time
		return ret
	}

	return o.Updated
}

// GetUpdatedOk returns a tuple with the Updated field value
// and a boolean to check if the value has been set.
func (o *InvestorFee) GetUpdatedOk() (*time.Time, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Updated, true
}

// SetUpdated sets field value
func (o *InvestorFee) SetUpdated(v time.Time) {
	o.Updated = v
}

func (o InvestorFee) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Value != nil {
		toSerialize["value"] = o.Value
	}
	if o.ValueUnit != nil {
		toSerialize["value_unit"] = o.ValueUnit
	}
	if true {
		toSerialize["fee_type"] = o.FeeType
	}
	if true {
		toSerialize["concept"] = o.Concept
	}
	if o.DateFrom.IsSet() {
		toSerialize["date_from"] = o.DateFrom.Get()
	}
	if o.DateTo.IsSet() {
		toSerialize["date_to"] = o.DateTo.Get()
	}
	if o.AmountFrom.IsSet() {
		toSerialize["amount_from"] = o.AmountFrom.Get()
	}
	if o.AmountTo.IsSet() {
		toSerialize["amount_to"] = o.AmountTo.Get()
	}
	if true {
		toSerialize["uuid"] = o.Uuid
	}
	if true {
		toSerialize["created"] = o.Created
	}
	if true {
		toSerialize["updated"] = o.Updated
	}
	return json.Marshal(toSerialize)
}

type NullableInvestorFee struct {
	value *InvestorFee
	isSet bool
}

func (v NullableInvestorFee) Get() *InvestorFee {
	return v.value
}

func (v *NullableInvestorFee) Set(val *InvestorFee) {
	v.value = val
	v.isSet = true
}

func (v NullableInvestorFee) IsSet() bool {
	return v.isSet
}

func (v *NullableInvestorFee) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInvestorFee(val *InvestorFee) *NullableInvestorFee {
	return &NullableInvestorFee{value: val, isSet: true}
}

func (v NullableInvestorFee) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInvestorFee) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


