package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.dto.FeedbackReqDto;
import com.project.dto.FeedbackRespDto;
import com.project.dto.TrainerFeedbackRespDto;
import com.project.pojos.Trainer;
import com.project.service.FeedbackService;

@RestController
@RequestMapping("/feedback")	
@CrossOrigin("*")
public class FeedbackController {

	@Autowired
	private FeedbackService feedbackService;
	
	@PostMapping("/submit/{userId}")
	public ResponseEntity<?> submitFeedback(@PathVariable Long userId, @RequestBody FeedbackReqDto feedbackDto){
		return ResponseEntity.status(HttpStatus.CREATED).body(feedbackService.addFeedback( userId , feedbackDto));
	}
	
	@GetMapping("/byTrainerId/{trainerId}")
	public ResponseEntity<?> getFeedbacksByTrainerId(@PathVariable Long trainerId){
		List<TrainerFeedbackRespDto> feedBackList = feedbackService.getFeedbackByTrainerId(trainerId);
		
		if(feedBackList.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body("No Feedbacks Found");
		}
		
		return ResponseEntity.ok(feedBackList);
	}
	
	@GetMapping("/getAllFedbacks")
	public ResponseEntity<?> getAllFeedbacks(){
		List<FeedbackRespDto> feedBackList = feedbackService.getAllFeedbacks();
		
		if(feedBackList.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body("No Feedbacks Found");
		}
		
		return ResponseEntity.ok(feedBackList);
	}
	
}
