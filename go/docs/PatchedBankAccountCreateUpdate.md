# PatchedBankAccountCreateUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | Pointer to **string** |  | [optional] [readonly] 
**AccountNumber** | Pointer to **NullableString** |  | [optional] 
**AccountSortCode** | Pointer to **NullableString** |  | [optional] 
**AccountHolderName** | Pointer to **NullableString** |  | [optional] 
**Joint** | Pointer to **bool** |  | [optional] 
**BankName** | Pointer to **NullableString** |  | [optional] 
**Iban** | Pointer to **NullableString** |  | [optional] 
**SwiftCode** | Pointer to **NullableString** |  | [optional] 

## Methods

### NewPatchedBankAccountCreateUpdate

`func NewPatchedBankAccountCreateUpdate() *PatchedBankAccountCreateUpdate`

NewPatchedBankAccountCreateUpdate instantiates a new PatchedBankAccountCreateUpdate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedBankAccountCreateUpdateWithDefaults

`func NewPatchedBankAccountCreateUpdateWithDefaults() *PatchedBankAccountCreateUpdate`

NewPatchedBankAccountCreateUpdateWithDefaults instantiates a new PatchedBankAccountCreateUpdate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *PatchedBankAccountCreateUpdate) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *PatchedBankAccountCreateUpdate) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *PatchedBankAccountCreateUpdate) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *PatchedBankAccountCreateUpdate) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### GetAccountNumber

`func (o *PatchedBankAccountCreateUpdate) GetAccountNumber() string`

GetAccountNumber returns the AccountNumber field if non-nil, zero value otherwise.

### GetAccountNumberOk

`func (o *PatchedBankAccountCreateUpdate) GetAccountNumberOk() (*string, bool)`

GetAccountNumberOk returns a tuple with the AccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNumber

`func (o *PatchedBankAccountCreateUpdate) SetAccountNumber(v string)`

SetAccountNumber sets AccountNumber field to given value.

### HasAccountNumber

`func (o *PatchedBankAccountCreateUpdate) HasAccountNumber() bool`

HasAccountNumber returns a boolean if a field has been set.

### SetAccountNumberNil

`func (o *PatchedBankAccountCreateUpdate) SetAccountNumberNil(b bool)`

 SetAccountNumberNil sets the value for AccountNumber to be an explicit nil

### UnsetAccountNumber
`func (o *PatchedBankAccountCreateUpdate) UnsetAccountNumber()`

UnsetAccountNumber ensures that no value is present for AccountNumber, not even an explicit nil
### GetAccountSortCode

`func (o *PatchedBankAccountCreateUpdate) GetAccountSortCode() string`

GetAccountSortCode returns the AccountSortCode field if non-nil, zero value otherwise.

### GetAccountSortCodeOk

`func (o *PatchedBankAccountCreateUpdate) GetAccountSortCodeOk() (*string, bool)`

GetAccountSortCodeOk returns a tuple with the AccountSortCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountSortCode

`func (o *PatchedBankAccountCreateUpdate) SetAccountSortCode(v string)`

SetAccountSortCode sets AccountSortCode field to given value.

### HasAccountSortCode

`func (o *PatchedBankAccountCreateUpdate) HasAccountSortCode() bool`

HasAccountSortCode returns a boolean if a field has been set.

### SetAccountSortCodeNil

`func (o *PatchedBankAccountCreateUpdate) SetAccountSortCodeNil(b bool)`

 SetAccountSortCodeNil sets the value for AccountSortCode to be an explicit nil

### UnsetAccountSortCode
`func (o *PatchedBankAccountCreateUpdate) UnsetAccountSortCode()`

UnsetAccountSortCode ensures that no value is present for AccountSortCode, not even an explicit nil
### GetAccountHolderName

`func (o *PatchedBankAccountCreateUpdate) GetAccountHolderName() string`

GetAccountHolderName returns the AccountHolderName field if non-nil, zero value otherwise.

### GetAccountHolderNameOk

`func (o *PatchedBankAccountCreateUpdate) GetAccountHolderNameOk() (*string, bool)`

GetAccountHolderNameOk returns a tuple with the AccountHolderName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountHolderName

`func (o *PatchedBankAccountCreateUpdate) SetAccountHolderName(v string)`

SetAccountHolderName sets AccountHolderName field to given value.

### HasAccountHolderName

`func (o *PatchedBankAccountCreateUpdate) HasAccountHolderName() bool`

HasAccountHolderName returns a boolean if a field has been set.

### SetAccountHolderNameNil

`func (o *PatchedBankAccountCreateUpdate) SetAccountHolderNameNil(b bool)`

 SetAccountHolderNameNil sets the value for AccountHolderName to be an explicit nil

### UnsetAccountHolderName
`func (o *PatchedBankAccountCreateUpdate) UnsetAccountHolderName()`

UnsetAccountHolderName ensures that no value is present for AccountHolderName, not even an explicit nil
### GetJoint

`func (o *PatchedBankAccountCreateUpdate) GetJoint() bool`

GetJoint returns the Joint field if non-nil, zero value otherwise.

### GetJointOk

`func (o *PatchedBankAccountCreateUpdate) GetJointOk() (*bool, bool)`

GetJointOk returns a tuple with the Joint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJoint

`func (o *PatchedBankAccountCreateUpdate) SetJoint(v bool)`

SetJoint sets Joint field to given value.

### HasJoint

`func (o *PatchedBankAccountCreateUpdate) HasJoint() bool`

HasJoint returns a boolean if a field has been set.

### GetBankName

`func (o *PatchedBankAccountCreateUpdate) GetBankName() string`

GetBankName returns the BankName field if non-nil, zero value otherwise.

### GetBankNameOk

`func (o *PatchedBankAccountCreateUpdate) GetBankNameOk() (*string, bool)`

GetBankNameOk returns a tuple with the BankName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankName

`func (o *PatchedBankAccountCreateUpdate) SetBankName(v string)`

SetBankName sets BankName field to given value.

### HasBankName

`func (o *PatchedBankAccountCreateUpdate) HasBankName() bool`

HasBankName returns a boolean if a field has been set.

### SetBankNameNil

`func (o *PatchedBankAccountCreateUpdate) SetBankNameNil(b bool)`

 SetBankNameNil sets the value for BankName to be an explicit nil

### UnsetBankName
`func (o *PatchedBankAccountCreateUpdate) UnsetBankName()`

UnsetBankName ensures that no value is present for BankName, not even an explicit nil
### GetIban

`func (o *PatchedBankAccountCreateUpdate) GetIban() string`

GetIban returns the Iban field if non-nil, zero value otherwise.

### GetIbanOk

`func (o *PatchedBankAccountCreateUpdate) GetIbanOk() (*string, bool)`

GetIbanOk returns a tuple with the Iban field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIban

`func (o *PatchedBankAccountCreateUpdate) SetIban(v string)`

SetIban sets Iban field to given value.

### HasIban

`func (o *PatchedBankAccountCreateUpdate) HasIban() bool`

HasIban returns a boolean if a field has been set.

### SetIbanNil

`func (o *PatchedBankAccountCreateUpdate) SetIbanNil(b bool)`

 SetIbanNil sets the value for Iban to be an explicit nil

### UnsetIban
`func (o *PatchedBankAccountCreateUpdate) UnsetIban()`

UnsetIban ensures that no value is present for Iban, not even an explicit nil
### GetSwiftCode

`func (o *PatchedBankAccountCreateUpdate) GetSwiftCode() string`

GetSwiftCode returns the SwiftCode field if non-nil, zero value otherwise.

### GetSwiftCodeOk

`func (o *PatchedBankAccountCreateUpdate) GetSwiftCodeOk() (*string, bool)`

GetSwiftCodeOk returns a tuple with the SwiftCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSwiftCode

`func (o *PatchedBankAccountCreateUpdate) SetSwiftCode(v string)`

SetSwiftCode sets SwiftCode field to given value.

### HasSwiftCode

`func (o *PatchedBankAccountCreateUpdate) HasSwiftCode() bool`

HasSwiftCode returns a boolean if a field has been set.

### SetSwiftCodeNil

`func (o *PatchedBankAccountCreateUpdate) SetSwiftCodeNil(b bool)`

 SetSwiftCodeNil sets the value for SwiftCode to be an explicit nil

### UnsetSwiftCode
`func (o *PatchedBankAccountCreateUpdate) UnsetSwiftCode()`

UnsetSwiftCode ensures that no value is present for SwiftCode, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


