=begin
Nucoro API

No description

The version of the OpenAPI document: 4.175.0
Generated by: https://github.com/openapitools/openapi-generator.git

=end


class Document < ApplicationRecord
  validates_presence_of :uuid
  validates_presence_of :name
  validates_presence_of :doc_type
  validates_presence_of :path

  serialize :extra_data, Hash
end