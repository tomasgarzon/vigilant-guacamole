=begin
Nucoro API

No description

The version of the OpenAPI document: 4.175.0
Generated by: https://github.com/openapitools/openapi-generator.git

=end


class RelatedAssetSerializerWithPermission < ApplicationRecord
  validates_presence_of :uuid
  validates_presence_of :isin
  validates_presence_of :ticker
  validates_presence_of :name

  serialize :extra_data, Hash
end
