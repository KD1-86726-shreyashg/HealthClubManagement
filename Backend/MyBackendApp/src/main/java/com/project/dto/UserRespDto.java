package com.project.dto;

import com.project.pojos.DietPlan;
import com.project.pojos.Gender;
import com.project.pojos.Membership;
import com.project.pojos.MembershipType;
import com.project.pojos.Trainer;
import com.project.pojos.WorkoutPlan;

import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
public class UserRespDto {
	
	private Long id;

	private String name;

	private String email;

//	private String password;

	private Gender gender;

	private int age;

	private double height;

	private double weight;

//	private String role;

	private String status;

//	private Membership membershipId;
//
//	private Trainer personalTrainerId;
//
//	private Long workoutPlanId;
//
//	private Long dietPlanId;
	
	private MembershipType membershipType;
	
	private String trainerName;
	
	private String dietPlan;	
	
	private String workoutPlan;
}
