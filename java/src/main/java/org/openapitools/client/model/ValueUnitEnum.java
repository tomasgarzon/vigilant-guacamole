/*
 * Nucoro API
 * No description
 *
 * The version of the OpenAPI document: 4.175.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.annotations.SerializedName;

import java.io.IOException;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;

/**
 * Gets or Sets ValueUnitEnum
 */
@JsonAdapter(ValueUnitEnum.Adapter.class)
public enum ValueUnitEnum {
  
  FIXED_AMOUNT("fixed_amount"),
  
  PERCENTAGE("percentage");

  private String value;

  ValueUnitEnum(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static ValueUnitEnum fromValue(String value) {
    for (ValueUnitEnum b : ValueUnitEnum.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }

  public static class Adapter extends TypeAdapter<ValueUnitEnum> {
    @Override
    public void write(final JsonWriter jsonWriter, final ValueUnitEnum enumeration) throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public ValueUnitEnum read(final JsonReader jsonReader) throws IOException {
      String value = jsonReader.nextString();
      return ValueUnitEnum.fromValue(value);
    }
  }
}

