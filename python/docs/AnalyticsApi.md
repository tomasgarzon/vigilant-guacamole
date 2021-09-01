# nucoro_api.AnalyticsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v2_relationship_manager_analytics_allocations_by_asset_retrieve**](AnalyticsApi.md#api_v2_relationship_manager_analytics_allocations_by_asset_retrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/allocations-by-asset/ | 
[**api_v2_relationship_manager_analytics_asset_concentration_risk_retrieve**](AnalyticsApi.md#api_v2_relationship_manager_analytics_asset_concentration_risk_retrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/asset-concentration-risk/ | 
[**api_v2_relationship_manager_analytics_aum_evolution_retrieve**](AnalyticsApi.md#api_v2_relationship_manager_analytics_aum_evolution_retrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum-evolution/ | 
[**api_v2_relationship_manager_analytics_aum_portfolio_risk_retrieve**](AnalyticsApi.md#api_v2_relationship_manager_analytics_aum_portfolio_risk_retrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum-portfolio-risk/ | 
[**api_v2_relationship_manager_analytics_aum_retrieve**](AnalyticsApi.md#api_v2_relationship_manager_analytics_aum_retrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum/ | 
[**api_v2_relationship_manager_analytics_client_by_risk_retrieve**](AnalyticsApi.md#api_v2_relationship_manager_analytics_client_by_risk_retrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-by-risk/ | 
[**api_v2_relationship_manager_analytics_client_by_status_retrieve**](AnalyticsApi.md#api_v2_relationship_manager_analytics_client_by_status_retrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-by-status/ | 
[**api_v2_relationship_manager_analytics_client_ranking_retrieve**](AnalyticsApi.md#api_v2_relationship_manager_analytics_client_ranking_retrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-ranking/ | 
[**api_v2_relationship_manager_analytics_inflows_outflows_retrieve**](AnalyticsApi.md#api_v2_relationship_manager_analytics_inflows_outflows_retrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/inflows-outflows/ | 
[**api_v2_relationship_manager_analytics_portfolio_risk_performance_retrieve**](AnalyticsApi.md#api_v2_relationship_manager_analytics_portfolio_risk_performance_retrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/portfolio-risk-performance/ | 
[**api_v2_relationship_manager_analytics_total_active_clients_retrieve**](AnalyticsApi.md#api_v2_relationship_manager_analytics_total_active_clients_retrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/total-active-clients/ | 


# **api_v2_relationship_manager_analytics_allocations_by_asset_retrieve**
> AllocationByAsset api_v2_relationship_manager_analytics_allocations_by_asset_retrieve(relationship_manager_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import analytics_api
from nucoro_api.model.allocation_by_asset import AllocationByAsset
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = nucoro_api.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Configure Bearer authorization (JWT): jwtAuth
configuration = nucoro_api.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Configure API key authorization: tokenAuth
configuration.api_key['tokenAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['tokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with nucoro_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = analytics_api.AnalyticsApi(api_client)
    relationship_manager_uuid = "relationship_manager_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_relationship_manager_analytics_allocations_by_asset_retrieve(relationship_manager_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling AnalyticsApi->api_v2_relationship_manager_analytics_allocations_by_asset_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationship_manager_uuid** | **str**|  |

### Return type

[**AllocationByAsset**](AllocationByAsset.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_relationship_manager_analytics_asset_concentration_risk_retrieve**
> AssetConcentrationRisk api_v2_relationship_manager_analytics_asset_concentration_risk_retrieve(relationship_manager_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import analytics_api
from nucoro_api.model.asset_concentration_risk import AssetConcentrationRisk
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = nucoro_api.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Configure Bearer authorization (JWT): jwtAuth
configuration = nucoro_api.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Configure API key authorization: tokenAuth
configuration.api_key['tokenAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['tokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with nucoro_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = analytics_api.AnalyticsApi(api_client)
    relationship_manager_uuid = "relationship_manager_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_relationship_manager_analytics_asset_concentration_risk_retrieve(relationship_manager_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling AnalyticsApi->api_v2_relationship_manager_analytics_asset_concentration_risk_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationship_manager_uuid** | **str**|  |

### Return type

[**AssetConcentrationRisk**](AssetConcentrationRisk.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_relationship_manager_analytics_aum_evolution_retrieve**
> AUMEvoluation api_v2_relationship_manager_analytics_aum_evolution_retrieve(relationship_manager_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import analytics_api
from nucoro_api.model.aum_evoluation import AUMEvoluation
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = nucoro_api.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Configure Bearer authorization (JWT): jwtAuth
configuration = nucoro_api.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Configure API key authorization: tokenAuth
configuration.api_key['tokenAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['tokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with nucoro_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = analytics_api.AnalyticsApi(api_client)
    relationship_manager_uuid = "relationship_manager_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_relationship_manager_analytics_aum_evolution_retrieve(relationship_manager_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling AnalyticsApi->api_v2_relationship_manager_analytics_aum_evolution_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationship_manager_uuid** | **str**|  |

### Return type

[**AUMEvoluation**](AUMEvoluation.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_relationship_manager_analytics_aum_portfolio_risk_retrieve**
> AUMPortfolioRisk api_v2_relationship_manager_analytics_aum_portfolio_risk_retrieve(relationship_manager_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import analytics_api
from nucoro_api.model.aum_portfolio_risk import AUMPortfolioRisk
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = nucoro_api.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Configure Bearer authorization (JWT): jwtAuth
configuration = nucoro_api.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Configure API key authorization: tokenAuth
configuration.api_key['tokenAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['tokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with nucoro_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = analytics_api.AnalyticsApi(api_client)
    relationship_manager_uuid = "relationship_manager_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_relationship_manager_analytics_aum_portfolio_risk_retrieve(relationship_manager_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling AnalyticsApi->api_v2_relationship_manager_analytics_aum_portfolio_risk_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationship_manager_uuid** | **str**|  |

### Return type

[**AUMPortfolioRisk**](AUMPortfolioRisk.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_relationship_manager_analytics_aum_retrieve**
> RelationshipManager api_v2_relationship_manager_analytics_aum_retrieve(relationship_manager_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import analytics_api
from nucoro_api.model.relationship_manager import RelationshipManager
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = nucoro_api.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Configure Bearer authorization (JWT): jwtAuth
configuration = nucoro_api.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Configure API key authorization: tokenAuth
configuration.api_key['tokenAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['tokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with nucoro_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = analytics_api.AnalyticsApi(api_client)
    relationship_manager_uuid = "relationship_manager_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_relationship_manager_analytics_aum_retrieve(relationship_manager_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling AnalyticsApi->api_v2_relationship_manager_analytics_aum_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationship_manager_uuid** | **str**|  |

### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_relationship_manager_analytics_client_by_risk_retrieve**
> RelationshipManager api_v2_relationship_manager_analytics_client_by_risk_retrieve(relationship_manager_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import analytics_api
from nucoro_api.model.relationship_manager import RelationshipManager
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = nucoro_api.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Configure Bearer authorization (JWT): jwtAuth
configuration = nucoro_api.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Configure API key authorization: tokenAuth
configuration.api_key['tokenAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['tokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with nucoro_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = analytics_api.AnalyticsApi(api_client)
    relationship_manager_uuid = "relationship_manager_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_relationship_manager_analytics_client_by_risk_retrieve(relationship_manager_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling AnalyticsApi->api_v2_relationship_manager_analytics_client_by_risk_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationship_manager_uuid** | **str**|  |

### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_relationship_manager_analytics_client_by_status_retrieve**
> RelationshipManager api_v2_relationship_manager_analytics_client_by_status_retrieve(relationship_manager_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import analytics_api
from nucoro_api.model.relationship_manager import RelationshipManager
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = nucoro_api.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Configure Bearer authorization (JWT): jwtAuth
configuration = nucoro_api.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Configure API key authorization: tokenAuth
configuration.api_key['tokenAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['tokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with nucoro_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = analytics_api.AnalyticsApi(api_client)
    relationship_manager_uuid = "relationship_manager_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_relationship_manager_analytics_client_by_status_retrieve(relationship_manager_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling AnalyticsApi->api_v2_relationship_manager_analytics_client_by_status_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationship_manager_uuid** | **str**|  |

### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_relationship_manager_analytics_client_ranking_retrieve**
> ClientRanking api_v2_relationship_manager_analytics_client_ranking_retrieve(relationship_manager_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import analytics_api
from nucoro_api.model.client_ranking import ClientRanking
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = nucoro_api.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Configure Bearer authorization (JWT): jwtAuth
configuration = nucoro_api.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Configure API key authorization: tokenAuth
configuration.api_key['tokenAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['tokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with nucoro_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = analytics_api.AnalyticsApi(api_client)
    relationship_manager_uuid = "relationship_manager_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_relationship_manager_analytics_client_ranking_retrieve(relationship_manager_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling AnalyticsApi->api_v2_relationship_manager_analytics_client_ranking_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationship_manager_uuid** | **str**|  |

### Return type

[**ClientRanking**](ClientRanking.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_relationship_manager_analytics_inflows_outflows_retrieve**
> RelationshipManager api_v2_relationship_manager_analytics_inflows_outflows_retrieve(relationship_manager_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import analytics_api
from nucoro_api.model.relationship_manager import RelationshipManager
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = nucoro_api.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Configure Bearer authorization (JWT): jwtAuth
configuration = nucoro_api.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Configure API key authorization: tokenAuth
configuration.api_key['tokenAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['tokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with nucoro_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = analytics_api.AnalyticsApi(api_client)
    relationship_manager_uuid = "relationship_manager_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_relationship_manager_analytics_inflows_outflows_retrieve(relationship_manager_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling AnalyticsApi->api_v2_relationship_manager_analytics_inflows_outflows_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationship_manager_uuid** | **str**|  |

### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_relationship_manager_analytics_portfolio_risk_performance_retrieve**
> RelationshipManager api_v2_relationship_manager_analytics_portfolio_risk_performance_retrieve(relationship_manager_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import analytics_api
from nucoro_api.model.relationship_manager import RelationshipManager
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = nucoro_api.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Configure Bearer authorization (JWT): jwtAuth
configuration = nucoro_api.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Configure API key authorization: tokenAuth
configuration.api_key['tokenAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['tokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with nucoro_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = analytics_api.AnalyticsApi(api_client)
    relationship_manager_uuid = "relationship_manager_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_relationship_manager_analytics_portfolio_risk_performance_retrieve(relationship_manager_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling AnalyticsApi->api_v2_relationship_manager_analytics_portfolio_risk_performance_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationship_manager_uuid** | **str**|  |

### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_relationship_manager_analytics_total_active_clients_retrieve**
> RelationshipManager api_v2_relationship_manager_analytics_total_active_clients_retrieve(relationship_manager_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import analytics_api
from nucoro_api.model.relationship_manager import RelationshipManager
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = nucoro_api.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Configure Bearer authorization (JWT): jwtAuth
configuration = nucoro_api.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Configure API key authorization: tokenAuth
configuration.api_key['tokenAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['tokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with nucoro_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = analytics_api.AnalyticsApi(api_client)
    relationship_manager_uuid = "relationship_manager_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_relationship_manager_analytics_total_active_clients_retrieve(relationship_manager_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling AnalyticsApi->api_v2_relationship_manager_analytics_total_active_clients_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationship_manager_uuid** | **str**|  |

### Return type

[**RelationshipManager**](RelationshipManager.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

