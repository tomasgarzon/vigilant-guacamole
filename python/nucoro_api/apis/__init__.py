
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
from nucoro_api.api.address_api import AddressApi
from nucoro_api.api.analytics_api import AnalyticsApi
from nucoro_api.api.application_api import ApplicationApi
from nucoro_api.api.auth_api import AuthApi
from nucoro_api.api.bank_account_api import BankAccountApi
from nucoro_api.api.client_api import ClientApi
from nucoro_api.api.document_api import DocumentApi
from nucoro_api.api.kyc_api import KYCApi
from nucoro_api.api.nationlity_api import NationlityApi
from nucoro_api.api.relation_ship_manager_api import RelationShipManagerApi
from nucoro_api.api.risk_assessment_api import RiskAssessmentApi
from nucoro_api.api.tax_information_api import TaxInformationApi
from nucoro_api.api.api_api import ApiApi
