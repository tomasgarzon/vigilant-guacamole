# KYCAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientVerificationCreate**](KYCAPI.md#clientverificationcreate) | **POST** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
[**clientVerificationDocumentCreate**](KYCAPI.md#clientverificationdocumentcreate) | **POST** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
[**clientVerificationDocumentDelete**](KYCAPI.md#clientverificationdocumentdelete) | **DELETE** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
[**clientVerificationDocumentList**](KYCAPI.md#clientverificationdocumentlist) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
[**clientVerificationDocumentPartialUpdate**](KYCAPI.md#clientverificationdocumentpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
[**clientVerificationDocumentRetrieve**](KYCAPI.md#clientverificationdocumentretrieve) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
[**clientVerificationDocumentUpdate**](KYCAPI.md#clientverificationdocumentupdate) | **PUT** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
[**clientVerificationList**](KYCAPI.md#clientverificationlist) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
[**clientVerificationRetrieve**](KYCAPI.md#clientverificationretrieve) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/{uuid}/ | 


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

KYCAPI.clientVerificationCreate(clientUuid: clientUuid, verifyTypeCode: verifyTypeCode, verificationCreate: verificationCreate) { (response, error) in
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

KYCAPI.clientVerificationDocumentCreate(clientUuid: clientUuid, verifyTypeCode: verifyTypeCode, uuid: uuid, verifyType: verifyType, created: created, updated: updated, verificationDocuments: verificationDocuments, status: status, result: result) { (response, error) in
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

KYCAPI.clientVerificationDocumentDelete(clientUuid: clientUuid, uuid: uuid, verifyTypeCode: verifyTypeCode) { (response, error) in
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

KYCAPI.clientVerificationDocumentList(clientUuid: clientUuid, verifyTypeCode: verifyTypeCode, limit: limit, offset: offset) { (response, error) in
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

KYCAPI.clientVerificationDocumentPartialUpdate(clientUuid: clientUuid, uuid: uuid, verifyTypeCode: verifyTypeCode, uuid2: uuid2, documentType: documentType, documentFront: documentFront, documentBack: documentBack) { (response, error) in
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

KYCAPI.clientVerificationDocumentRetrieve(clientUuid: clientUuid, uuid: uuid, verifyTypeCode: verifyTypeCode) { (response, error) in
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

KYCAPI.clientVerificationDocumentUpdate(clientUuid: clientUuid, uuid: uuid, verifyTypeCode: verifyTypeCode, uuid2: uuid2, documentType: documentType, documentFront: documentFront, documentBack: documentBack) { (response, error) in
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

KYCAPI.clientVerificationList(clientUuid: clientUuid, verifyTypeCode: verifyTypeCode, limit: limit, offset: offset) { (response, error) in
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

KYCAPI.clientVerificationRetrieve(clientUuid: clientUuid, uuid: uuid, verifyTypeCode: verifyTypeCode) { (response, error) in
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

