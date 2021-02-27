package com.cap.pwt.repos;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.NoResultException;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

import com.cap.pwt.entities.Category;
import com.cap.pwt.entities.User;
import com.cap.pwt.entities.Workout;
import com.cap.pwt.entities.WorkoutActive;

public class WorkoutRepository {

	/* Create EntityManagerFactory */
	EntityManagerFactory emf = Persistence.createEntityManagerFactory("capdbjpa");

	
	/* Create EntityManager */
	EntityManager em = emf.createEntityManager();
	
	
	//find Categoty by Name
	public Category findCategoryByName(String name) {
		TypedQuery<Category> query = em.createQuery("select c from  Category c where c.name=:name", Category.class);
		query.setParameter("name",name);
		return query.getSingleResult();
	}
	
	//Add Workout

	public void addWorkout(Workout workout) {
		EntityTransaction tx = em.getTransaction();
		tx.begin();
		
		// mapping existing category to workout
		try {
			Category category = this.findCategoryByName(workout.getCategory().getName());
			if(category != null) {
				workout.setCategory(category);
			}
		}
		catch(NoResultException e) {
			e.printStackTrace();
		}

		em.persist(workout);
		tx.commit();
	}
	
	
	//Delete a workout By Id  but not the Category
	
	public void deleteWorkout(int i) {
		EntityTransaction tx = em.getTransaction();
		tx.begin();
		
		Workout w = em.find(Workout.class, i);
		em.remove(w);
		
		tx.commit();
	}
	
	//find all workouts inside a specific category
	public List<Workout> findWorkoutByCategory(String categoryName){
		
		//find category to fetch id
		CategoryRepository categoryRepo = new CategoryRepository();
		Category c = categoryRepo.findCategoryByName(categoryName);
				
		//find workouts using ID
		TypedQuery<Workout> query = em.createQuery("select w from Workout w where category.id =:id", Workout.class);
		query.setParameter("id",c.getId());
		return query.getResultList();
	}
	
	public Workout findWorkoutByTitle(String title) {
		//Find workouts using Id
		TypedQuery<Workout> query = em.createQuery("select w from Workout w where w.title=:title", Workout.class);
		query.setParameter("title", title);
		return query.getSingleResult();
		}
	
	
	//Update Workout - Change title 
	public void updateWorkout(int i,String title) {
		EntityTransaction tx = em.getTransaction();
		tx.begin();
		//mapping existing category to workout
		Workout w = em.find(Workout.class, i);
		w.setTitle(title);
		tx.commit();
		
	}
	
	//Assign workout to the user
	public void assignWorkoutToUser(String email,String workoutTitle) {
		// persist the object in database
		EntityTransaction tx = em.getTransaction();
		tx.begin();
		
		//find user and workout from email,workoutTitle respectively
		UserRepository userRepository = new UserRepository();
		User user = userRepository.findUser(email);
		System.out.println(user);
		Workout workout = this.findWorkoutByTitle(workoutTitle);
		System.out.println(workout);
		
		//construct workoutActive object
		User newUser = new User(user.getEmail(),user.getPassword());
		WorkoutActive workoutActive = new WorkoutActive();
		em.persist(workoutActive);
		tx.commit();		
		
	}
	
	public void testStartActiveWorkout(int id) {
		EntityTransaction tx = em.getTransaction();
		tx.begin();
		WorkoutActive workoutActive = em.find(WorkoutActive.class, id);
		workoutActive.setStartTime(LocalDateTime.now());
		tx.commit();
	}
	
	
}
