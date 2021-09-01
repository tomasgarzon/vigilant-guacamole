# \DocumentApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ClientDocumentCreate**](DocumentApi.md#ClientDocumentCreate) | **Post** /api/v2/clients/{client_uuid}/documents/ | 
[**ClientDocumentDelete**](DocumentApi.md#ClientDocumentDelete) | **Delete** /api/v2/clients/{client_uuid}/documents/{uuid}/ | 
[**ClientDocumentList**](DocumentApi.md#ClientDocumentList) | **Get** /api/v2/clients/{client_uuid}/documents/ | 
[**ClientDocumentRetrieve**](DocumentApi.md#ClientDocumentRetrieve) | **Get** /api/v2/clients/{client_uuid}/documents/{uuid}/ | 



## ClientDocumentCreate

> Document ClientDocumentCreate(ctx, clientUuid).Uuid(uuid).Name(name).DocType(docType).Path(path).Description(description).Execute()





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
    name := "name_example" // string | 
    docType := openapiclient.DocTypeEnum("ID_PERSONAL") // DocTypeEnum | 
    path := "path_example" // string | 
    description := "description_example" // string |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.DocumentApi.ClientDocumentCreate(context.Background(), clientUuid).Uuid(uuid).Name(name).DocType(docType).Path(path).Description(description).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DocumentApi.ClientDocumentCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientDocumentCreate`: Document
    fmt.Fprintf(os.Stdout, "Response from `DocumentApi.ClientDocumentCreate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientDocumentCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **uuid** | [**string**](string.md) |  | 
 **name** | **string** |  | 
 **docType** | [**DocTypeEnum**](DocTypeEnum.md) |  | 
 **path** | **string** |  | 
 **description** | **string** |  | 

### Return type

[**Document**](Document.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClientDocumentDelete

> ClientDocumentDelete(ctx, clientUuid, uuid).Execute()





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
    resp, r, err := api_client.DocumentApi.ClientDocumentDelete(context.Background(), clientUuid, uuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DocumentApi.ClientDocumentDelete``: %v\n", err)
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

Other parameters are passed through a pointer to a apiClientDocumentDeleteRequest struct via the builder pattern


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


## ClientDocumentList

> PaginatedDocumentList ClientDocumentList(ctx, clientUuid).Client(client).Description(description).DocType(docType).ExtraData(extraData).Limit(limit).Name(name).Offset(offset).Execute()





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
    client := int32(56) // int32 |  (optional)
    description := "description_example" // string |  (optional)
    docType := []string{"DocType_example"} // []string |  (optional)
    extraData := map[string]interface{}{"key": interface{}(123)} // map[string]interface{} | Additional document attributes for the specific portal (optional)
    limit := int32(56) // int32 | Number of results to return per page. (optional)
    name := "name_example" // string |  (optional)
    offset := int32(56) // int32 | The initial index from which to return the results. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.DocumentApi.ClientDocumentList(context.Background(), clientUuid).Client(client).Description(description).DocType(docType).ExtraData(extraData).Limit(limit).Name(name).Offset(offset).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DocumentApi.ClientDocumentList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientDocumentList`: PaginatedDocumentList
    fmt.Fprintf(os.Stdout, "Response from `DocumentApi.ClientDocumentList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientDocumentListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **client** | **int32** |  | 
 **description** | **string** |  | 
 **docType** | **[]string** |  | 
 **extraData** | **map[string]interface{}** | Additional document attributes for the specific portal | 
 **limit** | **int32** | Number of results to return per page. | 
 **name** | **string** |  | 
 **offset** | **int32** | The initial index from which to return the results. | 

### Return type

[**PaginatedDocumentList**](PaginatedDocumentList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClientDocumentRetrieve

> Document ClientDocumentRetrieve(ctx, clientUuid, uuid).Execute()





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
    resp, r, err := api_client.DocumentApi.ClientDocumentRetrieve(context.Background(), clientUuid, uuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DocumentApi.ClientDocumentRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientDocumentRetrieve`: Document
    fmt.Fprintf(os.Stdout, "Response from `DocumentApi.ClientDocumentRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientDocumentRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Document**](Document.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

