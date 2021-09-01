# AuthAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authGetOnboardingToken**](AuthAPI.md#authgetonboardingtoken) | **POST** /api/v2/auth/onboarding_token/ | 
[**authImpersonationToken**](AuthAPI.md#authimpersonationtoken) | **POST** /api/v2/auth/impersonation_token/ | 
[**authLogin**](AuthAPI.md#authlogin) | **POST** /api/v2/auth/login/ | 
[**authResfreshJWTToken**](AuthAPI.md#authresfreshjwttoken) | **POST** /api/v2/auth/token_renewal/ | 
[**userChangePassword**](AuthAPI.md#userchangepassword) | **PUT** /api/v2/auth/password/ | 
[**userRequestPasswordReset**](AuthAPI.md#userrequestpasswordreset) | **PATCH** /api/v2/auth/password/ | 
[**userSetPassword**](AuthAPI.md#usersetpassword) | **POST** /api/v2/auth/password/ | 


# **authGetOnboardingToken**
```swift
    open class func authGetOnboardingToken(onboardingToken: OnboardingToken, completion: @escaping (_ data: OnboardingResponse?, _ error: Error?) -> Void)
```



API View that receives a onboarding token and check its validity  Returns a JSON Web Token that can be used for authenticated requests.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let onboardingToken = OnboardingToken(email: "email_example", token: "token_example") // OnboardingToken | 

AuthAPI.authGetOnboardingToken(onboardingToken: onboardingToken) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **onboardingToken** | [**OnboardingToken**](OnboardingToken.md) |  | 

### Return type

[**OnboardingResponse**](OnboardingResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authImpersonationToken**
```swift
    open class func authImpersonationToken(impersonationToken: ImpersonationToken, completion: @escaping (_ data: ImpersionationResponse?, _ error: Error?) -> Void)
```



API View that receives an impersonation token and check its validity Returns a JSON Web Token that can be used for authenticated (and restricted) requests.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let impersonationToken = ImpersonationToken(impersonator: "impersonator_example", impersonated: "impersonated_example", token: "token_example") // ImpersonationToken | 

AuthAPI.authImpersonationToken(impersonationToken: impersonationToken) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **impersonationToken** | [**ImpersonationToken**](ImpersonationToken.md) |  | 

### Return type

[**ImpersionationResponse**](ImpersionationResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authLogin**
```swift
    open class func authLogin(jSONWebToken: JSONWebToken, completion: @escaping (_ data: JWTResponse?, _ error: Error?) -> Void)
```



API View that receives a POST with a user's username and password.  Returns a JSON Web Token that can be used for authenticated requests.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let jSONWebToken = JSONWebToken(username: "username_example", password: "password_example", captcha: "captcha_example") // JSONWebToken | 

AuthAPI.authLogin(jSONWebToken: jSONWebToken) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jSONWebToken** | [**JSONWebToken**](JSONWebToken.md) |  | 

### Return type

[**JWTResponse**](JWTResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authResfreshJWTToken**
```swift
    open class func authResfreshJWTToken(tokenRefresh: TokenRefresh, completion: @escaping (_ data: JWTRefreshResponse?, _ error: Error?) -> Void)
```



API View that receives a POST with a refresh token as token.  Returns a refreshed JSON Web Token that can be used for authenticated requests.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let tokenRefresh = TokenRefresh(refresh: "refresh_example") // TokenRefresh | 

AuthAPI.authResfreshJWTToken(tokenRefresh: tokenRefresh) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenRefresh** | [**TokenRefresh**](TokenRefresh.md) |  | 

### Return type

[**JWTRefreshResponse**](JWTRefreshResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userChangePassword**
```swift
    open class func userChangePassword(passwordUpdate: PasswordUpdate, completion: @escaping (_ data: PasswordUpdate?, _ error: Error?) -> Void)
```



Change password for an user

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let passwordUpdate = PasswordUpdate(oldPassword: "oldPassword_example", newPassword: "newPassword_example") // PasswordUpdate | 

AuthAPI.userChangePassword(passwordUpdate: passwordUpdate) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **passwordUpdate** | [**PasswordUpdate**](PasswordUpdate.md) |  | 

### Return type

[**PasswordUpdate**](PasswordUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userRequestPasswordReset**
```swift
    open class func userRequestPasswordReset(patchedPasswordResetRequest: PatchedPasswordResetRequest? = nil, completion: @escaping (_ data: PasswordResetRequest?, _ error: Error?) -> Void)
```



Request a password reset

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let patchedPasswordResetRequest = PatchedPasswordResetRequest(email: "email_example") // PatchedPasswordResetRequest |  (optional)

AuthAPI.userRequestPasswordReset(patchedPasswordResetRequest: patchedPasswordResetRequest) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedPasswordResetRequest** | [**PatchedPasswordResetRequest**](PatchedPasswordResetRequest.md) |  | [optional] 

### Return type

[**PasswordResetRequest**](PasswordResetRequest.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userSetPassword**
```swift
    open class func userSetPassword(passwordReset: PasswordReset, completion: @escaping (_ data: PasswordReset?, _ error: Error?) -> Void)
```



Set a new password for an user

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let passwordReset = PasswordReset(email: "email_example", token: "token_example", password: "password_example") // PasswordReset | 

AuthAPI.userSetPassword(passwordReset: passwordReset) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **passwordReset** | [**PasswordReset**](PasswordReset.md) |  | 

### Return type

[**PasswordReset**](PasswordReset.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

