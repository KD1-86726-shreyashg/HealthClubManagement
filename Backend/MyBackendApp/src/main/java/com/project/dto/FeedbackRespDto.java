package com.project.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class FeedbackRespDto {

	private int stars;
	
	private String description;
	
	private String trainerName;
	
	private String memberName;
}
