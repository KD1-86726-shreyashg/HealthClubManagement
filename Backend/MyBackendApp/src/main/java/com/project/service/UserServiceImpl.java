package com.project.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.dao.ClassesDao;
import com.project.dao.DietDao;
import com.project.dao.MembershipDao;
import com.project.dao.TrainerDao;
import com.project.dao.UserDao;
import com.project.dao.WorkoutDao;
import com.project.dto.ApiResponse;
import com.project.dto.TrainerUserUpdateDto;
import com.project.dto.UserReqDto;
import com.project.dto.UserRespDto;
import com.project.dto.UserUpdateDto;
import com.project.pojos.Classes;
import com.project.pojos.DietPlan;
import com.project.pojos.Membership;
import com.project.pojos.Trainer;
import com.project.pojos.User;
import com.project.pojos.WorkoutPlan;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private MembershipDao memDao;

	@Autowired
	private TrainerDao trainerDao;
	
	@Autowired
	private WorkoutDao workoutDao;
	
	@Autowired
	private DietDao dietDao;
	
	@Autowired
	private ClassesDao classesDao;

	@Override
	public ApiResponse addUser(UserReqDto userReqDto) {

		Membership mem = memDao.findById(userReqDto.getMembershipId())
				.orElseThrow(() -> new RuntimeException("Invalid Membership Id"));

		Trainer trainer = trainerDao.findById(userReqDto.getPersonalTrainerId())
				.orElseThrow(() -> new RuntimeException("Invalid Trainer Id"));

		User user = mapper.map(userReqDto, User.class);
//		user.setStatus("ACTIVE");
//		user.setRole("MEMBER");
		user.setPersonalTrainerId(trainer);
		user.setMembershipId(mem);

		userDao.save(user);
		return new ApiResponse("Registration Successfull");
	}

	@Override
	public List<UserRespDto> getAllUser() {
		List<UserRespDto> userList = userDao.findAll().stream().map(user -> {
			UserRespDto dto = mapper.map(user, UserRespDto.class);
			if (user.getMembershipId() != null) {
				dto.setMembershipType(user.getMembershipId().getType());
			}

			if (user.getPersonalTrainerId() != null) {
				dto.setTrainerName(user.getPersonalTrainerId().getName());
			}
			
			if(user.getWorkoutPlanId() !=null) {
				dto.setWorkoutPlan(user.getWorkoutPlanId().getWorkoutPlanType());
			}
			
			if(user.getDietPlanId() != null) {
				dto.setDietPlan(user.getDietPlanId().getDietPlanType());
			}
			return dto;
		}).collect(Collectors.toList());
		
		return userList;
	}

	@Override
	public List<UserRespDto> getActiveUsers(String message) {
		List<UserRespDto> userList = userDao.findByStatus(message).stream().map(user -> {
			UserRespDto dto = mapper.map(user, UserRespDto.class);
			if (user.getMembershipId() != null) {
				dto.setMembershipType(user.getMembershipId().getType());
			}

			if (user.getPersonalTrainerId() != null) {
				dto.setTrainerName(user.getPersonalTrainerId().getName());
			}
			
			if(user.getWorkoutPlanId() !=null) {
				dto.setWorkoutPlan(user.getWorkoutPlanId().getWorkoutPlanType());
			}
			
			if(user.getDietPlanId() != null) {
				dto.setDietPlan(user.getDietPlanId().getDietPlanType());
			}
			return dto;
		}).collect(Collectors.toList());
		
		return userList;
	}

	@Override
	public ApiResponse deleteUser(Long userId) {
		User user = userDao.findById(userId).orElseThrow(() -> new RuntimeException("Invalid UserId"));

		if (user != null) {
			user.setStatus("INACTIVE");
			return new ApiResponse("User Deleted Successfully");
		}
		return new ApiResponse("Deletion Unsucessfull");
	}

	@Override
	public ApiResponse updateProfile(Long userId, UserUpdateDto userDto) {

		User user = userDao.findById(userId).orElseThrow(() -> new RuntimeException("Invalid User Id"));

		Membership mem = memDao.findById(userDto.getMembershipId())
				.orElseThrow(() -> new RuntimeException("Invalid MembershipId"));

		Trainer trainer = trainerDao.findById(userDto.getPersonalTrainerId())
				.orElseThrow(() -> new RuntimeException("Invalid TrainerId"));

		user.setAge(userDto.getAge());
//		user.setEmail(userDto.getEmail());
		user.setHeight(userDto.getHeight());
		user.setWeight(userDto.getWeight());
//		user.setName(userDto.getName());
		user.setMembershipId(mem);
		user.setPersonalTrainerId(trainer);

		return new ApiResponse("Updated Successfully");
	}
	
	@Override
	public List<UserRespDto> findByTrainerId(Long trainerId) {
		
		List<UserRespDto> userList = userDao.findById(trainerId).stream().map(user -> {
			UserRespDto dto = mapper.map(user, UserRespDto.class);
			if (user.getMembershipId() != null) {
				dto.setMembershipType(user.getMembershipId().getType());
			}

			if (user.getPersonalTrainerId() != null) {
				dto.setTrainerName(user.getPersonalTrainerId().getName());
			}
			
			if(user.getWorkoutPlanId() !=null) {
				dto.setWorkoutPlan(user.getWorkoutPlanId().getWorkoutPlanType());
			}
			
			if(user.getDietPlanId() != null) {
				dto.setDietPlan(user.getDietPlanId().getDietPlanType());
			}
			return dto;
		}).collect(Collectors.toList());
		
		return userList;		
	}
	
	@Override
	public ApiResponse setDeitPlan(Long userId , TrainerUserUpdateDto userDto) {
		User user = userDao.findById(userId).orElseThrow(()-> new RuntimeException("Invalid User Id"));
		
		WorkoutPlan workoutPlan = workoutDao.findById(userDto.getWorkoutPlanId()).orElseThrow(()-> new RuntimeException("Invalid WorkoutPlan Id"));
		
		DietPlan dietPlan = dietDao.findById(userDto.getDietPlanId()).orElseThrow(()-> new RuntimeException("Invalid DietPlan Id"));
		
		user.setDietPlanId(dietPlan);
		user.setWorkoutPlanId(workoutPlan);
		
		return new ApiResponse("DietPlan and WorkoutPlan Assigned Successfully");
	}
//	@Override
//	public List<User> getTUsers(Long personalTrainerId) {
//		List<User> userList = userDao.findByPersonalTrainerId(personalTrainerId);
//		return userList;
//	}
	
	@Override
	public List<UserRespDto> getTUsers(Long personalTrainerId) {
		List<UserRespDto> userList = userDao.findByPersonalTrainerId(personalTrainerId).stream().map(user -> {
			UserRespDto dto = mapper.map(user, UserRespDto.class);
			if (user.getMembershipId() != null) {
				dto.setMembershipType(user.getMembershipId().getType());
			}

			if (user.getPersonalTrainerId() != null) {
				dto.setTrainerName(user.getPersonalTrainerId().getName());
			}
			
			if(user.getWorkoutPlanId() !=null) {
				dto.setWorkoutPlan(user.getWorkoutPlanId().getWorkoutPlanType());
			}
			
			if(user.getDietPlanId() != null) {
				dto.setDietPlan(user.getDietPlanId().getDietPlanType());
			}
			return dto;
		}).collect(Collectors.toList());
		
		return userList;
	}
	
	@Override
	public ApiResponse enrollClasses(Long userId, Long classId) {
		User user = userDao.findById(userId).orElseThrow(()-> new RuntimeException("Invalid User Id"));
		
		Classes classes = classesDao.findById(classId).orElseThrow(()-> new RuntimeException("Invalid Classes Id"));
		
		classes.addMembers(user);
		
		return new ApiResponse("Enrolled Successfully");
	}
	
	@Override
	public List<UserRespDto> getSingleUser(Long userId) {
		List<UserRespDto> userList = userDao.findById(userId).stream().map(user -> {
			UserRespDto dto = mapper.map(user, UserRespDto.class);
			if (user.getMembershipId() != null) {
				dto.setMembershipType(user.getMembershipId().getType());
			}

			if (user.getPersonalTrainerId() != null) {
				dto.setTrainerName(user.getPersonalTrainerId().getName());
			}
			
			if(user.getWorkoutPlanId() !=null) {
				dto.setWorkoutPlan(user.getWorkoutPlanId().getWorkoutPlanType());
			}
			
			if(user.getDietPlanId() != null) {
				dto.setDietPlan(user.getDietPlanId().getDietPlanType());
			}
			return dto;
		}).collect(Collectors.toList());
		
		return userList;
	}
	
	
	
	
}
