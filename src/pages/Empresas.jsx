import { Eye, Plus, SquarePen } from "lucide-react";
import { getEmpresas } from "../requests/getEmpresas";
import { useState, useEffect } from "react";

export function Empresas() {

  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const empresasData = await getEmpresas();
        setEmpresas(empresasData.listaempresas);
      } catch (error) {
        console.error('Error al obtener datos de empresas:', error);
      }
    }

    fetchData();
  }, []);
  return (

    <div className="w-full max-w-fu h-svh flex flex-col items-center relative overflow-x-auto">
      <button className="px-4 py-2 bg-vgreen text-white font-medium text-sm mt-8 rounded-lg flex gap-2 	align-self: flex-start	" >
        <Plus size={20} color="#FFFFFF" />
        Añadir
      </button>

        <div className="h-14 w-11/12 bg-white rounded-xl mb-3 grid items-center px-3"
          style={{ gridTemplateColumns: '2fr 0.7fr 1fr 1fr 0.7fr 0.5fr' }}>
          <h1 className=" text-vgraylight font-medium">Nombre</h1>
          <h1 className=" text-vgraylight font-medium text-center">Tipo</h1>
          <h1 className=" text-vgraylight font-medium text-center" >Identificación</h1>
          <h1 className=" text-vgraylight font-medium text-center">Teléfono</h1>
          <h1 className=" text-vgraylight font-medium text-center">Obras</h1>
        </div>

        {empresas.map((empresa, index) => (
          <div key={index} className="h-14 w-11/12 bg-white rounded-xl my-2 grid items-center px-3"
            style={{ gridTemplateColumns: '2fr 0.7fr 1fr 1fr 0.7fr 0.5fr' }}>
            <h1 className="text-vgraydark font-semibold">{empresa.razonsocial}</h1>
            <h1 className="text-vgraydark font-semibold text-center">{empresa.tipodocumento}</h1>
            <h1 className="text-vgraydark font-semibold text-center">{empresa.numidentificacion}</h1>
            <h1 className="text-vgraydark font-semibold text-center">{empresa.telefono}</h1>
            <h1 className="text-vgraydark font-semibold text-center">{empresa.numobras}</h1>
            <div className="flex gap-5 justify-center">
              <Eye color="#204ADF" />
              <SquarePen color="#00AF00" />
            </div>
          </div>
        ))}



    </div>

  )
}