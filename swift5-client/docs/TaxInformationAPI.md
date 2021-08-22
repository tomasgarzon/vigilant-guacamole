# TaxInformationAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientTaxInformationCreate**](TaxInformationAPI.md#clienttaxinformationcreate) | **POST** /api/v2/clients/{client_uuid}/tax-informations/ | 
[**clientTaxInformationDelete**](TaxInformationAPI.md#clienttaxinformationdelete) | **DELETE** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 
[**clientTaxInformationList**](TaxInformationAPI.md#clienttaxinformationlist) | **GET** /api/v2/clients/{client_uuid}/tax-informations/ | 
[**clientTaxInformationPartialUpdate**](TaxInformationAPI.md#clienttaxinformationpartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 
[**clientTaxInformationRetrieve**](TaxInformationAPI.md#clienttaxinformationretrieve) | **GET** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 
[**clientTaxInformationUpdate**](TaxInformationAPI.md#clienttaxinformationupdate) | **PUT** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 


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

TaxInformationAPI.clientTaxInformationCreate(clientUuid: clientUuid, taxInformationCreateUpdate: taxInformationCreateUpdate) { (response, error) in
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

TaxInformationAPI.clientTaxInformationDelete(clientUuid: clientUuid, taxInformationUuid: taxInformationUuid) { (response, error) in
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

TaxInformationAPI.clientTaxInformationList(clientUuid: clientUuid, limit: limit, offset: offset) { (response, error) in
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

TaxInformationAPI.clientTaxInformationPartialUpdate(clientUuid: clientUuid, taxInformationUuid: taxInformationUuid, patchedTaxInformationCreateUpdate: patchedTaxInformationCreateUpdate) { (response, error) in
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

TaxInformationAPI.clientTaxInformationRetrieve(clientUuid: clientUuid, taxInformationUuid: taxInformationUuid) { (response, error) in
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

TaxInformationAPI.clientTaxInformationUpdate(clientUuid: clientUuid, taxInformationUuid: taxInformationUuid, taxInformationCreateUpdate: taxInformationCreateUpdate) { (response, error) in
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

