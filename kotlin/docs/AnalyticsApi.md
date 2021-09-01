# AnalyticsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve**](AnalyticsApi.md#apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/allocations-by-asset/ | 
[**apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve**](AnalyticsApi.md#apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/asset-concentration-risk/ | 
[**apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve**](AnalyticsApi.md#apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum-evolution/ | 
[**apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve**](AnalyticsApi.md#apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum-portfolio-risk/ | 
[**apiV2RelationshipManagerAnalyticsAumRetrieve**](AnalyticsApi.md#apiV2RelationshipManagerAnalyticsAumRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum/ | 
[**apiV2RelationshipManagerAnalyticsClientByRiskRetrieve**](AnalyticsApi.md#apiV2RelationshipManagerAnalyticsClientByRiskRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-by-risk/ | 
[**apiV2RelationshipManagerAnalyticsClientByStatusRetrieve**](AnalyticsApi.md#apiV2RelationshipManagerAnalyticsClientByStatusRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-by-status/ | 
[**apiV2RelationshipManagerAnalyticsClientRankingRetrieve**](AnalyticsApi.md#apiV2RelationshipManagerAnalyticsClientRankingRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-ranking/ | 
[**apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve**](AnalyticsApi.md#apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/inflows-outflows/ | 
[**apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve**](AnalyticsApi.md#apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/portfolio-risk-performance/ | 
[**apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve**](AnalyticsApi.md#apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/total-active-clients/ | 


<a name="apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve"></a>
# **apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve**
> AllocationByAsset apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve(relationshipManagerUuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AnalyticsApi()
val relationshipManagerUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : AllocationByAsset = apiInstance.apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve(relationshipManagerUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AnalyticsApi#apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnalyticsApi#apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationshipManagerUuid** | [**java.util.UUID**](.md)|  |

### Return type

[**AllocationByAsset**](AllocationByAsset.md)

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

<a name="apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve"></a>
# **apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve**
> AssetConcentrationRisk apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve(relationshipManagerUuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AnalyticsApi()
val relationshipManagerUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : AssetConcentrationRisk = apiInstance.apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve(relationshipManagerUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AnalyticsApi#apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnalyticsApi#apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationshipManagerUuid** | [**java.util.UUID**](.md)|  |

### Return type

[**AssetConcentrationRisk**](AssetConcentrationRisk.md)

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

<a name="apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve"></a>
# **apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve**
> AUMEvoluation apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve(relationshipManagerUuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AnalyticsApi()
val relationshipManagerUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : AUMEvoluation = apiInstance.apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve(relationshipManagerUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AnalyticsApi#apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnalyticsApi#apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationshipManagerUuid** | [**java.util.UUID**](.md)|  |

### Return type

[**AUMEvoluation**](AUMEvoluation.md)

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

<a name="apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve"></a>
# **apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve**
> AUMPortfolioRisk apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve(relationshipManagerUuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AnalyticsApi()
val relationshipManagerUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : AUMPortfolioRisk = apiInstance.apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve(relationshipManagerUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AnalyticsApi#apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnalyticsApi#apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationshipManagerUuid** | [**java.util.UUID**](.md)|  |

### Return type

[**AUMPortfolioRisk**](AUMPortfolioRisk.md)

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

<a name="apiV2RelationshipManagerAnalyticsAumRetrieve"></a>
# **apiV2RelationshipManagerAnalyticsAumRetrieve**
> RelationshipManager apiV2RelationshipManagerAnalyticsAumRetrieve(relationshipManagerUuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AnalyticsApi()
val relationshipManagerUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : RelationshipManager = apiInstance.apiV2RelationshipManagerAnalyticsAumRetrieve(relationshipManagerUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AnalyticsApi#apiV2RelationshipManagerAnalyticsAumRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnalyticsApi#apiV2RelationshipManagerAnalyticsAumRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationshipManagerUuid** | [**java.util.UUID**](.md)|  |

### Return type

[**RelationshipManager**](RelationshipManager.md)

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

<a name="apiV2RelationshipManagerAnalyticsClientByRiskRetrieve"></a>
# **apiV2RelationshipManagerAnalyticsClientByRiskRetrieve**
> RelationshipManager apiV2RelationshipManagerAnalyticsClientByRiskRetrieve(relationshipManagerUuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AnalyticsApi()
val relationshipManagerUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : RelationshipManager = apiInstance.apiV2RelationshipManagerAnalyticsClientByRiskRetrieve(relationshipManagerUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AnalyticsApi#apiV2RelationshipManagerAnalyticsClientByRiskRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnalyticsApi#apiV2RelationshipManagerAnalyticsClientByRiskRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationshipManagerUuid** | [**java.util.UUID**](.md)|  |

### Return type

[**RelationshipManager**](RelationshipManager.md)

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

<a name="apiV2RelationshipManagerAnalyticsClientByStatusRetrieve"></a>
# **apiV2RelationshipManagerAnalyticsClientByStatusRetrieve**
> RelationshipManager apiV2RelationshipManagerAnalyticsClientByStatusRetrieve(relationshipManagerUuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AnalyticsApi()
val relationshipManagerUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : RelationshipManager = apiInstance.apiV2RelationshipManagerAnalyticsClientByStatusRetrieve(relationshipManagerUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AnalyticsApi#apiV2RelationshipManagerAnalyticsClientByStatusRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnalyticsApi#apiV2RelationshipManagerAnalyticsClientByStatusRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationshipManagerUuid** | [**java.util.UUID**](.md)|  |

### Return type

[**RelationshipManager**](RelationshipManager.md)

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

<a name="apiV2RelationshipManagerAnalyticsClientRankingRetrieve"></a>
# **apiV2RelationshipManagerAnalyticsClientRankingRetrieve**
> ClientRanking apiV2RelationshipManagerAnalyticsClientRankingRetrieve(relationshipManagerUuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AnalyticsApi()
val relationshipManagerUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : ClientRanking = apiInstance.apiV2RelationshipManagerAnalyticsClientRankingRetrieve(relationshipManagerUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AnalyticsApi#apiV2RelationshipManagerAnalyticsClientRankingRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnalyticsApi#apiV2RelationshipManagerAnalyticsClientRankingRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationshipManagerUuid** | [**java.util.UUID**](.md)|  |

### Return type

[**ClientRanking**](ClientRanking.md)

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

<a name="apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve"></a>
# **apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve**
> RelationshipManager apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve(relationshipManagerUuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AnalyticsApi()
val relationshipManagerUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : RelationshipManager = apiInstance.apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve(relationshipManagerUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AnalyticsApi#apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnalyticsApi#apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationshipManagerUuid** | [**java.util.UUID**](.md)|  |

### Return type

[**RelationshipManager**](RelationshipManager.md)

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

<a name="apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve"></a>
# **apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve**
> RelationshipManager apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve(relationshipManagerUuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AnalyticsApi()
val relationshipManagerUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : RelationshipManager = apiInstance.apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve(relationshipManagerUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AnalyticsApi#apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnalyticsApi#apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationshipManagerUuid** | [**java.util.UUID**](.md)|  |

### Return type

[**RelationshipManager**](RelationshipManager.md)

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

<a name="apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve"></a>
# **apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve**
> RelationshipManager apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve(relationshipManagerUuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AnalyticsApi()
val relationshipManagerUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : RelationshipManager = apiInstance.apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve(relationshipManagerUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AnalyticsApi#apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnalyticsApi#apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationshipManagerUuid** | [**java.util.UUID**](.md)|  |

### Return type

[**RelationshipManager**](RelationshipManager.md)

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

