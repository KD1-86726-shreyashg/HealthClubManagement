package com.project.service;

import java.util.List;

import com.project.dto.ApiResponse;
import com.project.dto.TrainerUserUpdateDto;
import com.project.dto.UserReqDto;
import com.project.dto.UserRespDto;
import com.project.dto.UserUpdateDto;
import com.project.pojos.User;

public interface UserService {

	ApiResponse addUser(UserReqDto userReqDto);

	List<UserRespDto> getActiveUsers(String message);

	List<UserRespDto> getAllUser();
	
	ApiResponse deleteUser(Long userId);

	ApiResponse updateProfile(Long userId, UserUpdateDto userDto);

//	List<UserRespDto> getUser();

	List<UserRespDto> findByTrainerId(Long trainerId);

	ApiResponse setDeitPlan(Long userId , TrainerUserUpdateDto userDto);

	List<UserRespDto> getTUsers(Long personalTrainerId);

	ApiResponse enrollClasses(Long userId, Long classId);

	List<UserRespDto> getSingleUser(Long userId);


}
