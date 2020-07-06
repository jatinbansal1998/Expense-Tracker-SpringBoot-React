package com.jatin.ExpenseTrackerSpringBootReact.repository;

import com.jatin.ExpenseTrackerSpringBootReact.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface IExpenseRepo extends JpaRepository<Expense, Long> {
}
