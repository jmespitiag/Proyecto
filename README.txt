Holiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii!!!!

Consultas:

info cursos:

    select Nombre,categoria from Curso
    


    select Nombre,categoria from Curso
    

    select Profesor.nombre, Profesor.email from Profesor
    inner join Dicta on Profesor.doc_id = Dicta.doc_id
    inner join Curso on Dicta.id_curso = Curso.id_curso
    where id_curso = ""

    select Usuario.nombre, Usuario.email from Usuario
    inner join Paga on Usuario.doc_identidad = Paga.doc_identidad
    inner join Curso on Paga.id_curso = Curso.id_curso
    where id_curso = ""

    select distinct titulo,descripcion, archivo from Material
    inner join Visualizar on Material.id_mat = Visualizar.id_mat
    inner join Gestiona on Material.id_mat = Gestiona.id_mat
    inner join Usuario on Visualizar.id_nodo = Usuario.id_nodo
    inner join Profesor on Gestiona.doc_id = Profesor.doc_id
    inner join Paga on Usuario.doc_identidad = Paga.doc_identidad
    inner join Dicta on Profesor.doc_id = Dicta.doc_id
    inner join Curso on Dicta.id_curso = Curso.id_curso
    where Curso.id_Curso = "" 

    select distinct Tarea.nombre, Tarea.descripcion, Tarea.fecha_e, Tarea.archivo from Tarea inner join Encarga on Tarea.id_tarea = Encarga.id_tarea inner join Profesor on Encarga.doc_id = Profesor.doc_id inner join Dicta on Profesor.doc_id = Dicta.doc_id inner join Curso on Dicta.id_curso = Curso.id_curso where Curso.id_curso = ?

    select distinct Foro.nombre, Foro.descripcion from Foro inner join Tiene on Foro.id_foro = Tiene.id_foro inner join Curso on Tiene.id_curso = Curso.id_curso where Curso.id_curso = ?