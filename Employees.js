import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import EmployeeList from '../components/EmployeeList';
import EmployeeForm from '../components/EmployeeForm';
import ExportExcel from '../components/ExportExcel';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/localStorageUtils';

const Employees = () => {
  const [employees, setEmployees] = useState(loadFromLocalStorage('employees'));
  const [currentEmployee, setCurrentEmployee] = useState(null);

  const handleSave = (employee) => {
    const updatedEmployees = currentEmployee
      ? employees.map((e) => (e.id === employee.id ? employee : e))
      : [...employees, employee];
    setEmployees(updatedEmployees);
    saveToLocalStorage('employees', updatedEmployees);
    setCurrentEmployee(null);
  };

  const handleEdit = (employee) => {
    setCurrentEmployee(employee);
  };

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((e) => e.id !== id);
    setEmployees(updatedEmployees);
    saveToLocalStorage('employees', updatedEmployees);
  };

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Gestión de Empleados</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <EmployeeForm onSave={handleSave} currentEmployee={currentEmployee} />
        </Col>
        <Col md={6}>
          <ExportExcel data={employees} />
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <EmployeeList
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Employees;