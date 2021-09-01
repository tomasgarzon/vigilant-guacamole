# KycApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientVerificationCreate**](KycApi.md#clientVerificationCreate) | **POST** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
[**clientVerificationDocumentCreate**](KycApi.md#clientVerificationDocumentCreate) | **POST** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
[**clientVerificationDocumentDelete**](KycApi.md#clientVerificationDocumentDelete) | **DELETE** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
[**clientVerificationDocumentList**](KycApi.md#clientVerificationDocumentList) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
[**clientVerificationDocumentPartialUpdate**](KycApi.md#clientVerificationDocumentPartialUpdate) | **PATCH** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
[**clientVerificationDocumentRetrieve**](KycApi.md#clientVerificationDocumentRetrieve) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
[**clientVerificationDocumentUpdate**](KycApi.md#clientVerificationDocumentUpdate) | **PUT** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
[**clientVerificationList**](KycApi.md#clientVerificationList) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
[**clientVerificationRetrieve**](KycApi.md#clientVerificationRetrieve) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/{uuid}/ | 


<a name="clientVerificationCreate"></a>
# **clientVerificationCreate**
> VerificationCreate clientVerificationCreate(clientUuid, verifyTypeCode, verificationCreate)



Create a verification for a client

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.KycApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: cookieAuth
    ApiKeyAuth cookieAuth = (ApiKeyAuth) defaultClient.getAuthentication("cookieAuth");
    cookieAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //cookieAuth.setApiKeyPrefix("Token");

    // Configure HTTP bearer authorization: jwtAuth
    HttpBearerAuth jwtAuth = (HttpBearerAuth) defaultClient.getAuthentication("jwtAuth");
    jwtAuth.setBearerToken("BEARER TOKEN");

    // Configure API key authorization: tokenAuth
    ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
    tokenAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //tokenAuth.setApiKeyPrefix("Token");

    KycApi apiInstance = new KycApi(defaultClient);
    UUID clientUuid = new UUID(); // UUID | 
    String verifyTypeCode = "verifyTypeCode_example"; // String | 
    VerificationCreate verificationCreate = new VerificationCreate(); // VerificationCreate | 
    try {
      VerificationCreate result = apiInstance.clientVerificationCreate(clientUuid, verifyTypeCode, verificationCreate);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling KycApi#clientVerificationCreate");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md)|  |
 **verifyTypeCode** | **String**|  |
 **verificationCreate** | [**VerificationCreate**](VerificationCreate.md)|  |

### Return type

[**VerificationCreate**](VerificationCreate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

<a name="clientVerificationDocumentCreate"></a>
# **clientVerificationDocumentCreate**
> VerificationWithType clientVerificationDocumentCreate(clientUuid, verifyTypeCode, uuid, verifyType, created, updated, verificationDocuments, status, result)



Create a verification Document for a client

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.KycApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: cookieAuth
    ApiKeyAuth cookieAuth = (ApiKeyAuth) defaultClient.getAuthentication("cookieAuth");
    cookieAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //cookieAuth.setApiKeyPrefix("Token");

    // Configure HTTP bearer authorization: jwtAuth
    HttpBearerAuth jwtAuth = (HttpBearerAuth) defaultClient.getAuthentication("jwtAuth");
    jwtAuth.setBearerToken("BEARER TOKEN");

    // Configure API key authorization: tokenAuth
    ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
    tokenAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //tokenAuth.setApiKeyPrefix("Token");

    KycApi apiInstance = new KycApi(defaultClient);
    UUID clientUuid = new UUID(); // UUID | 
    String verifyTypeCode = "verifyTypeCode_example"; // String | 
    UUID uuid = new UUID(); // UUID | 
    VerifyTypeEnum verifyType = VerifyTypeEnum.fromValue("IDENTITY"); // VerifyTypeEnum | 
    OffsetDateTime created = OffsetDateTime.now(); // OffsetDateTime | 
    OffsetDateTime updated = OffsetDateTime.now(); // OffsetDateTime | 
    List<VerificationDocumentCreate> verificationDocuments = new VerificationDocumentCreate(); // List<VerificationDocumentCreate> | 
    StatusBd7Enum status = StatusBd7Enum.fromValue("PENDING"); // StatusBd7Enum | 
    OneOfResultEnumBlankEnum result = new OneOfResultEnumBlankEnum(); // OneOfResultEnumBlankEnum | 
    try {
      VerificationWithType result = apiInstance.clientVerificationDocumentCreate(clientUuid, verifyTypeCode, uuid, verifyType, created, updated, verificationDocuments, status, result);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling KycApi#clientVerificationDocumentCreate");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md)|  |
 **verifyTypeCode** | **String**|  |
 **uuid** | [**UUID**](UUID.md)|  |
 **verifyType** | [**VerifyTypeEnum**](VerifyTypeEnum.md)|  | [enum: IDENTITY, BANKING]
 **created** | **OffsetDateTime**|  |
 **updated** | **OffsetDateTime**|  |
 **verificationDocuments** | [**List&lt;VerificationDocumentCreate&gt;**](VerificationDocumentCreate.md)|  |
 **status** | [**StatusBd7Enum**](StatusBd7Enum.md)|  | [optional] [enum: PENDING, PROCESSING, COMPLETED, PAUSED, REOPENED, OTHER, ERROR, CANCELLED, OUTDATED]
 **result** | [**OneOfResultEnumBlankEnum**](OneOfResultEnumBlankEnum.md)|  | [optional]

### Return type

[**VerificationWithType**](VerificationWithType.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

<a name="clientVerificationDocumentDelete"></a>
# **clientVerificationDocumentDelete**
> clientVerificationDocumentDelete(clientUuid, uuid, verifyTypeCode)



Delete a client verificatoin document

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.KycApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: cookieAuth
    ApiKeyAuth cookieAuth = (ApiKeyAuth) defaultClient.getAuthentication("cookieAuth");
    cookieAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //cookieAuth.setApiKeyPrefix("Token");

    // Configure HTTP bearer authorization: jwtAuth
    HttpBearerAuth jwtAuth = (HttpBearerAuth) defaultClient.getAuthentication("jwtAuth");
    jwtAuth.setBearerToken("BEARER TOKEN");

    // Configure API key authorization: tokenAuth
    ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
    tokenAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //tokenAuth.setApiKeyPrefix("Token");

    KycApi apiInstance = new KycApi(defaultClient);
    UUID clientUuid = new UUID(); // UUID | 
    UUID uuid = new UUID(); // UUID | 
    String verifyTypeCode = "verifyTypeCode_example"; // String | 
    try {
      apiInstance.clientVerificationDocumentDelete(clientUuid, uuid, verifyTypeCode);
    } catch (ApiException e) {
      System.err.println("Exception when calling KycApi#clientVerificationDocumentDelete");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md)|  |
 **uuid** | [**UUID**](.md)|  |
 **verifyTypeCode** | **String**|  |

### Return type

null (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No response body |  -  |

<a name="clientVerificationDocumentList"></a>
# **clientVerificationDocumentList**
> PaginatedVerificationDocumentList clientVerificationDocumentList(clientUuid, verifyTypeCode, limit, offset)



List Verification Document for a client

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.KycApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: cookieAuth
    ApiKeyAuth cookieAuth = (ApiKeyAuth) defaultClient.getAuthentication("cookieAuth");
    cookieAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //cookieAuth.setApiKeyPrefix("Token");

    // Configure HTTP bearer authorization: jwtAuth
    HttpBearerAuth jwtAuth = (HttpBearerAuth) defaultClient.getAuthentication("jwtAuth");
    jwtAuth.setBearerToken("BEARER TOKEN");

    // Configure API key authorization: tokenAuth
    ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
    tokenAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //tokenAuth.setApiKeyPrefix("Token");

    KycApi apiInstance = new KycApi(defaultClient);
    UUID clientUuid = new UUID(); // UUID | 
    String verifyTypeCode = "verifyTypeCode_example"; // String | 
    Integer limit = 56; // Integer | Number of results to return per page.
    Integer offset = 56; // Integer | The initial index from which to return the results.
    try {
      PaginatedVerificationDocumentList result = apiInstance.clientVerificationDocumentList(clientUuid, verifyTypeCode, limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling KycApi#clientVerificationDocumentList");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md)|  |
 **verifyTypeCode** | **String**|  |
 **limit** | **Integer**| Number of results to return per page. | [optional]
 **offset** | **Integer**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedVerificationDocumentList**](PaginatedVerificationDocumentList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

<a name="clientVerificationDocumentPartialUpdate"></a>
# **clientVerificationDocumentPartialUpdate**
> VerificationDocument clientVerificationDocumentPartialUpdate(clientUuid, uuid, verifyTypeCode, uuid2, documentType, documentFront, documentBack)



Partial Update a client verification document

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.KycApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: cookieAuth
    ApiKeyAuth cookieAuth = (ApiKeyAuth) defaultClient.getAuthentication("cookieAuth");
    cookieAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //cookieAuth.setApiKeyPrefix("Token");

    // Configure HTTP bearer authorization: jwtAuth
    HttpBearerAuth jwtAuth = (HttpBearerAuth) defaultClient.getAuthentication("jwtAuth");
    jwtAuth.setBearerToken("BEARER TOKEN");

    // Configure API key authorization: tokenAuth
    ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
    tokenAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //tokenAuth.setApiKeyPrefix("Token");

    KycApi apiInstance = new KycApi(defaultClient);
    UUID clientUuid = new UUID(); // UUID | 
    UUID uuid = new UUID(); // UUID | 
    String verifyTypeCode = "verifyTypeCode_example"; // String | 
    UUID uuid2 = new UUID(); // UUID | 
    DocumentTypeEnum documentType = DocumentTypeEnum.fromValue("passport"); // DocumentTypeEnum | 
    String documentFront = "documentFront_example"; // String | 
    String documentBack = "documentBack_example"; // String | 
    try {
      VerificationDocument result = apiInstance.clientVerificationDocumentPartialUpdate(clientUuid, uuid, verifyTypeCode, uuid2, documentType, documentFront, documentBack);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling KycApi#clientVerificationDocumentPartialUpdate");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md)|  |
 **uuid** | [**UUID**](.md)|  |
 **verifyTypeCode** | **String**|  |
 **uuid2** | [**UUID**](UUID.md)|  | [optional]
 **documentType** | [**DocumentTypeEnum**](DocumentTypeEnum.md)|  | [optional] [enum: passport, driving_licence, national_identity_card, utility_bill, local_tax_bill, bank_statement, lease_agreement, rent_receipt, letter, certificate_marriage, decree_absolute, final_order, client_photo]
 **documentFront** | **String**|  | [optional]
 **documentBack** | **String**|  | [optional]

### Return type

[**VerificationDocument**](VerificationDocument.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

<a name="clientVerificationDocumentRetrieve"></a>
# **clientVerificationDocumentRetrieve**
> VerificationDocument clientVerificationDocumentRetrieve(clientUuid, uuid, verifyTypeCode)



Retrieve a client verification document

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.KycApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: cookieAuth
    ApiKeyAuth cookieAuth = (ApiKeyAuth) defaultClient.getAuthentication("cookieAuth");
    cookieAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //cookieAuth.setApiKeyPrefix("Token");

    // Configure HTTP bearer authorization: jwtAuth
    HttpBearerAuth jwtAuth = (HttpBearerAuth) defaultClient.getAuthentication("jwtAuth");
    jwtAuth.setBearerToken("BEARER TOKEN");

    // Configure API key authorization: tokenAuth
    ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
    tokenAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //tokenAuth.setApiKeyPrefix("Token");

    KycApi apiInstance = new KycApi(defaultClient);
    UUID clientUuid = new UUID(); // UUID | 
    UUID uuid = new UUID(); // UUID | 
    String verifyTypeCode = "verifyTypeCode_example"; // String | 
    try {
      VerificationDocument result = apiInstance.clientVerificationDocumentRetrieve(clientUuid, uuid, verifyTypeCode);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling KycApi#clientVerificationDocumentRetrieve");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md)|  |
 **uuid** | [**UUID**](.md)|  |
 **verifyTypeCode** | **String**|  |

### Return type

[**VerificationDocument**](VerificationDocument.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

<a name="clientVerificationDocumentUpdate"></a>
# **clientVerificationDocumentUpdate**
> VerificationDocument clientVerificationDocumentUpdate(clientUuid, uuid, verifyTypeCode, uuid2, documentType, documentFront, documentBack)



Update a client verification document

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.KycApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: cookieAuth
    ApiKeyAuth cookieAuth = (ApiKeyAuth) defaultClient.getAuthentication("cookieAuth");
    cookieAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //cookieAuth.setApiKeyPrefix("Token");

    // Configure HTTP bearer authorization: jwtAuth
    HttpBearerAuth jwtAuth = (HttpBearerAuth) defaultClient.getAuthentication("jwtAuth");
    jwtAuth.setBearerToken("BEARER TOKEN");

    // Configure API key authorization: tokenAuth
    ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
    tokenAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //tokenAuth.setApiKeyPrefix("Token");

    KycApi apiInstance = new KycApi(defaultClient);
    UUID clientUuid = new UUID(); // UUID | 
    UUID uuid = new UUID(); // UUID | 
    String verifyTypeCode = "verifyTypeCode_example"; // String | 
    UUID uuid2 = new UUID(); // UUID | 
    DocumentTypeEnum documentType = DocumentTypeEnum.fromValue("passport"); // DocumentTypeEnum | 
    String documentFront = "documentFront_example"; // String | 
    String documentBack = "documentBack_example"; // String | 
    try {
      VerificationDocument result = apiInstance.clientVerificationDocumentUpdate(clientUuid, uuid, verifyTypeCode, uuid2, documentType, documentFront, documentBack);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling KycApi#clientVerificationDocumentUpdate");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md)|  |
 **uuid** | [**UUID**](.md)|  |
 **verifyTypeCode** | **String**|  |
 **uuid2** | [**UUID**](UUID.md)|  |
 **documentType** | [**DocumentTypeEnum**](DocumentTypeEnum.md)|  | [enum: passport, driving_licence, national_identity_card, utility_bill, local_tax_bill, bank_statement, lease_agreement, rent_receipt, letter, certificate_marriage, decree_absolute, final_order, client_photo]
 **documentFront** | **String**|  |
 **documentBack** | **String**|  |

### Return type

[**VerificationDocument**](VerificationDocument.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

<a name="clientVerificationList"></a>
# **clientVerificationList**
> PaginatedVerificationListList clientVerificationList(clientUuid, verifyTypeCode, limit, offset)



List Verification for a client

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.KycApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: cookieAuth
    ApiKeyAuth cookieAuth = (ApiKeyAuth) defaultClient.getAuthentication("cookieAuth");
    cookieAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //cookieAuth.setApiKeyPrefix("Token");

    // Configure HTTP bearer authorization: jwtAuth
    HttpBearerAuth jwtAuth = (HttpBearerAuth) defaultClient.getAuthentication("jwtAuth");
    jwtAuth.setBearerToken("BEARER TOKEN");

    // Configure API key authorization: tokenAuth
    ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
    tokenAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //tokenAuth.setApiKeyPrefix("Token");

    KycApi apiInstance = new KycApi(defaultClient);
    UUID clientUuid = new UUID(); // UUID | 
    String verifyTypeCode = "verifyTypeCode_example"; // String | 
    Integer limit = 56; // Integer | Number of results to return per page.
    Integer offset = 56; // Integer | The initial index from which to return the results.
    try {
      PaginatedVerificationListList result = apiInstance.clientVerificationList(clientUuid, verifyTypeCode, limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling KycApi#clientVerificationList");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md)|  |
 **verifyTypeCode** | **String**|  |
 **limit** | **Integer**| Number of results to return per page. | [optional]
 **offset** | **Integer**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedVerificationListList**](PaginatedVerificationListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

<a name="clientVerificationRetrieve"></a>
# **clientVerificationRetrieve**
> VerificationList clientVerificationRetrieve(clientUuid, uuid, verifyTypeCode)



Retrieve a client verification 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.KycApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: cookieAuth
    ApiKeyAuth cookieAuth = (ApiKeyAuth) defaultClient.getAuthentication("cookieAuth");
    cookieAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //cookieAuth.setApiKeyPrefix("Token");

    // Configure HTTP bearer authorization: jwtAuth
    HttpBearerAuth jwtAuth = (HttpBearerAuth) defaultClient.getAuthentication("jwtAuth");
    jwtAuth.setBearerToken("BEARER TOKEN");

    // Configure API key authorization: tokenAuth
    ApiKeyAuth tokenAuth = (ApiKeyAuth) defaultClient.getAuthentication("tokenAuth");
    tokenAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //tokenAuth.setApiKeyPrefix("Token");

    KycApi apiInstance = new KycApi(defaultClient);
    UUID clientUuid = new UUID(); // UUID | 
    UUID uuid = new UUID(); // UUID | 
    String verifyTypeCode = "verifyTypeCode_example"; // String | 
    try {
      VerificationList result = apiInstance.clientVerificationRetrieve(clientUuid, uuid, verifyTypeCode);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling KycApi#clientVerificationRetrieve");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**UUID**](.md)|  |
 **uuid** | [**UUID**](.md)|  |
 **verifyTypeCode** | **String**|  |

### Return type

[**VerificationList**](VerificationList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

