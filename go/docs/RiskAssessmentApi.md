# \RiskAssessmentApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ClientRiskAssessmentCreate**](RiskAssessmentApi.md#ClientRiskAssessmentCreate) | **Post** /api/v2/clients/{client_uuid}/risk-assessments/ | 
[**ClientRiskAssessmentDelete**](RiskAssessmentApi.md#ClientRiskAssessmentDelete) | **Delete** /api/v2/clients/{client_uuid}/risk-assessments/{uuid}/ | 
[**ClientRiskAssessmentList**](RiskAssessmentApi.md#ClientRiskAssessmentList) | **Get** /api/v2/clients/{client_uuid}/risk-assessments/ | 
[**ClientRiskAssessmentPartialUpdate**](RiskAssessmentApi.md#ClientRiskAssessmentPartialUpdate) | **Patch** /api/v2/clients/{client_uuid}/risk-assessments/{uuid}/ | 
[**ClientRiskAssessmentRetrieve**](RiskAssessmentApi.md#ClientRiskAssessmentRetrieve) | **Get** /api/v2/clients/{client_uuid}/risk-assessments/{uuid}/ | 



## ClientRiskAssessmentCreate

> Assessment ClientRiskAssessmentCreate(ctx, clientUuid).Assessment(assessment).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "./openapi"
)

func main() {
    clientUuid := TODO // string | 
    assessment := *openapiclient.NewAssessment("Uuid_example", []openapiclient.RiskChoiceQuestionCode{*openapiclient.NewRiskChoiceQuestionCode("Code_example", time.Now(), "QuestionCode_example")}, int32(123), time.Now()) // Assessment | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RiskAssessmentApi.ClientRiskAssessmentCreate(context.Background(), clientUuid).Assessment(assessment).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RiskAssessmentApi.ClientRiskAssessmentCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientRiskAssessmentCreate`: Assessment
    fmt.Fprintf(os.Stdout, "Response from `RiskAssessmentApi.ClientRiskAssessmentCreate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientRiskAssessmentCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **assessment** | [**Assessment**](Assessment.md) |  | 

### Return type

[**Assessment**](Assessment.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClientRiskAssessmentDelete

> ClientRiskAssessmentDelete(ctx, clientUuid, uuid).Execute()





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
    clientUuid := TODO // string | 
    uuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RiskAssessmentApi.ClientRiskAssessmentDelete(context.Background(), clientUuid, uuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RiskAssessmentApi.ClientRiskAssessmentDelete``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientRiskAssessmentDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

 (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClientRiskAssessmentList

> PaginatedAssessmentList ClientRiskAssessmentList(ctx, clientUuid).Limit(limit).Offset(offset).Status(status).Execute()





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
    clientUuid := TODO // string | 
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)
    status := []string{"Status_example"} // []string |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RiskAssessmentApi.ClientRiskAssessmentList(context.Background(), clientUuid).Limit(limit).Offset(offset).Status(status).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RiskAssessmentApi.ClientRiskAssessmentList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientRiskAssessmentList`: PaginatedAssessmentList
    fmt.Fprintf(os.Stdout, "Response from `RiskAssessmentApi.ClientRiskAssessmentList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientRiskAssessmentListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 
 **status** | **[]string** |  | 

### Return type

[**PaginatedAssessmentList**](PaginatedAssessmentList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClientRiskAssessmentPartialUpdate

> Assessment ClientRiskAssessmentPartialUpdate(ctx, clientUuid, uuid).PatchedAssessment(patchedAssessment).Execute()





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
    clientUuid := TODO // string | 
    uuid := TODO // string | 
    patchedAssessment := *openapiclient.NewPatchedAssessment() // PatchedAssessment |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RiskAssessmentApi.ClientRiskAssessmentPartialUpdate(context.Background(), clientUuid, uuid).PatchedAssessment(patchedAssessment).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RiskAssessmentApi.ClientRiskAssessmentPartialUpdate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientRiskAssessmentPartialUpdate`: Assessment
    fmt.Fprintf(os.Stdout, "Response from `RiskAssessmentApi.ClientRiskAssessmentPartialUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientRiskAssessmentPartialUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **patchedAssessment** | [**PatchedAssessment**](PatchedAssessment.md) |  | 

### Return type

[**Assessment**](Assessment.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClientRiskAssessmentRetrieve

> Assessment ClientRiskAssessmentRetrieve(ctx, clientUuid, uuid).Execute()





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
    clientUuid := TODO // string | 
    uuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RiskAssessmentApi.ClientRiskAssessmentRetrieve(context.Background(), clientUuid, uuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RiskAssessmentApi.ClientRiskAssessmentRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientRiskAssessmentRetrieve`: Assessment
    fmt.Fprintf(os.Stdout, "Response from `RiskAssessmentApi.ClientRiskAssessmentRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientRiskAssessmentRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Assessment**](Assessment.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

