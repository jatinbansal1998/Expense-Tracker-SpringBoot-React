package com.jatin.ExpenseTrackerSpringBootReact.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "CATEGORY")
@SequenceGenerator(name = "default_gen", sequenceName = "CATEGORY_SEQ", allocationSize = 1)

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Category extends BaseEntity {

    @Column(name = "CATEGORY_NAME")
    private String name;

    @ManyToOne(fetch = FetchType.EAGER)
    private User user;

//    @Column(name = "USER_ID", columnDefinition = JPADataTypeConstants.ID)
//    private Long userId;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "CATEGORY_ID", referencedColumnName = "ID")
    private Collection<Expense> expense;
}
