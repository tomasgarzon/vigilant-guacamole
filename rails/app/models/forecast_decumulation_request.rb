=begin
Nucoro API

No description

The version of the OpenAPI document: 4.175.0
Generated by: https://github.com/openapitools/openapi-generator.git

=end


class ForecastDecumulationRequest < ApplicationRecord
  validates_presence_of :initial_amount
  validates_presence_of :recurring_amount
  validates_presence_of :risk_level
  validates_presence_of :withdrawal_amount
  validates_presence_of :retirement_age

end
