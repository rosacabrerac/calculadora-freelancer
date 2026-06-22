# 🗺️ Paso 1: Definir Entradas (Inputs) y Salidas (Outputs)

## Entradas (Inputs que vas a necesitar en el formulario):
- Salario deseado: Cuánto quiere ganar libre al mes.
- Gastos fijos mensuales: Internet, luz, licencias de software, espacio de trabajo, etc.
- Horas de trabajo: Cuántas horas reales a la semana quiere/puede trabajar.
- Porcentaje de imprevistos: Un extra (ej. 10% o 15%) para cubrir días de enfermedad o vacaciones.

## Salidas (Outputs que vas a calcular con JS):
- Valor hora mínimo: Cuánto tiene que cobrar su hora de trabajo para cubrir gastos y lograr su meta.
- Precio base por proyecto: (Esto lo calcularemos más adelante, hoy concentrate en el valor hora).

# 🏗️ Paso 2: Dibujar la Arquitectura de Componentes

1. App.jsx: El cerebro. Acá va a vivir el estado global (los datos del formulario) para que todos los componentes puedan acceder a él
2. FormularioCostos.jsx: El componente que tiene todos los inputs. Su único trabajo es capturar lo que el usuario escribe y pasárselo a App.jsx
3. ResultadoTarifa.jsx: El componente visual que recibe los datos procesados y los muestra de forma atractiva e impactante (el valor hora final).

