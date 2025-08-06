# 🎁 Amigo Secreto

Una aplicación web simple en JavaScript puro, HTML y CSS que permite ingresar nombres de amigos y sortear uno al azar como "amigo secreto".

---

## 🚀 Funcionalidades

- 📋 Añadir nombres de amigos a una lista.
- 🎲 Sortear un nombre al azar de la lista.
- ✅ Evita que se repita un amigo hasta que todos hayan sido sorteados.
- 🔁 Reiniciar la aplicación y comenzar de nuevo.
- 🎨 Interfaz moderna y responsiva con estilos personalizados.

---

## 🧠 Lógica del Proyecto

- Se almacenan los nombres en un array llamado `amigos`.
- Otro array llamado `amigosYaSorteados` evita que se repitan los sorteos.
- El botón “Sortear Amigo” se transforma en “Reiniciar” cuando todos los amigos fueron sorteados.
- La función `valoresPorDefecto()` reinicia toda la aplicación al estado inicial sin recargar la página.

---

## 📁 Estructura de Archivos
```
📦 amigo-secreto
├── index.html # Estructura principal de la aplicación
├── style.css # Estilos personalizados
├── app.js # Lógica del sorteo y la manipulación del DOM
├── assets/ # Carpeta con imágenes (ícono de play, etc.)
│ └── play_circle_outline.png
```
---

## 🛠️ Tecnologías Utilizadas
- HTML5
- CSS3
- JavaScript
- Fuentes de Google Fonts (Inter, Merriweather)

## ⚙️ Cómo usar
1. Cloná el repositorio o descargá el ZIP.
2. Abrí el archivo index.html en tu navegador.
3. Ingresá nombres y apretá "Añadir".
4. Una vez que tengas varios amigos, hacé clic en "Sortear Amigo".
5. Cuando todos hayan sido sorteados, podrás reiniciar la app.

## 📌 Autor
Desarrollado por Felipe Pravisán como parte de un ejercicio de práctica de programación web del programa Oracle Next Education.

## 📄 Licencia
Este proyecto es parte del curso `Principiante en Programación` de `Alura Latam`
