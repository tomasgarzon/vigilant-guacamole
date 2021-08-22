# BankAccountApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientBankAccountCreate**](BankAccountApi.md#clientBankAccountCreate) | **POST** /api/v2/clients/{client_uuid}/bank-accounts/ | 
[**clientBankAccountDelete**](BankAccountApi.md#clientBankAccountDelete) | **DELETE** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
[**clientBankAccountPartialUpdate**](BankAccountApi.md#clientBankAccountPartialUpdate) | **PATCH** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
[**clientBankAccountRetrieve**](BankAccountApi.md#clientBankAccountRetrieve) | **GET** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
[**clientBankAccountUpdate**](BankAccountApi.md#clientBankAccountUpdate) | **PUT** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
[**clientBankAccountsList**](BankAccountApi.md#clientBankAccountsList) | **GET** /api/v2/clients/{client_uuid}/bank-accounts/ | 


<a name="clientBankAccountCreate"></a>
# **clientBankAccountCreate**
> BankAccountCreateUpdate clientBankAccountCreate(clientUuid, bankAccountCreateUpdate)



Create a bank account for a client

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = BankAccountApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val bankAccountCreateUpdate : BankAccountCreateUpdate =  // BankAccountCreateUpdate | 
try {
    val result : BankAccountCreateUpdate = apiInstance.clientBankAccountCreate(clientUuid, bankAccountCreateUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling BankAccountApi#clientBankAccountCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling BankAccountApi#clientBankAccountCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **bankAccountCreateUpdate** | [**BankAccountCreateUpdate**](BankAccountCreateUpdate.md)|  | [optional]

### Return type

[**BankAccountCreateUpdate**](BankAccountCreateUpdate.md)

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

<a name="clientBankAccountDelete"></a>
# **clientBankAccountDelete**
> clientBankAccountDelete(bankAccountUuid, clientUuid)



Delete a client bank account

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = BankAccountApi()
val bankAccountUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    apiInstance.clientBankAccountDelete(bankAccountUuid, clientUuid)
} catch (e: ClientException) {
    println("4xx response calling BankAccountApi#clientBankAccountDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling BankAccountApi#clientBankAccountDelete")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bankAccountUuid** | [**java.util.UUID**](.md)|  |
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

<a name="clientBankAccountPartialUpdate"></a>
# **clientBankAccountPartialUpdate**
> BankAccountCreateUpdate clientBankAccountPartialUpdate(bankAccountUuid, clientUuid, patchedBankAccountCreateUpdate)



Partial Update a client bank account

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = BankAccountApi()
val bankAccountUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val patchedBankAccountCreateUpdate : PatchedBankAccountCreateUpdate =  // PatchedBankAccountCreateUpdate | 
try {
    val result : BankAccountCreateUpdate = apiInstance.clientBankAccountPartialUpdate(bankAccountUuid, clientUuid, patchedBankAccountCreateUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling BankAccountApi#clientBankAccountPartialUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling BankAccountApi#clientBankAccountPartialUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bankAccountUuid** | [**java.util.UUID**](.md)|  |
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **patchedBankAccountCreateUpdate** | [**PatchedBankAccountCreateUpdate**](PatchedBankAccountCreateUpdate.md)|  | [optional]

### Return type

[**BankAccountCreateUpdate**](BankAccountCreateUpdate.md)

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

<a name="clientBankAccountRetrieve"></a>
# **clientBankAccountRetrieve**
> BankAccountList clientBankAccountRetrieve(bankAccountUuid, clientUuid)



Retrieve a client bank account

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = BankAccountApi()
val bankAccountUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : BankAccountList = apiInstance.clientBankAccountRetrieve(bankAccountUuid, clientUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling BankAccountApi#clientBankAccountRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling BankAccountApi#clientBankAccountRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bankAccountUuid** | [**java.util.UUID**](.md)|  |
 **clientUuid** | [**java.util.UUID**](.md)|  |

### Return type

[**BankAccountList**](BankAccountList.md)

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

<a name="clientBankAccountUpdate"></a>
# **clientBankAccountUpdate**
> BankAccountCreateUpdate clientBankAccountUpdate(bankAccountUuid, clientUuid, bankAccountCreateUpdate)



Update a client bank account

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = BankAccountApi()
val bankAccountUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val bankAccountCreateUpdate : BankAccountCreateUpdate =  // BankAccountCreateUpdate | 
try {
    val result : BankAccountCreateUpdate = apiInstance.clientBankAccountUpdate(bankAccountUuid, clientUuid, bankAccountCreateUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling BankAccountApi#clientBankAccountUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling BankAccountApi#clientBankAccountUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bankAccountUuid** | [**java.util.UUID**](.md)|  |
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **bankAccountCreateUpdate** | [**BankAccountCreateUpdate**](BankAccountCreateUpdate.md)|  | [optional]

### Return type

[**BankAccountCreateUpdate**](BankAccountCreateUpdate.md)

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

<a name="clientBankAccountsList"></a>
# **clientBankAccountsList**
> PaginatedBankAccountListList clientBankAccountsList(clientUuid, limit, offset)



List Bank Account for a client

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = BankAccountApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedBankAccountListList = apiInstance.clientBankAccountsList(clientUuid, limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling BankAccountApi#clientBankAccountsList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling BankAccountApi#clientBankAccountsList")
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

[**PaginatedBankAccountListList**](PaginatedBankAccountListList.md)

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

