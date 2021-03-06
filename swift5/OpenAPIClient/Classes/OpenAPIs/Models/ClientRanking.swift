//
// ClientRanking.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct ClientRanking: Codable, Hashable {

    public var topPerforming: [ClientEmbedRanking]
    public var bottomPerforming: [ClientEmbedRanking]

    public init(topPerforming: [ClientEmbedRanking], bottomPerforming: [ClientEmbedRanking]) {
        self.topPerforming = topPerforming
        self.bottomPerforming = bottomPerforming
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case topPerforming = "top_performing"
        case bottomPerforming = "bottom_performing"
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(topPerforming, forKey: .topPerforming)
        try container.encode(bottomPerforming, forKey: .bottomPerforming)
    }
}

