Crea una TODO list que contenga lo siguiente:
- Un formulario con input + botón
- Un componente List que recorra una lista de items
- Un componente Item o Card que contenga cada TO DO
- Botón CLEAR para borrar todas las tareas
- Botón BORRAR, asociado a cada tarea, para poder borrar de manera independiente
- Botón para hacer RESET de las tareas
- Dar estilo CSS a los componentes con lo visto en clase para practicar
- Flujo de esta vista:
- Hasta que no haya texto no aparecerá el botón ADD
- Si hemos escrito algo en el input y hacemos click sobre el botón ADD, se añadirá un item debajo del input.
- Cuando un item sea añadido, se borrará inmediatamente lo que habíamos escrito en el input y desaparecerá el botón ADD.
- Se debe hacer una precarga de tareas de un JSON de datos
- El botón de RESET mostrará de nuevo sólo las tareas obtenidas de la precarga de datos
- la precarga de datos se debe hacer usando el lifecycle
- Si pasados 20 segundos no envias la tarea que has escrito, se vaciará el input y desaparecerá ADD
- Cuando haya sido añadida una tarea se mostrará durante 5 segundos el mensaje "tarea añadida" y luego desaparecerá
- Validación: La tarea introducida en el input debe tener al menos 6 caracteres. En caso contrario debe aparecer un mensaje de error

Funcionamiento 

Podemos ver los recordatorios guardados actualmente en la lista
![todoList home](https://user-images.githubusercontent.com/101732872/190929544-eda717c8-0885-4087-9e18-68c58982c645.jpg)

Al completar los input para generar un nuevo recordatorio aparecerá debajo el boton de "Añadir Recordatorio"
![todoList nuevoR](https://user-images.githubusercontent.com/101732872/190929584-d785e9f0-8625-40b1-a515-32718910a2d5.jpg)

Al pulsar dicho botón el recordatorio nuevo será añadido a la lista 
![todoList nuevoR saved](https://user-images.githubusercontent.com/101732872/190929615-2661130d-2eb2-4418-b8ad-996c9fa06961.jpg)

Pulsando el botón "Borrar Todos los recordatorios" se borrará la lista completa, si queremos borrar solo uno de ellos pulsaremos "Borrar Recordatorio" debajo del recordatorio a eliminar
![todoList borrado](https://user-images.githubusercontent.com/101732872/190929630-0c8989ef-6694-4cb6-b938-aad602a4aa90.jpg)

Para Volver a cargar la lista con los recordatorios pre-establecidos en nuestro fichero json simplemente pulsamos "Recargar To Do List"
