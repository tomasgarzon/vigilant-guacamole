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
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import org.threeten.bp.LocalDate;

/**
 * ClientPerformance
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-09-01T11:21:17.898459Z[Etc/UTC]")
public class ClientPerformance {
  public static final String SERIALIZED_NAME_VALUATION_DATE = "valuation_date";
  @SerializedName(SERIALIZED_NAME_VALUATION_DATE)
  private LocalDate valuationDate;

  public static final String SERIALIZED_NAME_PERFORMANCE = "performance";
  @SerializedName(SERIALIZED_NAME_PERFORMANCE)
  private Double performance;


  public ClientPerformance valuationDate(LocalDate valuationDate) {
    
    this.valuationDate = valuationDate;
    return this;
  }

   /**
   * Get valuationDate
   * @return valuationDate
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public LocalDate getValuationDate() {
    return valuationDate;
  }


  public void setValuationDate(LocalDate valuationDate) {
    this.valuationDate = valuationDate;
  }


  public ClientPerformance performance(Double performance) {
    
    this.performance = performance;
    return this;
  }

   /**
   * Get performance
   * minimum: -1000000000000
   * maximum: 1000000000000
   * @return performance
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Double getPerformance() {
    return performance;
  }


  public void setPerformance(Double performance) {
    this.performance = performance;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ClientPerformance clientPerformance = (ClientPerformance) o;
    return Objects.equals(this.valuationDate, clientPerformance.valuationDate) &&
        Objects.equals(this.performance, clientPerformance.performance);
  }

  @Override
  public int hashCode() {
    return Objects.hash(valuationDate, performance);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ClientPerformance {\n");
    sb.append("    valuationDate: ").append(toIndentedString(valuationDate)).append("\n");
    sb.append("    performance: ").append(toIndentedString(performance)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

