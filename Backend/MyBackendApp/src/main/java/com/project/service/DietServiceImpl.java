package com.project.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.dao.DietDao;
import com.project.dto.ApiResponse;
import com.project.dto.DietPlanNamesDto;
import com.project.dto.DietReqDto;
import com.project.pojos.DietPlan;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class DietServiceImpl implements DietService {

	@Autowired
	private DietDao dietDao;

	@Autowired
	private ModelMapper mapper;

	@Override
	public ApiResponse addNewDietplan(DietReqDto dietReqDto) {

		DietPlan dp = mapper.map(dietReqDto, DietPlan.class);

		dietDao.save(dp);
		
		return new ApiResponse("Added Diet Plan SuccessFully");
	}
	
	@Override
	public List<DietPlan> getDietPlans() {
		List<DietPlan> dpList = dietDao.findAll();
		return dpList;
	}
	
	@Override
	public ApiResponse updatePlan(Long dietPlanId, DietReqDto dietReqDto) {
		
		DietPlan dp = dietDao.findById(dietPlanId).orElseThrow(()-> new RuntimeException("Invalid Diet PlanId"));
		
		if(dp != null) {
			dp.setDietPlanType(dietReqDto.getDietPlanType());
			dp.setDescription(dietReqDto.getDescription());
		}
		return new ApiResponse("Update Unsuccessfull");
	}
	
	@Override
	public List<DietPlanNamesDto> getDietPlanNames() {

		List<DietPlanNamesDto> dietList = dietDao.findAll().stream()
				.map(diet -> mapper.map(diet, DietPlanNamesDto.class)).collect(Collectors.toList());
		
		return dietList;
	}
	
}
