package com.jatin.ExpenseTrackerSpringBootReact.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "EXPENSE")
@SequenceGenerator(name = "default_gen", sequenceName = "EXPENSE_SEQ", allocationSize = 1)

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Expense extends BaseEntity {

    @Column(name = "EXPENSE_DESC")
    private String description;

    @Column(name = "EXPENSE_INSTANT")
    private Instant expenseInstant;

    @Column(name = "EXPENSE_LOCATION")
    private String location;

    @ManyToOne
    private Category category;

    @ManyToOne
    private User user;
}
