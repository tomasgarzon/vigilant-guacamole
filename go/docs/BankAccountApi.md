# \BankAccountApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ClientBankAccountCreate**](BankAccountApi.md#ClientBankAccountCreate) | **Post** /api/v2/clients/{client_uuid}/bank-accounts/ | 
[**ClientBankAccountDelete**](BankAccountApi.md#ClientBankAccountDelete) | **Delete** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
[**ClientBankAccountPartialUpdate**](BankAccountApi.md#ClientBankAccountPartialUpdate) | **Patch** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
[**ClientBankAccountRetrieve**](BankAccountApi.md#ClientBankAccountRetrieve) | **Get** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
[**ClientBankAccountUpdate**](BankAccountApi.md#ClientBankAccountUpdate) | **Put** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
[**ClientBankAccountsList**](BankAccountApi.md#ClientBankAccountsList) | **Get** /api/v2/clients/{client_uuid}/bank-accounts/ | 



## ClientBankAccountCreate

> BankAccountCreateUpdate ClientBankAccountCreate(ctx, clientUuid).BankAccountCreateUpdate(bankAccountCreateUpdate).Execute()





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
    bankAccountCreateUpdate := *openapiclient.NewBankAccountCreateUpdate("Uuid_example") // BankAccountCreateUpdate |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.BankAccountApi.ClientBankAccountCreate(context.Background(), clientUuid).BankAccountCreateUpdate(bankAccountCreateUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BankAccountApi.ClientBankAccountCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientBankAccountCreate`: BankAccountCreateUpdate
    fmt.Fprintf(os.Stdout, "Response from `BankAccountApi.ClientBankAccountCreate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientBankAccountCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **bankAccountCreateUpdate** | [**BankAccountCreateUpdate**](BankAccountCreateUpdate.md) |  | 

### Return type

[**BankAccountCreateUpdate**](BankAccountCreateUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClientBankAccountDelete

> ClientBankAccountDelete(ctx, clientUuid, uuid).Execute()





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
    resp, r, err := api_client.BankAccountApi.ClientBankAccountDelete(context.Background(), clientUuid, uuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BankAccountApi.ClientBankAccountDelete``: %v\n", err)
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

Other parameters are passed through a pointer to a apiClientBankAccountDeleteRequest struct via the builder pattern


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


## ClientBankAccountPartialUpdate

> BankAccountCreateUpdate ClientBankAccountPartialUpdate(ctx, clientUuid, uuid).PatchedBankAccountCreateUpdate(patchedBankAccountCreateUpdate).Execute()





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
    patchedBankAccountCreateUpdate := *openapiclient.NewPatchedBankAccountCreateUpdate() // PatchedBankAccountCreateUpdate |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.BankAccountApi.ClientBankAccountPartialUpdate(context.Background(), clientUuid, uuid).PatchedBankAccountCreateUpdate(patchedBankAccountCreateUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BankAccountApi.ClientBankAccountPartialUpdate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientBankAccountPartialUpdate`: BankAccountCreateUpdate
    fmt.Fprintf(os.Stdout, "Response from `BankAccountApi.ClientBankAccountPartialUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientBankAccountPartialUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **patchedBankAccountCreateUpdate** | [**PatchedBankAccountCreateUpdate**](PatchedBankAccountCreateUpdate.md) |  | 

### Return type

[**BankAccountCreateUpdate**](BankAccountCreateUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClientBankAccountRetrieve

> BankAccountList ClientBankAccountRetrieve(ctx, clientUuid, uuid).Execute()





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
    resp, r, err := api_client.BankAccountApi.ClientBankAccountRetrieve(context.Background(), clientUuid, uuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BankAccountApi.ClientBankAccountRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientBankAccountRetrieve`: BankAccountList
    fmt.Fprintf(os.Stdout, "Response from `BankAccountApi.ClientBankAccountRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientBankAccountRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**BankAccountList**](BankAccountList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClientBankAccountUpdate

> BankAccountCreateUpdate ClientBankAccountUpdate(ctx, clientUuid, uuid).BankAccountCreateUpdate(bankAccountCreateUpdate).Execute()





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
    bankAccountCreateUpdate := *openapiclient.NewBankAccountCreateUpdate("Uuid_example") // BankAccountCreateUpdate |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.BankAccountApi.ClientBankAccountUpdate(context.Background(), clientUuid, uuid).BankAccountCreateUpdate(bankAccountCreateUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BankAccountApi.ClientBankAccountUpdate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientBankAccountUpdate`: BankAccountCreateUpdate
    fmt.Fprintf(os.Stdout, "Response from `BankAccountApi.ClientBankAccountUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientBankAccountUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **bankAccountCreateUpdate** | [**BankAccountCreateUpdate**](BankAccountCreateUpdate.md) |  | 

### Return type

[**BankAccountCreateUpdate**](BankAccountCreateUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClientBankAccountsList

> PaginatedBankAccountListList ClientBankAccountsList(ctx, clientUuid).Limit(limit).Offset(offset).Execute()





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

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.BankAccountApi.ClientBankAccountsList(context.Background(), clientUuid).Limit(limit).Offset(offset).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BankAccountApi.ClientBankAccountsList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClientBankAccountsList`: PaginatedBankAccountListList
    fmt.Fprintf(os.Stdout, "Response from `BankAccountApi.ClientBankAccountsList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClientBankAccountsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Number of results to return per page. | 
 **offset** | **int32** | The initial index from which to return the results. | 

### Return type

[**PaginatedBankAccountListList**](PaginatedBankAccountListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

