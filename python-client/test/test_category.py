"""
    Nucoro API v2

    No description  # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Generated by: https://openapi-generator.tech
"""


import sys
import unittest

import openapi_client
from openapi_client.model.asset_category import AssetCategory
from openapi_client.model.category_status_enum import CategoryStatusEnum
globals()['AssetCategory'] = AssetCategory
globals()['CategoryStatusEnum'] = CategoryStatusEnum
from openapi_client.model.category import Category


class TestCategory(unittest.TestCase):
    """Category unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def testCategory(self):
        """Test Category"""
        # FIXME: construct object with mandatory attributes with example values
        # model = Category()  # noqa: E501
        pass


if __name__ == '__main__':
    unittest.main()