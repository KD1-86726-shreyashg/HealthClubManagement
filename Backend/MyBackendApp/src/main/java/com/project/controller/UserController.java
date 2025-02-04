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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.dto.TrainerUserUpdateDto;
import com.project.dto.UserReqDto;
import com.project.dto.UserRespDto;
import com.project.dto.UserUpdateDto;
import com.project.pojos.User;
import com.project.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/addUser")
	public ResponseEntity<?> registerUser(@RequestBody UserReqDto userReqDto) {
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.addUser(userReqDto));
	}

	@GetMapping("/getAllUsers")
	public ResponseEntity<?> allUsers() {
		List<UserRespDto> userList = userService.getAllUser();
		if (userList.isEmpty()) {

			return ResponseEntity.status(HttpStatus.NO_CONTENT).body("No Record Found");
		}

		return ResponseEntity.ok(userList);
	}

	@GetMapping("/getActiveUsers")
	public ResponseEntity<?> activeUsers() {
		String message = "ACTIVE";
		List<UserRespDto> userList = userService.getActiveUsers(message);
		if (userList.isEmpty()) {

			return ResponseEntity.status(HttpStatus.NO_CONTENT).body("No Record Found");
		}

		return ResponseEntity.ok(userList);
	}
	
	@PutMapping("/deleteUser/{userId}")
	public ResponseEntity<?> deleteUser(@PathVariable Long userId){
		return ResponseEntity.status(HttpStatus.OK).body(userService.deleteUser(userId));
	}
	
	@PutMapping("/updateUser/{userId}")
	public ResponseEntity<?> updateProfile(@PathVariable Long userId , @RequestBody UserUpdateDto userDto){
		 return ResponseEntity.status(HttpStatus.OK).body(userService.updateProfile(userId , userDto));
	}
	
	@GetMapping("/getUsersByTrainerId/{trainerId}")
	public ResponseEntity<?> getAllUsers(@PathVariable Long trainerId){
		return ResponseEntity.status(HttpStatus.OK).body(userService.findByTrainerId(trainerId));
	}
	
	@PutMapping("/updatePlan/{userId}")
	public ResponseEntity<?> setDietPlan(@PathVariable Long userId ,@RequestBody TrainerUserUpdateDto userDto){
		return ResponseEntity.status(HttpStatus.OK).body(userService.setDeitPlan(userId , userDto));
	}
	
//	@GetMapping("/singleUser")
//	public ResponseEntity<?> getSingleUser(@RequestBody)

	@GetMapping("/getTUser/{personalTrainerId}")
	public ResponseEntity<?> getTUser(@PathVariable Long personalTrainerId){
		List<UserRespDto> userList = userService.getTUsers(personalTrainerId);
		return ResponseEntity.ok(userList);
	}
	
	@PostMapping("/enroll/{userId}")
	public ResponseEntity<?> enrollClass(@PathVariable Long userId , @RequestParam Long classId){
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.enrollClasses(userId , classId));
	}
	
	@GetMapping("/profile/{userId}")
	public ResponseEntity<?> getSingleUser(@PathVariable Long userId){
	 List<UserRespDto> dto = userService.getSingleUser(userId);
		return ResponseEntity.ok(dto);
	}
}
