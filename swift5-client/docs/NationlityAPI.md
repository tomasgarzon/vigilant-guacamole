# NationlityAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientNationalityCreate**](NationlityAPI.md#clientnationalitycreate) | **POST** /api/v2/clients/{client_uuid}/nationalities/ | 
[**clientNationlitiesList**](NationlityAPI.md#clientnationlitieslist) | **GET** /api/v2/clients/{client_uuid}/nationalities/ | 
[**clientNationlityDelete**](NationlityAPI.md#clientnationlitydelete) | **DELETE** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 
[**clientNationlityPartialUpdate**](NationlityAPI.md#clientnationlitypartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 
[**clientNationlityRetrieve**](NationlityAPI.md#clientnationlityretrieve) | **GET** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 
[**clientNationlityUpdate**](NationlityAPI.md#clientnationlityupdate) | **PUT** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 


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

NationlityAPI.clientNationalityCreate(clientUuid: clientUuid, nationalityCreate: nationalityCreate) { (response, error) in
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

NationlityAPI.clientNationlitiesList(clientUuid: clientUuid, limit: limit, offset: offset) { (response, error) in
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

NationlityAPI.clientNationlityDelete(clientUuid: clientUuid, nationalityUuid: nationalityUuid) { (response, error) in
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

NationlityAPI.clientNationlityPartialUpdate(clientUuid: clientUuid, nationalityUuid: nationalityUuid, patchedNationalityUpdate: patchedNationalityUpdate) { (response, error) in
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

NationlityAPI.clientNationlityRetrieve(clientUuid: clientUuid, nationalityUuid: nationalityUuid) { (response, error) in
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

NationlityAPI.clientNationlityUpdate(clientUuid: clientUuid, nationalityUuid: nationalityUuid, nationalityUpdate: nationalityUpdate) { (response, error) in
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

