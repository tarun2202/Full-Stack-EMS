package com.ems.emsbackend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import javax.lang.model.element.Name;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "departments")
public class Department {
    @Id
    private Long id;

    @Column(name = "department_name", nullable = false, unique = true)
    private String departmentName;

    @Column(name = "department_description", nullable = false)
    private String departmentDescription;
}
