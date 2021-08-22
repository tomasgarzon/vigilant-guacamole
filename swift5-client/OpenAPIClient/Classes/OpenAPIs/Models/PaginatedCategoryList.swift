//
// PaginatedCategoryList.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct PaginatedCategoryList: Codable, Hashable {

    public var count: Int?
    public var next: String?
    public var previous: String?
    public var results: [Category]?

    public init(count: Int? = nil, next: String? = nil, previous: String? = nil, results: [Category]? = nil) {
        self.count = count
        self.next = next
        self.previous = previous
        self.results = results
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case count
        case next
        case previous
        case results
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(count, forKey: .count)
        try container.encodeIfPresent(next, forKey: .next)
        try container.encodeIfPresent(previous, forKey: .previous)
        try container.encodeIfPresent(results, forKey: .results)
    }
}

