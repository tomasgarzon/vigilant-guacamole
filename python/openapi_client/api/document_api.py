"""
    Nucoro API

    No description  # noqa: E501

    The version of the OpenAPI document: 4.175.0
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
from openapi_client.model.doc_type_enum import DocTypeEnum
from openapi_client.model.document import Document
from openapi_client.model.paginated_document_list import PaginatedDocumentList


class DocumentApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

        def __client_document_create(
            self,
            client_uuid,
            uuid,
            name,
            doc_type,
            path,
            **kwargs
        ):
            """client_document_create  # noqa: E501

            Create a document for a client  # noqa: E501
            This method makes a synchronous HTTP request by default. To make an
            asynchronous HTTP request, please pass async_req=True

            >>> thread = api.client_document_create(client_uuid, uuid, name, doc_type, path, async_req=True)
            >>> result = thread.get()

            Args:
                client_uuid (str):
                uuid (str):
                name (str):
                doc_type (DocTypeEnum):
                path (str):

            Keyword Args:
                description (str): [optional]
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
                Document
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
            kwargs['uuid'] = \
                uuid
            kwargs['name'] = \
                name
            kwargs['doc_type'] = \
                doc_type
            kwargs['path'] = \
                path
            return self.call_with_http_info(**kwargs)

        self.client_document_create = _Endpoint(
            settings={
                'response_type': (Document,),
                'auth': [
                    'cookieAuth',
                    'jwtAuth',
                    'tokenAuth'
                ],
                'endpoint_path': '/api/v2/clients/{client_uuid}/documents/',
                'operation_id': 'client_document_create',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'client_uuid',
                    'uuid',
                    'name',
                    'doc_type',
                    'path',
                    'description',
                ],
                'required': [
                    'client_uuid',
                    'uuid',
                    'name',
                    'doc_type',
                    'path',
                ],
                'nullable': [
                ],
                'enum': [
                ],
                'validation': [
                    'description',
                ]
            },
            root_map={
                'validations': {
                    ('description',): {
                        'max_length': 250,
                    },
                },
                'allowed_values': {
                },
                'openapi_types': {
                    'client_uuid':
                        (str,),
                    'uuid':
                        (str,),
                    'name':
                        (str,),
                    'doc_type':
                        (DocTypeEnum,),
                    'path':
                        (str,),
                    'description':
                        (str,),
                },
                'attribute_map': {
                    'client_uuid': 'client_uuid',
                    'uuid': 'uuid',
                    'name': 'name',
                    'doc_type': 'doc_type',
                    'path': 'path',
                    'description': 'description',
                },
                'location_map': {
                    'client_uuid': 'path',
                    'uuid': 'form',
                    'name': 'form',
                    'doc_type': 'form',
                    'path': 'form',
                    'description': 'form',
                },
                'collection_format_map': {
                }
            },
            headers_map={
                'accept': [
                    'application/json'
                ],
                'content_type': [
                    'multipart/form-data'
                ]
            },
            api_client=api_client,
            callable=__client_document_create
        )

        def __client_document_delete(
            self,
            client_uuid,
            uuid,
            **kwargs
        ):
            """client_document_delete  # noqa: E501

            Delete a client document  # noqa: E501
            This method makes a synchronous HTTP request by default. To make an
            asynchronous HTTP request, please pass async_req=True

            >>> thread = api.client_document_delete(client_uuid, uuid, async_req=True)
            >>> result = thread.get()

            Args:
                client_uuid (str):
                uuid (str):

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
            kwargs['client_uuid'] = \
                client_uuid
            kwargs['uuid'] = \
                uuid
            return self.call_with_http_info(**kwargs)

        self.client_document_delete = _Endpoint(
            settings={
                'response_type': None,
                'auth': [
                    'cookieAuth',
                    'jwtAuth',
                    'tokenAuth'
                ],
                'endpoint_path': '/api/v2/clients/{client_uuid}/documents/{uuid}/',
                'operation_id': 'client_document_delete',
                'http_method': 'DELETE',
                'servers': None,
            },
            params_map={
                'all': [
                    'client_uuid',
                    'uuid',
                ],
                'required': [
                    'client_uuid',
                    'uuid',
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
                    'uuid':
                        (str,),
                },
                'attribute_map': {
                    'client_uuid': 'client_uuid',
                    'uuid': 'uuid',
                },
                'location_map': {
                    'client_uuid': 'path',
                    'uuid': 'path',
                },
                'collection_format_map': {
                }
            },
            headers_map={
                'accept': [],
                'content_type': [],
            },
            api_client=api_client,
            callable=__client_document_delete
        )

        def __client_document_list(
            self,
            client_uuid,
            **kwargs
        ):
            """client_document_list  # noqa: E501

            List Document for a client  # noqa: E501
            This method makes a synchronous HTTP request by default. To make an
            asynchronous HTTP request, please pass async_req=True

            >>> thread = api.client_document_list(client_uuid, async_req=True)
            >>> result = thread.get()

            Args:
                client_uuid (str):

            Keyword Args:
                client (int): [optional]
                description (str): [optional]
                doc_type ([str]): [optional]
                extra_data ({str: (bool, date, datetime, dict, float, int, list, str, none_type)}, none_type): Additional document attributes for the specific portal. [optional]
                limit (int): Number of results to return per page.. [optional]
                name (str): [optional]
                offset (int): The initial index from which to return the results.. [optional]
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
                PaginatedDocumentList
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

        self.client_document_list = _Endpoint(
            settings={
                'response_type': (PaginatedDocumentList,),
                'auth': [
                    'cookieAuth',
                    'jwtAuth',
                    'tokenAuth'
                ],
                'endpoint_path': '/api/v2/clients/{client_uuid}/documents/',
                'operation_id': 'client_document_list',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'client_uuid',
                    'client',
                    'description',
                    'doc_type',
                    'extra_data',
                    'limit',
                    'name',
                    'offset',
                ],
                'required': [
                    'client_uuid',
                ],
                'nullable': [
                    'extra_data',
                ],
                'enum': [
                    'doc_type',
                ],
                'validation': [
                ]
            },
            root_map={
                'validations': {
                },
                'allowed_values': {
                    ('doc_type',): {

                        "BANK_DETAILS": "BANK_DETAILS",
                        "CONTRACT": "CONTRACT",
                        "EMPLOYMENT": "EMPLOYMENT",
                        "ID_PERSONAL": "ID_PERSONAL",
                        "LEGAL": "LEGAL",
                        "MARITAL_STATUS": "MARITAL_STATUS",
                        "MEDICAL": "MEDICAL",
                        "OTHERS": "OTHERS",
                        "PENSION": "PENSION",
                        "TRANSFERS": "TRANSFERS"
                    },
                },
                'openapi_types': {
                    'client_uuid':
                        (str,),
                    'client':
                        (int,),
                    'description':
                        (str,),
                    'doc_type':
                        ([str],),
                    'extra_data':
                        ({str: (bool, date, datetime, dict, float, int, list, str, none_type)}, none_type,),
                    'limit':
                        (int,),
                    'name':
                        (str,),
                    'offset':
                        (int,),
                },
                'attribute_map': {
                    'client_uuid': 'client_uuid',
                    'client': 'client',
                    'description': 'description',
                    'doc_type': 'doc_type',
                    'extra_data': 'extra_data',
                    'limit': 'limit',
                    'name': 'name',
                    'offset': 'offset',
                },
                'location_map': {
                    'client_uuid': 'path',
                    'client': 'query',
                    'description': 'query',
                    'doc_type': 'query',
                    'extra_data': 'query',
                    'limit': 'query',
                    'name': 'query',
                    'offset': 'query',
                },
                'collection_format_map': {
                    'doc_type': 'multi',
                }
            },
            headers_map={
                'accept': [
                    'application/json'
                ],
                'content_type': [],
            },
            api_client=api_client,
            callable=__client_document_list
        )

        def __client_document_retrieve(
            self,
            client_uuid,
            uuid,
            **kwargs
        ):
            """client_document_retrieve  # noqa: E501

            Retrieve a client document  # noqa: E501
            This method makes a synchronous HTTP request by default. To make an
            asynchronous HTTP request, please pass async_req=True

            >>> thread = api.client_document_retrieve(client_uuid, uuid, async_req=True)
            >>> result = thread.get()

            Args:
                client_uuid (str):
                uuid (str):

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
                Document
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
            kwargs['uuid'] = \
                uuid
            return self.call_with_http_info(**kwargs)

        self.client_document_retrieve = _Endpoint(
            settings={
                'response_type': (Document,),
                'auth': [
                    'cookieAuth',
                    'jwtAuth',
                    'tokenAuth'
                ],
                'endpoint_path': '/api/v2/clients/{client_uuid}/documents/{uuid}/',
                'operation_id': 'client_document_retrieve',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'client_uuid',
                    'uuid',
                ],
                'required': [
                    'client_uuid',
                    'uuid',
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
                    'uuid':
                        (str,),
                },
                'attribute_map': {
                    'client_uuid': 'client_uuid',
                    'uuid': 'uuid',
                },
                'location_map': {
                    'client_uuid': 'path',
                    'uuid': 'path',
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
            callable=__client_document_retrieve
        )
