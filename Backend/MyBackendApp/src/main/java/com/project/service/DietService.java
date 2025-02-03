package com.project.service;

import java.util.List;

import com.project.dto.ApiResponse;
import com.project.dto.DietPlanNamesDto;
import com.project.dto.DietReqDto;
import com.project.pojos.DietPlan;

public interface DietService {

	ApiResponse addNewDietplan(DietReqDto dietReqDto);

	List<DietPlan> getDietPlans();

	ApiResponse updatePlan(Long dietPlanId, DietReqDto dietReqDto);
	
	List<DietPlanNamesDto> getDietPlanNames();

}
