package com.ems.emsbackend.service;



import com.ems.emsbackend.dto.EmployeeDto;


public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long id);

}
