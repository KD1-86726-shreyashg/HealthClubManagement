package com.project.service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.dao.FeedbackDao;
import com.project.dao.TrainerDao;
import com.project.dao.UserDao;
import com.project.dto.ApiResponse;
import com.project.dto.FeedbackReqDto;
import com.project.dto.FeedbackRespDto;
import com.project.dto.TrainerFeedbackRespDto;
import com.project.pojos.Feedback;
import com.project.pojos.Trainer;
import com.project.pojos.User;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class FeedbackServiceImpl implements FeedbackService {

	@Autowired
	private FeedbackDao feedbackDao;

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private TrainerDao trainerDao;
	
	@Autowired
	private UserDao userDao;

	@Override
	public ApiResponse addFeedback(Long userId , FeedbackReqDto feedbackDto) {

		Trainer trainer = trainerDao.findById(feedbackDto.getTrainerId())
				.orElseThrow(() -> new RuntimeException("Invalid TrainerID"));
		
		User user = userDao.findById(userId).orElseThrow(()-> new RuntimeException("Invalid UserID"));
		
		

		Feedback feedback = mapper.map(feedbackDto, Feedback.class);
		feedback.setTrainerId(trainer);
		feedback.setUserId(user);

		feedbackDao.save(feedback);

		return new ApiResponse("Feedback Submitted Successfully");
	}

	@Override
	public List<TrainerFeedbackRespDto> getFeedbackByTrainerId(Long trainerId) {
		List<TrainerFeedbackRespDto> feedBackList = feedbackDao.findById(trainerId).stream().map(feedback -> {
			TrainerFeedbackRespDto dto = mapper.map(feedback, TrainerFeedbackRespDto.class);

			if (feedback.getUserId() != null) {
				dto.setMemberName(feedback.getUserId().getName());
			}

			return dto;
		}).collect(Collectors.toList());
		
		return feedBackList;

	}
	
//	 @Override
//	    public List<TrainerFeedbackRespDto> getFeedbackByTrainerId(Long trainerId) {
//	        // Fetch all feedback for the trainer ID
//	        List<Feedback> feedbackList = feedbackDao.findByTrainerId(trainerId);
//
//	        // Map Feedback entities to DTOs
//	        return feedbackList.stream()
//	                .map(feedback -> {
//	                    TrainerFeedbackRespDto dto = mapper.map(feedback, TrainerFeedbackRespDto.class);
//	                    // Set the member name if a user is associated
////	                    if (feedback.getUserId() != null) {
////	                        dto.setMemberName(feedback.getUserId().getName());
////	                    }
//	                    return dto;
//	                })
//	                .collect(Collectors.toList());
//	    }



	@Override
	public List<FeedbackRespDto> getAllFeedbacks() {
		List<FeedbackRespDto> feedBackList = feedbackDao.findAll().stream().map(feedback -> {
			FeedbackRespDto dto = mapper.map(feedback, FeedbackRespDto.class);

			if (feedback.getUserId() != null) {
				dto.setMemberName(feedback.getUserId().getName());
			}
			
			if(feedback.getTrainerId() != null) {
				dto.setTrainerName(feedback.getTrainerId().getName());
			}

			return dto;
		}).collect(Collectors.toList());
		
		return feedBackList;
	}
}
