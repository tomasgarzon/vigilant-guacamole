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
 * Gets or Sets VerifyTypeEnum
 */
@JsonAdapter(VerifyTypeEnum.Adapter.class)
public enum VerifyTypeEnum {
  
  IDENTITY("IDENTITY"),
  
  BANKING("BANKING");

  private String value;

  VerifyTypeEnum(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static VerifyTypeEnum fromValue(String value) {
    for (VerifyTypeEnum b : VerifyTypeEnum.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }

  public static class Adapter extends TypeAdapter<VerifyTypeEnum> {
    @Override
    public void write(final JsonWriter jsonWriter, final VerifyTypeEnum enumeration) throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public VerifyTypeEnum read(final JsonReader jsonReader) throws IOException {
      String value = jsonReader.nextString();
      return VerifyTypeEnum.fromValue(value);
    }
  }
}

