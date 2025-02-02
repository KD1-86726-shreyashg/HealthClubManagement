package com.project.pojos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class WorkoutPlan extends BaseClass {

	@Column(length = 50  , nullable = false , unique = true)
	private String workoutPlanType;
	
	@Column(length = 200)
	private String description;
}
