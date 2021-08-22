# RiskAssessmentApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientRiskAssessmentCreate**](RiskAssessmentApi.md#clientRiskAssessmentCreate) | **POST** /api/v2/clients/{client_uuid}/risk-assessments/ | 
[**clientRiskAssessmentDelete**](RiskAssessmentApi.md#clientRiskAssessmentDelete) | **DELETE** /api/v2/clients/{client_uuid}/risk-assessments/{assessment_uuid}/ | 
[**clientRiskAssessmentList**](RiskAssessmentApi.md#clientRiskAssessmentList) | **GET** /api/v2/clients/{client_uuid}/risk-assessments/ | 
[**clientRiskAssessmentPartialUpdate**](RiskAssessmentApi.md#clientRiskAssessmentPartialUpdate) | **PATCH** /api/v2/clients/{client_uuid}/risk-assessments/{assessment_uuid}/ | 
[**clientRiskAssessmentRetrieve**](RiskAssessmentApi.md#clientRiskAssessmentRetrieve) | **GET** /api/v2/clients/{client_uuid}/risk-assessments/{assessment_uuid}/ | 


<a name="clientRiskAssessmentCreate"></a>
# **clientRiskAssessmentCreate**
> Assessment clientRiskAssessmentCreate(clientUuid, assessment)



Create a risk assessment for a client

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = RiskAssessmentApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val assessment : Assessment =  // Assessment | 
try {
    val result : Assessment = apiInstance.clientRiskAssessmentCreate(clientUuid, assessment)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling RiskAssessmentApi#clientRiskAssessmentCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RiskAssessmentApi#clientRiskAssessmentCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **assessment** | [**Assessment**](Assessment.md)|  |

### Return type

[**Assessment**](Assessment.md)

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

<a name="clientRiskAssessmentDelete"></a>
# **clientRiskAssessmentDelete**
> clientRiskAssessmentDelete(assessmentUuid, clientUuid)



Delete a client risk assessment

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = RiskAssessmentApi()
val assessmentUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    apiInstance.clientRiskAssessmentDelete(assessmentUuid, clientUuid)
} catch (e: ClientException) {
    println("4xx response calling RiskAssessmentApi#clientRiskAssessmentDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RiskAssessmentApi#clientRiskAssessmentDelete")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assessmentUuid** | [**java.util.UUID**](.md)|  |
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

<a name="clientRiskAssessmentList"></a>
# **clientRiskAssessmentList**
> PaginatedAssessmentList clientRiskAssessmentList(clientUuid, limit, offset, status)



List Risk Assessment for a client

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = RiskAssessmentApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
val status : kotlin.collections.List<kotlin.String> =  // kotlin.collections.List<kotlin.String> | 
try {
    val result : PaginatedAssessmentList = apiInstance.clientRiskAssessmentList(clientUuid, limit, offset, status)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling RiskAssessmentApi#clientRiskAssessmentList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RiskAssessmentApi#clientRiskAssessmentList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]
 **status** | [**kotlin.collections.List&lt;kotlin.String&gt;**](kotlin.String.md)|  | [optional] [enum: COMPLETED, OUTDATED, PENDING]

### Return type

[**PaginatedAssessmentList**](PaginatedAssessmentList.md)

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

<a name="clientRiskAssessmentPartialUpdate"></a>
# **clientRiskAssessmentPartialUpdate**
> Assessment clientRiskAssessmentPartialUpdate(assessmentUuid, clientUuid, patchedAssessment)



Partial Update a client risk assessment

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = RiskAssessmentApi()
val assessmentUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val patchedAssessment : PatchedAssessment =  // PatchedAssessment | 
try {
    val result : Assessment = apiInstance.clientRiskAssessmentPartialUpdate(assessmentUuid, clientUuid, patchedAssessment)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling RiskAssessmentApi#clientRiskAssessmentPartialUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RiskAssessmentApi#clientRiskAssessmentPartialUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assessmentUuid** | [**java.util.UUID**](.md)|  |
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **patchedAssessment** | [**PatchedAssessment**](PatchedAssessment.md)|  | [optional]

### Return type

[**Assessment**](Assessment.md)

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

<a name="clientRiskAssessmentRetrieve"></a>
# **clientRiskAssessmentRetrieve**
> Assessment clientRiskAssessmentRetrieve(assessmentUuid, clientUuid)



Retrieve a client risk assessment

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = RiskAssessmentApi()
val assessmentUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : Assessment = apiInstance.clientRiskAssessmentRetrieve(assessmentUuid, clientUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling RiskAssessmentApi#clientRiskAssessmentRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RiskAssessmentApi#clientRiskAssessmentRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assessmentUuid** | [**java.util.UUID**](.md)|  |
 **clientUuid** | [**java.util.UUID**](.md)|  |

### Return type

[**Assessment**](Assessment.md)

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

