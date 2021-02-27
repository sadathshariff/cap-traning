package com.cap.pwt.repos;

import java.util.List;

import org.junit.Before;
import org.junit.Test;

import com.cap.pwt.entities.Category;
import com.cap.pwt.entities.User;
import com.cap.pwt.entities.Workout;

public class TestWorkoutRepository {

	WorkoutRepository workoutRepository;
	
	@Before
	public void setUp() {
		workoutRepository = new WorkoutRepository();
		
	}
	
	//@Test
	public void testDeleteWorkout() {
		workoutRepository.deleteWorkout(9);
	}
	
	//@Test
	public void testAddWorkout() {
		Category category1 = new Category("Balance");
		Workout workout = new Workout("yoga 10 min",category1,100);
		Workout workout1 = new Workout("meditation for 10 min",category1,20);
		
		workoutRepository.addWorkout(workout);
		workoutRepository.addWorkout(workout1);
	}
	
	//@Test
	public void findCategoryByName() {
		List<Workout> workouts = workoutRepository.findWorkoutByCategory("Strength");
		System.out.println(workouts);
	}

	@Test
	public void assignworkoutToUser() {
		String workoutTitle = "Triceps workout";
		String email = "test@gmail.com";
		workoutRepository.assignWorkoutToUser(email, workoutTitle);
	}
	
	//@Test
	public void testStartActiveWorkout() {
		int id = 2;
		workoutRepository.testStartActiveWorkout(id);
		
	}
	
	//@Test
	public void addUser() {
		User user = new User("admin@gmail.com","admin");
		UserRepository repository = new UserRepository();
		repository.addUser(user);
	}
	
	//@Test
	public void updateUserPassword() {
		UserRepository repository = new UserRepository();
		repository.updateUserPassword(1, "admin");
	}
	
}
