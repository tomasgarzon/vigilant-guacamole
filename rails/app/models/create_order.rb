=begin
Nucoro API

No description

The version of the OpenAPI document: 4.175.0
Generated by: https://github.com/openapitools/openapi-generator.git

=end


class CreateOrder < ApplicationRecord
  validates_presence_of :shares
  validates_presence_of :asset
  validates_presence_of :order_type
  validates_presence_of :method

end
