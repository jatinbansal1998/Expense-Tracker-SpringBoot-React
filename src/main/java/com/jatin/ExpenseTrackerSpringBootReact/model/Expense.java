package com.jatin.ExpenseTrackerSpringBootReact.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.time.Instant;

@Entity
@Table(name = "EXPENSE")

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Expense extends BaseEntity {

    @Column(name = "EXPENSE_DESC")
    private String description;

    @Column(name = "EXPENSE_INSTANT")
    private Instant expenseInstant;

    @ManyToOne
    private Category category;

    @ManyToOne
    private User user;
}
