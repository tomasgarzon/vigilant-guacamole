//
// RebalanceStatusEnum.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public enum RebalanceStatusEnum: String, Codable, CaseIterable {
    case pending = "PENDING"
    case created = "CREATED"
    case adviceRequested = "ADVICE_REQUESTED"
    case adviceCompleted = "ADVICE_COMPLETED"
    case inProcess = "IN_PROCESS"
    case processing = "PROCESSING"
    case ordersGenerated = "ORDERS_GENERATED"
    case ordersFilled = "ORDERS_FILLED"
    case sellTradesGenerated = "SELL_TRADES_GENERATED"
    case buyTradesGenerated = "BUY_TRADES_GENERATED"
    case positionsSold = "POSITIONS_SOLD"
    case completed = "COMPLETED"
    case cancelled = "CANCELLED"
    case error = "ERROR"
}
