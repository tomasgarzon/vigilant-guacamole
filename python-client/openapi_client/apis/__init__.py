
# flake8: noqa

# Import all APIs into this package.
# If you have many APIs here with many many models used in each API this may
# raise a `RecursionError`.
# In order to avoid this, import only the API that you directly need like:
#
#   from .api.address_api import AddressApi
#
# or import this package, but before doing it, use:
#
#   import sys
#   sys.setrecursionlimit(n)

# Import APIs into API package:
from openapi_client.api.address_api import AddressApi
from openapi_client.api.application_api import ApplicationApi
from openapi_client.api.auth_api import AuthApi
from openapi_client.api.bank_account_api import BankAccountApi
from openapi_client.api.client_api import ClientApi
from openapi_client.api.kyc_api import KYCApi
from openapi_client.api.nationlity_api import NationlityApi
from openapi_client.api.risk_assessment_api import RiskAssessmentApi
from openapi_client.api.tax_information_api import TaxInformationApi
from openapi_client.api.api_api import ApiApi
