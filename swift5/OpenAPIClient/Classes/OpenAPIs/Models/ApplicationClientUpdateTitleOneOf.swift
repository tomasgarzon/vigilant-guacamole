//
// ApplicationClientUpdateTitleOneOf.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public enum ApplicationClientUpdateTitleOneOf: Codable {
    case typeBlankEnum(BlankEnum)
    case typeNullEnum(NullEnum)
    case typeTitleEnum(TitleEnum)

    public func encode(to encoder: Encoder) throws {
        var container = encoder.singleValueContainer()
        switch self {
        case .typeBlankEnum(let value):
            try container.encode(value)
        case .typeNullEnum(let value):
            try container.encode(value)
        case .typeTitleEnum(let value):
            try container.encode(value)
        }
    }

    public init(from decoder: Decoder) throws {
        let container = try decoder.singleValueContainer()
        if let value = try? container.decode(BlankEnum.self) {
            self = .typeBlankEnum(value)
        } else if let value = try? container.decode(NullEnum.self) {
            self = .typeNullEnum(value)
        } else if let value = try? container.decode(TitleEnum.self) {
            self = .typeTitleEnum(value)
        } else {
            throw DecodingError.typeMismatch(Self.Type.self, .init(codingPath: decoder.codingPath, debugDescription: "Unable to decode instance of ApplicationClientUpdateTitleOneOf"))
        }
    }
}
