# nucoro_api.ApplicationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v2_clients_activities_list**](ApplicationApi.md#api_v2_clients_activities_list) | **GET** /api/v2/clients/{client_uuid}/activities/ | 
[**api_v2_clients_activities_retrieve**](ApplicationApi.md#api_v2_clients_activities_retrieve) | **GET** /api/v2/clients/{client_uuid}/activities/{uuid}/ | 
[**api_v2_clients_advice_engines_list**](ApplicationApi.md#api_v2_clients_advice_engines_list) | **GET** /api/v2/clients/{client_uuid}/advice-engines/ | 
[**api_v2_clients_advice_engines_retrieve**](ApplicationApi.md#api_v2_clients_advice_engines_retrieve) | **GET** /api/v2/clients/{client_uuid}/advice-engines/{uuid}/ | 
[**api_v2_clients_billing_fees_create**](ApplicationApi.md#api_v2_clients_billing_fees_create) | **POST** /api/v2/clients/{client_uuid}/billing/fees/ | 
[**api_v2_clients_billing_fees_destroy**](ApplicationApi.md#api_v2_clients_billing_fees_destroy) | **DELETE** /api/v2/clients/{client_uuid}/billing/fees/{uuid}/ | 
[**api_v2_clients_billing_fees_list**](ApplicationApi.md#api_v2_clients_billing_fees_list) | **GET** /api/v2/clients/{client_uuid}/billing/fees/ | 
[**api_v2_clients_billing_fees_partial_update**](ApplicationApi.md#api_v2_clients_billing_fees_partial_update) | **PATCH** /api/v2/clients/{client_uuid}/billing/fees/{uuid}/ | 
[**api_v2_clients_billing_fees_retrieve**](ApplicationApi.md#api_v2_clients_billing_fees_retrieve) | **GET** /api/v2/clients/{client_uuid}/billing/fees/{uuid}/ | 
[**api_v2_clients_billing_fees_update**](ApplicationApi.md#api_v2_clients_billing_fees_update) | **PUT** /api/v2/clients/{client_uuid}/billing/fees/{uuid}/ | 
[**api_v2_clients_billing_invoices_list**](ApplicationApi.md#api_v2_clients_billing_invoices_list) | **GET** /api/v2/clients/{client_uuid}/billing/invoices/ | 
[**api_v2_clients_billing_invoices_retrieve**](ApplicationApi.md#api_v2_clients_billing_invoices_retrieve) | **GET** /api/v2/clients/{client_uuid}/billing/invoices/{uuid}/ | 
[**api_v2_clients_report_statements_list**](ApplicationApi.md#api_v2_clients_report_statements_list) | **GET** /api/v2/clients/{client_uuid}/report/statements/ | 
[**api_v2_clients_report_statements_retrieve**](ApplicationApi.md#api_v2_clients_report_statements_retrieve) | **GET** /api/v2/clients/{client_uuid}/report/statements/{uuid}/ | 
[**api_v2_clients_report_tax_reports_list**](ApplicationApi.md#api_v2_clients_report_tax_reports_list) | **GET** /api/v2/clients/{client_uuid}/report/tax-reports/ | 
[**api_v2_clients_report_tax_reports_retrieve**](ApplicationApi.md#api_v2_clients_report_tax_reports_retrieve) | **GET** /api/v2/clients/{client_uuid}/report/tax-reports/{uuid}/ | 
[**api_v2_clients_watchlists_create**](ApplicationApi.md#api_v2_clients_watchlists_create) | **POST** /api/v2/clients/{client_uuid}/watchlists/ | 
[**api_v2_clients_watchlists_destroy**](ApplicationApi.md#api_v2_clients_watchlists_destroy) | **DELETE** /api/v2/clients/{client_uuid}/watchlists/{uuid}/ | 
[**api_v2_clients_watchlists_list**](ApplicationApi.md#api_v2_clients_watchlists_list) | **GET** /api/v2/clients/{client_uuid}/watchlists/ | 
[**api_v2_clients_watchlists_retrieve**](ApplicationApi.md#api_v2_clients_watchlists_retrieve) | **GET** /api/v2/clients/{client_uuid}/watchlists/{uuid}/ | 
[**api_v2_clients_watchlists_update**](ApplicationApi.md#api_v2_clients_watchlists_update) | **PUT** /api/v2/clients/{client_uuid}/watchlists/{uuid}/ | 
[**api_v2_relationship_manager_analytics_allocations_by_asset_retrieve**](ApplicationApi.md#api_v2_relationship_manager_analytics_allocations_by_asset_retrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/allocations-by-asset/ | 
[**api_v2_relationship_manager_analytics_asset_concentration_risk_retrieve**](ApplicationApi.md#api_v2_relationship_manager_analytics_asset_concentration_risk_retrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/asset-concentration-risk/ | 
[**api_v2_relationship_manager_analytics_aum_evolution_retrieve**](ApplicationApi.md#api_v2_relationship_manager_analytics_aum_evolution_retrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum-evolution/ | 
[**api_v2_relationship_manager_analytics_aum_portfolio_risk_retrieve**](ApplicationApi.md#api_v2_relationship_manager_analytics_aum_portfolio_risk_retrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum-portfolio-risk/ | 
[**api_v2_relationship_manager_analytics_aum_retrieve**](ApplicationApi.md#api_v2_relationship_manager_analytics_aum_retrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/aum/ | 
[**api_v2_relationship_manager_analytics_client_by_risk_retrieve**](ApplicationApi.md#api_v2_relationship_manager_analytics_client_by_risk_retrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-by-risk/ | 
[**api_v2_relationship_manager_analytics_client_by_status_retrieve**](ApplicationApi.md#api_v2_relationship_manager_analytics_client_by_status_retrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-by-status/ | 
[**api_v2_relationship_manager_analytics_client_ranking_retrieve**](ApplicationApi.md#api_v2_relationship_manager_analytics_client_ranking_retrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/client-ranking/ | 
[**api_v2_relationship_manager_analytics_inflows_outflows_retrieve**](ApplicationApi.md#api_v2_relationship_manager_analytics_inflows_outflows_retrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/inflows-outflows/ | 
[**api_v2_relationship_manager_analytics_portfolio_risk_performance_retrieve**](ApplicationApi.md#api_v2_relationship_manager_analytics_portfolio_risk_performance_retrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/portfolio-risk-performance/ | 
[**api_v2_relationship_manager_analytics_total_active_clients_retrieve**](ApplicationApi.md#api_v2_relationship_manager_analytics_total_active_clients_retrieve) | **GET** /api/v2/relationship-manager/{relationship_manager_uuid}/analytics/total-active-clients/ | 
[**api_v2_relationship_manager_me_retrieve**](ApplicationApi.md#api_v2_relationship_manager_me_retrieve) | **GET** /api/v2/relationship-manager/me/ | 
[**api_v2_relationship_manager_retrieve**](ApplicationApi.md#api_v2_relationship_manager_retrieve) | **GET** /api/v2/relationship-manager/{uuid}/ | 
[**api_v2_report_statements_list**](ApplicationApi.md#api_v2_report_statements_list) | **GET** /api/v2/report/statements/ | 
[**api_v2_report_statements_retrieve**](ApplicationApi.md#api_v2_report_statements_retrieve) | **GET** /api/v2/report/statements/{uuid}/ | 
[**api_v2_report_tax_report_list**](ApplicationApi.md#api_v2_report_tax_report_list) | **GET** /api/v2/report/tax-report/ | 
[**api_v2_report_tax_report_retrieve**](ApplicationApi.md#api_v2_report_tax_report_retrieve) | **GET** /api/v2/report/tax-report/{uuid}/ | 
[**client_address_create**](ApplicationApi.md#client_address_create) | **POST** /api/v2/clients/{client_uuid}/addresses/ | 
[**client_address_delete**](ApplicationApi.md#client_address_delete) | **DELETE** /api/v2/clients/{client_uuid}/addresses/{uuid}/ | 
[**client_address_partial_update**](ApplicationApi.md#client_address_partial_update) | **PATCH** /api/v2/clients/{client_uuid}/addresses/{uuid}/ | 
[**client_address_retrieve**](ApplicationApi.md#client_address_retrieve) | **GET** /api/v2/clients/{client_uuid}/addresses/{uuid}/ | 
[**client_address_update**](ApplicationApi.md#client_address_update) | **PUT** /api/v2/clients/{client_uuid}/addresses/{uuid}/ | 
[**client_addresses_list**](ApplicationApi.md#client_addresses_list) | **GET** /api/v2/clients/{client_uuid}/addresses/ | 
[**client_bank_account_create**](ApplicationApi.md#client_bank_account_create) | **POST** /api/v2/clients/{client_uuid}/bank-accounts/ | 
[**client_bank_account_delete**](ApplicationApi.md#client_bank_account_delete) | **DELETE** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
[**client_bank_account_partial_update**](ApplicationApi.md#client_bank_account_partial_update) | **PATCH** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
[**client_bank_account_retrieve**](ApplicationApi.md#client_bank_account_retrieve) | **GET** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
[**client_bank_account_update**](ApplicationApi.md#client_bank_account_update) | **PUT** /api/v2/clients/{client_uuid}/bank-accounts/{uuid}/ | 
[**client_bank_accounts_list**](ApplicationApi.md#client_bank_accounts_list) | **GET** /api/v2/clients/{client_uuid}/bank-accounts/ | 
[**client_complete_onboarding**](ApplicationApi.md#client_complete_onboarding) | **POST** /api/v2/clients/{uuid}/onboarding/complete/ | 
[**client_create**](ApplicationApi.md#client_create) | **POST** /api/v2/clients/ | 
[**client_document_create**](ApplicationApi.md#client_document_create) | **POST** /api/v2/clients/{client_uuid}/documents/ | 
[**client_document_delete**](ApplicationApi.md#client_document_delete) | **DELETE** /api/v2/clients/{client_uuid}/documents/{uuid}/ | 
[**client_document_list**](ApplicationApi.md#client_document_list) | **GET** /api/v2/clients/{client_uuid}/documents/ | 
[**client_document_retrieve**](ApplicationApi.md#client_document_retrieve) | **GET** /api/v2/clients/{client_uuid}/documents/{uuid}/ | 
[**client_list**](ApplicationApi.md#client_list) | **GET** /api/v2/clients/ | 
[**client_nationality_create**](ApplicationApi.md#client_nationality_create) | **POST** /api/v2/clients/{client_uuid}/nationalities/ | 
[**client_nationlities_list**](ApplicationApi.md#client_nationlities_list) | **GET** /api/v2/clients/{client_uuid}/nationalities/ | 
[**client_nationlity_delete**](ApplicationApi.md#client_nationlity_delete) | **DELETE** /api/v2/clients/{client_uuid}/nationalities/{uuid}/ | 
[**client_nationlity_partial_update**](ApplicationApi.md#client_nationlity_partial_update) | **PATCH** /api/v2/clients/{client_uuid}/nationalities/{uuid}/ | 
[**client_nationlity_retrieve**](ApplicationApi.md#client_nationlity_retrieve) | **GET** /api/v2/clients/{client_uuid}/nationalities/{uuid}/ | 
[**client_nationlity_update**](ApplicationApi.md#client_nationlity_update) | **PUT** /api/v2/clients/{client_uuid}/nationalities/{uuid}/ | 
[**client_partial_update**](ApplicationApi.md#client_partial_update) | **PATCH** /api/v2/clients/{uuid}/ | 
[**client_retrieve**](ApplicationApi.md#client_retrieve) | **GET** /api/v2/clients/{uuid}/ | 
[**client_risk_assessment_create**](ApplicationApi.md#client_risk_assessment_create) | **POST** /api/v2/clients/{client_uuid}/risk-assessments/ | 
[**client_risk_assessment_delete**](ApplicationApi.md#client_risk_assessment_delete) | **DELETE** /api/v2/clients/{client_uuid}/risk-assessments/{uuid}/ | 
[**client_risk_assessment_list**](ApplicationApi.md#client_risk_assessment_list) | **GET** /api/v2/clients/{client_uuid}/risk-assessments/ | 
[**client_risk_assessment_partial_update**](ApplicationApi.md#client_risk_assessment_partial_update) | **PATCH** /api/v2/clients/{client_uuid}/risk-assessments/{uuid}/ | 
[**client_risk_assessment_retrieve**](ApplicationApi.md#client_risk_assessment_retrieve) | **GET** /api/v2/clients/{client_uuid}/risk-assessments/{uuid}/ | 
[**client_tax_information_create**](ApplicationApi.md#client_tax_information_create) | **POST** /api/v2/clients/{client_uuid}/tax-informations/ | 
[**client_tax_information_delete**](ApplicationApi.md#client_tax_information_delete) | **DELETE** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 
[**client_tax_information_list**](ApplicationApi.md#client_tax_information_list) | **GET** /api/v2/clients/{client_uuid}/tax-informations/ | 
[**client_tax_information_partial_update**](ApplicationApi.md#client_tax_information_partial_update) | **PATCH** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 
[**client_tax_information_retrieve**](ApplicationApi.md#client_tax_information_retrieve) | **GET** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 
[**client_tax_information_update**](ApplicationApi.md#client_tax_information_update) | **PUT** /api/v2/clients/{client_uuid}/tax-informations/{uuid}/ | 
[**client_twrr_performance**](ApplicationApi.md#client_twrr_performance) | **GET** /api/v2/clients/{uuid}/performance/twrr/ | 
[**client_update**](ApplicationApi.md#client_update) | **PUT** /api/v2/clients/{uuid}/ | 
[**client_verification_create**](ApplicationApi.md#client_verification_create) | **POST** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
[**client_verification_document_create**](ApplicationApi.md#client_verification_document_create) | **POST** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
[**client_verification_document_delete**](ApplicationApi.md#client_verification_document_delete) | **DELETE** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
[**client_verification_document_list**](ApplicationApi.md#client_verification_document_list) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
[**client_verification_document_partial_update**](ApplicationApi.md#client_verification_document_partial_update) | **PATCH** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
[**client_verification_document_retrieve**](ApplicationApi.md#client_verification_document_retrieve) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
[**client_verification_document_update**](ApplicationApi.md#client_verification_document_update) | **PUT** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{uuid}/ | 
[**client_verification_list**](ApplicationApi.md#client_verification_list) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
[**client_verification_retrieve**](ApplicationApi.md#client_verification_retrieve) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/{uuid}/ | 


# **api_v2_clients_activities_list**
> PaginatedFeedActivityListList api_v2_clients_activities_list(client_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.paginated_feed_activity_list_list import PaginatedFeedActivityListList
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)
    target = [
        "",
    ] # [str] |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_clients_activities_list(client_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_activities_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_clients_activities_list(client_uuid, limit=limit, offset=offset, target=target)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_activities_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]
 **target** | **[str]**|  | [optional]

### Return type

[**PaginatedFeedActivityListList**](PaginatedFeedActivityListList.md)

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

# **api_v2_clients_activities_retrieve**
> FeedActivityList api_v2_clients_activities_retrieve(client_uuid, uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.feed_activity_list import FeedActivityList
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_clients_activities_retrieve(client_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_activities_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |

### Return type

[**FeedActivityList**](FeedActivityList.md)

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

# **api_v2_clients_advice_engines_list**
> api_v2_clients_advice_engines_list(client_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_instance.api_v2_clients_advice_engines_list(client_uuid)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_advice_engines_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |

### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_clients_advice_engines_retrieve**
> api_v2_clients_advice_engines_retrieve(client_uuid, uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_instance.api_v2_clients_advice_engines_retrieve(client_uuid, uuid)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_advice_engines_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |

### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_clients_billing_fees_create**
> InvestorFee api_v2_clients_billing_fees_create(client_uuid, investor_fee)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.investor_fee import InvestorFee
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    investor_fee = InvestorFee(
        value=0,
        value_unit=,
        fee_type=,
        concept="concept_example",
        date_from=dateutil_parser('1970-01-01').date(),
        date_to=dateutil_parser('1970-01-01').date(),
        amount_from=-1000000000,
        amount_to=-1000000000,
    ) # InvestorFee | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_clients_billing_fees_create(client_uuid, investor_fee)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_billing_fees_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **investor_fee** | [**InvestorFee**](InvestorFee.md)|  |

### Return type

[**InvestorFee**](InvestorFee.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_clients_billing_fees_destroy**
> api_v2_clients_billing_fees_destroy(client_uuid, uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_instance.api_v2_clients_billing_fees_destroy(client_uuid, uuid)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_billing_fees_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |

### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_clients_billing_fees_list**
> PaginatedInvestorFeeList api_v2_clients_billing_fees_list(client_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.paginated_investor_fee_list import PaginatedInvestorFeeList
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_clients_billing_fees_list(client_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_billing_fees_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_clients_billing_fees_list(client_uuid, limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_billing_fees_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedInvestorFeeList**](PaginatedInvestorFeeList.md)

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

# **api_v2_clients_billing_fees_partial_update**
> InvestorFee api_v2_clients_billing_fees_partial_update(client_uuid, uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.patched_investor_fee import PatchedInvestorFee
from nucoro_api.model.investor_fee import InvestorFee
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 
    patched_investor_fee = PatchedInvestorFee(
        value=0,
        value_unit=,
        fee_type=,
        concept="concept_example",
        date_from=dateutil_parser('1970-01-01').date(),
        date_to=dateutil_parser('1970-01-01').date(),
        amount_from=-1000000000,
        amount_to=-1000000000,
    ) # PatchedInvestorFee |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_clients_billing_fees_partial_update(client_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_billing_fees_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_clients_billing_fees_partial_update(client_uuid, uuid, patched_investor_fee=patched_investor_fee)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_billing_fees_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |
 **patched_investor_fee** | [**PatchedInvestorFee**](PatchedInvestorFee.md)|  | [optional]

### Return type

[**InvestorFee**](InvestorFee.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_clients_billing_fees_retrieve**
> InvestorFee api_v2_clients_billing_fees_retrieve(client_uuid, uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.investor_fee import InvestorFee
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_clients_billing_fees_retrieve(client_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_billing_fees_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |

### Return type

[**InvestorFee**](InvestorFee.md)

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

# **api_v2_clients_billing_fees_update**
> InvestorFee api_v2_clients_billing_fees_update(client_uuid, uuid, investor_fee)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.investor_fee import InvestorFee
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 
    investor_fee = InvestorFee(
        value=0,
        value_unit=,
        fee_type=,
        concept="concept_example",
        date_from=dateutil_parser('1970-01-01').date(),
        date_to=dateutil_parser('1970-01-01').date(),
        amount_from=-1000000000,
        amount_to=-1000000000,
    ) # InvestorFee | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_clients_billing_fees_update(client_uuid, uuid, investor_fee)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_billing_fees_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |
 **investor_fee** | [**InvestorFee**](InvestorFee.md)|  |

### Return type

[**InvestorFee**](InvestorFee.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_clients_billing_invoices_list**
> PaginatedInvoiceListList api_v2_clients_billing_invoices_list(client_uuid)



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.paginated_invoice_list_list import PaginatedInvoiceListList
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    format = "base64" # str |  (optional)
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_clients_billing_invoices_list(client_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_billing_invoices_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_clients_billing_invoices_list(client_uuid, format=format, limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_billing_invoices_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **format** | **str**|  | [optional]
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedInvoiceListList**](PaginatedInvoiceListList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_clients_billing_invoices_retrieve**
> InvoiceList api_v2_clients_billing_invoices_retrieve(client_uuid, uuid)



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.invoice_list import InvoiceList
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 
    format = "base64" # str |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_clients_billing_invoices_retrieve(client_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_billing_invoices_retrieve: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_clients_billing_invoices_retrieve(client_uuid, uuid, format=format)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_billing_invoices_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |
 **format** | **str**|  | [optional]

### Return type

[**InvoiceList**](InvoiceList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_clients_report_statements_list**
> PaginatedStatementList api_v2_clients_report_statements_list(client_uuid)



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.paginated_statement_list import PaginatedStatementList
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    format = "base64" # str |  (optional)
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_clients_report_statements_list(client_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_report_statements_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_clients_report_statements_list(client_uuid, format=format, limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_report_statements_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **format** | **str**|  | [optional]
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedStatementList**](PaginatedStatementList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_clients_report_statements_retrieve**
> Statement api_v2_clients_report_statements_retrieve(client_uuid, uuid)



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.statement import Statement
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 
    format = "base64" # str |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_clients_report_statements_retrieve(client_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_report_statements_retrieve: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_clients_report_statements_retrieve(client_uuid, uuid, format=format)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_report_statements_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |
 **format** | **str**|  | [optional]

### Return type

[**Statement**](Statement.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_clients_report_tax_reports_list**
> PaginatedTaxReportList api_v2_clients_report_tax_reports_list(client_uuid)



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.paginated_tax_report_list import PaginatedTaxReportList
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    format = "base64" # str |  (optional)
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_clients_report_tax_reports_list(client_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_report_tax_reports_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_clients_report_tax_reports_list(client_uuid, format=format, limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_report_tax_reports_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **format** | **str**|  | [optional]
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedTaxReportList**](PaginatedTaxReportList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_clients_report_tax_reports_retrieve**
> TaxReport api_v2_clients_report_tax_reports_retrieve(client_uuid, uuid)



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.tax_report import TaxReport
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 
    format = "base64" # str |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_clients_report_tax_reports_retrieve(client_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_report_tax_reports_retrieve: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_clients_report_tax_reports_retrieve(client_uuid, uuid, format=format)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_report_tax_reports_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |
 **format** | **str**|  | [optional]

### Return type

[**TaxReport**](TaxReport.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_clients_watchlists_create**
> Watchlist api_v2_clients_watchlists_create(client_uuid, watchlist)



Applies filters without declaring them explicitly. How? Creating those filters on the fly.  # How it works. - Declare 'filterable_fields' in the view.     E.g. filterable_fields = ['status', 'name']     __all__ is allowed. It applies filters for all model attributes.  - COMMON_FILTERS: common filters configuration.     - key: field name. E.g. status.     - filter_class. filter class for the field.     - args. Args for the filter_class __init__.  These args are taken from the queryset model         E.g. 'args': {'choices': 'STATUS_CHOICES'} means Filter(choices=queryset.model.STATUS_CHOICES)   # How to use it: class PortfolioListCreateView(CommonFilterMixin, InvestorAPIViewMixin, ListCreateAPIView):     filterable_fields = ['status', 'name']  # Filters priority. 1- Explicit filter declared in the filterset_class 2- Filters declared in COMMON_FILTERS 3- Filterset.FILTER_DEFAULTS

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.watchlist import Watchlist
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    watchlist = Watchlist(
        name="name_example",
        assets=[
            RelatedAssetSerializerWithPermission(
                market="market_example",
                isin="isin_example",
                currency="currency_example",
                ticker="ticker_example",
                name="name_example",
                extra_data={
                    "key": None,
                },
            ),
        ],
    ) # Watchlist | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_clients_watchlists_create(client_uuid, watchlist)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_watchlists_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **watchlist** | [**Watchlist**](Watchlist.md)|  |

### Return type

[**Watchlist**](Watchlist.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_clients_watchlists_destroy**
> api_v2_clients_watchlists_destroy(client_uuid, uuid)



Applies filters without declaring them explicitly. How? Creating those filters on the fly.  # How it works. - Declare 'filterable_fields' in the view.     E.g. filterable_fields = ['status', 'name']     __all__ is allowed. It applies filters for all model attributes.  - COMMON_FILTERS: common filters configuration.     - key: field name. E.g. status.     - filter_class. filter class for the field.     - args. Args for the filter_class __init__.  These args are taken from the queryset model         E.g. 'args': {'choices': 'STATUS_CHOICES'} means Filter(choices=queryset.model.STATUS_CHOICES)   # How to use it: class PortfolioListCreateView(CommonFilterMixin, InvestorAPIViewMixin, ListCreateAPIView):     filterable_fields = ['status', 'name']  # Filters priority. 1- Explicit filter declared in the filterset_class 2- Filters declared in COMMON_FILTERS 3- Filterset.FILTER_DEFAULTS

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_instance.api_v2_clients_watchlists_destroy(client_uuid, uuid)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_watchlists_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |

### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_clients_watchlists_list**
> PaginatedWatchlistList api_v2_clients_watchlists_list(client_uuid)



Applies filters without declaring them explicitly. How? Creating those filters on the fly.  # How it works. - Declare 'filterable_fields' in the view.     E.g. filterable_fields = ['status', 'name']     __all__ is allowed. It applies filters for all model attributes.  - COMMON_FILTERS: common filters configuration.     - key: field name. E.g. status.     - filter_class. filter class for the field.     - args. Args for the filter_class __init__.  These args are taken from the queryset model         E.g. 'args': {'choices': 'STATUS_CHOICES'} means Filter(choices=queryset.model.STATUS_CHOICES)   # How to use it: class PortfolioListCreateView(CommonFilterMixin, InvestorAPIViewMixin, ListCreateAPIView):     filterable_fields = ['status', 'name']  # Filters priority. 1- Explicit filter declared in the filterset_class 2- Filters declared in COMMON_FILTERS 3- Filterset.FILTER_DEFAULTS

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.paginated_watchlist_list import PaginatedWatchlistList
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_clients_watchlists_list(client_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_watchlists_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_clients_watchlists_list(client_uuid, limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_watchlists_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedWatchlistList**](PaginatedWatchlistList.md)

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

# **api_v2_clients_watchlists_retrieve**
> Watchlist api_v2_clients_watchlists_retrieve(client_uuid, uuid)



Applies filters without declaring them explicitly. How? Creating those filters on the fly.  # How it works. - Declare 'filterable_fields' in the view.     E.g. filterable_fields = ['status', 'name']     __all__ is allowed. It applies filters for all model attributes.  - COMMON_FILTERS: common filters configuration.     - key: field name. E.g. status.     - filter_class. filter class for the field.     - args. Args for the filter_class __init__.  These args are taken from the queryset model         E.g. 'args': {'choices': 'STATUS_CHOICES'} means Filter(choices=queryset.model.STATUS_CHOICES)   # How to use it: class PortfolioListCreateView(CommonFilterMixin, InvestorAPIViewMixin, ListCreateAPIView):     filterable_fields = ['status', 'name']  # Filters priority. 1- Explicit filter declared in the filterset_class 2- Filters declared in COMMON_FILTERS 3- Filterset.FILTER_DEFAULTS

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.watchlist import Watchlist
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_clients_watchlists_retrieve(client_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_watchlists_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |

### Return type

[**Watchlist**](Watchlist.md)

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

# **api_v2_clients_watchlists_update**
> Watchlist api_v2_clients_watchlists_update(client_uuid, uuid, watchlist)



Applies filters without declaring them explicitly. How? Creating those filters on the fly.  # How it works. - Declare 'filterable_fields' in the view.     E.g. filterable_fields = ['status', 'name']     __all__ is allowed. It applies filters for all model attributes.  - COMMON_FILTERS: common filters configuration.     - key: field name. E.g. status.     - filter_class. filter class for the field.     - args. Args for the filter_class __init__.  These args are taken from the queryset model         E.g. 'args': {'choices': 'STATUS_CHOICES'} means Filter(choices=queryset.model.STATUS_CHOICES)   # How to use it: class PortfolioListCreateView(CommonFilterMixin, InvestorAPIViewMixin, ListCreateAPIView):     filterable_fields = ['status', 'name']  # Filters priority. 1- Explicit filter declared in the filterset_class 2- Filters declared in COMMON_FILTERS 3- Filterset.FILTER_DEFAULTS

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.watchlist import Watchlist
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 
    watchlist = Watchlist(
        name="name_example",
        assets=[
            RelatedAssetSerializerWithPermission(
                market="market_example",
                isin="isin_example",
                currency="currency_example",
                ticker="ticker_example",
                name="name_example",
                extra_data={
                    "key": None,
                },
            ),
        ],
    ) # Watchlist | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_clients_watchlists_update(client_uuid, uuid, watchlist)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_clients_watchlists_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |
 **watchlist** | [**Watchlist**](Watchlist.md)|  |

### Return type

[**Watchlist**](Watchlist.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_relationship_manager_analytics_allocations_by_asset_retrieve**
> AllocationByAsset api_v2_relationship_manager_analytics_allocations_by_asset_retrieve(relationship_manager_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    relationship_manager_uuid = "relationship_manager_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_relationship_manager_analytics_allocations_by_asset_retrieve(relationship_manager_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_relationship_manager_analytics_allocations_by_asset_retrieve: %s\n" % e)
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
from nucoro_api.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    relationship_manager_uuid = "relationship_manager_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_relationship_manager_analytics_asset_concentration_risk_retrieve(relationship_manager_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_relationship_manager_analytics_asset_concentration_risk_retrieve: %s\n" % e)
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
from nucoro_api.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    relationship_manager_uuid = "relationship_manager_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_relationship_manager_analytics_aum_evolution_retrieve(relationship_manager_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_relationship_manager_analytics_aum_evolution_retrieve: %s\n" % e)
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
from nucoro_api.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    relationship_manager_uuid = "relationship_manager_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_relationship_manager_analytics_aum_portfolio_risk_retrieve(relationship_manager_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_relationship_manager_analytics_aum_portfolio_risk_retrieve: %s\n" % e)
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
from nucoro_api.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    relationship_manager_uuid = "relationship_manager_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_relationship_manager_analytics_aum_retrieve(relationship_manager_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_relationship_manager_analytics_aum_retrieve: %s\n" % e)
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
from nucoro_api.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    relationship_manager_uuid = "relationship_manager_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_relationship_manager_analytics_client_by_risk_retrieve(relationship_manager_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_relationship_manager_analytics_client_by_risk_retrieve: %s\n" % e)
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
from nucoro_api.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    relationship_manager_uuid = "relationship_manager_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_relationship_manager_analytics_client_by_status_retrieve(relationship_manager_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_relationship_manager_analytics_client_by_status_retrieve: %s\n" % e)
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
from nucoro_api.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    relationship_manager_uuid = "relationship_manager_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_relationship_manager_analytics_client_ranking_retrieve(relationship_manager_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_relationship_manager_analytics_client_ranking_retrieve: %s\n" % e)
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
from nucoro_api.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    relationship_manager_uuid = "relationship_manager_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_relationship_manager_analytics_inflows_outflows_retrieve(relationship_manager_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_relationship_manager_analytics_inflows_outflows_retrieve: %s\n" % e)
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
from nucoro_api.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    relationship_manager_uuid = "relationship_manager_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_relationship_manager_analytics_portfolio_risk_performance_retrieve(relationship_manager_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_relationship_manager_analytics_portfolio_risk_performance_retrieve: %s\n" % e)
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
from nucoro_api.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    relationship_manager_uuid = "relationship_manager_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_relationship_manager_analytics_total_active_clients_retrieve(relationship_manager_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_relationship_manager_analytics_total_active_clients_retrieve: %s\n" % e)
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

# **api_v2_relationship_manager_me_retrieve**
> RelationshipManager api_v2_relationship_manager_me_retrieve()



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        api_response = api_instance.api_v2_relationship_manager_me_retrieve()
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_relationship_manager_me_retrieve: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

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

# **api_v2_relationship_manager_retrieve**
> RelationshipManager api_v2_relationship_manager_retrieve(uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_relationship_manager_retrieve(uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_relationship_manager_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**|  |

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

# **api_v2_report_statements_list**
> PaginatedStatementList api_v2_report_statements_list(client_uuid)



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.paginated_statement_list import PaginatedStatementList
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    format = "base64" # str |  (optional)
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_report_statements_list(client_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_report_statements_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_report_statements_list(client_uuid, format=format, limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_report_statements_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **format** | **str**|  | [optional]
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedStatementList**](PaginatedStatementList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_report_statements_retrieve**
> Statement api_v2_report_statements_retrieve(client_uuid, uuid)



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.statement import Statement
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 
    format = "base64" # str |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_report_statements_retrieve(client_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_report_statements_retrieve: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_report_statements_retrieve(client_uuid, uuid, format=format)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_report_statements_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |
 **format** | **str**|  | [optional]

### Return type

[**Statement**](Statement.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_report_tax_report_list**
> PaginatedTaxReportList api_v2_report_tax_report_list(client_uuid)



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.paginated_tax_report_list import PaginatedTaxReportList
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    format = "base64" # str |  (optional)
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_report_tax_report_list(client_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_report_tax_report_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_report_tax_report_list(client_uuid, format=format, limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_report_tax_report_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **format** | **str**|  | [optional]
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedTaxReportList**](PaginatedTaxReportList.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_report_tax_report_retrieve**
> TaxReport api_v2_report_tax_report_retrieve(client_uuid, uuid)



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.tax_report import TaxReport
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 
    format = "base64" # str |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_report_tax_report_retrieve(client_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_report_tax_report_retrieve: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_report_tax_report_retrieve(client_uuid, uuid, format=format)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->api_v2_report_tax_report_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |
 **format** | **str**|  | [optional]

### Return type

[**TaxReport**](TaxReport.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, text/plain


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_address_create**
> AddressCreate client_address_create(client_uuid, address_create)



Create an address for a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.address_create import AddressCreate
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    address_create = AddressCreate(
        line1="line1_example",
        line2="line2_example",
        postcode="postcode_example",
        locality="locality_example",
        country="country_example",
        region="region_example",
    ) # AddressCreate | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_address_create(client_uuid, address_create)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_address_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **address_create** | [**AddressCreate**](AddressCreate.md)|  |

### Return type

[**AddressCreate**](AddressCreate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_address_delete**
> client_address_delete(client_uuid, uuid)



Delete a client address

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_instance.client_address_delete(client_uuid, uuid)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_address_delete: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |

### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_address_partial_update**
> AddressUpdate client_address_partial_update(client_uuid, uuid)



Partial Update a client address

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.address_update import AddressUpdate
from nucoro_api.model.patched_address_update import PatchedAddressUpdate
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 
    patched_address_update = PatchedAddressUpdate(
        line1="line1_example",
        line2="line2_example",
        postcode="postcode_example",
        locality="locality_example",
        country="country_example",
        region="region_example",
    ) # PatchedAddressUpdate |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_address_partial_update(client_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_address_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_address_partial_update(client_uuid, uuid, patched_address_update=patched_address_update)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_address_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |
 **patched_address_update** | [**PatchedAddressUpdate**](PatchedAddressUpdate.md)|  | [optional]

### Return type

[**AddressUpdate**](AddressUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_address_retrieve**
> AddressList client_address_retrieve(client_uuid, uuid)



Retrieve a client address

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.address_list import AddressList
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_address_retrieve(client_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_address_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |

### Return type

[**AddressList**](AddressList.md)

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

# **client_address_update**
> AddressUpdate client_address_update(client_uuid, uuid, address_update)



Update a client address

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.address_update import AddressUpdate
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 
    address_update = AddressUpdate(
        line1="line1_example",
        line2="line2_example",
        postcode="postcode_example",
        locality="locality_example",
        country="country_example",
        region="region_example",
    ) # AddressUpdate | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_address_update(client_uuid, uuid, address_update)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_address_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |
 **address_update** | [**AddressUpdate**](AddressUpdate.md)|  |

### Return type

[**AddressUpdate**](AddressUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_addresses_list**
> PaginatedAddressListList client_addresses_list(client_uuid)



List address for a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.paginated_address_list_list import PaginatedAddressListList
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_addresses_list(client_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_addresses_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_addresses_list(client_uuid, limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_addresses_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedAddressListList**](PaginatedAddressListList.md)

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

# **client_bank_account_create**
> BankAccountCreateUpdate client_bank_account_create(client_uuid)



Create a bank account for a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.bank_account_create_update import BankAccountCreateUpdate
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    bank_account_create_update = BankAccountCreateUpdate(
        account_number="account_number_example",
        account_sort_code="account_sort_code_example",
        account_holder_name="account_holder_name_example",
        joint=True,
        bank_name="bank_name_example",
        iban="iban_example",
        swift_code="swift_code_example",
    ) # BankAccountCreateUpdate |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_bank_account_create(client_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_bank_account_create: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_bank_account_create(client_uuid, bank_account_create_update=bank_account_create_update)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_bank_account_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **bank_account_create_update** | [**BankAccountCreateUpdate**](BankAccountCreateUpdate.md)|  | [optional]

### Return type

[**BankAccountCreateUpdate**](BankAccountCreateUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_bank_account_delete**
> client_bank_account_delete(client_uuid, uuid)



Delete a client bank account

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_instance.client_bank_account_delete(client_uuid, uuid)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_bank_account_delete: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |

### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_bank_account_partial_update**
> BankAccountCreateUpdate client_bank_account_partial_update(client_uuid, uuid)



Partial Update a client bank account

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.bank_account_create_update import BankAccountCreateUpdate
from nucoro_api.model.patched_bank_account_create_update import PatchedBankAccountCreateUpdate
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 
    patched_bank_account_create_update = PatchedBankAccountCreateUpdate(
        account_number="account_number_example",
        account_sort_code="account_sort_code_example",
        account_holder_name="account_holder_name_example",
        joint=True,
        bank_name="bank_name_example",
        iban="iban_example",
        swift_code="swift_code_example",
    ) # PatchedBankAccountCreateUpdate |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_bank_account_partial_update(client_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_bank_account_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_bank_account_partial_update(client_uuid, uuid, patched_bank_account_create_update=patched_bank_account_create_update)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_bank_account_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |
 **patched_bank_account_create_update** | [**PatchedBankAccountCreateUpdate**](PatchedBankAccountCreateUpdate.md)|  | [optional]

### Return type

[**BankAccountCreateUpdate**](BankAccountCreateUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_bank_account_retrieve**
> BankAccountList client_bank_account_retrieve(client_uuid, uuid)



Retrieve a client bank account

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.bank_account_list import BankAccountList
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_bank_account_retrieve(client_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_bank_account_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |

### Return type

[**BankAccountList**](BankAccountList.md)

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

# **client_bank_account_update**
> BankAccountCreateUpdate client_bank_account_update(client_uuid, uuid)



Update a client bank account

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.bank_account_create_update import BankAccountCreateUpdate
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 
    bank_account_create_update = BankAccountCreateUpdate(
        account_number="account_number_example",
        account_sort_code="account_sort_code_example",
        account_holder_name="account_holder_name_example",
        joint=True,
        bank_name="bank_name_example",
        iban="iban_example",
        swift_code="swift_code_example",
    ) # BankAccountCreateUpdate |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_bank_account_update(client_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_bank_account_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_bank_account_update(client_uuid, uuid, bank_account_create_update=bank_account_create_update)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_bank_account_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |
 **bank_account_create_update** | [**BankAccountCreateUpdate**](BankAccountCreateUpdate.md)|  | [optional]

### Return type

[**BankAccountCreateUpdate**](BankAccountCreateUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_bank_accounts_list**
> PaginatedBankAccountListList client_bank_accounts_list(client_uuid)



List Bank Account for a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.paginated_bank_account_list_list import PaginatedBankAccountListList
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_bank_accounts_list(client_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_bank_accounts_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_bank_accounts_list(client_uuid, limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_bank_accounts_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedBankAccountListList**](PaginatedBankAccountListList.md)

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

# **client_complete_onboarding**
> ClientDetail client_complete_onboarding(client_uuid, uuid, client_detail)



Complete onboarding for a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.client_detail import ClientDetail
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 
    client_detail = ClientDetail(
        email="email_example",
        birthdate=dateutil_parser('1970-01-01').date(),
        tos_consent=True,
        marketing_consent=True,
        data_consent=True,
        tos_consent_date=dateutil_parser('1970-01-01').date(),
        country_birth=CountryField(
            code="code_example",
            iso3="iso3_example",
            name="name_example",
            name_en_gb="name_en_gb_example",
            name_en_ch="name_en_ch_example",
            name_fr_ch="name_fr_ch_example",
            name_de_ch="name_de_ch_example",
            name_es_es="name_es_es_example",
            name_it_ch="name_it_ch_example",
            long_name="long_name_example",
            long_name_en_gb="long_name_en_gb_example",
            long_name_en_ch="long_name_en_ch_example",
            long_name_fr_ch="long_name_fr_ch_example",
            long_name_de_ch="long_name_de_ch_example",
            long_name_es_es="long_name_es_es_example",
            long_name_it_ch="long_name_it_ch_example",
            eea_country=True,
        ),
        referred_by="referred_by_example",
        extra_data={
            "key": None,
        },
        onboarded_by="onboarded_by_example",
        comments="comments_example",
        email_verified=True,
        email_verify_last_request=dateutil_parser('1970-01-01T00:00:00.00Z'),
        title=,
        first_name="first_name_example",
        middle_name="middle_name_example",
        last_name="last_name_example",
        gender=,
        marital_status=,
        phone_number="phone_number_example",
        phone_number_verified=dateutil_parser('1970-01-01T00:00:00.00Z'),
        language="language_example",
        employment_status=,
        profession="profession_example",
        referral_code="referral_code_example",
        activated=dateutil_parser('1970-01-01T00:00:00.00Z'),
        utm_source="utm_source_example",
        utm_medium="utm_medium_example",
        utm_campaign="utm_campaign_example",
        utm_term="utm_term_example",
        utm_content="utm_content_example",
    ) # ClientDetail | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_complete_onboarding(client_uuid, uuid, client_detail)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_complete_onboarding: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |
 **client_detail** | [**ClientDetail**](ClientDetail.md)|  |

### Return type

[**ClientDetail**](ClientDetail.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_create**
> ClientCreate client_create(client_create)



Create a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.client_create import ClientCreate
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
    api_instance = application_api.ApplicationApi(api_client)
    client_create = ClientCreate(
        email="email_example",
        birthdate=dateutil_parser('1970-01-01').date(),
        title=,
        first_name="first_name_example",
        last_name="last_name_example",
        middle_name="middle_name_example",
        gender=,
        marital_status=,
        language="language_example",
        employment_status=,
        activated=dateutil_parser('1970-01-01T00:00:00.00Z'),
        profile={
            "key": None,
        },
        password="password_example",
        referral_code="referral_code_example",
        utm_source="utm_source_example",
        utm_medium="utm_medium_example",
        utm_campaign="utm_campaign_example",
        utm_term="utm_term_example",
        utm_content="utm_content_example",
        tos_consent=True,
        data_consent=True,
        marketing_consent=True,
        extra_data={
            "key": None,
        },
        phone_number="phone_number_example",
    ) # ClientCreate | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_create(client_create)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_create** | [**ClientCreate**](ClientCreate.md)|  |

### Return type

[**ClientCreate**](ClientCreate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_document_create**
> Document client_document_create(client_uuid, uuid, name, doc_type, path)



Create a document for a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.document import Document
from nucoro_api.model.doc_type_enum import DocTypeEnum
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 
    name = "name_example" # str | 
    doc_type = DocTypeEnum("ID_PERSONAL") # DocTypeEnum | 
    path = "path_example" # str | 
    description = "description_example" # str |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_document_create(client_uuid, uuid, name, doc_type, path)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_document_create: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_document_create(client_uuid, uuid, name, doc_type, path, description=description)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_document_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |
 **name** | **str**|  |
 **doc_type** | [**DocTypeEnum**](DocTypeEnum.md)|  |
 **path** | **str**|  |
 **description** | **str**|  | [optional]

### Return type

[**Document**](Document.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_document_delete**
> client_document_delete(client_uuid, uuid)



Delete a client document

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_instance.client_document_delete(client_uuid, uuid)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_document_delete: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |

### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_document_list**
> PaginatedDocumentList client_document_list(client_uuid)



List Document for a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.paginated_document_list import PaginatedDocumentList
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    client = 1 # int |  (optional)
    description = "description_example" # str |  (optional)
    doc_type = [
        "BANK_DETAILS",
    ] # [str] |  (optional)
    extra_data = {
        "key": None,
    } # {str: (bool, date, datetime, dict, float, int, list, str, none_type)}, none_type | Additional document attributes for the specific portal (optional)
    limit = 1 # int | Number of results to return per page. (optional)
    name = "name_example" # str |  (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_document_list(client_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_document_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_document_list(client_uuid, client=client, description=description, doc_type=doc_type, extra_data=extra_data, limit=limit, name=name, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_document_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **client** | **int**|  | [optional]
 **description** | **str**|  | [optional]
 **doc_type** | **[str]**|  | [optional]
 **extra_data** | [**{str: (bool, date, datetime, dict, float, int, list, str, none_type)}, none_type**](bool, date, datetime, dict, float, int, list, str, none_type.md)| Additional document attributes for the specific portal | [optional]
 **limit** | **int**| Number of results to return per page. | [optional]
 **name** | **str**|  | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedDocumentList**](PaginatedDocumentList.md)

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

# **client_document_retrieve**
> Document client_document_retrieve(client_uuid, uuid)



Retrieve a client document

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.document import Document
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_document_retrieve(client_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_document_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |

### Return type

[**Document**](Document.md)

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

# **client_list**
> PaginatedClientDetailList client_list()



List client for a Relationship manager

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.paginated_client_detail_list import PaginatedClientDetailList
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
    api_instance = application_api.ApplicationApi(api_client)
    external_custodian_id = "external_custodian_id_example" # str |  (optional)
    extra_data = {
        "key": None,
    } # {str: (bool, date, datetime, dict, float, int, list, str, none_type)}, none_type | Additional client attributes for the specific portal (optional)
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)
    ordering = [
        "-activated",
    ] # [str] | Ordering (optional)
    search = "search_example" # str | A search term. (optional)
    status = "ACTIVE" # str |  (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_list(external_custodian_id=external_custodian_id, extra_data=extra_data, limit=limit, offset=offset, ordering=ordering, search=search, status=status)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **external_custodian_id** | **str**|  | [optional]
 **extra_data** | [**{str: (bool, date, datetime, dict, float, int, list, str, none_type)}, none_type**](bool, date, datetime, dict, float, int, list, str, none_type.md)| Additional client attributes for the specific portal | [optional]
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]
 **ordering** | **[str]**| Ordering | [optional]
 **search** | **str**| A search term. | [optional]
 **status** | **str**|  | [optional]

### Return type

[**PaginatedClientDetailList**](PaginatedClientDetailList.md)

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

# **client_nationality_create**
> NationalityCreate client_nationality_create(client_uuid, nationality_create)



Create nationality for a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.nationality_create import NationalityCreate
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    nationality_create = NationalityCreate(
        country="country_example",
        document_number="document_number_example",
        document_type="document_type_example",
    ) # NationalityCreate | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_nationality_create(client_uuid, nationality_create)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_nationality_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **nationality_create** | [**NationalityCreate**](NationalityCreate.md)|  |

### Return type

[**NationalityCreate**](NationalityCreate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_nationlities_list**
> PaginatedNationalityListList client_nationlities_list(client_uuid)



List nationlities for a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.paginated_nationality_list_list import PaginatedNationalityListList
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_nationlities_list(client_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_nationlities_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_nationlities_list(client_uuid, limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_nationlities_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedNationalityListList**](PaginatedNationalityListList.md)

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

# **client_nationlity_delete**
> client_nationlity_delete(client_uuid, uuid)



Delete a client nationality

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_instance.client_nationlity_delete(client_uuid, uuid)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_nationlity_delete: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |

### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_nationlity_partial_update**
> NationalityUpdate client_nationlity_partial_update(client_uuid, uuid)



Partial Update a client nationality

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.patched_nationality_update import PatchedNationalityUpdate
from nucoro_api.model.nationality_update import NationalityUpdate
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 
    patched_nationality_update = PatchedNationalityUpdate(
        country="country_example",
        document_number="document_number_example",
        document_type="document_type_example",
    ) # PatchedNationalityUpdate |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_nationlity_partial_update(client_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_nationlity_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_nationlity_partial_update(client_uuid, uuid, patched_nationality_update=patched_nationality_update)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_nationlity_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |
 **patched_nationality_update** | [**PatchedNationalityUpdate**](PatchedNationalityUpdate.md)|  | [optional]

### Return type

[**NationalityUpdate**](NationalityUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_nationlity_retrieve**
> NationalityList client_nationlity_retrieve(client_uuid, uuid)



Retrieve a client nationality

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.nationality_list import NationalityList
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_nationlity_retrieve(client_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_nationlity_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |

### Return type

[**NationalityList**](NationalityList.md)

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

# **client_nationlity_update**
> NationalityUpdate client_nationlity_update(client_uuid, uuid, nationality_update)



Update a client nationality

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.nationality_update import NationalityUpdate
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 
    nationality_update = NationalityUpdate(
        country="country_example",
        document_number="document_number_example",
        document_type="document_type_example",
    ) # NationalityUpdate | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_nationlity_update(client_uuid, uuid, nationality_update)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_nationlity_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |
 **nationality_update** | [**NationalityUpdate**](NationalityUpdate.md)|  |

### Return type

[**NationalityUpdate**](NationalityUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_partial_update**
> ApplicationClientUpdate client_partial_update(uuid)



Partial Update a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.patched_application_client_update import PatchedApplicationClientUpdate
from nucoro_api.model.application_client_update import ApplicationClientUpdate
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
    api_instance = application_api.ApplicationApi(api_client)
    uuid = "uuid_example" # str | 
    patched_application_client_update = PatchedApplicationClientUpdate(
        email="email_example",
        birthdate=dateutil_parser('1970-01-01').date(),
        tos_consent=True,
        marketing_consent=True,
        data_consent=True,
        country_birth=CountryField(
            code="code_example",
            iso3="iso3_example",
            name="name_example",
            name_en_gb="name_en_gb_example",
            name_en_ch="name_en_ch_example",
            name_fr_ch="name_fr_ch_example",
            name_de_ch="name_de_ch_example",
            name_es_es="name_es_es_example",
            name_it_ch="name_it_ch_example",
            long_name="long_name_example",
            long_name_en_gb="long_name_en_gb_example",
            long_name_en_ch="long_name_en_ch_example",
            long_name_fr_ch="long_name_fr_ch_example",
            long_name_de_ch="long_name_de_ch_example",
            long_name_es_es="long_name_es_es_example",
            long_name_it_ch="long_name_it_ch_example",
            eea_country=True,
        ),
        referred_by="referred_by_example",
        extra_data={
            "key": None,
        },
        onboarded_by="onboarded_by_example",
        password="password_example",
        email_verified_last_request=dateutil_parser('1970-01-01T00:00:00.00Z'),
        comments="comments_example",
        email_verified=True,
        email_verify_last_request=dateutil_parser('1970-01-01T00:00:00.00Z'),
        title=,
        first_name="first_name_example",
        middle_name="middle_name_example",
        last_name="last_name_example",
        gender=,
        marital_status=,
        phone_number="phone_number_example",
        phone_number_verified=dateutil_parser('1970-01-01T00:00:00.00Z'),
        language="language_example",
        employment_status=,
        profession="profession_example",
        referral_code="referral_code_example",
        activated=dateutil_parser('1970-01-01T00:00:00.00Z'),
        utm_source="utm_source_example",
        utm_medium="utm_medium_example",
        utm_campaign="utm_campaign_example",
        utm_term="utm_term_example",
        utm_content="utm_content_example",
    ) # PatchedApplicationClientUpdate |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_partial_update(uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_partial_update(uuid, patched_application_client_update=patched_application_client_update)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**|  |
 **patched_application_client_update** | [**PatchedApplicationClientUpdate**](PatchedApplicationClientUpdate.md)|  | [optional]

### Return type

[**ApplicationClientUpdate**](ApplicationClientUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_retrieve**
> ClientDetail client_retrieve(uuid)



Retrieve a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.client_detail import ClientDetail
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
    api_instance = application_api.ApplicationApi(api_client)
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_retrieve(uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**|  |

### Return type

[**ClientDetail**](ClientDetail.md)

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

# **client_risk_assessment_create**
> Assessment client_risk_assessment_create(client_uuid, assessment)



Create a risk assessment for a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.assessment import Assessment
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    assessment = Assessment(
        completed=dateutil_parser('1970-01-01T00:00:00.00Z'),
        choices=[
            RiskChoiceQuestionCode(
                code="z",
                order=0,
                description="description_example",
                question_code="question_code_example",
            ),
        ],
        status=AssessmentStatusEnum("PENDING"),
    ) # Assessment | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_risk_assessment_create(client_uuid, assessment)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_risk_assessment_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **assessment** | [**Assessment**](Assessment.md)|  |

### Return type

[**Assessment**](Assessment.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_risk_assessment_delete**
> client_risk_assessment_delete(client_uuid, uuid)



Delete a client risk assessment

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_instance.client_risk_assessment_delete(client_uuid, uuid)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_risk_assessment_delete: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |

### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_risk_assessment_list**
> PaginatedAssessmentList client_risk_assessment_list(client_uuid)



List Risk Assessment for a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.paginated_assessment_list import PaginatedAssessmentList
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)
    status = [
        "COMPLETED",
    ] # [str] |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_risk_assessment_list(client_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_risk_assessment_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_risk_assessment_list(client_uuid, limit=limit, offset=offset, status=status)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_risk_assessment_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]
 **status** | **[str]**|  | [optional]

### Return type

[**PaginatedAssessmentList**](PaginatedAssessmentList.md)

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

# **client_risk_assessment_partial_update**
> Assessment client_risk_assessment_partial_update(client_uuid, uuid)



Partial Update a client risk assessment

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.assessment import Assessment
from nucoro_api.model.patched_assessment import PatchedAssessment
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 
    patched_assessment = PatchedAssessment(
        completed=dateutil_parser('1970-01-01T00:00:00.00Z'),
        choices=[
            RiskChoiceQuestionCode(
                code="z",
                order=0,
                description="description_example",
                question_code="question_code_example",
            ),
        ],
        status=AssessmentStatusEnum("PENDING"),
    ) # PatchedAssessment |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_risk_assessment_partial_update(client_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_risk_assessment_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_risk_assessment_partial_update(client_uuid, uuid, patched_assessment=patched_assessment)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_risk_assessment_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |
 **patched_assessment** | [**PatchedAssessment**](PatchedAssessment.md)|  | [optional]

### Return type

[**Assessment**](Assessment.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_risk_assessment_retrieve**
> Assessment client_risk_assessment_retrieve(client_uuid, uuid)



Retrieve a client risk assessment

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.assessment import Assessment
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_risk_assessment_retrieve(client_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_risk_assessment_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |

### Return type

[**Assessment**](Assessment.md)

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

# **client_tax_information_create**
> TaxInformationCreateUpdate client_tax_information_create(client_uuid, tax_information_create_update)



Create a tax inforation for a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.tax_information_create_update import TaxInformationCreateUpdate
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    tax_information_create_update = TaxInformationCreateUpdate(
        country="country_example",
        document_number="document_number_example",
        document_type="document_type_example",
    ) # TaxInformationCreateUpdate | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_tax_information_create(client_uuid, tax_information_create_update)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_tax_information_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **tax_information_create_update** | [**TaxInformationCreateUpdate**](TaxInformationCreateUpdate.md)|  |

### Return type

[**TaxInformationCreateUpdate**](TaxInformationCreateUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_tax_information_delete**
> client_tax_information_delete(client_uuid, uuid)



Delete a client tax inforation

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_instance.client_tax_information_delete(client_uuid, uuid)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_tax_information_delete: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |

### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_tax_information_list**
> PaginatedTaxInformationListList client_tax_information_list(client_uuid)



List tax information for a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.paginated_tax_information_list_list import PaginatedTaxInformationListList
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_tax_information_list(client_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_tax_information_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_tax_information_list(client_uuid, limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_tax_information_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedTaxInformationListList**](PaginatedTaxInformationListList.md)

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

# **client_tax_information_partial_update**
> TaxInformationCreateUpdate client_tax_information_partial_update(client_uuid, uuid)



Partial Update a client tax inforation

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.tax_information_create_update import TaxInformationCreateUpdate
from nucoro_api.model.patched_tax_information_create_update import PatchedTaxInformationCreateUpdate
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 
    patched_tax_information_create_update = PatchedTaxInformationCreateUpdate(
        country="country_example",
        document_number="document_number_example",
        document_type="document_type_example",
    ) # PatchedTaxInformationCreateUpdate |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_tax_information_partial_update(client_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_tax_information_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_tax_information_partial_update(client_uuid, uuid, patched_tax_information_create_update=patched_tax_information_create_update)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_tax_information_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |
 **patched_tax_information_create_update** | [**PatchedTaxInformationCreateUpdate**](PatchedTaxInformationCreateUpdate.md)|  | [optional]

### Return type

[**TaxInformationCreateUpdate**](TaxInformationCreateUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_tax_information_retrieve**
> TaxInformationList client_tax_information_retrieve(client_uuid, uuid)



Retrieve a client tax inforation

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.tax_information_list import TaxInformationList
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_tax_information_retrieve(client_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_tax_information_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |

### Return type

[**TaxInformationList**](TaxInformationList.md)

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

# **client_tax_information_update**
> TaxInformationCreateUpdate client_tax_information_update(client_uuid, uuid, tax_information_create_update)



Update a client tax inforation

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.tax_information_create_update import TaxInformationCreateUpdate
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 
    tax_information_create_update = TaxInformationCreateUpdate(
        country="country_example",
        document_number="document_number_example",
        document_type="document_type_example",
    ) # TaxInformationCreateUpdate | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_tax_information_update(client_uuid, uuid, tax_information_create_update)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_tax_information_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |
 **tax_information_create_update** | [**TaxInformationCreateUpdate**](TaxInformationCreateUpdate.md)|  |

### Return type

[**TaxInformationCreateUpdate**](TaxInformationCreateUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_twrr_performance**
> ClientPerformance client_twrr_performance(client_uuid, uuid)



Calculate TWRR Performance for client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.client_performance import ClientPerformance
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_twrr_performance(client_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_twrr_performance: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |

### Return type

[**ClientPerformance**](ClientPerformance.md)

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

# **client_update**
> ApplicationClientUpdate client_update(uuid, application_client_update)



Update a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.application_client_update import ApplicationClientUpdate
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
    api_instance = application_api.ApplicationApi(api_client)
    uuid = "uuid_example" # str | 
    application_client_update = ApplicationClientUpdate(
        email="email_example",
        birthdate=dateutil_parser('1970-01-01').date(),
        tos_consent=True,
        marketing_consent=True,
        data_consent=True,
        country_birth=CountryField(
            code="code_example",
            iso3="iso3_example",
            name="name_example",
            name_en_gb="name_en_gb_example",
            name_en_ch="name_en_ch_example",
            name_fr_ch="name_fr_ch_example",
            name_de_ch="name_de_ch_example",
            name_es_es="name_es_es_example",
            name_it_ch="name_it_ch_example",
            long_name="long_name_example",
            long_name_en_gb="long_name_en_gb_example",
            long_name_en_ch="long_name_en_ch_example",
            long_name_fr_ch="long_name_fr_ch_example",
            long_name_de_ch="long_name_de_ch_example",
            long_name_es_es="long_name_es_es_example",
            long_name_it_ch="long_name_it_ch_example",
            eea_country=True,
        ),
        referred_by="referred_by_example",
        extra_data={
            "key": None,
        },
        onboarded_by="onboarded_by_example",
        password="password_example",
        email_verified_last_request=dateutil_parser('1970-01-01T00:00:00.00Z'),
        comments="comments_example",
        email_verified=True,
        email_verify_last_request=dateutil_parser('1970-01-01T00:00:00.00Z'),
        title=,
        first_name="first_name_example",
        middle_name="middle_name_example",
        last_name="last_name_example",
        gender=,
        marital_status=,
        phone_number="phone_number_example",
        phone_number_verified=dateutil_parser('1970-01-01T00:00:00.00Z'),
        language="language_example",
        employment_status=,
        profession="profession_example",
        referral_code="referral_code_example",
        activated=dateutil_parser('1970-01-01T00:00:00.00Z'),
        utm_source="utm_source_example",
        utm_medium="utm_medium_example",
        utm_campaign="utm_campaign_example",
        utm_term="utm_term_example",
        utm_content="utm_content_example",
    ) # ApplicationClientUpdate | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_update(uuid, application_client_update)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**|  |
 **application_client_update** | [**ApplicationClientUpdate**](ApplicationClientUpdate.md)|  |

### Return type

[**ApplicationClientUpdate**](ApplicationClientUpdate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_verification_create**
> VerificationCreate client_verification_create(client_uuid, verify_type_code, verification_create)



Create a verification for a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.verification_create import VerificationCreate
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    verify_type_code = "verify_type_code_example" # str | 
    verification_create = VerificationCreate(
        verify_type=VerifyTypeEnum("IDENTITY"),
        status=StatusBd7Enum("PENDING"),
        result=,
    ) # VerificationCreate | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_verification_create(client_uuid, verify_type_code, verification_create)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_verification_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **verify_type_code** | **str**|  |
 **verification_create** | [**VerificationCreate**](VerificationCreate.md)|  |

### Return type

[**VerificationCreate**](VerificationCreate.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_verification_document_create**
> VerificationWithType client_verification_document_create(client_uuid, verify_type_code, uuid, verify_type, created, updated, verification_documents)



Create a verification Document for a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.verification_with_type import VerificationWithType
from nucoro_api.model.verify_type_enum import VerifyTypeEnum
from nucoro_api.model.verification_document_create import VerificationDocumentCreate
from nucoro_api.model.status_bd7_enum import StatusBd7Enum
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    verify_type_code = "verify_type_code_example" # str | 
    uuid = "uuid_example" # str | 
    verify_type = VerifyTypeEnum("IDENTITY") # VerifyTypeEnum | 
    created = dateutil_parser('1970-01-01T00:00:00.00Z') # datetime | 
    updated = dateutil_parser('1970-01-01T00:00:00.00Z') # datetime | 
    verification_documents = VerificationDocumentCreate(
        document_type="document_type_example",
        uuid="uuid_example",
        document_front=Document(
            doc_type=DocTypeEnum("ID_PERSONAL"),
            description="description_example",
            extra_data={
                "key": None,
            },
        ),
        document_back=Document(
            doc_type=DocTypeEnum("ID_PERSONAL"),
            description="description_example",
            extra_data={
                "key": None,
            },
        ),
    ) # [VerificationDocumentCreate], none_type | 
    status = StatusBd7Enum("PENDING") # StatusBd7Enum |  (optional)
    result =  # dict |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_verification_document_create(client_uuid, verify_type_code, uuid, verify_type, created, updated, verification_documents)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_verification_document_create: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_verification_document_create(client_uuid, verify_type_code, uuid, verify_type, created, updated, verification_documents, status=status, result=result)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_verification_document_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **verify_type_code** | **str**|  |
 **uuid** | **str**|  |
 **verify_type** | [**VerifyTypeEnum**](VerifyTypeEnum.md)|  |
 **created** | **datetime**|  |
 **updated** | **datetime**|  |
 **verification_documents** | [**[VerificationDocumentCreate], none_type**](VerificationDocumentCreate.md)|  |
 **status** | [**StatusBd7Enum**](StatusBd7Enum.md)|  | [optional]
 **result** | **dict**|  | [optional]

### Return type

[**VerificationWithType**](VerificationWithType.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_verification_document_delete**
> client_verification_document_delete(client_uuid, uuid, verify_type_code)



Delete a client verificatoin document

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 
    verify_type_code = "verify_type_code_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_instance.client_verification_document_delete(client_uuid, uuid, verify_type_code)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_verification_document_delete: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |
 **verify_type_code** | **str**|  |

### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_verification_document_list**
> PaginatedVerificationDocumentList client_verification_document_list(client_uuid, verify_type_code)



List Verification Document for a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.paginated_verification_document_list import PaginatedVerificationDocumentList
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    verify_type_code = "verify_type_code_example" # str | 
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_verification_document_list(client_uuid, verify_type_code)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_verification_document_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_verification_document_list(client_uuid, verify_type_code, limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_verification_document_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **verify_type_code** | **str**|  |
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedVerificationDocumentList**](PaginatedVerificationDocumentList.md)

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

# **client_verification_document_partial_update**
> VerificationDocument client_verification_document_partial_update(client_uuid, uuid, verify_type_code)



Partial Update a client verification document

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.document_type_enum import DocumentTypeEnum
from nucoro_api.model.verification_document import VerificationDocument
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 
    verify_type_code = "verify_type_code_example" # str | 
    uuid2 = "uuid_example" # str |  (optional)
    document_type = DocumentTypeEnum("passport") # DocumentTypeEnum |  (optional)
    document_front = "document_front_example" # str |  (optional)
    document_back = "document_back_example" # str |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_verification_document_partial_update(client_uuid, uuid, verify_type_code)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_verification_document_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_verification_document_partial_update(client_uuid, uuid, verify_type_code, uuid2=uuid2, document_type=document_type, document_front=document_front, document_back=document_back)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_verification_document_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |
 **verify_type_code** | **str**|  |
 **uuid2** | **str**|  | [optional]
 **document_type** | [**DocumentTypeEnum**](DocumentTypeEnum.md)|  | [optional]
 **document_front** | **str**|  | [optional]
 **document_back** | **str**|  | [optional]

### Return type

[**VerificationDocument**](VerificationDocument.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_verification_document_retrieve**
> VerificationDocument client_verification_document_retrieve(client_uuid, uuid, verify_type_code)



Retrieve a client verification document

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.verification_document import VerificationDocument
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 
    verify_type_code = "verify_type_code_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_verification_document_retrieve(client_uuid, uuid, verify_type_code)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_verification_document_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |
 **verify_type_code** | **str**|  |

### Return type

[**VerificationDocument**](VerificationDocument.md)

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

# **client_verification_document_update**
> VerificationDocument client_verification_document_update(client_uuid, uuid, verify_type_code, uuid2, document_type, document_front, document_back)



Update a client verification document

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.document_type_enum import DocumentTypeEnum
from nucoro_api.model.verification_document import VerificationDocument
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 
    verify_type_code = "verify_type_code_example" # str | 
    uuid2 = "uuid_example" # str | 
    document_type = DocumentTypeEnum("passport") # DocumentTypeEnum | 
    document_front = "document_front_example" # str | 
    document_back = "document_back_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_verification_document_update(client_uuid, uuid, verify_type_code, uuid2, document_type, document_front, document_back)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_verification_document_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |
 **verify_type_code** | **str**|  |
 **uuid2** | **str**|  |
 **document_type** | [**DocumentTypeEnum**](DocumentTypeEnum.md)|  |
 **document_front** | **str**|  |
 **document_back** | **str**|  |

### Return type

[**VerificationDocument**](VerificationDocument.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_verification_list**
> PaginatedVerificationListList client_verification_list(client_uuid, verify_type_code)



List Verification for a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.paginated_verification_list_list import PaginatedVerificationListList
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    verify_type_code = "verify_type_code_example" # str | 
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_verification_list(client_uuid, verify_type_code)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_verification_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_verification_list(client_uuid, verify_type_code, limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_verification_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **verify_type_code** | **str**|  |
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedVerificationListList**](PaginatedVerificationListList.md)

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

# **client_verification_retrieve**
> VerificationList client_verification_retrieve(client_uuid, uuid, verify_type_code)



Retrieve a client verification 

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import application_api
from nucoro_api.model.verification_list import VerificationList
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    uuid = "uuid_example" # str | 
    verify_type_code = "verify_type_code_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_verification_retrieve(client_uuid, uuid, verify_type_code)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApplicationApi->client_verification_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **uuid** | **str**|  |
 **verify_type_code** | **str**|  |

### Return type

[**VerificationList**](VerificationList.md)

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

