//
// ETSForecastRequest.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct ETSForecastRequest: Codable, Hashable {

    public var timeHorizon: Int
    public var initialAmount: Double
    public var recurringAmount: Double?
    public var recurringPeriod: Int?
    public var riskLevel: Int
    public var favouriteCategories: [String]?
    public var excludedCategories: [String]?

    public init(timeHorizon: Int, initialAmount: Double, recurringAmount: Double? = nil, recurringPeriod: Int? = nil, riskLevel: Int, favouriteCategories: [String]? = nil, excludedCategories: [String]? = nil) {
        self.timeHorizon = timeHorizon
        self.initialAmount = initialAmount
        self.recurringAmount = recurringAmount
        self.recurringPeriod = recurringPeriod
        self.riskLevel = riskLevel
        self.favouriteCategories = favouriteCategories
        self.excludedCategories = excludedCategories
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case timeHorizon = "time_horizon"
        case initialAmount = "initial_amount"
        case recurringAmount = "recurring_amount"
        case recurringPeriod = "recurring_period"
        case riskLevel = "risk_level"
        case favouriteCategories = "favourite_categories"
        case excludedCategories = "excluded_categories"
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(timeHorizon, forKey: .timeHorizon)
        try container.encode(initialAmount, forKey: .initialAmount)
        try container.encodeIfPresent(recurringAmount, forKey: .recurringAmount)
        try container.encodeIfPresent(recurringPeriod, forKey: .recurringPeriod)
        try container.encode(riskLevel, forKey: .riskLevel)
        try container.encodeIfPresent(favouriteCategories, forKey: .favouriteCategories)
        try container.encodeIfPresent(excludedCategories, forKey: .excludedCategories)
    }
}

