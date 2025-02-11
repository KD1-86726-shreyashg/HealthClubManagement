package com.project.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.dto.LoginUserDTO;
import com.project.dto.TrainerReqDto;
import com.project.loginuser.services.UserMgService;


@RestController
@CrossOrigin("*")
public class LoginUserController {
	@Autowired
	private UserMgService userMgService;
	
	@PostMapping("/auth/member-register")
    public ResponseEntity<LoginUserDTO> regeister(@RequestBody LoginUserDTO reg){
        return ResponseEntity.ok(userMgService.memberRegister(reg));
    }

    @PostMapping("/auth/login")
    public ResponseEntity<?> login(@RequestBody LoginUserDTO req){
        return ResponseEntity.ok(userMgService.login(req));
    }
    
    
    @PostMapping("/auth/trainer-register")
    public ResponseEntity<TrainerReqDto>regeister(@RequestBody TrainerReqDto reg){
//    	System.out.println("11	");
    	return ResponseEntity.ok(userMgService.trainerRegister(reg));
    }
    
//    @PostMapping("/auth/trainer-login")
//    public ResponseEntity<TrainerReqDto> login(@RequestBody TrainerReqDto req){
//    	return ResponseEntity.ok(userMgService.trainerLogin(req));
//    }

    
    
    
    
    
    
    @PostMapping("/auth/refresh")
    public ResponseEntity<LoginUserDTO> refreshToken(@RequestBody LoginUserDTO req){
        return ResponseEntity.ok(userMgService.refreshToken(req));
    }

    @GetMapping("/admin/get-all-users")
    public ResponseEntity<LoginUserDTO> getAllUsers(){
        return ResponseEntity.ok(userMgService.getAllUsers());

    }

//    @GetMapping("/admin/get-users/{userId}")
//    public ResponseEntity<LoginUserDTO> getUSerByID(@PathVariable Integer userId){
//        return ResponseEntity.ok(userMgService.getUsersById(userId));
//
//    }
//
//    @PutMapping("/admin/update/{userId}")
//    public ResponseEntity<LoginUserDTO> updateUser(@PathVariable Integer userId, @RequestBody User user){
//        return ResponseEntity.ok(userMgService.updateUser(userId, user));
//    }

    @GetMapping("/adminuser/get-profile")
	public ResponseEntity<LoginUserDTO> getMyProfile(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        LoginUserDTO response = userMgService.getMyInfo(email);
        return  ResponseEntity.status(response.getStatusCode()).body(response);
    }

//    @DeleteMapping("/admin/delete/{userId}")
//    public ResponseEntity<LoginUserDTO> deleteUSer(@PathVariable Integer userId){
//        return ResponseEntity.ok(userMgService.deleteUser(userId));
//    }

}
