package com.ems.emsbackend.service;

//public class EmployeeServiceImpl {
//}
import com.ems.emsbackend.dto.EmployeeDto;
import com.ems.emsbackend.entity.Employee;
import com.ems.emsbackend.exception.ResourceNotFoundException;
import com.ems.emsbackend.mapper.EmployeeMapper;
import com.ems.emsbackend.repository.EmployeeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;



@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(()->
                        new ResourceNotFoundException("Employee not exists with the given id : "+employeeId));
        return EmployeeMapper.mapToEmployeeDto(employee);

    }


}