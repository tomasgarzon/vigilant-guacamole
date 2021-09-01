"""
    Nucoro API

    No description  # noqa: E501

    The version of the OpenAPI document: 4.175.0
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

from nucoro_api.api_client import ApiClient, Endpoint as _Endpoint
from nucoro_api.model_utils import (  # noqa: F401
    check_allowed_values,
    check_validations,
    date,
    datetime,
    file_type,
    none_type,
    validate_and_convert_types
)
from nucoro_api.model.impersionation_response import ImpersionationResponse
from nucoro_api.model.impersonation_token import ImpersonationToken
from nucoro_api.model.json_web_token import JSONWebToken
from nucoro_api.model.jwt_refresh_response import JWTRefreshResponse
from nucoro_api.model.jwt_response import JWTResponse
from nucoro_api.model.onboarding_response import OnboardingResponse
from nucoro_api.model.onboarding_token import OnboardingToken
from nucoro_api.model.password_reset import PasswordReset
from nucoro_api.model.password_reset_request import PasswordResetRequest
from nucoro_api.model.password_update import PasswordUpdate
from nucoro_api.model.patched_password_reset_request import PatchedPasswordResetRequest
from nucoro_api.model.token_refresh import TokenRefresh


class AuthApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

        def __auth_get_onboarding_token(
            self,
            onboarding_token,
            **kwargs
        ):
            """auth_get_onboarding_token  # noqa: E501

            API View that receives a onboarding token and check its validity  Returns a JSON Web Token that can be used for authenticated requests.  # noqa: E501
            This method makes a synchronous HTTP request by default. To make an
            asynchronous HTTP request, please pass async_req=True

            >>> thread = api.auth_get_onboarding_token(onboarding_token, async_req=True)
            >>> result = thread.get()

            Args:
                onboarding_token (OnboardingToken):

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
                OnboardingResponse
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
            kwargs['onboarding_token'] = \
                onboarding_token
            return self.call_with_http_info(**kwargs)

        self.auth_get_onboarding_token = _Endpoint(
            settings={
                'response_type': (OnboardingResponse,),
                'auth': [
                    'cookieAuth',
                    'jwtAuth',
                    'tokenAuth'
                ],
                'endpoint_path': '/api/v2/auth/onboarding_token/',
                'operation_id': 'auth_get_onboarding_token',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'onboarding_token',
                ],
                'required': [
                    'onboarding_token',
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
                    'onboarding_token':
                        (OnboardingToken,),
                },
                'attribute_map': {
                },
                'location_map': {
                    'onboarding_token': 'body',
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
            callable=__auth_get_onboarding_token
        )

        def __auth_impersonation_token(
            self,
            impersonation_token,
            **kwargs
        ):
            """auth_impersonation_token  # noqa: E501

            API View that receives an impersonation token and check its validity Returns a JSON Web Token that can be used for authenticated (and restricted) requests.  # noqa: E501
            This method makes a synchronous HTTP request by default. To make an
            asynchronous HTTP request, please pass async_req=True

            >>> thread = api.auth_impersonation_token(impersonation_token, async_req=True)
            >>> result = thread.get()

            Args:
                impersonation_token (ImpersonationToken):

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
                ImpersionationResponse
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
            kwargs['impersonation_token'] = \
                impersonation_token
            return self.call_with_http_info(**kwargs)

        self.auth_impersonation_token = _Endpoint(
            settings={
                'response_type': (ImpersionationResponse,),
                'auth': [
                    'cookieAuth',
                    'jwtAuth',
                    'tokenAuth'
                ],
                'endpoint_path': '/api/v2/auth/impersonation_token/',
                'operation_id': 'auth_impersonation_token',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'impersonation_token',
                ],
                'required': [
                    'impersonation_token',
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
                    'impersonation_token':
                        (ImpersonationToken,),
                },
                'attribute_map': {
                },
                'location_map': {
                    'impersonation_token': 'body',
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
            callable=__auth_impersonation_token
        )

        def __auth_login(
            self,
            json_web_token,
            **kwargs
        ):
            """auth_login  # noqa: E501

            API View that receives a POST with a user's username and password.  Returns a JSON Web Token that can be used for authenticated requests.  # noqa: E501
            This method makes a synchronous HTTP request by default. To make an
            asynchronous HTTP request, please pass async_req=True

            >>> thread = api.auth_login(json_web_token, async_req=True)
            >>> result = thread.get()

            Args:
                json_web_token (JSONWebToken):

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
                JWTResponse
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
            kwargs['json_web_token'] = \
                json_web_token
            return self.call_with_http_info(**kwargs)

        self.auth_login = _Endpoint(
            settings={
                'response_type': (JWTResponse,),
                'auth': [
                    'cookieAuth',
                    'jwtAuth',
                    'tokenAuth'
                ],
                'endpoint_path': '/api/v2/auth/login/',
                'operation_id': 'auth_login',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'json_web_token',
                ],
                'required': [
                    'json_web_token',
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
                    'json_web_token':
                        (JSONWebToken,),
                },
                'attribute_map': {
                },
                'location_map': {
                    'json_web_token': 'body',
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
            callable=__auth_login
        )

        def __auth_resfresh_jwt_token(
            self,
            token_refresh,
            **kwargs
        ):
            """auth_resfresh_jwt_token  # noqa: E501

            API View that receives a POST with a refresh token as token.  Returns a refreshed JSON Web Token that can be used for authenticated requests.  # noqa: E501
            This method makes a synchronous HTTP request by default. To make an
            asynchronous HTTP request, please pass async_req=True

            >>> thread = api.auth_resfresh_jwt_token(token_refresh, async_req=True)
            >>> result = thread.get()

            Args:
                token_refresh (TokenRefresh):

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
                JWTRefreshResponse
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
            kwargs['token_refresh'] = \
                token_refresh
            return self.call_with_http_info(**kwargs)

        self.auth_resfresh_jwt_token = _Endpoint(
            settings={
                'response_type': (JWTRefreshResponse,),
                'auth': [
                    'cookieAuth',
                    'jwtAuth',
                    'tokenAuth'
                ],
                'endpoint_path': '/api/v2/auth/token_renewal/',
                'operation_id': 'auth_resfresh_jwt_token',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'token_refresh',
                ],
                'required': [
                    'token_refresh',
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
                    'token_refresh':
                        (TokenRefresh,),
                },
                'attribute_map': {
                },
                'location_map': {
                    'token_refresh': 'body',
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
            callable=__auth_resfresh_jwt_token
        )

        def __user_change_password(
            self,
            password_update,
            **kwargs
        ):
            """user_change_password  # noqa: E501

            Change password for an user  # noqa: E501
            This method makes a synchronous HTTP request by default. To make an
            asynchronous HTTP request, please pass async_req=True

            >>> thread = api.user_change_password(password_update, async_req=True)
            >>> result = thread.get()

            Args:
                password_update (PasswordUpdate):

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
                PasswordUpdate
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
            kwargs['password_update'] = \
                password_update
            return self.call_with_http_info(**kwargs)

        self.user_change_password = _Endpoint(
            settings={
                'response_type': (PasswordUpdate,),
                'auth': [
                    'cookieAuth',
                    'jwtAuth',
                    'tokenAuth'
                ],
                'endpoint_path': '/api/v2/auth/password/',
                'operation_id': 'user_change_password',
                'http_method': 'PUT',
                'servers': None,
            },
            params_map={
                'all': [
                    'password_update',
                ],
                'required': [
                    'password_update',
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
                    'password_update':
                        (PasswordUpdate,),
                },
                'attribute_map': {
                },
                'location_map': {
                    'password_update': 'body',
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
            callable=__user_change_password
        )

        def __user_request_password_reset(
            self,
            **kwargs
        ):
            """user_request_password_reset  # noqa: E501

            Request a password reset  # noqa: E501
            This method makes a synchronous HTTP request by default. To make an
            asynchronous HTTP request, please pass async_req=True

            >>> thread = api.user_request_password_reset(async_req=True)
            >>> result = thread.get()


            Keyword Args:
                patched_password_reset_request (PatchedPasswordResetRequest): [optional]
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
                PasswordResetRequest
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
            return self.call_with_http_info(**kwargs)

        self.user_request_password_reset = _Endpoint(
            settings={
                'response_type': (PasswordResetRequest,),
                'auth': [
                    'cookieAuth',
                    'jwtAuth',
                    'tokenAuth'
                ],
                'endpoint_path': '/api/v2/auth/password/',
                'operation_id': 'user_request_password_reset',
                'http_method': 'PATCH',
                'servers': None,
            },
            params_map={
                'all': [
                    'patched_password_reset_request',
                ],
                'required': [],
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
                    'patched_password_reset_request':
                        (PatchedPasswordResetRequest,),
                },
                'attribute_map': {
                },
                'location_map': {
                    'patched_password_reset_request': 'body',
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
            callable=__user_request_password_reset
        )

        def __user_set_password(
            self,
            password_reset,
            **kwargs
        ):
            """user_set_password  # noqa: E501

            Set a new password for an user  # noqa: E501
            This method makes a synchronous HTTP request by default. To make an
            asynchronous HTTP request, please pass async_req=True

            >>> thread = api.user_set_password(password_reset, async_req=True)
            >>> result = thread.get()

            Args:
                password_reset (PasswordReset):

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
                PasswordReset
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
            kwargs['password_reset'] = \
                password_reset
            return self.call_with_http_info(**kwargs)

        self.user_set_password = _Endpoint(
            settings={
                'response_type': (PasswordReset,),
                'auth': [
                    'cookieAuth',
                    'jwtAuth',
                    'tokenAuth'
                ],
                'endpoint_path': '/api/v2/auth/password/',
                'operation_id': 'user_set_password',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'password_reset',
                ],
                'required': [
                    'password_reset',
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
                    'password_reset':
                        (PasswordReset,),
                },
                'attribute_map': {
                },
                'location_map': {
                    'password_reset': 'body',
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
            callable=__user_set_password
        )
