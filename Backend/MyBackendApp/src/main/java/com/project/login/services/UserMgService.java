package com.project.loginuser.services;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.project.dao.AdminDao;
import com.project.dao.MembershipDao;
import com.project.dao.TrainerDao;
import com.project.dao.UserDao;
import com.project.dto.LoginUserDTO;
import com.project.dto.TrainerReqDto;
import com.project.pojos.Admin;
import com.project.pojos.Membership;
import com.project.pojos.Trainer;
import com.project.pojos.User;

@Service
public class UserMgService {
	@Autowired
	private UserDao userRepository;
	@Autowired
	private JwtUtils jwtUtils;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private MembershipDao memberDao;

	@Autowired
	private TrainerDao trainerDao;

	@Autowired
	private AdminDao adminDao;

	@Autowired
	private ModelMapper mapper;

	// trainer register and login
	public TrainerReqDto trainerRegister(TrainerReqDto registrationRequest) {
		System.out.println("1234");
		TrainerReqDto resp = new TrainerReqDto();
		System.out.println(registrationRequest);

		try {
			Trainer trainer = mapper.map(registrationRequest, Trainer.class);

			trainer.setPassword(passwordEncoder.encode(registrationRequest.getPassword()));
			Trainer ourUsersResult = trainerDao.save(trainer);
			if (ourUsersResult.getId() > 0) {
//	                resp.setOurUsers((ourUsersResult));
				resp.setMessage("User Saved Successfully");
				resp.setStatusCode(200);
			}

		} catch (Exception e) {
			resp.setStatusCode(500);
			resp.setError(e.getMessage());
		}
		return resp;
	}

	// member register
	public LoginUserDTO memberRegister(LoginUserDTO registrationRequest) {
		LoginUserDTO resp = new LoginUserDTO();
		System.out.println(registrationRequest);
		System.out.println("0");
		try {
			Membership memberId = memberDao.findById(registrationRequest.getMembershipId())
					.orElseThrow(() -> new RuntimeException("Invalid Membership Id"));

			Trainer trainerId = trainerDao.findById(registrationRequest.getPersonalTrainerId())
					.orElseThrow(() -> new RuntimeException("Invalid Trainer Id"));

			User ourUser = mapper.map(registrationRequest, User.class);
			ourUser.setPersonalTrainerId(trainerId);
			ourUser.setMembershipId(memberId);

			ourUser.setPassword(passwordEncoder.encode(registrationRequest.getPassword()));
			User ourUsersResult = userRepository.save(ourUser);
			if (ourUsersResult.getId() > 0) {
				resp.setOurUsers((ourUsersResult));
				resp.setMessage("User Saved Successfully");
				resp.setStatusCode(200);
			}
			System.out.println("Done...");

		} catch (Exception e) {
			resp.setStatusCode(500);
			resp.setError(e.getMessage());
		}
		return resp;
	}

	public LoginUserDTO login(LoginUserDTO loginRequest) {
		LoginUserDTO response = new LoginUserDTO();

		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

			User member = userRepository.findByEmail(loginRequest.getEmail()).orElse(null);
			System.out.println("member " + member);

			Trainer trainer = trainerDao.findByEmail(loginRequest.getEmail()).orElse(null);
			System.out.println("trainer " + trainer);

			Admin admin = adminDao.findByEmail(loginRequest.getEmail()).orElse(null);
			System.out.println("admin " + admin);

			// checking role of the user
			if (member != null) {
				var jwt = jwtUtils.generateToken(member);
				var refreshToken = jwtUtils.generateRefreshToken(new HashMap<>(), member);
				response.setToken(jwt);
				response.setRole(member.getRole());
				response.setId(member.getId());
				response.setName(member.getName());
				response.setRefreshToken(refreshToken);
			} else if (trainer != null) {
				var jwt = jwtUtils.generateToken(trainer);
				var refreshToken = jwtUtils.generateRefreshToken(new HashMap<>(), trainer);
				response.setToken(jwt);
				response.setRole(trainer.getRole());
				response.setId(trainer.getId());
				response.setName(trainer.getName());
				response.setRefreshToken(refreshToken);
			} else {
				var jwt = jwtUtils.generateToken(admin);
				var refreshToken = jwtUtils.generateRefreshToken(new HashMap<>(), admin);
				response.setToken(jwt);
				response.setRole(admin.getRole());
				response.setName(admin.getName());
				response.setRefreshToken(refreshToken);
			}

			response.setStatusCode(200);
			response.setMessage("ith paryant code yet ahe");
			response.setExpirationTime("24Hrs");
			response.setMessage("Successfully Logged In");

		} catch (Exception e) {
			response.setStatusCode(500);
			response.setMessage(e.getMessage());
		}
		return response;
	}

	public LoginUserDTO refreshToken(LoginUserDTO refreshTokenReqiest) {
		LoginUserDTO response = new LoginUserDTO();
		try {
			String ourEmail = jwtUtils.extractUsername(refreshTokenReqiest.getToken());
			User users = userRepository.findByEmail(ourEmail).orElseThrow();
			if (jwtUtils.isTokenValid(refreshTokenReqiest.getToken(), users)) {
				var jwt = jwtUtils.generateToken(users);
				response.setStatusCode(200);
				response.setToken(jwt);
				response.setRefreshToken(refreshTokenReqiest.getToken());
				response.setExpirationTime("24Hr");
				response.setMessage("Successfully Refreshed Token");
			}
			response.setStatusCode(200);
			return response;

		} catch (Exception e) {
			response.setStatusCode(500);
			response.setMessage(e.getMessage());
			return response;
		}
	}

	public LoginUserDTO getAllUsers() {
		LoginUserDTO LoginUserDTO = new LoginUserDTO();

		try {
			List<User> result = userRepository.findAll();
			if (!result.isEmpty()) {
				LoginUserDTO.setOurUsersList(result);
				LoginUserDTO.setStatusCode(200);
				LoginUserDTO.setMessage("Successful");
			} else {
				LoginUserDTO.setStatusCode(404);
				LoginUserDTO.setMessage("No users found");
			}
			return LoginUserDTO;
		} catch (Exception e) {
			LoginUserDTO.setStatusCode(500);
			LoginUserDTO.setMessage("Error occurred: " + e.getMessage());
			return LoginUserDTO;
		}
	}

//	    public LoginUserDTO getUsersById(Integer id) {
//	        LoginUserDTO LoginUserDTO = new LoginUserDTO();
//	        try {
//	            User usersById = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User Not found"));
//	            LoginUserDTO.setOurUsers(usersById);
//	            LoginUserDTO.setStatusCode(200);
//	            LoginUserDTO.setMessage("Users with id '" + id + "' found successfully");
//	        } catch (Exception e) {
//	            LoginUserDTO.setStatusCode(500);
//	            LoginUserDTO.setMessage("Error occurred: " + e.getMessage());
//	        }
//	        return LoginUserDTO;
//	    }

//	    public LoginUserDTO deleteUser(Integer userId) {
//	        LoginUserDTO LoginUserDTO = new LoginUserDTO();
//	        try {
//	            Optional<User> userOptional = userRepository.findById(userId);
//	            if (userOptional.isPresent()) {
//	                userRepository.deleteById(userId);
//	                LoginUserDTO.setStatusCode(200);
//	                LoginUserDTO.setMessage("User deleted successfully");
//	            } else {
//	                LoginUserDTO.setStatusCode(404);
//	                LoginUserDTO.setMessage("User not found for deletion");
//	            }
//	        } catch (Exception e) {
//	            LoginUserDTO.setStatusCode(500);
//	            LoginUserDTO.setMessage("Error occurred while deleting user: " + e.getMessage());
//	        }
//	        return LoginUserDTO;
//	    }

//	    public LoginUserDTO updateUser(Integer userId, User updatedUser) {
//	        LoginUserDTO LoginUserDTO = new LoginUserDTO();
//	        try {
//	            Optional<User> userOptional = userRepository.findById(userId);
//	            if (userOptional.isPresent()) {
//	                User existingUser = userOptional.get();
//	                existingUser.setEmail(updatedUser.getEmail());
//	                existingUser.setName(updatedUser.getName());
//	                existingUser.setRole(updatedUser.getRole());
//
//	                // Check if password is present in the request
//	                if (updatedUser.getPassword() != null && !updatedUser.getPassword().isEmpty()) {
//	                    // Encode the password and update it
//	                    existingUser.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
//	                }
//
//	                User savedUser = userRepository.save(existingUser);
//	                LoginUserDTO.setOurUsers(savedUser);
//	                LoginUserDTO.setStatusCode(200);
//	                LoginUserDTO.setMessage("User updated successfully");
//	            } else {
//	                LoginUserDTO.setStatusCode(404);
//	                LoginUserDTO.setMessage("User not found for update");
//	            }
//	        } catch (Exception e) {
//	            LoginUserDTO.setStatusCode(500);
//	            LoginUserDTO.setMessage("Error occurred while updating user: " + e.getMessage());
//	        }
//	        return LoginUserDTO;
//	    }

	public LoginUserDTO getMyInfo(String email) {
		LoginUserDTO LoginUserDTO = new LoginUserDTO();
		try {
			Optional<User> userOptional = userRepository.findByEmail(email);
			if (userOptional.isPresent()) {
				LoginUserDTO.setOurUsers(userOptional.get());
				LoginUserDTO.setStatusCode(200);
				LoginUserDTO.setMessage("successful");
			} else {
				LoginUserDTO.setStatusCode(404);
				LoginUserDTO.setMessage("User not found for update");
			}

		} catch (Exception e) {
			LoginUserDTO.setStatusCode(500);
			LoginUserDTO.setMessage("Error occurred while getting user info: " + e.getMessage());
		}
		return LoginUserDTO;

	}

}
