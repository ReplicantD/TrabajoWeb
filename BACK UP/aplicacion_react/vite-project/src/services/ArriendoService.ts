// services/ArriendoService.ts
import { parse } from "valibot";
import { ArriendosSchema } from "../types/arriendo";
import type { Arriendo } from "../types/arriendo";
import axios from "axios";

export async function getArriendos(): Promise<Arriendo[]> {
  const res = await fetch("/api/arriendos");

  if (!res.ok) {
    const text = await res.text();
    console.error("Error al traer los arriendos:", res.status, text);
    throw new Error("No se pudo obtener la lista de arriendos.");
  }

  const json = await res.json();
  console.log("Respuesta cruda backend:", json);

  const dataParseada = json.data.map((a: any) => ({
    ...a,
    fechaInicio: a.fechaInicio ? new Date(a.fechaInicio) : null,
    fechaFin: a.fechaFin ? new Date(a.fechaFin) : null,
  }));

  console.log("Datos parseados con fechas:", dataParseada);

  try {
    const validado = parse(ArriendosSchema, dataParseada);
    console.log("Datos validados por valibot:", validado);
    return validado;
  } catch (e) {
    console.error("Error validando datos con valibot:", e);
    return dataParseada; // fallback para que no rompa la app
  }
}

//BORRAR




export async function arriendoBorrar(arriendoId: number) {
  try {
    const url = `http://localhost:3000/api/arriendos/${arriendoId}`;
    const response = await axios.delete(url);
    if (response.status === 200) {
      return { success: true };
    } else {
      return { success: false, error: 'Error inesperado en servidor' };
    }
  } catch (error) {
    console.error('Error en arriendoBorrar:', error);
    return { success: false, error: 'No se pudo eliminar el elemento' };
  }
}




