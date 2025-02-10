package com.project.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class FeedbackReqDto {

	private Long trainerId;
	
//	private Long userId;
	
	private int stars;
	
	private String description;
}
