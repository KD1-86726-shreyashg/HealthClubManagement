package com.project.controller;

import java.util.HashMap;
import java.util.Random;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.dao.AdminDao;
import com.project.dao.MembershipDao;
import com.project.dao.TrainerDao;
import com.project.dao.UserDao;
import com.project.dto.EmailRequestDTO;
import com.project.dto.LoginUserDTO;
import com.project.loginuser.services.JwtUtils;
import com.project.pojos.Admin;
import com.project.pojos.Trainer;
import com.project.pojos.User;
import com.project.service.EmailService;

import jakarta.servlet.http.HttpSession;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin("*")
public class ForgotPasswordController {
	Random random = new Random();

	@Autowired
	private EmailService emailService;
	
	@Autowired
	private UserDao userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private UserDao memberDao;

	@Autowired
	private TrainerDao trainerDao;

	@Autowired
	private AdminDao adminDao;



	@PostMapping("/auth/send-otp")
	public ResponseEntity<EmailRequestDTO> sendOTP(@RequestBody EmailRequestDTO request) {
		System.out.println("EMAIL: " + request.getEmail());
		EmailRequestDTO dto = new EmailRequestDTO();

		// generating otp of 6 digit
		int otp = random.nextInt(999999);
//		System.out.println("OTP " + (otp));
		// End of Random number.

		// write code for send otp to email...
		String subject = "OTP From HCM";
		String message = "" + "<div style='border:1px solid #e2e2e2; padding:20px'>" + "<h1>" + "OTP is : "
				+ "<b style='color:purple;'> " + otp + "</b>" + "</h1> " + "</div>";
		String to = request.getEmail();

		boolean flag = this.emailService.sendEmail(subject, message, to);

		System.out.println("done..");
		if (flag) {
			dto.setMsg("Successfully send otp....");
			dto.setEmail(request.getEmail());
			dto.setOtp(otp);
			 return ResponseEntity.ok(dto);
		} else {
			dto.setMsg("Failed to send otp....");
			dto.setEmail(request.getEmail());
			dto.setOtp(0);
			return ResponseEntity.ok(dto);
		}

	}


//	change password
	@PostMapping("/auth/change-password")
	public LoginUserDTO changePassword(@RequestBody LoginUserDTO loginRequest)
//	public LoginUserDTO changePassword(LoginUserDTO loginRequest)
	{
		System.out.println("Hello world "+ loginRequest.getEmail());
		System.out.println("Hello world "+ loginRequest.getPassword());
		LoginUserDTO response = new LoginUserDTO();
		try {
			User member = userRepository.findByEmail(loginRequest.getEmail()).orElse(null);
			 System.out.println("member "+member);
			 
			 Trainer trainer = trainerDao.findByEmail(loginRequest.getEmail()).orElse(null);
			 System.out.println("trainer " +trainer);
			 
			 Admin admin = adminDao.findByEmail(loginRequest.getEmail()).orElse(null);
			 System.out.println("admin "+admin);
			 
			 
			 // checking role of the user
			 if(member!=null) {
				 member.setPassword(passwordEncoder.encode(loginRequest.getPassword()));
				 response.setMessage("Password changed successfully...");
				 memberDao.save(member);
				 System.out.println(member.getPassword());
				 return response;
			 }else if(trainer!=null) {
				 trainer.setPassword(passwordEncoder.encode(response.getPassword()));
				 response.setMessage("Password changed successfully...");
				 trainerDao.save(trainer);
				 return response;
			 }else {
				 admin.setPassword(passwordEncoder.encode(response.getPassword()));
				 response.setMessage("Password changed successfully...");
				 adminDao.save(admin);
				 return response;
				 
			 }
			
			 
			 
		 }catch (Exception e){
			 response.setStatusCode(500);
			 response.setMessage(e.getMessage());
			 return response;
		 }
	
		
	}

}
