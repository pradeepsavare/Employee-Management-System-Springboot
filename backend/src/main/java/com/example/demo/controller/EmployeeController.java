package com.example.demo.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Employee;
import com.example.demo.service.EmployeeService;



@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class EmployeeController {
	@Autowired
	private  EmployeeService employeeService;
	
	@PostMapping("/employee")
	public Employee postEmployee(@RequestBody Employee employee) {
		return employeeService.postEmployee(employee);
	}
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeService.getAllEmployees();
	}
	
	@GetMapping("/employees/{id}")
	public Employee getEmployee(@PathVariable Long id) {
		return employeeService.getEmployeeById(id);
	}
	
	@DeleteMapping("/employees/{id}")
	public void deleteEmployee(@PathVariable Long id) {
		employeeService.deleteEmployee(id);
	}
	
	@PutMapping("/employees/{id}")
	public Employee updateEmployee(@PathVariable Long id,@RequestBody Employee employee) {
		return employeeService.updateEmployee(id, employee);
	}
}
