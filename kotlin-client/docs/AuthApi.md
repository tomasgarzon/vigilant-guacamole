# AuthApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authGetOnboardingToken**](AuthApi.md#authGetOnboardingToken) | **POST** /api/v2/auth/onboarding_token/ | 
[**authImpersonationToken**](AuthApi.md#authImpersonationToken) | **POST** /api/v2/auth/impersonation_token/ | 
[**authLogin**](AuthApi.md#authLogin) | **POST** /api/v2/auth/login/ | 
[**authResfreshJWTToken**](AuthApi.md#authResfreshJWTToken) | **POST** /api/v2/auth/token_renewal/ | 
[**userChangePassword**](AuthApi.md#userChangePassword) | **PUT** /api/v2/auth/password/ | 
[**userRequestPasswordReset**](AuthApi.md#userRequestPasswordReset) | **PATCH** /api/v2/auth/password/ | 
[**userSetPassword**](AuthApi.md#userSetPassword) | **POST** /api/v2/auth/password/ | 


<a name="authGetOnboardingToken"></a>
# **authGetOnboardingToken**
> OnboardingResponse authGetOnboardingToken(onboardingToken)



API View that receives a onboarding token and check its validity  Returns a JSON Web Token that can be used for authenticated requests.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AuthApi()
val onboardingToken : OnboardingToken =  // OnboardingToken | 
try {
    val result : OnboardingResponse = apiInstance.authGetOnboardingToken(onboardingToken)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AuthApi#authGetOnboardingToken")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AuthApi#authGetOnboardingToken")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **onboardingToken** | [**OnboardingToken**](OnboardingToken.md)|  |

### Return type

[**OnboardingResponse**](OnboardingResponse.md)

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

<a name="authImpersonationToken"></a>
# **authImpersonationToken**
> ImpersionationResponse authImpersonationToken(impersonationToken)



API View that receives an impersonation token and check its validity Returns a JSON Web Token that can be used for authenticated (and restricted) requests.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AuthApi()
val impersonationToken : ImpersonationToken =  // ImpersonationToken | 
try {
    val result : ImpersionationResponse = apiInstance.authImpersonationToken(impersonationToken)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AuthApi#authImpersonationToken")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AuthApi#authImpersonationToken")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **impersonationToken** | [**ImpersonationToken**](ImpersonationToken.md)|  |

### Return type

[**ImpersionationResponse**](ImpersionationResponse.md)

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

<a name="authLogin"></a>
# **authLogin**
> JWTResponse authLogin(jsONWebToken)



API View that receives a POST with a user&#39;s username and password.  Returns a JSON Web Token that can be used for authenticated requests.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AuthApi()
val jsONWebToken : JSONWebToken =  // JSONWebToken | 
try {
    val result : JWTResponse = apiInstance.authLogin(jsONWebToken)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AuthApi#authLogin")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AuthApi#authLogin")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jsONWebToken** | [**JSONWebToken**](JSONWebToken.md)|  |

### Return type

[**JWTResponse**](JWTResponse.md)

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

<a name="authResfreshJWTToken"></a>
# **authResfreshJWTToken**
> JWTRefreshResponse authResfreshJWTToken(tokenRefresh)



API View that receives a POST with a refresh token as token.  Returns a refreshed JSON Web Token that can be used for authenticated requests.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AuthApi()
val tokenRefresh : TokenRefresh =  // TokenRefresh | 
try {
    val result : JWTRefreshResponse = apiInstance.authResfreshJWTToken(tokenRefresh)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AuthApi#authResfreshJWTToken")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AuthApi#authResfreshJWTToken")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenRefresh** | [**TokenRefresh**](TokenRefresh.md)|  |

### Return type

[**JWTRefreshResponse**](JWTRefreshResponse.md)

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

<a name="userChangePassword"></a>
# **userChangePassword**
> PasswordUpdate userChangePassword(passwordUpdate)



Change password for an user

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AuthApi()
val passwordUpdate : PasswordUpdate =  // PasswordUpdate | 
try {
    val result : PasswordUpdate = apiInstance.userChangePassword(passwordUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AuthApi#userChangePassword")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AuthApi#userChangePassword")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **passwordUpdate** | [**PasswordUpdate**](PasswordUpdate.md)|  |

### Return type

[**PasswordUpdate**](PasswordUpdate.md)

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

<a name="userRequestPasswordReset"></a>
# **userRequestPasswordReset**
> PasswordResetRequest userRequestPasswordReset(patchedPasswordResetRequest)



Request a password reset

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AuthApi()
val patchedPasswordResetRequest : PatchedPasswordResetRequest =  // PatchedPasswordResetRequest | 
try {
    val result : PasswordResetRequest = apiInstance.userRequestPasswordReset(patchedPasswordResetRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AuthApi#userRequestPasswordReset")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AuthApi#userRequestPasswordReset")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedPasswordResetRequest** | [**PatchedPasswordResetRequest**](PatchedPasswordResetRequest.md)|  | [optional]

### Return type

[**PasswordResetRequest**](PasswordResetRequest.md)

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

<a name="userSetPassword"></a>
# **userSetPassword**
> PasswordReset userSetPassword(passwordReset)



Set a new password for an user

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AuthApi()
val passwordReset : PasswordReset =  // PasswordReset | 
try {
    val result : PasswordReset = apiInstance.userSetPassword(passwordReset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AuthApi#userSetPassword")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AuthApi#userSetPassword")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **passwordReset** | [**PasswordReset**](PasswordReset.md)|  |

### Return type

[**PasswordReset**](PasswordReset.md)

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

