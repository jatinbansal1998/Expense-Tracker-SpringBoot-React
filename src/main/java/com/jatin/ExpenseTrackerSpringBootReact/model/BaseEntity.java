package com.jatin.ExpenseTrackerSpringBootReact.model;

import com.jatin.ExpenseTrackerSpringBootReact.JPADataTypeConstants;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@MappedSuperclass

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BaseEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "default_gen")
    @Column(name = "ID", columnDefinition = JPADataTypeConstants.ID)
    private Long Id;

//    @Column(name = "CREATION_OR_LAST_UPDATED_TIME")
//    private LocalDateTime creationTime = LocalDateTime.now();
}
