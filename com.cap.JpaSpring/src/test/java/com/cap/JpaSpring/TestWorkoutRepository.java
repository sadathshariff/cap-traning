package com.cap.JpaSpring;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.cap.JpaSpring.entities.Category;
import com.cap.JpaSpring.entities.User;
import com.cap.JpaSpring.entities.Workout;
import com.cap.JpaSpring.repos.UserRepository;
import com.cap.JpaSpring.repos.WorkoutRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:beans.xml")
public class TestWorkoutRepository {

	@Autowired
	WorkoutRepository workoutRepository;
	
	@Autowired
	UserRepository repository;
	
	
//	@Test
	public void testDeleteWorkout() {
		workoutRepository.deleteWorkout(1);
	}

	//@Test
	public void testAddWorkout() {
		Category category = new Category("Strength");
		Workout workout = new Workout("Bench Press", category, 180);
		Workout workout1 = new Workout("Dumbell workout", category, 230);
		workoutRepository.addWorkout(workout);
		workoutRepository.addWorkout(workout1);
	}
	
//	@Test
//	public void testFindWorkoutsByCategoryName() {
//		List<Workout> workouts = workoutRepository.findWorkoutByCategory("Strenth");
//		System.out.println(workouts);
//	}
	
	//@Test
	public void assignWorkoutToUser() {
		String workoutTitle = "Triceps workout";
		String email = "test@test.com";
		workoutRepository.assignWorkoutToUser(email, workoutTitle);
		
		
	}
	
	//@Test
	public void testStartActiveWorkout() {
		int id = 5;
		workoutRepository.testStartActiveWorkout(id);
	}
	
	
	
	//@Test
	public void addUser() {
		User user  = new User("sham@test.com", "testsham");
		repository.addUser(user);
	}
	
	//@Test
	public void updateUserPassword() {
		repository.updateUserPassword(2, "sham@123");
	}
	
}
