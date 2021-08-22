"""
    Nucoro API v2

    No description  # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

from openapi_client.model_utils import (  # noqa: F401
    ApiTypeError,
    ModelComposed,
    ModelNormal,
    ModelSimple,
    cached_property,
    change_keys_js_to_python,
    convert_js_args_to_python_args,
    date,
    datetime,
    file_type,
    none_type,
    validate_get_composed_info,
)
from ..model_utils import OpenApiModel
from openapi_client.exceptions import ApiAttributeError



class PortfolioPerformancePositions(ModelNormal):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.

    Attributes:
      allowed_values (dict): The key is the tuple path to the attribute
          and the for var_name this is (var_name,). The value is a dict
          with a capitalized key describing the allowed value and an allowed
          value. These dicts store the allowed enum values.
      attribute_map (dict): The key is attribute name
          and the value is json key in definition.
      discriminator_value_class_map (dict): A dict to go from the discriminator
          variable value to the discriminator class name.
      validations (dict): The key is the tuple path to the attribute
          and the for var_name this is (var_name,). The value is a dict
          that stores validations for max_length, min_length, max_items,
          min_items, exclusive_maximum, inclusive_maximum, exclusive_minimum,
          inclusive_minimum, and regex.
      additional_properties_type (tuple): A tuple of classes accepted
          as additional properties values.
    """

    allowed_values = {
    }

    validations = {
        ('shares',): {
            'inclusive_maximum': 1000000000000,
            'inclusive_minimum': -1000000000000,
        },
        ('price',): {
            'inclusive_maximum': 1000000000000,
            'inclusive_minimum': -1000000000000,
        },
        ('value',): {
            'inclusive_maximum': 1000000000000,
            'inclusive_minimum': -1000000000000,
        },
        ('position_return',): {
            'inclusive_maximum': 1000000000000,
            'inclusive_minimum': -1000000000000,
        },
        ('unrealised_pl',): {
            'inclusive_maximum': 1000000000000,
            'inclusive_minimum': -1000000000000,
        },
        ('realised_pl',): {
            'inclusive_maximum': 1000000000000,
            'inclusive_minimum': -1000000000000,
        },
        ('earnings',): {
            'inclusive_maximum': 1000000000000,
            'inclusive_minimum': -1000000000000,
        },
        ('avg_entry_price',): {
            'inclusive_maximum': 1000000000000,
            'inclusive_minimum': -1000000000000,
        },
        ('daily_pl',): {
            'inclusive_maximum': 1000000000000,
            'inclusive_minimum': -1000000000000,
        },
        ('weight',): {
            'inclusive_maximum': 1000000000000,
            'inclusive_minimum': -1000000000000,
        },
        ('fx_rate_account',): {
            'inclusive_maximum': 1000000000000,
            'inclusive_minimum': -1000000000000,
        },
        ('asset_currency_value',): {
            'inclusive_maximum': 1000000000000,
            'inclusive_minimum': -1000000000000,
        },
    }

    @cached_property
    def additional_properties_type():
        """
        This must be a method because a model may have properties that are
        of type self, this must run after the class is loaded
        """
        return (bool, date, datetime, dict, float, int, list, str, none_type,)  # noqa: E501

    _nullable = False

    @cached_property
    def openapi_types():
        """
        This must be a method because a model may have properties that are
        of type self, this must run after the class is loaded

        Returns
            openapi_types (dict): The key is attribute name
                and the value is attribute type.
        """
        return {
            'valuation_datetime': (datetime,),  # noqa: E501
            'last_update': (datetime,),  # noqa: E501
            'asset': (str,),  # noqa: E501
            'shares': (float,),  # noqa: E501
            'price': (float,),  # noqa: E501
            'currency': (str,),  # noqa: E501
            'value': (float,),  # noqa: E501
            'position_return': (float,),  # noqa: E501
            'unrealised_pl': (float,),  # noqa: E501
            'realised_pl': (float,),  # noqa: E501
            'earnings': (float,),  # noqa: E501
            'avg_entry_price': (float,),  # noqa: E501
            'daily_pl': (float,),  # noqa: E501
            'weight': (float,),  # noqa: E501
            'fx_rate_account': (float,),  # noqa: E501
            'asset_currency_value': (float,),  # noqa: E501
        }

    @cached_property
    def discriminator():
        return None


    attribute_map = {
        'valuation_datetime': 'valuation_datetime',  # noqa: E501
        'last_update': 'last_update',  # noqa: E501
        'asset': 'asset',  # noqa: E501
        'shares': 'shares',  # noqa: E501
        'price': 'price',  # noqa: E501
        'currency': 'currency',  # noqa: E501
        'value': 'value',  # noqa: E501
        'position_return': 'position_return',  # noqa: E501
        'unrealised_pl': 'unrealised_pl',  # noqa: E501
        'realised_pl': 'realised_pl',  # noqa: E501
        'earnings': 'earnings',  # noqa: E501
        'avg_entry_price': 'avg_entry_price',  # noqa: E501
        'daily_pl': 'daily_pl',  # noqa: E501
        'weight': 'weight',  # noqa: E501
        'fx_rate_account': 'fx_rate_account',  # noqa: E501
        'asset_currency_value': 'asset_currency_value',  # noqa: E501
    }

    read_only_vars = {
    }

    _composed_schemas = {}

    @classmethod
    @convert_js_args_to_python_args
    def _from_openapi_data(cls, valuation_datetime, last_update, asset, shares, price, currency, value, position_return, unrealised_pl, realised_pl, earnings, avg_entry_price, daily_pl, *args, **kwargs):  # noqa: E501
        """PortfolioPerformancePositions - a model defined in OpenAPI

        Args:
            valuation_datetime (datetime):
            last_update (datetime):
            asset (str):
            shares (float):
            price (float):
            currency (str):
            value (float):
            position_return (float):
            unrealised_pl (float):
            realised_pl (float):
            earnings (float):
            avg_entry_price (float):
            daily_pl (float):

        Keyword Args:
            _check_type (bool): if True, values for parameters in openapi_types
                                will be type checked and a TypeError will be
                                raised if the wrong type is input.
                                Defaults to True
            _path_to_item (tuple/list): This is a list of keys or values to
                                drill down to the model in received_data
                                when deserializing a response
            _spec_property_naming (bool): True if the variable names in the input data
                                are serialized names, as specified in the OpenAPI document.
                                False if the variable names in the input data
                                are pythonic names, e.g. snake case (default)
            _configuration (Configuration): the instance to use when
                                deserializing a file_type parameter.
                                If passed, type conversion is attempted
                                If omitted no type conversion is done.
            _visited_composed_classes (tuple): This stores a tuple of
                                classes that we have traveled through so that
                                if we see that class again we will not use its
                                discriminator again.
                                When traveling through a discriminator, the
                                composed schema that is
                                is traveled through is added to this set.
                                For example if Animal has a discriminator
                                petType and we pass in "Dog", and the class Dog
                                allOf includes Animal, we move through Animal
                                once using the discriminator, and pick Dog.
                                Then in Dog, we will make an instance of the
                                Animal class but this time we won't travel
                                through its discriminator because we passed in
                                _visited_composed_classes = (Animal,)
            weight (float): [optional]  # noqa: E501
            fx_rate_account (float): [optional]  # noqa: E501
            asset_currency_value (float): [optional]  # noqa: E501
        """

        _check_type = kwargs.pop('_check_type', True)
        _spec_property_naming = kwargs.pop('_spec_property_naming', False)
        _path_to_item = kwargs.pop('_path_to_item', ())
        _configuration = kwargs.pop('_configuration', None)
        _visited_composed_classes = kwargs.pop('_visited_composed_classes', ())

        self = super(OpenApiModel, cls).__new__(cls)

        if args:
            raise ApiTypeError(
                "Invalid positional arguments=%s passed to %s. Remove those invalid positional arguments." % (
                    args,
                    self.__class__.__name__,
                ),
                path_to_item=_path_to_item,
                valid_classes=(self.__class__,),
            )

        self._data_store = {}
        self._check_type = _check_type
        self._spec_property_naming = _spec_property_naming
        self._path_to_item = _path_to_item
        self._configuration = _configuration
        self._visited_composed_classes = _visited_composed_classes + (self.__class__,)

        self.valuation_datetime = valuation_datetime
        self.last_update = last_update
        self.asset = asset
        self.shares = shares
        self.price = price
        self.currency = currency
        self.value = value
        self.position_return = position_return
        self.unrealised_pl = unrealised_pl
        self.realised_pl = realised_pl
        self.earnings = earnings
        self.avg_entry_price = avg_entry_price
        self.daily_pl = daily_pl
        for var_name, var_value in kwargs.items():
            if var_name not in self.attribute_map and \
                        self._configuration is not None and \
                        self._configuration.discard_unknown_keys and \
                        self.additional_properties_type is None:
                # discard variable.
                continue
            setattr(self, var_name, var_value)
        return self

    required_properties = set([
        '_data_store',
        '_check_type',
        '_spec_property_naming',
        '_path_to_item',
        '_configuration',
        '_visited_composed_classes',
    ])

    @convert_js_args_to_python_args
    def __init__(self, valuation_datetime, last_update, asset, shares, price, currency, value, position_return, unrealised_pl, realised_pl, earnings, avg_entry_price, daily_pl, *args, **kwargs):  # noqa: E501
        """PortfolioPerformancePositions - a model defined in OpenAPI

        Args:
            valuation_datetime (datetime):
            last_update (datetime):
            asset (str):
            shares (float):
            price (float):
            currency (str):
            value (float):
            position_return (float):
            unrealised_pl (float):
            realised_pl (float):
            earnings (float):
            avg_entry_price (float):
            daily_pl (float):

        Keyword Args:
            _check_type (bool): if True, values for parameters in openapi_types
                                will be type checked and a TypeError will be
                                raised if the wrong type is input.
                                Defaults to True
            _path_to_item (tuple/list): This is a list of keys or values to
                                drill down to the model in received_data
                                when deserializing a response
            _spec_property_naming (bool): True if the variable names in the input data
                                are serialized names, as specified in the OpenAPI document.
                                False if the variable names in the input data
                                are pythonic names, e.g. snake case (default)
            _configuration (Configuration): the instance to use when
                                deserializing a file_type parameter.
                                If passed, type conversion is attempted
                                If omitted no type conversion is done.
            _visited_composed_classes (tuple): This stores a tuple of
                                classes that we have traveled through so that
                                if we see that class again we will not use its
                                discriminator again.
                                When traveling through a discriminator, the
                                composed schema that is
                                is traveled through is added to this set.
                                For example if Animal has a discriminator
                                petType and we pass in "Dog", and the class Dog
                                allOf includes Animal, we move through Animal
                                once using the discriminator, and pick Dog.
                                Then in Dog, we will make an instance of the
                                Animal class but this time we won't travel
                                through its discriminator because we passed in
                                _visited_composed_classes = (Animal,)
            weight (float): [optional]  # noqa: E501
            fx_rate_account (float): [optional]  # noqa: E501
            asset_currency_value (float): [optional]  # noqa: E501
        """

        _check_type = kwargs.pop('_check_type', True)
        _spec_property_naming = kwargs.pop('_spec_property_naming', False)
        _path_to_item = kwargs.pop('_path_to_item', ())
        _configuration = kwargs.pop('_configuration', None)
        _visited_composed_classes = kwargs.pop('_visited_composed_classes', ())

        if args:
            raise ApiTypeError(
                "Invalid positional arguments=%s passed to %s. Remove those invalid positional arguments." % (
                    args,
                    self.__class__.__name__,
                ),
                path_to_item=_path_to_item,
                valid_classes=(self.__class__,),
            )

        self._data_store = {}
        self._check_type = _check_type
        self._spec_property_naming = _spec_property_naming
        self._path_to_item = _path_to_item
        self._configuration = _configuration
        self._visited_composed_classes = _visited_composed_classes + (self.__class__,)

        self.valuation_datetime = valuation_datetime
        self.last_update = last_update
        self.asset = asset
        self.shares = shares
        self.price = price
        self.currency = currency
        self.value = value
        self.position_return = position_return
        self.unrealised_pl = unrealised_pl
        self.realised_pl = realised_pl
        self.earnings = earnings
        self.avg_entry_price = avg_entry_price
        self.daily_pl = daily_pl
        for var_name, var_value in kwargs.items():
            if var_name not in self.attribute_map and \
                        self._configuration is not None and \
                        self._configuration.discard_unknown_keys and \
                        self.additional_properties_type is None:
                # discard variable.
                continue
            setattr(self, var_name, var_value)
            if var_name in self.read_only_vars:
                raise ApiAttributeError(f"`{var_name}` is a read-only attribute. Use `from_openapi_data` to instantiate "
                                     f"class with read only attributes.")
