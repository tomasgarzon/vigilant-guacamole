=begin
Nucoro API

No description

The version of the OpenAPI document: 4.175.0
Generated by: https://github.com/openapitools/openapi-generator.git

=end


class CoreCategoryGroup < ApplicationRecord
  validates_presence_of :uuid
  validates_presence_of :code
  validates_presence_of :risk_level
  validates_presence_of :categories

  serialize :categories, Array
end
