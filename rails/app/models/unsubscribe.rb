=begin
Nucoro API

No description

The version of the OpenAPI document: 4.175.0
Generated by: https://github.com/openapitools/openapi-generator.git

=end


class Unsubscribe < ApplicationRecord
  validates_presence_of :id
  validates_presence_of :subscription

end
