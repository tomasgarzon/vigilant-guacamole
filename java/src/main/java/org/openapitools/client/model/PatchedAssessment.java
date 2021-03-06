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
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import org.openapitools.client.model.AssessmentStatusEnum;
import org.openapitools.client.model.RiskChoiceQuestionCode;
import org.openapitools.jackson.nullable.JsonNullable;
import org.threeten.bp.OffsetDateTime;

/**
 * PatchedAssessment
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-09-01T11:21:17.898459Z[Etc/UTC]")
public class PatchedAssessment {
  public static final String SERIALIZED_NAME_UUID = "uuid";
  @SerializedName(SERIALIZED_NAME_UUID)
  private UUID uuid;

  public static final String SERIALIZED_NAME_COMPLETED = "completed";
  @SerializedName(SERIALIZED_NAME_COMPLETED)
  private OffsetDateTime completed;

  public static final String SERIALIZED_NAME_CHOICES = "choices";
  @SerializedName(SERIALIZED_NAME_CHOICES)
  private List<RiskChoiceQuestionCode> choices = null;

  public static final String SERIALIZED_NAME_STATUS = "status";
  @SerializedName(SERIALIZED_NAME_STATUS)
  private AssessmentStatusEnum status;

  public static final String SERIALIZED_NAME_RISK_LEVEL = "risk_level";
  @SerializedName(SERIALIZED_NAME_RISK_LEVEL)
  private Integer riskLevel;

  public static final String SERIALIZED_NAME_CREATED = "created";
  @SerializedName(SERIALIZED_NAME_CREATED)
  private OffsetDateTime created;


   /**
   * Get uuid
   * @return uuid
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public UUID getUuid() {
    return uuid;
  }




  public PatchedAssessment completed(OffsetDateTime completed) {
    
    this.completed = completed;
    return this;
  }

   /**
   * Get completed
   * @return completed
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public OffsetDateTime getCompleted() {
    return completed;
  }


  public void setCompleted(OffsetDateTime completed) {
    this.completed = completed;
  }


  public PatchedAssessment choices(List<RiskChoiceQuestionCode> choices) {
    
    this.choices = choices;
    return this;
  }

  public PatchedAssessment addChoicesItem(RiskChoiceQuestionCode choicesItem) {
    if (this.choices == null) {
      this.choices = new ArrayList<RiskChoiceQuestionCode>();
    }
    this.choices.add(choicesItem);
    return this;
  }

   /**
   * Get choices
   * @return choices
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<RiskChoiceQuestionCode> getChoices() {
    return choices;
  }


  public void setChoices(List<RiskChoiceQuestionCode> choices) {
    this.choices = choices;
  }


  public PatchedAssessment status(AssessmentStatusEnum status) {
    
    this.status = status;
    return this;
  }

   /**
   * Get status
   * @return status
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public AssessmentStatusEnum getStatus() {
    return status;
  }


  public void setStatus(AssessmentStatusEnum status) {
    this.status = status;
  }


   /**
   * Get riskLevel
   * @return riskLevel
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Integer getRiskLevel() {
    return riskLevel;
  }




   /**
   * Get created
   * @return created
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public OffsetDateTime getCreated() {
    return created;
  }




  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PatchedAssessment patchedAssessment = (PatchedAssessment) o;
    return Objects.equals(this.uuid, patchedAssessment.uuid) &&
        Objects.equals(this.completed, patchedAssessment.completed) &&
        Objects.equals(this.choices, patchedAssessment.choices) &&
        Objects.equals(this.status, patchedAssessment.status) &&
        Objects.equals(this.riskLevel, patchedAssessment.riskLevel) &&
        Objects.equals(this.created, patchedAssessment.created);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && a.get().getClass().isArray() ? Arrays.equals((T[])a.get(), (T[])b.get()) : Objects.equals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(uuid, completed, choices, status, riskLevel, created);
  }

  private static <T> int hashCodeNullable(JsonNullable<T> a) {
    if (a == null) {
      return 1;
    }
    return a.isPresent()
      ? (a.get().getClass().isArray() ? Arrays.hashCode((T[])a.get()) : Objects.hashCode(a.get()))
      : 31;
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PatchedAssessment {\n");
    sb.append("    uuid: ").append(toIndentedString(uuid)).append("\n");
    sb.append("    completed: ").append(toIndentedString(completed)).append("\n");
    sb.append("    choices: ").append(toIndentedString(choices)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    riskLevel: ").append(toIndentedString(riskLevel)).append("\n");
    sb.append("    created: ").append(toIndentedString(created)).append("\n");
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

