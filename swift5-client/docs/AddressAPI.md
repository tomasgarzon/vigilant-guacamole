# AddressAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientAddressCreate**](AddressAPI.md#clientaddresscreate) | **POST** /api/v2/clients/{client_uuid}/addresses/ | 
[**clientAddressDelete**](AddressAPI.md#clientaddressdelete) | **DELETE** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
[**clientAddressPartialUpdate**](AddressAPI.md#clientaddresspartialupdate) | **PATCH** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
[**clientAddressRetrieve**](AddressAPI.md#clientaddressretrieve) | **GET** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
[**clientAddressUpdate**](AddressAPI.md#clientaddressupdate) | **PUT** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
[**clientAddressesList**](AddressAPI.md#clientaddresseslist) | **GET** /api/v2/clients/{client_uuid}/addresses/ | 


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

AddressAPI.clientAddressCreate(clientUuid: clientUuid, addressCreate: addressCreate) { (response, error) in
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

AddressAPI.clientAddressDelete(addressUuid: addressUuid, clientUuid: clientUuid) { (response, error) in
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

AddressAPI.clientAddressPartialUpdate(addressUuid: addressUuid, clientUuid: clientUuid, patchedAddressUpdate: patchedAddressUpdate) { (response, error) in
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

AddressAPI.clientAddressRetrieve(addressUuid: addressUuid, clientUuid: clientUuid) { (response, error) in
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

AddressAPI.clientAddressUpdate(addressUuid: addressUuid, clientUuid: clientUuid, addressUpdate: addressUpdate) { (response, error) in
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

AddressAPI.clientAddressesList(clientUuid: clientUuid, limit: limit, offset: offset) { (response, error) in
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

