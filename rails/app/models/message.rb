=begin
Nucoro API

No description

The version of the OpenAPI document: 4.175.0
Generated by: https://github.com/openapitools/openapi-generator.git

=end


class Message < ApplicationRecord
  validates_presence_of :user
  validates_presence_of :read_date
  validates_presence_of :created
  validates_presence_of :attachments
  validates_presence_of :uuid

  serialize :attachments, Array
end
