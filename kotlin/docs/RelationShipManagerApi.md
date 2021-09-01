# RelationShipManagerApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve**](RelationShipManagerApi.md#apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/allocations-by-asset/ | 
[**apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve**](RelationShipManagerApi.md#apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/asset-concentration-risk/ | 
[**apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve**](RelationShipManagerApi.md#apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum-evolution/ | 
[**apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve**](RelationShipManagerApi.md#apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum-portfolio-risk/ | 
[**apiV2RelationshipManagerAnalyticsAumRetrieve**](RelationShipManagerApi.md#apiV2RelationshipManagerAnalyticsAumRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum/ | 
[**apiV2RelationshipManagerAnalyticsClientByRiskRetrieve**](RelationShipManagerApi.md#apiV2RelationshipManagerAnalyticsClientByRiskRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-by-risk/ | 
[**apiV2RelationshipManagerAnalyticsClientByStatusRetrieve**](RelationShipManagerApi.md#apiV2RelationshipManagerAnalyticsClientByStatusRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-by-status/ | 
[**apiV2RelationshipManagerAnalyticsClientRankingRetrieve**](RelationShipManagerApi.md#apiV2RelationshipManagerAnalyticsClientRankingRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-ranking/ | 
[**apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve**](RelationShipManagerApi.md#apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/inflows-outflows/ | 
[**apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve**](RelationShipManagerApi.md#apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/portfolio-risk-performance/ | 
[**apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve**](RelationShipManagerApi.md#apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/total-active-clients/ | 
[**apiV2RelationshipManagerMeRetrieve**](RelationShipManagerApi.md#apiV2RelationshipManagerMeRetrieve) | **GET** /api/v2/relationship-manager/me/ | 
[**apiV2RelationshipManagerRetrieve**](RelationShipManagerApi.md#apiV2RelationshipManagerRetrieve) | **GET** /api/v2/relationship-manager/{uuid}/ | 


<a name="apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve"></a>
# **apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve**
> AllocationByAsset apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve(relationshipManagerUuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = RelationShipManagerApi()
val relationshipManagerUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : AllocationByAsset = apiInstance.apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve(relationshipManagerUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling RelationShipManagerApi#apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RelationShipManagerApi#apiV2RelationshipManagerAnalyticsAllocationsByAssetRetrieve")
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

val apiInstance = RelationShipManagerApi()
val relationshipManagerUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : AssetConcentrationRisk = apiInstance.apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve(relationshipManagerUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling RelationShipManagerApi#apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RelationShipManagerApi#apiV2RelationshipManagerAnalyticsAssetConcentrationRiskRetrieve")
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

val apiInstance = RelationShipManagerApi()
val relationshipManagerUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : AUMEvoluation = apiInstance.apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve(relationshipManagerUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling RelationShipManagerApi#apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RelationShipManagerApi#apiV2RelationshipManagerAnalyticsAumEvolutionRetrieve")
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

val apiInstance = RelationShipManagerApi()
val relationshipManagerUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : AUMPortfolioRisk = apiInstance.apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve(relationshipManagerUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling RelationShipManagerApi#apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RelationShipManagerApi#apiV2RelationshipManagerAnalyticsAumPortfolioRiskRetrieve")
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

val apiInstance = RelationShipManagerApi()
val relationshipManagerUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : RelationshipManager = apiInstance.apiV2RelationshipManagerAnalyticsAumRetrieve(relationshipManagerUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling RelationShipManagerApi#apiV2RelationshipManagerAnalyticsAumRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RelationShipManagerApi#apiV2RelationshipManagerAnalyticsAumRetrieve")
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

val apiInstance = RelationShipManagerApi()
val relationshipManagerUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : RelationshipManager = apiInstance.apiV2RelationshipManagerAnalyticsClientByRiskRetrieve(relationshipManagerUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling RelationShipManagerApi#apiV2RelationshipManagerAnalyticsClientByRiskRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RelationShipManagerApi#apiV2RelationshipManagerAnalyticsClientByRiskRetrieve")
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

val apiInstance = RelationShipManagerApi()
val relationshipManagerUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : RelationshipManager = apiInstance.apiV2RelationshipManagerAnalyticsClientByStatusRetrieve(relationshipManagerUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling RelationShipManagerApi#apiV2RelationshipManagerAnalyticsClientByStatusRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RelationShipManagerApi#apiV2RelationshipManagerAnalyticsClientByStatusRetrieve")
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

val apiInstance = RelationShipManagerApi()
val relationshipManagerUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : ClientRanking = apiInstance.apiV2RelationshipManagerAnalyticsClientRankingRetrieve(relationshipManagerUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling RelationShipManagerApi#apiV2RelationshipManagerAnalyticsClientRankingRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RelationShipManagerApi#apiV2RelationshipManagerAnalyticsClientRankingRetrieve")
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

val apiInstance = RelationShipManagerApi()
val relationshipManagerUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : RelationshipManager = apiInstance.apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve(relationshipManagerUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling RelationShipManagerApi#apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RelationShipManagerApi#apiV2RelationshipManagerAnalyticsInflowsOutflowsRetrieve")
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

val apiInstance = RelationShipManagerApi()
val relationshipManagerUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : RelationshipManager = apiInstance.apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve(relationshipManagerUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling RelationShipManagerApi#apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RelationShipManagerApi#apiV2RelationshipManagerAnalyticsPortfolioRiskPerformanceRetrieve")
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

val apiInstance = RelationShipManagerApi()
val relationshipManagerUuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : RelationshipManager = apiInstance.apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve(relationshipManagerUuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling RelationShipManagerApi#apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RelationShipManagerApi#apiV2RelationshipManagerAnalyticsTotalActiveClientsRetrieve")
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

<a name="apiV2RelationshipManagerMeRetrieve"></a>
# **apiV2RelationshipManagerMeRetrieve**
> RelationshipManager apiV2RelationshipManagerMeRetrieve()



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = RelationShipManagerApi()
try {
    val result : RelationshipManager = apiInstance.apiV2RelationshipManagerMeRetrieve()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling RelationShipManagerApi#apiV2RelationshipManagerMeRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RelationShipManagerApi#apiV2RelationshipManagerMeRetrieve")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

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

<a name="apiV2RelationshipManagerRetrieve"></a>
# **apiV2RelationshipManagerRetrieve**
> RelationshipManager apiV2RelationshipManagerRetrieve(uuid)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = RelationShipManagerApi()
val uuid : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : RelationshipManager = apiInstance.apiV2RelationshipManagerRetrieve(uuid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling RelationShipManagerApi#apiV2RelationshipManagerRetrieve")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RelationShipManagerApi#apiV2RelationshipManagerRetrieve")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**java.util.UUID**](.md)|  |

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

