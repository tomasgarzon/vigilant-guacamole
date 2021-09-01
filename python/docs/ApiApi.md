# nucoro_api.ApiApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_schema_retrieve**](ApiApi.md#api_schema_retrieve) | **GET** /api/schema/ | 
[**api_v2_advice_engines_ets_categories_list**](ApiApi.md#api_v2_advice_engines_ets_categories_list) | **GET** /api/v2/advice-engines/ets/categories/ | 
[**api_v2_advice_engines_ets_core_category_groups_list**](ApiApi.md#api_v2_advice_engines_ets_core_category_groups_list) | **GET** /api/v2/advice-engines/ets/core-category-groups/ | 
[**api_v2_advice_engines_ets_forecast_create**](ApiApi.md#api_v2_advice_engines_ets_forecast_create) | **POST** /api/v2/advice-engines/ets/forecast/ | 
[**api_v2_advice_engines_ets_preset_category_groups_list**](ApiApi.md#api_v2_advice_engines_ets_preset_category_groups_list) | **GET** /api/v2/advice-engines/ets/preset-category-groups/ | 
[**api_v2_advice_engines_model_portfolio_forecast_create**](ApiApi.md#api_v2_advice_engines_model_portfolio_forecast_create) | **POST** /api/v2/advice-engines/model-portfolio/forecast/ | 
[**api_v2_advice_engines_model_portfolio_model_portfolios_list**](ApiApi.md#api_v2_advice_engines_model_portfolio_model_portfolios_list) | **GET** /api/v2/advice-engines/model-portfolio/model-portfolios/ | 
[**api_v2_advice_engines_model_portfolio_model_portfolios_retrieve**](ApiApi.md#api_v2_advice_engines_model_portfolio_model_portfolios_retrieve) | **GET** /api/v2/advice-engines/model-portfolio/model-portfolios/{uuid}/ | 
[**api_v2_assets_categories_list**](ApiApi.md#api_v2_assets_categories_list) | **GET** /api/v2/assets/categories/ | 
[**api_v2_assets_intraday_prices_latest_retrieve**](ApiApi.md#api_v2_assets_intraday_prices_latest_retrieve) | **GET** /api/v2/assets/{asset_identifier}/intraday-prices/latest/ | 
[**api_v2_assets_intraday_prices_list**](ApiApi.md#api_v2_assets_intraday_prices_list) | **GET** /api/v2/assets/{asset_identifier}/intraday-prices/ | 
[**api_v2_assets_list**](ApiApi.md#api_v2_assets_list) | **GET** /api/v2/assets/ | 
[**api_v2_assets_performance_list**](ApiApi.md#api_v2_assets_performance_list) | **GET** /api/v2/assets/{asset_identifier}/performance/ | 
[**api_v2_assets_prices_latest_retrieve**](ApiApi.md#api_v2_assets_prices_latest_retrieve) | **GET** /api/v2/assets/{asset_identifier}/prices/latest/ | 
[**api_v2_assets_prices_list**](ApiApi.md#api_v2_assets_prices_list) | **GET** /api/v2/assets/{asset_identifier}/prices/ | 
[**api_v2_assets_retrieve**](ApiApi.md#api_v2_assets_retrieve) | **GET** /api/v2/assets/{asset_identifier}/ | 
[**api_v2_billing_invoices_list**](ApiApi.md#api_v2_billing_invoices_list) | **GET** /api/v2/billing/invoices/ | 
[**api_v2_billing_invoices_retrieve**](ApiApi.md#api_v2_billing_invoices_retrieve) | **GET** /api/v2/billing/invoices/{uuid}/ | 
[**api_v2_broker_orders_create**](ApiApi.md#api_v2_broker_orders_create) | **POST** /api/v2/broker/orders/ | 
[**api_v2_broker_orders_destroy**](ApiApi.md#api_v2_broker_orders_destroy) | **DELETE** /api/v2/broker/orders/{uuid}/ | 
[**api_v2_broker_orders_list**](ApiApi.md#api_v2_broker_orders_list) | **GET** /api/v2/broker/orders/ | 
[**api_v2_broker_orders_retrieve**](ApiApi.md#api_v2_broker_orders_retrieve) | **GET** /api/v2/broker/orders/{uuid}/ | 
[**api_v2_clients_me_verify_email_create**](ApiApi.md#api_v2_clients_me_verify_email_create) | **POST** /api/v2/clients/me/verify/email/ | 
[**api_v2_clients_national_documents_list**](ApiApi.md#api_v2_clients_national_documents_list) | **GET** /api/v2/clients/national_documents/ | 
[**api_v2_clients_referral_retrieve**](ApiApi.md#api_v2_clients_referral_retrieve) | **GET** /api/v2/clients/referral/{referral_code}/ | 
[**api_v2_clients_verify_email_update**](ApiApi.md#api_v2_clients_verify_email_update) | **PUT** /api/v2/clients/{uuid}/verify/email/ | 
[**api_v2_feeds_access_logs_list**](ApiApi.md#api_v2_feeds_access_logs_list) | **GET** /api/v2/feeds/access-logs/ | 
[**api_v2_feeds_activities_list**](ApiApi.md#api_v2_feeds_activities_list) | **GET** /api/v2/feeds/activities/ | 
[**api_v2_goals_create**](ApiApi.md#api_v2_goals_create) | **POST** /api/v2/goals/ | 
[**api_v2_goals_decumulation_create**](ApiApi.md#api_v2_goals_decumulation_create) | **POST** /api/v2/goals/decumulation/ | 
[**api_v2_goals_destroy**](ApiApi.md#api_v2_goals_destroy) | **DELETE** /api/v2/goals/{uuid}/ | 
[**api_v2_goals_forecast_create**](ApiApi.md#api_v2_goals_forecast_create) | **POST** /api/v2/goals/forecast/ | 
[**api_v2_goals_list**](ApiApi.md#api_v2_goals_list) | **GET** /api/v2/goals/ | 
[**api_v2_goals_partial_update**](ApiApi.md#api_v2_goals_partial_update) | **PATCH** /api/v2/goals/{uuid}/ | 
[**api_v2_goals_retrieve**](ApiApi.md#api_v2_goals_retrieve) | **GET** /api/v2/goals/{uuid}/ | 
[**api_v2_inbox_conversation_detail_messages_list**](ApiApi.md#api_v2_inbox_conversation_detail_messages_list) | **GET** /api/v2/inbox/conversations/{conversation}/ | 
[**api_v2_inbox_conversations_create**](ApiApi.md#api_v2_inbox_conversations_create) | **POST** /api/v2/inbox/conversations/ | 
[**api_v2_inbox_conversations_list**](ApiApi.md#api_v2_inbox_conversations_list) | **GET** /api/v2/inbox/conversations/ | 
[**api_v2_inbox_conversations_messages_attachments_retrieve**](ApiApi.md#api_v2_inbox_conversations_messages_attachments_retrieve) | **GET** /api/v2/inbox/conversations/{conversation}/messages/{message}/attachments/{uuid}/ | 
[**api_v2_inbox_conversations_messages_create**](ApiApi.md#api_v2_inbox_conversations_messages_create) | **POST** /api/v2/inbox/conversations/{conversation}/messages/ | 
[**api_v2_mobile_version_retrieve**](ApiApi.md#api_v2_mobile_version_retrieve) | **GET** /api/v2/mobile/{platform}/version/ | 
[**api_v2_platform_settings_list**](ApiApi.md#api_v2_platform_settings_list) | **GET** /api/v2/platform/settings/ | 
[**api_v2_portal_countries_list**](ApiApi.md#api_v2_portal_countries_list) | **GET** /api/v2/portal/countries/ | 
[**api_v2_portal_settings_retrieve**](ApiApi.md#api_v2_portal_settings_retrieve) | **GET** /api/v2/portal/settings/ | 
[**api_v2_portal_tos_current_retrieve**](ApiApi.md#api_v2_portal_tos_current_retrieve) | **GET** /api/v2/portal/tos/current/ | 
[**api_v2_portal_tos_list**](ApiApi.md#api_v2_portal_tos_list) | **GET** /api/v2/portal/tos/ | 
[**api_v2_portal_tos_retrieve**](ApiApi.md#api_v2_portal_tos_retrieve) | **GET** /api/v2/portal/tos/{uuid}/ | 
[**api_v2_portfolios_activities_list**](ApiApi.md#api_v2_portfolios_activities_list) | **GET** /api/v2/portfolios/{portfolio_uuid}/activities/ | 
[**api_v2_portfolios_activities_retrieve**](ApiApi.md#api_v2_portfolios_activities_retrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/activities/{uuid}/ | 
[**api_v2_portfolios_allocations_end_day**](ApiApi.md#api_v2_portfolios_allocations_end_day) | **GET** /api/v2/portfolios/{portfolio_uuid}/allocations/end-day/ | 
[**api_v2_portfolios_allocations_end_day_by_date_retrieve**](ApiApi.md#api_v2_portfolios_allocations_end_day_by_date_retrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/allocations/end-day/{allocation_date}/ | 
[**api_v2_portfolios_allocations_end_day_latest_retrieve**](ApiApi.md#api_v2_portfolios_allocations_end_day_latest_retrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/allocations/end-day/latest/ | 
[**api_v2_portfolios_allocations_history_retrieve**](ApiApi.md#api_v2_portfolios_allocations_history_retrieve) | **GET** /api/v2/portfolios/{portfolio}/allocations/history/ | 
[**api_v2_portfolios_allocations_intraday_latest_retrieve**](ApiApi.md#api_v2_portfolios_allocations_intraday_latest_retrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/allocations/intraday/latest/ | 
[**api_v2_portfolios_allocations_list**](ApiApi.md#api_v2_portfolios_allocations_list) | **GET** /api/v2/portfolios/{portfolio_uuid}/allocations/ | 
[**api_v2_portfolios_allocations_retrieve**](ApiApi.md#api_v2_portfolios_allocations_retrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/allocations/{id}/ | 
[**api_v2_portfolios_create**](ApiApi.md#api_v2_portfolios_create) | **POST** /api/v2/portfolios/ | 
[**api_v2_portfolios_deposits_create**](ApiApi.md#api_v2_portfolios_deposits_create) | **POST** /api/v2/portfolios/{portfolio_uuid}/deposits/ | 
[**api_v2_portfolios_deposits_destroy**](ApiApi.md#api_v2_portfolios_deposits_destroy) | **DELETE** /api/v2/portfolios/{portfolio_uuid}/deposits/{uuid}/ | 
[**api_v2_portfolios_deposits_list**](ApiApi.md#api_v2_portfolios_deposits_list) | **GET** /api/v2/portfolios/{portfolio_uuid}/deposits/ | 
[**api_v2_portfolios_deposits_retrieve**](ApiApi.md#api_v2_portfolios_deposits_retrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/deposits/{uuid}/ | 
[**api_v2_portfolios_destroy**](ApiApi.md#api_v2_portfolios_destroy) | **DELETE** /api/v2/portfolios/{uuid}/ | 
[**api_v2_portfolios_list**](ApiApi.md#api_v2_portfolios_list) | **GET** /api/v2/portfolios/ | 
[**api_v2_portfolios_orders_create**](ApiApi.md#api_v2_portfolios_orders_create) | **POST** /api/v2/portfolios/{portfolio_uuid}/orders/ | 
[**api_v2_portfolios_orders_destroy**](ApiApi.md#api_v2_portfolios_orders_destroy) | **DELETE** /api/v2/portfolios/{portfolio_uuid}/orders/{uuid}/ | 
[**api_v2_portfolios_orders_list**](ApiApi.md#api_v2_portfolios_orders_list) | **GET** /api/v2/portfolios/{portfolio_uuid}/orders/ | 
[**api_v2_portfolios_orders_retrieve**](ApiApi.md#api_v2_portfolios_orders_retrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/orders/{uuid}/ | 
[**api_v2_portfolios_partial_update**](ApiApi.md#api_v2_portfolios_partial_update) | **PATCH** /api/v2/portfolios/{uuid}/ | 
[**api_v2_portfolios_performance_mwrr_list**](ApiApi.md#api_v2_portfolios_performance_mwrr_list) | **GET** /api/v2/portfolios/{portfolio_uuid}/performance/mwrr/ | 
[**api_v2_portfolios_performance_positions_list**](ApiApi.md#api_v2_portfolios_performance_positions_list) | **GET** /api/v2/portfolios/{portfolio_uuid}/performance/positions/ | 
[**api_v2_portfolios_performance_twrr_list**](ApiApi.md#api_v2_portfolios_performance_twrr_list) | **GET** /api/v2/portfolios/{portfolio_uuid}/performance/twrr/ | 
[**api_v2_portfolios_portfoliotypes_list**](ApiApi.md#api_v2_portfolios_portfoliotypes_list) | **GET** /api/v2/portfolios/portfoliotypes/ | 
[**api_v2_portfolios_portfoliotypes_restrictions_list**](ApiApi.md#api_v2_portfolios_portfoliotypes_restrictions_list) | **GET** /api/v2/portfolios/portfoliotypes/{code}/restrictions/ | 
[**api_v2_portfolios_rebalances_list**](ApiApi.md#api_v2_portfolios_rebalances_list) | **GET** /api/v2/portfolios/{portfolio_uuid}/rebalances/ | 
[**api_v2_portfolios_rebalances_retrieve**](ApiApi.md#api_v2_portfolios_rebalances_retrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/rebalances/{uuid}/ | 
[**api_v2_portfolios_restrictions_retrieve**](ApiApi.md#api_v2_portfolios_restrictions_retrieve) | **GET** /api/v2/portfolios/{uuid}/restrictions/ | 
[**api_v2_portfolios_retrieve**](ApiApi.md#api_v2_portfolios_retrieve) | **GET** /api/v2/portfolios/{uuid}/ | 
[**api_v2_portfolios_update**](ApiApi.md#api_v2_portfolios_update) | **PUT** /api/v2/portfolios/{uuid}/ | 
[**api_v2_portfolios_withdrawals_create**](ApiApi.md#api_v2_portfolios_withdrawals_create) | **POST** /api/v2/portfolios/{portfolio_uuid}/withdrawals/ | 
[**api_v2_portfolios_withdrawals_destroy**](ApiApi.md#api_v2_portfolios_withdrawals_destroy) | **DELETE** /api/v2/portfolios/{portfolio_uuid}/withdrawals/{uuid}/ | 
[**api_v2_portfolios_withdrawals_list**](ApiApi.md#api_v2_portfolios_withdrawals_list) | **GET** /api/v2/portfolios/{portfolio_uuid}/withdrawals/ | 
[**api_v2_portfolios_withdrawals_retrieve**](ApiApi.md#api_v2_portfolios_withdrawals_retrieve) | **GET** /api/v2/portfolios/{portfolio_uuid}/withdrawals/{uuid}/ | 
[**api_v2_risk_questions_list**](ApiApi.md#api_v2_risk_questions_list) | **GET** /api/v2/risk/questions/ | 
[**api_v2_verifications_verifier_webhook_create**](ApiApi.md#api_v2_verifications_verifier_webhook_create) | **POST** /api/v2/verifications/verifier_webhook/{verifier}/{action}/ | 
[**api_v2_websocket_authentication_ticket_create**](ApiApi.md#api_v2_websocket_authentication_ticket_create) | **POST** /api/v2/websocket/authentication/ticket/ | 
[**api_v2_websocket_authorize_asset_create**](ApiApi.md#api_v2_websocket_authorize_asset_create) | **POST** /api/v2/websocket/authorize/asset/ | 
[**api_v2_websocket_authorize_create**](ApiApi.md#api_v2_websocket_authorize_create) | **POST** /api/v2/websocket/authorize/ | 
[**api_v2_websocket_authorize_portfolio_create**](ApiApi.md#api_v2_websocket_authorize_portfolio_create) | **POST** /api/v2/websocket/authorize/portfolio/ | 
[**api_v2_websocket_on_subscribe_create**](ApiApi.md#api_v2_websocket_on_subscribe_create) | **POST** /api/v2/websocket/on_subscribe/ | 
[**api_v2_websocket_on_unsubscribe_create**](ApiApi.md#api_v2_websocket_on_unsubscribe_create) | **POST** /api/v2/websocket/on_unsubscribe/ | 


# **api_schema_retrieve**
> {str: (bool, date, datetime, dict, float, int, list, str, none_type)} api_schema_retrieve()



OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
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
    api_instance = api_api.ApiApi(api_client)
    format = "json" # str |  (optional)
    lang = "de-ch" # str |  (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_schema_retrieve(format=format, lang=lang)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_schema_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**|  | [optional]
 **lang** | **str**|  | [optional]

### Return type

**{str: (bool, date, datetime, dict, float, int, list, str, none_type)}**

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.oai.openapi, application/yaml, application/vnd.oai.openapi+json, application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_advice_engines_ets_categories_list**
> PaginatedCategoryList api_v2_advice_engines_ets_categories_list()



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.paginated_category_list import PaginatedCategoryList
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
    api_instance = api_api.ApiApi(api_client)
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_advice_engines_ets_categories_list(limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_advice_engines_ets_categories_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedCategoryList**](PaginatedCategoryList.md)

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

# **api_v2_advice_engines_ets_core_category_groups_list**
> PaginatedCoreCategoryGroupList api_v2_advice_engines_ets_core_category_groups_list()



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.paginated_core_category_group_list import PaginatedCoreCategoryGroupList
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
    api_instance = api_api.ApiApi(api_client)
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_advice_engines_ets_core_category_groups_list(limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_advice_engines_ets_core_category_groups_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedCoreCategoryGroupList**](PaginatedCoreCategoryGroupList.md)

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

# **api_v2_advice_engines_ets_forecast_create**
> ETSForecastRequest api_v2_advice_engines_ets_forecast_create(ets_forecast_request)



The forecast positions and amounts for the time_horizon and  risk_level chosen. Taking into account the initial_auto_deposit and the initial_amount jointly with the selected filters.

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.ets_forecast_request import ETSForecastRequest
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
    api_instance = api_api.ApiApi(api_client)
    ets_forecast_request = ETSForecastRequest(
        time_horizon=1,
        initial_amount=1,
        recurring_amount=0,
        recurring_period=0,
        risk_level=1,
        favourite_categories=[
            "favourite_categories_example",
        ],
        excluded_categories=[
            "excluded_categories_example",
        ],
    ) # ETSForecastRequest | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_advice_engines_ets_forecast_create(ets_forecast_request)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_advice_engines_ets_forecast_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ets_forecast_request** | [**ETSForecastRequest**](ETSForecastRequest.md)|  |

### Return type

[**ETSForecastRequest**](ETSForecastRequest.md)

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

# **api_v2_advice_engines_ets_preset_category_groups_list**
> PaginatedPresetCategoryGroupList api_v2_advice_engines_ets_preset_category_groups_list()



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.paginated_preset_category_group_list import PaginatedPresetCategoryGroupList
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
    api_instance = api_api.ApiApi(api_client)
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_advice_engines_ets_preset_category_groups_list(limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_advice_engines_ets_preset_category_groups_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedPresetCategoryGroupList**](PaginatedPresetCategoryGroupList.md)

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

# **api_v2_advice_engines_model_portfolio_forecast_create**
> ModelPortfolioForecastRequest api_v2_advice_engines_model_portfolio_forecast_create(model_portfolio_forecast_request)



The forecast positions and amounts for the time_horizon chosen. Taking into account the initial_auto_deposit and the initial_amount jointly with the selected filters.

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.model_portfolio_forecast_request import ModelPortfolioForecastRequest
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
    api_instance = api_api.ApiApi(api_client)
    model_portfolio_forecast_request = ModelPortfolioForecastRequest(
        time_horizon=1,
        initial_amount=1,
        recurring_amount=0,
        recurring_period=0,
        model_portfolio="model_portfolio_example",
    ) # ModelPortfolioForecastRequest | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_advice_engines_model_portfolio_forecast_create(model_portfolio_forecast_request)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_advice_engines_model_portfolio_forecast_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_portfolio_forecast_request** | [**ModelPortfolioForecastRequest**](ModelPortfolioForecastRequest.md)|  |

### Return type

[**ModelPortfolioForecastRequest**](ModelPortfolioForecastRequest.md)

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

# **api_v2_advice_engines_model_portfolio_model_portfolios_list**
> PaginatedInvestorModelPortfolioList api_v2_advice_engines_model_portfolio_model_portfolios_list()



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.paginated_investor_model_portfolio_list import PaginatedInvestorModelPortfolioList
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
    api_instance = api_api.ApiApi(api_client)
    extra_data = {
        "key": None,
    } # {str: (bool, date, datetime, dict, float, int, list, str, none_type)}, none_type | Additional ModelPortfolio attributes (optional)
    limit = 1 # int | Number of results to return per page. (optional)
    name = "name_example" # str |  (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)
    risk_higher = 1 # int |  (optional)
    risk_level = 1 # int |  (optional)
    risk_lower = 1 # int |  (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_advice_engines_model_portfolio_model_portfolios_list(extra_data=extra_data, limit=limit, name=name, offset=offset, risk_higher=risk_higher, risk_level=risk_level, risk_lower=risk_lower)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_advice_engines_model_portfolio_model_portfolios_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extra_data** | [**{str: (bool, date, datetime, dict, float, int, list, str, none_type)}, none_type**](bool, date, datetime, dict, float, int, list, str, none_type.md)| Additional ModelPortfolio attributes | [optional]
 **limit** | **int**| Number of results to return per page. | [optional]
 **name** | **str**|  | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]
 **risk_higher** | **int**|  | [optional]
 **risk_level** | **int**|  | [optional]
 **risk_lower** | **int**|  | [optional]

### Return type

[**PaginatedInvestorModelPortfolioList**](PaginatedInvestorModelPortfolioList.md)

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

# **api_v2_advice_engines_model_portfolio_model_portfolios_retrieve**
> InvestorModelPortfolio api_v2_advice_engines_model_portfolio_model_portfolios_retrieve(uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.investor_model_portfolio import InvestorModelPortfolio
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
    api_instance = api_api.ApiApi(api_client)
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_advice_engines_model_portfolio_model_portfolios_retrieve(uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_advice_engines_model_portfolio_model_portfolios_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**|  |

### Return type

[**InvestorModelPortfolio**](InvestorModelPortfolio.md)

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

# **api_v2_assets_categories_list**
> PaginatedAssetCategoryList api_v2_assets_categories_list()



Retrieve all asset categories

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.paginated_asset_category_list import PaginatedAssetCategoryList
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
    api_instance = api_api.ApiApi(api_client)
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)
    type = "type_example" # str |  (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_assets_categories_list(limit=limit, offset=offset, type=type)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_assets_categories_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]
 **type** | **str**|  | [optional]

### Return type

[**PaginatedAssetCategoryList**](PaginatedAssetCategoryList.md)

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

# **api_v2_assets_intraday_prices_latest_retrieve**
> IntradayPrice api_v2_assets_intraday_prices_latest_retrieve(asset_identifier)



Prices (from an Asset) list view endpoints.  GET: Prices retrieve (rest framework builtin overriding get_object)

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.intraday_price import IntradayPrice
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
    api_instance = api_api.ApiApi(api_client)
    asset_identifier = "asset_identifier_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_assets_intraday_prices_latest_retrieve(asset_identifier)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_assets_intraday_prices_latest_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_identifier** | **str**|  |

### Return type

[**IntradayPrice**](IntradayPrice.md)

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

# **api_v2_assets_intraday_prices_list**
> PaginatedIntradayPriceList api_v2_assets_intraday_prices_list(asset_identifier)



Prices (from an Asset) list view endpoints.  GET: Prices retrieve (rest framework builtin overriding get_object)

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.paginated_intraday_price_list import PaginatedIntradayPriceList
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
    api_instance = api_api.ApiApi(api_client)
    asset_identifier = "asset_identifier_example" # str | 
    date_after = dateutil_parser('1970-01-01').date() # date |  (optional)
    date_before = dateutil_parser('1970-01-01').date() # date |  (optional)
    datetime_after = dateutil_parser('1970-01-01T00:00:00.00Z') # datetime |  (optional)
    datetime_before = dateutil_parser('1970-01-01T00:00:00.00Z') # datetime |  (optional)
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_assets_intraday_prices_list(asset_identifier)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_assets_intraday_prices_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_assets_intraday_prices_list(asset_identifier, date_after=date_after, date_before=date_before, datetime_after=datetime_after, datetime_before=datetime_before, limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_assets_intraday_prices_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_identifier** | **str**|  |
 **date_after** | **date**|  | [optional]
 **date_before** | **date**|  | [optional]
 **datetime_after** | **datetime**|  | [optional]
 **datetime_before** | **datetime**|  | [optional]
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedIntradayPriceList**](PaginatedIntradayPriceList.md)

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

# **api_v2_assets_list**
> PaginatedAssetListList api_v2_assets_list()



A list of Assets filtered by category codes. Default is an empty dict which returns the whole universe.

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.paginated_asset_list_list import PaginatedAssetListList
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
    api_instance = api_api.ApiApi(api_client)
    asset_type = "ETF" # str |  (optional)
    category_code = [
        "category_code_example",
    ] # [str] |  (optional)
    category_type = [
        "category_type_example",
    ] # [str] |  (optional)
    currency = 1 # int |  (optional)
    isin = "isin_example" # str |  (optional)
    limit = 1 # int | Number of results to return per page. (optional)
    market = 1 # int |  (optional)
    name = "name_example" # str |  (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)
    status = "ACTIVE" # str |  (optional)
    ticker = "ticker_example" # str |  (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_assets_list(asset_type=asset_type, category_code=category_code, category_type=category_type, currency=currency, isin=isin, limit=limit, market=market, name=name, offset=offset, status=status, ticker=ticker)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_assets_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_type** | **str**|  | [optional]
 **category_code** | **[str]**|  | [optional]
 **category_type** | **[str]**|  | [optional]
 **currency** | **int**|  | [optional]
 **isin** | **str**|  | [optional]
 **limit** | **int**| Number of results to return per page. | [optional]
 **market** | **int**|  | [optional]
 **name** | **str**|  | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]
 **status** | **str**|  | [optional]
 **ticker** | **str**|  | [optional]

### Return type

[**PaginatedAssetListList**](PaginatedAssetListList.md)

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

# **api_v2_assets_performance_list**
> PaginatedAssetGrowthList api_v2_assets_performance_list(asset_identifier)



Retrieve asset's yearly performance.  This View overwrites ListAPIView's 'list' method because it doesn't have any hook that allows us to call 'get_asset_price_year_graph after the filtering is applied.

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.paginated_asset_growth_list import PaginatedAssetGrowthList
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
    api_instance = api_api.ApiApi(api_client)
    asset_identifier = "asset_identifier_example" # str | 
    date_year_after = 3.14 # float |  (optional)
    date_year_before = 3.14 # float |  (optional)
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_assets_performance_list(asset_identifier)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_assets_performance_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_assets_performance_list(asset_identifier, date_year_after=date_year_after, date_year_before=date_year_before, limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_assets_performance_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_identifier** | **str**|  |
 **date_year_after** | **float**|  | [optional]
 **date_year_before** | **float**|  | [optional]
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedAssetGrowthList**](PaginatedAssetGrowthList.md)

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

# **api_v2_assets_prices_latest_retrieve**
> Price api_v2_assets_prices_latest_retrieve(asset_identifier)



Prices (from an Asset) list view endpoints.  GET: Prices retrieve (rest framework builtin overriding get_object)

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.price import Price
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
    api_instance = api_api.ApiApi(api_client)
    asset_identifier = "asset_identifier_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_assets_prices_latest_retrieve(asset_identifier)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_assets_prices_latest_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_identifier** | **str**|  |

### Return type

[**Price**](Price.md)

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

# **api_v2_assets_prices_list**
> PaginatedPriceList api_v2_assets_prices_list(asset_identifier)



Prices (from an Asset) list view endpoints.  GET: Prices retrieve (rest framework builtin overriding get_object)

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.paginated_price_list import PaginatedPriceList
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
    api_instance = api_api.ApiApi(api_client)
    asset_identifier = "asset_identifier_example" # str | 
    date_after = dateutil_parser('1970-01-01').date() # date |  (optional)
    date_before = dateutil_parser('1970-01-01').date() # date |  (optional)
    datetime_after = dateutil_parser('1970-01-01T00:00:00.00Z') # datetime |  (optional)
    datetime_before = dateutil_parser('1970-01-01T00:00:00.00Z') # datetime |  (optional)
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_assets_prices_list(asset_identifier)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_assets_prices_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_assets_prices_list(asset_identifier, date_after=date_after, date_before=date_before, datetime_after=datetime_after, datetime_before=datetime_before, limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_assets_prices_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_identifier** | **str**|  |
 **date_after** | **date**|  | [optional]
 **date_before** | **date**|  | [optional]
 **datetime_after** | **datetime**|  | [optional]
 **datetime_before** | **datetime**|  | [optional]
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedPriceList**](PaginatedPriceList.md)

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

# **api_v2_assets_retrieve**
> AssetDetail api_v2_assets_retrieve(asset_identifier)



Allows get an asset instance by * UUID * ISIN * ISIN & MARKET_CODE * ISIN & MARKET_CODE & CURRENCY_CODE  Examples:     * assets/a66633d7-4418-4c85-9582-01c80df531d4/     * assets/IE00B579F325/     * assets/IE00B579F325_XETR_GBP/     * assets/IE00B579F325_XETR/

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.asset_detail import AssetDetail
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
    api_instance = api_api.ApiApi(api_client)
    asset_identifier = "asset_identifier_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_assets_retrieve(asset_identifier)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_assets_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_identifier** | **str**|  |

### Return type

[**AssetDetail**](AssetDetail.md)

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

# **api_v2_billing_invoices_list**
> PaginatedInvoiceListList api_v2_billing_invoices_list()



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
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
    api_instance = api_api.ApiApi(api_client)
    date_from = dateutil_parser('1970-01-01').date() # date |  (optional)
    date_to = dateutil_parser('1970-01-01').date() # date |  (optional)
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)
    status = "CHARGED" # str |  (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_billing_invoices_list(date_from=date_from, date_to=date_to, limit=limit, offset=offset, status=status)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_billing_invoices_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date_from** | **date**|  | [optional]
 **date_to** | **date**|  | [optional]
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]
 **status** | **str**|  | [optional]

### Return type

[**PaginatedInvoiceListList**](PaginatedInvoiceListList.md)

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

# **api_v2_billing_invoices_retrieve**
> InvoiceDetails api_v2_billing_invoices_retrieve(uuid)



This mixin implements binary responses. It supports PDF and Base64. It can be adapted to any django View that implements the retrieve method

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.invoice_details import InvoiceDetails
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
    api_instance = api_api.ApiApi(api_client)
    uuid = "uuid_example" # str | 
    format = "base64" # str |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_billing_invoices_retrieve(uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_billing_invoices_retrieve: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_billing_invoices_retrieve(uuid, format=format)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_billing_invoices_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**|  |
 **format** | **str**|  | [optional]

### Return type

[**InvoiceDetails**](InvoiceDetails.md)

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

# **api_v2_broker_orders_create**
> CreateOrder api_v2_broker_orders_create(portfolio_uuid, create_order)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.create_order import CreateOrder
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    create_order = CreateOrder(
        shares=1,
        asset=RelatedAssetSerializerWithAssetCategories(
            market="market_example",
            isin="isin_example",
            currency="currency_example",
            ticker="ticker_example",
            name="name_example",
            extra_data={
                "key": None,
            },
        ),
        portfolio="portfolio_example",
        order_type=OrderTypeEnum("BUY"),
        method=CreateOrderMethodEnum("MARKET"),
        limit_price=0.01,
        stop_price=0.01,
        duration=,
    ) # CreateOrder | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_broker_orders_create(portfolio_uuid, create_order)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_broker_orders_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
 **create_order** | [**CreateOrder**](CreateOrder.md)|  |

### Return type

[**CreateOrder**](CreateOrder.md)

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

# **api_v2_broker_orders_destroy**
> api_v2_broker_orders_destroy(portfolio_uuid, uuid)



Cancel or request cancellation to the broker

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_instance.api_v2_broker_orders_destroy(portfolio_uuid, uuid)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_broker_orders_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
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

# **api_v2_broker_orders_list**
> PaginatedOrderListList api_v2_broker_orders_list(portfolio_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.paginated_order_list_list import PaginatedOrderListList
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    advice_external_id = "advice_external_id_example" # str |  (optional)
    asset = "asset_example" # str |  (optional)
    completed_after = dateutil_parser('1970-01-01').date() # date |  (optional)
    completed_before = dateutil_parser('1970-01-01').date() # date |  (optional)
    extra_data = {
        "key": None,
    } # {str: (bool, date, datetime, dict, float, int, list, str, none_type)}, none_type | Additional order attributes for the specific portal (optional)
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)
    portfolio = "portfolio_example" # str |  (optional)
    status = "status_example" # str |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_broker_orders_list(portfolio_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_broker_orders_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_broker_orders_list(portfolio_uuid, advice_external_id=advice_external_id, asset=asset, completed_after=completed_after, completed_before=completed_before, extra_data=extra_data, limit=limit, offset=offset, portfolio=portfolio, status=status)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_broker_orders_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
 **advice_external_id** | **str**|  | [optional]
 **asset** | **str**|  | [optional]
 **completed_after** | **date**|  | [optional]
 **completed_before** | **date**|  | [optional]
 **extra_data** | [**{str: (bool, date, datetime, dict, float, int, list, str, none_type)}, none_type**](bool, date, datetime, dict, float, int, list, str, none_type.md)| Additional order attributes for the specific portal | [optional]
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]
 **portfolio** | **str**|  | [optional]
 **status** | **str**|  | [optional]

### Return type

[**PaginatedOrderListList**](PaginatedOrderListList.md)

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

# **api_v2_broker_orders_retrieve**
> OrderList api_v2_broker_orders_retrieve(portfolio_uuid, uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.order_list import OrderList
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_broker_orders_retrieve(portfolio_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_broker_orders_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
 **uuid** | **str**|  |

### Return type

[**OrderList**](OrderList.md)

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

# **api_v2_clients_me_verify_email_create**
> EmailVerifyRequest api_v2_clients_me_verify_email_create()



Request e-mail account verification notification.

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.email_verify_request import EmailVerifyRequest
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
    api_instance = api_api.ApiApi(api_client)
    email_verify_request = EmailVerifyRequest(
        email="email_example",
    ) # EmailVerifyRequest |  (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_clients_me_verify_email_create(email_verify_request=email_verify_request)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_clients_me_verify_email_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email_verify_request** | [**EmailVerifyRequest**](EmailVerifyRequest.md)|  | [optional]

### Return type

[**EmailVerifyRequest**](EmailVerifyRequest.md)

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

# **api_v2_clients_national_documents_list**
> PaginatedNationalDocumentList api_v2_clients_national_documents_list()



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.paginated_national_document_list import PaginatedNationalDocumentList
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
    api_instance = api_api.ApiApi(api_client)
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_clients_national_documents_list(limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_clients_national_documents_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedNationalDocumentList**](PaginatedNationalDocumentList.md)

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

# **api_v2_clients_referral_retrieve**
> ClientReferral api_v2_clients_referral_retrieve(referral_code)



Retrieves the currently logged in client referral code

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.client_referral import ClientReferral
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
    api_instance = api_api.ApiApi(api_client)
    referral_code = "referral_code_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_clients_referral_retrieve(referral_code)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_clients_referral_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referral_code** | **str**|  |

### Return type

[**ClientReferral**](ClientReferral.md)

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

# **api_v2_clients_verify_email_update**
> EmailVerifyView api_v2_clients_verify_email_update(uuid, email_verify_view)



Verify e-mail account with the given email token.

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.email_verify_view import EmailVerifyView
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
    api_instance = api_api.ApiApi(api_client)
    uuid = "uuid_example" # str | 
    email_verify_view = EmailVerifyView(
        token="token_example",
    ) # EmailVerifyView | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_clients_verify_email_update(uuid, email_verify_view)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_clients_verify_email_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**|  |
 **email_verify_view** | [**EmailVerifyView**](EmailVerifyView.md)|  |

### Return type

[**EmailVerifyView**](EmailVerifyView.md)

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

# **api_v2_feeds_access_logs_list**
> PaginatedAccessLogList api_v2_feeds_access_logs_list()



Retrieves the latest access to the client's account

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.paginated_access_log_list import PaginatedAccessLogList
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
    api_instance = api_api.ApiApi(api_client)
    browser = "browser_example" # str |  (optional)
    browser_version = "browser_version_example" # str |  (optional)
    channel = "ANDROID" # str |  (optional)
    city = "city_example" # str |  (optional)
    country = 1 # int |  (optional)
    device_brand = "device_brand_example" # str |  (optional)
    device_model = "device_model_example" # str |  (optional)
    ip_address = "ip_address_example" # str |  (optional)
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)
    os = "os_example" # str |  (optional)
    os_version = "os_version_example" # str |  (optional)
    user_agent = "user_agent_example" # str |  (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_feeds_access_logs_list(browser=browser, browser_version=browser_version, channel=channel, city=city, country=country, device_brand=device_brand, device_model=device_model, ip_address=ip_address, limit=limit, offset=offset, os=os, os_version=os_version, user_agent=user_agent)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_feeds_access_logs_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **browser** | **str**|  | [optional]
 **browser_version** | **str**|  | [optional]
 **channel** | **str**|  | [optional]
 **city** | **str**|  | [optional]
 **country** | **int**|  | [optional]
 **device_brand** | **str**|  | [optional]
 **device_model** | **str**|  | [optional]
 **ip_address** | **str**|  | [optional]
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]
 **os** | **str**|  | [optional]
 **os_version** | **str**|  | [optional]
 **user_agent** | **str**|  | [optional]

### Return type

[**PaginatedAccessLogList**](PaginatedAccessLogList.md)

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

# **api_v2_feeds_activities_list**
> PaginatedFeedActivityListList api_v2_feeds_activities_list()



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
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
    api_instance = api_api.ApiApi(api_client)
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)
    target = [
        "",
    ] # [str] |  (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_feeds_activities_list(limit=limit, offset=offset, target=target)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_feeds_activities_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

# **api_v2_goals_create**
> Goal api_v2_goals_create(goal_uuid, goal)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.goal import Goal
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
    api_instance = api_api.ApiApi(api_client)
    goal_uuid = "goal_uuid_example" # str | 
    goal = Goal(
        name="name_example",
        portfolio="portfolio_example",
        goal_amount=0.1,
        deadline=dateutil_parser('1970-01-01').date(),
        initial_amount=0.1,
        recurring_amount=-1000000000000,
        risk_level=0,
    ) # Goal | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_goals_create(goal_uuid, goal)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_goals_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **goal_uuid** | **str**|  |
 **goal** | [**Goal**](Goal.md)|  |

### Return type

[**Goal**](Goal.md)

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

# **api_v2_goals_decumulation_create**
> ForecastDecumulationRequest api_v2_goals_decumulation_create(forecast_decumulation_request)



Return a Goal Forecast Decumulation

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.forecast_decumulation_request import ForecastDecumulationRequest
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
    api_instance = api_api.ApiApi(api_client)
    forecast_decumulation_request = ForecastDecumulationRequest(
        initial_amount=0,
        recurring_amount=0,
        risk_level=1,
        withdrawal_amount=0,
        retirement_age=18,
        life_expectancy=75,
    ) # ForecastDecumulationRequest | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_goals_decumulation_create(forecast_decumulation_request)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_goals_decumulation_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forecast_decumulation_request** | [**ForecastDecumulationRequest**](ForecastDecumulationRequest.md)|  |

### Return type

[**ForecastDecumulationRequest**](ForecastDecumulationRequest.md)

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

# **api_v2_goals_destroy**
> api_v2_goals_destroy(goal_uuid, uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
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
    api_instance = api_api.ApiApi(api_client)
    goal_uuid = "goal_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_instance.api_v2_goals_destroy(goal_uuid, uuid)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_goals_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **goal_uuid** | **str**|  |
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

# **api_v2_goals_forecast_create**
> ForecastRequest api_v2_goals_forecast_create(forecast_request)



Return a Goal Forecast

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.forecast_request import ForecastRequest
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
    api_instance = api_api.ApiApi(api_client)
    forecast_request = ForecastRequest(
        goal_amount=1,
        deadline=dateutil_parser('1970-01-01').date(),
        initial_amount=0,
        recurring_amount=0,
        risk_level=1,
    ) # ForecastRequest | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_goals_forecast_create(forecast_request)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_goals_forecast_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forecast_request** | [**ForecastRequest**](ForecastRequest.md)|  |

### Return type

[**ForecastRequest**](ForecastRequest.md)

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

# **api_v2_goals_list**
> PaginatedGoalList api_v2_goals_list(goal_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.paginated_goal_list import PaginatedGoalList
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
    api_instance = api_api.ApiApi(api_client)
    goal_uuid = "goal_uuid_example" # str | 
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_goals_list(goal_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_goals_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_goals_list(goal_uuid, limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_goals_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **goal_uuid** | **str**|  |
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedGoalList**](PaginatedGoalList.md)

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

# **api_v2_goals_partial_update**
> Goal api_v2_goals_partial_update(goal_uuid, uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.patched_goal import PatchedGoal
from nucoro_api.model.goal import Goal
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
    api_instance = api_api.ApiApi(api_client)
    goal_uuid = "goal_uuid_example" # str | 
    uuid = "uuid_example" # str | 
    patched_goal = PatchedGoal(
        name="name_example",
        portfolio="portfolio_example",
        goal_amount=0.1,
        deadline=dateutil_parser('1970-01-01').date(),
        initial_amount=0.1,
        recurring_amount=-1000000000000,
        risk_level=0,
    ) # PatchedGoal |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_goals_partial_update(goal_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_goals_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_goals_partial_update(goal_uuid, uuid, patched_goal=patched_goal)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_goals_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **goal_uuid** | **str**|  |
 **uuid** | **str**|  |
 **patched_goal** | [**PatchedGoal**](PatchedGoal.md)|  | [optional]

### Return type

[**Goal**](Goal.md)

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

# **api_v2_goals_retrieve**
> Goal api_v2_goals_retrieve(goal_uuid, uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.goal import Goal
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
    api_instance = api_api.ApiApi(api_client)
    goal_uuid = "goal_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_goals_retrieve(goal_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_goals_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **goal_uuid** | **str**|  |
 **uuid** | **str**|  |

### Return type

[**Goal**](Goal.md)

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

# **api_v2_inbox_conversation_detail_messages_list**
> PaginatedMessageList api_v2_inbox_conversation_detail_messages_list(conversation)



List all messages from a conversation uuid

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.paginated_message_list import PaginatedMessageList
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
    api_instance = api_api.ApiApi(api_client)
    conversation = "conversation_example" # str | 
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_inbox_conversation_detail_messages_list(conversation)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_inbox_conversation_detail_messages_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_inbox_conversation_detail_messages_list(conversation, limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_inbox_conversation_detail_messages_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **str**|  |
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedMessageList**](PaginatedMessageList.md)

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

# **api_v2_inbox_conversations_create**
> ConversationCreate api_v2_inbox_conversations_create(uuid, portal, created, subject)



get: List all conversations with last_message of a user  post: Create new conversation with N messages (without attachments)

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.conversation_create import ConversationCreate
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
    api_instance = api_api.ApiApi(api_client)
    uuid = "uuid_example" # str | 
    portal = 1 # int | 
    created = dateutil_parser('1970-01-01T00:00:00.00Z') # datetime | 
    subject = "subject_example" # str | 
    messages =  # dict, none_type |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_inbox_conversations_create(uuid, portal, created, subject)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_inbox_conversations_create: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_inbox_conversations_create(uuid, portal, created, subject, messages=messages)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_inbox_conversations_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**|  |
 **portal** | **int**|  |
 **created** | **datetime**|  |
 **subject** | **str**|  |
 **messages** | **dict, none_type**|  | [optional]

### Return type

[**ConversationCreate**](ConversationCreate.md)

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

# **api_v2_inbox_conversations_list**
> PaginatedConversationListList api_v2_inbox_conversations_list()



get: List all conversations with last_message of a user  post: Create new conversation with N messages (without attachments)

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.paginated_conversation_list_list import PaginatedConversationListList
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
    api_instance = api_api.ApiApi(api_client)
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_inbox_conversations_list(limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_inbox_conversations_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedConversationListList**](PaginatedConversationListList.md)

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

# **api_v2_inbox_conversations_messages_attachments_retrieve**
> Attachment api_v2_inbox_conversations_messages_attachments_retrieve(conversation, message, uuid)



View to access to an attachment

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.attachment import Attachment
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
    api_instance = api_api.ApiApi(api_client)
    conversation = "conversation_example" # str | 
    message = "message_example" # str | 
    uuid = "uuid_example" # str | 
    format = "base64" # str |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_inbox_conversations_messages_attachments_retrieve(conversation, message, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_inbox_conversations_messages_attachments_retrieve: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_inbox_conversations_messages_attachments_retrieve(conversation, message, uuid, format=format)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_inbox_conversations_messages_attachments_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **str**|  |
 **message** | **str**|  |
 **uuid** | **str**|  |
 **format** | **str**|  | [optional]

### Return type

[**Attachment**](Attachment.md)

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

# **api_v2_inbox_conversations_messages_create**
> Message api_v2_inbox_conversations_messages_create(conversation, user, read_date, created, attachments, uuid)



View for creating message on a specific conversation

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.attachment import Attachment
from nucoro_api.model.message import Message
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
    api_instance = api_api.ApiApi(api_client)
    conversation = "conversation_example" # str | 
    user = "user_example" # str | 
    read_date = dateutil_parser('1970-01-01T00:00:00.00Z') # datetime | 
    created = dateutil_parser('1970-01-01T00:00:00.00Z') # datetime | 
    attachments = Attachment(
    ) # [Attachment] | 
    uuid = "uuid_example" # str | 
    content = "content_example" # str |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_inbox_conversations_messages_create(conversation, user, read_date, created, attachments, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_inbox_conversations_messages_create: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_inbox_conversations_messages_create(conversation, user, read_date, created, attachments, uuid, content=content)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_inbox_conversations_messages_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **str**|  |
 **user** | **str**|  |
 **read_date** | **datetime**|  |
 **created** | **datetime**|  |
 **attachments** | [**[Attachment]**](Attachment.md)|  |
 **uuid** | **str**|  |
 **content** | **str**|  | [optional]

### Return type

[**Message**](Message.md)

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

# **api_v2_mobile_version_retrieve**
> MinimumAppVersion api_v2_mobile_version_retrieve(platform)



Returns the number of the last required APP Version for a platform.

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.minimum_app_version import MinimumAppVersion
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
    api_instance = api_api.ApiApi(api_client)
    platform = "platform_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_mobile_version_retrieve(platform)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_mobile_version_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **platform** | **str**|  |

### Return type

[**MinimumAppVersion**](MinimumAppVersion.md)

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

# **api_v2_platform_settings_list**
> [NucoroSetting] api_v2_platform_settings_list()



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.nucoro_setting import NucoroSetting
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
    api_instance = api_api.ApiApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        api_response = api_instance.api_v2_platform_settings_list()
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_platform_settings_list: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[NucoroSetting]**](NucoroSetting.md)

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

# **api_v2_portal_countries_list**
> PaginatedCountryListList api_v2_portal_countries_list()



Retrieves the list of countries

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.paginated_country_list_list import PaginatedCountryListList
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
    api_instance = api_api.ApiApi(api_client)
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_portal_countries_list(limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portal_countries_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedCountryListList**](PaginatedCountryListList.md)

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

# **api_v2_portal_settings_retrieve**
> PortalSettingValueList api_v2_portal_settings_retrieve()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.portal_setting_value_list import PortalSettingValueList
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

# Configure HTTP basic authorization: basicAuth
configuration = nucoro_api.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

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
    api_instance = api_api.ApiApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        api_response = api_instance.api_v2_portal_settings_retrieve()
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portal_settings_retrieve: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**PortalSettingValueList**](PortalSettingValueList.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_portal_tos_current_retrieve**
> Tos api_v2_portal_tos_current_retrieve()



Retrieves the current ToS for the Portal

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.tos import Tos
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
    api_instance = api_api.ApiApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        api_response = api_instance.api_v2_portal_tos_current_retrieve()
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portal_tos_current_retrieve: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**Tos**](Tos.md)

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

# **api_v2_portal_tos_list**
> PaginatedTosList api_v2_portal_tos_list()



List all ToS for the current Portal

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.paginated_tos_list import PaginatedTosList
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
    api_instance = api_api.ApiApi(api_client)
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_portal_tos_list(limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portal_tos_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedTosList**](PaginatedTosList.md)

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

# **api_v2_portal_tos_retrieve**
> Tos api_v2_portal_tos_retrieve(uuid)



Retrieves a specific ToS

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.tos import Tos
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
    api_instance = api_api.ApiApi(api_client)
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_portal_tos_retrieve(uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portal_tos_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**|  |

### Return type

[**Tos**](Tos.md)

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

# **api_v2_portfolios_activities_list**
> PaginatedFeedActivityListList api_v2_portfolios_activities_list(portfolio_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)
    target = [
        "",
    ] # [str] |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_portfolios_activities_list(portfolio_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_activities_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_portfolios_activities_list(portfolio_uuid, limit=limit, offset=offset, target=target)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_activities_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
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

# **api_v2_portfolios_activities_retrieve**
> FeedActivityList api_v2_portfolios_activities_retrieve(portfolio_uuid, uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_portfolios_activities_retrieve(portfolio_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_activities_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
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

# **api_v2_portfolios_allocations_end_day**
> AllocationList api_v2_portfolios_allocations_end_day(portfolio_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.allocation_list import AllocationList
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_portfolios_allocations_end_day(portfolio_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_allocations_end_day: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |

### Return type

[**AllocationList**](AllocationList.md)

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

# **api_v2_portfolios_allocations_end_day_by_date_retrieve**
> AllocationDetail api_v2_portfolios_allocations_end_day_by_date_retrieve(allocation_date, portfolio_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.allocation_detail import AllocationDetail
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
    api_instance = api_api.ApiApi(api_client)
    allocation_date = "allocation_date_example" # str | 
    portfolio_uuid = "portfolio_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_portfolios_allocations_end_day_by_date_retrieve(allocation_date, portfolio_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_allocations_end_day_by_date_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocation_date** | **str**|  |
 **portfolio_uuid** | **str**|  |

### Return type

[**AllocationDetail**](AllocationDetail.md)

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

# **api_v2_portfolios_allocations_end_day_latest_retrieve**
> AllocationDetail api_v2_portfolios_allocations_end_day_latest_retrieve(portfolio_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.allocation_detail import AllocationDetail
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_portfolios_allocations_end_day_latest_retrieve(portfolio_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_allocations_end_day_latest_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |

### Return type

[**AllocationDetail**](AllocationDetail.md)

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

# **api_v2_portfolios_allocations_history_retrieve**
> api_v2_portfolios_allocations_history_retrieve(portfolio)



Allocations History for a given portfolio  It accepts two optional parameters, `date_to` and `date_from` to limit the daily allocations to a certain data range. If they are not given, all the allocations are returned.  ---  ## Parameters:   * **name**: `date_from`  * **description**: The initial date.  * **parameter type**: query param   * **name**: `date_from`  * **description**: The final date.  * **parameter type**: query param

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
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
    api_instance = api_api.ApiApi(api_client)
    portfolio = "portfolio_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_instance.api_v2_portfolios_allocations_history_retrieve(portfolio)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_allocations_history_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio** | **str**|  |

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

# **api_v2_portfolios_allocations_intraday_latest_retrieve**
> CurrentAllocation api_v2_portfolios_allocations_intraday_latest_retrieve(portfolio_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.current_allocation import CurrentAllocation
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_portfolios_allocations_intraday_latest_retrieve(portfolio_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_allocations_intraday_latest_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |

### Return type

[**CurrentAllocation**](CurrentAllocation.md)

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

# **api_v2_portfolios_allocations_list**
> PaginatedAllocationListList api_v2_portfolios_allocations_list(portfolio_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.paginated_allocation_list_list import PaginatedAllocationListList
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)
    valuation_date_after = dateutil_parser('1970-01-01').date() # date |  (optional)
    valuation_date_before = dateutil_parser('1970-01-01').date() # date |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_portfolios_allocations_list(portfolio_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_allocations_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_portfolios_allocations_list(portfolio_uuid, limit=limit, offset=offset, valuation_date_after=valuation_date_after, valuation_date_before=valuation_date_before)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_allocations_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]
 **valuation_date_after** | **date**|  | [optional]
 **valuation_date_before** | **date**|  | [optional]

### Return type

[**PaginatedAllocationListList**](PaginatedAllocationListList.md)

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

# **api_v2_portfolios_allocations_retrieve**
> AllocationList api_v2_portfolios_allocations_retrieve(id, portfolio_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.allocation_list import AllocationList
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
    api_instance = api_api.ApiApi(api_client)
    id = 1 # int | A unique integer value identifying this allocation.
    portfolio_uuid = "portfolio_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_portfolios_allocations_retrieve(id, portfolio_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_allocations_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this allocation. |
 **portfolio_uuid** | **str**|  |

### Return type

[**AllocationList**](AllocationList.md)

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

# **api_v2_portfolios_create**
> PortfolioCreate api_v2_portfolios_create(portfolio_uuid, portfolio_create)



Allow aggregate/group fields of the ModelView model or its related entities.    Query params should use dot notation.  Requires:     ListModelMixin (ListAPIView, ListCreateApiView)  Args:     * aggregatable_fields (dict): optional.         Keys: fields that allow aggregation (including related entities with \"__\" notation).         Values: django qs functions or aggregate_fns         Example:             aggregatable_fields = {                 'allocations__balance': [Sum, Avg],             }      * groupable_fields (list): optional. fields that allow grouping (including related entities with \"__\" notation).         Example:             groupable_fields = ['portfolio__portfolio_type']  Query Param Examples:     >>> ?group_by=portfolio.portfolio_type     >>> ?aggregate[Sum]=portfolio.allocations.balance     >>> ?group_by=valuation_date&aggregate[Sum]=portfolio.allocations.balance

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.portfolio_create import PortfolioCreate
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    portfolio_create = PortfolioCreate(
        name="name_example",
        portfolio_type="portfolio_type_example",
        risk_level=1,
        time_horizon=1,
        currency="currency_example",
        advisor="advisor_example",
        advice_engine="advice_engine_example",
        extra_data={
            "key": None,
        },
        client="client_example",
    ) # PortfolioCreate | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_portfolios_create(portfolio_uuid, portfolio_create)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
 **portfolio_create** | [**PortfolioCreate**](PortfolioCreate.md)|  |

### Return type

[**PortfolioCreate**](PortfolioCreate.md)

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

# **api_v2_portfolios_deposits_create**
> DepositCreate api_v2_portfolios_deposits_create(portfolio_uuid, deposit_create)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.deposit_create import DepositCreate
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    deposit_create = DepositCreate(
        amount=-1000000000000,
        provider="provider_example",
        deposit_type=DepositTypeEnum("CONTRIBUTION"),
        extra_data={
            "key": None,
        },
    ) # DepositCreate | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_portfolios_deposits_create(portfolio_uuid, deposit_create)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_deposits_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
 **deposit_create** | [**DepositCreate**](DepositCreate.md)|  |

### Return type

[**DepositCreate**](DepositCreate.md)

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

# **api_v2_portfolios_deposits_destroy**
> api_v2_portfolios_deposits_destroy(portfolio_uuid, uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_instance.api_v2_portfolios_deposits_destroy(portfolio_uuid, uuid)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_deposits_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
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

# **api_v2_portfolios_deposits_list**
> PaginatedDepositListList api_v2_portfolios_deposits_list(portfolio_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.paginated_deposit_list_list import PaginatedDepositListList
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)
    status = [
        "CANCELLED",
    ] # [str] |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_portfolios_deposits_list(portfolio_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_deposits_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_portfolios_deposits_list(portfolio_uuid, limit=limit, offset=offset, status=status)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_deposits_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]
 **status** | **[str]**|  | [optional]

### Return type

[**PaginatedDepositListList**](PaginatedDepositListList.md)

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

# **api_v2_portfolios_deposits_retrieve**
> DepositDetail api_v2_portfolios_deposits_retrieve(portfolio_uuid, uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.deposit_detail import DepositDetail
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_portfolios_deposits_retrieve(portfolio_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_deposits_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
 **uuid** | **str**|  |

### Return type

[**DepositDetail**](DepositDetail.md)

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

# **api_v2_portfolios_destroy**
> api_v2_portfolios_destroy(portfolio_uuid, uuid)



Allow aggregate/group fields of the ModelView model or its related entities.    Query params should use dot notation.  Requires:     ListModelMixin (ListAPIView, ListCreateApiView)  Args:     * aggregatable_fields (dict): optional.         Keys: fields that allow aggregation (including related entities with \"__\" notation).         Values: django qs functions or aggregate_fns         Example:             aggregatable_fields = {                 'allocations__balance': [Sum, Avg],             }      * groupable_fields (list): optional. fields that allow grouping (including related entities with \"__\" notation).         Example:             groupable_fields = ['portfolio__portfolio_type']  Query Param Examples:     >>> ?group_by=portfolio.portfolio_type     >>> ?aggregate[Sum]=portfolio.allocations.balance     >>> ?group_by=valuation_date&aggregate[Sum]=portfolio.allocations.balance

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_instance.api_v2_portfolios_destroy(portfolio_uuid, uuid)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
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

# **api_v2_portfolios_list**
> PaginatedPortfolioListList api_v2_portfolios_list(portfolio_uuid)



Allow aggregate/group fields of the ModelView model or its related entities.    Query params should use dot notation.  Requires:     ListModelMixin (ListAPIView, ListCreateApiView)  Args:     * aggregatable_fields (dict): optional.         Keys: fields that allow aggregation (including related entities with \"__\" notation).         Values: django qs functions or aggregate_fns         Example:             aggregatable_fields = {                 'allocations__balance': [Sum, Avg],             }      * groupable_fields (list): optional. fields that allow grouping (including related entities with \"__\" notation).         Example:             groupable_fields = ['portfolio__portfolio_type']  Query Param Examples:     >>> ?group_by=portfolio.portfolio_type     >>> ?aggregate[Sum]=portfolio.allocations.balance     >>> ?group_by=valuation_date&aggregate[Sum]=portfolio.allocations.balance

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.paginated_portfolio_list_list import PaginatedPortfolioListList
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    client = "client_example" # str |  (optional)
    external_custodian_id = "external_custodian_id_example" # str |  (optional)
    limit = 1 # int | Number of results to return per page. (optional)
    name = "name_example" # str |  (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)
    ordering = [
        "-name",
    ] # [str] | Ordering (optional)
    portfolio_type = 1 # int |  (optional)
    status = [
        "ACTIVE",
    ] # [str] |  (optional)
    valuation_date_after = dateutil_parser('1970-01-01').date() # date |  (optional)
    valuation_date_before = dateutil_parser('1970-01-01').date() # date |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_portfolios_list(portfolio_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_portfolios_list(portfolio_uuid, client=client, external_custodian_id=external_custodian_id, limit=limit, name=name, offset=offset, ordering=ordering, portfolio_type=portfolio_type, status=status, valuation_date_after=valuation_date_after, valuation_date_before=valuation_date_before)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
 **client** | **str**|  | [optional]
 **external_custodian_id** | **str**|  | [optional]
 **limit** | **int**| Number of results to return per page. | [optional]
 **name** | **str**|  | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]
 **ordering** | **[str]**| Ordering | [optional]
 **portfolio_type** | **int**|  | [optional]
 **status** | **[str]**|  | [optional]
 **valuation_date_after** | **date**|  | [optional]
 **valuation_date_before** | **date**|  | [optional]

### Return type

[**PaginatedPortfolioListList**](PaginatedPortfolioListList.md)

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

# **api_v2_portfolios_orders_create**
> CreateOrder api_v2_portfolios_orders_create(portfolio_uuid, create_order)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.create_order import CreateOrder
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    create_order = CreateOrder(
        shares=1,
        asset=RelatedAssetSerializerWithAssetCategories(
            market="market_example",
            isin="isin_example",
            currency="currency_example",
            ticker="ticker_example",
            name="name_example",
            extra_data={
                "key": None,
            },
        ),
        portfolio="portfolio_example",
        order_type=OrderTypeEnum("BUY"),
        method=CreateOrderMethodEnum("MARKET"),
        limit_price=0.01,
        stop_price=0.01,
        duration=,
    ) # CreateOrder | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_portfolios_orders_create(portfolio_uuid, create_order)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_orders_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
 **create_order** | [**CreateOrder**](CreateOrder.md)|  |

### Return type

[**CreateOrder**](CreateOrder.md)

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

# **api_v2_portfolios_orders_destroy**
> api_v2_portfolios_orders_destroy(portfolio_uuid, uuid)



Cancel or request cancellation to the broker

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_instance.api_v2_portfolios_orders_destroy(portfolio_uuid, uuid)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_orders_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
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

# **api_v2_portfolios_orders_list**
> PaginatedOrderListList api_v2_portfolios_orders_list(portfolio_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.paginated_order_list_list import PaginatedOrderListList
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    advice_external_id = "advice_external_id_example" # str |  (optional)
    asset = "asset_example" # str |  (optional)
    completed_after = dateutil_parser('1970-01-01').date() # date |  (optional)
    completed_before = dateutil_parser('1970-01-01').date() # date |  (optional)
    extra_data = {
        "key": None,
    } # {str: (bool, date, datetime, dict, float, int, list, str, none_type)}, none_type | Additional order attributes for the specific portal (optional)
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)
    portfolio = "portfolio_example" # str |  (optional)
    status = "status_example" # str |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_portfolios_orders_list(portfolio_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_orders_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_portfolios_orders_list(portfolio_uuid, advice_external_id=advice_external_id, asset=asset, completed_after=completed_after, completed_before=completed_before, extra_data=extra_data, limit=limit, offset=offset, portfolio=portfolio, status=status)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_orders_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
 **advice_external_id** | **str**|  | [optional]
 **asset** | **str**|  | [optional]
 **completed_after** | **date**|  | [optional]
 **completed_before** | **date**|  | [optional]
 **extra_data** | [**{str: (bool, date, datetime, dict, float, int, list, str, none_type)}, none_type**](bool, date, datetime, dict, float, int, list, str, none_type.md)| Additional order attributes for the specific portal | [optional]
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]
 **portfolio** | **str**|  | [optional]
 **status** | **str**|  | [optional]

### Return type

[**PaginatedOrderListList**](PaginatedOrderListList.md)

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

# **api_v2_portfolios_orders_retrieve**
> OrderList api_v2_portfolios_orders_retrieve(portfolio_uuid, uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.order_list import OrderList
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_portfolios_orders_retrieve(portfolio_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_orders_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
 **uuid** | **str**|  |

### Return type

[**OrderList**](OrderList.md)

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

# **api_v2_portfolios_partial_update**
> PortfolioUpdate api_v2_portfolios_partial_update(portfolio_uuid, uuid)



Allow aggregate/group fields of the ModelView model or its related entities.    Query params should use dot notation.  Requires:     ListModelMixin (ListAPIView, ListCreateApiView)  Args:     * aggregatable_fields (dict): optional.         Keys: fields that allow aggregation (including related entities with \"__\" notation).         Values: django qs functions or aggregate_fns         Example:             aggregatable_fields = {                 'allocations__balance': [Sum, Avg],             }      * groupable_fields (list): optional. fields that allow grouping (including related entities with \"__\" notation).         Example:             groupable_fields = ['portfolio__portfolio_type']  Query Param Examples:     >>> ?group_by=portfolio.portfolio_type     >>> ?aggregate[Sum]=portfolio.allocations.balance     >>> ?group_by=valuation_date&aggregate[Sum]=portfolio.allocations.balance

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.portfolio_update import PortfolioUpdate
from nucoro_api.model.patched_portfolio_update import PatchedPortfolioUpdate
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    uuid = "uuid_example" # str | 
    patched_portfolio_update = PatchedPortfolioUpdate(
        name="name_example",
        portfolio_type="portfolio_type_example",
        risk_level=0,
        time_horizon=0,
        currency="currency_example",
        advisor="advisor_example",
        advice_engine="advice_engine_example",
        extra_data={
            "key": None,
        },
        client="client_example",
    ) # PatchedPortfolioUpdate |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_portfolios_partial_update(portfolio_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_portfolios_partial_update(portfolio_uuid, uuid, patched_portfolio_update=patched_portfolio_update)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
 **uuid** | **str**|  |
 **patched_portfolio_update** | [**PatchedPortfolioUpdate**](PatchedPortfolioUpdate.md)|  | [optional]

### Return type

[**PortfolioUpdate**](PortfolioUpdate.md)

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

# **api_v2_portfolios_performance_mwrr_list**
> PaginatedPortfolioPerformanceList api_v2_portfolios_performance_mwrr_list(portfolio_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.paginated_portfolio_performance_list import PaginatedPortfolioPerformanceList
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    date_after = dateutil_parser('1970-01-01').date() # date |  (optional)
    date_before = dateutil_parser('1970-01-01').date() # date |  (optional)
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_portfolios_performance_mwrr_list(portfolio_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_performance_mwrr_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_portfolios_performance_mwrr_list(portfolio_uuid, date_after=date_after, date_before=date_before, limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_performance_mwrr_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
 **date_after** | **date**|  | [optional]
 **date_before** | **date**|  | [optional]
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedPortfolioPerformanceList**](PaginatedPortfolioPerformanceList.md)

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

# **api_v2_portfolios_performance_positions_list**
> PaginatedPortfolioPerformancePositionsList api_v2_portfolios_performance_positions_list(portfolio_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.paginated_portfolio_performance_positions_list import PaginatedPortfolioPerformancePositionsList
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_portfolios_performance_positions_list(portfolio_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_performance_positions_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_portfolios_performance_positions_list(portfolio_uuid, limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_performance_positions_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedPortfolioPerformancePositionsList**](PaginatedPortfolioPerformancePositionsList.md)

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

# **api_v2_portfolios_performance_twrr_list**
> PaginatedPortfolioPerformanceList api_v2_portfolios_performance_twrr_list(portfolio_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.paginated_portfolio_performance_list import PaginatedPortfolioPerformanceList
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    date_after = dateutil_parser('1970-01-01').date() # date |  (optional)
    date_before = dateutil_parser('1970-01-01').date() # date |  (optional)
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_portfolios_performance_twrr_list(portfolio_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_performance_twrr_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_portfolios_performance_twrr_list(portfolio_uuid, date_after=date_after, date_before=date_before, limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_performance_twrr_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
 **date_after** | **date**|  | [optional]
 **date_before** | **date**|  | [optional]
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedPortfolioPerformanceList**](PaginatedPortfolioPerformanceList.md)

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

# **api_v2_portfolios_portfoliotypes_list**
> PaginatedPortfolioTypeList api_v2_portfolios_portfoliotypes_list()



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.paginated_portfolio_type_list import PaginatedPortfolioTypeList
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
    api_instance = api_api.ApiApi(api_client)
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_portfolios_portfoliotypes_list(limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_portfoliotypes_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedPortfolioTypeList**](PaginatedPortfolioTypeList.md)

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

# **api_v2_portfolios_portfoliotypes_restrictions_list**
> PaginatedBasePortfolioTypeRestrictionsList api_v2_portfolios_portfoliotypes_restrictions_list(code)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.paginated_base_portfolio_type_restrictions_list import PaginatedBasePortfolioTypeRestrictionsList
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
    api_instance = api_api.ApiApi(api_client)
    code = "code_example" # str | 
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_portfolios_portfoliotypes_restrictions_list(code)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_portfoliotypes_restrictions_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_portfolios_portfoliotypes_restrictions_list(code, limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_portfoliotypes_restrictions_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**|  |
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedBasePortfolioTypeRestrictionsList**](PaginatedBasePortfolioTypeRestrictionsList.md)

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

# **api_v2_portfolios_rebalances_list**
> PaginatedRebalanceList api_v2_portfolios_rebalances_list(portfolio_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.paginated_rebalance_list import PaginatedRebalanceList
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_portfolios_rebalances_list(portfolio_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_rebalances_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_portfolios_rebalances_list(portfolio_uuid, limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_rebalances_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedRebalanceList**](PaginatedRebalanceList.md)

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

# **api_v2_portfolios_rebalances_retrieve**
> Rebalance api_v2_portfolios_rebalances_retrieve(portfolio_uuid, uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.rebalance import Rebalance
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_portfolios_rebalances_retrieve(portfolio_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_rebalances_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
 **uuid** | **str**|  |

### Return type

[**Rebalance**](Rebalance.md)

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

# **api_v2_portfolios_restrictions_retrieve**
> PortfolioTypeRestrictions api_v2_portfolios_restrictions_retrieve(portfolio_uuid, uuid)



Allow aggregate/group fields of the ModelView model or its related entities.    Query params should use dot notation.  Requires:     ListModelMixin (ListAPIView, ListCreateApiView)  Args:     * aggregatable_fields (dict): optional.         Keys: fields that allow aggregation (including related entities with \"__\" notation).         Values: django qs functions or aggregate_fns         Example:             aggregatable_fields = {                 'allocations__balance': [Sum, Avg],             }      * groupable_fields (list): optional. fields that allow grouping (including related entities with \"__\" notation).         Example:             groupable_fields = ['portfolio__portfolio_type']  Query Param Examples:     >>> ?group_by=portfolio.portfolio_type     >>> ?aggregate[Sum]=portfolio.allocations.balance     >>> ?group_by=valuation_date&aggregate[Sum]=portfolio.allocations.balance

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.portfolio_type_restrictions import PortfolioTypeRestrictions
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_portfolios_restrictions_retrieve(portfolio_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_restrictions_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
 **uuid** | **str**|  |

### Return type

[**PortfolioTypeRestrictions**](PortfolioTypeRestrictions.md)

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

# **api_v2_portfolios_retrieve**
> PortfolioDetail api_v2_portfolios_retrieve(portfolio_uuid, uuid)



Allow aggregate/group fields of the ModelView model or its related entities.    Query params should use dot notation.  Requires:     ListModelMixin (ListAPIView, ListCreateApiView)  Args:     * aggregatable_fields (dict): optional.         Keys: fields that allow aggregation (including related entities with \"__\" notation).         Values: django qs functions or aggregate_fns         Example:             aggregatable_fields = {                 'allocations__balance': [Sum, Avg],             }      * groupable_fields (list): optional. fields that allow grouping (including related entities with \"__\" notation).         Example:             groupable_fields = ['portfolio__portfolio_type']  Query Param Examples:     >>> ?group_by=portfolio.portfolio_type     >>> ?aggregate[Sum]=portfolio.allocations.balance     >>> ?group_by=valuation_date&aggregate[Sum]=portfolio.allocations.balance

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.portfolio_detail import PortfolioDetail
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_portfolios_retrieve(portfolio_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
 **uuid** | **str**|  |

### Return type

[**PortfolioDetail**](PortfolioDetail.md)

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

# **api_v2_portfolios_update**
> PortfolioUpdate api_v2_portfolios_update(portfolio_uuid, uuid, portfolio_update)



Allow aggregate/group fields of the ModelView model or its related entities.    Query params should use dot notation.  Requires:     ListModelMixin (ListAPIView, ListCreateApiView)  Args:     * aggregatable_fields (dict): optional.         Keys: fields that allow aggregation (including related entities with \"__\" notation).         Values: django qs functions or aggregate_fns         Example:             aggregatable_fields = {                 'allocations__balance': [Sum, Avg],             }      * groupable_fields (list): optional. fields that allow grouping (including related entities with \"__\" notation).         Example:             groupable_fields = ['portfolio__portfolio_type']  Query Param Examples:     >>> ?group_by=portfolio.portfolio_type     >>> ?aggregate[Sum]=portfolio.allocations.balance     >>> ?group_by=valuation_date&aggregate[Sum]=portfolio.allocations.balance

### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.portfolio_update import PortfolioUpdate
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    uuid = "uuid_example" # str | 
    portfolio_update = PortfolioUpdate(
        name="name_example",
        portfolio_type="portfolio_type_example",
        risk_level=0,
        time_horizon=0,
        currency="currency_example",
        advisor="advisor_example",
        advice_engine="advice_engine_example",
        extra_data={
            "key": None,
        },
        client="client_example",
    ) # PortfolioUpdate | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_portfolios_update(portfolio_uuid, uuid, portfolio_update)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
 **uuid** | **str**|  |
 **portfolio_update** | [**PortfolioUpdate**](PortfolioUpdate.md)|  |

### Return type

[**PortfolioUpdate**](PortfolioUpdate.md)

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

# **api_v2_portfolios_withdrawals_create**
> InvestorWithdrawalCreate api_v2_portfolios_withdrawals_create(portfolio_uuid, investor_withdrawal_create)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.investor_withdrawal_create import InvestorWithdrawalCreate
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    investor_withdrawal_create = InvestorWithdrawalCreate(
        amount=-1000000000000,
        provider="provider_example",
        purpose="purpose_example",
        extra_data={
            "key": None,
        },
    ) # InvestorWithdrawalCreate | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_portfolios_withdrawals_create(portfolio_uuid, investor_withdrawal_create)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_withdrawals_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
 **investor_withdrawal_create** | [**InvestorWithdrawalCreate**](InvestorWithdrawalCreate.md)|  |

### Return type

[**InvestorWithdrawalCreate**](InvestorWithdrawalCreate.md)

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

# **api_v2_portfolios_withdrawals_destroy**
> api_v2_portfolios_withdrawals_destroy(portfolio_uuid, uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_instance.api_v2_portfolios_withdrawals_destroy(portfolio_uuid, uuid)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_withdrawals_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
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

# **api_v2_portfolios_withdrawals_list**
> PaginatedInvestorWithdrawalListList api_v2_portfolios_withdrawals_list(portfolio_uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.paginated_investor_withdrawal_list_list import PaginatedInvestorWithdrawalListList
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)
    status = [
        "CANCELLED",
    ] # [str] |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_portfolios_withdrawals_list(portfolio_uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_withdrawals_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_portfolios_withdrawals_list(portfolio_uuid, limit=limit, offset=offset, status=status)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_withdrawals_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]
 **status** | **[str]**|  | [optional]

### Return type

[**PaginatedInvestorWithdrawalListList**](PaginatedInvestorWithdrawalListList.md)

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

# **api_v2_portfolios_withdrawals_retrieve**
> WithdrawalDetail api_v2_portfolios_withdrawals_retrieve(portfolio_uuid, uuid)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.withdrawal_detail import WithdrawalDetail
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
    api_instance = api_api.ApiApi(api_client)
    portfolio_uuid = "portfolio_uuid_example" # str | 
    uuid = "uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_portfolios_withdrawals_retrieve(portfolio_uuid, uuid)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_portfolios_withdrawals_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio_uuid** | **str**|  |
 **uuid** | **str**|  |

### Return type

[**WithdrawalDetail**](WithdrawalDetail.md)

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

# **api_v2_risk_questions_list**
> PaginatedQuestionList api_v2_risk_questions_list()



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.paginated_question_list import PaginatedQuestionList
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
    api_instance = api_api.ApiApi(api_client)
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.api_v2_risk_questions_list(limit=limit, offset=offset)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_risk_questions_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Number of results to return per page. | [optional]
 **offset** | **int**| The initial index from which to return the results. | [optional]

### Return type

[**PaginatedQuestionList**](PaginatedQuestionList.md)

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

# **api_v2_verifications_verifier_webhook_create**
> api_v2_verifications_verifier_webhook_create(action, verifier)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
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
    api_instance = api_api.ApiApi(api_client)
    action = "action_example" # str | 
    verifier = "verifier_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_instance.api_v2_verifications_verifier_webhook_create(action, verifier)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_verifications_verifier_webhook_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **action** | **str**|  |
 **verifier** | **str**|  |

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

# **api_v2_websocket_authentication_ticket_create**
> AuthenticationResponse api_v2_websocket_authentication_ticket_create(websocket_authentication)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.authentication_response import AuthenticationResponse
from nucoro_api.model.websocket_authentication import WebsocketAuthentication
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
    api_instance = api_api.ApiApi(api_client)
    websocket_authentication = WebsocketAuthentication(
        ticket="ticket_example",
    ) # WebsocketAuthentication | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_websocket_authentication_ticket_create(websocket_authentication)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_websocket_authentication_ticket_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websocket_authentication** | [**WebsocketAuthentication**](WebsocketAuthentication.md)|  |

### Return type

[**AuthenticationResponse**](AuthenticationResponse.md)

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

# **api_v2_websocket_authorize_asset_create**
> Response api_v2_websocket_authorize_asset_create(websocket_authentication)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.response import Response
from nucoro_api.model.websocket_authentication import WebsocketAuthentication
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
    api_instance = api_api.ApiApi(api_client)
    websocket_authentication = WebsocketAuthentication(
        ticket="ticket_example",
    ) # WebsocketAuthentication | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_websocket_authorize_asset_create(websocket_authentication)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_websocket_authorize_asset_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websocket_authentication** | [**WebsocketAuthentication**](WebsocketAuthentication.md)|  |

### Return type

[**Response**](Response.md)

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

# **api_v2_websocket_authorize_create**
> Response api_v2_websocket_authorize_create(websocket_authentication)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.response import Response
from nucoro_api.model.websocket_authentication import WebsocketAuthentication
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
    api_instance = api_api.ApiApi(api_client)
    websocket_authentication = WebsocketAuthentication(
        ticket="ticket_example",
    ) # WebsocketAuthentication | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_websocket_authorize_create(websocket_authentication)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_websocket_authorize_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websocket_authentication** | [**WebsocketAuthentication**](WebsocketAuthentication.md)|  |

### Return type

[**Response**](Response.md)

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

# **api_v2_websocket_authorize_portfolio_create**
> Response api_v2_websocket_authorize_portfolio_create(websocket_authentication)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.response import Response
from nucoro_api.model.websocket_authentication import WebsocketAuthentication
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
    api_instance = api_api.ApiApi(api_client)
    websocket_authentication = WebsocketAuthentication(
        ticket="ticket_example",
    ) # WebsocketAuthentication | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_websocket_authorize_portfolio_create(websocket_authentication)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_websocket_authorize_portfolio_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websocket_authentication** | [**WebsocketAuthentication**](WebsocketAuthentication.md)|  |

### Return type

[**Response**](Response.md)

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

# **api_v2_websocket_on_subscribe_create**
> Subscribe api_v2_websocket_on_subscribe_create(subscribe)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.subscribe import Subscribe
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
    api_instance = api_api.ApiApi(api_client)
    subscribe = Subscribe(
        id="id_example",
        subscription="subscription_example",
    ) # Subscribe | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_websocket_on_subscribe_create(subscribe)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_websocket_on_subscribe_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscribe** | [**Subscribe**](Subscribe.md)|  |

### Return type

[**Subscribe**](Subscribe.md)

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

# **api_v2_websocket_on_unsubscribe_create**
> Unsubscribe api_v2_websocket_on_unsubscribe_create(unsubscribe)



### Example

* Api Key Authentication (cookieAuth):
* Bearer (JWT) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import nucoro_api
from nucoro_api.api import api_api
from nucoro_api.model.unsubscribe import Unsubscribe
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
    api_instance = api_api.ApiApi(api_client)
    unsubscribe = Unsubscribe(
        id="id_example",
        subscription="subscription_example",
    ) # Unsubscribe | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.api_v2_websocket_on_unsubscribe_create(unsubscribe)
        pprint(api_response)
    except nucoro_api.ApiException as e:
        print("Exception when calling ApiApi->api_v2_websocket_on_unsubscribe_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unsubscribe** | [**Unsubscribe**](Unsubscribe.md)|  |

### Return type

[**Unsubscribe**](Unsubscribe.md)

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

