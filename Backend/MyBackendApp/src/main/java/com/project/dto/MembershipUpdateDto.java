package com.project.dto;

import com.project.pojos.MembershipType;

import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class MembershipUpdateDto {

//	private MembershipType type;
	
//	private String duration;
	
	private double price;
	
}
