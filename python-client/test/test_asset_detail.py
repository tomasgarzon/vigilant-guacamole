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
from openapi_client.model.asset_type_enum import AssetTypeEnum
from openapi_client.model.status6f6_enum import Status6f6Enum
globals()['AssetCategory'] = AssetCategory
globals()['AssetTypeEnum'] = AssetTypeEnum
globals()['Status6f6Enum'] = Status6f6Enum
from openapi_client.model.asset_detail import AssetDetail


class TestAssetDetail(unittest.TestCase):
    """AssetDetail unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def testAssetDetail(self):
        """Test AssetDetail"""
        # FIXME: construct object with mandatory attributes with example values
        # model = AssetDetail()  # noqa: E501
        pass


if __name__ == '__main__':
    unittest.main()
