# KYCApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientVerificationCreate**](KYCApi.md#clientVerificationCreate) | **POST** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
[**clientVerificationDocumentCreate**](KYCApi.md#clientVerificationDocumentCreate) | **POST** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
[**clientVerificationDocumentDelete**](KYCApi.md#clientVerificationDocumentDelete) | **DELETE** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
[**clientVerificationDocumentList**](KYCApi.md#clientVerificationDocumentList) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
[**clientVerificationDocumentPartialUpdate**](KYCApi.md#clientVerificationDocumentPartialUpdate) | **PATCH** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
[**clientVerificationDocumentRetrieve**](KYCApi.md#clientVerificationDocumentRetrieve) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
[**clientVerificationDocumentUpdate**](KYCApi.md#clientVerificationDocumentUpdate) | **PUT** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
[**clientVerificationList**](KYCApi.md#clientVerificationList) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
[**clientVerificationRetrieve**](KYCApi.md#clientVerificationRetrieve) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/{uuid}/ | 


<a name="clientVerificationCreate"></a>
# **clientVerificationCreate**
> VerificationCreate clientVerificationCreate(clientUuid, verifyTypeCode, verificationCreate)



Create a verification for a client

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = KYCApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val verifyTypeCode : kotlin.String = verifyTypeCode_example // kotlin.String | 
val verificationCreate : VerificationCreate =  // VerificationCreate | 
try {
    val result : VerificationCreate = apiInstance.clientVerificationCreate(clientUuid, verifyTypeCode, verificationCreate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling KYCApi#clientVerificationCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling KYCApi#clientVerificationCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **verifyTypeCode** | **kotlin.String**|  |
 **verificationCreate** | [**VerificationCreate**](VerificationCreate.md)|  |

### Return type

[**VerificationCreate**](VerificationCreate.md)

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

<a name="clientVerificationDocumentCreate"></a>
# **clientVerificationDocumentCreate**
> VerificationWithType clientVerificationDocumentCreate(clientUuid, verifyTypeCode, uuid, verifyType, created, updated, verificationDocuments, status, result)



Create a verification Document for a client

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = KYCApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val verifyTypeCode : kotlin.String = verifyTypeCode_example // kotlin.String | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val verifyType : VerifyTypeEnum =  // VerifyTypeEnum | 
val created : java.time.OffsetDateTime = 2013-10-20T19:20:30+01:00 // java.time.OffsetDateTime | 
val updated : java.time.OffsetDateTime = 2013-10-20T19:20:30+01:00 // java.time.OffsetDateTime | 
val verificationDocuments : kotlin.collections.List<VerificationDocumentCreate> =  // kotlin.collections.List<VerificationDocumentCreate> | 
val status : StatusBd7Enum =  // StatusBd7Enum | 
val result : OneOfLessThanResultEnumCommaBlankEnumGreaterThan =  // OneOfLessThanResultEnumCommaBlankEnumGreaterThan | 
try {
    val result : VerificationWithType = apiInstance.clientVerificationDocumentCreate(clientUuid, verifyTypeCode, uuid, verifyType, created, updated, verificationDocuments, status, result)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling KYCApi#clientVerificationDocumentCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling KYCApi#clientVerificationDocumentCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **verifyTypeCode** | **kotlin.String**|  |
 **uuid** | [**java.util.UUID**](java.util.UUID.md)|  |
 **verifyType** | [**VerifyTypeEnum**](VerifyTypeEnum.md)|  | [enum: IDENTITY, BANKING]
 **created** | **java.time.OffsetDateTime**|  |
 **updated** | **java.time.OffsetDateTime**|  |
 **verificationDocuments** | [**kotlin.collections.List&lt;VerificationDocumentCreate&gt;**](VerificationDocumentCreate.md)|  |
 **status** | [**StatusBd7Enum**](StatusBd7Enum.md)|  | [optional] [enum: PENDING, PROCESSING, COMPLETED, PAUSED, REOPENED, OTHER, ERROR, CANCELLED, OUTDATED]
 **result** | [**OneOfLessThanResultEnumCommaBlankEnumGreaterThan**](OneOfLessThanResultEnumCommaBlankEnumGreaterThan.md)|  | [optional]

### Return type

[**VerificationWithType**](VerificationWithType.md)

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

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="clientVerificationDocumentDelete"></a>
# **clientVerificationDocumentDelete**
> clientVerificationDocumentDelete(clientUuid, uuid, verifyTypeCode)



Delete a client verificatoin document

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = KYCApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val verifyTypeCode : kotlin.String = verifyTypeCode_example // kotlin.String | 
try {
    apiInstance.clientVerificationDocumentDelete(clientUuid, uuid, verifyTypeCode)
} catch (e: ClientException) {
    println("4xx response calling KYCApi#clientVerificationDocumentDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling KYCApi#clientVerificationDocumentDelete")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |
 **verifyTypeCode** | **kotlin.String**|  |

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

<a name="clientVerificationDocumentList"></a>
# **clientVerificationDocumentList**
> PaginatedVerificationDocumentList clientVerificationDocumentList(clientUuid, verifyTypeCode, limit, offset)



List Verification Document for a client

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = KYCApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val verifyTypeCode : kotlin.String = verifyTypeCode_example // kotlin.String | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedVerificationDocumentList = apiInstance.clientVerificationDocumentList(clientUuid, verifyTypeCode, limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling KYCApi#clientVerificationDocumentList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling KYCApi#clientVerificationDocumentList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **verifyTypeCode** | **kotlin.String**|  |
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedVerificationDocumentList**](PaginatedVerificationDocumentList.md)

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

<a name="clientVerificationDocumentPartialUpdate"></a>
# **clientVerificationDocumentPartialUpdate**
> VerificationDocument clientVerificationDocumentPartialUpdate(clientUuid, uuid, verifyTypeCode, uuid2, documentType, documentFront, documentBack)



Partial Update a client verification document

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = KYCApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val verifyTypeCode : kotlin.String = verifyTypeCode_example // kotlin.String | 
val uuid2 : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val documentType : DocumentTypeEnum =  // DocumentTypeEnum | 
val documentFront : kotlin.String = documentFront_example // kotlin.String | 
val documentBack : kotlin.String = documentBack_example // kotlin.String | 
try {
    val result : VerificationDocument = apiInstance.clientVerificationDocumentPartialUpdate(clientUuid, uuid, verifyTypeCode, uuid2, documentType, documentFront, documentBack)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling KYCApi#clientVerificationDocumentPartialUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling KYCApi#clientVerificationDocumentPartialUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |
 **verifyTypeCode** | **kotlin.String**|  |
 **uuid2** | [**java.util.UUID**](java.util.UUID.md)|  | [optional]
 **documentType** | [**DocumentTypeEnum**](DocumentTypeEnum.md)|  | [optional] [enum: passport, driving_licence, national_identity_card, utility_bill, local_tax_bill, bank_statement, lease_agreement, rent_receipt, letter, certificate_marriage, decree_absolute, final_order, client_photo]
 **documentFront** | **kotlin.String**|  | [optional]
 **documentBack** | **kotlin.String**|  | [optional]

### Return type

[**VerificationDocument**](VerificationDocument.md)

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

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="clientVerificationDocumentRetrieve"></a>
# **clientVerificationDocumentRetrieve**
> VerificationDocument clientVerificationDocumentRetrieve(clientUuid, uuid, verifyTypeCode)



Retrieve a client verification document

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = KYCApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val verifyTypeCode : kotlin.String = verifyTypeCode_example // kotlin.String | 
try {
    val result : VerificationDocument = apiInstance.clientVerificationDocumentRetrieve(clientUuid, uuid, verifyTypeCode)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling KYCApi#clientVerificationDocumentRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling KYCApi#clientVerificationDocumentRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |
 **verifyTypeCode** | **kotlin.String**|  |

### Return type

[**VerificationDocument**](VerificationDocument.md)

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

<a name="clientVerificationDocumentUpdate"></a>
# **clientVerificationDocumentUpdate**
> VerificationDocument clientVerificationDocumentUpdate(clientUuid, uuid, verifyTypeCode, uuid2, documentType, documentFront, documentBack)



Update a client verification document

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = KYCApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val verifyTypeCode : kotlin.String = verifyTypeCode_example // kotlin.String | 
val uuid2 : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val documentType : DocumentTypeEnum =  // DocumentTypeEnum | 
val documentFront : kotlin.String = documentFront_example // kotlin.String | 
val documentBack : kotlin.String = documentBack_example // kotlin.String | 
try {
    val result : VerificationDocument = apiInstance.clientVerificationDocumentUpdate(clientUuid, uuid, verifyTypeCode, uuid2, documentType, documentFront, documentBack)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling KYCApi#clientVerificationDocumentUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling KYCApi#clientVerificationDocumentUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |
 **verifyTypeCode** | **kotlin.String**|  |
 **uuid2** | [**java.util.UUID**](java.util.UUID.md)|  |
 **documentType** | [**DocumentTypeEnum**](DocumentTypeEnum.md)|  | [enum: passport, driving_licence, national_identity_card, utility_bill, local_tax_bill, bank_statement, lease_agreement, rent_receipt, letter, certificate_marriage, decree_absolute, final_order, client_photo]
 **documentFront** | **kotlin.String**|  |
 **documentBack** | **kotlin.String**|  |

### Return type

[**VerificationDocument**](VerificationDocument.md)

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

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="clientVerificationList"></a>
# **clientVerificationList**
> PaginatedVerificationListList clientVerificationList(clientUuid, verifyTypeCode, limit, offset)



List Verification for a client

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = KYCApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val verifyTypeCode : kotlin.String = verifyTypeCode_example // kotlin.String | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedVerificationListList = apiInstance.clientVerificationList(clientUuid, verifyTypeCode, limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling KYCApi#clientVerificationList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling KYCApi#clientVerificationList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **verifyTypeCode** | **kotlin.String**|  |
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedVerificationListList**](PaginatedVerificationListList.md)

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

<a name="clientVerificationRetrieve"></a>
# **clientVerificationRetrieve**
> VerificationList clientVerificationRetrieve(clientUuid, uuid, verifyTypeCode)



Retrieve a client verification 

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = KYCApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val verifyTypeCode : kotlin.String = verifyTypeCode_example // kotlin.String | 
try {
    val result : VerificationList = apiInstance.clientVerificationRetrieve(clientUuid, uuid, verifyTypeCode)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling KYCApi#clientVerificationRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling KYCApi#clientVerificationRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **uuid** | [**java.util.UUID**](.md)|  |
 **verifyTypeCode** | **kotlin.String**|  |

### Return type

[**VerificationList**](VerificationList.md)

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

