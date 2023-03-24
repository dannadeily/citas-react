import React, { useEffect } from "react";
import Paciente from "./paciente";

const ListadosPacientes = ({pacientes,setPaciente,eliminarPaciente}) => {
  
  
  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
     
     {pacientes && pacientes.length ? (
     <>
      <h2 className="font-black text-3xl text-center">listados pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Adminsitra tus {""}
        <span className="text-indigo-600 font-bold text-xl ">
          pacientes y citas
        </span>
      </p>

      {pacientes.map((paciente) => (
        <Paciente  key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
      ))}
    
    </> ) : (<>
      <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Comienza agregando pacientes {""}
        <span className="text-indigo-600 font-bold text-xl ">
          y apareceran en este lugar
        </span>
      </p>

     
    
    </>) }

    </div>
     
  );
};

export default ListadosPacientes;
