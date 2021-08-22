# openapi_client.TaxInformationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**client_tax_information_create**](TaxInformationApi.md#client_tax_information_create) | **POST** /api/v2/clients/{client_uuid}/tax-informations/ | 
[**client_tax_information_delete**](TaxInformationApi.md#client_tax_information_delete) | **DELETE** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 
[**client_tax_information_list**](TaxInformationApi.md#client_tax_information_list) | **GET** /api/v2/clients/{client_uuid}/tax-informations/ | 
[**client_tax_information_partial_update**](TaxInformationApi.md#client_tax_information_partial_update) | **PATCH** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 
[**client_tax_information_retrieve**](TaxInformationApi.md#client_tax_information_retrieve) | **GET** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 
[**client_tax_information_update**](TaxInformationApi.md#client_tax_information_update) | **PUT** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 


# **client_tax_information_create**
> TaxInformationCreateUpdate client_tax_information_create(client_uuid, tax_information_create_update)



Create a tax inforation for a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import tax_information_api
from openapi_client.model.tax_information_create_update import TaxInformationCreateUpdate
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
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

# Configure Bearer authorization (Bearer): jwtAuth
configuration = openapi_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Configure API key authorization: tokenAuth
configuration.api_key['tokenAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['tokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = tax_information_api.TaxInformationApi(api_client)
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
    except openapi_client.ApiException as e:
        print("Exception when calling TaxInformationApi->client_tax_information_create: %s\n" % e)
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
> client_tax_information_delete(client_uuid, tax_information_uuid)



Delete a client tax inforation

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import tax_information_api
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
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

# Configure Bearer authorization (Bearer): jwtAuth
configuration = openapi_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Configure API key authorization: tokenAuth
configuration.api_key['tokenAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['tokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = tax_information_api.TaxInformationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    tax_information_uuid = "tax_information_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_instance.client_tax_information_delete(client_uuid, tax_information_uuid)
    except openapi_client.ApiException as e:
        print("Exception when calling TaxInformationApi->client_tax_information_delete: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **tax_information_uuid** | **str**|  |

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
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import tax_information_api
from openapi_client.model.paginated_tax_information_list_list import PaginatedTaxInformationListList
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
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

# Configure Bearer authorization (Bearer): jwtAuth
configuration = openapi_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Configure API key authorization: tokenAuth
configuration.api_key['tokenAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['tokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = tax_information_api.TaxInformationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_tax_information_list(client_uuid)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling TaxInformationApi->client_tax_information_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_tax_information_list(client_uuid, limit=limit, offset=offset)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling TaxInformationApi->client_tax_information_list: %s\n" % e)
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
> TaxInformationCreateUpdate client_tax_information_partial_update(client_uuid, tax_information_uuid)



Partial Update a client tax inforation

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import tax_information_api
from openapi_client.model.tax_information_create_update import TaxInformationCreateUpdate
from openapi_client.model.patched_tax_information_create_update import PatchedTaxInformationCreateUpdate
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
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

# Configure Bearer authorization (Bearer): jwtAuth
configuration = openapi_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Configure API key authorization: tokenAuth
configuration.api_key['tokenAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['tokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = tax_information_api.TaxInformationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    tax_information_uuid = "tax_information_uuid_example" # str | 
    patched_tax_information_create_update = PatchedTaxInformationCreateUpdate(
        country="country_example",
        document_number="document_number_example",
        document_type="document_type_example",
    ) # PatchedTaxInformationCreateUpdate |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_tax_information_partial_update(client_uuid, tax_information_uuid)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling TaxInformationApi->client_tax_information_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_tax_information_partial_update(client_uuid, tax_information_uuid, patched_tax_information_create_update=patched_tax_information_create_update)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling TaxInformationApi->client_tax_information_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **tax_information_uuid** | **str**|  |
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
> TaxInformationList client_tax_information_retrieve(client_uuid, tax_information_uuid)



Retrieve a client tax inforation

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import tax_information_api
from openapi_client.model.tax_information_list import TaxInformationList
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
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

# Configure Bearer authorization (Bearer): jwtAuth
configuration = openapi_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Configure API key authorization: tokenAuth
configuration.api_key['tokenAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['tokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = tax_information_api.TaxInformationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    tax_information_uuid = "tax_information_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_tax_information_retrieve(client_uuid, tax_information_uuid)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling TaxInformationApi->client_tax_information_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **tax_information_uuid** | **str**|  |

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
> TaxInformationCreateUpdate client_tax_information_update(client_uuid, tax_information_uuid, tax_information_create_update)



Update a client tax inforation

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import tax_information_api
from openapi_client.model.tax_information_create_update import TaxInformationCreateUpdate
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
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

# Configure Bearer authorization (Bearer): jwtAuth
configuration = openapi_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Configure API key authorization: tokenAuth
configuration.api_key['tokenAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['tokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = tax_information_api.TaxInformationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    tax_information_uuid = "tax_information_uuid_example" # str | 
    tax_information_create_update = TaxInformationCreateUpdate(
        country="country_example",
        document_number="document_number_example",
        document_type="document_type_example",
    ) # TaxInformationCreateUpdate | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_tax_information_update(client_uuid, tax_information_uuid, tax_information_create_update)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling TaxInformationApi->client_tax_information_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **tax_information_uuid** | **str**|  |
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

