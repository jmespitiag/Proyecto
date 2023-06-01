use Proyecto;

INSERT INTO Usuario(doc_identidad, nombre, genero, email, id_nodo, ref_bancaria) VALUES
(123456789, 'Juan Pérez', 'Masculino', 'juanperez@eafit.edu.co', 1, 987654321),
(234567890, 'María Rodríguez', 'Femenino', 'mariarodriguez@eafit.edu.co', 2, 876543210),
(345678901, 'Pedro Gómez', 'Masculino', 'pedrogomez@eafit.edu.co', 3, 765432109),
(456789012, 'Laura García', 'Femenino', 'lauragarcia@eafit.edu.co', 4, 654321098),
(567890123, 'Carlos Sánchez', 'Masculino', 'carlossanchez@eafit.edu.co', 5, 543210987);

INSERT INTO Curso (id_curso, Nombre, categoria, url, fecha_inicio, fecha_fin, precio, semestre) VALUES
(1, 'Introducción a la programación', 'Programación Básica', 'www.eafit.edu.co/nodo/intro-programacion', '2023-06-01', '2023-07-30', 500000, 1),
(2, 'Desarrollo Web con HTML y CSS', 'Desarrollo Web', 'www.eafit.edu.co/nodo/desarrollo-web-html-css', '2023-08-01', '2023-09-30', 800000, 2),
(3, 'Programación Orientada a Objetos con Java', 'Programación Orientada a Objetos', 'www.eafit.edu.co/nodo/java-poo', '2023-10-01', '2023-12-01', 1000000, 3),
(4, 'Desarrollo de aplicaciones móviles para Android', 'Desarrollo Móvil', 'www.eafit.edu.co/nodo/desarrollo-android', '2024-02-01', '2024-04-01', 1200000, 4),
(5, 'Programación en Python', 'Python', 'www.eafit.edu.co/nodo/python', '2024-05-01', '2024-06-30', 600000, 1);

INSERT INTO Profesor (doc_id, nombre, email, telefono, area_p, area_a, contraseña) 
VALUES (123456123, 'Juan Pérez', 'jperez@eafit.edu.co', 1234567, 'Programación', 'Ingeniería de Sistemas', 'password123'),
       (234567456, 'María Gómez', 'mgomez@eafit.edu.co', 2345678, 'Bases de datos', 'Ciencias de la Computación', 'password456'),
       (345678765, 'Carlos Rodríguez', 'crodriguez@eafit.edu.co', 3456789, 'Algoritmos', 'Matemáticas', 'password789'),
       (456789766, 'Ana Martínez', 'amartinez@eafit.edu.co', 4567890, 'Lenguajes de Programación', 'Ingeniería Eléctrica', 'password012'),
       (567890543, 'Pedro Ramírez', 'pramirez@eafit.edu.co', 5678901, 'Sistemas Operativos', 'Ingeniería de Telecomunicaciones', 'password345');


INSERT INTO Estudiante(ref_bancaria, id_nodo, email, genero, nombre, doc_identidad) VALUES 
(987654321, 1, 'juanperez@eafit.edu.co', 'Masculino', 'Juan Pérez', 123456789),
(876543210, 2, 'mariarodriguez@eafit.edu.co', 'Femenino', '234567890', 234567890),
(765432109, 3, 'Pedro Gómez', 'Masculino', 'pedrogomez@eafit.edu.co', 345678901),
(654321098, 4, 'Laura García', 'Femenino', 'lauragarcia@eafit.edu.co', 456789012),
(543210987, 5, 'Carlos Sánchez', 'Masculino', 'carlossanchez@eafit.edu.co',567890123);

INSERT INTO Material (id_mat, titulo, descripcion, archivo) VALUES 
(1, 'Introducción a Python', 'Material de la clase 1', 'introduccion_python.pdf'),
(2, 'Ejercicios básicos en Java', 'Material de la clase 2', 'ejercicios_java.zip'),
(3, 'Fundamentos de HTML y CSS', 'Material de la clase 3', 'fundamentos_html_css.docx'),
(4, 'Introducción a PHP', 'Material de la clase 4', 'introduccion_php.pdf'),
(5, 'Ejemplos de código en C++', 'Material de la clase 5', 'ejemplos_cpp.zip');


INSERT INTO Tarea (id_tarea,nombre,descripcion, fecha_c,fecha_e,archivo,puntaje) VALUES
(1,'Tarea 1', 'Realizar un programa en Python', '2023-04-25', '2023-05-02', 'factorial.py', 10),
(2,'Tarea 2', 'Crear una página web en HTML y CSS', '2023-04-28', '2023-05-05', 'pelicula.html', 8),
(3,'Tarea 3', 'Desarrollar una aplicación en Java', '2023-05-01', '2023-05-08', 'calculadora.java', 12),
(4,'Tarea 4', 'Escribir un programa en C', '2023-04-30', '2023-05-07', 'ordenamiento.c', 9),
(5,'Tarea 5', 'Crear una base de datos en MySQL', '2023-05-02', '2023-05-09', 'productos.sql', 11);

INSERT INTO Foro (id_foro, nombre, descripcion, fecha_cr, fecha_t) VALUES
(1, 'Foro de Programación I', 'Discusión sobre temas de Programación I', '2022-01-01', '2022-05-01'),
(2, 'Foro de Programación II', 'Discusión sobre temas de Programación II', '2022-06-01', '2022-10-01'),
(3, 'Foro de Programación Orientada a Objetos', 'Discusión sobre temas de Programación I', '2023-01-01', '2023-05-01'),
(4, 'Foro de Estructuras de Datos', 'Discusión sobre temas de Estructuras de Datos', '2023-06-01', '2023-10-01'),
(5, 'Foro de Bases de Datos', 'Discusión sobre temas de Bases de Datos', '2024-01-01', '2024-05-01');


INSERT INTO Mensaje (id_mensaje, nombre, descripcion, id_replica) VALUES
(1, 'Introducción a Python', '¿Alguien sabe cuándo comienza el curso?', null),
(2, 'Introducción a Java', '¿Qué temas se van a ver en el curso?', null),
(3, 'Programación en C', 'El día de mañana será el parcial', null),
(4, 'Programación Web', '¿Se va a utilizar algún framework en particular?', null),
(5, 'Algoritmos y Estructuras de Datos', 'Hola muchachos, bienvenidos al curso', null);


INSERT INTO Administrador(id,nombre,correo) VALUES
(1, 'Juan Pérez', 'juan.perez@eafit.edu.co'),
(2, 'María Gómez', 'maria.gomez@eafit.edu.co'),
(3, 'Pedro Rodríguez', 'pedro.rodriguez@eafit.edu.co'),
(4, 'Ana García', 'ana.garcia@eafit.edu.co'),
(5, 'Carlos López', 'carlos.lopez@eafit.edu.co');



INSERT INTO Consulta(doc_id, id_curso) VALUES
(123456123, 1),
(234567456, 2),
(345678765, 3),
(456789766, 4),
(567890543, 5);



INSERT INTO Paga(doc_identidad,id_curso,matricula,contraseña) VALUES
(123456789, 1,01, 'Ipipturip_56'),
(234567890, 2 ,02, 'ututututu-35'),
(345678901, 3, 03, 'AlejoMiamor04326');
(456789012, 4, 04, 'MarYJuana.56'),
(567890123, 5, 05, 'Ferxoo2023_');





INSERT INTO Visualizar(id_nodo, id_mat) VALUES
(5, 1),
(4, 2),
(3, 3),
(2, 4),
(1, 5);



INSERT INTO Ver(id_nodo,id_tarea) VALUES
(1,5),
(2,4),
(3,3),
(4,2),
(5,1);


INSERT INTO Entregar(id_nodo,id_tarea) VALUES
(1,5),
(2,4),
(3,3),
(4,2),
(5,1);


	

INSERT INTO Participa(id_nodo,id_foro) VALUES
(5,2),
(4,3),
(3,1),
(2,5),
(1,4);


 INSERT INTO Dicta(doc_id, id_curso) VALUES
(123456123,1),
(234567456,2),
(345678765,3),
(456789766,4),
(567890543,5);


Insert INTO Asigna(doc_id, id) VALUES
(123456123, 1),
(234567456, 2),
(345678765, 3),
(345678765, 4),
(567890543, 5);




INSERT INTO Gestiona(doc_id,id_mat) VALUES
(123456123, 1),
(234567456, 2),
(345678765, 3),
(345678765, 4),
(567890543, 5);


INSERT INTO Encarga(id_tarea, doc_id) VALUES
(1, 123456123),
(2, 234567456),
(3, 345678765),
(4, 345678765),
(5, 567890543);


INSERT INTO Administra (id_foro, doc_id) VALUES
(1, 123456123),
(2, 234567456),
(3, 345678765),
(4, 345678765),
(5, 567890543);


INSERT INTO Remite(id_mensaje,doc_id) VALUES
(3,123456123),
(5,567890543);

INSERT INTO Recibe(id_mensaje,id_foro) VALUES
(1,2),
(2,3),
(4,4),
(3,1),
(5,5);

INSERT INTO Envia(id_mensaje,id_nodo) VALUES
(1,2),
(2,3),
(4,4);



INSERT INTO Tiene (id_foro, id_curso) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);