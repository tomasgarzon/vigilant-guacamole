# TaxInformationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientTaxInformationCreate**](TaxInformationApi.md#clientTaxInformationCreate) | **POST** /api/v2/clients/{client_uuid}/tax-informations/ | 
[**clientTaxInformationDelete**](TaxInformationApi.md#clientTaxInformationDelete) | **DELETE** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 
[**clientTaxInformationList**](TaxInformationApi.md#clientTaxInformationList) | **GET** /api/v2/clients/{client_uuid}/tax-informations/ | 
[**clientTaxInformationPartialUpdate**](TaxInformationApi.md#clientTaxInformationPartialUpdate) | **PATCH** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 
[**clientTaxInformationRetrieve**](TaxInformationApi.md#clientTaxInformationRetrieve) | **GET** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 
[**clientTaxInformationUpdate**](TaxInformationApi.md#clientTaxInformationUpdate) | **PUT** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 


<a name="clientTaxInformationCreate"></a>
# **clientTaxInformationCreate**
> TaxInformationCreateUpdate clientTaxInformationCreate(clientUuid, taxInformationCreateUpdate)



Create a tax inforation for a client

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TaxInformationApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val taxInformationCreateUpdate : TaxInformationCreateUpdate =  // TaxInformationCreateUpdate | 
try {
    val result : TaxInformationCreateUpdate = apiInstance.clientTaxInformationCreate(clientUuid, taxInformationCreateUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TaxInformationApi#clientTaxInformationCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TaxInformationApi#clientTaxInformationCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **taxInformationCreateUpdate** | [**TaxInformationCreateUpdate**](TaxInformationCreateUpdate.md)|  |

### Return type

[**TaxInformationCreateUpdate**](TaxInformationCreateUpdate.md)

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

<a name="clientTaxInformationDelete"></a>
# **clientTaxInformationDelete**
> clientTaxInformationDelete(clientUuid, uuid)



Delete a client tax inforation

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TaxInformationApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    apiInstance.clientTaxInformationDelete(clientUuid, uuid)
} catch (e: ClientException) {
    println("4xx response calling TaxInformationApi#clientTaxInformationDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TaxInformationApi#clientTaxInformationDelete")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |

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

<a name="clientTaxInformationList"></a>
# **clientTaxInformationList**
> PaginatedTaxInformationListList clientTaxInformationList(clientUuid, limit, offset)



List tax information for a client

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TaxInformationApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedTaxInformationListList = apiInstance.clientTaxInformationList(clientUuid, limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TaxInformationApi#clientTaxInformationList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TaxInformationApi#clientTaxInformationList")
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

[**PaginatedTaxInformationListList**](PaginatedTaxInformationListList.md)

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

<a name="clientTaxInformationPartialUpdate"></a>
# **clientTaxInformationPartialUpdate**
> TaxInformationCreateUpdate clientTaxInformationPartialUpdate(clientUuid, uuid, patchedTaxInformationCreateUpdate)



Partial Update a client tax inforation

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TaxInformationApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val patchedTaxInformationCreateUpdate : PatchedTaxInformationCreateUpdate =  // PatchedTaxInformationCreateUpdate | 
try {
    val result : TaxInformationCreateUpdate = apiInstance.clientTaxInformationPartialUpdate(clientUuid, uuid, patchedTaxInformationCreateUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TaxInformationApi#clientTaxInformationPartialUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TaxInformationApi#clientTaxInformationPartialUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |
 **patchedTaxInformationCreateUpdate** | [**PatchedTaxInformationCreateUpdate**](PatchedTaxInformationCreateUpdate.md)|  | [optional]

### Return type

[**TaxInformationCreateUpdate**](TaxInformationCreateUpdate.md)

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

<a name="clientTaxInformationRetrieve"></a>
# **clientTaxInformationRetrieve**
> TaxInformationList clientTaxInformationRetrieve(clientUuid, uuid)



Retrieve a client tax inforation

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TaxInformationApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : TaxInformationList = apiInstance.clientTaxInformationRetrieve(clientUuid, uuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TaxInformationApi#clientTaxInformationRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TaxInformationApi#clientTaxInformationRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

[**TaxInformationList**](TaxInformationList.md)

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

<a name="clientTaxInformationUpdate"></a>
# **clientTaxInformationUpdate**
> TaxInformationCreateUpdate clientTaxInformationUpdate(clientUuid, uuid, taxInformationCreateUpdate)



Update a client tax inforation

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TaxInformationApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val taxInformationCreateUpdate : TaxInformationCreateUpdate =  // TaxInformationCreateUpdate | 
try {
    val result : TaxInformationCreateUpdate = apiInstance.clientTaxInformationUpdate(clientUuid, uuid, taxInformationCreateUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TaxInformationApi#clientTaxInformationUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TaxInformationApi#clientTaxInformationUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |
 **taxInformationCreateUpdate** | [**TaxInformationCreateUpdate**](TaxInformationCreateUpdate.md)|  |

### Return type

[**TaxInformationCreateUpdate**](TaxInformationCreateUpdate.md)

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

