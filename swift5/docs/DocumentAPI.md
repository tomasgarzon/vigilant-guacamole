# DocumentAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientDocumentCreate**](DocumentAPI.md#clientdocumentcreate) | **POST** /api/v2/clients/{client_uuid}/documents/ | 
[**clientDocumentDelete**](DocumentAPI.md#clientdocumentdelete) | **DELETE** /api/v2/clients/{client_uuid}/documents/{uuid}/ | 
[**clientDocumentList**](DocumentAPI.md#clientdocumentlist) | **GET** /api/v2/clients/{client_uuid}/documents/ | 
[**clientDocumentRetrieve**](DocumentAPI.md#clientdocumentretrieve) | **GET** /api/v2/clients/{client_uuid}/documents/{uuid}/ | 


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

DocumentAPI.clientDocumentCreate(clientUuid: clientUuid, uuid: uuid, name: name, docType: docType, path: path, description: description) { (response, error) in
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

DocumentAPI.clientDocumentDelete(clientUuid: clientUuid, uuid: uuid) { (response, error) in
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

DocumentAPI.clientDocumentList(clientUuid: clientUuid, client: client, description: description, docType: docType, extraData: extraData, limit: limit, name: name, offset: offset) { (response, error) in
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

DocumentAPI.clientDocumentRetrieve(clientUuid: clientUuid, uuid: uuid) { (response, error) in
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

