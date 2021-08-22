# NationlityApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientNationalityCreate**](NationlityApi.md#clientNationalityCreate) | **POST** /api/v2/clients/{client_uuid}/nationalities/ | 
[**clientNationlitiesList**](NationlityApi.md#clientNationlitiesList) | **GET** /api/v2/clients/{client_uuid}/nationalities/ | 
[**clientNationlityDelete**](NationlityApi.md#clientNationlityDelete) | **DELETE** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 
[**clientNationlityPartialUpdate**](NationlityApi.md#clientNationlityPartialUpdate) | **PATCH** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 
[**clientNationlityRetrieve**](NationlityApi.md#clientNationlityRetrieve) | **GET** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 
[**clientNationlityUpdate**](NationlityApi.md#clientNationlityUpdate) | **PUT** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 


<a name="clientNationalityCreate"></a>
# **clientNationalityCreate**
> NationalityCreate clientNationalityCreate(clientUuid, nationalityCreate)



Create nationality for a client

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = NationlityApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val nationalityCreate : NationalityCreate =  // NationalityCreate | 
try {
    val result : NationalityCreate = apiInstance.clientNationalityCreate(clientUuid, nationalityCreate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling NationlityApi#clientNationalityCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling NationlityApi#clientNationalityCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **nationalityCreate** | [**NationalityCreate**](NationalityCreate.md)|  |

### Return type

[**NationalityCreate**](NationalityCreate.md)

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

<a name="clientNationlitiesList"></a>
# **clientNationlitiesList**
> PaginatedNationalityListList clientNationlitiesList(clientUuid, limit, offset)



List nationlities for a client

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = NationlityApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedNationalityListList = apiInstance.clientNationlitiesList(clientUuid, limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling NationlityApi#clientNationlitiesList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling NationlityApi#clientNationlitiesList")
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

[**PaginatedNationalityListList**](PaginatedNationalityListList.md)

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

<a name="clientNationlityDelete"></a>
# **clientNationlityDelete**
> clientNationlityDelete(clientUuid, nationalityUuid)



Delete a client nationality

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = NationlityApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val nationalityUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    apiInstance.clientNationlityDelete(clientUuid, nationalityUuid)
} catch (e: ClientException) {
    println("4xx response calling NationlityApi#clientNationlityDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling NationlityApi#clientNationlityDelete")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **nationalityUuid** | [**java.util.UUID**](.md)|  |

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

<a name="clientNationlityPartialUpdate"></a>
# **clientNationlityPartialUpdate**
> NationalityUpdate clientNationlityPartialUpdate(clientUuid, nationalityUuid, patchedNationalityUpdate)



Partial Update a client nationality

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = NationlityApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val nationalityUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val patchedNationalityUpdate : PatchedNationalityUpdate =  // PatchedNationalityUpdate | 
try {
    val result : NationalityUpdate = apiInstance.clientNationlityPartialUpdate(clientUuid, nationalityUuid, patchedNationalityUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling NationlityApi#clientNationlityPartialUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling NationlityApi#clientNationlityPartialUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **nationalityUuid** | [**java.util.UUID**](.md)|  |
 **patchedNationalityUpdate** | [**PatchedNationalityUpdate**](PatchedNationalityUpdate.md)|  | [optional]

### Return type

[**NationalityUpdate**](NationalityUpdate.md)

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

<a name="clientNationlityRetrieve"></a>
# **clientNationlityRetrieve**
> NationalityList clientNationlityRetrieve(clientUuid, nationalityUuid)



Retrieve a client nationality

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = NationlityApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val nationalityUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : NationalityList = apiInstance.clientNationlityRetrieve(clientUuid, nationalityUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling NationlityApi#clientNationlityRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling NationlityApi#clientNationlityRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **nationalityUuid** | [**java.util.UUID**](.md)|  |

### Return type

[**NationalityList**](NationalityList.md)

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

<a name="clientNationlityUpdate"></a>
# **clientNationlityUpdate**
> NationalityUpdate clientNationlityUpdate(clientUuid, nationalityUuid, nationalityUpdate)



Update a client nationality

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = NationlityApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val nationalityUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val nationalityUpdate : NationalityUpdate =  // NationalityUpdate | 
try {
    val result : NationalityUpdate = apiInstance.clientNationlityUpdate(clientUuid, nationalityUuid, nationalityUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling NationlityApi#clientNationlityUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling NationlityApi#clientNationlityUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **nationalityUuid** | [**java.util.UUID**](.md)|  |
 **nationalityUpdate** | [**NationalityUpdate**](NationalityUpdate.md)|  |

### Return type

[**NationalityUpdate**](NationalityUpdate.md)

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

