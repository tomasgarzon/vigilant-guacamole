# BankAccountCreateUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** |  | [readonly] 
**AccountNumber** | Pointer to **NullableString** |  | [optional] 
**AccountSortCode** | Pointer to **NullableString** |  | [optional] 
**AccountHolderName** | Pointer to **NullableString** |  | [optional] 
**Joint** | Pointer to **bool** |  | [optional] 
**BankName** | Pointer to **NullableString** |  | [optional] 
**Iban** | Pointer to **NullableString** |  | [optional] 
**SwiftCode** | Pointer to **NullableString** |  | [optional] 

## Methods

### NewBankAccountCreateUpdate

`func NewBankAccountCreateUpdate(uuid string, ) *BankAccountCreateUpdate`

NewBankAccountCreateUpdate instantiates a new BankAccountCreateUpdate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBankAccountCreateUpdateWithDefaults

`func NewBankAccountCreateUpdateWithDefaults() *BankAccountCreateUpdate`

NewBankAccountCreateUpdateWithDefaults instantiates a new BankAccountCreateUpdate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *BankAccountCreateUpdate) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *BankAccountCreateUpdate) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *BankAccountCreateUpdate) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetAccountNumber

`func (o *BankAccountCreateUpdate) GetAccountNumber() string`

GetAccountNumber returns the AccountNumber field if non-nil, zero value otherwise.

### GetAccountNumberOk

`func (o *BankAccountCreateUpdate) GetAccountNumberOk() (*string, bool)`

GetAccountNumberOk returns a tuple with the AccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNumber

`func (o *BankAccountCreateUpdate) SetAccountNumber(v string)`

SetAccountNumber sets AccountNumber field to given value.

### HasAccountNumber

`func (o *BankAccountCreateUpdate) HasAccountNumber() bool`

HasAccountNumber returns a boolean if a field has been set.

### SetAccountNumberNil

`func (o *BankAccountCreateUpdate) SetAccountNumberNil(b bool)`

 SetAccountNumberNil sets the value for AccountNumber to be an explicit nil

### UnsetAccountNumber
`func (o *BankAccountCreateUpdate) UnsetAccountNumber()`

UnsetAccountNumber ensures that no value is present for AccountNumber, not even an explicit nil
### GetAccountSortCode

`func (o *BankAccountCreateUpdate) GetAccountSortCode() string`

GetAccountSortCode returns the AccountSortCode field if non-nil, zero value otherwise.

### GetAccountSortCodeOk

`func (o *BankAccountCreateUpdate) GetAccountSortCodeOk() (*string, bool)`

GetAccountSortCodeOk returns a tuple with the AccountSortCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountSortCode

`func (o *BankAccountCreateUpdate) SetAccountSortCode(v string)`

SetAccountSortCode sets AccountSortCode field to given value.

### HasAccountSortCode

`func (o *BankAccountCreateUpdate) HasAccountSortCode() bool`

HasAccountSortCode returns a boolean if a field has been set.

### SetAccountSortCodeNil

`func (o *BankAccountCreateUpdate) SetAccountSortCodeNil(b bool)`

 SetAccountSortCodeNil sets the value for AccountSortCode to be an explicit nil

### UnsetAccountSortCode
`func (o *BankAccountCreateUpdate) UnsetAccountSortCode()`

UnsetAccountSortCode ensures that no value is present for AccountSortCode, not even an explicit nil
### GetAccountHolderName

`func (o *BankAccountCreateUpdate) GetAccountHolderName() string`

GetAccountHolderName returns the AccountHolderName field if non-nil, zero value otherwise.

### GetAccountHolderNameOk

`func (o *BankAccountCreateUpdate) GetAccountHolderNameOk() (*string, bool)`

GetAccountHolderNameOk returns a tuple with the AccountHolderName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountHolderName

`func (o *BankAccountCreateUpdate) SetAccountHolderName(v string)`

SetAccountHolderName sets AccountHolderName field to given value.

### HasAccountHolderName

`func (o *BankAccountCreateUpdate) HasAccountHolderName() bool`

HasAccountHolderName returns a boolean if a field has been set.

### SetAccountHolderNameNil

`func (o *BankAccountCreateUpdate) SetAccountHolderNameNil(b bool)`

 SetAccountHolderNameNil sets the value for AccountHolderName to be an explicit nil

### UnsetAccountHolderName
`func (o *BankAccountCreateUpdate) UnsetAccountHolderName()`

UnsetAccountHolderName ensures that no value is present for AccountHolderName, not even an explicit nil
### GetJoint

`func (o *BankAccountCreateUpdate) GetJoint() bool`

GetJoint returns the Joint field if non-nil, zero value otherwise.

### GetJointOk

`func (o *BankAccountCreateUpdate) GetJointOk() (*bool, bool)`

GetJointOk returns a tuple with the Joint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJoint

`func (o *BankAccountCreateUpdate) SetJoint(v bool)`

SetJoint sets Joint field to given value.

### HasJoint

`func (o *BankAccountCreateUpdate) HasJoint() bool`

HasJoint returns a boolean if a field has been set.

### GetBankName

`func (o *BankAccountCreateUpdate) GetBankName() string`

GetBankName returns the BankName field if non-nil, zero value otherwise.

### GetBankNameOk

`func (o *BankAccountCreateUpdate) GetBankNameOk() (*string, bool)`

GetBankNameOk returns a tuple with the BankName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankName

`func (o *BankAccountCreateUpdate) SetBankName(v string)`

SetBankName sets BankName field to given value.

### HasBankName

`func (o *BankAccountCreateUpdate) HasBankName() bool`

HasBankName returns a boolean if a field has been set.

### SetBankNameNil

`func (o *BankAccountCreateUpdate) SetBankNameNil(b bool)`

 SetBankNameNil sets the value for BankName to be an explicit nil

### UnsetBankName
`func (o *BankAccountCreateUpdate) UnsetBankName()`

UnsetBankName ensures that no value is present for BankName, not even an explicit nil
### GetIban

`func (o *BankAccountCreateUpdate) GetIban() string`

GetIban returns the Iban field if non-nil, zero value otherwise.

### GetIbanOk

`func (o *BankAccountCreateUpdate) GetIbanOk() (*string, bool)`

GetIbanOk returns a tuple with the Iban field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIban

`func (o *BankAccountCreateUpdate) SetIban(v string)`

SetIban sets Iban field to given value.

### HasIban

`func (o *BankAccountCreateUpdate) HasIban() bool`

HasIban returns a boolean if a field has been set.

### SetIbanNil

`func (o *BankAccountCreateUpdate) SetIbanNil(b bool)`

 SetIbanNil sets the value for Iban to be an explicit nil

### UnsetIban
`func (o *BankAccountCreateUpdate) UnsetIban()`

UnsetIban ensures that no value is present for Iban, not even an explicit nil
### GetSwiftCode

`func (o *BankAccountCreateUpdate) GetSwiftCode() string`

GetSwiftCode returns the SwiftCode field if non-nil, zero value otherwise.

### GetSwiftCodeOk

`func (o *BankAccountCreateUpdate) GetSwiftCodeOk() (*string, bool)`

GetSwiftCodeOk returns a tuple with the SwiftCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSwiftCode

`func (o *BankAccountCreateUpdate) SetSwiftCode(v string)`

SetSwiftCode sets SwiftCode field to given value.

### HasSwiftCode

`func (o *BankAccountCreateUpdate) HasSwiftCode() bool`

HasSwiftCode returns a boolean if a field has been set.

### SetSwiftCodeNil

`func (o *BankAccountCreateUpdate) SetSwiftCodeNil(b bool)`

 SetSwiftCodeNil sets the value for SwiftCode to be an explicit nil

### UnsetSwiftCode
`func (o *BankAccountCreateUpdate) UnsetSwiftCode()`

UnsetSwiftCode ensures that no value is present for SwiftCode, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


