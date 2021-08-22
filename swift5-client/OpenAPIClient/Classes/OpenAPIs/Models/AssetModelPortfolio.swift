//
// AssetModelPortfolio.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** A ModelSerializer that takes additional arguments for \&quot;fields\&quot;, \&quot;omit\&quot; and \&quot;expand\&quot; in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations */
public struct AssetModelPortfolio: Codable, Hashable {

    public var asset: RelatedAssetSerializerWithAssetCategories
    public var weight: Double

    public init(asset: RelatedAssetSerializerWithAssetCategories, weight: Double) {
        self.asset = asset
        self.weight = weight
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case asset
        case weight
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(asset, forKey: .asset)
        try container.encode(weight, forKey: .weight)
    }
}
