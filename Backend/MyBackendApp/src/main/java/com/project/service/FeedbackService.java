package com.project.service;

import java.util.List;

import com.project.dto.ApiResponse;
import com.project.dto.FeedbackReqDto;
import com.project.dto.FeedbackRespDto;
import com.project.dto.TrainerFeedbackRespDto;
import com.project.pojos.Trainer;

public interface FeedbackService {

	ApiResponse addFeedback( Long userId, FeedbackReqDto feedbackDto);

	List<TrainerFeedbackRespDto> getFeedbackByTrainerId(Long trainerId);

	List<FeedbackRespDto> getAllFeedbacks();

}
