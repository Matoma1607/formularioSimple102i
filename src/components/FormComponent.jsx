import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    email: "",
  });

  const validateForm = () => {
    const newErrors = {};
    const dniRegex = /^[0-9]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.nombre) {
      newErrors.nombre = "El nombre es requerido";
    } else if (formData.nombre.length < 3 || formData.nombre.length > 20) {
      newErrors.nombre = "El nombre debe tener entre 3 y 20 caracteres";
    }

    if (!formData.apellido) {
      newErrors.apellido = "El apellido es requerido";
    } else if (formData.apellido.length < 3 || formData.apellido.length > 20) {
      newErrors.apellido = "El apellido debe tener entre 3 y 20 caracteres";
    }

    if (!formData.dni) {
      newErrors.dni = "El DNI es requerido";
    } else if (!dniRegex.test(formData.dni) || formData.dni.length !== 8) {
      newErrors.dni = "El DNI debe tener 8 números";
    }

    if (!formData.email) {
      newErrors.email = "El email es requerido";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Datos enviados");
    } else {
      alert("Completar todos los datos correctamente");
    }
  };

  return (
    <section className="form-container">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formApellido" className="mt-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formDNI" className="mt-3">
          <Form.Label>DNI</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu DNI"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Enviar
        </Button>
      </Form>
    </section>
  );
};

export default FormComponent;
