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


//OBTENER SOLO LOS ARRIENDOS TERMINADOS 

export async function getArriendosTerminados(): Promise<Arriendo[]> {
  const res = await axios.get("http://localhost:3000/api/arriendos/terminados");

  const dataParseada = res.data.data.map((a: any) => ({
    ...a,
    fechaInicio: new Date(a.fechaInicio),
    fechaFin: a.fechaFin ? new Date(a.fechaFin) : null,
  }));

  return parse(ArriendosSchema, dataParseada);
}

//OBTENER LSO ARRIENDOS ACTIVOS, en este lo k hace es que los arriendos tiene los fecha fin en nulo xd
export async function getArriendosActivos(): Promise<Arriendo[]> {
  try {
    const url = "http://localhost:3000/api/arriendos/activos";
    const response = await axios.get(url);
    // Asumo que la respuesta viene en { data: Arriendo[] } sino funciona en la revision me pego un tiro
    return response.data.data;
  } catch (error) {
    console.error("Error al obtener arriendos activos:", error);
    throw error;
  }
}


//devolucion d arriendo ( es como un update)
export async function registrarDevolucion(arriendoId: number) {
  try {
    const url = `http://localhost:3000/api/arriendos/${arriendoId}`;
    // Solo enviamos fechaFin = fecha actual ISO string
    const fechaFin = new Date().toISOString();

    const response = await axios.put(url, { fechaFin });

    if (response.status === 200) {
      return { success: true, data: response.data.data };
    } else {
      return { success: false, error: 'Error inesperado en el servidor' };
    }
  } catch (error) {
    console.error('Error en registrarDevolucion:', error);
    return { success: false, error: 'No se pudo registrar la devolución' };
  }
}