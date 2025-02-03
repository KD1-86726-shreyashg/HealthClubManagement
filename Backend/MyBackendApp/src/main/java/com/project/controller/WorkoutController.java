package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.dto.WorkoutPlanNamesDto;
import com.project.dto.WorkoutReqDto;
import com.project.pojos.WorkoutPlan;
import com.project.service.WorkoutService;

@RestController
@RequestMapping("/workout")
@CrossOrigin("*")
public class WorkoutController {

	@Autowired
	private WorkoutService workoutService;
	
	@PostMapping("/addPlan")
	public ResponseEntity<?> addWorkoutPlan(@RequestBody WorkoutReqDto workoutReqDto){
		return ResponseEntity.status(HttpStatus.CREATED).body(workoutService.addNewWorkoutPlan(workoutReqDto));
	}
	
	@GetMapping("/getPlans")
	public ResponseEntity<?> getWorkoutPlans(){
		List<WorkoutPlan> wpList = workoutService.getPlans();
		if(wpList.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body("No Workout Plans Available");
		}
		
		return ResponseEntity.ok(wpList);
	}
	
	@PutMapping("/updatePlan/{workoutPlanId}")
	public ResponseEntity<?> updateWorkoutPlans(@PathVariable Long workoutPlanId , @RequestBody WorkoutReqDto workoutReqDto){
		return ResponseEntity.status(HttpStatus.OK).body(workoutService.updatePlan(workoutPlanId,workoutReqDto));
	}
	
	@GetMapping("/getWorkoutPlanNames")
	public ResponseEntity<?> getWorkoutPlanNames(){
		List<WorkoutPlanNamesDto> wpList = workoutService.getWorkoutPlanNames();
		
		return ResponseEntity.ok(wpList);
	}
	
	
}
