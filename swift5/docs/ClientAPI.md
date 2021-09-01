# ClientAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientAddressCreate**](ClientAPI.md#clientaddresscreate) | **POST** /api/v2/clients/{client_uuid}/addresses/ | 
[**clientAddressDelete**](ClientAPI.md#clientaddressdelete) | **DELETE** /api/v2/clients/{client_uuid}/addresses/{uuid}/ | 
[**clientAddressPartialUpdate**](ClientAPI.md#clientaddresspartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/addresses/{uuid}/ | 
[**clientAddressRetrieve**](ClientAPI.md#clientaddressretrieve) | **GET** /api/v2/clients/{client_uuid}/addresses/{uuid}/ | 
[**clientAddressUpdate**](ClientAPI.md#clientaddressupdate) | **PUT** /api/v2/clients/{client_uuid}/addresses/{uuid}/ | 
[**clientAddressesList**](ClientAPI.md#clientaddresseslist) | **GET** /api/v2/clients/{client_uuid}/addresses/ | 
[**clientBankAccountCreate**](ClientAPI.md#clientbankaccountcreate) | **POST** /api/v2/clients/{client_uuid}/bank-accounts/ | 
[**clientBankAccountDelete**](ClientAPI.md#clientbankaccountdelete) | **DELETE** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
[**clientBankAccountPartialUpdate**](ClientAPI.md#clientbankaccountpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
[**clientBankAccountRetrieve**](ClientAPI.md#clientbankaccountretrieve) | **GET** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
[**clientBankAccountUpdate**](ClientAPI.md#clientbankaccountupdate) | **PUT** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
[**clientBankAccountsList**](ClientAPI.md#clientbankaccountslist) | **GET** /api/v2/clients/{client_uuid}/bank-accounts/ | 
[**clientCompleteOnboarding**](ClientAPI.md#clientcompleteonboarding) | **POST** /api/v2/clients/{uuid}/onboarding/complete/ | 
[**clientCreate**](ClientAPI.md#clientcreate) | **POST** /api/v2/clients/ | 
[**clientDocumentCreate**](ClientAPI.md#clientdocumentcreate) | **POST** /api/v2/clients/{client_uuid}/documents/ | 
[**clientDocumentDelete**](ClientAPI.md#clientdocumentdelete) | **DELETE** /api/v2/clients/{client_uuid}/documents/{uuid}/ | 
[**clientDocumentList**](ClientAPI.md#clientdocumentlist) | **GET** /api/v2/clients/{client_uuid}/documents/ | 
[**clientDocumentRetrieve**](ClientAPI.md#clientdocumentretrieve) | **GET** /api/v2/clients/{client_uuid}/documents/{uuid}/ | 
[**clientList**](ClientAPI.md#clientlist) | **GET** /api/v2/clients/ | 
[**clientNationalityCreate**](ClientAPI.md#clientnationalitycreate) | **POST** /api/v2/clients/{client_uuid}/nationalities/ | 
[**clientNationlitiesList**](ClientAPI.md#clientnationlitieslist) | **GET** /api/v2/clients/{client_uuid}/nationalities/ | 
[**clientNationlityDelete**](ClientAPI.md#clientnationlitydelete) | **DELETE** /api/v2/clients/{client_uuid}/nationalities/{uuid}/ | 
[**clientNationlityPartialUpdate**](ClientAPI.md#clientnationlitypartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/nationalities/{uuid}/ | 
[**clientNationlityRetrieve**](ClientAPI.md#clientnationlityretrieve) | **GET** /api/v2/clients/{client_uuid}/nationalities/{uuid}/ | 
[**clientNationlityUpdate**](ClientAPI.md#clientnationlityupdate) | **PUT** /api/v2/clients/{client_uuid}/nationalities/{uuid}/ | 
[**clientPartialUpdate**](ClientAPI.md#clientpartialupdate) | **PATCH** /api/v2/clients/{uuid}/ | 
[**clientRetrieve**](ClientAPI.md#clientretrieve) | **GET** /api/v2/clients/{uuid}/ | 
[**clientRiskAssessmentCreate**](ClientAPI.md#clientriskassessmentcreate) | **POST** /api/v2/clients/{client_uuid}/risk-assessments/ | 
[**clientRiskAssessmentDelete**](ClientAPI.md#clientriskassessmentdelete) | **DELETE** /api/v2/clients/{client_uuid}/risk-assessments/{uuid}/ | 
[**clientRiskAssessmentList**](ClientAPI.md#clientriskassessmentlist) | **GET** /api/v2/clients/{client_uuid}/risk-assessments/ | 
[**clientRiskAssessmentPartialUpdate**](ClientAPI.md#clientriskassessmentpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/risk-assessments/{uuid}/ | 
[**clientRiskAssessmentRetrieve**](ClientAPI.md#clientriskassessmentretrieve) | **GET** /api/v2/clients/{client_uuid}/risk-assessments/{uuid}/ | 
[**clientTWRRPerformance**](ClientAPI.md#clienttwrrperformance) | **GET** /api/v2/clients/{uuid}/performance/twrr/ | 
[**clientTaxInformationCreate**](ClientAPI.md#clienttaxinformationcreate) | **POST** /api/v2/clients/{client_uuid}/tax-informations/ | 
[**clientTaxInformationDelete**](ClientAPI.md#clienttaxinformationdelete) | **DELETE** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 
[**clientTaxInformationList**](ClientAPI.md#clienttaxinformationlist) | **GET** /api/v2/clients/{client_uuid}/tax-informations/ | 
[**clientTaxInformationPartialUpdate**](ClientAPI.md#clienttaxinformationpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 
[**clientTaxInformationRetrieve**](ClientAPI.md#clienttaxinformationretrieve) | **GET** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 
[**clientTaxInformationUpdate**](ClientAPI.md#clienttaxinformationupdate) | **PUT** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 
[**clientUpdate**](ClientAPI.md#clientupdate) | **PUT** /api/v2/clients/{uuid}/ | 
[**clientVerificationCreate**](ClientAPI.md#clientverificationcreate) | **POST** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
[**clientVerificationDocumentCreate**](ClientAPI.md#clientverificationdocumentcreate) | **POST** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
[**clientVerificationDocumentDelete**](ClientAPI.md#clientverificationdocumentdelete) | **DELETE** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
[**clientVerificationDocumentList**](ClientAPI.md#clientverificationdocumentlist) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
[**clientVerificationDocumentPartialUpdate**](ClientAPI.md#clientverificationdocumentpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
[**clientVerificationDocumentRetrieve**](ClientAPI.md#clientverificationdocumentretrieve) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
[**clientVerificationDocumentUpdate**](ClientAPI.md#clientverificationdocumentupdate) | **PUT** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
[**clientVerificationList**](ClientAPI.md#clientverificationlist) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
[**clientVerificationRetrieve**](ClientAPI.md#clientverificationretrieve) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/{uuid}/ | 


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

ClientAPI.clientAddressCreate(clientUuid: clientUuid, addressCreate: addressCreate) { (response, error) in
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
    open class func clientAddressDelete(clientUuid: UUID, uuid: UUID, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```



Delete a client address

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 

ClientAPI.clientAddressDelete(clientUuid: clientUuid, uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

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
    open class func clientAddressPartialUpdate(clientUuid: UUID, uuid: UUID, patchedAddressUpdate: PatchedAddressUpdate? = nil, completion: @escaping (_ data: AddressUpdate?, _ error: Error?) -> Void)
```



Partial Update a client address

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 
let patchedAddressUpdate = PatchedAddressUpdate(uuid: 123, line1: "line1_example", line2: "line2_example", postcode: "postcode_example", locality: "locality_example", country: "country_example", region: "region_example") // PatchedAddressUpdate |  (optional)

ClientAPI.clientAddressPartialUpdate(clientUuid: clientUuid, uuid: uuid, patchedAddressUpdate: patchedAddressUpdate) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 
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
    open class func clientAddressRetrieve(clientUuid: UUID, uuid: UUID, completion: @escaping (_ data: AddressList?, _ error: Error?) -> Void)
```



Retrieve a client address

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 

ClientAPI.clientAddressRetrieve(clientUuid: clientUuid, uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

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
    open class func clientAddressUpdate(clientUuid: UUID, uuid: UUID, addressUpdate: AddressUpdate, completion: @escaping (_ data: AddressUpdate?, _ error: Error?) -> Void)
```



Update a client address

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 
let addressUpdate = AddressUpdate(uuid: 123, line1: "line1_example", line2: "line2_example", postcode: "postcode_example", locality: "locality_example", country: "country_example", region: "region_example") // AddressUpdate | 

ClientAPI.clientAddressUpdate(clientUuid: clientUuid, uuid: uuid, addressUpdate: addressUpdate) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 
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

ClientAPI.clientAddressesList(clientUuid: clientUuid, limit: limit, offset: offset) { (response, error) in
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

ClientAPI.clientBankAccountCreate(clientUuid: clientUuid, bankAccountCreateUpdate: bankAccountCreateUpdate) { (response, error) in
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
    open class func clientBankAccountDelete(clientUuid: UUID, uuid: UUID, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```



Delete a client bank account

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 

ClientAPI.clientBankAccountDelete(clientUuid: clientUuid, uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

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
    open class func clientBankAccountPartialUpdate(clientUuid: UUID, uuid: UUID, patchedBankAccountCreateUpdate: PatchedBankAccountCreateUpdate? = nil, completion: @escaping (_ data: BankAccountCreateUpdate?, _ error: Error?) -> Void)
```



Partial Update a client bank account

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 
let patchedBankAccountCreateUpdate = PatchedBankAccountCreateUpdate(uuid: 123, accountNumber: "accountNumber_example", accountSortCode: "accountSortCode_example", accountHolderName: "accountHolderName_example", joint: false, bankName: "bankName_example", iban: "iban_example", swiftCode: "swiftCode_example") // PatchedBankAccountCreateUpdate |  (optional)

ClientAPI.clientBankAccountPartialUpdate(clientUuid: clientUuid, uuid: uuid, patchedBankAccountCreateUpdate: patchedBankAccountCreateUpdate) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 
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
    open class func clientBankAccountRetrieve(clientUuid: UUID, uuid: UUID, completion: @escaping (_ data: BankAccountList?, _ error: Error?) -> Void)
```



Retrieve a client bank account

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 

ClientAPI.clientBankAccountRetrieve(clientUuid: clientUuid, uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

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
    open class func clientBankAccountUpdate(clientUuid: UUID, uuid: UUID, bankAccountCreateUpdate: BankAccountCreateUpdate? = nil, completion: @escaping (_ data: BankAccountCreateUpdate?, _ error: Error?) -> Void)
```



Update a client bank account

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 
let bankAccountCreateUpdate = BankAccountCreateUpdate(uuid: 123, accountNumber: "accountNumber_example", accountSortCode: "accountSortCode_example", accountHolderName: "accountHolderName_example", joint: false, bankName: "bankName_example", iban: "iban_example", swiftCode: "swiftCode_example") // BankAccountCreateUpdate |  (optional)

ClientAPI.clientBankAccountUpdate(clientUuid: clientUuid, uuid: uuid, bankAccountCreateUpdate: bankAccountCreateUpdate) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 
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

ClientAPI.clientBankAccountsList(clientUuid: clientUuid, limit: limit, offset: offset) { (response, error) in
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
    open class func clientCompleteOnboarding(clientUuid: UUID, uuid: UUID, clientDetail: ClientDetail, completion: @escaping (_ data: ClientDetail?, _ error: Error?) -> Void)
```



Complete onboarding for a client

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 
let clientDetail = ClientDetail(email: "email_example", birthdate: Date(), tosConsent: false, marketingConsent: false, dataConsent: false, tosConsentDate: Date(), taxInformation: ["taxInformation_example"], countryBirth: CountryField(id: 123, code: "code_example", iso3: "iso3_example", name: "name_example", nameEnGb: "nameEnGb_example", nameEnCh: "nameEnCh_example", nameFrCh: "nameFrCh_example", nameDeCh: "nameDeCh_example", nameEsEs: "nameEsEs_example", nameItCh: "nameItCh_example", longName: "longName_example", longNameEnGb: "longNameEnGb_example", longNameEnCh: "longNameEnCh_example", longNameFrCh: "longNameFrCh_example", longNameDeCh: "longNameDeCh_example", longNameEsEs: "longNameEsEs_example", longNameItCh: "longNameItCh_example", eeaCountry: false), lastLogin: Date(), referredBy: "referredBy_example", successfulReferrals: 123, kycVerified: false, isVerified: false, feeSegments: ["feeSegments_example"], extraData: "TODO", portfolios: ["portfolios_example"], onboardedBy: "onboardedBy_example", riskLevel: 123, onboardingToken: "onboardingToken_example", uuid: 123, created: Date(), updated: Date(), comments: "comments_example", status: StatusB65Enum(), emailVerified: false, emailVerifyLastRequest: Date(), title: ClientDetailTitleOneOf(), firstName: "firstName_example", middleName: "middleName_example", lastName: "lastName_example", gender: ClientDetailGenderOneOf(), maritalStatus: ClientDetailMaritalStatusOneOf(), phoneNumber: "phoneNumber_example", phoneNumberVerified: Date(), language: "language_example", employmentStatus: ClientDetailEmploymentStatusOneOf(), profession: "profession_example", referralCode: "referralCode_example", activated: Date(), utmSource: "utmSource_example", utmMedium: "utmMedium_example", utmCampaign: "utmCampaign_example", utmTerm: "utmTerm_example", utmContent: "utmContent_example", marketingConsentDate: Date(), dataConsentDate: Date()) // ClientDetail | 

ClientAPI.clientCompleteOnboarding(clientUuid: clientUuid, uuid: uuid, clientDetail: clientDetail) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 
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

let clientCreate = ClientCreate(email: "email_example", birthdate: Date(), title: ClientCreateTitleOneOf(), firstName: "firstName_example", lastName: "lastName_example", middleName: "middleName_example", gender: ClientCreateGenderOneOf(), maritalStatus: ClientCreateMaritalStatusOneOf(), language: "language_example", employmentStatus: ClientCreateEmploymentStatusOneOf(), activated: Date(), profile: "TODO", password: "password_example", referralCode: "referralCode_example", utmSource: "utmSource_example", utmMedium: "utmMedium_example", utmCampaign: "utmCampaign_example", utmTerm: "utmTerm_example", utmContent: "utmContent_example", tosConsent: false, dataConsent: false, marketingConsent: false, extraData: "TODO", phoneNumber: "phoneNumber_example") // ClientCreate | 

ClientAPI.clientCreate(clientCreate: clientCreate) { (response, error) in
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

# **clientDocumentCreate**
```swift
    open class func clientDocumentCreate(clientUuid: UUID, uuid: UUID, name: String, docType: DocTypeEnum, path: String, description: String? = nil, completion: @escaping (_ data: Document?, _ error: Error?) -> Void)
```



Create a document for a client

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 
let name = "name_example" // String | 
let docType = DocTypeEnum() // DocTypeEnum | 
let path = "path_example" // String | 
let description = "description_example" // String |  (optional)

ClientAPI.clientDocumentCreate(clientUuid: clientUuid, uuid: uuid, name: name, docType: docType, path: path, description: description) { (response, error) in
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
 **uuid** | [**UUID**](UUID.md) |  | 
 **name** | **String** |  | 
 **docType** | [**DocTypeEnum**](DocTypeEnum.md) |  | 
 **path** | **String** |  | 
 **description** | **String** |  | [optional] 

### Return type

[**Document**](Document.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientDocumentDelete**
```swift
    open class func clientDocumentDelete(clientUuid: UUID, uuid: UUID, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```



Delete a client document

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 

ClientAPI.clientDocumentDelete(clientUuid: clientUuid, uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

### Return type

Void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientDocumentList**
```swift
    open class func clientDocumentList(clientUuid: UUID, client: Int? = nil, description: String? = nil, docType: [String]? = nil, extraData: [String: AnyCodable]? = nil, limit: Int? = nil, name: String? = nil, offset: Int? = nil, completion: @escaping (_ data: PaginatedDocumentList?, _ error: Error?) -> Void)
```



List Document for a client

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let client = 987 // Int |  (optional)
let description = "description_example" // String |  (optional)
let docType = ["docType_example"] // [String] |  (optional)
let extraData = "TODO" // [String: AnyCodable] | Additional document attributes for the specific portal (optional)
let limit = 987 // Int | Number of results to return per page. (optional)
let name = "name_example" // String |  (optional)
let offset = 987 // Int | The initial index from which to return the results. (optional)

ClientAPI.clientDocumentList(clientUuid: clientUuid, client: client, description: description, docType: docType, extraData: extraData, limit: limit, name: name, offset: offset) { (response, error) in
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
 **client** | **Int** |  | [optional] 
 **description** | **String** |  | [optional] 
 **docType** | [**[String]**](String.md) |  | [optional] 
 **extraData** | [**[String: AnyCodable]**](AnyCodable.md) | Additional document attributes for the specific portal | [optional] 
 **limit** | **Int** | Number of results to return per page. | [optional] 
 **name** | **String** |  | [optional] 
 **offset** | **Int** | The initial index from which to return the results. | [optional] 

### Return type

[**PaginatedDocumentList**](PaginatedDocumentList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientDocumentRetrieve**
```swift
    open class func clientDocumentRetrieve(clientUuid: UUID, uuid: UUID, completion: @escaping (_ data: Document?, _ error: Error?) -> Void)
```



Retrieve a client document

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 

ClientAPI.clientDocumentRetrieve(clientUuid: clientUuid, uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

### Return type

[**Document**](Document.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
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

ClientAPI.clientList(externalCustodianId: externalCustodianId, extraData: extraData, limit: limit, offset: offset, ordering: ordering, search: search, status: status) { (response, error) in
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

ClientAPI.clientNationalityCreate(clientUuid: clientUuid, nationalityCreate: nationalityCreate) { (response, error) in
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

ClientAPI.clientNationlitiesList(clientUuid: clientUuid, limit: limit, offset: offset) { (response, error) in
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
    open class func clientNationlityDelete(clientUuid: UUID, uuid: UUID, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```



Delete a client nationality

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 

ClientAPI.clientNationlityDelete(clientUuid: clientUuid, uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

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
    open class func clientNationlityPartialUpdate(clientUuid: UUID, uuid: UUID, patchedNationalityUpdate: PatchedNationalityUpdate? = nil, completion: @escaping (_ data: NationalityUpdate?, _ error: Error?) -> Void)
```



Partial Update a client nationality

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 
let patchedNationalityUpdate = PatchedNationalityUpdate(country: "country_example", documentNumber: "documentNumber_example", documentType: "documentType_example") // PatchedNationalityUpdate |  (optional)

ClientAPI.clientNationlityPartialUpdate(clientUuid: clientUuid, uuid: uuid, patchedNationalityUpdate: patchedNationalityUpdate) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 
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
    open class func clientNationlityRetrieve(clientUuid: UUID, uuid: UUID, completion: @escaping (_ data: NationalityList?, _ error: Error?) -> Void)
```



Retrieve a client nationality

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 

ClientAPI.clientNationlityRetrieve(clientUuid: clientUuid, uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

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
    open class func clientNationlityUpdate(clientUuid: UUID, uuid: UUID, nationalityUpdate: NationalityUpdate, completion: @escaping (_ data: NationalityUpdate?, _ error: Error?) -> Void)
```



Update a client nationality

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 
let nationalityUpdate = NationalityUpdate(country: "country_example", documentNumber: "documentNumber_example", documentType: "documentType_example") // NationalityUpdate | 

ClientAPI.clientNationlityUpdate(clientUuid: clientUuid, uuid: uuid, nationalityUpdate: nationalityUpdate) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 
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
    open class func clientPartialUpdate(uuid: UUID, patchedApplicationClientUpdate: PatchedApplicationClientUpdate? = nil, completion: @escaping (_ data: ApplicationClientUpdate?, _ error: Error?) -> Void)
```



Partial Update a client

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let uuid = 987 // UUID | 
let patchedApplicationClientUpdate = PatchedApplicationClientUpdate(email: "email_example", birthdate: Date(), tosConsent: false, marketingConsent: false, dataConsent: false, tosConsentDate: Date(), taxInformation: ["taxInformation_example"], countryBirth: CountryField(id: 123, code: "code_example", iso3: "iso3_example", name: "name_example", nameEnGb: "nameEnGb_example", nameEnCh: "nameEnCh_example", nameFrCh: "nameFrCh_example", nameDeCh: "nameDeCh_example", nameEsEs: "nameEsEs_example", nameItCh: "nameItCh_example", longName: "longName_example", longNameEnGb: "longNameEnGb_example", longNameEnCh: "longNameEnCh_example", longNameFrCh: "longNameFrCh_example", longNameDeCh: "longNameDeCh_example", longNameEsEs: "longNameEsEs_example", longNameItCh: "longNameItCh_example", eeaCountry: false), lastLogin: Date(), referredBy: "referredBy_example", successfulReferrals: 123, kycVerified: false, isVerified: false, feeSegments: ["feeSegments_example"], extraData: "TODO", portfolios: ["portfolios_example"], onboardedBy: "onboardedBy_example", riskLevel: 123, onboardingToken: "onboardingToken_example", password: "password_example", emailVerifiedLastRequest: Date(), uuid: 123, created: Date(), updated: Date(), comments: "comments_example", status: StatusB65Enum(), emailVerified: false, emailVerifyLastRequest: Date(), title: PatchedApplicationClientUpdateTitleOneOf(), firstName: "firstName_example", middleName: "middleName_example", lastName: "lastName_example", gender: PatchedApplicationClientUpdateGenderOneOf(), maritalStatus: PatchedApplicationClientUpdateMaritalStatusOneOf(), phoneNumber: "phoneNumber_example", phoneNumberVerified: Date(), language: "language_example", employmentStatus: PatchedApplicationClientUpdateEmploymentStatusOneOf(), profession: "profession_example", referralCode: "referralCode_example", activated: Date(), utmSource: "utmSource_example", utmMedium: "utmMedium_example", utmCampaign: "utmCampaign_example", utmTerm: "utmTerm_example", utmContent: "utmContent_example", marketingConsentDate: Date(), dataConsentDate: Date()) // PatchedApplicationClientUpdate |  (optional)

ClientAPI.clientPartialUpdate(uuid: uuid, patchedApplicationClientUpdate: patchedApplicationClientUpdate) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 
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
    open class func clientRetrieve(uuid: UUID, completion: @escaping (_ data: ClientDetail?, _ error: Error?) -> Void)
```



Retrieve a client

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let uuid = 987 // UUID | 

ClientAPI.clientRetrieve(uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

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

ClientAPI.clientRiskAssessmentCreate(clientUuid: clientUuid, assessment: assessment) { (response, error) in
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
    open class func clientRiskAssessmentDelete(clientUuid: UUID, uuid: UUID, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```



Delete a client risk assessment

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 

ClientAPI.clientRiskAssessmentDelete(clientUuid: clientUuid, uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

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

ClientAPI.clientRiskAssessmentList(clientUuid: clientUuid, limit: limit, offset: offset, status: status) { (response, error) in
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
    open class func clientRiskAssessmentPartialUpdate(clientUuid: UUID, uuid: UUID, patchedAssessment: PatchedAssessment? = nil, completion: @escaping (_ data: Assessment?, _ error: Error?) -> Void)
```



Partial Update a client risk assessment

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 
let patchedAssessment = PatchedAssessment(uuid: 123, completed: Date(), choices: [RiskChoiceQuestionCode(code: "code_example", order: 123, description: "description_example", created: Date(), questionCode: "questionCode_example")], status: AssessmentStatusEnum(), riskLevel: 123, created: Date()) // PatchedAssessment |  (optional)

ClientAPI.clientRiskAssessmentPartialUpdate(clientUuid: clientUuid, uuid: uuid, patchedAssessment: patchedAssessment) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 
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
    open class func clientRiskAssessmentRetrieve(clientUuid: UUID, uuid: UUID, completion: @escaping (_ data: Assessment?, _ error: Error?) -> Void)
```



Retrieve a client risk assessment

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 

ClientAPI.clientRiskAssessmentRetrieve(clientUuid: clientUuid, uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

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
    open class func clientTWRRPerformance(clientUuid: UUID, uuid: UUID, completion: @escaping (_ data: ClientPerformance?, _ error: Error?) -> Void)
```



Calculate TWRR Performance for client

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 

ClientAPI.clientTWRRPerformance(clientUuid: clientUuid, uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

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

ClientAPI.clientTaxInformationCreate(clientUuid: clientUuid, taxInformationCreateUpdate: taxInformationCreateUpdate) { (response, error) in
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
    open class func clientTaxInformationDelete(clientUuid: UUID, uuid: UUID, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```



Delete a client tax inforation

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 

ClientAPI.clientTaxInformationDelete(clientUuid: clientUuid, uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

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

ClientAPI.clientTaxInformationList(clientUuid: clientUuid, limit: limit, offset: offset) { (response, error) in
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
    open class func clientTaxInformationPartialUpdate(clientUuid: UUID, uuid: UUID, patchedTaxInformationCreateUpdate: PatchedTaxInformationCreateUpdate? = nil, completion: @escaping (_ data: TaxInformationCreateUpdate?, _ error: Error?) -> Void)
```



Partial Update a client tax inforation

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 
let patchedTaxInformationCreateUpdate = PatchedTaxInformationCreateUpdate(uuid: 123, country: "country_example", documentNumber: "documentNumber_example", documentType: "documentType_example") // PatchedTaxInformationCreateUpdate |  (optional)

ClientAPI.clientTaxInformationPartialUpdate(clientUuid: clientUuid, uuid: uuid, patchedTaxInformationCreateUpdate: patchedTaxInformationCreateUpdate) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 
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
    open class func clientTaxInformationRetrieve(clientUuid: UUID, uuid: UUID, completion: @escaping (_ data: TaxInformationList?, _ error: Error?) -> Void)
```



Retrieve a client tax inforation

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 

ClientAPI.clientTaxInformationRetrieve(clientUuid: clientUuid, uuid: uuid) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 

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
    open class func clientTaxInformationUpdate(clientUuid: UUID, uuid: UUID, taxInformationCreateUpdate: TaxInformationCreateUpdate, completion: @escaping (_ data: TaxInformationCreateUpdate?, _ error: Error?) -> Void)
```



Update a client tax inforation

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 
let taxInformationCreateUpdate = TaxInformationCreateUpdate(uuid: 123, country: "country_example", documentNumber: "documentNumber_example", documentType: "documentType_example") // TaxInformationCreateUpdate | 

ClientAPI.clientTaxInformationUpdate(clientUuid: clientUuid, uuid: uuid, taxInformationCreateUpdate: taxInformationCreateUpdate) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 
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
    open class func clientUpdate(uuid: UUID, applicationClientUpdate: ApplicationClientUpdate, completion: @escaping (_ data: ApplicationClientUpdate?, _ error: Error?) -> Void)
```



Update a client

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let uuid = 987 // UUID | 
let applicationClientUpdate = ApplicationClientUpdate(email: "email_example", birthdate: Date(), tosConsent: false, marketingConsent: false, dataConsent: false, tosConsentDate: Date(), taxInformation: ["taxInformation_example"], countryBirth: CountryField(id: 123, code: "code_example", iso3: "iso3_example", name: "name_example", nameEnGb: "nameEnGb_example", nameEnCh: "nameEnCh_example", nameFrCh: "nameFrCh_example", nameDeCh: "nameDeCh_example", nameEsEs: "nameEsEs_example", nameItCh: "nameItCh_example", longName: "longName_example", longNameEnGb: "longNameEnGb_example", longNameEnCh: "longNameEnCh_example", longNameFrCh: "longNameFrCh_example", longNameDeCh: "longNameDeCh_example", longNameEsEs: "longNameEsEs_example", longNameItCh: "longNameItCh_example", eeaCountry: false), lastLogin: Date(), referredBy: "referredBy_example", successfulReferrals: 123, kycVerified: false, isVerified: false, feeSegments: ["feeSegments_example"], extraData: "TODO", portfolios: ["portfolios_example"], onboardedBy: "onboardedBy_example", riskLevel: 123, onboardingToken: "onboardingToken_example", password: "password_example", emailVerifiedLastRequest: Date(), uuid: 123, created: Date(), updated: Date(), comments: "comments_example", status: StatusB65Enum(), emailVerified: false, emailVerifyLastRequest: Date(), title: ApplicationClientUpdateTitleOneOf(), firstName: "firstName_example", middleName: "middleName_example", lastName: "lastName_example", gender: ApplicationClientUpdateGenderOneOf(), maritalStatus: ApplicationClientUpdateMaritalStatusOneOf(), phoneNumber: "phoneNumber_example", phoneNumberVerified: Date(), language: "language_example", employmentStatus: ApplicationClientUpdateEmploymentStatusOneOf(), profession: "profession_example", referralCode: "referralCode_example", activated: Date(), utmSource: "utmSource_example", utmMedium: "utmMedium_example", utmCampaign: "utmCampaign_example", utmTerm: "utmTerm_example", utmContent: "utmContent_example", marketingConsentDate: Date(), dataConsentDate: Date()) // ApplicationClientUpdate | 

ClientAPI.clientUpdate(uuid: uuid, applicationClientUpdate: applicationClientUpdate) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 
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
let verificationCreate = VerificationCreate(uuid: 123, verifyType: VerifyTypeEnum(), status: StatusBd7Enum(), result: VerificationCreateResultOneOf(), created: Date(), updated: Date()) // VerificationCreate | 

ClientAPI.clientVerificationCreate(clientUuid: clientUuid, verifyTypeCode: verifyTypeCode, verificationCreate: verificationCreate) { (response, error) in
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
    open class func clientVerificationDocumentCreate(clientUuid: UUID, verifyTypeCode: String, uuid: UUID, verifyType: VerifyTypeEnum, created: Date, updated: Date, verificationDocuments: [VerificationDocumentCreate], status: StatusBd7Enum? = nil, result: VerificationWithTypeResultOneOf? = nil, completion: @escaping (_ data: VerificationWithType?, _ error: Error?) -> Void)
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
let result = VerificationWithTypeResultOneOf() // VerificationWithTypeResultOneOf |  (optional)

ClientAPI.clientVerificationDocumentCreate(clientUuid: clientUuid, verifyTypeCode: verifyTypeCode, uuid: uuid, verifyType: verifyType, created: created, updated: updated, verificationDocuments: verificationDocuments, status: status, result: result) { (response, error) in
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
 **result** | [**VerificationWithTypeResultOneOf**](VerificationWithTypeResultOneOf.md) |  | [optional] 

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
    open class func clientVerificationDocumentDelete(clientUuid: UUID, uuid: UUID, verifyTypeCode: String, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```



Delete a client verificatoin document

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 
let verifyTypeCode = "verifyTypeCode_example" // String | 

ClientAPI.clientVerificationDocumentDelete(clientUuid: clientUuid, uuid: uuid, verifyTypeCode: verifyTypeCode) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 
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

ClientAPI.clientVerificationDocumentList(clientUuid: clientUuid, verifyTypeCode: verifyTypeCode, limit: limit, offset: offset) { (response, error) in
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
    open class func clientVerificationDocumentPartialUpdate(clientUuid: UUID, uuid: UUID, verifyTypeCode: String, uuid2: UUID? = nil, documentType: DocumentTypeEnum? = nil, documentFront: String? = nil, documentBack: String? = nil, completion: @escaping (_ data: VerificationDocument?, _ error: Error?) -> Void)
```



Partial Update a client verification document

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 
let verifyTypeCode = "verifyTypeCode_example" // String | 
let uuid2 = 987 // UUID |  (optional)
let documentType = DocumentTypeEnum() // DocumentTypeEnum |  (optional)
let documentFront = "documentFront_example" // String |  (optional)
let documentBack = "documentBack_example" // String |  (optional)

ClientAPI.clientVerificationDocumentPartialUpdate(clientUuid: clientUuid, uuid: uuid, verifyTypeCode: verifyTypeCode, uuid2: uuid2, documentType: documentType, documentFront: documentFront, documentBack: documentBack) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 
 **verifyTypeCode** | **String** |  | 
 **uuid2** | [**UUID**](UUID.md) |  | [optional] 
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
    open class func clientVerificationDocumentRetrieve(clientUuid: UUID, uuid: UUID, verifyTypeCode: String, completion: @escaping (_ data: VerificationDocument?, _ error: Error?) -> Void)
```



Retrieve a client verification document

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 
let verifyTypeCode = "verifyTypeCode_example" // String | 

ClientAPI.clientVerificationDocumentRetrieve(clientUuid: clientUuid, uuid: uuid, verifyTypeCode: verifyTypeCode) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 
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
    open class func clientVerificationDocumentUpdate(clientUuid: UUID, uuid: UUID, verifyTypeCode: String, uuid2: UUID, documentType: DocumentTypeEnum, documentFront: String, documentBack: String, completion: @escaping (_ data: VerificationDocument?, _ error: Error?) -> Void)
```



Update a client verification document

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 
let verifyTypeCode = "verifyTypeCode_example" // String | 
let uuid2 = 987 // UUID | 
let documentType = DocumentTypeEnum() // DocumentTypeEnum | 
let documentFront = "documentFront_example" // String | 
let documentBack = "documentBack_example" // String | 

ClientAPI.clientVerificationDocumentUpdate(clientUuid: clientUuid, uuid: uuid, verifyTypeCode: verifyTypeCode, uuid2: uuid2, documentType: documentType, documentFront: documentFront, documentBack: documentBack) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 
 **verifyTypeCode** | **String** |  | 
 **uuid2** | [**UUID**](UUID.md) |  | 
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

ClientAPI.clientVerificationList(clientUuid: clientUuid, verifyTypeCode: verifyTypeCode, limit: limit, offset: offset) { (response, error) in
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
    open class func clientVerificationRetrieve(clientUuid: UUID, uuid: UUID, verifyTypeCode: String, completion: @escaping (_ data: VerificationList?, _ error: Error?) -> Void)
```



Retrieve a client verification 

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let clientUuid = 987 // UUID | 
let uuid = 987 // UUID | 
let verifyTypeCode = "verifyTypeCode_example" // String | 

ClientAPI.clientVerificationRetrieve(clientUuid: clientUuid, uuid: uuid, verifyTypeCode: verifyTypeCode) { (response, error) in
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
 **uuid** | [**UUID**](.md) |  | 
 **verifyTypeCode** | **String** |  | 

### Return type

[**VerificationList**](VerificationList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

