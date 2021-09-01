# BankAccountAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientBankAccountCreate**](BankAccountAPI.md#clientbankaccountcreate) | **POST** /api/v2/clients/{client_uuid}/bank-accounts/ | 
[**clientBankAccountDelete**](BankAccountAPI.md#clientbankaccountdelete) | **DELETE** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
[**clientBankAccountPartialUpdate**](BankAccountAPI.md#clientbankaccountpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
[**clientBankAccountRetrieve**](BankAccountAPI.md#clientbankaccountretrieve) | **GET** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
[**clientBankAccountUpdate**](BankAccountAPI.md#clientbankaccountupdate) | **PUT** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
[**clientBankAccountsList**](BankAccountAPI.md#clientbankaccountslist) | **GET** /api/v2/clients/{client_uuid}/bank-accounts/ | 


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

BankAccountAPI.clientBankAccountCreate(clientUuid: clientUuid, bankAccountCreateUpdate: bankAccountCreateUpdate) { (response, error) in
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

BankAccountAPI.clientBankAccountDelete(clientUuid: clientUuid, uuid: uuid) { (response, error) in
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

BankAccountAPI.clientBankAccountPartialUpdate(clientUuid: clientUuid, uuid: uuid, patchedBankAccountCreateUpdate: patchedBankAccountCreateUpdate) { (response, error) in
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

BankAccountAPI.clientBankAccountRetrieve(clientUuid: clientUuid, uuid: uuid) { (response, error) in
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

BankAccountAPI.clientBankAccountUpdate(clientUuid: clientUuid, uuid: uuid, bankAccountCreateUpdate: bankAccountCreateUpdate) { (response, error) in
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

BankAccountAPI.clientBankAccountsList(clientUuid: clientUuid, limit: limit, offset: offset) { (response, error) in
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

