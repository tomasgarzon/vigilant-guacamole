//
// CoreCategoryGroup.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct CoreCategoryGroup: Codable, Hashable {

    public var uuid: UUID
    public var code: String
    public var riskLevel: Int
    public var categories: [Category]

    public init(uuid: UUID, code: String, riskLevel: Int, categories: [Category]) {
        self.uuid = uuid
        self.code = code
        self.riskLevel = riskLevel
        self.categories = categories
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case uuid
        case code
        case riskLevel = "risk_level"
        case categories
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(uuid, forKey: .uuid)
        try container.encode(code, forKey: .code)
        try container.encode(riskLevel, forKey: .riskLevel)
        try container.encode(categories, forKey: .categories)
    }
}

