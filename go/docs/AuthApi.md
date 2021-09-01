# \AuthApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AuthGetOnboardingToken**](AuthApi.md#AuthGetOnboardingToken) | **Post** /api/v2/auth/onboarding_token/ | 
[**AuthImpersonationToken**](AuthApi.md#AuthImpersonationToken) | **Post** /api/v2/auth/impersonation_token/ | 
[**AuthLogin**](AuthApi.md#AuthLogin) | **Post** /api/v2/auth/login/ | 
[**AuthResfreshJWTToken**](AuthApi.md#AuthResfreshJWTToken) | **Post** /api/v2/auth/token_renewal/ | 
[**UserChangePassword**](AuthApi.md#UserChangePassword) | **Put** /api/v2/auth/password/ | 
[**UserRequestPasswordReset**](AuthApi.md#UserRequestPasswordReset) | **Patch** /api/v2/auth/password/ | 
[**UserSetPassword**](AuthApi.md#UserSetPassword) | **Post** /api/v2/auth/password/ | 



## AuthGetOnboardingToken

> OnboardingResponse AuthGetOnboardingToken(ctx).OnboardingToken(onboardingToken).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    onboardingToken := *openapiclient.NewOnboardingToken("Email_example", "Token_example") // OnboardingToken | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.AuthApi.AuthGetOnboardingToken(context.Background()).OnboardingToken(onboardingToken).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AuthApi.AuthGetOnboardingToken``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `AuthGetOnboardingToken`: OnboardingResponse
    fmt.Fprintf(os.Stdout, "Response from `AuthApi.AuthGetOnboardingToken`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiAuthGetOnboardingTokenRequest struct via the builder pattern


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## AuthImpersonationToken

> ImpersionationResponse AuthImpersonationToken(ctx).ImpersonationToken(impersonationToken).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    impersonationToken := *openapiclient.NewImpersonationToken("Impersonator_example", "Impersonated_example", "Token_example") // ImpersonationToken | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.AuthApi.AuthImpersonationToken(context.Background()).ImpersonationToken(impersonationToken).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AuthApi.AuthImpersonationToken``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `AuthImpersonationToken`: ImpersionationResponse
    fmt.Fprintf(os.Stdout, "Response from `AuthApi.AuthImpersonationToken`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiAuthImpersonationTokenRequest struct via the builder pattern


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## AuthLogin

> JWTResponse AuthLogin(ctx).JSONWebToken(jSONWebToken).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    jSONWebToken := *openapiclient.NewJSONWebToken("Username_example", "Password_example") // JSONWebToken | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.AuthApi.AuthLogin(context.Background()).JSONWebToken(jSONWebToken).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AuthApi.AuthLogin``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `AuthLogin`: JWTResponse
    fmt.Fprintf(os.Stdout, "Response from `AuthApi.AuthLogin`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiAuthLoginRequest struct via the builder pattern


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## AuthResfreshJWTToken

> JWTRefreshResponse AuthResfreshJWTToken(ctx).TokenRefresh(tokenRefresh).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    tokenRefresh := *openapiclient.NewTokenRefresh("Refresh_example") // TokenRefresh | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.AuthApi.AuthResfreshJWTToken(context.Background()).TokenRefresh(tokenRefresh).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AuthApi.AuthResfreshJWTToken``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `AuthResfreshJWTToken`: JWTRefreshResponse
    fmt.Fprintf(os.Stdout, "Response from `AuthApi.AuthResfreshJWTToken`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiAuthResfreshJWTTokenRequest struct via the builder pattern


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UserChangePassword

> PasswordUpdate UserChangePassword(ctx).PasswordUpdate(passwordUpdate).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    passwordUpdate := *openapiclient.NewPasswordUpdate("NewPassword_example") // PasswordUpdate | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.AuthApi.UserChangePassword(context.Background()).PasswordUpdate(passwordUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AuthApi.UserChangePassword``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UserChangePassword`: PasswordUpdate
    fmt.Fprintf(os.Stdout, "Response from `AuthApi.UserChangePassword`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUserChangePasswordRequest struct via the builder pattern


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UserRequestPasswordReset

> PasswordResetRequest UserRequestPasswordReset(ctx).PatchedPasswordResetRequest(patchedPasswordResetRequest).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    patchedPasswordResetRequest := *openapiclient.NewPatchedPasswordResetRequest() // PatchedPasswordResetRequest |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.AuthApi.UserRequestPasswordReset(context.Background()).PatchedPasswordResetRequest(patchedPasswordResetRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AuthApi.UserRequestPasswordReset``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UserRequestPasswordReset`: PasswordResetRequest
    fmt.Fprintf(os.Stdout, "Response from `AuthApi.UserRequestPasswordReset`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUserRequestPasswordResetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedPasswordResetRequest** | [**PatchedPasswordResetRequest**](PatchedPasswordResetRequest.md) |  | 

### Return type

[**PasswordResetRequest**](PasswordResetRequest.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UserSetPassword

> PasswordReset UserSetPassword(ctx).PasswordReset(passwordReset).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    passwordReset := *openapiclient.NewPasswordReset("Email_example", "Token_example", "Password_example") // PasswordReset | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.AuthApi.UserSetPassword(context.Background()).PasswordReset(passwordReset).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AuthApi.UserSetPassword``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UserSetPassword`: PasswordReset
    fmt.Fprintf(os.Stdout, "Response from `AuthApi.UserSetPassword`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUserSetPasswordRequest struct via the builder pattern


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

