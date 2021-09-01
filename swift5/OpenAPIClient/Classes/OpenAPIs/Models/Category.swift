//
// Category.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct Category: Codable, Hashable {

    public var uuid: UUID
    public var code: String
    public var categories: [AssetCategory]
    public var name: String
    public var status: CategoryStatusEnum?
    /** Additional ETSCategory attributes */
    public var extraData: [String: AnyCodable]?
    public var description: String?

    public init(uuid: UUID, code: String, categories: [AssetCategory], name: String, status: CategoryStatusEnum? = nil, extraData: [String: AnyCodable]? = nil, description: String? = nil) {
        self.uuid = uuid
        self.code = code
        self.categories = categories
        self.name = name
        self.status = status
        self.extraData = extraData
        self.description = description
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case uuid
        case code
        case categories
        case name
        case status
        case extraData = "extra_data"
        case description
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(uuid, forKey: .uuid)
        try container.encode(code, forKey: .code)
        try container.encode(categories, forKey: .categories)
        try container.encode(name, forKey: .name)
        try container.encodeIfPresent(status, forKey: .status)
        try container.encodeIfPresent(extraData, forKey: .extraData)
        try container.encodeIfPresent(description, forKey: .description)
    }
}
