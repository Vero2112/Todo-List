import React, { useState } from "react";
import "../../styles/FormularioTareas.css";
const FormularioTareas = () => {
	const [tareas, cambiarTareas] = useState([]);
	const [nombreTarea, cambiarNombreTarea] = useState({
		label: "",
		done: false,
	});

	const agregarTarea = (nombreTarea) => {
		// const auxTarea = tareas.concat(nombreTarea);
		const auxTarea = [...tareas, nombreTarea];
		cambiarTareas(auxTarea);
	};

	const change = (e) => {
		const value = e.target.value;
		cambiarNombreTarea(value);
	};

	const eliminarTarea = (index) => {
		const auxTarea = tareas.filter((nombreTarea, auxIndex) => {
			if (index !== auxIndex) return nombreTarea;
		});
		cambiarTareas(auxTarea);
	};

	const guardarNombre = (e) => {
		if (
			(nombreTarea &&
				nombreTarea.length > 0 &&
				e.code === "NumpadEnter") ||
			e.code === "Enter"
		) {
			agregarTarea(nombreTarea);
		}
	};

	return (
		<>
			{" "}
			<div className="pt-3 row d-flex justify-content-center align-items-center h-100">
				<div className="col-5">
					<div className="card border border border-white">
						<div className="card-body border border border-white">
							<h1 className="d-flex justify-content-center">
								Tareas pendientes
							</h1>
							<div className="d-flex justify-content-center">
								<input
									type="text"
									onChange={change}
									onKeyPress={guardarNombre}
									placeholder="Escribe la tarea"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{tareas.map((nombreTarea, index) => {
				return (
					<>
						<div
							className="d-flex justify-content-between border-bottom w-25 center-me "
							key={index}>
							{nombreTarea}
							<button
								className="btn btn-danger"
								onClick={() => eliminarTarea(index)}>
								X
							</button>
						</div>
					</>
				);
			})}
		</>
	);
};

export default FormularioTareas;
