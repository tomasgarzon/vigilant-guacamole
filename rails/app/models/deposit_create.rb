=begin
Nucoro API

No description

The version of the OpenAPI document: 4.175.0
Generated by: https://github.com/openapitools/openapi-generator.git

=end


class DepositCreate < ApplicationRecord
  validates_presence_of :uuid
  validates_presence_of :amount
  validates_presence_of :provider
  validates_presence_of :reference
  validates_presence_of :status
  validates_presence_of :reason
  validates_presence_of :completed
  validates_presence_of :transacted_at

  serialize :extra_data, Hash
end