package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Employee;
import com.example.demo.repository.EmployeeRepository;



@Service
public class EmployeeService {
	
	@Autowired
	private  EmployeeRepository repository;
	
	public Employee postEmployee(Employee employee) {
		return repository.save(employee);
	}
	
	public List<Employee> getAllEmployees(){
		return repository.findAll();
	}
	
	public Employee getEmployeeById(Long id) {
		return repository.findById(id).orElseThrow(()->new RuntimeException("Employee not found..."));
	}
	
	public void deleteEmployee(Long id) {
		 repository.deleteById(id);
	}
	
	public Employee updateEmployee(Long id,Employee employee) {
		Employee existing = getEmployeeById(id);
		existing.setName(employee.getName());
		existing.setEmail(employee.getEmail());
		existing.setPhone(employee.getPhone());
		existing.setDepartment(employee.getDepartment());
		return repository.save(existing);
	}
}
