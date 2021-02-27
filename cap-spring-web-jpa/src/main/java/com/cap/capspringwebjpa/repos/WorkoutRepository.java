package com.cap.capspringwebjpa.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cap.capspringwebjpa.entities.Workout;

@Repository
public interface WorkoutRepository extends JpaRepository<Workout,Integer> {
	
	public Workout findWorkoutByTitle(String name);

}
