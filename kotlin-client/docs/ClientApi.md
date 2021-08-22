# ClientApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientAddressCreate**](ClientApi.md#clientAddressCreate) | **POST** /api/v2/clients/{client_uuid}/addresses/ | 
[**clientAddressDelete**](ClientApi.md#clientAddressDelete) | **DELETE** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
[**clientAddressPartialUpdate**](ClientApi.md#clientAddressPartialUpdate) | **PATCH** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
[**clientAddressRetrieve**](ClientApi.md#clientAddressRetrieve) | **GET** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
[**clientAddressUpdate**](ClientApi.md#clientAddressUpdate) | **PUT** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
[**clientAddressesList**](ClientApi.md#clientAddressesList) | **GET** /api/v2/clients/{client_uuid}/addresses/ | 
[**clientBankAccountCreate**](ClientApi.md#clientBankAccountCreate) | **POST** /api/v2/clients/{client_uuid}/bank-accounts/ | 
[**clientBankAccountDelete**](ClientApi.md#clientBankAccountDelete) | **DELETE** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
[**clientBankAccountPartialUpdate**](ClientApi.md#clientBankAccountPartialUpdate) | **PATCH** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
[**clientBankAccountRetrieve**](ClientApi.md#clientBankAccountRetrieve) | **GET** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
[**clientBankAccountUpdate**](ClientApi.md#clientBankAccountUpdate) | **PUT** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
[**clientBankAccountsList**](ClientApi.md#clientBankAccountsList) | **GET** /api/v2/clients/{client_uuid}/bank-accounts/ | 
[**clientCompleteOnboarding**](ClientApi.md#clientCompleteOnboarding) | **POST** /api/v2/clients/{client_uuid}/onboarding/complete/ | 
[**clientCreate**](ClientApi.md#clientCreate) | **POST** /api/v2/clients/ | 
[**clientList**](ClientApi.md#clientList) | **GET** /api/v2/clients/ | 
[**clientNationalityCreate**](ClientApi.md#clientNationalityCreate) | **POST** /api/v2/clients/{client_uuid}/nationalities/ | 
[**clientNationlitiesList**](ClientApi.md#clientNationlitiesList) | **GET** /api/v2/clients/{client_uuid}/nationalities/ | 
[**clientNationlityDelete**](ClientApi.md#clientNationlityDelete) | **DELETE** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 
[**clientNationlityPartialUpdate**](ClientApi.md#clientNationlityPartialUpdate) | **PATCH** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 
[**clientNationlityRetrieve**](ClientApi.md#clientNationlityRetrieve) | **GET** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 
[**clientNationlityUpdate**](ClientApi.md#clientNationlityUpdate) | **PUT** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 
[**clientPartialUpdate**](ClientApi.md#clientPartialUpdate) | **PATCH** /api/v2/clients/{client_uuid}/ | 
[**clientRetrieve**](ClientApi.md#clientRetrieve) | **GET** /api/v2/clients/{client_uuid}/ | 
[**clientRiskAssessmentCreate**](ClientApi.md#clientRiskAssessmentCreate) | **POST** /api/v2/clients/{client_uuid}/risk-assessments/ | 
[**clientRiskAssessmentDelete**](ClientApi.md#clientRiskAssessmentDelete) | **DELETE** /api/v2/clients/{client_uuid}/risk-assessments/{assessment_uuid}/ | 
[**clientRiskAssessmentList**](ClientApi.md#clientRiskAssessmentList) | **GET** /api/v2/clients/{client_uuid}/risk-assessments/ | 
[**clientRiskAssessmentPartialUpdate**](ClientApi.md#clientRiskAssessmentPartialUpdate) | **PATCH** /api/v2/clients/{client_uuid}/risk-assessments/{assessment_uuid}/ | 
[**clientRiskAssessmentRetrieve**](ClientApi.md#clientRiskAssessmentRetrieve) | **GET** /api/v2/clients/{client_uuid}/risk-assessments/{assessment_uuid}/ | 
[**clientTWRRPerformance**](ClientApi.md#clientTWRRPerformance) | **GET** /api/v2/clients/{client_uuid}/performance/twrr/ | 
[**clientTaxInformationCreate**](ClientApi.md#clientTaxInformationCreate) | **POST** /api/v2/clients/{client_uuid}/tax-informations/ | 
[**clientTaxInformationDelete**](ClientApi.md#clientTaxInformationDelete) | **DELETE** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 
[**clientTaxInformationList**](ClientApi.md#clientTaxInformationList) | **GET** /api/v2/clients/{client_uuid}/tax-informations/ | 
[**clientTaxInformationPartialUpdate**](ClientApi.md#clientTaxInformationPartialUpdate) | **PATCH** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 
[**clientTaxInformationRetrieve**](ClientApi.md#clientTaxInformationRetrieve) | **GET** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 
[**clientTaxInformationUpdate**](ClientApi.md#clientTaxInformationUpdate) | **PUT** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 
[**clientUpdate**](ClientApi.md#clientUpdate) | **PUT** /api/v2/clients/{client_uuid}/ | 
[**clientVerificationCreate**](ClientApi.md#clientVerificationCreate) | **POST** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
[**clientVerificationDocumentCreate**](ClientApi.md#clientVerificationDocumentCreate) | **POST** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
[**clientVerificationDocumentDelete**](ClientApi.md#clientVerificationDocumentDelete) | **DELETE** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{verification_document_uuid}/ | 
[**clientVerificationDocumentList**](ClientApi.md#clientVerificationDocumentList) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
[**clientVerificationDocumentPartialUpdate**](ClientApi.md#clientVerificationDocumentPartialUpdate) | **PATCH** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{verification_document_uuid}/ | 
[**clientVerificationDocumentRetrieve**](ClientApi.md#clientVerificationDocumentRetrieve) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{verification_document_uuid}/ | 
[**clientVerificationDocumentUpdate**](ClientApi.md#clientVerificationDocumentUpdate) | **PUT** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{verification_document_uuid}/ | 
[**clientVerificationList**](ClientApi.md#clientVerificationList) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
[**clientVerificationRetrieve**](ClientApi.md#clientVerificationRetrieve) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/{verification_uuid}/ | 


<a name="clientAddressCreate"></a>
# **clientAddressCreate**
> AddressCreate clientAddressCreate(clientUuid, addressCreate)



Create an address for a client

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val addressCreate : AddressCreate =  // AddressCreate | 
try {
    val result : AddressCreate = apiInstance.clientAddressCreate(clientUuid, addressCreate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientAddressCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientAddressCreate")
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

val apiInstance = ClientApi()
val addressUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    apiInstance.clientAddressDelete(addressUuid, clientUuid)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientAddressDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientAddressDelete")
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

val apiInstance = ClientApi()
val addressUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val patchedAddressUpdate : PatchedAddressUpdate =  // PatchedAddressUpdate | 
try {
    val result : AddressUpdate = apiInstance.clientAddressPartialUpdate(addressUuid, clientUuid, patchedAddressUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientAddressPartialUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientAddressPartialUpdate")
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

val apiInstance = ClientApi()
val addressUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : AddressList = apiInstance.clientAddressRetrieve(addressUuid, clientUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientAddressRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientAddressRetrieve")
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

val apiInstance = ClientApi()
val addressUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val addressUpdate : AddressUpdate =  // AddressUpdate | 
try {
    val result : AddressUpdate = apiInstance.clientAddressUpdate(addressUuid, clientUuid, addressUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientAddressUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientAddressUpdate")
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

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedAddressListList = apiInstance.clientAddressesList(clientUuid, limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientAddressesList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientAddressesList")
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

<a name="clientBankAccountCreate"></a>
# **clientBankAccountCreate**
> BankAccountCreateUpdate clientBankAccountCreate(clientUuid, bankAccountCreateUpdate)



Create a bank account for a client

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val bankAccountCreateUpdate : BankAccountCreateUpdate =  // BankAccountCreateUpdate | 
try {
    val result : BankAccountCreateUpdate = apiInstance.clientBankAccountCreate(clientUuid, bankAccountCreateUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientBankAccountCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientBankAccountCreate")
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

val apiInstance = ClientApi()
val bankAccountUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    apiInstance.clientBankAccountDelete(bankAccountUuid, clientUuid)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientBankAccountDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientBankAccountDelete")
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

val apiInstance = ClientApi()
val bankAccountUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val patchedBankAccountCreateUpdate : PatchedBankAccountCreateUpdate =  // PatchedBankAccountCreateUpdate | 
try {
    val result : BankAccountCreateUpdate = apiInstance.clientBankAccountPartialUpdate(bankAccountUuid, clientUuid, patchedBankAccountCreateUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientBankAccountPartialUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientBankAccountPartialUpdate")
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

val apiInstance = ClientApi()
val bankAccountUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : BankAccountList = apiInstance.clientBankAccountRetrieve(bankAccountUuid, clientUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientBankAccountRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientBankAccountRetrieve")
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

val apiInstance = ClientApi()
val bankAccountUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val bankAccountCreateUpdate : BankAccountCreateUpdate =  // BankAccountCreateUpdate | 
try {
    val result : BankAccountCreateUpdate = apiInstance.clientBankAccountUpdate(bankAccountUuid, clientUuid, bankAccountCreateUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientBankAccountUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientBankAccountUpdate")
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

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedBankAccountListList = apiInstance.clientBankAccountsList(clientUuid, limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientBankAccountsList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientBankAccountsList")
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

<a name="clientCompleteOnboarding"></a>
# **clientCompleteOnboarding**
> ClientDetail clientCompleteOnboarding(clientUuid, clientDetail)



Complete onboarding for a client

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val clientDetail : ClientDetail =  // ClientDetail | 
try {
    val result : ClientDetail = apiInstance.clientCompleteOnboarding(clientUuid, clientDetail)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientCompleteOnboarding")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientCompleteOnboarding")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **clientDetail** | [**ClientDetail**](ClientDetail.md)|  |

### Return type

[**ClientDetail**](ClientDetail.md)

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

<a name="clientCreate"></a>
# **clientCreate**
> ClientCreate clientCreate(clientCreate)



Create a client

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ClientApi()
val clientCreate : ClientCreate =  // ClientCreate | 
try {
    val result : ClientCreate = apiInstance.clientCreate(clientCreate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientCreate** | [**ClientCreate**](ClientCreate.md)|  |

### Return type

[**ClientCreate**](ClientCreate.md)

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

<a name="clientList"></a>
# **clientList**
> PaginatedClientDetailList clientList(externalCustodianId, extraData, limit, offset, ordering, search, status)



List client for a Relationship manager

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ClientApi()
val externalCustodianId : kotlin.String = externalCustodianId_example // kotlin.String | 
val extraData : kotlin.collections.Map<kotlin.String, kotlin.Any> = Object // kotlin.collections.Map<kotlin.String, kotlin.Any> | Additional client attributes for the specific portal
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
val ordering : kotlin.collections.List<kotlin.String> =  // kotlin.collections.List<kotlin.String> | Ordering
val search : kotlin.String = search_example // kotlin.String | A search term.
val status : kotlin.String = status_example // kotlin.String | 
try {
    val result : PaginatedClientDetailList = apiInstance.clientList(externalCustodianId, extraData, limit, offset, ordering, search, status)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalCustodianId** | **kotlin.String**|  | [optional]
 **extraData** | [**kotlin.collections.Map&lt;kotlin.String, kotlin.Any&gt;**](kotlin.Any.md)| Additional client attributes for the specific portal | [optional]
 **limit** | **kotlin.Int**| Number of results to return per page. | [optional]
 **offset** | **kotlin.Int**| The initial index from which to return the results. | [optional]
 **ordering** | [**kotlin.collections.List&lt;kotlin.String&gt;**](kotlin.String.md)| Ordering | [optional] [enum: -activated, -created, -first_name, -last_name, -risk_level, -status, activated, created, first_name, last_name, risk_level, status]
 **search** | **kotlin.String**| A search term. | [optional]
 **status** | **kotlin.String**|  | [optional] [enum: ACTIVE, CUSTODIAN_PENDING, INACTIVE, KYC_PENDING, ONBOARDING, PENDING]

### Return type

[**PaginatedClientDetailList**](PaginatedClientDetailList.md)

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

<a name="clientNationalityCreate"></a>
# **clientNationalityCreate**
> NationalityCreate clientNationalityCreate(clientUuid, nationalityCreate)



Create nationality for a client

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val nationalityCreate : NationalityCreate =  // NationalityCreate | 
try {
    val result : NationalityCreate = apiInstance.clientNationalityCreate(clientUuid, nationalityCreate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientNationalityCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientNationalityCreate")
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

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedNationalityListList = apiInstance.clientNationlitiesList(clientUuid, limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientNationlitiesList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientNationlitiesList")
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

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val nationalityUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    apiInstance.clientNationlityDelete(clientUuid, nationalityUuid)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientNationlityDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientNationlityDelete")
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

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val nationalityUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val patchedNationalityUpdate : PatchedNationalityUpdate =  // PatchedNationalityUpdate | 
try {
    val result : NationalityUpdate = apiInstance.clientNationlityPartialUpdate(clientUuid, nationalityUuid, patchedNationalityUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientNationlityPartialUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientNationlityPartialUpdate")
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

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val nationalityUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : NationalityList = apiInstance.clientNationlityRetrieve(clientUuid, nationalityUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientNationlityRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientNationlityRetrieve")
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

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val nationalityUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val nationalityUpdate : NationalityUpdate =  // NationalityUpdate | 
try {
    val result : NationalityUpdate = apiInstance.clientNationlityUpdate(clientUuid, nationalityUuid, nationalityUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientNationlityUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientNationlityUpdate")
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

<a name="clientPartialUpdate"></a>
# **clientPartialUpdate**
> ApplicationClientUpdate clientPartialUpdate(clientUuid, patchedApplicationClientUpdate)



Partial Update a client

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val patchedApplicationClientUpdate : PatchedApplicationClientUpdate =  // PatchedApplicationClientUpdate | 
try {
    val result : ApplicationClientUpdate = apiInstance.clientPartialUpdate(clientUuid, patchedApplicationClientUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientPartialUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientPartialUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **patchedApplicationClientUpdate** | [**PatchedApplicationClientUpdate**](PatchedApplicationClientUpdate.md)|  | [optional]

### Return type

[**ApplicationClientUpdate**](ApplicationClientUpdate.md)

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

<a name="clientRetrieve"></a>
# **clientRetrieve**
> ClientDetail clientRetrieve(clientUuid)



Retrieve a client

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : ClientDetail = apiInstance.clientRetrieve(clientUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |

### Return type

[**ClientDetail**](ClientDetail.md)

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

<a name="clientRiskAssessmentCreate"></a>
# **clientRiskAssessmentCreate**
> Assessment clientRiskAssessmentCreate(clientUuid, assessment)



Create a risk assessment for a client

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val assessment : Assessment =  // Assessment | 
try {
    val result : Assessment = apiInstance.clientRiskAssessmentCreate(clientUuid, assessment)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientRiskAssessmentCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientRiskAssessmentCreate")
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

val apiInstance = ClientApi()
val assessmentUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    apiInstance.clientRiskAssessmentDelete(assessmentUuid, clientUuid)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientRiskAssessmentDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientRiskAssessmentDelete")
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

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
val status : kotlin.collections.List<kotlin.String> =  // kotlin.collections.List<kotlin.String> | 
try {
    val result : PaginatedAssessmentList = apiInstance.clientRiskAssessmentList(clientUuid, limit, offset, status)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientRiskAssessmentList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientRiskAssessmentList")
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

val apiInstance = ClientApi()
val assessmentUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val patchedAssessment : PatchedAssessment =  // PatchedAssessment | 
try {
    val result : Assessment = apiInstance.clientRiskAssessmentPartialUpdate(assessmentUuid, clientUuid, patchedAssessment)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientRiskAssessmentPartialUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientRiskAssessmentPartialUpdate")
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

val apiInstance = ClientApi()
val assessmentUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : Assessment = apiInstance.clientRiskAssessmentRetrieve(assessmentUuid, clientUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientRiskAssessmentRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientRiskAssessmentRetrieve")
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

<a name="clientTWRRPerformance"></a>
# **clientTWRRPerformance**
> ClientPerformance clientTWRRPerformance(clientUuid)



Calculate TWRR Performance for client

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : ClientPerformance = apiInstance.clientTWRRPerformance(clientUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientTWRRPerformance")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientTWRRPerformance")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |

### Return type

[**ClientPerformance**](ClientPerformance.md)

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

<a name="clientTaxInformationCreate"></a>
# **clientTaxInformationCreate**
> TaxInformationCreateUpdate clientTaxInformationCreate(clientUuid, taxInformationCreateUpdate)



Create a tax inforation for a client

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val taxInformationCreateUpdate : TaxInformationCreateUpdate =  // TaxInformationCreateUpdate | 
try {
    val result : TaxInformationCreateUpdate = apiInstance.clientTaxInformationCreate(clientUuid, taxInformationCreateUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientTaxInformationCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientTaxInformationCreate")
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
> clientTaxInformationDelete(clientUuid, taxInformationUuid)



Delete a client tax inforation

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val taxInformationUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    apiInstance.clientTaxInformationDelete(clientUuid, taxInformationUuid)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientTaxInformationDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientTaxInformationDelete")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **taxInformationUuid** | [**java.util.UUID**](.md)|  |

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

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedTaxInformationListList = apiInstance.clientTaxInformationList(clientUuid, limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientTaxInformationList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientTaxInformationList")
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
> TaxInformationCreateUpdate clientTaxInformationPartialUpdate(clientUuid, taxInformationUuid, patchedTaxInformationCreateUpdate)



Partial Update a client tax inforation

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val taxInformationUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val patchedTaxInformationCreateUpdate : PatchedTaxInformationCreateUpdate =  // PatchedTaxInformationCreateUpdate | 
try {
    val result : TaxInformationCreateUpdate = apiInstance.clientTaxInformationPartialUpdate(clientUuid, taxInformationUuid, patchedTaxInformationCreateUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientTaxInformationPartialUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientTaxInformationPartialUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **taxInformationUuid** | [**java.util.UUID**](.md)|  |
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
> TaxInformationList clientTaxInformationRetrieve(clientUuid, taxInformationUuid)



Retrieve a client tax inforation

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val taxInformationUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : TaxInformationList = apiInstance.clientTaxInformationRetrieve(clientUuid, taxInformationUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientTaxInformationRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientTaxInformationRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **taxInformationUuid** | [**java.util.UUID**](.md)|  |

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
> TaxInformationCreateUpdate clientTaxInformationUpdate(clientUuid, taxInformationUuid, taxInformationCreateUpdate)



Update a client tax inforation

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val taxInformationUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val taxInformationCreateUpdate : TaxInformationCreateUpdate =  // TaxInformationCreateUpdate | 
try {
    val result : TaxInformationCreateUpdate = apiInstance.clientTaxInformationUpdate(clientUuid, taxInformationUuid, taxInformationCreateUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientTaxInformationUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientTaxInformationUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **taxInformationUuid** | [**java.util.UUID**](.md)|  |
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

<a name="clientUpdate"></a>
# **clientUpdate**
> ApplicationClientUpdate clientUpdate(clientUuid, applicationClientUpdate)



Update a client

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val applicationClientUpdate : ApplicationClientUpdate =  // ApplicationClientUpdate | 
try {
    val result : ApplicationClientUpdate = apiInstance.clientUpdate(clientUuid, applicationClientUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **applicationClientUpdate** | [**ApplicationClientUpdate**](ApplicationClientUpdate.md)|  |

### Return type

[**ApplicationClientUpdate**](ApplicationClientUpdate.md)

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

<a name="clientVerificationCreate"></a>
# **clientVerificationCreate**
> VerificationCreate clientVerificationCreate(clientUuid, verifyTypeCode, verificationCreate)



Create a verification for a client

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val verifyTypeCode : kotlin.String = verifyTypeCode_example // kotlin.String | 
val verificationCreate : VerificationCreate =  // VerificationCreate | 
try {
    val result : VerificationCreate = apiInstance.clientVerificationCreate(clientUuid, verifyTypeCode, verificationCreate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientVerificationCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientVerificationCreate")
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

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val verifyTypeCode : kotlin.String = verifyTypeCode_example // kotlin.String | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val verifyType : VerifyTypeEnum =  // VerifyTypeEnum | 
val created : java.time.OffsetDateTime = 2013-10-20T19:20:30+01:00 // java.time.OffsetDateTime | 
val updated : java.time.OffsetDateTime = 2013-10-20T19:20:30+01:00 // java.time.OffsetDateTime | 
val verificationDocuments : kotlin.collections.List<VerificationDocumentCreate> =  // kotlin.collections.List<VerificationDocumentCreate> | 
val status : StatusBd7Enum =  // StatusBd7Enum | 
val result : ResultEnum =  // ResultEnum | 
try {
    val result : VerificationWithType = apiInstance.clientVerificationDocumentCreate(clientUuid, verifyTypeCode, uuid, verifyType, created, updated, verificationDocuments, status, result)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientVerificationDocumentCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientVerificationDocumentCreate")
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
 **result** | [**ResultEnum**](ResultEnum.md)|  | [optional] [enum: ACCEPTED, REJECTED, DOUBT]

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
> clientVerificationDocumentDelete(clientUuid, verificationDocumentUuid, verifyTypeCode)



Delete a client verificatoin document

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val verificationDocumentUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val verifyTypeCode : kotlin.String = verifyTypeCode_example // kotlin.String | 
try {
    apiInstance.clientVerificationDocumentDelete(clientUuid, verificationDocumentUuid, verifyTypeCode)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientVerificationDocumentDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientVerificationDocumentDelete")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **verificationDocumentUuid** | [**java.util.UUID**](.md)|  |
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

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val verifyTypeCode : kotlin.String = verifyTypeCode_example // kotlin.String | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedVerificationDocumentList = apiInstance.clientVerificationDocumentList(clientUuid, verifyTypeCode, limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientVerificationDocumentList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientVerificationDocumentList")
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
> VerificationDocument clientVerificationDocumentPartialUpdate(clientUuid, verificationDocumentUuid, verifyTypeCode, uuid, documentType, documentFront, documentBack)



Partial Update a client verification document

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val verificationDocumentUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val verifyTypeCode : kotlin.String = verifyTypeCode_example // kotlin.String | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val documentType : DocumentTypeEnum =  // DocumentTypeEnum | 
val documentFront : kotlin.String = documentFront_example // kotlin.String | 
val documentBack : kotlin.String = documentBack_example // kotlin.String | 
try {
    val result : VerificationDocument = apiInstance.clientVerificationDocumentPartialUpdate(clientUuid, verificationDocumentUuid, verifyTypeCode, uuid, documentType, documentFront, documentBack)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientVerificationDocumentPartialUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientVerificationDocumentPartialUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **verificationDocumentUuid** | [**java.util.UUID**](.md)|  |
 **verifyTypeCode** | **kotlin.String**|  |
 **uuid** | [**java.util.UUID**](java.util.UUID.md)|  | [optional]
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
> VerificationDocument clientVerificationDocumentRetrieve(clientUuid, verificationDocumentUuid, verifyTypeCode)



Retrieve a client verification document

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val verificationDocumentUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val verifyTypeCode : kotlin.String = verifyTypeCode_example // kotlin.String | 
try {
    val result : VerificationDocument = apiInstance.clientVerificationDocumentRetrieve(clientUuid, verificationDocumentUuid, verifyTypeCode)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientVerificationDocumentRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientVerificationDocumentRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **verificationDocumentUuid** | [**java.util.UUID**](.md)|  |
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
> VerificationDocument clientVerificationDocumentUpdate(clientUuid, verificationDocumentUuid, verifyTypeCode, uuid, documentType, documentFront, documentBack)



Update a client verification document

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val verificationDocumentUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val verifyTypeCode : kotlin.String = verifyTypeCode_example // kotlin.String | 
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val documentType : DocumentTypeEnum =  // DocumentTypeEnum | 
val documentFront : kotlin.String = documentFront_example // kotlin.String | 
val documentBack : kotlin.String = documentBack_example // kotlin.String | 
try {
    val result : VerificationDocument = apiInstance.clientVerificationDocumentUpdate(clientUuid, verificationDocumentUuid, verifyTypeCode, uuid, documentType, documentFront, documentBack)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientVerificationDocumentUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientVerificationDocumentUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **verificationDocumentUuid** | [**java.util.UUID**](.md)|  |
 **verifyTypeCode** | **kotlin.String**|  |
 **uuid** | [**java.util.UUID**](java.util.UUID.md)|  |
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

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val verifyTypeCode : kotlin.String = verifyTypeCode_example // kotlin.String | 
val limit : kotlin.Int = 56 // kotlin.Int | Number of results to return per page.
val offset : kotlin.Int = 56 // kotlin.Int | The initial index from which to return the results.
try {
    val result : PaginatedVerificationListList = apiInstance.clientVerificationList(clientUuid, verifyTypeCode, limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientVerificationList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientVerificationList")
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
> VerificationList clientVerificationRetrieve(clientUuid, verificationUuid, verifyTypeCode)



Retrieve a client verification 

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ClientApi()
val clientUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val verificationUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
val verifyTypeCode : kotlin.String = verifyTypeCode_example // kotlin.String | 
try {
    val result : VerificationList = apiInstance.clientVerificationRetrieve(clientUuid, verificationUuid, verifyTypeCode)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClientApi#clientVerificationRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClientApi#clientVerificationRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUuid** | [**java.util.UUID**](.md)|  |
 **verificationUuid** | [**java.util.UUID**](.md)|  |
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

