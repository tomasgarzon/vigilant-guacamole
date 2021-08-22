# openapi_client.BankAccountApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**client_bank_account_create**](BankAccountApi.md#client_bank_account_create) | **POST** /api/v2/clients/{client_uuid}/bank-accounts/ | 
[**client_bank_account_delete**](BankAccountApi.md#client_bank_account_delete) | **DELETE** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
[**client_bank_account_partial_update**](BankAccountApi.md#client_bank_account_partial_update) | **PATCH** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
[**client_bank_account_retrieve**](BankAccountApi.md#client_bank_account_retrieve) | **GET** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
[**client_bank_account_update**](BankAccountApi.md#client_bank_account_update) | **PUT** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
[**client_bank_accounts_list**](BankAccountApi.md#client_bank_accounts_list) | **GET** /api/v2/clients/{client_uuid}/bank-accounts/ | 


# **client_bank_account_create**
> BankAccountCreateUpdate client_bank_account_create(client_uuid)



Create a bank account for a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import bank_account_api
from openapi_client.model.bank_account_create_update import BankAccountCreateUpdate
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
    api_instance = bank_account_api.BankAccountApi(api_client)
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
    except openapi_client.ApiException as e:
        print("Exception when calling BankAccountApi->client_bank_account_create: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_bank_account_create(client_uuid, bank_account_create_update=bank_account_create_update)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling BankAccountApi->client_bank_account_create: %s\n" % e)
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
> client_bank_account_delete(bank_account_uuid, client_uuid)



Delete a client bank account

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import bank_account_api
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
    api_instance = bank_account_api.BankAccountApi(api_client)
    bank_account_uuid = "bank_account_uuid_example" # str | 
    client_uuid = "client_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_instance.client_bank_account_delete(bank_account_uuid, client_uuid)
    except openapi_client.ApiException as e:
        print("Exception when calling BankAccountApi->client_bank_account_delete: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bank_account_uuid** | **str**|  |
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

# **client_bank_account_partial_update**
> BankAccountCreateUpdate client_bank_account_partial_update(bank_account_uuid, client_uuid)



Partial Update a client bank account

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import bank_account_api
from openapi_client.model.bank_account_create_update import BankAccountCreateUpdate
from openapi_client.model.patched_bank_account_create_update import PatchedBankAccountCreateUpdate
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
    api_instance = bank_account_api.BankAccountApi(api_client)
    bank_account_uuid = "bank_account_uuid_example" # str | 
    client_uuid = "client_uuid_example" # str | 
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
        api_response = api_instance.client_bank_account_partial_update(bank_account_uuid, client_uuid)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling BankAccountApi->client_bank_account_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_bank_account_partial_update(bank_account_uuid, client_uuid, patched_bank_account_create_update=patched_bank_account_create_update)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling BankAccountApi->client_bank_account_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bank_account_uuid** | **str**|  |
 **client_uuid** | **str**|  |
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
> BankAccountList client_bank_account_retrieve(bank_account_uuid, client_uuid)



Retrieve a client bank account

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import bank_account_api
from openapi_client.model.bank_account_list import BankAccountList
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
    api_instance = bank_account_api.BankAccountApi(api_client)
    bank_account_uuid = "bank_account_uuid_example" # str | 
    client_uuid = "client_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_bank_account_retrieve(bank_account_uuid, client_uuid)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling BankAccountApi->client_bank_account_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bank_account_uuid** | **str**|  |
 **client_uuid** | **str**|  |

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
> BankAccountCreateUpdate client_bank_account_update(bank_account_uuid, client_uuid)



Update a client bank account

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import bank_account_api
from openapi_client.model.bank_account_create_update import BankAccountCreateUpdate
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
    api_instance = bank_account_api.BankAccountApi(api_client)
    bank_account_uuid = "bank_account_uuid_example" # str | 
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
        api_response = api_instance.client_bank_account_update(bank_account_uuid, client_uuid)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling BankAccountApi->client_bank_account_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_bank_account_update(bank_account_uuid, client_uuid, bank_account_create_update=bank_account_create_update)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling BankAccountApi->client_bank_account_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bank_account_uuid** | **str**|  |
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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_bank_accounts_list**
> PaginatedBankAccountListList client_bank_accounts_list(client_uuid)



List Bank Account for a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import bank_account_api
from openapi_client.model.paginated_bank_account_list_list import PaginatedBankAccountListList
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
    api_instance = bank_account_api.BankAccountApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_bank_accounts_list(client_uuid)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling BankAccountApi->client_bank_accounts_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_bank_accounts_list(client_uuid, limit=limit, offset=offset)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling BankAccountApi->client_bank_accounts_list: %s\n" % e)
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

