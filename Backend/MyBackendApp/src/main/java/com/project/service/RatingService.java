package com.project.service;

import java.util.List;

import com.project.dto.ApiResponse;
import com.project.dto.RatingReqDto;
import com.project.dto.RatingRespDto;

public interface RatingService {

	ApiResponse submitRating(Long userId, RatingReqDto ratingDto);

	List<RatingRespDto> getRatings();

}
