# ApplicationAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientAddressCreate**](ApplicationAPI.md#clientaddresscreate) | **POST** /api/v2/clients/{client_uuid}/addresses/ | 
[**clientAddressDelete**](ApplicationAPI.md#clientaddressdelete) | **DELETE** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
[**clientAddressPartialUpdate**](ApplicationAPI.md#clientaddresspartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
[**clientAddressRetrieve**](ApplicationAPI.md#clientaddressretrieve) | **GET** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
[**clientAddressUpdate**](ApplicationAPI.md#clientaddressupdate) | **PUT** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
[**clientAddressesList**](ApplicationAPI.md#clientaddresseslist) | **GET** /api/v2/clients/{client_uuid}/addresses/ | 
[**clientBankAccountCreate**](ApplicationAPI.md#clientbankaccountcreate) | **POST** /api/v2/clients/{client_uuid}/bank-accounts/ | 
[**clientBankAccountDelete**](ApplicationAPI.md#clientbankaccountdelete) | **DELETE** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
[**clientBankAccountPartialUpdate**](ApplicationAPI.md#clientbankaccountpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
[**clientBankAccountRetrieve**](ApplicationAPI.md#clientbankaccountretrieve) | **GET** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
[**clientBankAccountUpdate**](ApplicationAPI.md#clientbankaccountupdate) | **PUT** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
[**clientBankAccountsList**](ApplicationAPI.md#clientbankaccountslist) | **GET** /api/v2/clients/{client_uuid}/bank-accounts/ | 
[**clientCompleteOnboarding**](ApplicationAPI.md#clientcompleteonboarding) | **POST** /api/v2/clients/{client_uuid}/onboarding/complete/ | 
[**clientCreate**](ApplicationAPI.md#clientcreate) | **POST** /api/v2/clients/ | 
[**clientList**](ApplicationAPI.md#clientlist) | **GET** /api/v2/clients/ | 
[**clientNationalityCreate**](ApplicationAPI.md#clientnationalitycreate) | **POST** /api/v2/clients/{client_uuid}/nationalities/ | 
[**clientNationlitiesList**](ApplicationAPI.md#clientnationlitieslist) | **GET** /api/v2/clients/{client_uuid}/nationalities/ | 
[**clientNationlityDelete**](ApplicationAPI.md#clientnationlitydelete) | **DELETE** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 
[**clientNationlityPartialUpdate**](ApplicationAPI.md#clientnationlitypartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 
[**clientNationlityRetrieve**](ApplicationAPI.md#clientnationlityretrieve) | **GET** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 
[**clientNationlityUpdate**](ApplicationAPI.md#clientnationlityupdate) | **PUT** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 
[**clientPartialUpdate**](ApplicationAPI.md#clientpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/ | 
[**clientRetrieve**](ApplicationAPI.md#clientretrieve) | **GET** /api/v2/clients/{client_uuid}/ | 
[**clientRiskAssessmentCreate**](ApplicationAPI.md#clientriskassessmentcreate) | **POST** /api/v2/clients/{client_uuid}/risk-assessments/ | 
[**clientRiskAssessmentDelete**](ApplicationAPI.md#clientriskassessmentdelete) | **DELETE** /api/v2/clients/{client_uuid}/risk-assessments/{assessment_uuid}/ | 
[**clientRiskAssessmentList**](ApplicationAPI.md#clientriskassessmentlist) | **GET** /api/v2/clients/{client_uuid}/risk-assessments/ | 
[**clientRiskAssessmentPartialUpdate**](ApplicationAPI.md#clientriskassessmentpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/risk-assessments/{assessment_uuid}/ | 
[**clientRiskAssessmentRetrieve**](ApplicationAPI.md#clientriskassessmentretrieve) | **GET** /api/v2/clients/{client_uuid}/risk-assessments/{assessment_uuid}/ | 
[**clientTWRRPerformance**](ApplicationAPI.md#clienttwrrperformance) | **GET** /api/v2/clients/{client_uuid}/performance/twrr/ | 
[**clientTaxInformationCreate**](ApplicationAPI.md#clienttaxinformationcreate) | **POST** /api/v2/clients/{client_uuid}/tax-informations/ | 
[**clientTaxInformationDelete**](ApplicationAPI.md#clienttaxinformationdelete) | **DELETE** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 
[**clientTaxInformationList**](ApplicationAPI.md#clienttaxinformationlist) | **GET** /api/v2/clients/{client_uuid}/tax-informations/ | 
[**clientTaxInformationPartialUpdate**](ApplicationAPI.md#clienttaxinformationpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 
[**clientTaxInformationRetrieve**](ApplicationAPI.md#clienttaxinformationretrieve) | **GET** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 
[**clientTaxInformationUpdate**](ApplicationAPI.md#clienttaxinformationupdate) | **PUT** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 
[**clientUpdate**](ApplicationAPI.md#clientupdate) | **PUT** /api/v2/clients/{client_uuid}/ | 
[**clientVerificationCreate**](ApplicationAPI.md#clientverificationcreate) | **POST** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
[**clientVerificationDocumentCreate**](ApplicationAPI.md#clientverificationdocumentcreate) | **POST** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
[**clientVerificationDocumentDelete**](ApplicationAPI.md#clientverificationdocumentdelete) | **DELETE** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{verification_document_uuid}/ | 
[**clientVerificationDocumentList**](ApplicationAPI.md#clientverificationdocumentlist) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
[**clientVerificationDocumentPartialUpdate**](ApplicationAPI.md#clientverificationdocumentpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{verification_document_uuid}/ | 
[**clientVerificationDocumentRetrieve**](ApplicationAPI.md#clientverificationdocumentretrieve) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{verification_document_uuid}/ | 
[**clientVerificationDocumentUpdate**](ApplicationAPI.md#clientverificationdocumentupdate) | **PUT** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{verification_document_uuid}/ | 
[**clientVerificationList**](ApplicationAPI.md#clientverificationlist) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
[**clientVerificationRetrieve**](ApplicationAPI.md#clientverificationretrieve) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/{verification_uuid}/ | 


# **clientAddressCreate**
```swift
    open class func clientAddressCreate(clientUuid: UUID, addressCreate: AddressCreate, completion: @escaping (_ data: AddressCreate?, _ error: Error?) -> Void)
```



Create an address for a client

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let addressCreate = AddressCreate(uuid: 123, line1: "line1_example", line2: "line2_example", postcode: "postcode_example", locality: "locality_example", country: "country_example", region: "region_example") // AddressCreate | 

ApplicationAPI.clientAddressCreate(clientUuid: clientUuid, addressCreate: addressCreate) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 
 **addressCreate** | [**AddressCreate**](AddressCreate.md) |  | 

### Return type

[**AddressCreate**](AddressCreate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientAddressDelete**
```swift
    open class func clientAddressDelete(addressUuid: UUID, clientUuid: UUID, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```



Delete a client address

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let addressUuid = 987 // UUID | 
let clientUuid = 987 // UUID | 

ApplicationAPI.clientAddressDelete(addressUuid: addressUuid, clientUuid: clientUuid) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressUuid** | [**UUID**](.md) |  | 
 **clientUuid** | [**UUID**](.md) |  | 

### Return type

Void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientAddressPartialUpdate**
```swift
    open class func clientAddressPartialUpdate(addressUuid: UUID, clientUuid: UUID, patchedAddressUpdate: PatchedAddressUpdate? = nil, completion: @escaping (_ data: AddressUpdate?, _ error: Error?) -> Void)
```



Partial Update a client address

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let addressUuid = 987 // UUID | 
let clientUuid = 987 // UUID | 
let patchedAddressUpdate = PatchedAddressUpdate(uuid: 123, line1: "line1_example", line2: "line2_example", postcode: "postcode_example", locality: "locality_example", country: "country_example", region: "region_example") // PatchedAddressUpdate |  (optional)

ApplicationAPI.clientAddressPartialUpdate(addressUuid: addressUuid, clientUuid: clientUuid, patchedAddressUpdate: patchedAddressUpdate) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressUuid** | [**UUID**](.md) |  | 
 **clientUuid** | [**UUID**](.md) |  | 
 **patchedAddressUpdate** | [**PatchedAddressUpdate**](PatchedAddressUpdate.md) |  | [optional] 

### Return type

[**AddressUpdate**](AddressUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientAddressRetrieve**
```swift
    open class func clientAddressRetrieve(addressUuid: UUID, clientUuid: UUID, completion: @escaping (_ data: AddressList?, _ error: Error?) -> Void)
```



Retrieve a client address

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let addressUuid = 987 // UUID | 
let clientUuid = 987 // UUID | 

ApplicationAPI.clientAddressRetrieve(addressUuid: addressUuid, clientUuid: clientUuid) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressUuid** | [**UUID**](.md) |  | 
 **clientUuid** | [**UUID**](.md) |  | 

### Return type

[**AddressList**](AddressList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientAddressUpdate**
```swift
    open class func clientAddressUpdate(addressUuid: UUID, clientUuid: UUID, addressUpdate: AddressUpdate, completion: @escaping (_ data: AddressUpdate?, _ error: Error?) -> Void)
```



Update a client address

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let addressUuid = 987 // UUID | 
let clientUuid = 987 // UUID | 
let addressUpdate = AddressUpdate(uuid: 123, line1: "line1_example", line2: "line2_example", postcode: "postcode_example", locality: "locality_example", country: "country_example", region: "region_example") // AddressUpdate | 

ApplicationAPI.clientAddressUpdate(addressUuid: addressUuid, clientUuid: clientUuid, addressUpdate: addressUpdate) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressUuid** | [**UUID**](.md) |  | 
 **clientUuid** | [**UUID**](.md) |  | 
 **addressUpdate** | [**AddressUpdate**](AddressUpdate.md) |  | 

### Return type

[**AddressUpdate**](AddressUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientAddressesList**
```swift
    open class func clientAddressesList(clientUuid: UUID, limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedAddressListList?, _ error: Error?) -> Void)
```



List address for a client

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApplicationAPI.clientAddressesList(clientUuid: clientUuid, limit: limit, offset: offset) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedAddressListList**](PaginatedAddressListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientBankAccountCreate**
```swift
    open class func clientBankAccountCreate(clientUuid: UUID, bankAccountCreateUpdate: BankAccountCreateUpdate? = nil, completion: @escaping (_ data: BankAccountCreateUpdate?, _ error: Error?) -> Void)
```



Create a bank account for a client

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let bankAccountCreateUpdate = BankAccountCreateUpdate(uuid: 123, accountNumber: "accountNumber_example", accountSortCode: "accountSortCode_example", accountHolderName: "accountHolderName_example", joint: false, bankName: "bankName_example", iban: "iban_example", swiftCode: "swiftCode_example") // BankAccountCreateUpdate |  (optional)

ApplicationAPI.clientBankAccountCreate(clientUuid: clientUuid, bankAccountCreateUpdate: bankAccountCreateUpdate) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 
 **bankAccountCreateUpdate** | [**BankAccountCreateUpdate**](BankAccountCreateUpdate.md) |  | [optional] 

### Return type

[**BankAccountCreateUpdate**](BankAccountCreateUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientBankAccountDelete**
```swift
    open class func clientBankAccountDelete(bankAccountUuid: UUID, clientUuid: UUID, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```



Delete a client bank account

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let bankAccountUuid = 987 // UUID | 
let clientUuid = 987 // UUID | 

ApplicationAPI.clientBankAccountDelete(bankAccountUuid: bankAccountUuid, clientUuid: clientUuid) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bankAccountUuid** | [**UUID**](.md) |  | 
 **clientUuid** | [**UUID**](.md) |  | 

### Return type

Void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientBankAccountPartialUpdate**
```swift
    open class func clientBankAccountPartialUpdate(bankAccountUuid: UUID, clientUuid: UUID, patchedBankAccountCreateUpdate: PatchedBankAccountCreateUpdate? = nil, completion: @escaping (_ data: BankAccountCreateUpdate?, _ error: Error?) -> Void)
```



Partial Update a client bank account

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let bankAccountUuid = 987 // UUID | 
let clientUuid = 987 // UUID | 
let patchedBankAccountCreateUpdate = PatchedBankAccountCreateUpdate(uuid: 123, accountNumber: "accountNumber_example", accountSortCode: "accountSortCode_example", accountHolderName: "accountHolderName_example", joint: false, bankName: "bankName_example", iban: "iban_example", swiftCode: "swiftCode_example") // PatchedBankAccountCreateUpdate |  (optional)

ApplicationAPI.clientBankAccountPartialUpdate(bankAccountUuid: bankAccountUuid, clientUuid: clientUuid, patchedBankAccountCreateUpdate: patchedBankAccountCreateUpdate) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bankAccountUuid** | [**UUID**](.md) |  | 
 **clientUuid** | [**UUID**](.md) |  | 
 **patchedBankAccountCreateUpdate** | [**PatchedBankAccountCreateUpdate**](PatchedBankAccountCreateUpdate.md) |  | [optional] 

### Return type

[**BankAccountCreateUpdate**](BankAccountCreateUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientBankAccountRetrieve**
```swift
    open class func clientBankAccountRetrieve(bankAccountUuid: UUID, clientUuid: UUID, completion: @escaping (_ data: BankAccountList?, _ error: Error?) -> Void)
```



Retrieve a client bank account

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let bankAccountUuid = 987 // UUID | 
let clientUuid = 987 // UUID | 

ApplicationAPI.clientBankAccountRetrieve(bankAccountUuid: bankAccountUuid, clientUuid: clientUuid) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bankAccountUuid** | [**UUID**](.md) |  | 
 **clientUuid** | [**UUID**](.md) |  | 

### Return type

[**BankAccountList**](BankAccountList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientBankAccountUpdate**
```swift
    open class func clientBankAccountUpdate(bankAccountUuid: UUID, clientUuid: UUID, bankAccountCreateUpdate: BankAccountCreateUpdate? = nil, completion: @escaping (_ data: BankAccountCreateUpdate?, _ error: Error?) -> Void)
```



Update a client bank account

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let bankAccountUuid = 987 // UUID | 
let clientUuid = 987 // UUID | 
let bankAccountCreateUpdate = BankAccountCreateUpdate(uuid: 123, accountNumber: "accountNumber_example", accountSortCode: "accountSortCode_example", accountHolderName: "accountHolderName_example", joint: false, bankName: "bankName_example", iban: "iban_example", swiftCode: "swiftCode_example") // BankAccountCreateUpdate |  (optional)

ApplicationAPI.clientBankAccountUpdate(bankAccountUuid: bankAccountUuid, clientUuid: clientUuid, bankAccountCreateUpdate: bankAccountCreateUpdate) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bankAccountUuid** | [**UUID**](.md) |  | 
 **clientUuid** | [**UUID**](.md) |  | 
 **bankAccountCreateUpdate** | [**BankAccountCreateUpdate**](BankAccountCreateUpdate.md) |  | [optional] 

### Return type

[**BankAccountCreateUpdate**](BankAccountCreateUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientBankAccountsList**
```swift
    open class func clientBankAccountsList(clientUuid: UUID, limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedBankAccountListList?, _ error: Error?) -> Void)
```



List Bank Account for a client

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApplicationAPI.clientBankAccountsList(clientUuid: clientUuid, limit: limit, offset: offset) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedBankAccountListList**](PaginatedBankAccountListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientCompleteOnboarding**
```swift
    open class func clientCompleteOnboarding(clientUuid: UUID, clientDetail: ClientDetail, completion: @escaping (_ data: ClientDetail?, _ error: Error?) -> Void)
```



Complete onboarding for a client

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let clientDetail = ClientDetail(email: "email_example", birthdate: Date(), tosConsent: false, marketingConsent: false, dataConsent: false, tosConsentDate: Date(), taxInformation: ["taxInformation_example"], countryBirth: CountryField(id: 123, code: "code_example", iso3: "iso3_example", name: "name_example", nameEnGb: "nameEnGb_example", nameEnCh: "nameEnCh_example", nameFrCh: "nameFrCh_example", longName: "longName_example", longNameEnGb: "longNameEnGb_example", longNameEnCh: "longNameEnCh_example", longNameFrCh: "longNameFrCh_example", eeaCountry: false), lastLogin: Date(), referredBy: "referredBy_example", successfulReferrals: 123, kycVerified: false, isVerified: false, feeSegments: ["feeSegments_example"], extraData: "TODO", portfolios: ["portfolios_example"], onboardedBy: "onboardedBy_example", riskLevel: 123, onboardingToken: "onboardingToken_example", uuid: 123, created: Date(), updated: Date(), comments: "comments_example", status: StatusB65Enum(), emailVerified: false, emailVerifyLastRequest: Date(), title: TitleEnum(), firstName: "firstName_example", middleName: "middleName_example", lastName: "lastName_example", gender: GenderEnum(), maritalStatus: MaritalStatusEnum(), phoneNumber: "phoneNumber_example", phoneNumberVerified: Date(), language: "language_example", employmentStatus: EmploymentStatusEnum(), profession: "profession_example", referralCode: "referralCode_example", activated: Date(), utmSource: "utmSource_example", utmMedium: "utmMedium_example", utmCampaign: "utmCampaign_example", utmTerm: "utmTerm_example", utmContent: "utmContent_example", marketingConsentDate: Date(), dataConsentDate: Date()) // ClientDetail | 

ApplicationAPI.clientCompleteOnboarding(clientUuid: clientUuid, clientDetail: clientDetail) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 
 **clientDetail** | [**ClientDetail**](ClientDetail.md) |  | 

### Return type

[**ClientDetail**](ClientDetail.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientCreate**
```swift
    open class func clientCreate(clientCreate: ClientCreate, completion: @escaping (_ data: ClientCreate?, _ error: Error?) -> Void)
```



Create a client

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientCreate = ClientCreate(email: "email_example", birthdate: Date(), title: TitleEnum(), firstName: "firstName_example", lastName: "lastName_example", middleName: "middleName_example", gender: GenderEnum(), maritalStatus: MaritalStatusEnum(), language: "language_example", employmentStatus: EmploymentStatusEnum(), activated: Date(), profile: "TODO", password: "password_example", referralCode: "referralCode_example", utmSource: "utmSource_example", utmMedium: "utmMedium_example", utmCampaign: "utmCampaign_example", utmTerm: "utmTerm_example", utmContent: "utmContent_example", tosConsent: false, dataConsent: false, marketingConsent: false, extraData: "TODO", phoneNumber: "phoneNumber_example") // ClientCreate | 

ApplicationAPI.clientCreate(clientCreate: clientCreate) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientCreate** | [**ClientCreate**](ClientCreate.md) |  | 

### Return type

[**ClientCreate**](ClientCreate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientList**
```swift
    open class func clientList(externalCustodianId: String? = nil, extraData: [String: AnyCodable]? = nil, limit: Int? = nil, offset: Int? = nil, ordering: [String]? = nil, search: String? = nil, status: Status_clientList? = nil, completion: @escaping (_ data: PaginatedClientDetailList?, _ error: Error?) -> Void)
```



List client for a Relationship manager

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let externalCustodianId = "externalCustodianId_example" // String |  (optional)
let extraData = "TODO" // [String: AnyCodable] | Additional client attributes for the specific portal (optional)
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)
let ordering = ["ordering_example"] // [String] | Ordering (optional)
let search = "search_example" // String | A search term. (optional)
let status = "status_example" // String |  (optional)

ApplicationAPI.clientList(externalCustodianId: externalCustodianId, extraData: extraData, limit: limit, offset: offset, ordering: ordering, search: search, status: status) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalCustodianId** | **String** |  | [optional] 
 **extraData** | [**[String: AnyCodable]**](AnyCodable.md) | Additional client attributes for the specific portal | [optional] 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 
 **ordering** | [**[String]**](String.md) | Ordering | [optional] 
 **search** | **String** | A search term. | [optional] 
 **status** | **String** |  | [optional] 

### Return type

[**PaginatedClientDetailList**](PaginatedClientDetailList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientNationalityCreate**
```swift
    open class func clientNationalityCreate(clientUuid: UUID, nationalityCreate: NationalityCreate, completion: @escaping (_ data: NationalityCreate?, _ error: Error?) -> Void)
```



Create nationality for a client

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let nationalityCreate = NationalityCreate(country: "country_example", documentNumber: "documentNumber_example", documentType: "documentType_example") // NationalityCreate | 

ApplicationAPI.clientNationalityCreate(clientUuid: clientUuid, nationalityCreate: nationalityCreate) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 
 **nationalityCreate** | [**NationalityCreate**](NationalityCreate.md) |  | 

### Return type

[**NationalityCreate**](NationalityCreate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientNationlitiesList**
```swift
    open class func clientNationlitiesList(clientUuid: UUID, limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedNationalityListList?, _ error: Error?) -> Void)
```



List nationlities for a client

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApplicationAPI.clientNationlitiesList(clientUuid: clientUuid, limit: limit, offset: offset) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedNationalityListList**](PaginatedNationalityListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientNationlityDelete**
```swift
    open class func clientNationlityDelete(clientUuid: UUID, nationalityUuid: UUID, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```



Delete a client nationality

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let nationalityUuid = 987 // UUID | 

ApplicationAPI.clientNationlityDelete(clientUuid: clientUuid, nationalityUuid: nationalityUuid) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 
 **nationalityUuid** | [**UUID**](.md) |  | 

### Return type

Void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientNationlityPartialUpdate**
```swift
    open class func clientNationlityPartialUpdate(clientUuid: UUID, nationalityUuid: UUID, patchedNationalityUpdate: PatchedNationalityUpdate? = nil, completion: @escaping (_ data: NationalityUpdate?, _ error: Error?) -> Void)
```



Partial Update a client nationality

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let nationalityUuid = 987 // UUID | 
let patchedNationalityUpdate = PatchedNationalityUpdate(country: "country_example", documentNumber: "documentNumber_example", documentType: "documentType_example") // PatchedNationalityUpdate |  (optional)

ApplicationAPI.clientNationlityPartialUpdate(clientUuid: clientUuid, nationalityUuid: nationalityUuid, patchedNationalityUpdate: patchedNationalityUpdate) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 
 **nationalityUuid** | [**UUID**](.md) |  | 
 **patchedNationalityUpdate** | [**PatchedNationalityUpdate**](PatchedNationalityUpdate.md) |  | [optional] 

### Return type

[**NationalityUpdate**](NationalityUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientNationlityRetrieve**
```swift
    open class func clientNationlityRetrieve(clientUuid: UUID, nationalityUuid: UUID, completion: @escaping (_ data: NationalityList?, _ error: Error?) -> Void)
```



Retrieve a client nationality

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let nationalityUuid = 987 // UUID | 

ApplicationAPI.clientNationlityRetrieve(clientUuid: clientUuid, nationalityUuid: nationalityUuid) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 
 **nationalityUuid** | [**UUID**](.md) |  | 

### Return type

[**NationalityList**](NationalityList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientNationlityUpdate**
```swift
    open class func clientNationlityUpdate(clientUuid: UUID, nationalityUuid: UUID, nationalityUpdate: NationalityUpdate, completion: @escaping (_ data: NationalityUpdate?, _ error: Error?) -> Void)
```



Update a client nationality

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let nationalityUuid = 987 // UUID | 
let nationalityUpdate = NationalityUpdate(country: "country_example", documentNumber: "documentNumber_example", documentType: "documentType_example") // NationalityUpdate | 

ApplicationAPI.clientNationlityUpdate(clientUuid: clientUuid, nationalityUuid: nationalityUuid, nationalityUpdate: nationalityUpdate) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 
 **nationalityUuid** | [**UUID**](.md) |  | 
 **nationalityUpdate** | [**NationalityUpdate**](NationalityUpdate.md) |  | 

### Return type

[**NationalityUpdate**](NationalityUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientPartialUpdate**
```swift
    open class func clientPartialUpdate(clientUuid: UUID, patchedApplicationClientUpdate: PatchedApplicationClientUpdate? = nil, completion: @escaping (_ data: ApplicationClientUpdate?, _ error: Error?) -> Void)
```



Partial Update a client

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let patchedApplicationClientUpdate = PatchedApplicationClientUpdate(email: "email_example", birthdate: Date(), tosConsent: false, marketingConsent: false, dataConsent: false, tosConsentDate: Date(), taxInformation: ["taxInformation_example"], countryBirth: CountryField(id: 123, code: "code_example", iso3: "iso3_example", name: "name_example", nameEnGb: "nameEnGb_example", nameEnCh: "nameEnCh_example", nameFrCh: "nameFrCh_example", longName: "longName_example", longNameEnGb: "longNameEnGb_example", longNameEnCh: "longNameEnCh_example", longNameFrCh: "longNameFrCh_example", eeaCountry: false), lastLogin: Date(), referredBy: "referredBy_example", successfulReferrals: 123, kycVerified: false, isVerified: false, feeSegments: ["feeSegments_example"], extraData: "TODO", portfolios: ["portfolios_example"], onboardedBy: "onboardedBy_example", riskLevel: 123, onboardingToken: "onboardingToken_example", password: "password_example", emailVerifiedLastRequest: Date(), uuid: 123, created: Date(), updated: Date(), comments: "comments_example", status: StatusB65Enum(), emailVerified: false, emailVerifyLastRequest: Date(), title: TitleEnum(), firstName: "firstName_example", middleName: "middleName_example", lastName: "lastName_example", gender: GenderEnum(), maritalStatus: MaritalStatusEnum(), phoneNumber: "phoneNumber_example", phoneNumberVerified: Date(), language: "language_example", employmentStatus: EmploymentStatusEnum(), profession: "profession_example", referralCode: "referralCode_example", activated: Date(), utmSource: "utmSource_example", utmMedium: "utmMedium_example", utmCampaign: "utmCampaign_example", utmTerm: "utmTerm_example", utmContent: "utmContent_example", marketingConsentDate: Date(), dataConsentDate: Date()) // PatchedApplicationClientUpdate |  (optional)

ApplicationAPI.clientPartialUpdate(clientUuid: clientUuid, patchedApplicationClientUpdate: patchedApplicationClientUpdate) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 
 **patchedApplicationClientUpdate** | [**PatchedApplicationClientUpdate**](PatchedApplicationClientUpdate.md) |  | [optional] 

### Return type

[**ApplicationClientUpdate**](ApplicationClientUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientRetrieve**
```swift
    open class func clientRetrieve(clientUuid: UUID, completion: @escaping (_ data: ClientDetail?, _ error: Error?) -> Void)
```



Retrieve a client

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 

ApplicationAPI.clientRetrieve(clientUuid: clientUuid) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 

### Return type

[**ClientDetail**](ClientDetail.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientRiskAssessmentCreate**
```swift
    open class func clientRiskAssessmentCreate(clientUuid: UUID, assessment: Assessment, completion: @escaping (_ data: Assessment?, _ error: Error?) -> Void)
```



Create a risk assessment for a client

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let assessment = Assessment(uuid: 123, completed: Date(), choices: [RiskChoiceQuestionCode(code: "code_example", order: 123, description: "description_example", created: Date(), questionCode: "questionCode_example")], status: AssessmentStatusEnum(), riskLevel: 123, created: Date()) // Assessment | 

ApplicationAPI.clientRiskAssessmentCreate(clientUuid: clientUuid, assessment: assessment) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 
 **assessment** | [**Assessment**](Assessment.md) |  | 

### Return type

[**Assessment**](Assessment.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientRiskAssessmentDelete**
```swift
    open class func clientRiskAssessmentDelete(assessmentUuid: UUID, clientUuid: UUID, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```



Delete a client risk assessment

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let assessmentUuid = 987 // UUID | 
let clientUuid = 987 // UUID | 

ApplicationAPI.clientRiskAssessmentDelete(assessmentUuid: assessmentUuid, clientUuid: clientUuid) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assessmentUuid** | [**UUID**](.md) |  | 
 **clientUuid** | [**UUID**](.md) |  | 

### Return type

Void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientRiskAssessmentList**
```swift
    open class func clientRiskAssessmentList(clientUuid: UUID, limit: Int? = nil, offset: Int? = nil, status: [String]? = nil, completion: @escaping (_ data: PaginatedAssessmentList?, _ error: Error?) -> Void)
```



List Risk Assessment for a client

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)
let status = ["status_example"] // [String] |  (optional)

ApplicationAPI.clientRiskAssessmentList(clientUuid: clientUuid, limit: limit, offset: offset, status: status) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 
 **status** | [**[String]**](String.md) |  | [optional] 

### Return type

[**PaginatedAssessmentList**](PaginatedAssessmentList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientRiskAssessmentPartialUpdate**
```swift
    open class func clientRiskAssessmentPartialUpdate(assessmentUuid: UUID, clientUuid: UUID, patchedAssessment: PatchedAssessment? = nil, completion: @escaping (_ data: Assessment?, _ error: Error?) -> Void)
```



Partial Update a client risk assessment

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let assessmentUuid = 987 // UUID | 
let clientUuid = 987 // UUID | 
let patchedAssessment = PatchedAssessment(uuid: 123, completed: Date(), choices: [RiskChoiceQuestionCode(code: "code_example", order: 123, description: "description_example", created: Date(), questionCode: "questionCode_example")], status: AssessmentStatusEnum(), riskLevel: 123, created: Date()) // PatchedAssessment |  (optional)

ApplicationAPI.clientRiskAssessmentPartialUpdate(assessmentUuid: assessmentUuid, clientUuid: clientUuid, patchedAssessment: patchedAssessment) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assessmentUuid** | [**UUID**](.md) |  | 
 **clientUuid** | [**UUID**](.md) |  | 
 **patchedAssessment** | [**PatchedAssessment**](PatchedAssessment.md) |  | [optional] 

### Return type

[**Assessment**](Assessment.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientRiskAssessmentRetrieve**
```swift
    open class func clientRiskAssessmentRetrieve(assessmentUuid: UUID, clientUuid: UUID, completion: @escaping (_ data: Assessment?, _ error: Error?) -> Void)
```



Retrieve a client risk assessment

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let assessmentUuid = 987 // UUID | 
let clientUuid = 987 // UUID | 

ApplicationAPI.clientRiskAssessmentRetrieve(assessmentUuid: assessmentUuid, clientUuid: clientUuid) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assessmentUuid** | [**UUID**](.md) |  | 
 **clientUuid** | [**UUID**](.md) |  | 

### Return type

[**Assessment**](Assessment.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientTWRRPerformance**
```swift
    open class func clientTWRRPerformance(clientUuid: UUID, completion: @escaping (_ data: ClientPerformance?, _ error: Error?) -> Void)
```



Calculate TWRR Performance for client

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 

ApplicationAPI.clientTWRRPerformance(clientUuid: clientUuid) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 

### Return type

[**ClientPerformance**](ClientPerformance.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientTaxInformationCreate**
```swift
    open class func clientTaxInformationCreate(clientUuid: UUID, taxInformationCreateUpdate: TaxInformationCreateUpdate, completion: @escaping (_ data: TaxInformationCreateUpdate?, _ error: Error?) -> Void)
```



Create a tax inforation for a client

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let taxInformationCreateUpdate = TaxInformationCreateUpdate(uuid: 123, country: "country_example", documentNumber: "documentNumber_example", documentType: "documentType_example") // TaxInformationCreateUpdate | 

ApplicationAPI.clientTaxInformationCreate(clientUuid: clientUuid, taxInformationCreateUpdate: taxInformationCreateUpdate) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 
 **taxInformationCreateUpdate** | [**TaxInformationCreateUpdate**](TaxInformationCreateUpdate.md) |  | 

### Return type

[**TaxInformationCreateUpdate**](TaxInformationCreateUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientTaxInformationDelete**
```swift
    open class func clientTaxInformationDelete(clientUuid: UUID, taxInformationUuid: UUID, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```



Delete a client tax inforation

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let taxInformationUuid = 987 // UUID | 

ApplicationAPI.clientTaxInformationDelete(clientUuid: clientUuid, taxInformationUuid: taxInformationUuid) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 
 **taxInformationUuid** | [**UUID**](.md) |  | 

### Return type

Void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientTaxInformationList**
```swift
    open class func clientTaxInformationList(clientUuid: UUID, limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedTaxInformationListList?, _ error: Error?) -> Void)
```



List tax information for a client

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApplicationAPI.clientTaxInformationList(clientUuid: clientUuid, limit: limit, offset: offset) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedTaxInformationListList**](PaginatedTaxInformationListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientTaxInformationPartialUpdate**
```swift
    open class func clientTaxInformationPartialUpdate(clientUuid: UUID, taxInformationUuid: UUID, patchedTaxInformationCreateUpdate: PatchedTaxInformationCreateUpdate? = nil, completion: @escaping (_ data: TaxInformationCreateUpdate?, _ error: Error?) -> Void)
```



Partial Update a client tax inforation

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let taxInformationUuid = 987 // UUID | 
let patchedTaxInformationCreateUpdate = PatchedTaxInformationCreateUpdate(uuid: 123, country: "country_example", documentNumber: "documentNumber_example", documentType: "documentType_example") // PatchedTaxInformationCreateUpdate |  (optional)

ApplicationAPI.clientTaxInformationPartialUpdate(clientUuid: clientUuid, taxInformationUuid: taxInformationUuid, patchedTaxInformationCreateUpdate: patchedTaxInformationCreateUpdate) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 
 **taxInformationUuid** | [**UUID**](.md) |  | 
 **patchedTaxInformationCreateUpdate** | [**PatchedTaxInformationCreateUpdate**](PatchedTaxInformationCreateUpdate.md) |  | [optional] 

### Return type

[**TaxInformationCreateUpdate**](TaxInformationCreateUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientTaxInformationRetrieve**
```swift
    open class func clientTaxInformationRetrieve(clientUuid: UUID, taxInformationUuid: UUID, completion: @escaping (_ data: TaxInformationList?, _ error: Error?) -> Void)
```



Retrieve a client tax inforation

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let taxInformationUuid = 987 // UUID | 

ApplicationAPI.clientTaxInformationRetrieve(clientUuid: clientUuid, taxInformationUuid: taxInformationUuid) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 
 **taxInformationUuid** | [**UUID**](.md) |  | 

### Return type

[**TaxInformationList**](TaxInformationList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientTaxInformationUpdate**
```swift
    open class func clientTaxInformationUpdate(clientUuid: UUID, taxInformationUuid: UUID, taxInformationCreateUpdate: TaxInformationCreateUpdate, completion: @escaping (_ data: TaxInformationCreateUpdate?, _ error: Error?) -> Void)
```



Update a client tax inforation

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let taxInformationUuid = 987 // UUID | 
let taxInformationCreateUpdate = TaxInformationCreateUpdate(uuid: 123, country: "country_example", documentNumber: "documentNumber_example", documentType: "documentType_example") // TaxInformationCreateUpdate | 

ApplicationAPI.clientTaxInformationUpdate(clientUuid: clientUuid, taxInformationUuid: taxInformationUuid, taxInformationCreateUpdate: taxInformationCreateUpdate) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 
 **taxInformationUuid** | [**UUID**](.md) |  | 
 **taxInformationCreateUpdate** | [**TaxInformationCreateUpdate**](TaxInformationCreateUpdate.md) |  | 

### Return type

[**TaxInformationCreateUpdate**](TaxInformationCreateUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientUpdate**
```swift
    open class func clientUpdate(clientUuid: UUID, applicationClientUpdate: ApplicationClientUpdate, completion: @escaping (_ data: ApplicationClientUpdate?, _ error: Error?) -> Void)
```



Update a client

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let applicationClientUpdate = ApplicationClientUpdate(email: "email_example", birthdate: Date(), tosConsent: false, marketingConsent: false, dataConsent: false, tosConsentDate: Date(), taxInformation: ["taxInformation_example"], countryBirth: CountryField(id: 123, code: "code_example", iso3: "iso3_example", name: "name_example", nameEnGb: "nameEnGb_example", nameEnCh: "nameEnCh_example", nameFrCh: "nameFrCh_example", longName: "longName_example", longNameEnGb: "longNameEnGb_example", longNameEnCh: "longNameEnCh_example", longNameFrCh: "longNameFrCh_example", eeaCountry: false), lastLogin: Date(), referredBy: "referredBy_example", successfulReferrals: 123, kycVerified: false, isVerified: false, feeSegments: ["feeSegments_example"], extraData: "TODO", portfolios: ["portfolios_example"], onboardedBy: "onboardedBy_example", riskLevel: 123, onboardingToken: "onboardingToken_example", password: "password_example", emailVerifiedLastRequest: Date(), uuid: 123, created: Date(), updated: Date(), comments: "comments_example", status: StatusB65Enum(), emailVerified: false, emailVerifyLastRequest: Date(), title: TitleEnum(), firstName: "firstName_example", middleName: "middleName_example", lastName: "lastName_example", gender: GenderEnum(), maritalStatus: MaritalStatusEnum(), phoneNumber: "phoneNumber_example", phoneNumberVerified: Date(), language: "language_example", employmentStatus: EmploymentStatusEnum(), profession: "profession_example", referralCode: "referralCode_example", activated: Date(), utmSource: "utmSource_example", utmMedium: "utmMedium_example", utmCampaign: "utmCampaign_example", utmTerm: "utmTerm_example", utmContent: "utmContent_example", marketingConsentDate: Date(), dataConsentDate: Date()) // ApplicationClientUpdate | 

ApplicationAPI.clientUpdate(clientUuid: clientUuid, applicationClientUpdate: applicationClientUpdate) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 
 **applicationClientUpdate** | [**ApplicationClientUpdate**](ApplicationClientUpdate.md) |  | 

### Return type

[**ApplicationClientUpdate**](ApplicationClientUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientVerificationCreate**
```swift
    open class func clientVerificationCreate(clientUuid: UUID, verifyTypeCode: String, verificationCreate: VerificationCreate, completion: @escaping (_ data: VerificationCreate?, _ error: Error?) -> Void)
```



Create a verification for a client

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let verifyTypeCode = "verifyTypeCode_example" // String | 
let verificationCreate = VerificationCreate(uuid: 123, verifyType: VerifyTypeEnum(), status: StatusBd7Enum(), result: ResultEnum(), created: Date(), updated: Date()) // VerificationCreate | 

ApplicationAPI.clientVerificationCreate(clientUuid: clientUuid, verifyTypeCode: verifyTypeCode, verificationCreate: verificationCreate) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 
 **verifyTypeCode** | **String** |  | 
 **verificationCreate** | [**VerificationCreate**](VerificationCreate.md) |  | 

### Return type

[**VerificationCreate**](VerificationCreate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientVerificationDocumentCreate**
```swift
    open class func clientVerificationDocumentCreate(clientUuid: UUID, verifyTypeCode: String, uuid: UUID, verifyType: VerifyTypeEnum, created: Date, updated: Date, verificationDocuments: [VerificationDocumentCreate], status: StatusBd7Enum? = nil, result: ResultEnum? = nil, completion: @escaping (_ data: VerificationWithType?, _ error: Error?) -> Void)
```



Create a verification Document for a client

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let verifyTypeCode = "verifyTypeCode_example" // String | 
let uuid = 987 // UUID | 
let verifyType = VerifyTypeEnum() // VerifyTypeEnum | 
let created = Date() // Date | 
let updated = Date() // Date | 
let verificationDocuments = ["TODO"] // [VerificationDocumentCreate] | 
let status = StatusBd7Enum() // StatusBd7Enum |  (optional)
let result = ResultEnum() // ResultEnum |  (optional)

ApplicationAPI.clientVerificationDocumentCreate(clientUuid: clientUuid, verifyTypeCode: verifyTypeCode, uuid: uuid, verifyType: verifyType, created: created, updated: updated, verificationDocuments: verificationDocuments, status: status, result: result) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 
 **verifyTypeCode** | **String** |  | 
 **uuid** | [**UUID**](UUID.md) |  | 
 **verifyType** | [**VerifyTypeEnum**](VerifyTypeEnum.md) |  | 
 **created** | **Date** |  | 
 **updated** | **Date** |  | 
 **verificationDocuments** | [**[VerificationDocumentCreate]**](VerificationDocumentCreate.md) |  | 
 **status** | [**StatusBd7Enum**](StatusBd7Enum.md) |  | [optional] 
 **result** | [**ResultEnum**](ResultEnum.md) |  | [optional] 

### Return type

[**VerificationWithType**](VerificationWithType.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientVerificationDocumentDelete**
```swift
    open class func clientVerificationDocumentDelete(clientUuid: UUID, verificationDocumentUuid: UUID, verifyTypeCode: String, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```



Delete a client verificatoin document

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let verificationDocumentUuid = 987 // UUID | 
let verifyTypeCode = "verifyTypeCode_example" // String | 

ApplicationAPI.clientVerificationDocumentDelete(clientUuid: clientUuid, verificationDocumentUuid: verificationDocumentUuid, verifyTypeCode: verifyTypeCode) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 
 **verificationDocumentUuid** | [**UUID**](.md) |  | 
 **verifyTypeCode** | **String** |  | 

### Return type

Void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientVerificationDocumentList**
```swift
    open class func clientVerificationDocumentList(clientUuid: UUID, verifyTypeCode: String, limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedVerificationDocumentList?, _ error: Error?) -> Void)
```



List Verification Document for a client

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let verifyTypeCode = "verifyTypeCode_example" // String | 
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApplicationAPI.clientVerificationDocumentList(clientUuid: clientUuid, verifyTypeCode: verifyTypeCode, limit: limit, offset: offset) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 
 **verifyTypeCode** | **String** |  | 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedVerificationDocumentList**](PaginatedVerificationDocumentList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientVerificationDocumentPartialUpdate**
```swift
    open class func clientVerificationDocumentPartialUpdate(clientUuid: UUID, verificationDocumentUuid: UUID, verifyTypeCode: String, uuid: UUID? = nil, documentType: DocumentTypeEnum? = nil, documentFront: String? = nil, documentBack: String? = nil, completion: @escaping (_ data: VerificationDocument?, _ error: Error?) -> Void)
```



Partial Update a client verification document

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let verificationDocumentUuid = 987 // UUID | 
let verifyTypeCode = "verifyTypeCode_example" // String | 
let uuid = 987 // UUID |  (optional)
let documentType = DocumentTypeEnum() // DocumentTypeEnum |  (optional)
let documentFront = "documentFront_example" // String |  (optional)
let documentBack = "documentBack_example" // String |  (optional)

ApplicationAPI.clientVerificationDocumentPartialUpdate(clientUuid: clientUuid, verificationDocumentUuid: verificationDocumentUuid, verifyTypeCode: verifyTypeCode, uuid: uuid, documentType: documentType, documentFront: documentFront, documentBack: documentBack) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 
 **verificationDocumentUuid** | [**UUID**](.md) |  | 
 **verifyTypeCode** | **String** |  | 
 **uuid** | [**UUID**](UUID.md) |  | [optional] 
 **documentType** | [**DocumentTypeEnum**](DocumentTypeEnum.md) |  | [optional] 
 **documentFront** | **String** |  | [optional] 
 **documentBack** | **String** |  | [optional] 

### Return type

[**VerificationDocument**](VerificationDocument.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientVerificationDocumentRetrieve**
```swift
    open class func clientVerificationDocumentRetrieve(clientUuid: UUID, verificationDocumentUuid: UUID, verifyTypeCode: String, completion: @escaping (_ data: VerificationDocument?, _ error: Error?) -> Void)
```



Retrieve a client verification document

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let verificationDocumentUuid = 987 // UUID | 
let verifyTypeCode = "verifyTypeCode_example" // String | 

ApplicationAPI.clientVerificationDocumentRetrieve(clientUuid: clientUuid, verificationDocumentUuid: verificationDocumentUuid, verifyTypeCode: verifyTypeCode) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 
 **verificationDocumentUuid** | [**UUID**](.md) |  | 
 **verifyTypeCode** | **String** |  | 

### Return type

[**VerificationDocument**](VerificationDocument.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientVerificationDocumentUpdate**
```swift
    open class func clientVerificationDocumentUpdate(clientUuid: UUID, verificationDocumentUuid: UUID, verifyTypeCode: String, uuid: UUID, documentType: DocumentTypeEnum, documentFront: String, documentBack: String, completion: @escaping (_ data: VerificationDocument?, _ error: Error?) -> Void)
```



Update a client verification document

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let verificationDocumentUuid = 987 // UUID | 
let verifyTypeCode = "verifyTypeCode_example" // String | 
let uuid = 987 // UUID | 
let documentType = DocumentTypeEnum() // DocumentTypeEnum | 
let documentFront = "documentFront_example" // String | 
let documentBack = "documentBack_example" // String | 

ApplicationAPI.clientVerificationDocumentUpdate(clientUuid: clientUuid, verificationDocumentUuid: verificationDocumentUuid, verifyTypeCode: verifyTypeCode, uuid: uuid, documentType: documentType, documentFront: documentFront, documentBack: documentBack) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 
 **verificationDocumentUuid** | [**UUID**](.md) |  | 
 **verifyTypeCode** | **String** |  | 
 **uuid** | [**UUID**](UUID.md) |  | 
 **documentType** | [**DocumentTypeEnum**](DocumentTypeEnum.md) |  | 
 **documentFront** | **String** |  | 
 **documentBack** | **String** |  | 

### Return type

[**VerificationDocument**](VerificationDocument.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientVerificationList**
```swift
    open class func clientVerificationList(clientUuid: UUID, verifyTypeCode: String, limit: Int? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedVerificationListList?, _ error: Error?) -> Void)
```



List Verification for a client

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let verifyTypeCode = "verifyTypeCode_example" // String | 
let limit = 987 // Int | Number of results to return per page. (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ApplicationAPI.clientVerificationList(clientUuid: clientUuid, verifyTypeCode: verifyTypeCode, limit: limit, offset: offset) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 
 **verifyTypeCode** | **String** |  | 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedVerificationListList**](PaginatedVerificationListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientVerificationRetrieve**
```swift
    open class func clientVerificationRetrieve(clientUuid: UUID, verificationUuid: UUID, verifyTypeCode: String, completion: @escaping (_ data: VerificationList?, _ error: Error?) -> Void)
```



Retrieve a client verification 

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let verificationUuid = 987 // UUID | 
let verifyTypeCode = "verifyTypeCode_example" // String | 

ApplicationAPI.clientVerificationRetrieve(clientUuid: clientUuid, verificationUuid: verificationUuid, verifyTypeCode: verifyTypeCode) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md) |  | 
 **verificationUuid** | [**UUID**](.md) |  | 
 **verifyTypeCode** | **String** |  | 

### Return type

[**VerificationList**](VerificationList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

