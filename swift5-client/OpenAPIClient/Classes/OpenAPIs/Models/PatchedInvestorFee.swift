//
// PatchedInvestorFee.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct PatchedInvestorFee: Codable, Hashable {

    /** Determinates a percentage or an amount (between 0 and 1 if percentage otherwise Positive Decimal) */
    public var value: Double?
    /** Determines the type of the value(Fixed, Percentage) */
    public var valueUnit: ValueUnitEnum?
    /** Each choice should have a related method on fee model that contains the logic to charge the client */
    public var feeType: FeeTypeEnum?
    /** Describes the concept that will be shown on invoice */
    public var concept: String?
    /** Defines the end date when the percentage should be applied */
    public var dateFrom: Date?
    /** Defines the start date when the percentage should be applied */
    public var dateTo: Date?
    /** Defines the amount start range when the percentage should be applied */
    public var amountFrom: Double?
    /** Defines the amount end range when the percentage should be applied */
    public var amountTo: Double?
    public var uuid: UUID?
    public var created: Date?
    public var updated: Date?

    public init(value: Double? = nil, valueUnit: ValueUnitEnum? = nil, feeType: FeeTypeEnum? = nil, concept: String? = nil, dateFrom: Date? = nil, dateTo: Date? = nil, amountFrom: Double? = nil, amountTo: Double? = nil, uuid: UUID? = nil, created: Date? = nil, updated: Date? = nil) {
        self.value = value
        self.valueUnit = valueUnit
        self.feeType = feeType
        self.concept = concept
        self.dateFrom = dateFrom
        self.dateTo = dateTo
        self.amountFrom = amountFrom
        self.amountTo = amountTo
        self.uuid = uuid
        self.created = created
        self.updated = updated
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case value
        case valueUnit = "value_unit"
        case feeType = "fee_type"
        case concept
        case dateFrom = "date_from"
        case dateTo = "date_to"
        case amountFrom = "amount_from"
        case amountTo = "amount_to"
        case uuid
        case created
        case updated
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(value, forKey: .value)
        try container.encodeIfPresent(valueUnit, forKey: .valueUnit)
        try container.encodeIfPresent(feeType, forKey: .feeType)
        try container.encodeIfPresent(concept, forKey: .concept)
        try container.encodeIfPresent(dateFrom, forKey: .dateFrom)
        try container.encodeIfPresent(dateTo, forKey: .dateTo)
        try container.encodeIfPresent(amountFrom, forKey: .amountFrom)
        try container.encodeIfPresent(amountTo, forKey: .amountTo)
        try container.encodeIfPresent(uuid, forKey: .uuid)
        try container.encodeIfPresent(created, forKey: .created)
        try container.encodeIfPresent(updated, forKey: .updated)
    }
}
