package com.project.service;

import java.util.List;

import com.project.dto.ApiResponse;
import com.project.dto.TrainerNamesDto;
import com.project.dto.TrainerReqDto;
import com.project.dto.TrainerRespDto;
import com.project.dto.UpdateTrainerDto;
import com.project.pojos.Trainer;
import com.project.pojos.User;

public interface TrainerService {

	ApiResponse addTrainer(TrainerReqDto trainerReqDto);

	List<Trainer> getAllTrainers(String message);

	ApiResponse deleteTrainer(Long trainerId);
	ApiResponse updateTrainer(Long id ,UpdateTrainerDto updateTrainerDto);

//	List<User> findByTrainerId(Long trainerId);
	
	List<TrainerNamesDto> getTrainerNames();

	List<TrainerRespDto> getProfile(Long trainerId);
}
