package com.ems.emsbackend.controller;

import com.ems.emsbackend.dto.DepartmentDto;
import com.ems.emsbackend.service.DepartmentService;
import lombok.AllArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/api/departments")
public class DepartmentController {

    private DepartmentService departmentService;

    //build add department REST API

    public ResponseEntity<DepartmentDto> createDepartment(DepartmentDto departmentDto){
        DepartmentDto savedDepartment = departmentService.createDepartment(departmentDto);
        return new ResponseEntity<>(savedDepartment, HttpStatus.CREATED);
    }
}
