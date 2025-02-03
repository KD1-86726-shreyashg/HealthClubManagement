package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.dto.DietReqDto;
import com.project.pojos.DietPlan;
import com.project.service.DietService;

@RestController
@RequestMapping("/diet")
@CrossOrigin("*")
public class DietController {

	@Autowired
	private DietService dietService;

	@PostMapping("/addDietPlan")
	public ResponseEntity<?> addDietPlan(@RequestBody DietReqDto dietReqDto) {
		return ResponseEntity.status(HttpStatus.CREATED).body(dietService.addNewDietplan(dietReqDto));
	}

	@GetMapping("/getDietPlans")
	public ResponseEntity<?> getAllDietPlans() {
		List<DietPlan> dpList = dietService.getDietPlans();
		if (dpList.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body("No Diet Plans Available");
		}
		
		return ResponseEntity.ok(dpList);
	}
	
	@PutMapping("/updateDietPlan/{dietPlanId}")
	public ResponseEntity<?> updateDietplan(@PathVariable Long dietPlanId , @RequestBody DietReqDto dietReqDto){
		return ResponseEntity.status(HttpStatus.OK).body(dietService.updatePlan(dietPlanId , dietReqDto));
	}
	
//	@GetMapping("/getDeitPlanNames")
//	public ResponseEntity<?> getDietPlanNames(){
//		List<DietPlanNamesDto> dietList = dietService.getDietPlanNames();
//		
//		return ResponseEntity.ok(dietList);
//	}
}
