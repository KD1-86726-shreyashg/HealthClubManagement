package com.project.service;

import java.util.List;

import com.project.dto.ApiResponse;
import com.project.dto.WorkoutPlanNamesDto;
import com.project.dto.WorkoutReqDto;
import com.project.pojos.WorkoutPlan;

public interface WorkoutService {

	ApiResponse addNewWorkoutPlan(WorkoutReqDto workoutReqDto);

	List<WorkoutPlan> getPlans();

	ApiResponse updatePlan(Long workoutPlanId, WorkoutReqDto workoutReqDto);

	List<WorkoutPlanNamesDto> getWorkoutPlanNames();
}
