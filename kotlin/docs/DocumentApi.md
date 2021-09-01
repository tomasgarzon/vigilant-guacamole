# DocumentApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientDocumentCreate**](DocumentApi.md#clientDocumentCreate) | **POST** /api/v2/clients/{client_uuid}/documents/ | 
[**clientDocumentDelete**](DocumentApi.md#clientDocumentDelete) | **DELETE** /api/v2/clients/{client_uuid}/documents/{uuid}/ | 
[**clientDocumentList**](DocumentApi.md#clientDocumentList) | **GET** /api/v2/clients/{client_uuid}/documents/ | 
[**clientDocumentRetrieve**](DocumentApi.md#clientDocumentRetrieve) | **GET** /api/v2/clients/{client_uuid}/documents/{uuid}/ | 


<a name="clientDocumentCreate"></a>
# **clientDocumentCreate**
> Document clientDocumentCreate(clientUuid, uuid, name, docType, path, description)



Create a document for a client

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DocumentApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val name : kotlin.String = name_example // kotlin.String | 
val docType : DocTypeEnum =  // DocTypeEnum | 
val path : java.net.URI = path_example // java.net.URI | 
val description : kotlin.String = description_example // kotlin.String | 
try {
    val result : Document = apiInstance.clientDocumentCreate(clientUuid, uuid, name, docType, path, description)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DocumentApi#clientDocumentCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DocumentApi#clientDocumentCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](java.util.UUID.md)|  |
 **name** | **kotlin.String**|  |
 **docType** | [**DocTypeEnum**](DocTypeEnum.md)|  | [enum: ID_PERSONAL, BANK_DETAILS, EMPLOYMENT, MARITAL_STATUS, PENSION, LEGAL, TRANSFERS, MEDICAL, CONTRACT, OTHERS]
 **path** | **java.net.URI**|  |
 **description** | **kotlin.String**|  | [optional]

### Return type

[**Document**](Document.md)

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

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="clientDocumentDelete"></a>
# **clientDocumentDelete**
> clientDocumentDelete(clientUuid, uuid)



Delete a client document

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DocumentApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    apiInstance.clientDocumentDelete(clientUuid, uuid)
} catch (e: ClientException) {
    println("4xx response calling DocumentApi#clientDocumentDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DocumentApi#clientDocumentDelete")
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

<a name="clientDocumentList"></a>
# **clientDocumentList**
> PaginatedDocumentList clientDocumentList(clientUuid, client, description, docType, extraData, limit, name, offset)



List Document for a client

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DocumentApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val client : kotlin.Int = 56 // kotlin.Int | 
val description : kotlin.String = description_example // kotlin.String | 
val docType : kotlin.collections.List<kotlin.String> =  // kotlin.collections.List<kotlin.String> | 
val extraData : kotlin.collections.Map<kotlin.String, kotlin.Any> = Object // kotlin.collections.Map<kotlin.String, kotlin.Any> | Additional document attributes for the specific portal
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val name : kotlin.String = name_example // kotlin.String | 
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedDocumentList = apiInstance.clientDocumentList(clientUuid, client, description, docType, extraData, limit, name, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DocumentApi#clientDocumentList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DocumentApi#clientDocumentList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **client** | **kotlin.Int**|  | [optional]
 **description** | **kotlin.String**|  | [optional]
 **docType** | [**kotlin.collections.List&lt;kotlin.String&gt;**](kotlin.String.md)|  | [optional] [enum: BANK_DETAILS, CONTRACT, EMPLOYMENT, ID_PERSONAL, LEGAL, MARITAL_STATUS, MEDICAL, OTHERS, PENSION, TRANSFERS]
 **extraData** | [**kotlin.collections.Map&lt;kotlin.String, kotlin.Any&gt;**](kotlin.Any.md)| Additional document attributes for the specific portal | [optional]
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **name** | **kotlin.String**|  | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedDocumentList**](PaginatedDocumentList.md)

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

<a name="clientDocumentRetrieve"></a>
# **clientDocumentRetrieve**
> Document clientDocumentRetrieve(clientUuid, uuid)



Retrieve a client document

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DocumentApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : Document = apiInstance.clientDocumentRetrieve(clientUuid, uuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DocumentApi#clientDocumentRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DocumentApi#clientDocumentRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |

### Return type

[**Document**](Document.md)

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

