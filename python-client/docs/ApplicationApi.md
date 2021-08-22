# openapi_client.ApplicationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**client_address_create**](ApplicationApi.md#client_address_create) | **POST** /api/v2/clients/{client_uuid}/addresses/ | 
[**client_address_delete**](ApplicationApi.md#client_address_delete) | **DELETE** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
[**client_address_partial_update**](ApplicationApi.md#client_address_partial_update) | **PATCH** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
[**client_address_retrieve**](ApplicationApi.md#client_address_retrieve) | **GET** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
[**client_address_update**](ApplicationApi.md#client_address_update) | **PUT** /api/v2/clients/{client_uuid}/addresses/{address_uuid}/ | 
[**client_addresses_list**](ApplicationApi.md#client_addresses_list) | **GET** /api/v2/clients/{client_uuid}/addresses/ | 
[**client_bank_account_create**](ApplicationApi.md#client_bank_account_create) | **POST** /api/v2/clients/{client_uuid}/bank-accounts/ | 
[**client_bank_account_delete**](ApplicationApi.md#client_bank_account_delete) | **DELETE** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
[**client_bank_account_partial_update**](ApplicationApi.md#client_bank_account_partial_update) | **PATCH** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
[**client_bank_account_retrieve**](ApplicationApi.md#client_bank_account_retrieve) | **GET** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
[**client_bank_account_update**](ApplicationApi.md#client_bank_account_update) | **PUT** /api/v2/clients/{client_uuid}/bank-accounts/{bank_account_uuid}/ | 
[**client_bank_accounts_list**](ApplicationApi.md#client_bank_accounts_list) | **GET** /api/v2/clients/{client_uuid}/bank-accounts/ | 
[**client_complete_onboarding**](ApplicationApi.md#client_complete_onboarding) | **POST** /api/v2/clients/{client_uuid}/onboarding/complete/ | 
[**client_create**](ApplicationApi.md#client_create) | **POST** /api/v2/clients/ | 
[**client_list**](ApplicationApi.md#client_list) | **GET** /api/v2/clients/ | 
[**client_nationality_create**](ApplicationApi.md#client_nationality_create) | **POST** /api/v2/clients/{client_uuid}/nationalities/ | 
[**client_nationlities_list**](ApplicationApi.md#client_nationlities_list) | **GET** /api/v2/clients/{client_uuid}/nationalities/ | 
[**client_nationlity_delete**](ApplicationApi.md#client_nationlity_delete) | **DELETE** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 
[**client_nationlity_partial_update**](ApplicationApi.md#client_nationlity_partial_update) | **PATCH** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 
[**client_nationlity_retrieve**](ApplicationApi.md#client_nationlity_retrieve) | **GET** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 
[**client_nationlity_update**](ApplicationApi.md#client_nationlity_update) | **PUT** /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/ | 
[**client_partial_update**](ApplicationApi.md#client_partial_update) | **PATCH** /api/v2/clients/{client_uuid}/ | 
[**client_retrieve**](ApplicationApi.md#client_retrieve) | **GET** /api/v2/clients/{client_uuid}/ | 
[**client_risk_assessment_create**](ApplicationApi.md#client_risk_assessment_create) | **POST** /api/v2/clients/{client_uuid}/risk-assessments/ | 
[**client_risk_assessment_delete**](ApplicationApi.md#client_risk_assessment_delete) | **DELETE** /api/v2/clients/{client_uuid}/risk-assessments/{assessment_uuid}/ | 
[**client_risk_assessment_list**](ApplicationApi.md#client_risk_assessment_list) | **GET** /api/v2/clients/{client_uuid}/risk-assessments/ | 
[**client_risk_assessment_partial_update**](ApplicationApi.md#client_risk_assessment_partial_update) | **PATCH** /api/v2/clients/{client_uuid}/risk-assessments/{assessment_uuid}/ | 
[**client_risk_assessment_retrieve**](ApplicationApi.md#client_risk_assessment_retrieve) | **GET** /api/v2/clients/{client_uuid}/risk-assessments/{assessment_uuid}/ | 
[**client_tax_information_create**](ApplicationApi.md#client_tax_information_create) | **POST** /api/v2/clients/{client_uuid}/tax-informations/ | 
[**client_tax_information_delete**](ApplicationApi.md#client_tax_information_delete) | **DELETE** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 
[**client_tax_information_list**](ApplicationApi.md#client_tax_information_list) | **GET** /api/v2/clients/{client_uuid}/tax-informations/ | 
[**client_tax_information_partial_update**](ApplicationApi.md#client_tax_information_partial_update) | **PATCH** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 
[**client_tax_information_retrieve**](ApplicationApi.md#client_tax_information_retrieve) | **GET** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 
[**client_tax_information_update**](ApplicationApi.md#client_tax_information_update) | **PUT** /api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/ | 
[**client_twrr_performance**](ApplicationApi.md#client_twrr_performance) | **GET** /api/v2/clients/{client_uuid}/performance/twrr/ | 
[**client_update**](ApplicationApi.md#client_update) | **PUT** /api/v2/clients/{client_uuid}/ | 
[**client_verification_create**](ApplicationApi.md#client_verification_create) | **POST** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
[**client_verification_document_create**](ApplicationApi.md#client_verification_document_create) | **POST** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
[**client_verification_document_delete**](ApplicationApi.md#client_verification_document_delete) | **DELETE** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{verification_document_uuid}/ | 
[**client_verification_document_list**](ApplicationApi.md#client_verification_document_list) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/ | 
[**client_verification_document_partial_update**](ApplicationApi.md#client_verification_document_partial_update) | **PATCH** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{verification_document_uuid}/ | 
[**client_verification_document_retrieve**](ApplicationApi.md#client_verification_document_retrieve) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{verification_document_uuid}/ | 
[**client_verification_document_update**](ApplicationApi.md#client_verification_document_update) | **PUT** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/documents/{verification_document_uuid}/ | 
[**client_verification_list**](ApplicationApi.md#client_verification_list) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/ | 
[**client_verification_retrieve**](ApplicationApi.md#client_verification_retrieve) | **GET** /api/v2/clients/{client_uuid}/verifications/{verify_type_code}/{verification_uuid}/ | 


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
from openapi_client.api import application_api
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
    except openapi_client.ApiException as e:
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
> client_address_delete(address_uuid, client_uuid)



Delete a client address

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    address_uuid = "address_uuid_example" # str | 
    client_uuid = "client_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_instance.client_address_delete(address_uuid, client_uuid)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_address_delete: %s\n" % e)
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
from openapi_client.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
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
        print("Exception when calling ApplicationApi->client_address_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_address_partial_update(address_uuid, client_uuid, patched_address_update=patched_address_update)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_address_partial_update: %s\n" % e)
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
from openapi_client.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    address_uuid = "address_uuid_example" # str | 
    client_uuid = "client_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_address_retrieve(address_uuid, client_uuid)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_address_retrieve: %s\n" % e)
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
from openapi_client.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
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
        print("Exception when calling ApplicationApi->client_address_update: %s\n" % e)
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
from openapi_client.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_addresses_list(client_uuid)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_addresses_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_addresses_list(client_uuid, limit=limit, offset=offset)
        pprint(api_response)
    except openapi_client.ApiException as e:
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
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
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
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_bank_account_create: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_bank_account_create(client_uuid, bank_account_create_update=bank_account_create_update)
        pprint(api_response)
    except openapi_client.ApiException as e:
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
> client_bank_account_delete(bank_account_uuid, client_uuid)



Delete a client bank account

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    bank_account_uuid = "bank_account_uuid_example" # str | 
    client_uuid = "client_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_instance.client_bank_account_delete(bank_account_uuid, client_uuid)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_bank_account_delete: %s\n" % e)
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
from openapi_client.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
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
        print("Exception when calling ApplicationApi->client_bank_account_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_bank_account_partial_update(bank_account_uuid, client_uuid, patched_bank_account_create_update=patched_bank_account_create_update)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_bank_account_partial_update: %s\n" % e)
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
from openapi_client.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    bank_account_uuid = "bank_account_uuid_example" # str | 
    client_uuid = "client_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_bank_account_retrieve(bank_account_uuid, client_uuid)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_bank_account_retrieve: %s\n" % e)
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
from openapi_client.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
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
        print("Exception when calling ApplicationApi->client_bank_account_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_bank_account_update(bank_account_uuid, client_uuid, bank_account_create_update=bank_account_create_update)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_bank_account_update: %s\n" % e)
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
from openapi_client.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_bank_accounts_list(client_uuid)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_bank_accounts_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_bank_accounts_list(client_uuid, limit=limit, offset=offset)
        pprint(api_response)
    except openapi_client.ApiException as e:
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
> ClientDetail client_complete_onboarding(client_uuid, client_detail)



Complete onboarding for a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
from openapi_client.model.client_detail import ClientDetail
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
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
            long_name="long_name_example",
            long_name_en_gb="long_name_en_gb_example",
            long_name_en_ch="long_name_en_ch_example",
            long_name_fr_ch="long_name_fr_ch_example",
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
        api_response = api_instance.client_complete_onboarding(client_uuid, client_detail)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_complete_onboarding: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
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
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
from openapi_client.model.client_create import ClientCreate
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
    except openapi_client.ApiException as e:
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

# **client_list**
> PaginatedClientDetailList client_list()



List client for a Relationship manager

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
from openapi_client.model.paginated_client_detail_list import PaginatedClientDetailList
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
    except openapi_client.ApiException as e:
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
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
from openapi_client.model.nationality_create import NationalityCreate
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
    except openapi_client.ApiException as e:
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
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
from openapi_client.model.paginated_nationality_list_list import PaginatedNationalityListList
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_nationlities_list(client_uuid)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_nationlities_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_nationlities_list(client_uuid, limit=limit, offset=offset)
        pprint(api_response)
    except openapi_client.ApiException as e:
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
> client_nationlity_delete(client_uuid, nationality_uuid)



Delete a client nationality

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    nationality_uuid = "nationality_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_instance.client_nationlity_delete(client_uuid, nationality_uuid)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_nationlity_delete: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **nationality_uuid** | **str**|  |

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
> NationalityUpdate client_nationlity_partial_update(client_uuid, nationality_uuid)



Partial Update a client nationality

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
from openapi_client.model.nationality_update import NationalityUpdate
from openapi_client.model.patched_nationality_update import PatchedNationalityUpdate
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    nationality_uuid = "nationality_uuid_example" # str | 
    patched_nationality_update = PatchedNationalityUpdate(
        country="country_example",
        document_number="document_number_example",
        document_type="document_type_example",
    ) # PatchedNationalityUpdate |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_nationlity_partial_update(client_uuid, nationality_uuid)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_nationlity_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_nationlity_partial_update(client_uuid, nationality_uuid, patched_nationality_update=patched_nationality_update)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_nationlity_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **nationality_uuid** | **str**|  |
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
> NationalityList client_nationlity_retrieve(client_uuid, nationality_uuid)



Retrieve a client nationality

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
from openapi_client.model.nationality_list import NationalityList
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    nationality_uuid = "nationality_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_nationlity_retrieve(client_uuid, nationality_uuid)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_nationlity_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **nationality_uuid** | **str**|  |

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
> NationalityUpdate client_nationlity_update(client_uuid, nationality_uuid, nationality_update)



Update a client nationality

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
from openapi_client.model.nationality_update import NationalityUpdate
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    nationality_uuid = "nationality_uuid_example" # str | 
    nationality_update = NationalityUpdate(
        country="country_example",
        document_number="document_number_example",
        document_type="document_type_example",
    ) # NationalityUpdate | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_nationlity_update(client_uuid, nationality_uuid, nationality_update)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_nationlity_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **nationality_uuid** | **str**|  |
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
> ApplicationClientUpdate client_partial_update(client_uuid)



Partial Update a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
from openapi_client.model.application_client_update import ApplicationClientUpdate
from openapi_client.model.patched_application_client_update import PatchedApplicationClientUpdate
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
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
            long_name="long_name_example",
            long_name_en_gb="long_name_en_gb_example",
            long_name_en_ch="long_name_en_ch_example",
            long_name_fr_ch="long_name_fr_ch_example",
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
        api_response = api_instance.client_partial_update(client_uuid)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_partial_update(client_uuid, patched_application_client_update=patched_application_client_update)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
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
> ClientDetail client_retrieve(client_uuid)



Retrieve a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
from openapi_client.model.client_detail import ClientDetail
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_retrieve(client_uuid)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |

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
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
from openapi_client.model.assessment import Assessment
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
    except openapi_client.ApiException as e:
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
> client_risk_assessment_delete(assessment_uuid, client_uuid)



Delete a client risk assessment

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    assessment_uuid = "assessment_uuid_example" # str | 
    client_uuid = "client_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_instance.client_risk_assessment_delete(assessment_uuid, client_uuid)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_risk_assessment_delete: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assessment_uuid** | **str**|  |
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

# **client_risk_assessment_list**
> PaginatedAssessmentList client_risk_assessment_list(client_uuid)



List Risk Assessment for a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
from openapi_client.model.paginated_assessment_list import PaginatedAssessmentList
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
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_risk_assessment_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_risk_assessment_list(client_uuid, limit=limit, offset=offset, status=status)
        pprint(api_response)
    except openapi_client.ApiException as e:
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
> Assessment client_risk_assessment_partial_update(assessment_uuid, client_uuid)



Partial Update a client risk assessment

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
from openapi_client.model.patched_assessment import PatchedAssessment
from openapi_client.model.assessment import Assessment
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
    api_instance = application_api.ApplicationApi(api_client)
    assessment_uuid = "assessment_uuid_example" # str | 
    client_uuid = "client_uuid_example" # str | 
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
        api_response = api_instance.client_risk_assessment_partial_update(assessment_uuid, client_uuid)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_risk_assessment_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_risk_assessment_partial_update(assessment_uuid, client_uuid, patched_assessment=patched_assessment)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_risk_assessment_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assessment_uuid** | **str**|  |
 **client_uuid** | **str**|  |
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
> Assessment client_risk_assessment_retrieve(assessment_uuid, client_uuid)



Retrieve a client risk assessment

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
from openapi_client.model.assessment import Assessment
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
    api_instance = application_api.ApplicationApi(api_client)
    assessment_uuid = "assessment_uuid_example" # str | 
    client_uuid = "client_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_risk_assessment_retrieve(assessment_uuid, client_uuid)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_risk_assessment_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assessment_uuid** | **str**|  |
 **client_uuid** | **str**|  |

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
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
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
    except openapi_client.ApiException as e:
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
> client_tax_information_delete(client_uuid, tax_information_uuid)



Delete a client tax inforation

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    tax_information_uuid = "tax_information_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_instance.client_tax_information_delete(client_uuid, tax_information_uuid)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_tax_information_delete: %s\n" % e)
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
from openapi_client.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_tax_information_list(client_uuid)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_tax_information_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_tax_information_list(client_uuid, limit=limit, offset=offset)
        pprint(api_response)
    except openapi_client.ApiException as e:
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
> TaxInformationCreateUpdate client_tax_information_partial_update(client_uuid, tax_information_uuid)



Partial Update a client tax inforation

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
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
        print("Exception when calling ApplicationApi->client_tax_information_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_tax_information_partial_update(client_uuid, tax_information_uuid, patched_tax_information_create_update=patched_tax_information_create_update)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_tax_information_partial_update: %s\n" % e)
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
from openapi_client.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    tax_information_uuid = "tax_information_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_tax_information_retrieve(client_uuid, tax_information_uuid)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_tax_information_retrieve: %s\n" % e)
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
from openapi_client.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
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
        print("Exception when calling ApplicationApi->client_tax_information_update: %s\n" % e)
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

# **client_twrr_performance**
> ClientPerformance client_twrr_performance(client_uuid)



Calculate TWRR Performance for client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
from openapi_client.model.client_performance import ClientPerformance
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_twrr_performance(client_uuid)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_twrr_performance: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |

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
> ApplicationClientUpdate client_update(client_uuid, application_client_update)



Update a client

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
from openapi_client.model.application_client_update import ApplicationClientUpdate
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
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
            long_name="long_name_example",
            long_name_en_gb="long_name_en_gb_example",
            long_name_en_ch="long_name_en_ch_example",
            long_name_fr_ch="long_name_fr_ch_example",
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
        api_response = api_instance.client_update(client_uuid, application_client_update)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
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
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
from openapi_client.model.verification_create import VerificationCreate
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    verify_type_code = "verify_type_code_example" # str | 
    verification_create = VerificationCreate(
        verify_type=VerifyTypeEnum("IDENTITY"),
        status=StatusBd7Enum("PENDING"),
        result=ResultEnum("ACCEPTED"),
    ) # VerificationCreate | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_verification_create(client_uuid, verify_type_code, verification_create)
        pprint(api_response)
    except openapi_client.ApiException as e:
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
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
from openapi_client.model.verification_with_type import VerificationWithType
from openapi_client.model.result_enum import ResultEnum
from openapi_client.model.verify_type_enum import VerifyTypeEnum
from openapi_client.model.verification_document_create import VerificationDocumentCreate
from openapi_client.model.status_bd7_enum import StatusBd7Enum
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
    result = ResultEnum("ACCEPTED") # ResultEnum |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_verification_document_create(client_uuid, verify_type_code, uuid, verify_type, created, updated, verification_documents)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_verification_document_create: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_verification_document_create(client_uuid, verify_type_code, uuid, verify_type, created, updated, verification_documents, status=status, result=result)
        pprint(api_response)
    except openapi_client.ApiException as e:
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
 **result** | [**ResultEnum**](ResultEnum.md)|  | [optional]

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
> client_verification_document_delete(client_uuid, verification_document_uuid, verify_type_code)



Delete a client verificatoin document

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    verification_document_uuid = "verification_document_uuid_example" # str | 
    verify_type_code = "verify_type_code_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_instance.client_verification_document_delete(client_uuid, verification_document_uuid, verify_type_code)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_verification_document_delete: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **verification_document_uuid** | **str**|  |
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
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
from openapi_client.model.paginated_verification_document_list import PaginatedVerificationDocumentList
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    verify_type_code = "verify_type_code_example" # str | 
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_verification_document_list(client_uuid, verify_type_code)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_verification_document_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_verification_document_list(client_uuid, verify_type_code, limit=limit, offset=offset)
        pprint(api_response)
    except openapi_client.ApiException as e:
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
> VerificationDocument client_verification_document_partial_update(client_uuid, verification_document_uuid, verify_type_code)



Partial Update a client verification document

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
from openapi_client.model.verification_document import VerificationDocument
from openapi_client.model.document_type_enum import DocumentTypeEnum
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    verification_document_uuid = "verification_document_uuid_example" # str | 
    verify_type_code = "verify_type_code_example" # str | 
    uuid = "uuid_example" # str |  (optional)
    document_type = DocumentTypeEnum("passport") # DocumentTypeEnum |  (optional)
    document_front = "document_front_example" # str |  (optional)
    document_back = "document_back_example" # str |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_verification_document_partial_update(client_uuid, verification_document_uuid, verify_type_code)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_verification_document_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_verification_document_partial_update(client_uuid, verification_document_uuid, verify_type_code, uuid=uuid, document_type=document_type, document_front=document_front, document_back=document_back)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_verification_document_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **verification_document_uuid** | **str**|  |
 **verify_type_code** | **str**|  |
 **uuid** | **str**|  | [optional]
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
> VerificationDocument client_verification_document_retrieve(client_uuid, verification_document_uuid, verify_type_code)



Retrieve a client verification document

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
from openapi_client.model.verification_document import VerificationDocument
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    verification_document_uuid = "verification_document_uuid_example" # str | 
    verify_type_code = "verify_type_code_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_verification_document_retrieve(client_uuid, verification_document_uuid, verify_type_code)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_verification_document_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **verification_document_uuid** | **str**|  |
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
> VerificationDocument client_verification_document_update(client_uuid, verification_document_uuid, verify_type_code, uuid, document_type, document_front, document_back)



Update a client verification document

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
from openapi_client.model.verification_document import VerificationDocument
from openapi_client.model.document_type_enum import DocumentTypeEnum
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    verification_document_uuid = "verification_document_uuid_example" # str | 
    verify_type_code = "verify_type_code_example" # str | 
    uuid = "uuid_example" # str | 
    document_type = DocumentTypeEnum("passport") # DocumentTypeEnum | 
    document_front = "document_front_example" # str | 
    document_back = "document_back_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_verification_document_update(client_uuid, verification_document_uuid, verify_type_code, uuid, document_type, document_front, document_back)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_verification_document_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **verification_document_uuid** | **str**|  |
 **verify_type_code** | **str**|  |
 **uuid** | **str**|  |
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
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
from openapi_client.model.paginated_verification_list_list import PaginatedVerificationListList
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    verify_type_code = "verify_type_code_example" # str | 
    limit = 1 # int | Number of results to return per page. (optional)
    offset = 1 # int | The initial index from which to return the results. (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_verification_list(client_uuid, verify_type_code)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_verification_list: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.client_verification_list(client_uuid, verify_type_code, limit=limit, offset=offset)
        pprint(api_response)
    except openapi_client.ApiException as e:
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
> VerificationList client_verification_retrieve(client_uuid, verification_uuid, verify_type_code)



Retrieve a client verification 

### Example

* Api Key Authentication (cookieAuth):
* Bearer (Bearer) Authentication (jwtAuth):
* Api Key Authentication (tokenAuth):

```python
import time
import openapi_client
from openapi_client.api import application_api
from openapi_client.model.verification_list import VerificationList
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
    api_instance = application_api.ApplicationApi(api_client)
    client_uuid = "client_uuid_example" # str | 
    verification_uuid = "verification_uuid_example" # str | 
    verify_type_code = "verify_type_code_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.client_verification_retrieve(client_uuid, verification_uuid, verify_type_code)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ApplicationApi->client_verification_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_uuid** | **str**|  |
 **verification_uuid** | **str**|  |
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

