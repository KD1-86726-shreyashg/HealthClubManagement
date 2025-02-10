package com.project.dto;

import com.project.pojos.Trainer;

import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class ClassesReqDto {
	
	private Long trainerId;

	private String name;
	
	private double price;
	
	private String time;
	
}
