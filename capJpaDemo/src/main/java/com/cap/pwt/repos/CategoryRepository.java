package com.cap.pwt.repos;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

import com.cap.pwt.entities.Category;

public class CategoryRepository {

	// Create Entity manager factory
	EntityManagerFactory emf = Persistence.createEntityManagerFactory("capdbjpa");
	
	//create Entity manger
	EntityManager em = emf.createEntityManager();
	
	
	// Add Category
	public void addCategory(Category category) {
		EntityTransaction tx = em.getTransaction();
		tx.begin();
		em.persist(category);
		tx.commit();
	}
	
	//find Category By Name
	public Category findCategoryByName(String categoryName) {
		TypedQuery<Category> query = em.createQuery("select c from Category c where c.name =: name", Category.class);
		query.setParameter("name", categoryName);
		return query.getSingleResult();
	}
	
	
	// Delete category
	public void deleteCategory(int id) {
		EntityTransaction tx = em.getTransaction();
		tx.begin();
		Category c = em.find(Category.class,id);
		em.remove(c);
		tx.commit();
	}
	
	
	// update category 
	public void updateCategory(int i, String name) {
		EntityTransaction tx = em.getTransaction();
		tx.begin();	
		Category c = em.find(Category.class, i);
		c.setName(name);

		tx.commit();
		
	}
	
	//find Category By id 
	public Category findCategory(int i) {
		EntityTransaction tx = em.getTransaction();
		tx.begin();	
		Category c = em.find(Category.class, i);

		tx.commit();
		return c;
		
	}
	
	
	
}
