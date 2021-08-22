"""
    Nucoro API v2

    No description  # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

from openapi_client.api_client import ApiClient, Endpoint as _Endpoint
from openapi_client.model_utils import (  # noqa: F401
    check_allowed_values,
    check_validations,
    date,
    datetime,
    file_type,
    none_type,
    validate_and_convert_types
)
from openapi_client.model.assessment import Assessment
from openapi_client.model.paginated_assessment_list import PaginatedAssessmentList
from openapi_client.model.patched_assessment import PatchedAssessment


class RiskAssessmentApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

        def __client_risk_assessment_create(
            self,
            client_uuid,
            assessment,
            **kwargs
        ):
            """client_risk_assessment_create  # noqa: E501

            Create a risk assessment for a client  # noqa: E501
            This method makes a synchronous HTTP request by default. To make an
            asynchronous HTTP request, please pass async_req=True

            >>> thread = api.client_risk_assessment_create(client_uuid, assessment, async_req=True)
            >>> result = thread.get()

            Args:
                client_uuid (str):
                assessment (Assessment):

            Keyword Args:
                _return_http_data_only (bool): response data without head status
                    code and headers. Default is True.
                _preload_content (bool): if False, the urllib3.HTTPResponse object
                    will be returned without reading/decoding response data.
                    Default is True.
                _request_timeout (int/float/tuple): timeout setting for this request. If
                    one number provided, it will be total request timeout. It can also
                    be a pair (tuple) of (connection, read) timeouts.
                    Default is None.
                _check_input_type (bool): specifies if type checking
                    should be done one the data sent to the server.
                    Default is True.
                _check_return_type (bool): specifies if type checking
                    should be done one the data received from the server.
                    Default is True.
                _host_index (int/None): specifies the index of the server
                    that we want to use.
                    Default is read from the configuration.
                async_req (bool): execute request asynchronously

            Returns:
                Assessment
                    If the method is called asynchronously, returns the request
                    thread.
            """
            kwargs['async_req'] = kwargs.get(
                'async_req', False
            )
            kwargs['_return_http_data_only'] = kwargs.get(
                '_return_http_data_only', True
            )
            kwargs['_preload_content'] = kwargs.get(
                '_preload_content', True
            )
            kwargs['_request_timeout'] = kwargs.get(
                '_request_timeout', None
            )
            kwargs['_check_input_type'] = kwargs.get(
                '_check_input_type', True
            )
            kwargs['_check_return_type'] = kwargs.get(
                '_check_return_type', True
            )
            kwargs['_host_index'] = kwargs.get('_host_index')
            kwargs['client_uuid'] = \
                client_uuid
            kwargs['assessment'] = \
                assessment
            return self.call_with_http_info(**kwargs)

        self.client_risk_assessment_create = _Endpoint(
            settings={
                'response_type': (Assessment,),
                'auth': [
                    'cookieAuth',
                    'jwtAuth',
                    'tokenAuth'
                ],
                'endpoint_path': '/api/v2/clients/{client_uuid}/risk-assessments/',
                'operation_id': 'client_risk_assessment_create',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'client_uuid',
                    'assessment',
                ],
                'required': [
                    'client_uuid',
                    'assessment',
                ],
                'nullable': [
                ],
                'enum': [
                ],
                'validation': [
                ]
            },
            root_map={
                'validations': {
                },
                'allowed_values': {
                },
                'openapi_types': {
                    'client_uuid':
                        (str,),
                    'assessment':
                        (Assessment,),
                },
                'attribute_map': {
                    'client_uuid': 'client_uuid',
                },
                'location_map': {
                    'client_uuid': 'path',
                    'assessment': 'body',
                },
                'collection_format_map': {
                }
            },
            headers_map={
                'accept': [
                    'application/json'
                ],
                'content_type': [
                    'application/json',
                    'application/x-www-form-urlencoded',
                    'multipart/form-data'
                ]
            },
            api_client=api_client,
            callable=__client_risk_assessment_create
        )

        def __client_risk_assessment_delete(
            self,
            assessment_uuid,
            client_uuid,
            **kwargs
        ):
            """client_risk_assessment_delete  # noqa: E501

            Delete a client risk assessment  # noqa: E501
            This method makes a synchronous HTTP request by default. To make an
            asynchronous HTTP request, please pass async_req=True

            >>> thread = api.client_risk_assessment_delete(assessment_uuid, client_uuid, async_req=True)
            >>> result = thread.get()

            Args:
                assessment_uuid (str):
                client_uuid (str):

            Keyword Args:
                _return_http_data_only (bool): response data without head status
                    code and headers. Default is True.
                _preload_content (bool): if False, the urllib3.HTTPResponse object
                    will be returned without reading/decoding response data.
                    Default is True.
                _request_timeout (int/float/tuple): timeout setting for this request. If
                    one number provided, it will be total request timeout. It can also
                    be a pair (tuple) of (connection, read) timeouts.
                    Default is None.
                _check_input_type (bool): specifies if type checking
                    should be done one the data sent to the server.
                    Default is True.
                _check_return_type (bool): specifies if type checking
                    should be done one the data received from the server.
                    Default is True.
                _host_index (int/None): specifies the index of the server
                    that we want to use.
                    Default is read from the configuration.
                async_req (bool): execute request asynchronously

            Returns:
                None
                    If the method is called asynchronously, returns the request
                    thread.
            """
            kwargs['async_req'] = kwargs.get(
                'async_req', False
            )
            kwargs['_return_http_data_only'] = kwargs.get(
                '_return_http_data_only', True
            )
            kwargs['_preload_content'] = kwargs.get(
                '_preload_content', True
            )
            kwargs['_request_timeout'] = kwargs.get(
                '_request_timeout', None
            )
            kwargs['_check_input_type'] = kwargs.get(
                '_check_input_type', True
            )
            kwargs['_check_return_type'] = kwargs.get(
                '_check_return_type', True
            )
            kwargs['_host_index'] = kwargs.get('_host_index')
            kwargs['assessment_uuid'] = \
                assessment_uuid
            kwargs['client_uuid'] = \
                client_uuid
            return self.call_with_http_info(**kwargs)

        self.client_risk_assessment_delete = _Endpoint(
            settings={
                'response_type': None,
                'auth': [
                    'cookieAuth',
                    'jwtAuth',
                    'tokenAuth'
                ],
                'endpoint_path': '/api/v2/clients/{client_uuid}/risk-assessments/{assessment_uuid}/',
                'operation_id': 'client_risk_assessment_delete',
                'http_method': 'DELETE',
                'servers': None,
            },
            params_map={
                'all': [
                    'assessment_uuid',
                    'client_uuid',
                ],
                'required': [
                    'assessment_uuid',
                    'client_uuid',
                ],
                'nullable': [
                ],
                'enum': [
                ],
                'validation': [
                ]
            },
            root_map={
                'validations': {
                },
                'allowed_values': {
                },
                'openapi_types': {
                    'assessment_uuid':
                        (str,),
                    'client_uuid':
                        (str,),
                },
                'attribute_map': {
                    'assessment_uuid': 'assessment_uuid',
                    'client_uuid': 'client_uuid',
                },
                'location_map': {
                    'assessment_uuid': 'path',
                    'client_uuid': 'path',
                },
                'collection_format_map': {
                }
            },
            headers_map={
                'accept': [],
                'content_type': [],
            },
            api_client=api_client,
            callable=__client_risk_assessment_delete
        )

        def __client_risk_assessment_list(
            self,
            client_uuid,
            **kwargs
        ):
            """client_risk_assessment_list  # noqa: E501

            List Risk Assessment for a client  # noqa: E501
            This method makes a synchronous HTTP request by default. To make an
            asynchronous HTTP request, please pass async_req=True

            >>> thread = api.client_risk_assessment_list(client_uuid, async_req=True)
            >>> result = thread.get()

            Args:
                client_uuid (str):

            Keyword Args:
                limit (int): Number of results to return per page.. [optional]
                offset (int): The initial index from which to return the results.. [optional]
                status ([str]): [optional]
                _return_http_data_only (bool): response data without head status
                    code and headers. Default is True.
                _preload_content (bool): if False, the urllib3.HTTPResponse object
                    will be returned without reading/decoding response data.
                    Default is True.
                _request_timeout (int/float/tuple): timeout setting for this request. If
                    one number provided, it will be total request timeout. It can also
                    be a pair (tuple) of (connection, read) timeouts.
                    Default is None.
                _check_input_type (bool): specifies if type checking
                    should be done one the data sent to the server.
                    Default is True.
                _check_return_type (bool): specifies if type checking
                    should be done one the data received from the server.
                    Default is True.
                _host_index (int/None): specifies the index of the server
                    that we want to use.
                    Default is read from the configuration.
                async_req (bool): execute request asynchronously

            Returns:
                PaginatedAssessmentList
                    If the method is called asynchronously, returns the request
                    thread.
            """
            kwargs['async_req'] = kwargs.get(
                'async_req', False
            )
            kwargs['_return_http_data_only'] = kwargs.get(
                '_return_http_data_only', True
            )
            kwargs['_preload_content'] = kwargs.get(
                '_preload_content', True
            )
            kwargs['_request_timeout'] = kwargs.get(
                '_request_timeout', None
            )
            kwargs['_check_input_type'] = kwargs.get(
                '_check_input_type', True
            )
            kwargs['_check_return_type'] = kwargs.get(
                '_check_return_type', True
            )
            kwargs['_host_index'] = kwargs.get('_host_index')
            kwargs['client_uuid'] = \
                client_uuid
            return self.call_with_http_info(**kwargs)

        self.client_risk_assessment_list = _Endpoint(
            settings={
                'response_type': (PaginatedAssessmentList,),
                'auth': [
                    'cookieAuth',
                    'jwtAuth',
                    'tokenAuth'
                ],
                'endpoint_path': '/api/v2/clients/{client_uuid}/risk-assessments/',
                'operation_id': 'client_risk_assessment_list',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'client_uuid',
                    'limit',
                    'offset',
                    'status',
                ],
                'required': [
                    'client_uuid',
                ],
                'nullable': [
                ],
                'enum': [
                    'status',
                ],
                'validation': [
                ]
            },
            root_map={
                'validations': {
                },
                'allowed_values': {
                    ('status',): {

                        "COMPLETED": "COMPLETED",
                        "OUTDATED": "OUTDATED",
                        "PENDING": "PENDING"
                    },
                },
                'openapi_types': {
                    'client_uuid':
                        (str,),
                    'limit':
                        (int,),
                    'offset':
                        (int,),
                    'status':
                        ([str],),
                },
                'attribute_map': {
                    'client_uuid': 'client_uuid',
                    'limit': 'limit',
                    'offset': 'offset',
                    'status': 'status',
                },
                'location_map': {
                    'client_uuid': 'path',
                    'limit': 'query',
                    'offset': 'query',
                    'status': 'query',
                },
                'collection_format_map': {
                    'status': 'multi',
                }
            },
            headers_map={
                'accept': [
                    'application/json'
                ],
                'content_type': [],
            },
            api_client=api_client,
            callable=__client_risk_assessment_list
        )

        def __client_risk_assessment_partial_update(
            self,
            assessment_uuid,
            client_uuid,
            **kwargs
        ):
            """client_risk_assessment_partial_update  # noqa: E501

            Partial Update a client risk assessment  # noqa: E501
            This method makes a synchronous HTTP request by default. To make an
            asynchronous HTTP request, please pass async_req=True

            >>> thread = api.client_risk_assessment_partial_update(assessment_uuid, client_uuid, async_req=True)
            >>> result = thread.get()

            Args:
                assessment_uuid (str):
                client_uuid (str):

            Keyword Args:
                patched_assessment (PatchedAssessment): [optional]
                _return_http_data_only (bool): response data without head status
                    code and headers. Default is True.
                _preload_content (bool): if False, the urllib3.HTTPResponse object
                    will be returned without reading/decoding response data.
                    Default is True.
                _request_timeout (int/float/tuple): timeout setting for this request. If
                    one number provided, it will be total request timeout. It can also
                    be a pair (tuple) of (connection, read) timeouts.
                    Default is None.
                _check_input_type (bool): specifies if type checking
                    should be done one the data sent to the server.
                    Default is True.
                _check_return_type (bool): specifies if type checking
                    should be done one the data received from the server.
                    Default is True.
                _host_index (int/None): specifies the index of the server
                    that we want to use.
                    Default is read from the configuration.
                async_req (bool): execute request asynchronously

            Returns:
                Assessment
                    If the method is called asynchronously, returns the request
                    thread.
            """
            kwargs['async_req'] = kwargs.get(
                'async_req', False
            )
            kwargs['_return_http_data_only'] = kwargs.get(
                '_return_http_data_only', True
            )
            kwargs['_preload_content'] = kwargs.get(
                '_preload_content', True
            )
            kwargs['_request_timeout'] = kwargs.get(
                '_request_timeout', None
            )
            kwargs['_check_input_type'] = kwargs.get(
                '_check_input_type', True
            )
            kwargs['_check_return_type'] = kwargs.get(
                '_check_return_type', True
            )
            kwargs['_host_index'] = kwargs.get('_host_index')
            kwargs['assessment_uuid'] = \
                assessment_uuid
            kwargs['client_uuid'] = \
                client_uuid
            return self.call_with_http_info(**kwargs)

        self.client_risk_assessment_partial_update = _Endpoint(
            settings={
                'response_type': (Assessment,),
                'auth': [
                    'cookieAuth',
                    'jwtAuth',
                    'tokenAuth'
                ],
                'endpoint_path': '/api/v2/clients/{client_uuid}/risk-assessments/{assessment_uuid}/',
                'operation_id': 'client_risk_assessment_partial_update',
                'http_method': 'PATCH',
                'servers': None,
            },
            params_map={
                'all': [
                    'assessment_uuid',
                    'client_uuid',
                    'patched_assessment',
                ],
                'required': [
                    'assessment_uuid',
                    'client_uuid',
                ],
                'nullable': [
                ],
                'enum': [
                ],
                'validation': [
                ]
            },
            root_map={
                'validations': {
                },
                'allowed_values': {
                },
                'openapi_types': {
                    'assessment_uuid':
                        (str,),
                    'client_uuid':
                        (str,),
                    'patched_assessment':
                        (PatchedAssessment,),
                },
                'attribute_map': {
                    'assessment_uuid': 'assessment_uuid',
                    'client_uuid': 'client_uuid',
                },
                'location_map': {
                    'assessment_uuid': 'path',
                    'client_uuid': 'path',
                    'patched_assessment': 'body',
                },
                'collection_format_map': {
                }
            },
            headers_map={
                'accept': [
                    'application/json'
                ],
                'content_type': [
                    'application/json',
                    'application/x-www-form-urlencoded',
                    'multipart/form-data'
                ]
            },
            api_client=api_client,
            callable=__client_risk_assessment_partial_update
        )

        def __client_risk_assessment_retrieve(
            self,
            assessment_uuid,
            client_uuid,
            **kwargs
        ):
            """client_risk_assessment_retrieve  # noqa: E501

            Retrieve a client risk assessment  # noqa: E501
            This method makes a synchronous HTTP request by default. To make an
            asynchronous HTTP request, please pass async_req=True

            >>> thread = api.client_risk_assessment_retrieve(assessment_uuid, client_uuid, async_req=True)
            >>> result = thread.get()

            Args:
                assessment_uuid (str):
                client_uuid (str):

            Keyword Args:
                _return_http_data_only (bool): response data without head status
                    code and headers. Default is True.
                _preload_content (bool): if False, the urllib3.HTTPResponse object
                    will be returned without reading/decoding response data.
                    Default is True.
                _request_timeout (int/float/tuple): timeout setting for this request. If
                    one number provided, it will be total request timeout. It can also
                    be a pair (tuple) of (connection, read) timeouts.
                    Default is None.
                _check_input_type (bool): specifies if type checking
                    should be done one the data sent to the server.
                    Default is True.
                _check_return_type (bool): specifies if type checking
                    should be done one the data received from the server.
                    Default is True.
                _host_index (int/None): specifies the index of the server
                    that we want to use.
                    Default is read from the configuration.
                async_req (bool): execute request asynchronously

            Returns:
                Assessment
                    If the method is called asynchronously, returns the request
                    thread.
            """
            kwargs['async_req'] = kwargs.get(
                'async_req', False
            )
            kwargs['_return_http_data_only'] = kwargs.get(
                '_return_http_data_only', True
            )
            kwargs['_preload_content'] = kwargs.get(
                '_preload_content', True
            )
            kwargs['_request_timeout'] = kwargs.get(
                '_request_timeout', None
            )
            kwargs['_check_input_type'] = kwargs.get(
                '_check_input_type', True
            )
            kwargs['_check_return_type'] = kwargs.get(
                '_check_return_type', True
            )
            kwargs['_host_index'] = kwargs.get('_host_index')
            kwargs['assessment_uuid'] = \
                assessment_uuid
            kwargs['client_uuid'] = \
                client_uuid
            return self.call_with_http_info(**kwargs)

        self.client_risk_assessment_retrieve = _Endpoint(
            settings={
                'response_type': (Assessment,),
                'auth': [
                    'cookieAuth',
                    'jwtAuth',
                    'tokenAuth'
                ],
                'endpoint_path': '/api/v2/clients/{client_uuid}/risk-assessments/{assessment_uuid}/',
                'operation_id': 'client_risk_assessment_retrieve',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'assessment_uuid',
                    'client_uuid',
                ],
                'required': [
                    'assessment_uuid',
                    'client_uuid',
                ],
                'nullable': [
                ],
                'enum': [
                ],
                'validation': [
                ]
            },
            root_map={
                'validations': {
                },
                'allowed_values': {
                },
                'openapi_types': {
                    'assessment_uuid':
                        (str,),
                    'client_uuid':
                        (str,),
                },
                'attribute_map': {
                    'assessment_uuid': 'assessment_uuid',
                    'client_uuid': 'client_uuid',
                },
                'location_map': {
                    'assessment_uuid': 'path',
                    'client_uuid': 'path',
                },
                'collection_format_map': {
                }
            },
            headers_map={
                'accept': [
                    'application/json'
                ],
                'content_type': [],
            },
            api_client=api_client,
            callable=__client_risk_assessment_retrieve
        )
