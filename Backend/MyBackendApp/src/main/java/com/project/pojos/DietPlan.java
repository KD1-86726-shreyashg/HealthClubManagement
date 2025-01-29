package com.project.pojos;import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class DietPlan extends BaseClass {

	@Column(length = 50  , nullable = false , unique = true)
	private String dietPlanType;
	
	@Column(length = 200)
	private String description;
}
