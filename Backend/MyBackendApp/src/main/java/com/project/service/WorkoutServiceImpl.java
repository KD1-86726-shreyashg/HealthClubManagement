package com.project.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.dao.WorkoutDao;
import com.project.dto.ApiResponse;
import com.project.dto.WorkoutPlanNamesDto;
import com.project.dto.WorkoutReqDto;
import com.project.pojos.WorkoutPlan;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class WorkoutServiceImpl implements WorkoutService {

	@Autowired
	private WorkoutDao workoutDao;

	@Autowired
	private ModelMapper mapper;

	@Override
	public ApiResponse addNewWorkoutPlan(WorkoutReqDto workoutReqDto) {
		WorkoutPlan wp = mapper.map(workoutReqDto, WorkoutPlan.class);

		workoutDao.save(wp);
		return new ApiResponse("Workout Plan Added Successfully");
	}

	@Override
	public List<WorkoutPlan> getPlans() {
		List<WorkoutPlan> wpList = workoutDao.findAll();
		return wpList;
	}

	@Override
	public ApiResponse updatePlan(Long workoutPlanId, WorkoutReqDto workoutReqDto) {
		WorkoutPlan wp = workoutDao.findById(workoutPlanId)
				.orElseThrow(() -> new RuntimeException("Invalid WorkoutPlan Id"));

		if (wp != null) {
			wp.setDescription(workoutReqDto.getDescription());
			wp.setWorkoutPlanType(workoutReqDto.getWorkoutPlanType());
			
			return new ApiResponse("Updated Successfully");
		}
		return new ApiResponse("Updation Unsuccessfully");
	}
	
	@Override
	public List<WorkoutPlanNamesDto> getWorkoutPlanNames() {
		List<WorkoutPlanNamesDto> wpList = workoutDao.findAll().stream()
				.map(workout -> mapper.map(workout, WorkoutPlanNamesDto.class)).collect(Collectors.toList());
		
		return wpList;
	}

}
