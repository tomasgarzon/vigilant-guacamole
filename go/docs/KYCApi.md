# \KYCApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ClientVerificationCreate**](KYCApi.md#ClientVerificationCreate) | **Post** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
[**ClientVerificationDocumentCreate**](KYCApi.md#ClientVerificationDocumentCreate) | **Post** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
[**ClientVerificationDocumentDelete**](KYCApi.md#ClientVerificationDocumentDelete) | **Delete** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
[**ClientVerificationDocumentList**](KYCApi.md#ClientVerificationDocumentList) | **Get** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
[**ClientVerificationDocumentPartialUpdate**](KYCApi.md#ClientVerificationDocumentPartialUpdate) | **Patch** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
[**ClientVerificationDocumentRetrieve**](KYCApi.md#ClientVerificationDocumentRetrieve) | **Get** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
[**ClientVerificationDocumentUpdate**](KYCApi.md#ClientVerificationDocumentUpdate) | **Put** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
[**ClientVerificationList**](KYCApi.md#ClientVerificationList) | **Get** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
[**ClientVerificationRetrieve**](KYCApi.md#ClientVerificationRetrieve) | **Get** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/{uuid}/ | 



## ClientVerificationCreate

> VerificationCreate ClientVerificationCreate(ctx, clientUuid, verifyTypeCode).VerificationCreate(verificationCreate).Execute()





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
    verifyTypeCode := "verifyTypeCode_example" // string | 
    verificationCreate := *openapiclient.NewVerificationCreate("Uuid_example", openapiclient.VerifyTypeEnum("IDENTITY"), time.Now(), time.Now()) // VerificationCreate | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.KYCApi.ClientVerificationCreate(context.Background(), clientUuid, verifyTypeCode).VerificationCreate(verificationCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `KYCApi.ClientVerificationCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientVerificationCreate`: VerificationCreate
    fmt.Fprintf(os.Stdout, "Response from `KYCApi.ClientVerificationCreate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 
**verifyTypeCode** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientVerificationCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **verificationCreate** | [**VerificationCreate**](VerificationCreate.md) |  | 

### Return type

[**VerificationCreate**](VerificationCreate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClientVerificationDocumentCreate

> VerificationWithType ClientVerificationDocumentCreate(ctx, clientUuid, verifyTypeCode).Uuid(uuid).VerifyType(verifyType).Created(created).Updated(updated).VerificationDocuments(verificationDocuments).Status(status).Result(result).Execute()





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
    verifyTypeCode := "verifyTypeCode_example" // string | 
    uuid := TODO // string | 
    verifyType := openapiclient.VerifyTypeEnum("IDENTITY") // VerifyTypeEnum | 
    created := time.Now() // time.Time | 
    updated := time.Now() // time.Time | 
    verificationDocuments := []VerificationDocumentCreate{"TODO"} // []VerificationDocumentCreate | 
    status := openapiclient.StatusBd7Enum("PENDING") // StatusBd7Enum |  (optional)
    result := TODO // OneOfResultEnumBlankEnum |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.KYCApi.ClientVerificationDocumentCreate(context.Background(), clientUuid, verifyTypeCode).Uuid(uuid).VerifyType(verifyType).Created(created).Updated(updated).VerificationDocuments(verificationDocuments).Status(status).Result(result).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `KYCApi.ClientVerificationDocumentCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientVerificationDocumentCreate`: VerificationWithType
    fmt.Fprintf(os.Stdout, "Response from `KYCApi.ClientVerificationDocumentCreate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 
**verifyTypeCode** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientVerificationDocumentCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **uuid** | [**string**](string.md) |  | 
 **verifyType** | [**VerifyTypeEnum**](VerifyTypeEnum.md) |  | 
 **created** | **time.Time** |  | 
 **updated** | **time.Time** |  | 
 **verificationDocuments** | [**[]VerificationDocumentCreate**](VerificationDocumentCreate.md) |  | 
 **status** | [**StatusBd7Enum**](StatusBd7Enum.md) |  | 
 **result** | [**OneOfResultEnumBlankEnum**](oneOf&lt;ResultEnum,BlankEnum&gt;.md) |  | 

### Return type

[**VerificationWithType**](VerificationWithType.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClientVerificationDocumentDelete

> ClientVerificationDocumentDelete(ctx, clientUuid, uuid, verifyTypeCode).Execute()





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
    verifyTypeCode := "verifyTypeCode_example" // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.KYCApi.ClientVerificationDocumentDelete(context.Background(), clientUuid, uuid, verifyTypeCode).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `KYCApi.ClientVerificationDocumentDelete``: %v\n", err)
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
**verifyTypeCode** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientVerificationDocumentDeleteRequest struct via the builder pattern


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


## ClientVerificationDocumentList

> PaginatedVerificationDocumentList ClientVerificationDocumentList(ctx, clientUuid, verifyTypeCode).Limit(limit).Offset(offset).Execute()





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
    verifyTypeCode := "verifyTypeCode_example" // string | 
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.KYCApi.ClientVerificationDocumentList(context.Background(), clientUuid, verifyTypeCode).Limit(limit).Offset(offset).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `KYCApi.ClientVerificationDocumentList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientVerificationDocumentList`: PaginatedVerificationDocumentList
    fmt.Fprintf(os.Stdout, "Response from `KYCApi.ClientVerificationDocumentList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 
**verifyTypeCode** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientVerificationDocumentListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 

### Return type

[**PaginatedVerificationDocumentList**](PaginatedVerificationDocumentList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClientVerificationDocumentPartialUpdate

> VerificationDocument ClientVerificationDocumentPartialUpdate(ctx, clientUuid, uuid, verifyTypeCode).Uuid2(uuid2).DocumentType(documentType).DocumentFront(documentFront).DocumentBack(documentBack).Execute()





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
    verifyTypeCode := "verifyTypeCode_example" // string | 
    uuid2 := TODO // string |  (optional)
    documentType := openapiclient.DocumentTypeEnum("passport") // DocumentTypeEnum |  (optional)
    documentFront := "documentFront_example" // string |  (optional)
    documentBack := "documentBack_example" // string |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.KYCApi.ClientVerificationDocumentPartialUpdate(context.Background(), clientUuid, uuid, verifyTypeCode).Uuid2(uuid2).DocumentType(documentType).DocumentFront(documentFront).DocumentBack(documentBack).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `KYCApi.ClientVerificationDocumentPartialUpdate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientVerificationDocumentPartialUpdate`: VerificationDocument
    fmt.Fprintf(os.Stdout, "Response from `KYCApi.ClientVerificationDocumentPartialUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 
**verifyTypeCode** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientVerificationDocumentPartialUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **uuid2** | [**string**](string.md) |  | 
 **documentType** | [**DocumentTypeEnum**](DocumentTypeEnum.md) |  | 
 **documentFront** | **string** |  | 
 **documentBack** | **string** |  | 

### Return type

[**VerificationDocument**](VerificationDocument.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClientVerificationDocumentRetrieve

> VerificationDocument ClientVerificationDocumentRetrieve(ctx, clientUuid, uuid, verifyTypeCode).Execute()





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
    verifyTypeCode := "verifyTypeCode_example" // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.KYCApi.ClientVerificationDocumentRetrieve(context.Background(), clientUuid, uuid, verifyTypeCode).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `KYCApi.ClientVerificationDocumentRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientVerificationDocumentRetrieve`: VerificationDocument
    fmt.Fprintf(os.Stdout, "Response from `KYCApi.ClientVerificationDocumentRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 
**verifyTypeCode** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientVerificationDocumentRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




### Return type

[**VerificationDocument**](VerificationDocument.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClientVerificationDocumentUpdate

> VerificationDocument ClientVerificationDocumentUpdate(ctx, clientUuid, uuid, verifyTypeCode).Uuid2(uuid2).DocumentType(documentType).DocumentFront(documentFront).DocumentBack(documentBack).Execute()





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
    verifyTypeCode := "verifyTypeCode_example" // string | 
    uuid2 := TODO // string | 
    documentType := openapiclient.DocumentTypeEnum("passport") // DocumentTypeEnum | 
    documentFront := "documentFront_example" // string | 
    documentBack := "documentBack_example" // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.KYCApi.ClientVerificationDocumentUpdate(context.Background(), clientUuid, uuid, verifyTypeCode).Uuid2(uuid2).DocumentType(documentType).DocumentFront(documentFront).DocumentBack(documentBack).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `KYCApi.ClientVerificationDocumentUpdate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientVerificationDocumentUpdate`: VerificationDocument
    fmt.Fprintf(os.Stdout, "Response from `KYCApi.ClientVerificationDocumentUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 
**verifyTypeCode** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientVerificationDocumentUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **uuid2** | [**string**](string.md) |  | 
 **documentType** | [**DocumentTypeEnum**](DocumentTypeEnum.md) |  | 
 **documentFront** | **string** |  | 
 **documentBack** | **string** |  | 

### Return type

[**VerificationDocument**](VerificationDocument.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClientVerificationList

> PaginatedVerificationListList ClientVerificationList(ctx, clientUuid, verifyTypeCode).Limit(limit).Offset(offset).Execute()





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
    verifyTypeCode := "verifyTypeCode_example" // string | 
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.KYCApi.ClientVerificationList(context.Background(), clientUuid, verifyTypeCode).Limit(limit).Offset(offset).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `KYCApi.ClientVerificationList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientVerificationList`: PaginatedVerificationListList
    fmt.Fprintf(os.Stdout, "Response from `KYCApi.ClientVerificationList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 
**verifyTypeCode** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientVerificationListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 

### Return type

[**PaginatedVerificationListList**](PaginatedVerificationListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClientVerificationRetrieve

> VerificationList ClientVerificationRetrieve(ctx, clientUuid, uuid, verifyTypeCode).Execute()





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
    verifyTypeCode := "verifyTypeCode_example" // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.KYCApi.ClientVerificationRetrieve(context.Background(), clientUuid, uuid, verifyTypeCode).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `KYCApi.ClientVerificationRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientVerificationRetrieve`: VerificationList
    fmt.Fprintf(os.Stdout, "Response from `KYCApi.ClientVerificationRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 
**verifyTypeCode** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientVerificationRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




### Return type

[**VerificationList**](VerificationList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

