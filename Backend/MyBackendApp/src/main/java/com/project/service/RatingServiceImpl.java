package com.project.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.dao.RatingDao;
import com.project.dao.UserDao;
import com.project.dto.ApiResponse;
import com.project.dto.RatingReqDto;
import com.project.dto.RatingRespDto;
import com.project.pojos.Rating;
import com.project.pojos.User;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class RatingServiceImpl implements RatingService{

	@Autowired
	private RatingDao ratingDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private UserDao userDao;
	
	@Override
	public ApiResponse submitRating(Long userId, RatingReqDto ratingDto) {
		User user = userDao.findById(userId).orElseThrow(()->  new RuntimeException("Invalid User Id"));
		
		Rating rating =  mapper.map(ratingDto, Rating.class);
		
		rating.setUserId(user);
		
		ratingDao.save(rating);
		
		return new ApiResponse("Rating Submitted Successfully");
	}
	
	@Override
	public List<RatingRespDto> getRatings() {
		
		List<RatingRespDto> ratingList = ratingDao.findAll().stream().map(rating -> {
			RatingRespDto dto = mapper.map(rating, RatingRespDto.class);
			
			if(rating.getUserId() != null) {
				dto.setMemberName(rating.getUserId().getName());
			}
			
			return dto;
		}).collect(Collectors.toList());
		
		return ratingList;
	}
}
