# \RelationShipManagerApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ApiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve**](RelationShipManagerApi.md#ApiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve) | **Get** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/allocations-by-asset/ | 
[**ApiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve**](RelationShipManagerApi.md#ApiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve) | **Get** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/asset-concentration-risk/ | 
[**ApiV2RelationshipManagerAnalyticsAumEvolutionRetrieve**](RelationShipManagerApi.md#ApiV2RelationshipManagerAnalyticsAumEvolutionRetrieve) | **Get** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum-evolution/ | 
[**ApiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve**](RelationShipManagerApi.md#ApiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve) | **Get** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum-portfolio-risk/ | 
[**ApiV2RelationshipManagerAnalyticsAumRetrieve**](RelationShipManagerApi.md#ApiV2RelationshipManagerAnalyticsAumRetrieve) | **Get** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum/ | 
[**ApiV2RelationshipManagerAnalyticsClientByRiskRetrieve**](RelationShipManagerApi.md#ApiV2RelationshipManagerAnalyticsClientByRiskRetrieve) | **Get** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-by-risk/ | 
[**ApiV2RelationshipManagerAnalyticsClientByStatusRetrieve**](RelationShipManagerApi.md#ApiV2RelationshipManagerAnalyticsClientByStatusRetrieve) | **Get** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-by-status/ | 
[**ApiV2RelationshipManagerAnalyticsClientRankingRetrieve**](RelationShipManagerApi.md#ApiV2RelationshipManagerAnalyticsClientRankingRetrieve) | **Get** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-ranking/ | 
[**ApiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve**](RelationShipManagerApi.md#ApiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve) | **Get** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/inflows-outflows/ | 
[**ApiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve**](RelationShipManagerApi.md#ApiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve) | **Get** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/portfolio-risk-performance/ | 
[**ApiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve**](RelationShipManagerApi.md#ApiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve) | **Get** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/total-active-clients/ | 
[**ApiV2RelationshipManagerMeRetrieve**](RelationShipManagerApi.md#ApiV2RelationshipManagerMeRetrieve) | **Get** /api/v2/relationship-manager/me/ | 
[**ApiV2RelationshipManagerRetrieve**](RelationShipManagerApi.md#ApiV2RelationshipManagerRetrieve) | **Get** /api/v2/relationship-manager/{uuid}/ | 



## ApiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve

> AllocationByAsset ApiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve(ctx, relationshipManagerUuid).Execute()



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
    relationshipManagerUuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve(context.Background(), relationshipManagerUuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve`: AllocationByAsset
    fmt.Fprintf(os.Stdout, "Response from `RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**relationshipManagerUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**AllocationByAsset**](AllocationByAsset.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve

> AssetConcentrationRisk ApiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve(ctx, relationshipManagerUuid).Execute()



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
    relationshipManagerUuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve(context.Background(), relationshipManagerUuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve`: AssetConcentrationRisk
    fmt.Fprintf(os.Stdout, "Response from `RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**relationshipManagerUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**AssetConcentrationRisk**](AssetConcentrationRisk.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2RelationshipManagerAnalyticsAumEvolutionRetrieve

> AUMEvoluation ApiV2RelationshipManagerAnalyticsAumEvolutionRetrieve(ctx, relationshipManagerUuid).Execute()



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
    relationshipManagerUuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsAumEvolutionRetrieve(context.Background(), relationshipManagerUuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsAumEvolutionRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2RelationshipManagerAnalyticsAumEvolutionRetrieve`: AUMEvoluation
    fmt.Fprintf(os.Stdout, "Response from `RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsAumEvolutionRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**relationshipManagerUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2RelationshipManagerAnalyticsAumEvolutionRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**AUMEvoluation**](AUMEvoluation.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve

> AUMPortfolioRisk ApiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve(ctx, relationshipManagerUuid).Execute()



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
    relationshipManagerUuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve(context.Background(), relationshipManagerUuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve`: AUMPortfolioRisk
    fmt.Fprintf(os.Stdout, "Response from `RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**relationshipManagerUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**AUMPortfolioRisk**](AUMPortfolioRisk.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2RelationshipManagerAnalyticsAumRetrieve

> RelationshipManager ApiV2RelationshipManagerAnalyticsAumRetrieve(ctx, relationshipManagerUuid).Execute()



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
    relationshipManagerUuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsAumRetrieve(context.Background(), relationshipManagerUuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsAumRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2RelationshipManagerAnalyticsAumRetrieve`: RelationshipManager
    fmt.Fprintf(os.Stdout, "Response from `RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsAumRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**relationshipManagerUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2RelationshipManagerAnalyticsAumRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2RelationshipManagerAnalyticsClientByRiskRetrieve

> RelationshipManager ApiV2RelationshipManagerAnalyticsClientByRiskRetrieve(ctx, relationshipManagerUuid).Execute()



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
    relationshipManagerUuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsClientByRiskRetrieve(context.Background(), relationshipManagerUuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsClientByRiskRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2RelationshipManagerAnalyticsClientByRiskRetrieve`: RelationshipManager
    fmt.Fprintf(os.Stdout, "Response from `RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsClientByRiskRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**relationshipManagerUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2RelationshipManagerAnalyticsClientByRiskRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2RelationshipManagerAnalyticsClientByStatusRetrieve

> RelationshipManager ApiV2RelationshipManagerAnalyticsClientByStatusRetrieve(ctx, relationshipManagerUuid).Execute()



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
    relationshipManagerUuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsClientByStatusRetrieve(context.Background(), relationshipManagerUuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsClientByStatusRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2RelationshipManagerAnalyticsClientByStatusRetrieve`: RelationshipManager
    fmt.Fprintf(os.Stdout, "Response from `RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsClientByStatusRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**relationshipManagerUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2RelationshipManagerAnalyticsClientByStatusRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2RelationshipManagerAnalyticsClientRankingRetrieve

> ClientRanking ApiV2RelationshipManagerAnalyticsClientRankingRetrieve(ctx, relationshipManagerUuid).Execute()



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
    relationshipManagerUuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsClientRankingRetrieve(context.Background(), relationshipManagerUuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsClientRankingRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2RelationshipManagerAnalyticsClientRankingRetrieve`: ClientRanking
    fmt.Fprintf(os.Stdout, "Response from `RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsClientRankingRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**relationshipManagerUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2RelationshipManagerAnalyticsClientRankingRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ClientRanking**](ClientRanking.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve

> RelationshipManager ApiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve(ctx, relationshipManagerUuid).Execute()



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
    relationshipManagerUuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve(context.Background(), relationshipManagerUuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve`: RelationshipManager
    fmt.Fprintf(os.Stdout, "Response from `RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**relationshipManagerUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve

> RelationshipManager ApiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve(ctx, relationshipManagerUuid).Execute()



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
    relationshipManagerUuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve(context.Background(), relationshipManagerUuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve`: RelationshipManager
    fmt.Fprintf(os.Stdout, "Response from `RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**relationshipManagerUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve

> RelationshipManager ApiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve(ctx, relationshipManagerUuid).Execute()



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
    relationshipManagerUuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve(context.Background(), relationshipManagerUuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve`: RelationshipManager
    fmt.Fprintf(os.Stdout, "Response from `RelationShipManagerApi.ApiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**relationshipManagerUuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2RelationshipManagerMeRetrieve

> RelationshipManager ApiV2RelationshipManagerMeRetrieve(ctx).Execute()



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

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RelationShipManagerApi.ApiV2RelationshipManagerMeRetrieve(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RelationShipManagerApi.ApiV2RelationshipManagerMeRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2RelationshipManagerMeRetrieve`: RelationshipManager
    fmt.Fprintf(os.Stdout, "Response from `RelationShipManagerApi.ApiV2RelationshipManagerMeRetrieve`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2RelationshipManagerMeRetrieveRequest struct via the builder pattern


### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV2RelationshipManagerRetrieve

> RelationshipManager ApiV2RelationshipManagerRetrieve(ctx, uuid).Execute()



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
    uuid := TODO // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RelationShipManagerApi.ApiV2RelationshipManagerRetrieve(context.Background(), uuid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RelationShipManagerApi.ApiV2RelationshipManagerRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiV2RelationshipManagerRetrieve`: RelationshipManager
    fmt.Fprintf(os.Stdout, "Response from `RelationShipManagerApi.ApiV2RelationshipManagerRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**uuid** | [**string**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV2RelationshipManagerRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

