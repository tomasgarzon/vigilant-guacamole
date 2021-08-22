# AddressApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientAddressCreate**](AddressApi.md#clientAddressCreate) | **POST** /api/v2/clients/{client_uuid}/addresses/ | 
[**clientAddressDelete**](AddressApi.md#clientAddressDelete) | **DELETE** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
[**clientAddressPartialUpdate**](AddressApi.md#clientAddressPartialUpdate) | **PATCH** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
[**clientAddressRetrieve**](AddressApi.md#clientAddressRetrieve) | **GET** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
[**clientAddressUpdate**](AddressApi.md#clientAddressUpdate) | **PUT** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
[**clientAddressesList**](AddressApi.md#clientAddressesList) | **GET** /api/v2/clients/{client_uuid}/addresses/ | 


<a name="clientAddressCreate"></a>
# **clientAddressCreate**
> AddressCreate clientAddressCreate(clientUuid, addressCreate)



Create an address for a client

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AddressApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val addressCreate : AddressCreate =  // AddressCreate | 
try {
    val result : AddressCreate = apiInstance.clientAddressCreate(clientUuid, addressCreate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AddressApi#clientAddressCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AddressApi#clientAddressCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **addressCreate** | [**AddressCreate**](AddressCreate.md)|  |

### Return type

[**AddressCreate**](AddressCreate.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="clientAddressDelete"></a>
# **clientAddressDelete**
> clientAddressDelete(addressUuid, clientUuid)



Delete a client address

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AddressApi()
val addressUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    apiInstance.clientAddressDelete(addressUuid, clientUuid)
} catch (e: ClientException) {
    println("4xx response calling AddressApi#clientAddressDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AddressApi#clientAddressDelete")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressUuid** | [**java.util.UUID**](.md)|  |
 **clientUuid** | [**java.util.UUID**](.md)|  |

### Return type

null (empty response body)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="clientAddressPartialUpdate"></a>
# **clientAddressPartialUpdate**
> AddressUpdate clientAddressPartialUpdate(addressUuid, clientUuid, patchedAddressUpdate)



Partial Update a client address

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AddressApi()
val addressUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val patchedAddressUpdate : PatchedAddressUpdate =  // PatchedAddressUpdate | 
try {
    val result : AddressUpdate = apiInstance.clientAddressPartialUpdate(addressUuid, clientUuid, patchedAddressUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AddressApi#clientAddressPartialUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AddressApi#clientAddressPartialUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressUuid** | [**java.util.UUID**](.md)|  |
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **patchedAddressUpdate** | [**PatchedAddressUpdate**](PatchedAddressUpdate.md)|  | [optional]

### Return type

[**AddressUpdate**](AddressUpdate.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="clientAddressRetrieve"></a>
# **clientAddressRetrieve**
> AddressList clientAddressRetrieve(addressUuid, clientUuid)



Retrieve a client address

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AddressApi()
val addressUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : AddressList = apiInstance.clientAddressRetrieve(addressUuid, clientUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AddressApi#clientAddressRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AddressApi#clientAddressRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressUuid** | [**java.util.UUID**](.md)|  |
 **clientUuid** | [**java.util.UUID**](.md)|  |

### Return type

[**AddressList**](AddressList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientAddressUpdate"></a>
# **clientAddressUpdate**
> AddressUpdate clientAddressUpdate(addressUuid, clientUuid, addressUpdate)



Update a client address

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AddressApi()
val addressUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val addressUpdate : AddressUpdate =  // AddressUpdate | 
try {
    val result : AddressUpdate = apiInstance.clientAddressUpdate(addressUuid, clientUuid, addressUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AddressApi#clientAddressUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AddressApi#clientAddressUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressUuid** | [**java.util.UUID**](.md)|  |
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **addressUpdate** | [**AddressUpdate**](AddressUpdate.md)|  |

### Return type

[**AddressUpdate**](AddressUpdate.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="clientAddressesList"></a>
# **clientAddressesList**
> PaginatedAddressListList clientAddressesList(clientUuid, limit, offset)



List address for a client

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AddressApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedAddressListList = apiInstance.clientAddressesList(clientUuid, limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AddressApi#clientAddressesList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AddressApi#clientAddressesList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedAddressListList**](PaginatedAddressListList.md)

### Authorization


Configure cookieAuth:
    ApiClient.apiKey["Session"] = ""
    ApiClient.apiKeyPrefix["Session"] = ""
Configure jwtAuth:
    ApiClient.accessToken = ""
Configure tokenAuth:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

