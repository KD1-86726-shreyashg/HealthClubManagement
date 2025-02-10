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

import com.project.dto.TrainerNamesDto;
import com.project.dto.TrainerReqDto;
import com.project.dto.TrainerRespDto;
import com.project.dto.UpdateTrainerDto;
import com.project.pojos.Trainer;
import com.project.service.TrainerService;

@RestController
@RequestMapping("/trainer")
@CrossOrigin("*")
public class TrainerController {

	@Autowired
	private TrainerService trainerService;
	
	@PostMapping("/addTrainer")
	public ResponseEntity<?> addtrainer(@RequestBody TrainerReqDto trainerReqDto){
		return ResponseEntity.status(HttpStatus.CREATED).body(trainerService.addTrainer(trainerReqDto));
	}
	
	@GetMapping("/getTrainers")
	public ResponseEntity<?> getTrainers(){
		
		String message = "ACTIVE";
		
		List<Trainer> trainerslist = trainerService.getAllTrainers(message);
		
		if(trainerslist.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body("No Trainers Available");
		}
		return ResponseEntity.ok(trainerslist);
	}
	
	@PutMapping("/deleteTrainer/{trainerId}")
	public ResponseEntity<?> softDeleteTrainer(@PathVariable Long trainerId){
		return ResponseEntity.status(HttpStatus.OK).body(trainerService.deleteTrainer(trainerId));
	}
	
	@PutMapping("/updateTrainer/{id}")
	public ResponseEntity<?> updateTrainer(@PathVariable Long id ,@RequestBody UpdateTrainerDto updateTrainerDto){
		return ResponseEntity.status(HttpStatus.OK).body(trainerService.updateTrainer(id, updateTrainerDto));
	}
	
//	@GetMapping("/getUsers/{trainerId}")
//	public ResponseEntity<?> getAllUsers(@PathVariable Long trainerId){
//		return ResponseEntity.status(HttpStatus.OK).body(trainerService.findByTrainerId(trainerId));
//	}
	
	@GetMapping("/trainerNames")
	public ResponseEntity<?> getTrainerNames(){
		System.out.println("1");
		List<TrainerNamesDto> trainerList = trainerService.getTrainerNames();
		
		return ResponseEntity.ok(trainerList);
	}
	
	@GetMapping("/profile/{trainerId}")
	public ResponseEntity<?> getProfile(@PathVariable Long trainerId){
		List<TrainerRespDto> trainerList = trainerService.getProfile(trainerId);
		
		return ResponseEntity.ok(trainerList);
	}
}
