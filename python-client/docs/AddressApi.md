# openapi_client.AddressApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**client_address_create**](AddressApi.md#client_address_create) | **POST** /api/v2/clients/{client_uuid}/addresses/ | 
[**client_address_delete**](AddressApi.md#client_address_delete) | **DELETE** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
[**client_address_partial_update**](AddressApi.md#client_address_partial_update) | **PATCH** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
[**client_address_retrieve**](AddressApi.md#client_address_retrieve) | **GET** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
[**client_address_update**](AddressApi.md#client_address_update) | **PUT** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
[**client_addresses_list**](AddressApi.md#client_addresses_list) | **GET** /api/v2/clients/{client_uuid}/addresses/ | 


# **client_address_create**
> AddressCreate client_address_create(client_uuid, address_create)



Create an address for a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import address_api
from openapi_client.model.address_create import AddressCreate
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
    api_instance = address_api.AddressApi(api_client)
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
    except openapi_client.ApiException as e:
        print("Exception when calling AddressApi->client_address_create: %s\n" % e)
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
> client_address_delete(address_uuid, client_uuid)



Delete a client address

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import address_api
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
    api_instance = address_api.AddressApi(api_client)
    address_uuid = "address_uuid_example" # str | 
    client_uuid = "client_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_instance.client_address_delete(address_uuid, client_uuid)
    except openapi_client.ApiException as e:
        print("Exception when calling AddressApi->client_address_delete: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address_uuid** | **str**|  |
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
**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_address_partial_update**
> AddressUpdate client_address_partial_update(address_uuid, client_uuid)



Partial Update a client address

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import address_api
from openapi_client.model.address_update import AddressUpdate
from openapi_client.model.patched_address_update import PatchedAddressUpdate
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
    api_instance = address_api.AddressApi(api_client)
    address_uuid = "address_uuid_example" # str | 
    client_uuid = "client_uuid_example" # str | 
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
        api_response = api_instance.client_address_partial_update(address_uuid, client_uuid)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling AddressApi->client_address_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_address_partial_update(address_uuid, client_uuid, patched_address_update=patched_address_update)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling AddressApi->client_address_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address_uuid** | **str**|  |
 **client_uuid** | **str**|  |
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
> AddressList client_address_retrieve(address_uuid, client_uuid)



Retrieve a client address

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import address_api
from openapi_client.model.address_list import AddressList
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
    api_instance = address_api.AddressApi(api_client)
    address_uuid = "address_uuid_example" # str | 
    client_uuid = "client_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_address_retrieve(address_uuid, client_uuid)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling AddressApi->client_address_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address_uuid** | **str**|  |
 **client_uuid** | **str**|  |

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
> AddressUpdate client_address_update(address_uuid, client_uuid, address_update)



Update a client address

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import address_api
from openapi_client.model.address_update import AddressUpdate
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
    api_instance = address_api.AddressApi(api_client)
    address_uuid = "address_uuid_example" # str | 
    client_uuid = "client_uuid_example" # str | 
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
        api_response = api_instance.client_address_update(address_uuid, client_uuid, address_update)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling AddressApi->client_address_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address_uuid** | **str**|  |
 **client_uuid** | **str**|  |
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
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import address_api
from openapi_client.model.paginated_address_list_list import PaginatedAddressListList
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
    api_instance = address_api.AddressApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_addresses_list(client_uuid)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling AddressApi->client_addresses_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_addresses_list(client_uuid, limit=limit, offset=offset)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling AddressApi->client_addresses_list: %s\n" % e)
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

