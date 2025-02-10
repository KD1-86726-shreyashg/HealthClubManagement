package com.project.controller;

import java.util.List;

//import java.util.List;

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

import com.project.dto.RatingReqDto;
import com.project.dto.RatingRespDto;
import com.project.service.RatingService;

@RestController
@RequestMapping("/rating")
@CrossOrigin("*")
public class RatingController {

	@Autowired
	private RatingService ratingService;

	@PostMapping("/submit/{userId}")
	public ResponseEntity<?> submitRating(@PathVariable Long userId ,  @RequestBody RatingReqDto ratingDto)
	{
		return ResponseEntity.status(HttpStatus.CREATED).body(ratingService.submitRating(userId,ratingDto));
	}
	
	@GetMapping("/getRating")
	public ResponseEntity<?> getRatings(){
		List<RatingRespDto> ratingList = ratingService.getRatings();
		
		return ResponseEntity.ok(ratingList);
	}
}
