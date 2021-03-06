//
// PortfolioPerformance.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct PortfolioPerformance: Codable, Hashable {

    public var valuationDate: Date
    public var percentage: Double? = 0.0
    public var performance: Double? = 0.0

    public init(valuationDate: Date, percentage: Double? = 0.0, performance: Double? = 0.0) {
        self.valuationDate = valuationDate
        self.percentage = percentage
        self.performance = performance
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case valuationDate = "valuation_date"
        case percentage
        case performance
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(valuationDate, forKey: .valuationDate)
        try container.encodeIfPresent(percentage, forKey: .percentage)
        try container.encodeIfPresent(performance, forKey: .performance)
    }
}

